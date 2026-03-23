import { createFileRoute, Link } from '@tanstack/react-router';
import * as React from 'react';
import { supabase } from '../../utils/supbase';
import { Tables } from '../supabase';

export const Route = createFileRoute('/')({
  component: HomeComponent,
  loader: async () => {
    const { data: objects } = await supabase.from('objects').select();
    const { data: events } = await supabase.from('events').select();
    return { objects, events };
  },
});

function HomeComponent() {
  const data = Route.useLoaderData() as {
    objects: Tables<'objects'>[];
    events: Tables<'events'>[];
  };

  return (
    <div className="flex flex-col gap-20 width-full pb-20">
      <section className="align-center justify-center py-40 pr-10 text-5xl text-right">
        <h1>
          Независимый проект <br /> Индустриальное{' '}
          <span className="font-bold bg-pink-400/40">наследие</span> России
        </h1>
      </section>
      <section className="w-full h-full flex flex-col">
        {data?.objects?.map((obj, index) => {
          const { headline_img_url, id } = obj;
          return (
            <Link
              to={'/objects/$objectId'}
              params={{ objectId: id }}
              key={id}
              style={{
                backgroundImage: `url(${headline_img_url})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                // backgroundSize: '100% 100%',
                height: '30vh',
                width: '100%',
              }}
              className={`w-full height-[30vh] gap-6 odd:justify-end odd:text-right flex border-b-4 border-b-black hover:cursor-pointer `}
            >
              <div
                className={`flex flex-col py-8 px-4 w-full transition ${
                  index % 2 === 0
                    ? 'bg-gradient-to-r from-indigo-200/20 via-purple-300/30 to-pink-400/40 hover:via-purple-300/60 hover:to-pink-400/80'
                    : 'bg-gradient-to-r from-pink-400/40 via-purple-300/30 to-indigo-200/20 hover:via-purple-300/60 hover:from-pink-400/80'
                }`}
              >
                <h2 className="text-4xl font-bold">{obj.name}</h2>
                <p>{obj.desc}</p>
              </div>
            </Link>
          );
        })}
      </section>

      <section className="w-full h-full flex gap-10 align-center justify-center">
        {data?.events?.map((event, index) => {
          const { name, desc, address, id } = event;
          return (
            <Link
              to={'/events/$eventId'}
              params={{ objectId: id }}
              key={id}
              // style={{
              //   backgroundImage: `url(${headline_img_url})`,
              //   backgroundSize: 'cover',
              //   backgroundRepeat: 'no-repeat',
              //   backgroundPosition: 'center',
              //   // backgroundSize: '100% 100%',
              //   height: '30vh',
              //   width: '100%',
              // }}
              className={`w-[400px] h-[600px] bg-white relative z-1 hover:bg-indigo-500/50`}
            >
              <div className="absolute -bottom-4 -right-4 bg-indigo-500 w-full h-full z-2 p-4 gap-4 flex flex-col">
                <h2 className="text-2xl">{event.name}</h2>
                <div className="flex w-full justyfy-between align-center opacity-50 ">
                  <span className="w-full">
                    {new Date(event.start_at).toLocaleString('ru-RU')}
                  </span>
                  <span className="w-full">-</span>
                  <span className="w-full">
                    {new Date(event.end_at).toLocaleString('ru-RU')}
                  </span>
                </div>
                <span className="text-right">{event.address}</span>
                <span>{event.desc}</span>
              </div>
            </Link>
          );
        })}
        {data?.events?.map((event, index) => {
          const { name, desc, address, id } = event;
          return (
            <Link
              to={'/events/$eventId'}
              params={{ objectId: id }}
              key={id}
              // style={{
              //   backgroundImage: `url(${headline_img_url})`,
              //   backgroundSize: 'cover',
              //   backgroundRepeat: 'no-repeat',
              //   backgroundPosition: 'center',
              //   // backgroundSize: '100% 100%',
              //   height: '30vh',
              //   width: '100%',
              // }}
              className={`w-[400px] h-[600px] bg-white relative z-1 hover:bg-indigo-500/50`}
            >
              <div className="absolute -bottom-4 -right-4 bg-indigo-500 w-full h-full z-2 p-4 gap-4 flex flex-col">
                <h2 className="text-2xl">{event.name}</h2>
                <div className="flex w-full justyfy-between align-center opacity-50 ">
                  <span className="w-full">
                    {new Date(event.start_at).toLocaleString('ru-RU')}
                  </span>
                  <span className="w-full">-</span>
                  <span className="w-full">
                    {new Date(event.end_at).toLocaleString('ru-RU')}
                  </span>
                </div>
                <span className="text-right">{event.address}</span>
                <span>{event.desc}</span>
              </div>
            </Link>
          );
        })}
        {data?.events?.map((event, index) => {
          const { name, desc, address, id } = event;
          return (
            <Link
              to={'/events/$eventId'}
              params={{ eventId: id }}
              key={id}
              // style={{
              //   backgroundImage: `url(${headline_img_url})`,
              //   backgroundSize: 'cover',
              //   backgroundRepeat: 'no-repeat',
              //   backgroundPosition: 'center',
              //   // backgroundSize: '100% 100%',
              //   height: '30vh',
              //   width: '100%',
              // }}
              className={`w-[400px] h-[600px] bg-white relative z-1 hover:bg-indigo-500/50`}
            >
              <div className="absolute -bottom-4 -right-4 bg-indigo-500 w-full h-full z-2 p-4 gap-4 flex flex-col">
                <h2 className="text-2xl">{event.name}</h2>
                <div className="flex w-full justyfy-between align-center opacity-50 ">
                  <span className="w-full">
                    {new Date(event.start_at).toLocaleString('ru-RU')}
                  </span>
                  <span className="w-full">-</span>
                  <span className="w-full">
                    {new Date(event.end_at).toLocaleString('ru-RU')}
                  </span>
                </div>
                <span className="text-right">{event.address}</span>
                <span>{event.desc}</span>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
