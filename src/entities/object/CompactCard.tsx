import { Card, Flex, Heading, Text, Box } from '@radix-ui/themes';

export function ObjectCardCompact({ object }) {
  return (
    <Card
      className="object-card-compact"
      style={{
        background: 'var(--app-surface)',
        border: '1px solid var(--app-border)',
        overflow: 'hidden',
        transition:
          'transform 0.22s ease, border-color 0.22s ease, background 0.22s ease',
        minHeight: 100,
      }}
    >
      <Flex gap="4" align="stretch">
        <Box
          style={{
            width: 132,
            minWidth: 132,
            backgroundImage: object.headline_img_url
              ? `url(${object.headline_img_url})`
              : 'linear-gradient(135deg, var(--app-surface-subtle), transparent)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(0.24)',
          }}
        />

        <Flex direction="column" gap="3" p="4" style={{ minWidth: 0, flex: 1 }}>
          <Text
            size="1"
            style={{
              color: 'var(--app-accent)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            Объект
          </Text>
          <Heading
            size="4"
            style={{
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}
          >
            {object.name}
          </Heading>
          <Text
            size="2"
            style={{
              color: 'var(--app-text-secondary)',
              lineHeight: 1.55,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {object.desc || 'Описание объекта будет добавлено позже.'}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}
