import { createFileRoute } from '@tanstack/react-router';
import { supabase } from '../shared/lib/supabase';
import { useInfiniteVisibleItems } from '../shared/lib/useInfiniteVisibleItems';
import { Tables } from '../types/supabase';
import { EventList } from '../features/eventsList/EventsList';
import { Section } from '../shared/ui/Section';

export const Route = createFileRoute('/events')({
  component: EventsPage,
  loader: async () => {
    const { data: events } = await supabase
      .from('events')
      .select('*')
      .order('start_at', { ascending: true });

    return { events: events ?? [] };
  },
});

function EventsPage() {
  const { events } = Route.useLoaderData() as { events: Tables<'events'>[] };
  const {
    visibleItems,
    visibleCount,
    hasMore,
    loadMoreRef,
  } = useInfiniteVisibleItems({
    items: events,
    pageSize: 10,
    resetKey: events.length,
  });

  return (
    <Section
      eyebrow="Программа"
      title="Сетка мероприятий"
      description="Хронологическая витрина событий вокруг индустриального наследия. Подача собрана как спокойная диспетчерская доска: дата, локация, формат и краткое содержание."
    >
      <div
        className="industrial-panel"
        style={{
          padding: '18px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          gap: 16,
          flexWrap: 'wrap',
        }}
      >
        <span className="industrial-eyebrow">Событий в архиве: {events.length}</span>
        <span style={{ color: 'var(--app-text-secondary)', fontSize: '0.92rem' }}>
          Показано {visibleItems.length} из {events.length}
        </span>
      </div>
      <EventList
        events={visibleItems}
        embedded
        hasMore={hasMore}
        loadMoreRef={loadMoreRef}
        visibleCount={visibleCount}
      />
    </Section>
  );
}
