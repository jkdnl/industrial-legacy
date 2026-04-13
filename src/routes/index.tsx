import { createFileRoute } from '@tanstack/react-router';
import { Flex } from '@radix-ui/themes';
import { supabase } from '../shared/lib/supabase';
import { ObjectList } from '../features/objectsList/ObjectsList';
import { EventList } from '../features/eventsList/EventsList';

export const Route = createFileRoute('/')({
  loader: async () => {
    const { data: objects } = await supabase.rpc('get_random_items');
    const { data: events } = await supabase.from('events').select();
    return { objects, events };
  },
  component: Home,
});

function Home() {
  const { objects, events } = Route.useLoaderData();

  return (
    <Flex direction="column" gap="9">
      <Flex gap="0">
        <ObjectList objects={objects} />
      </Flex>
      <EventList events={events} />
    </Flex>
  );
}
