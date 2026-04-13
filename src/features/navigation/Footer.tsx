import { Box, Flex, Text } from '@radix-ui/themes';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      as="footer"
      style={{
        marginTop: 'auto',
        borderTop: '1px solid var(--app-border)',
        background: 'var(--app-surface)',
      }}
    >
      <div className="app-frame" style={{ paddingTop: 24, paddingBottom: 24 }}>
        <Flex
          direction={{ initial: 'column', sm: 'row' }}
          align={{ initial: 'start', sm: 'center' }}
          justify="between"
          gap="4"
        >
          <Box>
            <Text className="industrial-eyebrow">Полевой архив</Text>
            <Text size="2" style={{ color: 'var(--app-text-secondary)', display: 'block' }}>
              © {year} Индустриальное наследие. Каталог объектов и событий.
            </Text>
          </Box>

          <Text size="1" style={{ color: 'var(--app-text-muted)', maxWidth: 320 }}>
            Светлая и тёмная тема используют один индустриальный набор токенов:
            контрастный металл, тёплый сигнальный акцент и спокойную сетку.
          </Text>
        </Flex>
      </div>
    </Box>
  );
}
