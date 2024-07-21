import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function Layout({ children, modal }: Props) {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      {children}
      {modal}
    </div>
  );
}
