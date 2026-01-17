import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Background3D from '@/components/Background3D';
import { profile } from '@/data/profile';

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.about,
  keywords: [
    'Product Manager',
    'Продуктовый менеджер',
    'Product Management',
    'Artyom Popov',
    'Артём Попов',
    'B2B2C',
    'EdTech',
    'TravelTech',
    'ML Product',
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.about,
    type: 'website',
    locale: 'ru_RU',
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.role}`,
    description: profile.about,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    email: profile.contacts.email,
    url: profile.contacts.linkedin,
    sameAs: [
      profile.contacts.linkedin,
      profile.contacts.hh,
      profile.contacts.telegram,
    ],
    knowsAbout: [
      'Product Management',
      'Product Strategy',
      'Data Analytics',
      'A/B Testing',
      'Customer Development',
    ],
  };

  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.variable}>
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
        <Background3D />
        <Header />
        {children}
      </body>
    </html>
  );
}

