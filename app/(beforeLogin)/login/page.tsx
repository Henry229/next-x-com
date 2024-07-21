'use client';

import { useRouter } from 'next/navigation';
import MainPage from '../_component/Main';

export default function LoginPage() {
  const router = useRouter();
  router.replace('/i/flow/login');
  return <MainPage />;
}
