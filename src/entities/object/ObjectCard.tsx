import { Box, Flex, Heading, Text } from '@radix-ui/themes';

export function ObjectCard({ obj, index }) {
  const alignment = index % 2 === 0 ? 'start' : 'end';

  return (
    <Box
      className="object-card"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: 340,
        overflow: 'hidden',
        borderTop: '1px solid var(--app-border)',
        borderBottom: '1px solid var(--app-border)',
        marginTop: '-1px',
      }}
    >
      <Box
        className="object-card__image"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: obj.headline_img_url
            ? `url(${obj.headline_img_url})`
            : 'linear-gradient(135deg, var(--app-surface-subtle), transparent)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'transform 0.4s ease',
          filter: 'grayscale(0.28) contrast(1.05)',
        }}
      />

      <Box
        className="object-card__overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(10, 10, 10, 0.82) 0%, rgba(10, 10, 10, 0.42) 44%, rgba(10, 10, 10, 0.16) 100%)',
          transition: 'background 0.3s ease',
        }}
      />

      <Flex
        className="object-card__content"
        direction="column"
        justify="end"
        align={alignment}
        px={{ initial: '4', md: '7' }}
        py={{ initial: '5', md: '7' }}
        style={{
          position: 'relative',
          height: '100%',
          zIndex: 2,
          maxWidth: 960,
          transition: 'transform 0.3s ease',
        }}
      >
        <Text
          size="1"
          style={{
            color: 'rgba(255,255,255,0.72)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            marginBottom: 10,
          }}
        >
          Объект индустриального слоя
        </Text>

        <Heading
          size="8"
          style={{
            color: 'white',
            textTransform: 'uppercase',
            letterSpacing: '-0.05em',
            maxWidth: 620,
          }}
        >
          {obj.name}
        </Heading>

        <Text
          size="3"
          style={{
            color: 'rgba(255,255,255,0.85)',
            maxWidth: 620,
            marginTop: 10,
            lineHeight: 1.55,
          }}
        >
          {obj.desc}
        </Text>
      </Flex>
    </Box>
  );
}
