// src/features/theme/ThemeToggle.tsx

import { IconButton } from '@radix-ui/themes';
import { SunIcon, MoonIcon, DesktopIcon } from '@radix-ui/react-icons';
import { useTheme } from '../../app/providers/ThemeProvider';

export default function ThemeToggle() {
  const { mode, resolvedMode, setMode } = useTheme();

  function toggleMode() {
    const next = mode === 'light' ? 'dark' : mode === 'dark' ? 'auto' : 'light';

    setMode(next);
  }

  const icon =
    mode === 'light' ? (
      <SunIcon />
    ) : mode === 'dark' ? (
      <MoonIcon />
    ) : (
      <DesktopIcon />
    );

  return (
    <IconButton
      variant="soft"
      color={resolvedMode === 'dark' ? 'gray' : 'amber'}
      onClick={toggleMode}
      aria-label={`Тема: ${mode}`}
      style={{
        border: '1px solid var(--app-border)',
        background: 'var(--app-surface)',
      }}
    >
      {icon}
    </IconButton>
  );
}
