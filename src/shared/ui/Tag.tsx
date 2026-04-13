import { Box, Text } from '@radix-ui/themes';

export function Tag({ children, active, ...props }) {
  return (
    <Box
      className="tag"
      {...props}
      style={{
        padding: '8px 12px',
        border: '1px solid var(--app-border)',
        background: active ? 'var(--app-accent-soft)' : 'var(--app-surface)',
        color: active ? 'var(--app-accent-strong)' : 'inherit',
        cursor: 'pointer',
        transition:
          'border-color 0.2s ease, transform 0.2s ease, background 0.2s ease',
      }}
    >
      <Text size="2" style={{ letterSpacing: '0.04em', textTransform: 'uppercase' }}>
        {children}
      </Text>
    </Box>
  );
}
