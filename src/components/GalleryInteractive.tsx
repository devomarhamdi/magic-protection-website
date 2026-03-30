'use client';
/* eslint-disable @next/next/no-img-element */

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from '@/i18n/routing';

type Locale = 'en' | 'ar';
type Category = 'all' | 'ceramic' | 'ppf' | 'tint';

type GalleryItem = {
  id: number;
  src: string;
  category: Exclude<Category, 'all'>;
  spanClass: string;
  aspectClass: string;
  alt: Record<Locale, string>;
  badge: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  bullets: Record<Locale, string[]>;
};

const items: GalleryItem[] = [
  {
    id: 1,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1RF3vA_qBhEZ6kUueeCeEM-4f_lp1bp0LjvA-V8_4_ac4iEFjN0H5z4z1RDD-pXRu8CN_Wtia-lUmfBaLrh_3b4s2gR86rot6C2mxvln4D4ZAxYpJKn9aaTinNLEfafyGG9U37l-aw9AYMGsqeSF7qEuprgTXjAGmYQm0QOT8XLOMmt29BFbOTfqZkd-PC64cigmdh-Tms0R-MwRwVWKwAMG8fVO56TlS5WppJ8P2e6xOpXb_heJT4vHAv6FC6dS_bTIRsRS8yZXV',
    category: 'ceramic',
    spanClass: 'md:col-span-8',
    aspectClass: 'aspect-[16/10]',
    alt: {
      en: 'Luxury car ceramic coating',
      ar: 'طلاء سيراميك للسيارات الفاخرة',
    },
    badge: { en: 'Premium Ceramic', ar: 'سيراميك بريميوم' },
    title: { en: 'Royal Black Depth', ar: 'عمق اللون الاسود الملكي' },
    description: {
      en: '9H ceramic layers for richer color depth, gloss, and long-term hydrophobic protection.',
      ar: 'طبقات سيراميك 9H لزيادة عمق اللون واللمعان وتوفير حماية طاردة للمياه على المدى الطويل.',
    },
    bullets: {
      en: ['3-Stage Paint Correction', 'Wheel and Glass Protection'],
      ar: ['معالجة طلاء بثلاث مراحل', 'حماية الجنوط والزجاج'],
    },
  },
  {
    id: 2,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2jnGCX7lxsAAg9XcWwqjrBkBgluhtUL6b6ZzzpwIabTz9N6-bfOjh5VAmOidOT6GKL4EF239xcgPgnC1IrUsnolIA4aQi8cz6dfUpZTyj4dhJ3g9VznPAY8CwN8mDP6gSFn1XNKvgpLpCt7hio63FnGEpAzmuq1OzETxq8z6Kzjrifn2yx7RYNI4qY-R0Y3Pe7n0Asv6tTt_Rrv_18JKQftN0aJ0cdIb-iM3UTdOwES6sRQZART2_dhXjVNRajEUES4YxMI_960xl',
    category: 'ppf',
    spanClass: 'md:col-span-4',
    aspectClass: 'aspect-[4/5]',
    alt: { en: 'Car details', ar: 'تفاصيل السيارة' },
    badge: { en: 'PPF Shield', ar: 'درع PPF' },
    title: {
      en: 'Seamless Comprehensive Protection',
      ar: 'الحماية الخفية المتكاملة',
    },
    description: {
      en: 'Precision PPF coverage on high-impact zones with clean edge wrapping and optical clarity.',
      ar: 'تغطية دقيقة بفيلم PPF للمناطق عالية التعرض مع لف حواف نظيف ووضوح بصري ممتاز.',
    },
    bullets: {
      en: ['Self-Healing Film', 'Impact Zone Reinforcement'],
      ar: ['فيلم ذاتي الالتئام', 'تعزيز مناطق الصدمات'],
    },
  },
  {
    id: 3,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3vcZl-dcoepNyHLAkx5hJQlzcsVSKMakp79Xrw_BXEjIDS882HEC5f8y798UxGsNRtpZLY6arbLeMtwn2-S0tz8EzBVZ7mTC0PW9HYiEAh1HKA48nXbazrhk6QraRwB91cLUmOMgY3FTQLUbB9MVX37CEZXuxrysUF9B_CANWjwmVpouZR0EZe-z68ivBW6gZZj-y7fqpPMi8kyqciG74mxgShbKFK20s__mnJ642Cfh9DKKg1UIQm6J17Hb1DOzdJQxFmJ-_w2iw',
    category: 'ceramic',
    spanClass: 'md:col-span-4',
    aspectClass: 'aspect-square',
    alt: { en: 'Water beading', ar: 'عزل مائي' },
    badge: { en: 'Hydrophobic', ar: 'خاصية طرد المياه' },
    title: { en: 'Nano Slick Layer', ar: 'طبقة الانزلاق النانوية' },
    description: {
      en: 'Surface tension control creates fast beading and easier wash cycles with less residue.',
      ar: 'التحكم في توتر السطح يمنح تكوين قطرات سريع وغسيل اسهل وبقايا اقل.',
    },
    bullets: {
      en: ['Water Spot Reduction', 'Low Maintenance Finish'],
      ar: ['تقليل بقع المياه', 'تشطيب قليل الصيانة'],
    },
  },
  {
    id: 4,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBu2hgSbE8REDFbKYm1ZpABK73bbl6NO2duQ4YGvqkC2G3itdiXW-DufrCLKo0g4iUgWnwrSQdLo010tUOx7LVtOsf18wZ8NgCD3IIO0HP_ftgdXN-0PEiHpzyxm-I4JH4Rqmi80YtHq5d05zpnTwp4rqt0GtOCCjGQRxIIRRt9lWESiG9r_JV_dCvENhlC5RYRmYygXbivS1xH_FfDq1t6nBf4ft3WfR1E9_srLzIZEq6_1fVhnr71V4UTqHJ6TRc1JH9SsZbwXzuB',
    category: 'tint',
    spanClass: 'md:col-span-8',
    aspectClass: 'aspect-[21/9]',
    alt: { en: 'Luxury interior', ar: 'مقصورة فاخرة' },
    badge: { en: 'Privacy Tint', ar: 'تظليل الخصوصية' },
    title: {
      en: 'Nighttime Privacy Isolating Series',
      ar: 'سلسلة الخصوصية الليلية العازلة',
    },
    description: {
      en: 'Premium tint balances privacy, heat rejection, and daytime/nighttime visibility.',
      ar: 'عزل حراري فاخر يوازن بين الخصوصية وتقليل الحرارة مع وضوح جيد نهارا وليلا.',
    },
    bullets: {
      en: ['High Heat Rejection', 'Clear Optical Clarity'],
      ar: ['صد حراري مرتفع', 'وضوح بصري نقي'],
    },
  },
  {
    id: 5,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPToLz6SteRqeAuSIUtVK5NqCGGbQ4D-wpmxVydOmPkLGIU4te-yk2vNGj4JgD2_CtXQ8cwkdaXNuwZaQG_d-ZggF_fv7BfFXLNiy5sZdHpKoWtRYexIrqkf-J-x9z8PNwAjgrmVXfJEVBzklG30f3BK0W8QYeaU5J5J2_G3UIMBexuhPPqxc4bsdEHR8thb4297WHEF-ZczK2iKycZNR-hChbBnwDzWj7XGIHTTkuwl1Mj4m4Flch4re585As3n4xhO5M9zH-63SU',
    category: 'ppf',
    spanClass: 'md:col-span-3',
    aspectClass: 'aspect-[3/4]',
    alt: { en: 'Badge details', ar: 'تفاصيل الشعار' },
    badge: { en: 'PPF Detail', ar: 'تفاصيل PPF' },
    title: { en: 'Precision Edge Wrapping', ar: 'تغليف الحواف الدقيق' },
    description: {
      en: 'Edge alignment and tucked seams keep protection almost invisible under close inspection.',
      ar: 'محاذاة الحواف وطي الاطراف يمنحان مظهرا شبه غير مرئي حتى عند التدقيق.',
    },
    bullets: {
      en: ['Edge Wrapped Panels', 'Minimal Visual Seams'],
      ar: ['تغليف حواف الالواح', 'اقل ظهور للفواصل'],
    },
  },
  {
    id: 6,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJGmfnnMW1KOcLMh2jWhASPriVreZy-KZ9BejucLyims5fgH0a_b6iExDgYFKVDnKX45pmUhWqw7kSooFKOHQrr81rdFYTj2A6Y7HT4AIUsH33Y1Gu2acJ2dIJv8BLJirQTIMtebVyB_rAMIJ4gZtKnnXVaRPpJ_1C5pYXMnKYLA0UH4wXaIwIoo5riP5IbOPodpH7TvUEKMlBOxOPPfbSLz_9rYws3jGcNJrmxZZI1vESFkhp8nwJW1K_dRemZH4reZoAFYVWUP3_',
    category: 'ceramic',
    spanClass: 'md:col-span-6',
    aspectClass: 'aspect-square md:aspect-auto',
    alt: { en: 'Modern vehicle', ar: 'مركبة عصرية' },
    badge: { en: 'Showroom Shine', ar: 'بريق صالات العرض' },
    title: { en: 'Extreme Mirror Reflection', ar: 'انعكاس مرآتي فائق' },
    description: {
      en: 'Polishing and finishing sequence tuned for crisp reflections and deeper metallic contrast.',
      ar: 'تسلسل تلميع وتشطيب مضبوط للحصول على انعكاسات حادة وعمق اكبر في اللون المعدني.',
    },
    bullets: {
      en: ['Gloss Amplification', 'Refined Surface Clarity'],
      ar: ['تعزيز اللمعان', 'وضوح سطحي محسّن'],
    },
  },
  {
    id: 7,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6-AgfwSDiCJQwGfa8MzASroOqI7yp--gDX7XRHH1HWZ3cOH3XhOSWcb9yvWB1jbNCqi8DDRyaKMyc3YRAdRYQbjwVYHWMO_aBLYmyCT7fg163s1W4tJfUtAc7qt2pdshyMzmrD4e3CUyGnEXvIN73HeSuH_9jsHsLmic2lw4V9kWJa8gJKaMuy-B_VasLvqsBIwB_l5aHWH-qcKXRN80QZY2bKX3O8ITL1fCzCifx-7By0ByR6A9_hcgopng46JZmLBSL_irm4Ws3',
    category: 'ceramic',
    spanClass: 'md:col-span-3',
    aspectClass: 'aspect-[3/4]',
    alt: { en: 'Car emblem', ar: 'شعار السيارة' },
    badge: { en: 'Color Depth', ar: 'عمق لوني' },
    title: { en: 'Highlighting Paint Details', ar: 'ابراز تفاصيل الطلاء' },
    description: {
      en: 'Close-up finishing reveals richer pigment depth and a cleaner top-coat line.',
      ar: 'اللمسات النهائية القريبة تظهر عمقا اعلى للون وخط طبقة علوية اكثر نقاء.',
    },
    bullets: {
      en: ['High-Definition Finish', 'Enhanced Paint Contrast'],
      ar: ['تشطيب عالي الدقة', 'تعزيز تباين الطلاء'],
    },
  },
];

const labels = {
  en: {
    all: 'All',
    ceramic: 'Nano Ceramic',
    ppf: 'PPF',
    tint: 'Window Tint',
    projectDetails: 'Project Details',
    requestService: 'Request this Service',
  },
  ar: {
    all: 'الكل',
    ceramic: 'نانو سيراميك',
    ppf: 'افلام PPF',
    tint: 'عزل حراري',
    projectDetails: 'تفاصيل المشروع',
    requestService: 'اطلب هذه الخدمة',
  },
};

export default function GalleryInteractive({ locale }: { locale: Locale }) {
  const isEn = locale === 'en';
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [activeId, setActiveId] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') {
      return items;
    }
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const activeIndex = filteredItems.findIndex((item) => item.id === activeId);
  const activeItem = activeIndex >= 0 ? filteredItems[activeIndex] : null;

  const closeModal = useCallback(() => setActiveId(null), []);

  const showNext = useCallback(() => {
    if (!filteredItems.length) {
      return;
    }
    if (activeIndex < 0) {
      setActiveId(filteredItems[0].id);
      return;
    }
    const nextIndex = (activeIndex + 1) % filteredItems.length;
    setActiveId(filteredItems[nextIndex].id);
  }, [activeIndex, filteredItems]);

  const showPrev = useCallback(() => {
    if (!filteredItems.length) {
      return;
    }
    if (activeIndex < 0) {
      setActiveId(filteredItems[0].id);
      return;
    }
    const prevIndex =
      (activeIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveId(filteredItems[prevIndex].id);
  }, [activeIndex, filteredItems]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (activeId === null) {
        return;
      }

      if (event.key === 'Escape') {
        closeModal();
      }
      if (event.key === 'ArrowRight') {
        if (isEn) {
          showNext();
        } else {
          showPrev();
        }
      }
      if (event.key === 'ArrowLeft') {
        if (isEn) {
          showPrev();
        } else {
          showNext();
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeId, closeModal, isEn, showNext, showPrev]);

  useEffect(() => {
    if (activeId === null) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeId]);

  const selectCategory = (category: Category) => {
    setActiveCategory(category);
    setActiveId(null);
  };

  const text = labels[locale];
  const prevIcon = isEn ? 'chevron_left' : 'chevron_right';
  const nextIcon = isEn ? 'chevron_right' : 'chevron_left';

  return (
    <>
      <main
        className="px-4 sm:px-6 lg:px-8 pb-24 md:pb-32"
        dir={isEn ? 'ltr' : 'rtl'}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex flex-nowrap md:flex-wrap gap-2 p-1 bg-surface-container-low rounded-xl border border-white/5 w-full md:w-fit overflow-x-auto">
            <button
              type="button"
              onClick={() => selectCategory('all')}
              className={`shrink-0 px-4 sm:px-6 py-2.5 rounded-lg font-headline font-bold text-sm transition-all ${
                activeCategory === 'all'
                  ? 'bg-primary text-on-primary'
                  : 'text-on-surface-variant hover:bg-white/5'
              }`}
            >
              {text.all}
            </button>
            <button
              type="button"
              onClick={() => selectCategory('ceramic')}
              className={`shrink-0 px-4 sm:px-6 py-2.5 rounded-lg font-headline font-bold text-sm transition-all ${
                activeCategory === 'ceramic'
                  ? 'bg-primary text-on-primary'
                  : 'text-on-surface-variant hover:bg-white/5'
              }`}
            >
              {text.ceramic}
            </button>
            <button
              type="button"
              onClick={() => selectCategory('ppf')}
              className={`shrink-0 px-4 sm:px-6 py-2.5 rounded-lg font-headline font-bold text-sm transition-all ${
                activeCategory === 'ppf'
                  ? 'bg-primary text-on-primary'
                  : 'text-on-surface-variant hover:bg-white/5'
              }`}
            >
              {text.ppf}
            </button>
            <button
              type="button"
              onClick={() => selectCategory('tint')}
              className={`shrink-0 px-4 sm:px-6 py-2.5 rounded-lg font-headline font-bold text-sm transition-all ${
                activeCategory === 'tint'
                  ? 'bg-primary text-on-primary'
                  : 'text-on-surface-variant hover:bg-white/5'
              }`}
            >
              {text.tint}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className={`${item.spanClass} ${item.aspectClass} group relative overflow-hidden rounded-2xl bg-surface-container cursor-pointer text-left`}
              >
                <img
                  alt={item.alt[locale]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={item.src}
                />
                <div
                  className={`absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 sm:p-8 ${
                    isEn ? 'text-left' : 'text-right'
                  }`}
                >
                  <span className="text-primary font-headline font-bold text-sm uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    {item.badge[locale]}
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-headline font-bold text-on-surface transform translate-y-4 group-hover:translate-y-0 transition-transform delay-75">
                    {item.title[locale]}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>

      <a
        className={`fixed bottom-5 md:bottom-8 ${isEn ? 'right-5 md:right-8' : 'left-5 md:left-8'} z-60 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-[0_0_40px_rgba(37,211,102,0.4)] scale-100 hover:scale-110 transition-transform group`}
        href="https://wa.me/201000411099"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
        </svg>
      </a>

      <div
        className={`fixed inset-0 z-100 bg-surface/95 backdrop-blur-2xl flex items-end md:items-center justify-center p-3 sm:p-4 md:p-8 transition-opacity duration-300 ${
          activeItem
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeModal}
      >
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            closeModal();
          }}
          className={`absolute top-4 md:top-8 ${isEn ? 'right-4 md:right-8' : 'left-4 md:left-8'} text-on-surface hover:text-primary`}
          aria-label={isEn ? 'Close gallery popup' : 'اغلاق نافذة المعرض'}
        >
          <span
            className="material-symbols-outlined text-4xl"
            data-icon="close"
          >
            close
          </span>
        </button>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            if (isEn) {
              showPrev();
            } else {
              showNext();
            }
          }}
          className={`hidden md:block absolute ${isEn ? 'left-4 md:left-8' : 'right-4 md:right-8'} top-1/2 -translate-y-1/2 text-on-surface/60 hover:text-primary`}
          aria-label={isEn ? 'Previous image' : 'الصورة السابقة'}
        >
          <span
            className="material-symbols-outlined text-5xl md:text-6xl"
            data-icon={prevIcon}
          >
            {prevIcon}
          </span>
        </button>

        <div
          className={`max-w-6xl w-full max-h-full md:max-h-[85vh] glass-card rounded-2xl overflow-hidden flex flex-col ${
            isEn ? 'md:flex-row' : 'md:flex-row-reverse'
          } shadow-[0_40px_100px_rgba(0,0,0,0.8)]`}
          dir={isEn ? 'ltr' : 'rtl'}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="w-full md:w-3/4 aspect-video bg-surface-container-lowest">
            {activeItem && (
              <img
                alt={activeItem.alt[locale]}
                className="w-full h-full object-cover"
                src={activeItem.src}
              />
            )}
          </div>
          <div
            className={`w-full md:w-1/4 p-5 sm:p-6 md:p-8 flex flex-col justify-between ${isEn ? 'text-left' : 'text-right'}`}
          >
            {activeItem && (
              <>
                <div>
                  <span className="text-primary font-headline font-bold text-xs uppercase tracking-widest block mb-2">
                    {text.projectDetails}
                  </span>
                  <h2 className="text-2xl font-headline font-extrabold text-on-surface mb-4">
                    {activeItem.title[locale]}
                  </h2>
                  <p className="text-on-surface-variant text-sm font-body leading-relaxed mb-6">
                    {activeItem.description[locale]}
                  </p>
                  <div className="space-y-3">
                    {activeItem.bullets[locale].map((bullet) => (
                      <div
                        key={bullet}
                        className={`flex items-center gap-2 text-xs font-bold text-on-surface uppercase ${
                          isEn ? 'flex-row' : 'flex-row-reverse'
                        }`}
                      >
                        <span
                          className="material-symbols-outlined text-primary text-sm"
                          data-icon="check_circle"
                        >
                          check_circle
                        </span>
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="w-full py-4 bg-primary text-on-primary font-headline font-bold rounded-lg shadow-lg hover:shadow-primary/20 transition-all mt-8 text-center"
                >
                  {text.requestService}
                </Link>
              </>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            if (isEn) {
              showNext();
            } else {
              showPrev();
            }
          }}
          className={`hidden md:block absolute ${isEn ? 'right-4 md:right-8' : 'left-4 md:left-8'} top-1/2 -translate-y-1/2 text-on-surface/60 hover:text-primary`}
          aria-label={isEn ? 'Next image' : 'الصورة التالية'}
        >
          <span
            className="material-symbols-outlined text-5xl md:text-6xl"
            data-icon={nextIcon}
          >
            {nextIcon}
          </span>
        </button>
      </div>
    </>
  );
}
