import { createFileRoute, useNavigate } from '@tanstack/react-router';

import { ObjectFilters } from '../features/objectsList/ObjectFilters';
import { ObjectList } from '../features/objectsList/ObjectsList';
import { supabase } from '../shared/lib/supabase';
import { useInfiniteVisibleItems } from '../shared/lib/useInfiniteVisibleItems';
import {
  serializeObjectsSearch,
  validateObjectsSearch,
  type ObjectsSearchState,
} from '../shared/lib/objectFilters';
import { Section } from '../shared/ui/Section';
import { Tables } from '../types/supabase';

type ObjectListItem = Tables<'objects'> & {
  statusRef: { name: string } | null;
  typeRef: { name: string } | null;
  cityRef: { name: string } | null;
  statusLabel: string | null;
  typeLabel: string | null;
  cityLabel: string | null;
};

type ObjectsRouteData = {
  objects: ObjectListItem[];
  objectTypes: Tables<'object_types'>[];
  statuses: Tables<'object_status'>[];
  cities: Tables<'cities'>[];
};

async function loadObjects({
  deps,
}: {
  deps: ObjectsSearchState;
}): Promise<ObjectsRouteData> {
  let objectsQuery = supabase.from('objects').select(`
      *,
      statusRef:object_status(name),
      typeRef:object_types(name),
      cityRef:cities(name)
    `);

  if (deps.q.trim().length > 0) {
    const query = deps.q.trim();
    objectsQuery = objectsQuery.or(
      `name.ilike.%${query}%,desc.ilike.%${query}%`,
    );
  }

  if (deps.typeIds.length > 0) {
    objectsQuery = objectsQuery.in('type_id', deps.typeIds);
  }

  if (deps.statusIds.length > 0) {
    objectsQuery = objectsQuery.in('status', deps.statusIds);
  }

  if (deps.cityIds.length > 0) {
    objectsQuery = objectsQuery.in('city_id', deps.cityIds);
  }

  const [
    { data: objects },
    { data: objectTypes },
    { data: statuses },
    { data: cities },
  ] = await Promise.all([
    objectsQuery.order('name'),
    supabase.from('object_types').select('*').order('name'),
    supabase.from('object_status').select('*').order('name'),
    supabase.from('cities').select('*').order('name'),
  ]);

  const normalizedObjects =
    (
      objects as
        | (Tables<'objects'> & {
            statusRef: { name: string } | null;
            typeRef: { name: string } | null;
            cityRef: { name: string } | null;
          })[]
        | null
    )?.map((objectItem) => ({
      ...objectItem,
      statusLabel: objectItem.statusRef?.name ?? null,
      typeLabel: objectItem.typeRef?.name ?? null,
      cityLabel: objectItem.cityRef?.name ?? null,
    })) ?? [];

  return {
    objects: normalizedObjects,
    objectTypes: objectTypes ?? [],
    statuses: statuses ?? [],
    cities: cities ?? [],
  };
}

export const Route = createFileRoute('/objects')({
  validateSearch: validateObjectsSearch,
  loaderDeps: ({ search }) => search,
  loader: loadObjects,
  component: Page,
});

function Page() {
  const { objects, objectTypes, statuses, cities } = Route.useLoaderData();
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const {
    visibleItems: visibleObjects,
    visibleCount,
    hasMore,
    loadMoreRef,
  } = useInfiniteVisibleItems({
    items: objects,
    pageSize: 10,
    resetKey: JSON.stringify(search),
  });

  return (
    <Section
      eyebrow="Объекты"
      title="Каталог индустриального наследия"
      description="Каталог собирает объекты по типу, состоянию и городу, чтобы быстрее находить площадки с нужной историей и текущим контекстом."
    >
      <div
        className="industrial-panel"
        style={{
          padding: 20,
        }}
      >
        <ObjectFilters
          objectTypes={objectTypes}
          statuses={statuses}
          cities={cities}
          search={search}
          onApply={(nextSearch) =>
            navigate({
              search: serializeObjectsSearch(nextSearch),
              replace: true,
            })
          }
          onReset={() =>
            navigate({
              search: {},
              replace: true,
            })
          }
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
          <span className="industrial-eyebrow">Найдено {objects.length}</span>
          <span
            style={{ color: 'var(--app-text-secondary)', fontSize: '0.92rem' }}
          >
            Показано {visibleObjects.length} из {objects.length}
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
            <span
              style={{
                color: 'var(--app-text-secondary)',
                fontSize: '0.92rem',
              }}
            >
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
