import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <header>Satoru Gojo</header>
            <p>Throughout Earth and Heavens, I alone am the honored one</p>
            <Link href="/">Check the enemy</Link>
        </main>
    )
}
