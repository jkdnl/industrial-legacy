import * as React from 'react';
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="p-2 flex gap-8 text-lg sticky top-0 align-center justify-center flex w-full">
        <Link
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Главная
        </Link>{' '}
        <Link
          to="/about"
          activeProps={{
            className: 'font-bold',
          }}
        >
          О проекте
        </Link>{' '}
        <Link
          to="/objects"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Объекты
        </Link>
        <Link
          to="/events"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Мероприятия
        </Link>
        <Link
          to="/contants"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Контакты
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
}
