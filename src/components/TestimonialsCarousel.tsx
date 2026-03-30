'use client';
/* eslint-disable @next/next/no-img-element */

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

type Locale = 'en' | 'ar';

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

const testimonials: Record<Locale, Testimonial[]> = {
  en: [
    {
      name: 'Ahmed Rabie',
      role: 'Porsche GT3 Owner',
      quote:
        'The level of precision at Magic Protection is truly impressive. The PPF applied to my Porsche is completely invisible. Highly recommend!',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBtWgM9awciR-JYO235nBtIJdkMRs678QdftXUpINdRqadTIzQuQhvgxhHALqKo_2jN_JwaNP-xT1l9op1HCZNgoUvBO2kr-kcQv9rUTwzUBL4Pvr_ej56zHfh0Ni10i9CxBEbuojLtd2wWOBOYDjax3UHKJrcbYwyiXGeDRQvG432DahoR7V4mSeyBSxg28zHPK8NiFMOJRse7TWCn5ac3FP5kROb48VXXq2ssNH6aXq6AKuxPU2q5rBcdQj-6NchPIwl-7z8USzeP',
    },
    {
      name: 'Sarah Kamal',
      role: 'Tesla Model X Owner',
      quote:
        'My car has never looked so deep and glossy. The nano ceramic coating makes washing a breeze; dirt and water just slide right off.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCxGaGBsSZe0ApLRH-JaOJAo4RDfNB7tUR0qJGWeFsteyaXr87IgEeaQ3buC46yQ2bLoeZkO8wV2Wtsdun0LyHh5zVM9fgwWSmqv_gZCBbTxX44wK6yzH8QuDtIWPb_kgnIaVgePQEuV0_fMYVg-f38c8T0SAsmU7-nWali19W_mLFRk6vw_4uuxxM3Vn4-cNppqnq-qGIhe1xOzSJjmRRap0-F0FSe1MmKWqIdVMVwnxr_uPMZx8-B4kvmfgIubP6C6HTSSHpo0j1t',
    },
    {
      name: 'Omar Hadidi',
      role: 'BMW M5 Owner',
      quote:
        'True professionals. They explained every step of the process, and the Graphene coating they applied protects the car from any blemishes flawlessly.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuASV6S4IlCPfpb7qUoRG5KYJwxyBuGWEfCBl6OQZWjVgpgZo941s9Hlrq_-JFCT5FicIvZje2lor5HLy5mytE_QjngX015mviPn0b2anPdO4Hy_8PtRt_gPRptsXcFCk8hMuugaN8lguuTiWolzoi86O34FtZJktF-YEyWHfbe_5YUvPVM8KLHY55bN01HQY0e52RA9pNn05xflcBQqgm3_eyVMTQF8kYRn4tZkOCQPDLr-0Z2M0Ao5HH2b3ElPKGm3SckNvArwPXKn',
    },
    {
      name: 'Mina Farouk',
      role: 'Mercedes S-Class Owner',
      quote:
        'The finish is unreal. After detailing and ceramic protection, the paint depth looks better than showroom delivery.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBtWgM9awciR-JYO235nBtIJdkMRs678QdftXUpINdRqadTIzQuQhvgxhHALqKo_2jN_JwaNP-xT1l9op1HCZNgoUvBO2kr-kcQv9rUTwzUBL4Pvr_ej56zHfh0Ni10i9CxBEbuojLtd2wWOBOYDjax3UHKJrcbYwyiXGeDRQvG432DahoR7V4mSeyBSxg28zHPK8NiFMOJRse7TWCn5ac3FP5kROb48VXXq2ssNH6aXq6AKuxPU2q5rBcdQj-6NchPIwl-7z8USzeP',
    },
    {
      name: 'Youssef Adel',
      role: 'Range Rover Sport Owner',
      quote:
        'I chose full PPF and the team executed every edge perfectly. The car is protected without changing its original appearance.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCxGaGBsSZe0ApLRH-JaOJAo4RDfNB7tUR0qJGWeFsteyaXr87IgEeaQ3buC46yQ2bLoeZkO8wV2Wtsdun0LyHh5zVM9fgwWSmqv_gZCBbTxX44wK6yzH8QuDtIWPb_kgnIaVgePQEuV0_fMYVg-f38c8T0SAsmU7-nWali19W_mLFRk6vw_4uuxxM3Vn4-cNppqnq-qGIhe1xOzSJjmRRap0-F0FSe1MmKWqIdVMVwnxr_uPMZx8-B4kvmfgIubP6C6HTSSHpo0j1t',
    },
    {
      name: 'Nour El Din',
      role: 'Audi RS Owner',
      quote:
        'Window tint quality is top-tier. Cabin temperature dropped noticeably and visibility stayed crystal clear at night.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuASV6S4IlCPfpb7qUoRG5KYJwxyBuGWEfCBl6OQZWjVgpgZo941s9Hlrq_-JFCT5FicIvZje2lor5HLy5mytE_QjngX015mviPn0b2anPdO4Hy_8PtRt_gPRptsXcFCk8hMuugaN8lguuTiWolzoi86O34FtZJktF-YEyWHfbe_5YUvPVM8KLHY55bN01HQY0e52RA9pNn05xflcBQqgm3_eyVMTQF8kYRn4tZkOCQPDLr-0Z2M0Ao5HH2b3ElPKGm3SckNvArwPXKn',
    },
  ],
  ar: [
    {
      name: 'أحمد ربيع',
      role: 'مالك بورش GT3',
      quote:
        'مستوى الدقة في مركز ماجيك بروتكشن كان مبهرا بصدق. تركيب أفلام الحماية لسيارتي البورش غير مرئي بالمرة. أنصح بهم بشدة!',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBtWgM9awciR-JYO235nBtIJdkMRs678QdftXUpINdRqadTIzQuQhvgxhHALqKo_2jN_JwaNP-xT1l9op1HCZNgoUvBO2kr-kcQv9rUTwzUBL4Pvr_ej56zHfh0Ni10i9CxBEbuojLtd2wWOBOYDjax3UHKJrcbYwyiXGeDRQvG432DahoR7V4mSeyBSxg28zHPK8NiFMOJRse7TWCn5ac3FP5kROb48VXXq2ssNH6aXq6AKuxPU2q5rBcdQj-6NchPIwl-7z8USzeP',
    },
    {
      name: 'سارة كمال',
      role: 'صاحبة تسلا الموديل X',
      quote:
        'لم تبدُ سيارتي بهذا العمق واللمعان من قبل. طلاء النانو سيراميك يجعل غسيل السيارة سهلا جدا، الماء ينزلق عن السطح ببساطة.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCxGaGBsSZe0ApLRH-JaOJAo4RDfNB7tUR0qJGWeFsteyaXr87IgEeaQ3buC46yQ2bLoeZkO8wV2Wtsdun0LyHh5zVM9fgwWSmqv_gZCBbTxX44wK6yzH8QuDtIWPb_kgnIaVgePQEuV0_fMYVg-f38c8T0SAsmU7-nWali19W_mLFRk6vw_4uuxxM3Vn4-cNppqnq-qGIhe1xOzSJjmRRap0-F0FSe1MmKWqIdVMVwnxr_uPMZx8-B4kvmfgIubP6C6HTSSHpo0j1t',
    },
    {
      name: 'عمر الحديدي',
      role: 'صاحب BMW M5',
      quote:
        'محترفون حقيقيون. شرحوا لي كل خطوة من العملية، وطلاء الجرافين الذي طبقوه يحمي السيارة من أي بقع أو شوائب بقوة منقطعة النظير.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuASV6S4IlCPfpb7qUoRG5KYJwxyBuGWEfCBl6OQZWjVgpgZo941s9Hlrq_-JFCT5FicIvZje2lor5HLy5mytE_QjngX015mviPn0b2anPdO4Hy_8PtRt_gPRptsXcFCk8hMuugaN8lguuTiWolzoi86O34FtZJktF-YEyWHfbe_5YUvPVM8KLHY55bN01HQY0e52RA9pNn05xflcBQqgm3_eyVMTQF8kYRn4tZkOCQPDLr-0Z2M0Ao5HH2b3ElPKGm3SckNvArwPXKn',
    },
    {
      name: 'مينا فاروق',
      role: 'مالك مرسيدس S-Class',
      quote:
        'النتيجة كانت مذهلة. بعد التلميع والحماية السيراميكية أصبح عمق اللون أفضل من شكل السيارة وقت الاستلام من المعرض.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBtWgM9awciR-JYO235nBtIJdkMRs678QdftXUpINdRqadTIzQuQhvgxhHALqKo_2jN_JwaNP-xT1l9op1HCZNgoUvBO2kr-kcQv9rUTwzUBL4Pvr_ej56zHfh0Ni10i9CxBEbuojLtd2wWOBOYDjax3UHKJrcbYwyiXGeDRQvG432DahoR7V4mSeyBSxg28zHPK8NiFMOJRse7TWCn5ac3FP5kROb48VXXq2ssNH6aXq6AKuxPU2q5rBcdQj-6NchPIwl-7z8USzeP',
    },
    {
      name: 'يوسف عادل',
      role: 'مالك رينج روفر سبورت',
      quote:
        'اخترت تغليف PPF كامل، والتنفيذ كان دقيقا جدا خاصة عند الحواف. الحماية ممتازة بدون التأثير على شكل الطلاء الأصلي.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCxGaGBsSZe0ApLRH-JaOJAo4RDfNB7tUR0qJGWeFsteyaXr87IgEeaQ3buC46yQ2bLoeZkO8wV2Wtsdun0LyHh5zVM9fgwWSmqv_gZCBbTxX44wK6yzH8QuDtIWPb_kgnIaVgePQEuV0_fMYVg-f38c8T0SAsmU7-nWali19W_mLFRk6vw_4uuxxM3Vn4-cNppqnq-qGIhe1xOzSJjmRRap0-F0FSe1MmKWqIdVMVwnxr_uPMZx8-B4kvmfgIubP6C6HTSSHpo0j1t',
    },
    {
      name: 'نور الدين',
      role: 'مالك أودي RS',
      quote:
        'جودة العزل الحراري ممتازة. حرارة المقصورة انخفضت بشكل واضح مع الحفاظ على وضوح الرؤية ليلا بدون أي تشويش.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuASV6S4IlCPfpb7qUoRG5KYJwxyBuGWEfCBl6OQZWjVgpgZo941s9Hlrq_-JFCT5FicIvZje2lor5HLy5mytE_QjngX015mviPn0b2anPdO4Hy_8PtRt_gPRptsXcFCk8hMuugaN8lguuTiWolzoi86O34FtZJktF-YEyWHfbe_5YUvPVM8KLHY55bN01HQY0e52RA9pNn05xflcBQqgm3_eyVMTQF8kYRn4tZkOCQPDLr-0Z2M0Ao5HH2b3ElPKGm3SckNvArwPXKn',
    },
  ],
};

export default function TestimonialsCarousel({ locale }: { locale: Locale }) {
  const isEn = locale === 'en';
  const items = testimonials[locale];
  const [isDesktop, setIsDesktop] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    direction: 'ltr',
    slidesToScroll: 1,
  });

  useEffect(() => {
    const updateViewport = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) {
      return;
    }
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const timer = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 10000);

    return () => window.clearInterval(timer);
  }, [emblaApi]);

  const prev = () => {
    emblaApi?.scrollPrev();
  };

  const next = () => {
    emblaApi?.scrollNext();
  };

  const highlightedIndex = isDesktop
    ? (selectedIndex + 1) % items.length
    : selectedIndex;

  return (
    <section
      className={`py-20 md:py-32 bg-surface-container-lowest ${isEn ? 'text-left' : 'text-right'}`}
      dir={isEn ? 'ltr' : 'rtl'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 md:mb-16 gap-6 md:gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-extrabold tracking-tighter mb-4 text-on-surface">
              {isEn ? 'Client Testimonials' : 'أقوال عملائنا'}
            </h2>
            <p className="text-on-surface-variant max-w-lg">
              {isEn
                ? "The world's most beautiful vehicles deserve the best protection. Hear what our elite clients say about our services."
                : 'أجمل مركبات العالم تستحق أفضل حماية. إليك ما تقوله نخبة عملائنا عن خدماتنا.'}
            </p>
          </div>
          <div className="flex gap-4" dir="ltr">
            <button
              type="button"
              onClick={prev}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
              aria-label={isEn ? 'Previous testimonial' : 'الشهادة السابقة'}
            >
              <span
                className="material-symbols-outlined"
                data-icon="chevron_left"
              >
                chevron_left
              </span>
            </button>
            <button
              type="button"
              onClick={next}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-container text-white flex items-center justify-center hover:scale-95 transition-transform electric-glow"
              aria-label={isEn ? 'Next testimonial' : 'الشهادة التالية'}
            >
              <span
                className="material-symbols-outlined"
                data-icon="chevron_right"
              >
                chevron_right
              </span>
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex" dir="ltr">
            {items.map((item, itemIndex) => (
              <article
                key={`${locale}-${item.name}`}
                className="shrink-0 basis-full sm:basis-1/2 md:basis-1/3 px-0 sm:px-2 md:px-3"
              >
                <div
                  className={`glass-card p-6 sm:p-8 md:p-10 rounded-xl relative h-full transition-colors duration-300 ${
                    itemIndex === highlightedIndex
                      ? 'bg-surface-container-high border-primary/25'
                      : ''
                  }`}
                  dir={isEn ? 'ltr' : 'rtl'}
                >
                  <div className="flex gap-1 mb-6 text-primary">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span
                        key={`${item.name}-${starIndex}`}
                        className="material-symbols-outlined text-sm"
                        data-icon="star"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-on-surface-variant italic mb-8 leading-relaxed">{`"${item.quote}"`}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/30 shrink-0">
                      <img
                        className="w-full h-full object-cover"
                        alt={item.name}
                        src={item.image}
                      />
                    </div>
                    <div>
                      <div className="font-headline font-bold text-on-surface">
                        {item.name}
                      </div>
                      <div className="text-xs text-on-surface-variant uppercase tracking-widest">
                        {item.role}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
