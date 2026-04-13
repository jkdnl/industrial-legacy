import { useMemo, useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';

import { ObjectFilters } from '../features/objectsList/ObjectFilters';
import { ObjectList } from '../features/objectsList/ObjectsList';
import { supabase } from '../shared/lib/supabase';
import { useInfiniteVisibleItems } from '../shared/lib/useInfiniteVisibleItems';
import { Section } from '../shared/ui/Section';
import { Tables } from '../types/supabase';

type ObjectsRouteData = {
  objects: Tables<'objects'>[];
  objectTypes: Tables<'object_types'>[];
};

export const Route = createFileRoute('/objects')({
  loader: async (): Promise<ObjectsRouteData> => {
    const [{ data: objects }, { data: objectTypes }] = await Promise.all([
      supabase.from('objects').select('*'),
      supabase.from('object_types').select('*'),
    ]);

    return {
      objects: objects ?? [],
      objectTypes: objectTypes ?? [],
    };
  },
  component: Page,
});

function Page() {
  const { objects, objectTypes } = Route.useLoaderData();

  const [search, setSearch] = useState('');
  const [activeTypes, setActiveTypes] = useState<number[]>([]);

  function toggleType(id: number) {
    setActiveTypes((prev) =>
      prev.includes(id) ? prev.filter((typeId) => typeId !== id) : [...prev, id],
    );
  }

  const filteredObjects = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return objects.filter((objectItem) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        objectItem.name?.toLowerCase().includes(normalizedSearch) ||
        objectItem.desc?.toLowerCase().includes(normalizedSearch);

      const matchesType =
        activeTypes.length === 0 ||
        (objectItem.type_id != null && activeTypes.includes(objectItem.type_id));

      return matchesSearch && matchesType;
    });
  }, [activeTypes, objects, search]);

  const {
    visibleItems: visibleObjects,
    visibleCount,
    hasMore,
    loadMoreRef,
  } = useInfiniteVisibleItems({
    items: filteredObjects,
    pageSize: 10,
    resetKey: `${search}-${activeTypes.join(',')}`,
  });

  return (
    <Section
      eyebrow="Объекты"
      title="Каталог индустриального наследия"
      description="Список площадок, сооружений и производственных следов, собранный как навигационный архив. Фильтрация и поиск работают как инструмент быстрого просмотра, а не как декоративная надстройка."
    >
      <div
        className="industrial-panel"
        style={{
          padding: 20,
        }}
      >
        <ObjectFilters
          objectTypes={objectTypes}
          search={search}
          setSearch={setSearch}
          activeTypes={activeTypes}
          toggleType={toggleType}
        />
      </div>

      <div
        className="industrial-panel"
        style={{
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            padding: '18px 20px',
            borderBottom: '1px solid var(--app-border)',
          }}
        >
          <span className="industrial-eyebrow">Найдено {filteredObjects.length}</span>
          <span style={{ color: 'var(--app-text-secondary)', fontSize: '0.92rem' }}>
            Показано {visibleObjects.length} из {filteredObjects.length}
          </span>
        </div>
        <div style={{ padding: 20 }}>
          <ObjectList objects={visibleObjects} variant="compact" />
          <div
            ref={loadMoreRef}
            className="industrial-panel"
            style={{
              padding: '16px 18px',
              marginTop: 20,
              textAlign: 'center',
            }}
          >
            <span style={{ color: 'var(--app-text-secondary)', fontSize: '0.92rem' }}>
              {hasMore
                ? `Показано ${visibleCount} объектов. Прокрутите ниже, чтобы загрузить ещё 10.`
                : `Все объекты показаны: ${visibleCount}.`}
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
