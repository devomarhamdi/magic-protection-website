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
        <main className="min-h-screen">
          <section className="relative pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest via-surface to-surface"></div>
              <img
                className="w-full h-full object-cover opacity-30"
                alt="Glossy black Mercedes"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt78ESQd93AaX9DOJPRfLtJOKQNHn1N7cMa6lPXoVJFBkmKJWjj8bPSE4TS3fj7XOtrPvj-pucBCnFursZSeis5gCt6lrr9UDq7UgNsvw1x-H_97EUjD0DaJIKcFm1hNOro1SG8IQm4Qzkjvk-wjvLjEuOFKZQhjNWTgfgi-Ux-piDmdLhZfUzM3VtrGqCRnxeqgTIJgkOIjYyPyRMsXQW3nKIg4DmXQpd7pISL0ETR3C24OiINTUaGk2rFvjaGjg_F6TfgGkUMWkE"
              />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center">
              <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block font-label font-semibold">
                Luxury Car Protection
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-on-surface mb-6">
                Book Your Appointment for{' '}
                <span className="text-primary italic">Brilliance</span>
              </h1>
              <p className="text-base sm:text-lg max-w-2xl mx-auto text-on-surface-variant opacity-80 mb-10 md:mb-12 leading-relaxed">
                Experience the pinnacle of automotive beauty preservation. Our
                experts combine the latest paint protection technology with
                meticulous craftsmanship to ensure the highest levels of
                security for your investment.
              </p>
            </div>
          </section>

          <section
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16"
            dir="ltr"
          >
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-headline font-bold text-on-surface">
                  Request a Free Consultation
                </h2>
                <p className="text-on-surface-variant">
                  Fill in the details below, and our experts will contact you
                  within two business hours.
                </p>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
                      Full Name
                    </label>
                    <input
                      className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface p-4 transition-all"
                      placeholder="e.g. John Doe"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
                      Phone Number
                    </label>
                    <input
                      className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface p-4 transition-all"
                      placeholder="+20 1XX XXX XXXX"
                      type="tel"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
                      Requested Service
                    </label>
                    <select className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface p-4 transition-all appearance-none cursor-pointer">
                      <option>Nano Ceramic</option>
                      <option>Paint Protection Film (PPF)</option>
                      <option>Exterior Detailing</option>
                      <option>Window Tinting</option>
                      <option>Comprehensive Protection Package</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
                      Car Model
                    </label>
                    <input
                      className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface p-4 transition-all"
                      placeholder="e.g. Mercedes S-Class"
                      type="text"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
                    Message (Optional)
                  </label>
                  <textarea
                    className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface p-4 transition-all"
                    placeholder="How can we help you today?"
                    rows={4}
                  ></textarea>
                </div>
                <button className="w-full bg-primary-container hover:bg-primary-container/80 text-on-primary-container font-headline font-bold py-5 rounded-lg transition-all duration-300 electric-glow flex items-center justify-center gap-3">
                  Confirm Booking Request
                </button>
              </form>

              <div className="glass-card p-6 md:p-8 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between border-l-4 border-l-primary gap-6">
                <div className="flex items-center gap-4">
                  <span
                    className="material-symbols-outlined text-primary text-3xl"
                    data-icon="schedule"
                  >
                    schedule
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">
                      Working Hours
                    </p>
                    <p className="text-on-surface font-headline font-semibold">
                      Saturday - Thursday: 9:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
                <div className="text-left md:text-right w-full md:w-auto">
                  <p className="text-xs text-primary font-bold">Friday</p>
                  <p className="text-on-surface-variant opacity-60">
                    Official Holiday
                  </p>
                </div>
              </div>
            </div>

            <div className="self-start lg:self-center">
              <div className="glass-card rounded-xl overflow-hidden shadow-2xl flex flex-col border border-white/5">
                <div className="h-60 sm:h-75 lg:h-100 bg-surface-container relative shrink-0">
                  <div className="absolute inset-0 grayscale opacity-40 contrast-125">
                    <img
                      className="w-full h-full object-cover"
                      alt="Branches Map"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgzdqOaqND5nB3el0HQxwiQB17Ee6dFDSsbmUYJmcRusIJhAvzUT_U-H36nxK-metL_haea4lxEHjJ_0dFc5FNsRhXePXj5YIRVBgbawuj3NSdnxmHvnuDsuiiknae58i7xiHlTDqZtLjP36Pl_RR_J540b1K0LJwKh_GgBraDz3AB11up8qwPlWyaLhyBmAFY-hooQmdJKcE4-EmaHLKiQPBIQlVGGVnVijoJXRf0mzghRJ0-GS4Ia0wpwjhmE3dv3eCwgV5v2V-a"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 flex items-start gap-4">
                    <div className="bg-primary p-3 rounded-full electric-glow shrink-0 flex items-center justify-center">
                      <span
                        className="material-symbols-outlined text-on-primary"
                        data-icon="location_on"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        location_on
                      </span>
                    </div>
                    <div className="bg-surface-container-high/90 backdrop-blur-md p-4 rounded-xl border border-white/10 flex flex-col justify-center">
                      <p className="text-primary font-bold text-sm leading-tight mb-1">
                        Main Center
                      </p>
                      <p className="text-on-surface text-xs leading-tight">
                        Cairo, Nasr City
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex flex-col gap-6 sm:gap-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                      <h3 className="text-primary font-headline font-bold text-lg">
                        Direct Contact
                      </h3>
                      <div className="space-y-4">
                        <a
                          className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors"
                          href="tel:+201000411099"
                        >
                          <span
                            className="material-symbols-outlined text-primary shrink-0"
                            data-icon="call"
                          >
                            call
                          </span>
                          <span className="font-bold text-sm">
                            +20 100 041 1099
                          </span>
                        </a>
                        <a
                          className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors"
                          href="mailto:info@magic-protection.com"
                        >
                          <span
                            className="material-symbols-outlined text-primary shrink-0"
                            data-icon="mail"
                          >
                            mail
                          </span>
                          <span className="text-sm break-all font-bold">
                            info@magic-protection.com
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-primary font-headline font-bold text-lg">
                        Social Media
                      </h3>
                      <div className="flex gap-4">
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
                        >
                          <span
                            className="material-symbols-outlined"
                            data-icon="travel_explore"
                          >
                            travel_explore
                          </span>
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
                        >
                          <span
                            className="material-symbols-outlined"
                            data-icon="photo_camera"
                          >
                            photo_camera
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  // Original Arabic version below
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-white min-h-screen">
      <main className="min-h-screen">
        <section className="relative pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest via-surface to-surface"></div>
            <img
              className="w-full h-full object-cover opacity-30"
              alt="سيارة مرسيدس سوداء لامعة"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt78ESQd93AaX9DOJPRfLtJOKQNHn1N7cMa6lPXoVJFBkmKJWjj8bPSE4TS3fj7XOtrPvj-pucBCnFursZSeis5gCt6lrr9UDq7UgNsvw1x-H_97EUjD0DaJIKcFm1hNOro1SG8IQm4Qzkjvk-wjvLjEuOFKZQhjNWTgfgi-Ux-piDmdLhZfUzM3VtrGqCRnxeqgTIJgkOIjYyPyRMsXQW3nKIg4DmXQpd7pISL0ETR3C24OiINTUaGk2rFvjaGjg_F6TfgGkUMWkE"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block font-label font-semibold">
              حماية السيارات الفاخرة
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-on-surface mb-6">
              احجز موعدك <span className="text-primary italic">للتألق</span>
            </h1>
            <p className="text-base sm:text-lg max-w-2xl mx-auto text-on-surface-variant opacity-80 mb-10 md:mb-12 leading-relaxed">
              اختبر القمة في الحفاظ على جمال سيارتك. يجمع خبراؤنا بين أحدث
              تكنولوجيا حماية الطلاء والحرفية الدقيقة لضمان أعلى مستويات الأمان
              لِاستثمارك.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-headline font-bold text-on-surface">
                اطلب استشارة مجانية
              </h2>
              <p className="text-on-surface-variant">
                املأ البيانات أدناه وسيتواصل معك خبراؤنا خلال ساعتين من ساعات
                العمل.
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
                    الاسم بالكامل
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface p-4 transition-all"
                    placeholder="مثال: أحمد علي"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
                    رقم الهاتف
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface p-4 transition-all text-right"
                    placeholder="01XXXXXXXXX"
                    type="tel"
                    dir="ltr"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
                    الخدمة المطلوبة
                  </label>
                  <div className="relative">
                    <select
                      className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface p-4 pl-12 transition-all cursor-pointer text-right appearance-none bg-none"
                      dir="rtl"
                    >
                      <option>نانو سيراميك</option>
                      <option>أفلام حماية الطلاء</option>
                      <option>تلميع وعناية خارجية</option>
                      <option>عزل حراري للنوافذ</option>
                      <option>باقة الحماية الشاملة</option>
                    </select>
                    <span
                      className="material-symbols-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant"
                      data-icon="expand_more"
                    >
                      expand_more
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
                    نوع السيارة
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface p-4 transition-all"
                    placeholder="مثال: مرسيدس S-Class"
                    type="text"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
                  رسالتك (اختياري)
                </label>
                <textarea
                  className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface p-4 transition-all"
                  placeholder="كيف يمكننا مساعدتك اليوم؟"
                  rows={4}
                ></textarea>
              </div>
              <button className="w-full bg-primary-container hover:bg-primary-container/80 text-on-primary-container font-headline font-bold py-5 rounded-lg transition-all duration-300 electric-glow flex items-center justify-center gap-3">
                تأكيد طلب الحجز
              </button>
            </form>

            <div className="glass-card p-6 md:p-8 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between border-r-4 border-r-primary gap-6">
              <div className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-primary text-3xl"
                  data-icon="schedule"
                >
                  schedule
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">
                    ساعات العمل
                  </p>
                  <p className="text-on-surface font-headline font-semibold">
                    السبت - الخميس: ٩:٠٠ ص - ٩:٠٠ م
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-primary font-bold">يوم الجمعة</p>
                <p className="text-on-surface-variant opacity-60">
                  عطلة رسمية للمركز
                </p>
              </div>
            </div>
          </div>

          <div className="self-start lg:self-center">
            <div className="glass-card rounded-xl overflow-hidden shadow-2xl flex flex-col border border-white/5">
              <div className="h-60 sm:h-75 lg:h-100 bg-surface-container relative shrink-0">
                <div className="absolute inset-0 grayscale opacity-40 contrast-125">
                  <img
                    className="w-full h-full object-cover"
                    alt="خريطة الفروع"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgzdqOaqND5nB3el0HQxwiQB17Ee6dFDSsbmUYJmcRusIJhAvzUT_U-H36nxK-metL_haea4lxEHjJ_0dFc5FNsRhXePXj5YIRVBgbawuj3NSdnxmHvnuDsuiiknae58i7xiHlTDqZtLjP36Pl_RR_J540b1K0LJwKh_GgBraDz3AB11up8qwPlWyaLhyBmAFY-hooQmdJKcE4-EmaHLKiQPBIQlVGGVnVijoJXRf0mzghRJ0-GS4Ia0wpwjhmE3dv3eCwgV5v2V-a"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
                <div className="absolute bottom-6 right-6 flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-full electric-glow shrink-0 flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-on-primary"
                      data-icon="location_on"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      location_on
                    </span>
                  </div>
                  <div className="bg-surface-container-high/90 backdrop-blur-md p-4 rounded-xl border border-white/10 flex flex-col justify-center">
                    <p className="text-primary font-bold text-sm leading-tight mb-1">
                      المركز الرئيسي
                    </p>
                    <p className="text-on-surface text-xs leading-tight">
                      القاهرة، مدينة نصر
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col gap-6 sm:gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4">
                    <h3 className="text-primary font-headline font-bold text-lg">
                      تواصل مباشر
                    </h3>
                    <div className="space-y-4">
                      <a
                        className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors"
                        href="tel:+201000411099"
                      >
                        <span
                          className="material-symbols-outlined text-primary shrink-0"
                          data-icon="call"
                        >
                          call
                        </span>
                        <span className="font-bold text-sm" dir="ltr">
                          +20 100 041 1099
                        </span>
                      </a>
                      <a
                        className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors"
                        href="mailto:info@magic-protection.com"
                      >
                        <span
                          className="material-symbols-outlined text-primary shrink-0"
                          data-icon="mail"
                        >
                          mail
                        </span>
                        <span className="text-sm break-all font-bold">
                          info@magic-protection.com
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-primary font-headline font-bold text-lg">
                      مواقع التواصل
                    </h3>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
                      >
                        <span
                          className="material-symbols-outlined"
                          data-icon="travel_explore"
                        >
                          travel_explore
                        </span>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
                      >
                        <span
                          className="material-symbols-outlined"
                          data-icon="photo_camera"
                        >
                          photo_camera
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
