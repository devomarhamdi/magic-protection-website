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
        <header className="relative min-h-[70svh] md:min-h-180 flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-40"
              alt="Dark car background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd_wbXmy9tnDvrFnqDrLKV4EN8ZjhGxURfXw6_kzd7Sq0QK1qE95smIkLDhULdGRLQWPAf3yyKaweEF03SpBU1-I3iOLq8KkaAW47T9Tpe6jUdpfzyWY4LdAwgieuDabEJQJe_2JJV9cqCguytD6nQsywnPbAUhp7w0-Hl4Kx-hPpquMxG58Dw2dHtmsiXigDH7h2Bo18lYQpF6-DqxMXGO-nABJNIAbBt2p82vu6MkkMBD9Ja5KcKzXq1RKL17hym9McnC6JEyQgP"
            />
            <div className="absolute inset-0 bg-linear-to-b from-surface/20 via-surface to-surface"></div>
            <div className="absolute inset-0 bg-linear-to-r from-surface via-transparent to-surface border-x-surface"></div>
          </div>
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary mb-6 font-bold">
              Elite Car Care
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface mb-8">
              Premium Services
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed">
              Engineered specifically for those who seek perfection. Discover
              our range of advanced surface protection technologies.
            </p>
          </div>
        </header>

        <main
          className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl mx-auto text-left"
          dir="ltr"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Nano Ceramic */}
            <div className="glass-card rounded-2xl overflow-hidden group hover:bg-surface-container-high transition-all duration-500 flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Nano Ceramic"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3r2uocLkxi9zWlTuWyzH7H3SNT_qx3Hy1DY82WZzc1wTf4Gj92KvCMw_RSmus7HTlVEuWv_9Wr0zxbDHPyenJWV_AMW_kbEchJMroYvyI9sEpKipH25UD4vVdDRE4ReH0f3eZsPHGTxX8TYqmAAOOQ7m8d91jQ82Jy06C0HXHM_qX3YdWr3Cy9WduBswjlEZGO-i9M0ltCfLEy-iW5OhpU7OXniTBhJAHxP96TPEIP_FsU3PqOuvEFGlHvLgR5KKQVahzN-sUmviR"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface-container via-transparent to-transparent"></div>
              </div>
              <div className="p-6 sm:p-8 pb-8 sm:pb-10 flex flex-col h-full grow">
                <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">
                  Nano Ceramic Coating
                </h3>
                <p className="text-on-surface-variant text-base mb-6 leading-relaxed grow">
                  A liquid polymer that chemically bonds to the factory paint,
                  creating a permanent layer of protection against heat and
                  corrosion.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-primary text-[18px]"
                      data-icon="check_circle"
                    >
                      check_circle
                    </span>{' '}
                    Superior 9H Hardness
                  </li>
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-primary text-[18px]"
                      data-icon="check_circle"
                    >
                      check_circle
                    </span>{' '}
                    Superior Hydrophobics
                  </li>
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-primary text-[18px]"
                      data-icon="check_circle"
                    >
                      check_circle
                    </span>{' '}
                    UV Resistance
                  </li>
                </ul>
              </div>
            </div>

            {/* PPF */}
            <div className="glass-card rounded-2xl overflow-hidden group hover:bg-surface-container-high transition-all duration-500 flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="PPF Installation"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuMXeyVEP32uXHbPrfls70AxUwPzLN7Kth8AEH-NIdFsHGSMAbaP84sGX2WEWufQk1hQaZRHUMcMu2qtRQnKmxh1r4XVevpchQsX6QuCZINOKont3O6-_yTtIP2qB2Jlus9EVJjqnQ-S3xvK8J0mFjNXcGAlfvTdqvpxLAE8Skhrtw_mkOaaJhc2IYoGM7nxWn2QJn-4L-VpG7WgQhm7bG7fFu7fQicfSBlyC9QZqjcareG4UytdAnvftzp0TfM-kJ4RnYzMgwggRN"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface-container via-transparent to-transparent"></div>
              </div>
              <div className="p-6 sm:p-8 pb-8 sm:pb-10 flex flex-col h-full grow">
                <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">
                  Paint Protection Film (PPF)
                </h3>
                <p className="text-on-surface-variant text-base mb-6 leading-relaxed grow">
                  The ultimate shield. A self-healing urethane armor for maximum
                  protection against physical damage and road debris.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-primary text-[18px]"
                      data-icon="check_circle"
                    >
                      check_circle
                    </span>{' '}
                    Self-Healing Technology
                  </li>
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-primary text-[18px]"
                      data-icon="check_circle"
                    >
                      check_circle
                    </span>{' '}
                    Impact and Friction Armor
                  </li>
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-primary text-[18px]"
                      data-icon="check_circle"
                    >
                      check_circle
                    </span>{' '}
                    10-Year Warranty
                  </li>
                </ul>
              </div>
            </div>

            {/* Window Tint */}
            <div className="glass-card rounded-2xl overflow-hidden group hover:bg-surface-container-high transition-all duration-500 flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Window Tinting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnkyD6BgB0Jjw6S0bEGd1_bOy86fG9-iNRIajAAETMxOTu0_YD83mdCeLwLUXPiB2CR2gmycVZFpHGjneJg349SgXjCfibGJR04JPnVNOQtvSI5kZkOHMsAnHjYbyGVf2uD5qzKYCkXm_boYw-3x4SCSyJQV7iSs6JS8BXuHuv766y-_s-405xJf76t6QJz560EiIXZg6NCe5cnCPKu06p80LfFIbQ2y5KKB2LsYBMljqnTNEhUng4nzUkvpgy_Mt8fq6DMP1Yea0D"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface-container via-transparent to-transparent"></div>
              </div>
              <div className="p-6 sm:p-8 pb-8 sm:pb-10 flex flex-col h-full grow">
                <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">
                  Thermal Insulation & Tinting
                </h3>
                <p className="text-on-surface-variant text-base mb-6 leading-relaxed grow">
                  Advanced carbon-ceramic films for superior heat rejection,
                  privacy preservation, and interior protection.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-primary text-[18px]"
                      data-icon="check_circle"
                    >
                      check_circle
                    </span>{' '}
                    99% UV Rejection
                  </li>
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-primary text-[18px]"
                      data-icon="check_circle"
                    >
                      check_circle
                    </span>{' '}
                    Crystal Clear Visibility
                  </li>
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-primary text-[18px]"
                      data-icon="check_circle"
                    >
                      check_circle
                    </span>{' '}
                    Shades to Suit Every Taste
                  </li>
                </ul>
              </div>
            </div>

            {/* Graphene */}
            <div className="glass-card rounded-2xl overflow-hidden group hover:bg-surface-container-high transition-all duration-500 flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Graphene Coating"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8K6bFSMfPhIXsvBc0ES_1PxehXt00zFd2jL36KxubmGSBSRQwtS1I_jDClBEg5qk-T0_NU7ZdbLk3B379NccOHaI75wGviimvwyQy_aBWoYLeB5EgjVqkHlGi48d7tqlOgwVfS2vz8onANCZxEspEXCzx-u76ur0drJWjV5PCeaVccGheBtEOVfqoKbkMi1r_g27lTKn3a4xzhdlkyaCFe15MLnQ-cwsYANt5tgSmx3v_jrPfCSH4YILVUlf3khagaWdYW8lBlehi"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface-container via-transparent to-transparent"></div>
              </div>
              <div className="p-6 sm:p-8 pb-8 sm:pb-10 flex flex-col h-full grow">
                <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">
                  Graphene Coating
                </h3>
                <p className="text-on-surface-variant text-base mb-6 leading-relaxed grow">
                  The latest evolution of ceramic. Stronger, smoother, and more
                  durable due to advanced graphene oxide.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-primary text-[18px]"
                      data-icon="check_circle"
                    >
                      check_circle
                    </span>{' '}
                    Water Spot Reduction
                  </li>
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-primary text-[18px]"
                      data-icon="check_circle"
                    >
                      check_circle
                    </span>{' '}
                    Extreme Chemical Resistance
                  </li>
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-primary text-[18px]"
                      data-icon="check_circle"
                    >
                      check_circle
                    </span>{' '}
                    Elevated Depth & Gloss Levels
                  </li>
                </ul>
              </div>
            </div>

            {/* Detailing */}
            <div className="glass-card rounded-2xl overflow-hidden group hover:bg-surface-container-high transition-all duration-500 flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Car Detailing"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfk4c6rNnZF9zuxDqZt3i5OWAZ0KNmavMQIOQuxISIIfAlCdhK2BvFKkDQVdf_A_2XP76EcyF4LhkY9-MdqFFgeQX5z_8QdYRmbWaDde05kCdVIuXJMjhRum3TE5iPpWpB50DJ1KDZ0eHC98Vju374C99yNCiVeAyi4Zn-NtTDHcASq7JC2a1DVrHkzasC7HFk2D9punki3FpiUHwG_hlVoAF3fuvxY4jLY79LhXGw3H8ki9ShJZNAU3PjJIyEY6BqsD6dukGnKZ-L"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface-container via-transparent to-transparent"></div>
              </div>
              <div className="p-6 sm:p-8 pb-8 sm:pb-10 flex flex-col h-full grow">
                <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">
                  Pro Detailing
                </h3>
                <p className="text-on-surface-variant text-base mb-6 leading-relaxed grow">
                  Professional multi-stage paint correction to remove swirls and
                  fine scratches, restoring a mirror-like reflection.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-primary text-[18px]"
                      data-icon="check_circle"
                    >
                      check_circle
                    </span>{' '}
                    Paint Restoration
                  </li>
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-primary text-[18px]"
                      data-icon="check_circle"
                    >
                      check_circle
                    </span>{' '}
                    Deep Interior Sanitization
                  </li>
                  <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-primary text-[18px]"
                      data-icon="check_circle"
                    >
                      check_circle
                    </span>{' '}
                    Engine Bay Detailing
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary-container/20 rounded-2xl p-8 flex flex-col justify-center items-center text-center border border-primary/10 relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <span
                className="material-symbols-outlined text-6xl text-primary mb-6"
                data-icon="verified"
              >
                verified
              </span>
              <h3 className="text-3xl font-headline font-extrabold mb-4 text-on-surface">
                Need Custom Pricing?
              </h3>
              <p className="text-on-surface-variant mb-8">
                Every car is unique over time. Let our experts tailor the ideal
                protection package for you.
              </p>
              <Link
                href="/contact"
                className="bg-primary-container text-on-primary-container px-10 py-4 rounded-lg font-headline font-bold text-lg hover:scale-105 transition-transform electric-glow block w-full md:w-auto"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </main>

        <section
          className="bg-surface-container-low py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
          dir="ltr"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface mb-4">
                Ceramic or PPF?
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
              <p className="mt-6 text-on-surface-variant max-w-2xl mx-auto text-lg font-light">
                Choose the level of protection that fits your driving lifestyle
                and needs.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
              <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-surface border-l-4 border-l-primary shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <span
                    className="material-symbols-outlined text-primary text-4xl"
                    data-icon="shutter_speed"
                  >
                    shutter_speed
                  </span>
                  <h4 className="text-3xl font-headline font-bold text-on-surface">
                    Nano Ceramic
                  </h4>
                </div>
                <p className="text-on-surface-variant mb-10 text-lg leading-relaxed italic">
                  "The invisible shield for enduring appeal and gloss."
                </p>
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 border-b border-white/5 pb-4">
                    <span className="text-on-surface-variant font-medium">
                      Primary Focus
                    </span>
                    <span className="text-primary font-bold">
                      Appearance & Easy Maintenance
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 border-b border-white/5 pb-4">
                    <span className="text-on-surface-variant font-medium">
                      Protection Type
                    </span>
                    <span className="text-primary font-bold">
                      Chemical & Environmental
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 border-b border-white/5 pb-4">
                    <span className="text-on-surface-variant font-medium">
                      Gloss Level
                    </span>
                    <span className="text-primary font-bold">
                      Ultimate Reflection
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 border-b border-white/5 pb-4">
                    <span className="text-on-surface-variant font-medium">
                      Rock Chip Resistance
                    </span>
                    <span className="text-error font-bold">Low</span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-surface border-l-4 border-l-primary-container shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <span
                    className="material-symbols-outlined text-primary text-4xl"
                    data-icon="shield"
                  >
                    shield
                  </span>
                  <h4 className="text-3xl font-headline font-bold text-on-surface">
                    Paint Protection Film
                  </h4>
                </div>
                <p className="text-on-surface-variant mb-10 text-lg leading-relaxed italic">
                  "The impenetrable armor for your car on open roads."
                </p>
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 border-b border-white/5 pb-4">
                    <span className="text-on-surface-variant font-medium">
                      Primary Focus
                    </span>
                    <span className="text-primary font-bold">
                      Physical Damage Protection
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 border-b border-white/5 pb-4">
                    <span className="text-on-surface-variant font-medium">
                      Protection Type
                    </span>
                    <span className="text-primary font-bold">
                      Impact, Scratches & Debris
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 border-b border-white/5 pb-4">
                    <span className="text-on-surface-variant font-medium">
                      Self-Healing
                    </span>
                    <span className="text-primary font-bold">Yes</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 border-b border-white/5 pb-4">
                    <span className="text-on-surface-variant font-medium">
                      Rock Chip Resistance
                    </span>
                    <span className="text-primary font-bold">
                      Absolute High
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Original Arabic structure below
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-white min-h-screen">
      <header className="relative min-h-[70svh] md:min-h-180 flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-40"
            alt="خلفية سيارة داكنة"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd_wbXmy9tnDvrFnqDrLKV4EN8ZjhGxURfXw6_kzd7Sq0QK1qE95smIkLDhULdGRLQWPAf3yyKaweEF03SpBU1-I3iOLq8KkaAW47T9Tpe6jUdpfzyWY4LdAwgieuDabEJQJe_2JJV9cqCguytD6nQsywnPbAUhp7w0-Hl4Kx-hPpquMxG58Dw2dHtmsiXigDH7h2Bo18lYQpF6-DqxMXGO-nABJNIAbBt2p82vu6MkkMBD9Ja5KcKzXq1RKL17hym9McnC6JEyQgP"
          />
          <div className="absolute inset-0 bg-linear-to-b from-surface/20 via-surface to-surface"></div>
          {/* RTL gradient fade */}
          <div className="absolute inset-0 bg-linear-to-l from-surface via-transparent to-surface border-x-surface"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary mb-6 font-bold">
            الرعاية النخبوية للسيارات
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface mb-8">
            خدماتنا المميزة
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed">
            مُهندسة خصيصاً لمن يبحثون عن الكمال. اكتشف مجموعة تقنيات حماية
            الأسطح المتقدمة لدينا.
          </p>
        </div>
      </header>

      <main className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Nano Ceramic */}
          <div className="glass-card rounded-2xl overflow-hidden group hover:bg-surface-container-high transition-all duration-500 flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="نانو سيراميك"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3r2uocLkxi9zWlTuWyzH7H3SNT_qx3Hy1DY82WZzc1wTf4Gj92KvCMw_RSmus7HTlVEuWv_9Wr0zxbDHPyenJWV_AMW_kbEchJMroYvyI9sEpKipH25UD4vVdDRE4ReH0f3eZsPHGTxX8TYqmAAOOQ7m8d91jQ82Jy06C0HXHM_qX3YdWr3Cy9WduBswjlEZGO-i9M0ltCfLEy-iW5OhpU7OXniTBhJAHxP96TPEIP_FsU3PqOuvEFGlHvLgR5KKQVahzN-sUmviR"
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface-container via-transparent to-transparent"></div>
            </div>
            <div className="p-6 sm:p-8 pb-8 sm:pb-10 flex flex-col h-full grow">
              <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">
                طلاء النانو سيراميك
              </h3>
              <p className="text-on-surface-variant text-base mb-6 leading-relaxed grow">
                بوليمر سائل يرتبط كيميائياً بطلاء المصنع، مكوناً طبقة حماية
                دائمة ومقاومة للحرارة والتآكل.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-[18px]"
                    data-icon="check_circle"
                  >
                    check_circle
                  </span>{' '}
                  صلابة 9H الفائقة
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-[18px]"
                    data-icon="check_circle"
                  >
                    check_circle
                  </span>{' '}
                  عزل للماء والأوساخ (Hydrophobic)
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-[18px]"
                    data-icon="check_circle"
                  >
                    check_circle
                  </span>{' '}
                  مقاومة للأشعة فوق البنفسجية
                </li>
              </ul>
            </div>
          </div>

          {/* PPF */}
          <div className="glass-card rounded-2xl overflow-hidden group hover:bg-surface-container-high transition-all duration-500 flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="تركيب PPF"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuMXeyVEP32uXHbPrfls70AxUwPzLN7Kth8AEH-NIdFsHGSMAbaP84sGX2WEWufQk1hQaZRHUMcMu2qtRQnKmxh1r4XVevpchQsX6QuCZINOKont3O6-_yTtIP2qB2Jlus9EVJjqnQ-S3xvK8J0mFjNXcGAlfvTdqvpxLAE8Skhrtw_mkOaaJhc2IYoGM7nxWn2QJn-4L-VpG7WgQhm7bG7fFu7fQicfSBlyC9QZqjcareG4UytdAnvftzp0TfM-kJ4RnYzMgwggRN"
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface-container via-transparent to-transparent"></div>
            </div>
            <div className="p-6 sm:p-8 pb-8 sm:pb-10 flex flex-col h-full grow">
              <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">
                أفلام الحماية (PPF)
              </h3>
              <p className="text-on-surface-variant text-base mb-6 leading-relaxed grow">
                الدرع المطلق. درع من اليوريثان المعالج ذاتياً للحماية القصوى من
                الأضرار الفيزيائية وحصى الطريق.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-[18px]"
                    data-icon="check_circle"
                  >
                    check_circle
                  </span>{' '}
                  تكنولوجيا المعالجة الذاتية للخدوش
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-[18px]"
                    data-icon="check_circle"
                  >
                    check_circle
                  </span>{' '}
                  درع مضاد للصدمات والاحتكاك
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-[18px]"
                    data-icon="check_circle"
                  >
                    check_circle
                  </span>{' '}
                  ضمان يمتد لـ 10 سنوات
                </li>
              </ul>
            </div>
          </div>

          {/* Window Tint */}
          <div className="glass-card rounded-2xl overflow-hidden group hover:bg-surface-container-high transition-all duration-500 flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="عزل حراري للنوافذ"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnkyD6BgB0Jjw6S0bEGd1_bOy86fG9-iNRIajAAETMxOTu0_YD83mdCeLwLUXPiB2CR2gmycVZFpHGjneJg349SgXjCfibGJR04JPnVNOQtvSI5kZkOHMsAnHjYbyGVf2uD5qzKYCkXm_boYw-3x4SCSyJQV7iSs6JS8BXuHuv766y-_s-405xJf76t6QJz560EiIXZg6NCe5cnCPKu06p80LfFIbQ2y5KKB2LsYBMljqnTNEhUng4nzUkvpgy_Mt8fq6DMP1Yea0D"
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface-container via-transparent to-transparent"></div>
            </div>
            <div className="p-6 sm:p-8 pb-8 sm:pb-10 flex flex-col h-full grow">
              <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">
                العزل الحراري وتظليل الزجاج
              </h3>
              <p className="text-on-surface-variant text-base mb-6 leading-relaxed grow">
                أفلام سيراميك كربونية متطورة لِعزل الحرارة الفائق، الحفاظ على
                الخصوصية، وحماية المقصورة الداخلية.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-[18px]"
                    data-icon="check_circle"
                  >
                    check_circle
                  </span>{' '}
                  عزل للأشعة البنفسجية بنسبة 99%
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-[18px]"
                    data-icon="check_circle"
                  >
                    check_circle
                  </span>{' '}
                  رؤية واضحة نقية دون تشويش
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-[18px]"
                    data-icon="check_circle"
                  >
                    check_circle
                  </span>{' '}
                  درجات تظليل تناسب جميع الأذواق
                </li>
              </ul>
            </div>
          </div>

          {/* Graphene */}
          <div className="glass-card rounded-2xl overflow-hidden group hover:bg-surface-container-high transition-all duration-500 flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="نانو جرافين"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8K6bFSMfPhIXsvBc0ES_1PxehXt00zFd2jL36KxubmGSBSRQwtS1I_jDClBEg5qk-T0_NU7ZdbLk3B379NccOHaI75wGviimvwyQy_aBWoYLeB5EgjVqkHlGi48d7tqlOgwVfS2vz8onANCZxEspEXCzx-u76ur0drJWjV5PCeaVccGheBtEOVfqoKbkMi1r_g27lTKn3a4xzhdlkyaCFe15MLnQ-cwsYANt5tgSmx3v_jrPfCSH4YILVUlf3khagaWdYW8lBlehi"
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface-container via-transparent to-transparent"></div>
            </div>
            <div className="p-6 sm:p-8 pb-8 sm:pb-10 flex flex-col h-full grow">
              <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">
                طلاء الجرافين
              </h3>
              <p className="text-on-surface-variant text-base mb-6 leading-relaxed grow">
                التطور الأحدث للسيراميك. طلاء أقوى، أنعم، وأكثر متانة بفضل
                الاعتماد على أكسيد الجرافين المتقدم.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-[18px]"
                    data-icon="check_circle"
                  >
                    check_circle
                  </span>{' '}
                  الحد من بقع وتكلسات المياه
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-[18px]"
                    data-icon="check_circle"
                  >
                    check_circle
                  </span>{' '}
                  مقاومة كيميائية قاهرة
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-[18px]"
                    data-icon="check_circle"
                  >
                    check_circle
                  </span>{' '}
                  رفع مستويات العمق اللوني والتألق
                </li>
              </ul>
            </div>
          </div>

          {/* Detailing */}
          <div className="glass-card rounded-2xl overflow-hidden group hover:bg-surface-container-high transition-all duration-500 flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="تلميع السيارات"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfk4c6rNnZF9zuxDqZt3i5OWAZ0KNmavMQIOQuxISIIfAlCdhK2BvFKkDQVdf_A_2XP76EcyF4LhkY9-MdqFFgeQX5z_8QdYRmbWaDde05kCdVIuXJMjhRum3TE5iPpWpB50DJ1KDZ0eHC98Vju374C99yNCiVeAyi4Zn-NtTDHcASq7JC2a1DVrHkzasC7HFk2D9punki3FpiUHwG_hlVoAF3fuvxY4jLY79LhXGw3H8ki9ShJZNAU3PjJIyEY6BqsD6dukGnKZ-L"
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface-container via-transparent to-transparent"></div>
            </div>
            <div className="p-6 sm:p-8 pb-8 sm:pb-10 flex flex-col h-full grow">
              <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">
                التلميع الساطع والعناية
              </h3>
              <p className="text-on-surface-variant text-base mb-6 leading-relaxed grow">
                معالجة الطلاء بخطوات احترافية لإزالة دوائر الغسيل (Swirls)
                والخدوش الدقيقة، واستعادة انعكاس كالمرآة.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-[18px]"
                    data-icon="check_circle"
                  >
                    check_circle
                  </span>{' '}
                  معالجة واستعادة لمعان الطلاء
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-[18px]"
                    data-icon="check_circle"
                  >
                    check_circle
                  </span>{' '}
                  تعقيم وتنظيف داخلي عميق
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-primary text-[18px]"
                    data-icon="check_circle"
                  >
                    check_circle
                  </span>{' '}
                  تلميع تفصيلي للمحرك
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-container/20 rounded-2xl p-8 flex flex-col justify-center items-center text-center border border-primary/10 relative overflow-hidden">
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <span
              className="material-symbols-outlined text-6xl text-primary mb-6"
              data-icon="verified"
            >
              verified
            </span>
            <h3 className="text-3xl font-headline font-extrabold mb-4 text-on-surface">
              تحتاج لتسعير خاص؟
            </h3>
            <p className="text-on-surface-variant mb-8">
              كل سيارة لها حالتها الخاصة. دع خبراؤنا يصممون باقة الحماية الأنسب
              لك.
            </p>
            <Link
              href="/contact"
              className="bg-primary-container text-on-primary-container px-10 py-4 rounded-lg font-headline font-bold text-lg hover:scale-105 transition-transform electric-glow block w-full md:w-auto"
            >
              استفسر الآن
            </Link>
          </div>
        </div>
      </main>

      <section className="bg-surface-container-low py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface mb-4">
              السيراميك أم أفلام PPF؟
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="mt-6 text-on-surface-variant max-w-2xl mx-auto text-lg font-light">
              اختر مستوى الحماية الذي يُلائم نمط قيادتك واحتياجاتك.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-surface border-r-4 border-primary shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <span
                  className="material-symbols-outlined text-primary text-4xl"
                  data-icon="shutter_speed"
                >
                  shutter_speed
                </span>
                <h4 className="text-3xl font-headline font-bold text-on-surface">
                  النانو سيراميك
                </h4>
              </div>
              <p className="text-on-surface-variant mb-10 text-lg leading-relaxed italic">
                "الدرع غير المرئي لجاذبية وتألق يدوم طويلاً."
              </p>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 border-b border-white/5 pb-4">
                  <span className="text-on-surface-variant font-medium">
                    التركيز الأساسي
                  </span>
                  <span className="text-primary font-bold">
                    المظهر وسهولة الصيانة
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 border-b border-white/5 pb-4">
                  <span className="text-on-surface-variant font-medium">
                    نوع الحماية
                  </span>
                  <span className="text-primary font-bold">
                    كيميائية وبيئية
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 border-b border-white/5 pb-4">
                  <span className="text-on-surface-variant font-medium">
                    مستوى اللمعان
                  </span>
                  <span className="text-primary font-bold">
                    تألق وانعكاس فائق
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 border-b border-white/5 pb-4">
                  <span className="text-on-surface-variant font-medium">
                    مقاومة حصى الطريق
                  </span>
                  <span className="text-error font-bold">منخفضة</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-surface border-r-4 border-primary-container shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <span
                  className="material-symbols-outlined text-primary text-4xl"
                  data-icon="shield"
                >
                  shield
                </span>
                <h4 className="text-3xl font-headline font-bold text-on-surface">
                  أفلام الحماية (PPF)
                </h4>
              </div>
              <p className="text-on-surface-variant mb-10 text-lg leading-relaxed italic">
                "الدرع المنيع لحماية سيارتك على الطرقات المفتوحة."
              </p>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 border-b border-white/5 pb-4">
                  <span className="text-on-surface-variant font-medium">
                    التركيز الأساسي
                  </span>
                  <span className="text-primary font-bold">
                    الحماية من الأضرار الفيزيائية
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 border-b border-white/5 pb-4">
                  <span className="text-on-surface-variant font-medium">
                    نوع الحماية
                  </span>
                  <span className="text-primary font-bold">
                    الصدمات والخدوش وحصى الطريق
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 border-b border-white/5 pb-4">
                  <span className="text-on-surface-variant font-medium">
                    المعالجة الذاتية
                  </span>
                  <span className="text-primary font-bold">نعم</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 border-b border-white/5 pb-4">
                  <span className="text-on-surface-variant font-medium">
                    مقاومة حصى الطريق
                  </span>
                  <span className="text-primary font-bold">عالية جداً</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
