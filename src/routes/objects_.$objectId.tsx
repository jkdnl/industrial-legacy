import { createFileRoute } from '@tanstack/react-router';
import { supabase } from '../../utils/supbase';
import { Tables } from '../supabase';

export const Route = createFileRoute('/objects_/$objectId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const { data: object } = await supabase
      .from(`objects`)
      .select('*')
      .eq('id', Number(params.objectId))
      .single();
    return { object };
  },
});

function RouteComponent() {
  const data = Route.useLoaderData() as { object: Tables<'objects'> };

  const { object } = data;

  return (
    <>
      <div className="w-screen h-screen m-auto py-4 flex overflow-hidden">
        <div
          style={{
            backgroundImage: `url(${object.headline_img_url})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            // backgroundSize: '100% 100%',
            height: '80vh',
            width: '60%',
          }}
          className={`h-full flex flex-col-reverse overflow-hidden`}
        >
          <div
            className={`flex flex-col py-2 align-center justify-center text-center h-fit bg-gray-800/40 w-full transition`}
          >
            <h2 className="text-4xl font-bold">{object.name}</h2>
          </div>
        </div>
        <div className="overflow-auto h-full bg-indigo-400 w-[40%] flex flex-col gap-4 pl-6 py-4 pr-2">
          <p>{object.desc}</p>
          {/* {Array.from(Array(400)).map((b, i) => (
            <div key={i}>{i}</div>
          ))} */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ab
          quisquam unde sit, fugit pariatur, provident blanditiis non asperiores
          dolorem autem facilis et alias nulla rem exercitationem sint omnis at
          fugiat. Dignissimos quisquam perferendis beatae illo aspernatur
          eveniet illum itaque at enim reprehenderit excepturi placeat
          blanditiis, cupiditate aliquid hic harum nulla! Aut ad ex assumenda
          dignissimos officiis maiores repudiandae itaque est labore culpa? Sint
          labore illo nesciunt blanditiis recusandae repudiandae reprehenderit
          odit enim earum nostrum dolor distinctio eum error quisquam dicta
          animi consequatur cupiditate neque, nihil quaerat sapiente harum
          provident ex? Molestiae alias, sit qui dolore molestias reprehenderit
          placeat quam? Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Molestias delectus laboriosam quae tenetur maxime, totam rem,
          iusto voluptatibus in eveniet quas accusamus! Error doloremque
          exercitationem sint vitae ipsam ab dignissimos laboriosam, ut soluta
          sapiente? Culpa doloremque vero soluta fuga, ipsum adipisci, porro
          facere cumque ab commodi eum odio, impedit distinctio maiores
          exercitationem enim dolorem iusto ex magni eligendi! Quia, recusandae
          totam? Exercitationem, repellendus.
          <br />
          <hr />
          Animi minus eligendi quas dolorum facere. Quod minima excepturi ipsam
          at nesciunt dignissimos! Perferendis mollitia repellat voluptatum.
          Quasi eligendi esse harum sunt optio minima dolores consequuntur
          alias. Ea, iste. Possimus aliquid error rem saepe, illum quisquam
          cupiditate excepturi commodi officiis, ad, deserunt eligendi inventore
          nam. Ad temporibus error perspiciatis, accusamus atque recusandae
          itaque ea velit sunt dolores enim iure incidunt est accusantium
          nostrum harum consectetur repudiandae beatae totam! Tenetur vel eos
          exercitationem blanditiis, quod inventore porro sint id veritatis
          expedita odio, dolore fuga aliquam deleniti nemo aliquid rem neque
          maxime, delectus fugit! Iste rerum dolor, ducimus praesentium quas
          itaque consequuntur accusantium distinctio voluptatibus quidem
          voluptate sunt laudantium illum repellendus quis debitis laborum
          nostrum alias fugiat vero sint aliquam officiis dolores tempora.
          Provident, ipsum aut molestias cumque consequuntur eum nesciunt autem?
          Cum voluptatem eos harum commodi necessitatibus impedit!
          <br />
          <hr />
          Animi minus eligendi quas dolorum facere. Quod minima excepturi ipsam
          at nesciunt dignissimos! Perferendis mollitia repellat voluptatum.
          Quasi eligendi esse harum sunt optio minima dolores consequuntur
          alias. Ea, iste. Possimus aliquid error rem saepe, illum quisquam
          cupiditate excepturi commodi officiis, ad, deserunt eligendi inventore
          nam. Ad temporibus error perspiciatis, accusamus atque recusandae
          itaque ea velit sunt dolores enim iure incidunt est accusantium
          nostrum harum consectetur repudiandae beatae totam! Tenetur vel eos
          exercitationem blanditiis, quod inventore porro sint id veritatis
          expedita odio, dolore fuga aliquam deleniti nemo aliquid rem neque
          maxime, delectus fugit! Iste rerum dolor, ducimus praesentium quas
          itaque consequuntur accusantium distinctio voluptatibus quidem
          voluptate sunt laudantium illum repellendus quis debitis laborum
          nostrum alias fugiat vero sint aliquam officiis dolores tempora.
          Provident, ipsum aut molestias cumque consequuntur eum nesciunt autem?
          Cum voluptatem eos harum commodi necessitatibus impedit!
        </div>
      </div>
    </>
  );
}
