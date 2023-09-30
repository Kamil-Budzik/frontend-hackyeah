import { Inter } from 'next/font/google';
import Link from 'next/link';
import Button from '@mui/material/Button';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <header>Ryoumen Sukuna</header>
      <p>I am the Disgraced One</p>
      <Link href='/nested'>
        <Button variant='contained'>Check the enemy</Button>
      </Link>
    </main>
  );
}
