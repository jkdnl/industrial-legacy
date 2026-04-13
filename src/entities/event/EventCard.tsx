import { Card, Flex, Heading, Text, Box } from '@radix-ui/themes';

export function EventCard({ event }) {
  const start = event.start_at
    ? new Date(event.start_at).toLocaleString('ru-RU', {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
      })
    : 'Время уточняется';
  const end = event.end_at
    ? new Date(event.end_at).toLocaleString('ru-RU', {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
      })
    : null;

  return (
    <Card
      className="event-card"
      style={{
        position: 'relative',
        minHeight: 280,
        border: '1px solid var(--app-border)',
        background:
          'linear-gradient(180deg, var(--app-surface-subtle), transparent 36%), var(--app-surface)',
        transition:
          'transform 0.22s ease, background 0.22s ease, border-color 0.22s ease',
        overflow: 'hidden',
      }}
    >
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, var(--app-accent-soft), transparent 34%)',
          pointerEvents: 'none',
        }}
      />
      <Flex direction="column" gap="4" style={{ position: 'relative', zIndex: 1 }}>
        <Text
          size="1"
          style={{
            color: 'var(--app-accent)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          {start}
          {end ? ` — ${end}` : ''}
        </Text>

        <Text
          size="1"
          style={{
            color: 'var(--app-text-muted)',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}
        >
          Мероприятие / Событие
        </Text>

        <Heading
          size="6"
          style={{
            textTransform: 'uppercase',
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
        >
          {event.name}
        </Heading>

        <Text
          size="2"
          style={{
            color: 'var(--app-text-secondary)',
            minHeight: 40,
          }}
        >
          {event.address || 'Адрес уточняется'}
        </Text>

        <Box
          style={{
            height: 1,
            background: 'var(--app-border)',
          }}
        />

        <Text size="3" style={{ color: 'var(--app-text-secondary)', lineHeight: 1.65 }}>
          {event.desc || 'Описание будет опубликовано позже.'}
        </Text>
      </Flex>
    </Card>
  );
}
