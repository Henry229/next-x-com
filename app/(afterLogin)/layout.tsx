import { ReactNode } from 'react';

export default function AfterLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className='flex bg-white items-stretch'>
      <header className='flex flex-col items-end flex-grow'>
        <section
          className='w-[275px] h-screen'
          style={{ height: '100dvh' }}
        ></section>
      </header>
      <div
        className='flex flex-col flex-grow items-start'
        style={{ height: '100dvh' }}
      >
        <div>
          <main></main>
          <section></section>
        </div>
      </div>
    </div>
  );
}
