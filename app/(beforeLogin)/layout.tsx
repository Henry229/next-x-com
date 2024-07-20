import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function Layout({ children, modal }: Props) {
  return (
    <div className='h-screen flex w-full'>
      beforeLogin Layout
      {children}
      {modal}
    </div>
  );
}
