import { Box, Text } from '@radix-ui/themes';

export function MapPlaceholder() {
  return (
    <Box
      className="industrial-panel"
      style={{
        height: 300,
        background:
          'linear-gradient(135deg, var(--app-surface-subtle), transparent 65%), var(--app-surface)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <Text
        size="2"
        style={{
          color: 'var(--app-text-secondary)',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
        }}
      >
        Карта и география объектов
      </Text>
    </Box>
  );
}
