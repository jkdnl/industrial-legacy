import { Link } from '@tanstack/react-router';
import { Flex, Box, Heading, Text } from '@radix-ui/themes';

import ThemeToggle from './ThemeToggle';
import { navItems } from '../../shared/constants';

export function Header() {
  return (
    <Box
      position="sticky"
      top="0"
      style={{
        zIndex: 20,
        backdropFilter: 'blur(18px)',
        background: 'rgba(15, 16, 15, 0.02)',
        borderBottom: '1px solid var(--app-border)',
      }}
    >
      <Flex
        align={{ initial: 'start', md: 'center' }}
        justify="between"
        direction={{ initial: 'column', md: 'row' }}
        gap="4"
        px={{ initial: '4', md: '5' }}
        py="4"
        className="app-frame"
        style={{
          paddingTop: 18,
          paddingBottom: 18,
        }}
      >
        <Box>
          <Text className="industrial-eyebrow">Архив индустриального слоя</Text>
          <Heading
            size="6"
            style={{
              marginTop: 6,
              textTransform: 'uppercase',
              letterSpacing: '-0.04em',
            }}
          >
            Индустриальное наследие
          </Heading>
        </Box>

        <Flex align="center" gap="3" wrap="wrap">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{
                style: {
                  borderColor: 'var(--app-accent)',
                  color: 'var(--app-text-primary)',
                  background: 'var(--app-accent-soft)',
                },
              }}
              style={{
                padding: '8px 12px',
                border: '1px solid var(--app-border)',
                color: 'var(--app-text-secondary)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontSize: '0.78rem',
                transition: 'border-color 0.2s ease, background 0.2s ease',
              }}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </Flex>
      </Flex>
    </Box>
  );
}
