import Link from 'next/link';

export default function NotFound(): JSX.Element {
  return (
    <div>
      <h1>404 - Page Not Found, please try again</h1>
      <Link href='/search'>Search</Link>
    </div>
  );
}
