import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Flex, Box, Heading, Text, IconButton } from '@radix-ui/themes';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';

import ThemeToggle from './ThemeToggle';
import { navItems } from '../../shared/constants';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

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
        <Box className="header-brand">
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

        <Flex align="center" gap="3" className="header-actions">
          <Flex align="center" gap="3" wrap="wrap" className="header-nav header-nav--desktop">
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
                className="header-nav__link"
              >
                {item.name}
              </Link>
            ))}
          </Flex>

          <IconButton
            variant="soft"
            className="header-menu-toggle"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            style={{
              border: '1px solid var(--app-border)',
              background: 'var(--app-surface)',
            }}
          >
            {menuOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
          </IconButton>
          <ThemeToggle />
        </Flex>
      </Flex>

      <Box
        className={`mobile-nav-overlay${menuOpen ? ' mobile-nav-overlay--open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />
      <Box className={`mobile-nav${menuOpen ? ' mobile-nav--open' : ''}`}>
        <Flex direction="column" gap="3">
          <Text className="industrial-eyebrow">Навигация</Text>
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              activeProps={{
                style: {
                  borderColor: 'var(--app-accent)',
                  color: 'var(--app-text-primary)',
                  background: 'var(--app-accent-soft)',
                },
              }}
              className="mobile-nav__link"
              style={{
                padding: '14px 16px',
                border: '1px solid var(--app-border)',
                color: 'var(--app-text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontSize: '0.85rem',
              }}
            >
              {item.name}
            </Link>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
