import { createFileRoute } from '@tanstack/react-router';
import { supabase } from '../shared/lib/supabase';
import { ObjectHero } from '../entities/object/ObjectHero';

export const Route = createFileRoute('/objects_/$objectId')({
  loader: async ({ params }) => {
    const { data: object } = await supabase
      .from('objects')
      .select('*')
      .eq('id', Number(params.objectId))
      .single();

    return { object };
  },
  component: Page,
});

function Page() {
  const { object } = Route.useLoaderData();

  return <ObjectHero object={object} />;
}
