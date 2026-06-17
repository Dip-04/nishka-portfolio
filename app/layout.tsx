import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import ClientShell from '@/components/ClientShell';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display'
});

const sans = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Interior Designer | Luxury 3D Portfolio',
  description:
    'A cinematic interior design portfolio with immersive 3D visuals, elegant service storytelling, and a premium global studio aesthetic.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Interior Designer | Luxury 3D Portfolio',
    description:
      'Premium interior design portfolio with 3D storytelling, curated services, and featured projects.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Designer | Luxury 3D Portfolio',
    description:
      'Premium interior design portfolio with 3D storytelling, curated services, and featured projects.'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
