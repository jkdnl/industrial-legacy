// src/app/index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import '@radix-ui/themes/styles.css';
import './shared/styles/global.css';
import { routeTree } from './routeTree.gen';
import { ThemeProvider } from './app/providers/ThemeProvider';

const deploymentBasepath = '/industrial-legacy';
const basepath = window.location.pathname.startsWith(deploymentBasepath)
  ? deploymentBasepath
  : '/';

const router = createRouter({
  routeTree,
  basepath,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
