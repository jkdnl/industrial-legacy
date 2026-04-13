import { Grid } from '@radix-ui/themes';

export function AppGrid({ children, columns }) {
  return (
    <Grid
      columns={
        columns ?? {
          initial: '1',
          sm: '2',
          lg: '2',
        }
      }
      gap={{ initial: '4', md: '6' }}
    >
      {children}
    </Grid>
  );
}
