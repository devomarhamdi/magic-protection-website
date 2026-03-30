import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Footer() {
  const locale = useLocale();
  const isEn = locale === 'en';

  if (isEn) {
    return (
      <footer className="bg-surface-container-lowest w-full pt-16 md:pt-20 pb-8 md:pb-10">
        <div className="bg-gradient-to-r from-transparent via-primary/20 to-transparent h-[1px] mb-12"></div>
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 md:mb-20 text-left"
          dir="ltr"
        >
          <div className="space-y-6">
            <div className="text-xl font-black text-on-surface font-headline uppercase">
              Magic Protection
            </div>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              Pioneers in car protection and care. Providing the highest
              standards of protection and elegance.
            </p>
            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:text-primary cursor-pointer">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="public"
                >
                  public
                </span>
              </span>
              <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:text-primary cursor-pointer">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="share"
                >
                  share
                </span>
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="font-headline font-bold text-on-surface">
              Services
            </div>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/services"
                >
                  Nano Ceramic
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/services"
                >
                  Paint Protection Film (PPF)
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/services"
                >
                  Window Tinting
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/services"
                >
                  Detailing
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="font-headline font-bold text-on-surface">
              Company
            </div>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>
                <Link className="hover:text-primary transition-colors" href="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/">
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/about"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="font-headline font-bold text-on-surface">
              Contact Us
            </div>
            <div className="text-sm text-on-surface-variant leading-relaxed">
              <span dir="ltr">
                <a
                  href="tel:+201000411099"
                  className="hover:text-primary transition-colors inline-block"
                >
                  +20 1000 411 099
                </a>
              </span>
              <br />
              Cairo, Alexandria, 6th of October
              <br />
              <br />
              Working Hours: All days with prior appointment.
            </div>
          </div>
        </div>
        <div
          className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-10"
          dir="ltr"
        >
          <div className="font-body text-sm text-on-surface-variant opacity-80">
            © 2026 Magic Protection. All rights reserved. Advanced UI Built.
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8 text-sm text-on-surface-variant">
            <Link
              className="hover:underline decoration-primary underline-offset-4"
              href="/"
            >
              Legal
            </Link>
            <Link
              className="hover:underline decoration-primary underline-offset-4"
              href="/"
            >
              Privacy
            </Link>
            <Link
              className="hover:underline decoration-primary underline-offset-4"
              href="/"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-surface-container-lowest w-full pt-16 md:pt-20 pb-8 md:pb-10">
      <div className="bg-gradient-to-r from-transparent via-primary/20 to-transparent h-[1px] mb-12"></div>
      <div
        className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 md:mb-20 text-right"
        dir="rtl"
      >
        <div className="space-y-6">
          <div className="text-xl font-black text-on-surface font-headline uppercase">
            ماجيك بروتكشن
          </div>
          <p className="font-body text-sm text-on-surface-variant leading-relaxed">
            الرواد في حماية وعناية السيارات. نوفر لك أعلى معايير الحماية
            والأناقة.
          </p>
          <div className="flex gap-4">
            <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:text-primary cursor-pointer">
              <span
                className="material-symbols-outlined text-sm"
                data-icon="public"
              >
                public
              </span>
            </span>
            <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:text-primary cursor-pointer">
              <span
                className="material-symbols-outlined text-sm"
                data-icon="share"
              >
                share
              </span>
            </span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="font-headline font-bold text-on-surface">الخدمات</div>
          <ul className="space-y-2 text-sm text-on-surface-variant">
            <li>
              <Link
                className="hover:text-primary transition-colors"
                href="/services"
              >
                نانو سيراميك
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                href="/services"
              >
                أفلام الحماية (PPF)
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                href="/services"
              >
                العزل الحراري
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                href="/services"
              >
                تلميع شامل
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <div className="font-headline font-bold text-on-surface">الشركة</div>
          <ul className="space-y-2 text-sm text-on-surface-variant">
            <li>
              <Link className="hover:text-primary transition-colors" href="/">
                سياسة الخصوصية
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors" href="/">
                الشروط والأحكام
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors" href="/">
                الأسئلة الشائعة
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                href="/about"
              >
                من نحن
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <div className="font-headline font-bold text-on-surface">
            تواصل معنا
          </div>
          <div className="text-sm text-on-surface-variant leading-relaxed">
            <span dir="ltr">
              <a
                href="tel:+201000411099"
                className="hover:text-primary transition-colors inline-block"
              >
                +20 1000 411 099
              </a>
            </span>
            <br />
            القاهرة، الإسكندرية، السادس من أكتوبر
            <br />
            <br />
            مواعيد العمل: جميع الأيام بجدول حجز مسبق.
          </div>
        </div>
      </div>
      <div
        className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-10"
        dir="rtl"
      >
        <div className="font-body text-sm text-on-surface-variant opacity-80">
          © 2026 ماجيك بروتكشن. جميع الحقوق محفوظة. تم التطوير بواجهة متقدمة.
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8 text-sm text-on-surface-variant">
          <Link
            className="hover:underline decoration-primary underline-offset-4"
            href="/"
          >
            القانونية
          </Link>
          <Link
            className="hover:underline decoration-primary underline-offset-4"
            href="/"
          >
            الخصوصية
          </Link>
          <Link
            className="hover:underline decoration-primary underline-offset-4"
            href="/"
          >
            خريطة الموقع
          </Link>
        </div>
      </div>
    </footer>
  );
}
