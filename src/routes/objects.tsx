import { createFileRoute, Outlet } from '@tanstack/react-router';
import * as React from 'react';
import { supabase } from '../../utils/supbase';
import { Tables } from '../supabase';

export const Route = createFileRoute('/objects')({
  component: ObjectsComponent,
  loader: async () => {
    const { data: objects } = await supabase.from('objects').select();
    return { objects };
  },
});

function ObjectsComponent() {
  const data = Route.useLoaderData() as { objects: Tables<'objects'>[] };

  return (
    <>
      <Outlet />
      <div className="p-2">
        <h3>Объекты Индутриального Наследия</h3>
        {/* <div>{JSON.stringify(data)}</div> */}
        <ul>
          {data?.objects?.map((object) => (
            <li key={object.id}>{object.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
