import { createFileRoute } from '@tanstack/react-router';
import * as React from 'react';
import { supabase } from '../../utils/supbase';
import { Tables } from '../supabase';

export const Route = createFileRoute('/')({
  component: HomeComponent,
  loader: async () => {
    const { data: objects } = await supabase.from('objects').select();
    return { objects };
  },
});

function HomeComponent() {
  const objects = Route.useLoaderData() as Tables<'objects'>[];

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <div>{JSON.stringify(objects)}</div>
    </div>
  );
}
