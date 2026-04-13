import { Theme } from '@radix-ui/themes';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <Theme accentColor="sky" grayColor="sage" radius="none" appearance="light">
      {children}
    </Theme>
  );
}
