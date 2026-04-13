import { Theme } from '@radix-ui/themes';
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

type ThemeMode = 'light' | 'dark' | 'auto';

type ThemeContextValue = {
  mode: ThemeMode;
  resolvedMode: 'light' | 'dark';
  setMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
}

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('auto');
  const [systemMode, setSystemMode] = useState<'light' | 'dark'>(() =>
    getSystemTheme(),
  );

  useEffect(() => {
    const stored = localStorage.getItem('theme') as ThemeMode;
    if (stored) setMode(stored);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => setSystemMode(mediaQuery.matches ? 'dark' : 'light');

    onChange();
    mediaQuery.addEventListener('change', onChange);

    return () => mediaQuery.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  const resolvedMode = mode === 'auto' ? systemMode : mode;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedMode);
  }, [resolvedMode]);

  const value = useMemo(
    () => ({
      mode,
      resolvedMode,
      setMode,
    }),
    [mode, resolvedMode],
  );

  return (
    <Theme
      appearance={resolvedMode}
      accentColor="amber"
      grayColor="sand"
      radius="none"
    >
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </Theme>
  );
}
