import { Link } from '@/i18n/routing';
import React from 'react';

const articlesAR = [
  {
    slug: 'ceramic-coating-myths',
    title: '٥ خرافات شائعة عن النانو سيراميك وتصحيحها',
    summary:
      'اكتشف الحقيقة وراء حماية النانو سيراميك ولماذا تعتبر الاستثمار الأمثل للحفاظ على قيمة مظهر سيارتك الفاخرة.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCd_wbXmy9tnDvrFnqDrLKV4EN8ZjhGxURfXw6_kzd7Sq0QK1qE95smIkLDhULdGRLQWPAf3yyKaweEF03SpBU1-I3iOLq8KkaAW47T9Tpe6jUdpfzyWY4LdAwgieuDabEJQJe_2JJV9cqCguytD6nQsywnPbAUhp7w0-Hl4Kx-hPpquMxG58Dw2dHtmsiXigDH7h2Bo18lYQpF6-DqxMXGO-nABJNIAbBt2p82vu6MkkMBD9Ja5KcKzXq1RKL17hym9McnC6JEyQgP',
    date: '٢٤ أكتوبر ٢٠٢٦',
  },
  {
    slug: 'ppf-vs-vinyl-wrap',
    title: 'أفلام الحماية (PPF) مقابل التغليف (Vinyl): أيهما الأنسب؟',
    summary:
      'بينما يغير كلاهما مظهر السيارة، إلا أن أحدهما فقط يوفر درعاً حقيقياً للحماية من الصدمات والخدوش بمعالجة ذاتية.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3r2uocLkxi9zWlTuWyzH7H3SNT_qx3Hy1DY82WZzc1wTf4Gj92KvCMw_RSmus7HTlVEuWv_9Wr0zxbDHPyenJWV_AMW_kbEchJMroYvyI9sEpKipH25UD4vVdDRE4ReH0f3eZsPHGTxX8TYqmAAOOQ7m8d91jQ82Jy06C0HXHM_qX3YdWr3Cy9WduBswjlEZGO-i9M0ltCfLEy-iW5OhpU7OXniTBhJAHxP96TPEIP_FsU3PqOuvEFGlHvLgR5KKQVahzN-sUmviR',
    date: '٠٢ نوفمبر ٢٠٢٦',
  },
  {
    slug: 'winter-car-care',
    title: 'تجهيز سيارتك النخبوية لمواجهة تقلبات الشتاء والأمطار',
    summary:
      'الأمطار والشوائب الجوية قد تؤثر على طبقة اللمعان الخارجية. تعرف على كيفية حماية سيارتك في الموسم البارد.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnkyD6BgB0Jjw6S0bEGd1_bOy86fG9-iNRIajAAETMxOTu0_YD83mdCeLwLUXPiB2CR2gmycVZFpHGjneJg349SgXjCfibGJR04JPnVNOQtvSI5kZkOHMsAnHjYbyGVf2uD5qzKYCkXm_boYw-3x4SCSyJQV7iSs6JS8BXuHuv766y-_s-405xJf76t6QJz560EiIXZg6NCe5cnCPKu06p80LfFIbQ2y5KKB2LsYBMljqnTNEhUng4nzUkvpgy_Mt8fq6DMP1Yea0D',
    date: '١٥ ديسمبر ٢٠٢٦',
  },
];

const articlesEN = [
  {
    slug: 'ceramic-coating-myths',
    title: '5 Common Myths About Nano Ceramic Coatings Debunked',
    summary:
      'Discover the truth behind nano ceramic protection and why it is the optimal investment to preserve your luxury car’s appearance.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCd_wbXmy9tnDvrFnqDrLKV4EN8ZjhGxURfXw6_kzd7Sq0QK1qE95smIkLDhULdGRLQWPAf3yyKaweEF03SpBU1-I3iOLq8KkaAW47T9Tpe6jUdpfzyWY4LdAwgieuDabEJQJe_2JJV9cqCguytD6nQsywnPbAUhp7w0-Hl4Kx-hPpquMxG58Dw2dHtmsiXigDH7h2Bo18lYQpF6-DqxMXGO-nABJNIAbBt2p82vu6MkkMBD9Ja5KcKzXq1RKL17hym9McnC6JEyQgP',
    date: 'October 24, 2026',
  },
  {
    slug: 'ppf-vs-vinyl-wrap',
    title: 'PPF vs. Vinyl Wrap: Which is Right for You?',
    summary:
      'While both change a car’s look, only one provides a true self-healing shield against impacts and scratches.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3r2uocLkxi9zWlTuWyzH7H3SNT_qx3Hy1DY82WZzc1wTf4Gj92KvCMw_RSmus7HTlVEuWv_9Wr0zxbDHPyenJWV_AMW_kbEchJMroYvyI9sEpKipH25UD4vVdDRE4ReH0f3eZsPHGTxX8TYqmAAOOQ7m8d91jQ82Jy06C0HXHM_qX3YdWr3Cy9WduBswjlEZGO-i9M0ltCfLEy-iW5OhpU7OXniTBhJAHxP96TPEIP_FsU3PqOuvEFGlHvLgR5KKQVahzN-sUmviR',
    date: 'November 02, 2026',
  },
  {
    slug: 'winter-car-care',
    title: 'Prepping Your Elite Vehicle for Winter and Rain',
    summary:
      'Rain and atmospheric pollutants can affect your exterior gloss. Learn how to protect your car effectively during the cold season.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnkyD6BgB0Jjw6S0bEGd1_bOy86fG9-iNRIajAAETMxOTu0_YD83mdCeLwLUXPiB2CR2gmycVZFpHGjneJg349SgXjCfibGJR04JPnVNOQtvSI5kZkOHMsAnHjYbyGVf2uD5qzKYCkXm_boYw-3x4SCSyJQV7iSs6JS8BXuHuv766y-_s-405xJf76t6QJz560EiIXZg6NCe5cnCPKu06p80LfFIbQ2y5KKB2LsYBMljqnTNEhUng4nzUkvpgy_Mt8fq6DMP1Yea0D',
    date: 'December 15, 2026',
  },
];

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === 'en';
  const articles = isEn ? articlesEN : articlesAR;

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-white min-h-screen">
      <header className="relative min-h-105 sm:min-h-125 flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-20"
            alt={
              isEn ? 'Luxury car in dim lighting' : 'سيارة فاخرة في إضاءة خافتة'
            }
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuMXeyVEP32uXHbPrfls70AxUwPzLN7Kth8AEH-NIdFsHGSMAbaP84sGX2WEWufQk1hQaZRHUMcMu2qtRQnKmxh1r4XVevpchQsX6QuCZINOKont3O6-_yTtIP2qB2Jlus9EVJjqnQ-S3xvK8J0mFjNXcGAlfvTdqvpxLAE8Skhrtw_mkOaaJhc2IYoGM7nxWn2QJn-4L-VpG7WgQhm7bG7fFu7fQicfSBlyC9QZqjcareG4UytdAnvftzp0TfM-kJ4RnYzMgwggRN"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-surface to-surface"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="inline-block text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary mb-6 font-bold">
            {isEn ? 'Knowledge Base' : 'قاعدة المعرفة'}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface mb-8">
            {isEn ? 'Articles & Blog' : 'المقالات والمدونة'}
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed">
            {isEn
              ? 'Expert insights on elite car care and advanced protection technologies.'
              : 'رؤى الخبراء حول العناية الفائقة بالسيارات وتقنيات الحماية المتقدمة.'}
          </p>
        </div>
      </header>

      <main className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {articles.map((article) => (
            <Link
              href={`/articles/${article.slug}`}
              key={article.slug}
              className="glass-card rounded-2xl overflow-hidden group hover:bg-surface-container-high transition-all duration-500 flex flex-col"
            >
              <div className="h-52 sm:h-60 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={article.title}
                  src={article.image}
                />
                <div
                  className={`absolute top-4 ${isEn ? 'left-4' : 'right-4'} bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary`}
                >
                  {article.date}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
              </div>
              <div
                className={`p-6 sm:p-8 pb-8 sm:pb-10 flex flex-col flex-1 ${isEn ? 'text-left' : 'text-right'}`}
              >
                <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface group-hover:text-primary transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-sm mb-8 flex-1">
                  {article.summary}
                </p>
                <div
                  className={`flex items-center gap-2 text-primary font-headline font-bold uppercase text-xs tracking-wider group-hover:gap-4 transition-all ${isEn ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {isEn ? (
                    <>
                      Read Article{' '}
                      <span
                        className="material-symbols-outlined text-sm"
                        data-icon="arrow_forward"
                      >
                        arrow_forward
                      </span>
                    </>
                  ) : (
                    <>
                      <span
                        className="material-symbols-outlined text-sm transform rotate-180"
                        data-icon="arrow_forward"
                      >
                        arrow_forward
                      </span>{' '}
                      اقرأ المقال
                    </>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
