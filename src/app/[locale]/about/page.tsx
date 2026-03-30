import React from 'react';
import { Link } from '@/i18n/routing';

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === 'en';

  if (isEn) {
    return (
      <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-white min-h-screen">
        <section className="relative min-h-[70svh] md:min-h-[819px] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <img
              alt="Luxury car with nano ceramic shine"
              className="w-full h-full object-cover opacity-40"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnB8pQIsToHLJKnwc9Y8twhcsOw-8oXjaEhXoHfyIn-MCxTZ5r9gAEQvU_7NDDvs92H_qF-6B6qwASu2ciubS3W-JVge3K1Z9LKT3X6JwBmepii-XTYHw4ZrDF8SOBWFP_4xGtF0wbJgt4QKgKWVWwo_JdzmMejhtXUK-aqNBGBBuTf19e-kgggmsfKN3SrdBDoDllguBGYQetH58E70d7mgmzaDd18Z20L8kGd60QaxYDy-cZmWuNbYNGK0-TtQRAVHX6libI7fQt"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/60 to-surface"></div>
          </div>
          <div className="relative z-10 text-center px-6">
            <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-6 uppercase italic">
              Our Passion is{' '}
              <span className="text-primary text-glow">Perfection</span>
            </h1>
            <p className="text-on-surface-variant text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium">
              We do more than just care for cars. We preserve your masterpiece
              through advanced ceramic engineering and meticulous attention to
              detail.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/40"></div>
              <img
                alt="Technician applying protection"
                className="rounded-xl shadow-2xl relative z-10"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiS8lL-xNoj526loae9MdqIWCS8QYpJY6TRKCB6ABeKRaikL499WZJUxyFuchEVx60qx1jMKOESCxV9YK-3hHbB1act7-seVyOLsDv98jNJctYz_dUDUhd8Llthc-a_Gk0NmVuJVKMDjXD_gNGEZB7QxIgHtdrJYYEVoJC5lbEc2DqLVSVF957gYguyBJvSk9wzzvPgPpmSH9yDXvHFS365wGo8E0uuNw9hKP21brSe0UzoWq9N1v7LMfiMUo3nkdCHMwS4a5ZFrN1"
              />
              <div className="absolute -bottom-10 -right-10 bg-primary-container/20 p-8 rounded-xl backdrop-blur-md hidden md:block z-20">
                <span className="text-primary font-headline font-bold text-4xl">
                  10+
                </span>
                <p className="text-on-surface-variant font-label uppercase tracking-widest text-xs mt-2">
                  Years of Excellence
                </p>
              </div>
            </div>
            <div className="space-y-8 text-left order-1 md:order-2">
              <div>
                <span className="text-primary font-label uppercase tracking-widest font-bold text-sm">
                  Our Philosophy
                </span>
                <h2 className="text-3xl sm:text-4xl font-headline font-black text-on-surface mt-4">
                  The Premier Car Clinic
                </h2>
                <p className="text-on-surface-variant text-lg mt-6 leading-relaxed">
                  Magic Protection was founded with the belief that every
                  premium vehicle deserves an impenetrable sanctuary. Our
                  mission is to bridge the gap between traditional car
                  maintenance and aviation-grade surface protection
                  technologies.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex gap-6 items-start">
                  <div className="bg-surface-container-high p-4 rounded-xl shrink-0">
                    <span
                      className="material-symbols-outlined text-primary"
                      data-weight="fill"
                    >
                      shield_with_heart
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-headline font-bold text-on-surface">
                      Our Mission
                    </h3>
                    <p className="text-on-surface-variant mt-2 leading-relaxed">
                      To provide the world's most durable protective coatings
                      using the latest advanced nanotechnology (Liquid-Glass
                      Technologies).
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-surface-container-high p-4 rounded-xl shrink-0">
                    <span
                      className="material-symbols-outlined text-primary"
                      data-weight="fill"
                    >
                      visibility
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-headline font-bold text-on-surface">
                      Our Vision
                    </h3>
                    <p className="text-on-surface-variant mt-2 leading-relaxed">
                      To redefine automotive luxury by ensuring that the
                      showroom shine lasts forever, unaffected by time and
                      weather conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-headline font-black text-on-surface">
                A Decade of <span className="text-primary">Brilliance</span>
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 hidden md:block"></div>
              <div className="space-y-20 relative">
                {/* 2014 block */}
                <div className="flex flex-col md:flex-row items-center w-full">
                  <div className="md:w-1/2 md:pr-12 md:text-right text-left w-full">
                    <div className="text-primary font-headline text-4xl sm:text-5xl font-black mb-2">
                      2014
                    </div>
                    <h4 className="text-xl font-bold text-on-surface">
                      Inception and Launch
                    </h4>
                    <p className="text-on-surface-variant mt-2">
                      Magic Protection was recognized as the first specialized
                      clinic for the care of luxury and rare cars in the region.
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-surface border-4 border-primary rounded-full z-10 hidden md:flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0 w-full">
                    <img
                      alt="The Beginning"
                      className="rounded-xl w-full h-48 object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500 border border-white/5"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjkr5EA-EfX3JXqQ32SeV2ggoSACkgO0X8BhklTejSSJqW2GpMlOOpiBt2eUQ-AhmoB972BFP8YDz9CNGY8e0c65LQNi6Q7ri7GCKXTGXE9YfYAqqsjrKXOmd15EkAUqo22R7rpcvqdlaNnk_o8F-kmwgQaK56947N0mtBsX_q0b7NadHwkBseU0aOgunGUr5VP2a-jIwttpfvUls-_RevLWtJEn8VduV4Gjjm0UgYxoVO0zbX1G7UvguBL0JSdfm6MLfYJSAQ4j8o"
                    />
                  </div>
                </div>

                {/* 2018 block */}
                <div className="flex flex-col md:flex-row-reverse items-center w-full">
                  <div className="md:w-1/2 md:pl-12 text-left w-full">
                    <div className="text-primary font-headline text-4xl sm:text-5xl font-black mb-2">
                      2018
                    </div>
                    <h4 className="text-xl font-bold text-on-surface">
                      The Ceramic Revolution
                    </h4>
                    <p className="text-on-surface-variant mt-2">
                      We were the first to lead the revolution of integrating 9H
                      crystal and diamond coatings for the supercar community.
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-surface border-4 border-primary rounded-full z-10 hidden md:flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div className="md:w-1/2 md:pr-12 mt-4 md:mt-0 w-full">
                    <img
                      alt="Innovation"
                      className="rounded-xl w-full h-48 object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500 border border-white/5"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKscLt55gBxc0cq0ZGmxxMUjoyORPBeO0wI37dr5LJguViRgLEDb2JYuIx1TTnxQfTn7FmAB8F5lp3ZZxWH7uwqn3rxPxSfsIfX3yytIbWrXYxsxkL3oeC_KJ_S0DS4CI_ugsDiONe55FgqRKE14z9m44zJxDj3rF3V3gYYpaLdAh-0I19z8DD6CRP_RBb0zoWcTUZIfHSo_79b3LqrzTaL13Z2QCXmqT18aS4ZhcrmsX88JC-2UW_DGtVDH4wJpPuY_nsRCSHUWqD"
                    />
                  </div>
                </div>

                {/* 2026 block */}
                <div className="flex flex-col md:flex-row items-center w-full">
                  <div className="md:w-1/2 md:pr-12 md:text-right text-left w-full">
                    <div className="text-primary font-headline text-4xl sm:text-5xl font-black mb-2">
                      2026
                    </div>
                    <h4 className="text-xl font-bold text-on-surface">
                      Horizons of the Future
                    </h4>
                    <p className="text-on-surface-variant mt-2">
                      Opening our technologically advanced center with reliance
                      on the latest self-healing paint protection films (PPF)
                      and expanding our services.
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-primary electric-glow rounded-full z-10 hidden md:flex items-center justify-center">
                    <div className="w-3 h-3 bg-on-primary rounded-full animate-pulse"></div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0 w-full">
                    <img
                      alt="Expansion"
                      className="rounded-xl w-full h-48 object-cover border border-primary/30"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq61If2hXm_JZEPRh6qD_PPRyc8lMCpaESeoKt4jqdGur7MkwkD-XfQah9FbLNcHWXNca8pka2odk0CEmyU6E9nZsHfKAC7rjx00q4Oh1h6S9Ee2ihhy6cVHWVTvgx1FgxS2oFIsAaZkf9SUKfwl_c8upUAYzWwh99URgtSeORXkSjWBlxiQ5cAWYmjzJFOsC4a0abRawRrlqTrvdXMjzui2CiFzCWKaMDzK7CFqpdUrUWccuOFveoCvn3bqx6cI-dmXVXvTfFDjAM"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Original Arabic version below
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-white min-h-screen">
      <section className="relative min-h-[70svh] md:min-h-[819px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            alt="سيارة فخمة بلمعان النانو سيراميك"
            className="w-full h-full object-cover opacity-40"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnB8pQIsToHLJKnwc9Y8twhcsOw-8oXjaEhXoHfyIn-MCxTZ5r9gAEQvU_7NDDvs92H_qF-6B6qwASu2ciubS3W-JVge3K1Z9LKT3X6JwBmepii-XTYHw4ZrDF8SOBWFP_4xGtF0wbJgt4QKgKWVWwo_JdzmMejhtXUK-aqNBGBBuTf19e-kgggmsfKN3SrdBDoDllguBGYQetH58E70d7mgmzaDd18Z20L8kGd60QaxYDy-cZmWuNbYNGK0-TtQRAVHX6libI7fQt"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/60 to-surface"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-6 uppercase italic">
            شغفنا هو <span className="text-primary text-glow">الكمال</span>
          </h1>
          <p className="text-on-surface-variant text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium">
            نحن لا نكتفي فقط بالعناية بالسيارات. بل نحافظ على تحفتك الفنية من
            خلال هندسة السيراميك المتقدمة والاهتمام الدقيق بأدق التفاصيل.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary/40"></div>
            <img
              alt="فني يطبق الحماية"
              className="rounded-xl shadow-2xl relative z-10"
              data-alt="Professional technician wearing black gloves meticulously applying liquid ceramic coating"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiS8lL-xNoj526loae9MdqIWCS8QYpJY6TRKCB6ABeKRaikL499WZJUxyFuchEVx60qx1jMKOESCxV9YK-3hHbB1act7-seVyOLsDv98jNJctYz_dUDUhd8Llthc-a_Gk0NmVuJVKMDjXD_gNGEZB7QxIgHtdrJYYEVoJC5lbEc2DqLVSVF957gYguyBJvSk9wzzvPgPpmSH9yDXvHFS365wGo8E0uuNw9hKP21brSe0UzoWq9N1v7LMfiMUo3nkdCHMwS4a5ZFrN1"
            />
            <div className="absolute -bottom-10 -left-10 bg-primary-container/20 p-8 rounded-xl backdrop-blur-md hidden md:block z-20">
              <span
                className="text-primary font-headline font-bold text-4xl"
                dir="ltr"
              >
                +١٠
              </span>
              <p className="text-on-surface-variant font-label uppercase tracking-widest text-xs mt-2">
                سنوات من التميز
              </p>
            </div>
          </div>
          <div className="space-y-8 text-right">
            <div>
              <span className="text-primary font-label uppercase tracking-widest font-bold text-sm">
                فلسفتنا
              </span>
              <h2 className="text-3xl sm:text-4xl font-headline font-black text-on-surface mt-4">
                عيادة السيارات الأولى
              </h2>
              <p className="text-on-surface-variant text-lg mt-6 leading-relaxed">
                تأسست ماجيك بروتكشن إيماناً منا بأن كل مركبة راقية تستحق ملاذاً
                لا يُخترق. مهمتنا هي سد الفجوة بين الصيانة التقليدية للسيارات
                وتقنيات حفظ الأسطح المعتمدة في مجال الطيران.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex gap-6 items-start">
                <div className="bg-surface-container-high p-4 rounded-xl shrink-0">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-weight="fill"
                  >
                    shield_with_heart
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-headline font-bold text-on-surface">
                    مهمتنا
                  </h3>
                  <p className="text-on-surface-variant mt-2 leading-relaxed">
                    تقديم طبقات الحماية الأكثر متانة في العالم باستخدام أحدث
                    تقنيات النانو المتقدمة (Liquid-Glass Technologies).
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-surface-container-high p-4 rounded-xl shrink-0">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-weight="fill"
                  >
                    visibility
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-headline font-bold text-on-surface">
                    رؤيتنا
                  </h3>
                  <p className="text-on-surface-variant mt-2 leading-relaxed">
                    إعادة تعريف مفهوم رفاهية السيارات من خلال ضمان بقاء بريق
                    صالة العرض للأبد، بعيداً عن تأثير الزمن والعوامل الجوية.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-black text-on-surface">
              عقد من <span className="text-primary">التألق</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute right-1/2 transform translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 hidden md:block"></div>
            <div className="space-y-20 relative">
              {/* 2014 block */}
              <div className="flex flex-col md:flex-row items-center w-full">
                <div className="md:w-1/2 md:pl-12 md:text-left text-right w-full">
                  <div
                    className="text-primary font-headline text-4xl sm:text-5xl font-black mb-2"
                    dir="ltr"
                  >
                    2014
                  </div>
                  <h4 className="text-xl font-bold text-on-surface">
                    النشأة والانطلاق
                  </h4>
                  <p className="text-on-surface-variant mt-2">
                    عُرفت ماجيك بروتكشن كأول عيادة متخصصة في العناية بطلاء
                    السيارات الفاخرة والنادرة في المنطقة.
                  </p>
                </div>
                <div className="w-12 h-12 bg-surface border-4 border-primary rounded-full z-10 hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div className="md:w-1/2 md:pr-12 mt-4 md:mt-0 w-full">
                  <img
                    alt="البداية"
                    className="rounded-xl w-full h-48 object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500 border border-white/5"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjkr5EA-EfX3JXqQ32SeV2ggoSACkgO0X8BhklTejSSJqW2GpMlOOpiBt2eUQ-AhmoB972BFP8YDz9CNGY8e0c65LQNi6Q7ri7GCKXTGXE9YfYAqqsjrKXOmd15EkAUqo22R7rpcvqdlaNnk_o8F-kmwgQaK56947N0mtBsX_q0b7NadHwkBseU0aOgunGUr5VP2a-jIwttpfvUls-_RevLWtJEn8VduV4Gjjm0UgYxoVO0zbX1G7UvguBL0JSdfm6MLfYJSAQ4j8o"
                  />
                </div>
              </div>

              {/* 2018 block */}
              <div className="flex flex-col md:flex-row-reverse items-center w-full">
                <div className="md:w-1/2 md:pr-12 text-right w-full">
                  <div
                    className="text-primary font-headline text-4xl sm:text-5xl font-black mb-2"
                    dir="ltr"
                  >
                    2018
                  </div>
                  <h4 className="text-xl font-bold text-on-surface">
                    ثورة السيراميك
                  </h4>
                  <p className="text-on-surface-variant mt-2">
                    كنا أول من قاد ثورة دمج طلاء الكريستال ذو الصلابة 9H والماس
                    لخدمة مجتمع السيارات الفائقة.
                  </p>
                </div>
                <div className="w-12 h-12 bg-surface border-4 border-primary rounded-full z-10 hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0 w-full">
                  <img
                    alt="الابتكار"
                    className="rounded-xl w-full h-48 object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500 border border-white/5"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKscLt55gBxc0cq0ZGmxxMUjoyORPBeO0wI37dr5LJguViRgLEDb2JYuIx1TTnxQfTn7FmAB8F5lp3ZZxWH7uwqn3rxPxSfsIfX3yytIbWrXYxsxkL3oeC_KJ_S0DS4CI_ugsDiONe55FgqRKE14z9m44zJxDj3rF3V3gYYpaLdAh-0I19z8DD6CRP_RBb0zoWcTUZIfHSo_79b3LqrzTaL13Z2QCXmqT18aS4ZhcrmsX88JC-2UW_DGtVDH4wJpPuY_nsRCSHUWqD"
                  />
                </div>
              </div>

              {/* 2026 block */}
              <div className="flex flex-col md:flex-row items-center w-full">
                <div className="md:w-1/2 md:pl-12 md:text-left text-right w-full">
                  <div
                    className="text-primary font-headline text-4xl sm:text-5xl font-black mb-2"
                    dir="ltr"
                  >
                    2026
                  </div>
                  <h4 className="text-xl font-bold text-on-surface">
                    آفاق المستقبل
                  </h4>
                  <p className="text-on-surface-variant mt-2">
                    افتتاح مركزنا المتطور تقنياً مع الاعتماد على أحدث أفلام
                    الحماية (PPF) المعالجة ذاتياً، والتوسع في خدمة المحافظات.
                  </p>
                </div>
                <div className="w-12 h-12 bg-primary electric-glow rounded-full z-10 hidden md:flex items-center justify-center">
                  <div className="w-3 h-3 bg-on-primary rounded-full animate-pulse"></div>
                </div>
                <div className="md:w-1/2 md:pr-12 mt-4 md:mt-0 w-full">
                  <img
                    alt="التوسع"
                    className="rounded-xl w-full h-48 object-cover border border-primary/30"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq61If2hXm_JZEPRh6qD_PPRyc8lMCpaESeoKt4jqdGur7MkwkD-XfQah9FbLNcHWXNca8pka2odk0CEmyU6E9nZsHfKAC7rjx00q4Oh1h6S9Ee2ihhy6cVHWVTvgx1FgxS2oFIsAaZkf9SUKfwl_c8upUAYzWwh99URgtSeORXkSjWBlxiQ5cAWYmjzJFOsC4a0abRawRrlqTrvdXMjzui2CiFzCWKaMDzK7CFqpdUrUWccuOFveoCvn3bqx6cI-dmXVXvTfFDjAM"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
