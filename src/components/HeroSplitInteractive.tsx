'use client';

import React, { useState } from 'react';
import { Link } from '@/i18n/routing';

type Locale = 'en' | 'ar';

const copy = {
  en: {
    badge: 'The Gold Standard in Care',
    titleTop: 'Ultimate Protection',
    titleBottom: 'For Your Car',
    description:
      'Advanced Ceramic Coatings and Paint Protection Films (PPF) designed specifically for enthusiasts of uniqueness and elegance.',
    primaryCta: 'Book Your Appointment',
    secondaryCta: 'Explore Services',
  },
  ar: {
    badge: 'المعيار الذهبي في العناية',
    titleTop: 'الحماية المطلقة',
    titleBottom: 'لسيارتك',
    description:
      'حلول متقدمة من طبقات النانو سيراميك وأفلام الحماية (PPF) مصممة خصيصاً لعشاق التفرد والأناقة.',
    primaryCta: 'احجز موعدك الآن',
    secondaryCta: 'استكشف خدماتنا',
  },
};

export default function HeroSplitInteractive({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [pointer, setPointer] = useState({ x: 50, y: 45, active: false });

  const shiftX = (pointer.x - 50) * 0.18;
  const shiftY = (pointer.y - 50) * 0.18;

  return (
    <section
      className="hero-shell relative min-h-svh w-full flex items-center justify-center overflow-hidden pt-20 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-24"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setPointer({ x, y, active: true });
      }}
      onPointerLeave={() =>
        setPointer((current) => ({ ...current, active: false }))
      }
    >
      <div className="absolute inset-0 z-0 bg-background">
        <div
          className="absolute inset-0"
          style={{ background: 'var(--hero-gradient-main)' }}
        />

        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -left-1/4 -top-16 w-[160%] h-80 blur-3xl opacity-65 animate-[heroAuroraOne_16s_ease-in-out_infinite]"
            style={{ background: 'var(--hero-aurora-one)' }}
          />

          <div
            className="absolute -right-1/3 -bottom-32 w-[165%] h-96 blur-3xl opacity-60 animate-[heroAuroraTwo_20s_ease-in-out_infinite]"
            style={{ background: 'var(--hero-aurora-two)' }}
          />
        </div>

        <div
          className="absolute inset-0 opacity-28 transition-[background-position] duration-300"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, var(--hero-grid-dot-color) 1px, transparent 0)',
            backgroundSize: '34px 34px',
            backgroundPosition: `${50 + shiftX}% ${50 + shiftY}%`,
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: pointer.active ? 1 : 0.85,
            background: `radial-gradient(560px circle at ${pointer.x}% ${pointer.y}%, var(--hero-spot-start), var(--hero-spot-mid) 28%, transparent 70%)`,
          }}
        />

        <div
          className="absolute left-1/2 top-1/2 w-125 h-125 rounded-full blur-[120px] opacity-55"
          style={{
            background:
              'radial-gradient(circle, var(--hero-core-start) 0%, var(--hero-core-mid) 52%, transparent 78%)',
            transform: `translate3d(calc(-50% + ${shiftX * 2.2}px), calc(-50% + ${shiftY * 2.2}px), 0)`,
          }}
        />

        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <span className="inline-block px-4 py-1 mb-6 rounded-full bg-primary-container/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">
          {t.badge}
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-headline font-extrabold tracking-tighter leading-tight text-on-surface mb-4 sm:mb-6 text-glow">
          {t.titleTop}
          <br />
          {t.titleBottom}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-7 sm:mb-9 leading-relaxed font-light">
          {t.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
          <Link
            href="/contact"
            className="bg-primary-container text-on-primary-container text-center px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-bold text-base sm:text-lg hover:scale-95 active:scale-100 transition-all duration-300 electric-glow"
          >
            {t.primaryCta}
          </Link>
          <Link
            href="/services"
            className="border border-outline-variant/30 text-center hover:bg-surface-container-high px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-bold text-base sm:text-lg transition-all duration-300"
          >
            {t.secondaryCta}
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes heroAuroraOne {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(-8deg) scale(1);
          }
          50% {
            transform: translate3d(-2%, 8%, 0) rotate(-4deg) scale(1.04);
          }
        }

        @keyframes heroAuroraTwo {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(7deg) scale(1);
          }
          50% {
            transform: translate3d(2%, -7%, 0) rotate(3deg) scale(1.05);
          }
        }
      `}</style>
    </section>
  );
}
