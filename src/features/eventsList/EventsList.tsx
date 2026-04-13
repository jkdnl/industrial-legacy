import { Link } from '@tanstack/react-router';
import { AppGrid } from '../../shared/ui/AppGrid';
import { EventCard } from '../../entities/event/EventCard';
import { Section } from '../../shared/ui/Section';
import { Text } from '@radix-ui/themes';

export function EventList({
  events,
  embedded = false,
  hasMore = false,
  loadMoreRef,
  visibleCount,
}) {
  const content = (
    <>
      <AppGrid>
        {events?.map((event) => (
          <Link
            key={event.id}
            to="/events/$eventId"
            params={{ eventId: event.id }}
          >
            <EventCard event={event} />
          </Link>
        ))}
      </AppGrid>

      {(hasMore || visibleCount != null) && (
        <div
          ref={loadMoreRef}
          className="industrial-panel"
          style={{
            padding: '16px 18px',
            marginTop: 20,
            textAlign: 'center',
          }}
        >
          <Text size="2" style={{ color: 'var(--app-text-secondary)' }}>
            {hasMore
              ? `Показано ${visibleCount} записей. Прокрутите ниже для загрузки следующих.`
              : `Показаны все записи: ${visibleCount}.`}
          </Text>
        </div>
      )}
    </>
  );

  if (embedded) {
    return content;
  }

  return (
    <Section
      eyebrow="События"
      title="Ближайшие мероприятия"
      description="Подборка встреч, экскурсий и публичных событий вокруг индустриальных площадок. Каждая карточка построена как короткая диспетчерская сводка."
    >
      {content}
    </Section>
  );
}
