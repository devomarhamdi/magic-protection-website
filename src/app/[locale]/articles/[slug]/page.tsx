import { Link } from '@/i18n/routing';
import React from 'react';
import { notFound } from 'next/navigation';

// Mock DB in Arabic
const articlesAr: Record<
  string,
  { title: string; content: string[]; image: string; date: string }
> = {
  'ceramic-coating-myths': {
    title: '٥ خرافات شائعة عن النانو سيراميك وتصحيحها',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCd_wbXmy9tnDvrFnqDrLKV4EN8ZjhGxURfXw6_kzd7Sq0QK1qE95smIkLDhULdGRLQWPAf3yyKaweEF03SpBU1-I3iOLq8KkaAW47T9Tpe6jUdpfzyWY4LdAwgieuDabEJQJe_2JJV9cqCguytD6nQsywnPbAUhp7w0-Hl4Kx-hPpquMxG58Dw2dHtmsiXigDH7h2Bo18lYQpF6-DqxMXGO-nABJNIAbBt2p82vu6MkkMBD9Ja5KcKzXq1RKL17hym9McnC6JEyQgP',
    date: '٢٤ أكتوبر ٢٠٢٦',
    content: [
      'لقد أحدثت طلاءات النانو سيراميك ثورة حقيقية في عالم العناية بالسيارات، ولكن مع كل تقنية جديدة تأتي مفاهيم خاطئة. الكثير من مالكي السيارات لا يدركون تماماً ما يمكن للنانو سيراميك فعله وما لا يمكنه فعله.',
      'الخرافة الأولى: النانو سيراميك مضاد للخدوش العميقة. على الرغم من أن السيراميك بصلابة 9H يضيف طبقة قوية لسيارتك، إلا أنه لا يجعلها مضادة للرصاص. هو يحمي ببراعة من الخدوش الدقيقة (Micro-marring) ودوائر الغسيل، لكن حصى الطريق أو الاحتكاكات القوية ستظل قادرة على اختراقه.',
      'الخرافة الثانية: لن تحتاج لغسل سيارتك أبداً. الطبيعة الطاردة للماء تجعل الأوساخ تنزلق بسهولة، مما يجعل السيارة تبدو "منظفة ذاتياً" في المطر. ومع ذلك، فإن غبار الطريق سيتراكم في النهاية. الفائدة الحقيقية هي أن غسيل السيارة سيتحول من مهمة شاقة تستغرق ساعات إلى عملية بسيطة لا تتعدى ١٥ دقيقة.',
      'الخرافة الثالثة: النانو سيراميك بديل لطبقة اللمعان الأصلية (Clear Coat). الطلاء السيراميكي هو إضافة لطبقة اللمعان وليس بديلاً عنها. هو يرتبط كيميائياً بطلاء المصنع ليخلق طبقة دفاعية ضحية تحمي اللون الأصلي.',
      'في ماجيك بروتكشن، نهتم بأدق تفاصيل عملية التطبيق لضمان أفضل نتيجة. تواصل معنا إذا كنت مستعداً لترقية دفاعات سيارتك.',
    ],
  },
  'ppf-vs-vinyl-wrap': {
    title: 'أفلام الحماية (PPF) مقابل التغليف (Vinyl): أيهما الأنسب؟',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3r2uocLkxi9zWlTuWyzH7H3SNT_qx3Hy1DY82WZzc1wTf4Gj92KvCMw_RSmus7HTlVEuWv_9Wr0zxbDHPyenJWV_AMW_kbEchJMroYvyI9sEpKipH25UD4vVdDRE4ReH0f3eZsPHGTxX8TYqmAAOOQ7m8d91jQ82Jy06C0HXHM_qX3YdWr3Cy9WduBswjlEZGO-i9M0ltCfLEy-iW5OhpU7OXniTBhJAHxP96TPEIP_FsU3PqOuvEFGlHvLgR5KKQVahzN-sUmviR',
    date: '٠٢ نوفمبر ٢٠٢٦',
    content: [
      'المعضلة التي يواجهها العديد من مالكي السيارات الفارهة: هل يجب أن أحصل على تغليف فينيل (Vinyl Wrap) أم فيلم حماية الطلاء (PPF)؟ على الرغم من أن كليهما عبارة عن رقائق توضع فوق طلاء السيارة، إلا أن أغراضهما تختلف تماماً.',
      'تغليف الفينيل هو تجميلي في المقام الأول. يسمح لك بتغيير لون ولمعان سيارتك دون الحاجة لطلاء دائم. ومع ذلك، فهي طبقات رقيقة (حوالي ٣-٤ ميل) وتوفر حماية ضئيلة جداً ضد حصى الطريق أو الخدوش.',
      'أما أفلام الحماية (PPF)، فقد صُممت لتكون درعاً حصيناً. بسمك يتراوح من ٨ إلى ١٠ ميل من مادة البولي يوريثان، يمتص الـ PPF الصدمات القوية التي قد تدمر طلاءك. علاوة على ذلك، تتميز الأفلام الحديثة بخاصية المعالجة الذاتية—أي أن الخدوش الخفيفة تختفي بمجرد التعرض للحرارة.',
      'إذا كنت تحب طلاء المصنع وتريد الحفاظ عليه، فالخيار هو PPF. إذا أردت تغيير اللون مؤقتاً بتكلفة أقل، فالخيار هو الفينيل. وللحصول على الحماية القصوى مع اللون الجديد، يمكنك وضع PPF فوق الفينيل.',
    ],
  },
  'winter-car-care': {
    title: 'تجهيز سيارتك النخبوية لمواجهة تقلبات الشتاء والأمطار',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnkyD6BgB0Jjw6S0bEGd1_bOy86fG9-iNRIajAAETMxOTu0_YD83mdCeLwLUXPiB2CR2gmycVZFpHGjneJg349SgXjCfibGJR04JPnVNOQtvSI5kZkOHMsAnHjYbyGVf2uD5qzKYCkXm_boYw-3x4SCSyJQV7iSs6JS8BXuHuv766y-_s-405xJf76t6QJz560EiIXZg6NCe5cnCPKu06p80LfFIbQ2y5KKB2LsYBMljqnTNEhUng4nzUkvpgy_Mt8fq6DMP1Yea0D',
    date: '١٥ ديسمبر ٢٠٢٦',
    content: [
      'يجلب فصل الشتاء معه سلسلة من التحديات والمخاطر الكيميائية لسيارتك. الأمطار والشوائب الجوية وبقايا المواد الكيميائية على الطرق يمكن أن تسرع من تآكل طبقة اللمعان الخارجية إذا تُركت بدون حماية.',
      'خط الدفاع الأول هو تطبيق حاجز طارد للمياه. إذا لم يكن لديك طلاء سيراميك دائم، فإن استخدام مادة سيلنت (Silica Sealant) عالية الجودة ضروري جداً قبل بداية موسم المطر، حيث يمنع هذا الحاجز ترسيب الشوائب في الطلاء.',
      'حماية الأجزاء السفلية من السيارة لا تقل أهمية. فالهيكل السفلي يفتقر لتغطية الطلاء المكثفة الموجودة في الأعلى، مما يجعله عرضة للتآكل بفعل الرطوبة والمواد الملحية.',
      'أخيراً، تأكد من استخدام سوائل مساحات مخصصة والتأكد من جودة شفرات المساحات. مياه المطر والشوائب قد تؤدي لتلف المساحات المطاطية العادية وتسبب خدوشاً في الزجاج إذا لم تكن في حالة ممتازة.',
    ],
  },
};

const articlesEn: Record<
  string,
  { title: string; content: string[]; image: string; date: string }
> = {
  'ceramic-coating-myths': {
    title: '5 Common Nano Ceramic Coating Myths Debunked',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCd_wbXmy9tnDvrFnqDrLKV4EN8ZjhGxURfXw6_kzd7Sq0QK1qE95smIkLDhULdGRLQWPAf3yyKaweEF03SpBU1-I3iOLq8KkaAW47T9Tpe6jUdpfzyWY4LdAwgieuDabEJQJe_2JJV9cqCguytD6nQsywnPbAUhp7w0-Hl4Kx-hPpquMxG58Dw2dHtmsiXigDH7h2Bo18lYQpF6-DqxMXGO-nABJNIAbBt2p82vu6MkkMBD9Ja5KcKzXq1RKL17hym9McnC6JEyQgP',
    date: 'October 24, 2026',
    content: [
      "Nano ceramic coatings have truly revolutionized the world of car care, but with every new technology comes misconceptions. Many car owners don't fully realize what nano ceramic can and cannot do.",
      "Myth #1: Ceramic coatings are highly scratch-proof. Although 9H ceramic adds a robust layer to your vehicle, it doesn't make it bulletproof. It brilliantly protects against micro-marring and wash swirls, but road debris or heavy friction can still penetrate it.",
      'Myth #2: You will never need to wash your car again. The hydrophobic nature makes dirt slide off easily, making the car look "self-cleaning" in the rain. However, road grime will build up eventually. The real benefit is that washing transforms from a tedious hours-long chore to a simple 15-minute process.',
      'Myth #3: Nano ceramic replaces the clear coat. A ceramic coating is an addition to the clear coat, not a replacement. It chemically bonds to the factory paint to create a sacrificial defensive layer that protects the original color.',
      "At Magic Protection, we care about the finest details of the application process to ensure the best results. Contact us if you're ready to upgrade your vehicle's defenses.",
    ],
  },
  'ppf-vs-vinyl-wrap': {
    title: 'PPF vs Vinyl Wrap: Which is Right For You?',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3r2uocLkxi9zWlTuWyzH7H3SNT_qx3Hy1DY82WZzc1wTf4Gj92KvCMw_RSmus7HTlVEuWv_9Wr0zxbDHPyenJWV_AMW_kbEchJMroYvyI9sEpKipH25UD4vVdDRE4ReH0f3eZsPHGTxX8TYqmAAOOQ7m8d91jQ82Jy06C0HXHM_qX3YdWr3Cy9WduBswjlEZGO-i9M0ltCfLEy-iW5OhpU7OXniTBhJAHxP96TPEIP_FsU3PqOuvEFGlHvLgR5KKQVahzN-sUmviR',
    date: 'November 2, 2026',
    content: [
      "The dilemma facing many luxury car owners: Should I get a Vinyl Wrap or Paint Protection Film (PPF)? While both are films applied over the vehicle's paint, their purposes are entirely different.",
      'Vinyl wraps are primarily cosmetic. They allow you to change the color and finish of your car without needing permanent paint. However, they are thin films (around 3-4 mils) and offer very little protection against road debris or scratches.',
      'Paint Protection Film (PPF), on the other hand, is designed to be an impenetrable shield. With a thickness ranging from 8 to 10 mils of polyurethane, PPF absorbs heavy impacts that could ruin your paint. Furthermore, modern films feature self-healing properties—meaning minor scratches disappear when exposed to heat.',
      'If you love your factory paint and want to protect it, the choice is PPF. If you want to temporarily change the color at a lower cost, vinyl is the way to go. For maximum protection combined with a new color, you can even apply PPF over a vinyl wrap.',
    ],
  },
  'winter-car-care': {
    title: 'Preparing Your Elite Vehicle for Winter and Rain',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnkyD6BgB0Jjw6S0bEGd1_bOy86fG9-iNRIajAAETMxOTu0_YD83mdCeLwLUXPiB2CR2gmycVZFpHGjneJg349SgXjCfibGJR04JPnVNOQtvSI5kZkOHMsAnHjYbyGVf2uD5qzKYCkXm_boYw-3x4SCSyJQV7iSs6JS8BXuHuv766y-_s-405xJf76t6QJz560EiIXZg6NCe5cnCPKu06p80LfFIbQ2y5KKB2LsYBMljqnTNEhUng4nzUkvpgy_Mt8fq6DMP1Yea0D',
    date: 'December 15, 2026',
    content: [
      'Winter brings a series of challenges and chemical hazards for your vehicle. Rain, atmospheric fallout, and chemical residues on the road can accelerate the degradation of your clear coat if left unprotected.',
      "The first line of defense is applying a water-repellent barrier. If you don't have a permanent ceramic coating, using a high-quality silica sealant is absolutely crucial before the rainy season begins, as this barrier prevents contaminants from embedding into the paint.",
      'Protecting the underside of the vehicle is equally important. The undercarriage lacks the extensive paint coverage found on top, making it vulnerable to corrosion from moisture and salt.',
      'Finally, make sure to use dedicated windshield washer fluids and check the quality of your wiper blades. Rainwater and debris can ruin standard rubber wipers and cause glass scratches if they are not in excellent condition.',
    ],
  },
};

export default async function SingleArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const isEn = locale === 'en';

  // They requested the single article page content to always be Arabic
  const article = articlesAr[slug];

  if (!article) {
    notFound();
  }

  if (isEn) {
    return (
      <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-white min-h-screen">
        <header className="relative min-h-[50vh] md:min-h-[60vh] flex items-end justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-30"
              alt={article.title}
              src={article.image}
            />
            <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent"></div>
          </div>

          <div className="relative z-10 w-full max-w-4xl px-6 lg:px-8 pb-16 text-left">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors uppercase tracking-widest text-sm font-bold mb-8"
            >
              <span
                className="material-symbols-outlined text-sm"
                data-icon="arrow_back"
              >
                arrow_back
              </span>
              Back to Articles
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-headline font-extrabold tracking-tight text-on-surface mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-on-surface-variant text-sm">
              <div className="flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="calendar_today"
                >
                  calendar_today
                </span>
                {article.date}
              </div>
              <span>•</span>
              <div className="text-primary font-bold uppercase tracking-widest">
                Car Protection
              </div>
            </div>
          </div>
        </header>

        <main className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-4xl mx-auto">
          <article className="glass-card rounded-2xl p-6 sm:p-8 md:p-12 border-l-4 border-l-primary leading-loose text-base md:text-lg text-on-surface-variant font-light space-y-6 sm:space-y-8 text-left">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>

          <div className="mt-16 text-center border-t border-white/5 pt-16">
            <h3 className="text-2xl font-headline font-bold mb-6 text-on-surface">
              Ready to protect your vehicle?
            </h3>
            <Link
              href="/contact"
              className="inline-block bg-primary text-on-primary px-4 sm:px-6 lg:px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform duration-300 electric-glow"
            >
              Talk to an Expert
            </Link>
          </div>
        </main>
      </div>
    );
  }

  // Arabic
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-white min-h-screen">
      <header className="relative min-h-[50vh] md:min-h-[60vh] flex items-end justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-30"
            alt={article.title}
            src={article.image}
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-4xl px-6 lg:px-8 pb-16 text-right">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors uppercase tracking-widest text-sm font-bold mb-8 flex-row-reverse"
          >
            <span
              className="material-symbols-outlined text-sm transform rotate-180"
              data-icon="arrow_back"
            >
              arrow_forward
            </span>
            العودة للمقالات
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-headline font-extrabold tracking-tight text-on-surface mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-on-surface-variant text-sm flex-row-reverse">
            <div className="flex items-center gap-1 flex-row-reverse">
              <span
                className="material-symbols-outlined text-sm"
                data-icon="calendar_today"
              >
                calendar_today
              </span>
              {article.date}
            </div>
            <span>•</span>
            <div className="text-primary font-bold uppercase tracking-widest">
              حماية السيارات
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-4xl mx-auto">
        <article className="glass-card rounded-2xl p-6 sm:p-8 md:p-12 border-r-4 border-r-primary leading-loose text-base md:text-lg text-on-surface-variant font-light space-y-6 sm:space-y-8 text-right">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>

        <div className="mt-16 text-center border-t border-white/5 pt-16">
          <h3 className="text-2xl font-headline font-bold mb-6 text-on-surface">
            هل أنت مستعد لحماية سيارتك؟
          </h3>
          <Link
            href="/contact"
            className="inline-block bg-primary text-on-primary px-4 sm:px-6 lg:px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform duration-300 electric-glow"
          >
            تحدث مع أحد خبرائنا
          </Link>
        </div>
      </main>
    </div>
  );
}
