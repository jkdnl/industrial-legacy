import { createFileRoute } from '@tanstack/react-router';
import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import { Tables } from '../types/supabase';
import { supabase } from '../shared/lib/supabase';

export const Route = createFileRoute('/events_/$eventId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const { data: event } = await supabase
      .from(`events`)
      .select('*')
      .eq('id', Number(params.eventId))
      .single();
    return { event };
  },
});

function RouteComponent() {
  const data = Route.useLoaderData() as { event: Tables<'events'> };

  const { event } = data;
  const schedule = event.start_at
    ? new Date(event.start_at).toLocaleString('ru-RU', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : 'Дата уточняется';
  const end = event.end_at
    ? new Date(event.end_at).toLocaleString('ru-RU', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : 'Без финального времени';

  return (
    <Flex direction="column" gap="6">
      <Box
        className="industrial-panel event-hero-panel"
        style={{
          padding: '28px 24px',
          background:
            'linear-gradient(135deg, var(--app-accent-soft), transparent 38%), var(--app-surface)',
        }}
      >
        <Text className="industrial-eyebrow">Карточка мероприятия</Text>
        <Heading
          size="9"
          style={{
            marginTop: 12,
            textTransform: 'uppercase',
            letterSpacing: '-0.05em',
            maxWidth: 820,
          }}
        >
          {event?.name || 'Мероприятие'}
        </Heading>
        <Text
          size="3"
          style={{
            display: 'block',
            marginTop: 16,
            maxWidth: 780,
            color: 'var(--app-text-secondary)',
            lineHeight: 1.7,
          }}
        >
          {event.desc || 'Описание мероприятия будет добавлено позже.'}
        </Text>
      </Box>

      <Flex direction={{ initial: 'column', lg: 'row' }} gap="6" align="stretch">
        <Box
          className="industrial-panel event-detail-panel"
          style={{
            flex: 1.4,
            padding: '24px 20px',
          }}
        >
          <Text className="industrial-eyebrow">Описание и контекст</Text>
          <Text
            size="3"
            style={{
              display: 'block',
              marginTop: 18,
              color: 'var(--app-text-secondary)',
              lineHeight: 1.8,
              whiteSpace: 'pre-wrap',
            }}
          >
            {event.desc || 'Подробное описание будет добавлено после уточнения программы.'}
          </Text>
        </Box>

        <Box
          className="industrial-panel event-detail-panel"
          style={{
            flex: 0.9,
            padding: '24px 20px',
          }}
        >
          <Text className="industrial-eyebrow">Служебные данные</Text>
          <Box className="industrial-meta" style={{ marginTop: 18 }}>
            <Box className="industrial-meta-item">
              <Text className="industrial-meta-label">Старт</Text>
              <Text className="industrial-meta-value">{schedule}</Text>
            </Box>
            <Box className="industrial-meta-item">
              <Text className="industrial-meta-label">Финиш</Text>
              <Text className="industrial-meta-value">{end}</Text>
            </Box>
            <Box className="industrial-meta-item">
              <Text className="industrial-meta-label">Адрес</Text>
              <Text className="industrial-meta-value">
                {event.address || 'Адрес уточняется'}
              </Text>
            </Box>
            <Box className="industrial-meta-item">
              <Text className="industrial-meta-label">Формат</Text>
              <Text className="industrial-meta-value">
                {event.format_id ? `Тип #${event.format_id}` : 'Не указан'}
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
