import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';


type Props = { children: ReactNode };


export default function Layout({ children }: Props) {
return (
<div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
<Header />
<main className="flex-grow container mx-auto px-4 sm:px-6 py-8">
{children}
</main>
<Footer />
</div>
);
}