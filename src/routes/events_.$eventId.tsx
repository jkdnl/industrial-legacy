import { createFileRoute } from '@tanstack/react-router';
import { supabase } from '../../utils/supbase';
import { Tables } from '../supabase';

export const Route = createFileRoute('/events_/$eventId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const { data: event } = await supabase
      .from(`events`)
      .select('*')
      .eq('id', Number(params.eventId))
      .single();
    return { event };
  },
});

function RouteComponent() {
  const data = Route.useLoaderData() as { event: Tables<'events'> };

  const { event } = data;

  return (
    <>
      <div className="max-w-[1200px] h-screen m-auto py-4 flex flex-col gap-4">
        <div
          style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            // backgroundSize: '100% 100%',
            height: '400px',
            width: '100%',
          }}
          className={`h-full flex flex-col-reverse bg-white/10`}
        >
          <div
            className={`flex flex-col py-2 align-center justify-center text-center h-fit w-full transition`}
          >
            <h2 className="text-4xl font-bold">{event?.name || ''}</h2>
          </div>
        </div>
        <div className="flex gap-4 w-full">
          <div className="overflow-auto h-full flex flex-col gap-4 max-w-[800px] py-4 px-2">
            <p>{event.desc}</p>
            <br />
            <hr />
            Animi minus eligendi quas dolorum facere. Quod minima excepturi
            ipsam at nesciunt dignissimos! Perferendis mollitia repellat
            voluptatum. Quasi eligendi esse harum sunt optio minima dolores
            consequuntur alias. Ea, iste. Possimus aliquid error rem saepe,
            illum quisquam cupiditate excepturi commodi officiis, ad, deserunt
            eligendi inventore nam. Ad temporibus error perspiciatis, accusamus
            atque recusandae itaque ea velit sunt dolores enim iure incidunt est
            accusantium nostrum harum consectetur repudiandae beatae totam!
            Tenetur vel eos exercitationem blanditiis, quod inventore porro sint
            id veritatis expedita odio, dolore fuga aliquam deleniti nemo
            aliquid rem neque maxime, delectus fugit! Iste rerum dolor, ducimus
            praesentium quas itaque consequuntur accusantium distinctio
            voluptatibus quidem voluptate sunt laudantium illum repellendus quis
            debitis laborum nostrum alias fugiat vero sint aliquam officiis
            dolores tempora. Provident, ipsum aut molestias cumque consequuntur
            eum nesciunt autem? Cum voluptatem eos harum commodi necessitatibus
            impedit!
            <br />
            <hr />
            Animi minus eligendi quas dolorum facere. Quod minima excepturi
            ipsam at nesciunt dignissimos! Perferendis mollitia repellat
            voluptatum. Quasi eligendi esse harum sunt optio minima dolores
            consequuntur alias. Ea, iste. Possimus aliquid error rem saepe,
            illum quisquam cupiditate excepturi commodi officiis, ad, deserunt
            eligendi inventore nam. Ad temporibus error perspiciatis, accusamus
            atque recusandae itaque ea velit sunt dolores enim iure incidunt est
            accusantium nostrum harum consectetur repudiandae beatae totam!
            Tenetur vel eos exercitationem blanditiis, quod inventore porro sint
            id veritatis expedita odio, dolore fuga aliquam deleniti nemo
            aliquid rem neque maxime, delectus fugit! Iste rerum dolor, ducimus
            praesentium quas itaque consequuntur accusantium distinctio
            voluptatibus quidem voluptate sunt laudantium illum repellendus quis
            debitis laborum nostrum alias fugiat vero sint aliquam officiis
            dolores tempora. Provident, ipsum aut molestias cumque consequuntur
            eum nesciunt autem? Cum voluptatem eos harum commodi necessitatibus
            impedit!
          </div>
          <div className="bg-white text-indigo-500 w-[400px] mb-10">dsa</div>
        </div>
      </div>
    </>
  );
}
