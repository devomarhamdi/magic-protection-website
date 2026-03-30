import React from 'react';
import GalleryInteractive from '@/components/GalleryInteractive';

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
        <header className="relative pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-linear-to-b from-primary-container/10 via-transparent to-surface opacity-40"></div>
            <div className="absolute -top-20 -right-20 sm:-top-24 sm:-right-24 w-64 h-64 sm:w-96 sm:h-96 bg-primary-container/20 blur-[120px] rounded-full"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10 text-left">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                  Visual Excellence
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-extrabold text-on-surface mb-5 md:mb-6 leading-tight">
                  Gallery of{' '}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-container leading-normal pb-2">
                    Mastery
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-on-surface-variant max-w-lg font-body leading-relaxed">
                  Witness the intersection of automotive engineering and
                  invisible protection. Every curve, every reflection, preserved
                  with meticulous precision.
                </p>
              </div>
            </div>
          </div>
        </header>
        <GalleryInteractive locale="en" />
      </div>
    );
  }

  // Original Arabic code
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-white min-h-screen">
      <header className="relative pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-b from-primary-container/10 via-transparent to-surface opacity-40"></div>
          <div className="absolute -top-20 -left-20 sm:-top-24 sm:-left-24 w-64 h-64 sm:w-96 sm:h-96 bg-primary-container/20 blur-[120px] rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-right">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                التميز البصري
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-extrabold text-on-surface mb-5 md:mb-6 leading-tight">
                معرض{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-container leading-normal pb-2">
                  الإتقان
                </span>
              </h1>
              <p className="text-base sm:text-lg text-on-surface-variant max-w-lg font-body leading-relaxed">
                شاهد نقطة التقاء هندسة السيارات والحماية الخفية. كل انحناء، كل
                انعكاس، تم الحفاظ عليه بدقة متناهية.
              </p>
            </div>
          </div>
        </div>
      </header>

      <GalleryInteractive locale="ar" />
    </div>
  );
}
