import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import { Alexandria, Cairo } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const alexandria = Alexandria({
  variable: '--font-headline',
  subsets: ['arabic', 'latin'],
});

const cairo = Cairo({
  variable: '--font-body',
  subsets: ['arabic', 'latin'],
});

export const metadata: Metadata = {
  title: 'ماجيك بروتكشن | عيادة حماية السيارات',
  description:
    'متخصصون في حماية السيارات بالكامل باستخدام أفلام الحماية المتقدمة، طبقات النانو سيراميك، والعزل الحراري.',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      data-theme="dark"
      suppressHydrationWarning
      className={`${alexandria.variable} ${cairo.variable} antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
