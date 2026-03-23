import { createFileRoute, Outlet } from '@tanstack/react-router';
import * as React from 'react';
import { supabase } from '../../utils/supbase';
import { Tables } from '../supabase';

export const Route = createFileRoute('/events')({
  component: ObjectsComponent,
  loader: async () => {
    const { data: objects } = await supabase.from('events').select();
    return { objects };
  },
});

function ObjectsComponent() {
  const data = Route.useLoaderData() as { objects: Tables<'events'>[] };

  return (
    <>
      <Outlet />
      <div className="p-2">
        <h3>Мероприятия</h3>
        {/* <div>{JSON.stringify(data)}</div> */}
        <ul>
          {data?.objects?.map((event) => (
            <li key={event.id}>{event.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
