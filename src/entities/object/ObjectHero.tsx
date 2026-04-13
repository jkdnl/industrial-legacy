import { Box, Flex, Heading, Text } from '@radix-ui/themes';

export function ObjectHero({ object }) {
  return (
    <Flex direction={{ initial: 'column', lg: 'row' }} gap="6">
      <Box
        className="industrial-panel"
        style={{
          flex: 1.3,
          minHeight: 540,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: object.headline_img_url
              ? `url(${object.headline_img_url})`
              : 'linear-gradient(135deg, var(--app-surface-subtle), transparent)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(0.3) contrast(1.05)',
          }}
        />
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(10, 10, 10, 0.12) 0%, rgba(10, 10, 10, 0.82) 100%)',
          }}
        />

        <Flex
          direction="column"
          justify="end"
          px={{ initial: '4', md: '7' }}
          py={{ initial: '5', md: '7' }}
          style={{ height: '100%', position: 'relative', zIndex: 1 }}
        >
          <Text
            size="1"
            style={{
              color: 'rgba(255,255,255,0.76)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
          >
            Паспорт объекта
          </Text>
          <Heading
            size="9"
            style={{
              color: 'white',
              marginTop: 12,
              textTransform: 'uppercase',
              letterSpacing: '-0.05em',
              maxWidth: 640,
            }}
          >
            {object.name}
          </Heading>
          <Text
            size="3"
            style={{
              color: 'rgba(255,255,255,0.82)',
              marginTop: 16,
              maxWidth: 560,
              lineHeight: 1.7,
            }}
          >
            Индустриальный объект в системе наблюдения, исследования и городской памяти.
          </Text>
        </Flex>
      </Box>

      <Flex
        className="industrial-panel"
        direction="column"
        gap="4"
        px={{ initial: '4', md: '6' }}
        py={{ initial: '5', md: '6' }}
        style={{
          flex: 0.9,
        }}
      >
        <Text className="industrial-eyebrow">Описание и статус</Text>

        <Box className="industrial-meta">
          <Box className="industrial-meta-item">
            <Text className="industrial-meta-label">Тип</Text>
            <Text className="industrial-meta-value">
              {object.type_id ? `Категория #${object.type_id}` : 'Не указан'}
            </Text>
          </Box>
          <Box className="industrial-meta-item">
            <Text className="industrial-meta-label">Город</Text>
            <Text className="industrial-meta-value">
              {object.city_id ? `Город #${object.city_id}` : 'Не указан'}
            </Text>
          </Box>
          <Box className="industrial-meta-item">
            <Text className="industrial-meta-label">Статус</Text>
            <Text className="industrial-meta-value">
              {object.status ? `Состояние #${object.status}` : 'Не указан'}
            </Text>
          </Box>
        </Box>

        <Text
          size="3"
          style={{
            color: 'var(--app-text-secondary)',
            lineHeight: 1.8,
            marginTop: 8,
            whiteSpace: 'pre-wrap',
          }}
        >
          {object.desc || 'Описание объекта будет добавлено после уточнения архивных данных.'}
        </Text>
      </Flex>
    </Flex>
  );
}
