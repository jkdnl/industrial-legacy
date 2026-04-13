import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Flex, Box } from '@radix-ui/themes';

import { Header } from '../features/navigation/Header';
import Footer from '../features/navigation/Footer';

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <Flex direction="column" minHeight="100vh" className="app-shell">
      <Box
        className="app-main"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />
        <Box flexGrow="1" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="app-frame">
            <Outlet />
          </div>
        </Box>
        <Footer />
      </Box>
    </Flex>
  );
}
