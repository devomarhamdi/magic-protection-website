'use client';

import { Link, usePathname, useRouter } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();
  const t = useTranslations('Header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const switchLanguage = () => {
    const nextLocale = currentLocale === 'ar' ? 'en' : 'ar';
    router.replace(pathname, { locale: nextLocale });
  };

  const links = [
    { name: t('Services'), href: '/services' },
    { name: t('About'), href: '/about' },
    { name: t('Gallery'), href: '/gallery' },
    { name: t('Articles'), href: '/articles' },
    { name: t('Contact'), href: '/contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/5 shadow-[0_20px_50px_rgba(0,44,111,0.15)] flex justify-between items-center px-3 sm:px-4 md:px-8 py-3 md:py-4 max-w-none">
        <Link
          href="/"
          className="text-xl md:text-2xl font-black tracking-tighter text-on-surface uppercase font-headline"
        >
          {t('BrandName')}
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center justify-center">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                className={`font-headline font-bold tracking-tight transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right side items */}
        <div className="flex items-center gap-4">
          <button
            onClick={switchLanguage}
            className="hidden md:flex bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-bold hover:scale-95 active:scale-100 transition-all duration-300 electric-glow items-center justify-center gap-2"
          >
            <span
              className="material-symbols-outlined text-sm"
              data-icon="language"
            >
              language
            </span>
            {currentLocale === 'ar' ? 'EN' : 'AR'}
          </button>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-on-surface hover:text-primary transition-colors focus:outline-none flex items-center justify-center"
            onClick={() => setIsMenuOpen(true)}
          >
            <span
              className="material-symbols-outlined text-3xl"
              data-icon="menu"
            >
              menu
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-60 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-80 bg-surface-container-high z-70 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/5">
          <span className="text-lg font-headline font-black text-on-surface uppercase">
            {currentLocale === 'en' ? 'Menu' : 'القائمة'}
          </span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            <span
              className="material-symbols-outlined text-3xl"
              data-icon="close"
            >
              close
            </span>
          </button>
        </div>

        <div className="flex flex-col gap-5 p-5 sm:p-6 overflow-y-auto flex-1">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base sm:text-lg font-headline font-bold transition-colors ${
                  isActive ? 'text-primary' : 'text-on-surface-variant'
                }`}
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="p-6 border-t border-white/5">
          <button
            onClick={switchLanguage}
            className="w-full bg-primary-container text-on-primary-container px-4 py-3 rounded-lg font-bold active:scale-95 transition-all duration-300 electric-glow flex items-center justify-center gap-2"
          >
            <span
              className="material-symbols-outlined text-sm"
              data-icon="language"
            >
              language
            </span>
            {currentLocale === 'ar' ? 'English' : 'عربي'}
          </button>
        </div>
      </div>
    </>
  );
}
