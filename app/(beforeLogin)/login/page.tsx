'use client';

import { useRouter } from 'next/navigation';
import MainPage from '../_component/Main';
import { useEffect } from 'react';

export default function LoginPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/i/flow/login');
  }, [router]);
  return <MainPage />;
}
