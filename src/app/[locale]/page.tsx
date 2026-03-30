import React from 'react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import InteractiveBranchMap from '@/components/InteractiveBranchMap';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import HeroSplitInteractive from '@/components/HeroSplitInteractive';
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
        <HeroSplitInteractive locale="en" />

        <section className="relative z-20 bg-surface-container-lowest py-12 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4 group">
              <span
                className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform"
                data-icon="verified"
              >
                verified
              </span>
              <div>
                <div className="font-headline font-bold text-on-surface">
                  Global Tech
                </div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">
                  US Materials
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <span
                className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform"
                data-icon="history"
              >
                history
              </span>
              <div>
                <div className="font-headline font-bold text-on-surface">
                  +10 Years Exp
                </div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">
                  Trust & Excellence
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <span
                className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform"
                data-icon="workspace_premium"
              >
                workspace_premium
              </span>
              <div>
                <div className="font-headline font-bold text-on-surface">
                  Certified Techs
                </div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">
                  Supreme Skill
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <span
                className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform"
                data-icon="shield_with_heart"
              >
                shield_with_heart
              </span>
              <div>
                <div className="font-headline font-bold text-on-surface">
                  Full Warranty
                </div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">
                  Total Peace of Mind
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-background px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter mb-4 text-on-surface">
                Premium Services
              </h2>
              <p className="text-on-surface-variant max-w-xl mx-auto">
                Engineering protection layers that keep your car shining like it
                just left the showroom.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[900px]">
              <div className="md:col-span-8 group relative overflow-hidden rounded-xl glass-card min-h-70 sm:min-h-80">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Nano Ceramic"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcXu26_33DthAYe36Z2hjI7gNP6GRVKvkMJfEvkE8gRJmwOysFie9A3FCb-nWXz0vwhsFG4b0Y5OX5QOudxPDrDymP04uXUdUStfaDzaeRqstGavsxZ58LrIEN2ia32ycD8r9Em-6Zl0a0mkmrGAaXic4Bb86JP7JY_Co_Z6S2Si0629urG_pmONtRKFFn9d8AR8lCXxgavGrIjNQvWQXAzYUq5MsZyt_OoY3Jlf_t0BOBeX7f2JS80Cne4BmsQXobxhJczfSbsXwu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 sm:p-8 md:p-10 w-full text-left">
                  <h3 className="text-3xl font-headline font-bold text-on-surface mb-2">
                    Nano Ceramic
                  </h3>
                  <p className="text-on-surface-variant mb-6 max-w-md">
                    9H hardness ceramic layers that give your car an exceptional
                    gloss and permanent protection against liquids and fading.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                  >
                    Learn More{' '}
                    <span
                      className="material-symbols-outlined"
                      data-icon="arrow_forward"
                    >
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>

              <div className="md:col-span-4 group relative overflow-hidden rounded-xl glass-card min-h-70 sm:min-h-80">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="PPF"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAupQgQd-uxMuEBPw5ujL03C0COnzKEmhysHHSG8AxtF4JRcLnPiPz0QXH-KW6Trf-ITloLtr4ONgNiIkcLPbEuFhEf8N1bdOZTkbBA1pyuEg2GX1CBjXrOnVDh9WsHVT4-Rg_NugwmcckxWCGDmJt7tWRLlI4LZYcRbCVfbLwOZ2UChPxHrfb2ruOZIIj_aSankVrFzyI1doUYWK9hBsmhHgBz5w86vNg8dv1DFJQneleF6SiNvYb5iWMTHraDQL9BnyeHZ38kYXeA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-5 sm:p-6 md:p-8 text-left w-full">
                  <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">
                    Paint Protection Film (PPF)
                  </h3>
                  <p className="text-sm text-on-surface-variant mb-4">
                    Self-healing films against scratches and road debris.
                  </p>
                  <Link href="/services" className="text-primary font-bold">
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="md:col-span-4 group relative overflow-hidden rounded-xl glass-card min-h-70 sm:min-h-80">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Thermal Insulation"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxrMHPCZdoeKbmsQnpdOLPbRQvKetS1bC6Bnrg9TShjDNY86Gx45F-f6hY3eMCotuNPQa8sh79d019t0M4SNw0m_mboskktDZFU34GijoNNHYsP6BcwzqBusJoMf2uVWGkbKGQEEnGuEmrj8S2D12-jh-3iFKuf8CueOVXQU5MRkYCi_z2G5z1-bL0l__2UKqFJTXW68egfQQNh7-4CUOgTLnN3PSQDESWmnwwpzyhG2W-fF05QSUV8bkcM9SrqFnw6T1If7GteB9R"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-5 sm:p-6 md:p-8 text-left w-full">
                  <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">
                    3M Window Tint
                  </h3>
                  <p className="text-sm text-on-surface-variant mb-4">
                    Advanced temperature and UV isolation for complete comfort.
                  </p>
                  <Link href="/services" className="text-primary font-bold">
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="md:col-span-4 group relative overflow-hidden rounded-xl glass-card border-primary/20 min-h-70 sm:min-h-80">
                <div className="absolute inset-0 bg-primary-container/10 z-10"></div>
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50"
                  alt="Graphene Coating"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkf2FcjYu8InM1AYrq6qBlnm5IRcoX6MiHbh1BSXCVislbK9q-qug7OSNVxczMBTWmNAgKFbuEm5keBqOyyg_jL8nru4AEstIXYz6d3iTZJN_pXTbKdhe9A_ucf0CZY8FNaPSjwyi2HGQs5ToqyyeC30iiDZFY9tDMQ3I3K-qFrgkLxslE611MoOtL_JEjXcCg5b1OXC1czg4GsncWKIWjwCHE3WWD_1A6aHwdiDPUw8Q6dsEE8T8WRYhT1D2ZH6emZ2yNYmbTz8Kd"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-5 sm:p-6 md:p-8 z-20 text-left w-full">
                  <div className="bg-primary/20 text-primary text-[10px] font-black uppercase px-2 py-1 rounded inline-block mb-3">
                    Future Tech
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">
                    Graphene Coating
                  </h3>
                  <p className="text-sm text-on-surface-variant mb-4">
                    The toughest and most durable coating ever developed for
                    automotive surfaces.
                  </p>
                  <Link href="/services" className="text-primary font-bold">
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="md:col-span-4 group relative overflow-hidden rounded-xl glass-card min-h-70 sm:min-h-80">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Mercedes Polishing"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQixGMMi-vbD4o5GytK3m0nnq4bC9NIQoTvP1K5VohQnNLbUcT48-SQMW70Jy8-1MhrZrgcB10BF7WcTf-hdzp3J0HfzjBinsLShh_BkdVPH2jrEVF5cP192zYiLBjmPB6X4iWNfh-YtiXI_D_cSI37d0_WAAmay4X1lwM6eAg9yreOQxy7FwuXpiIdpzuVQJHnefF2oqCPM8tpKOVbNMUe0Z0MB1JYWxQGF4hD7cyhLX34uhA12mHUx9QszpbtX1YaK0qpsqSV717"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-5 sm:p-6 md:p-8 text-left w-full">
                  <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">
                    Pro Detailing
                  </h3>
                  <p className="text-sm text-on-surface-variant mb-4">
                    Multi-stage paint correction to restore clarity and original
                    color depth.
                  </p>
                  <Link href="/services" className="text-primary font-bold">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-surface-container-low relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter mb-8 text-on-surface leading-tight">
                The Art of Excellence and <br />
                <span className="text-primary">Detail</span>
              </h2>
              <div className="space-y-12">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 shrink-0 rounded-lg glass-card flex items-center justify-center text-primary electric-glow">
                    <span
                      className="material-symbols-outlined text-3xl"
                      data-icon="science"
                    >
                      science
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-headline font-bold text-on-surface mb-2">
                      Premium Materials
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed">
                      We import our products exclusively from the finest
                      chemical labs to ensure durability that meets laboratory
                      standards.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 shrink-0 rounded-lg glass-card flex items-center justify-center text-primary electric-glow">
                    <span
                      className="material-symbols-outlined text-3xl"
                      data-icon="shield"
                    >
                      shield
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-headline font-bold text-on-surface mb-2">
                      Advanced Protection
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed">
                      Multi-layered defense systems designed to withstand the
                      harshest UV rays, environmental, and chemical factors.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 shrink-0 rounded-lg glass-card flex items-center justify-center text-primary electric-glow">
                    <span
                      className="material-symbols-outlined text-3xl"
                      data-icon="precision_manufacturing"
                    >
                      precision_manufacturing
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-headline font-bold text-on-surface mb-2">
                      Expert Technicians
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed">
                      Each of our installers undergoes over 500 hours of
                      rigorous training before touching a client's vehicle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full transition-opacity group-hover:opacity-100 opacity-50"></div>
              <img
                className="relative rounded-xl shadow-2xl border border-white/10 grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                alt="Polishing Center"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5q-q0H1I0DSidEPID6Osl4KnN0p0rjD4kyaoxv4U20H4eLXnLxfHqtd-t24UvcRciTSjEC4wUlghtZ2Ic9c7QcYlqtk6-pOv0oMyyvShf3xDaBix2ZIf1Omd_o_V3TdEuf6Hv3NxEwl7U42S2tH1l3mWMdb6riL7y5pSgyrL_r_Sj2D_g3Wx8YLz9y44-zElInSGTlPM0uDieVLOOtgfNsWB3pExw-B7b4LWwpGcJwYjIg1IyZjk0Kzx8wJPs66TD6u2oitxot-3I"
              />
              <div className="absolute bottom-8 left-8 bg-surface-container-highest/90 backdrop-blur-md p-6 rounded-lg border border-white/5 text-left">
                <div className="text-primary text-3xl font-black font-headline">
                  99.8%
                </div>
                <div className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-background overflow-hidden relative text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter mb-4 text-on-surface">
              Discover the Difference
            </h2>
            <p className="text-on-surface-variant">
              Witness the amazing transformation from faded imperfections to a
              dazzling showroom shine.
            </p>
          </div>

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12"
            dir="ltr"
          >
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80"
              afterImage="https://images.unsplash.com/photo-1621245054178-9e63a14ffc1c?w=800&q=80"
              beforeLabel="Defects"
              afterLabel="Gloss Finish"
            />
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80"
              afterImage="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80"
              beforeLabel="Faded Paint"
              afterLabel="Ceramic Shine"
            />
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80"
              afterImage="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80"
              beforeLabel="Standard Paint"
              afterLabel="PPF Shield"
            />
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80"
              afterImage="https://images.unsplash.com/photo-1614145115598-f2b15dbb98a0?w=800&q=80"
              beforeLabel="Standard Glass"
              afterLabel="Thermal Window Tint"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
            <h3 className="text-2xl md:text-3xl font-headline font-bold mb-8 text-on-surface text-center opacity-50 uppercase tracking-widest">
              Magical Touches
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-xl overflow-hidden group border border-white/5 aspect-square relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Shiny Wheels"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBPbtDRycMPSmkBFnQJFjc1vyFGYlWDF1GEDD8l7RRC9tVZgbAbRZovsMQXDELD4YGoBJRd7GV3nEXPjOKSlYApIzskn2y4C02AB3Azht39i8WPT3A5PxJO3efKGzcueScWmfqBvgle0lNdwxuSUGu4Mbk7P4HJRhQ4S5vU81I4-YoG3kbtS1o8yUI_k616RpqSO6UcaP9ie2zRFAQ4x8KPVJUmUV405W57NKcRZKJOMb6a-wxb_6GoIhICVq0uwOrBbL4T2cnkBvQ"
                />
              </div>
              <div className="rounded-xl overflow-hidden group border border-white/5 aspect-square relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Luxury Interior"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_aBOyJlAojDP3ZzCtTqjYKIf36H_hScSdxyPwrUBjod0NXhc5BTZhi9V3AB93rv_Pz5K0rd09dexO-DL9ydGOOV9uZMacNI52jgC61b_Eyic68P6QgAs9-5fdq93LOoDn9suDk6rCnrrvSmcojnGzMBt6JGXNDRtdsyX6Kk3YKw9EYROmgJxhAUpuS13uytyc3vJ3WJOcMZpQJVcBT2plbaAthd4-T-PxEjCogPmo73R0tf6k7GUTbXqUi4Pj7HlRZFRsDDs9T9wV"
                />
              </div>
              <div className="rounded-xl overflow-hidden group border border-white/5 aspect-square relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Clean Grille"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIED4cROk-DsXDb3U3uYJ7qj1himSm_0xCtenMuhzN50ttrQHZ8j4EOUEl6WTillMnBa_097CE65sdds9Xr7Qd7GWiz43gHPMsdZVvqVWq5Za8qnZmRRhsX1oU7Q-OFWnXDL2OxUFieUNy-cm9ScLVZuj5KdbMzknpo3G5B94PzSyXeuVcr9Sz1k0Neof3BfOT04lIXqnDX4w4UQhN7-8E-SmarhpW7XM_SXKOQ0rG2zTKHpG0Oy87VEOPFVzCLvsZWXvEbsbXymFF"
                />
              </div>
              <div className="rounded-xl overflow-hidden group border border-white/5 aspect-square relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Car Headlights"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2oIaUU4Fpx_JtuUJo0JaSREXUss7FBu-Wow3N3r0M6pWx4hXcPq_Ua8KU6e7VD3yIpc8lTuuMlRiXZKBEb0TT6xZ8q9T1R1fJmmHyPKaWVrLli85EXrGBUkzmVBoNIfkW9WdY2Fd_hvjXkaKCAOyBjUtRqlcyPYwQcz3ZmLoUpfsPd-k00JuEEgrl5ubfjTsqxhoQWIvGpHQfT-xAp5BH_2reRCoQWKGm9cW1XY8H5WTEGovpxqlIl1Hoqd01DoDq2dB5adfqyLmf"
                />
              </div>
            </div>
          </div>
        </section>

        <TestimonialsCarousel locale="en" />

        <section className="py-20 md:py-32 bg-background text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-headline font-extrabold tracking-tighter mb-8 text-on-surface">
                Our Exclusive Branches
              </h2>
              <div className="space-y-6">
                <div className="p-6 rounded-xl glass-card">
                  <div className="font-headline font-bold text-lg text-on-surface mb-2">
                    Cairo Branch
                  </div>
                  <p className="text-on-surface-variant text-sm mb-4">
                    Nasr City, 5th Settlement
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-primary font-bold">
                    <a
                      href="tel:+201000411099"
                      className="flex items-center gap-1"
                    >
                      <span
                        className="material-symbols-outlined text-sm"
                        data-icon="call"
                      >
                        call
                      </span>{' '}
                      <span dir="ltr">+20 1000 411 099</span>
                    </a>
                    <a
                      href="https://maps.google.com/?q=Nasr+City+5th+Settlement+Cairo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <span
                        className="material-symbols-outlined text-sm"
                        data-icon="map"
                      >
                        map
                      </span>{' '}
                      Directions
                    </a>
                  </div>
                </div>
                <div className="p-6 rounded-xl glass-card">
                  <div className="font-headline font-bold text-lg text-on-surface mb-2">
                    Alexandria Branch
                  </div>
                  <p className="text-on-surface-variant text-sm mb-4">
                    Alexandria Governorate
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-primary font-bold">
                    <a
                      href="tel:+201000411099"
                      className="flex items-center gap-1"
                    >
                      <span
                        className="material-symbols-outlined text-sm"
                        data-icon="call"
                      >
                        call
                      </span>{' '}
                      <span dir="ltr">+20 1000 411 099</span>
                    </a>
                    <a
                      href="https://maps.google.com/?q=Alexandria+Governorate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <span
                        className="material-symbols-outlined text-sm"
                        data-icon="map"
                      >
                        map
                      </span>{' '}
                      Directions
                    </a>
                  </div>
                </div>
                <div className="p-6 rounded-xl glass-card">
                  <div className="font-headline font-bold text-lg text-on-surface mb-2">
                    October Branch
                  </div>
                  <p className="text-on-surface-variant text-sm mb-4">
                    6th of October City, Giza
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-primary font-bold">
                    <a
                      href="tel:+201000411099"
                      className="flex items-center gap-1"
                    >
                      <span
                        className="material-symbols-outlined text-sm"
                        data-icon="call"
                      >
                        call
                      </span>{' '}
                      <span dir="ltr">+20 1000 411 099</span>
                    </a>
                    <a
                      href="https://maps.google.com/?q=6th+of+October+City+Giza"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <span
                        className="material-symbols-outlined text-sm"
                        data-icon="map"
                      >
                        map
                      </span>{' '}
                      Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <InteractiveBranchMap locale="en" />
          </div>
        </section>

        <a
          className="fixed bottom-4 right-4 md:bottom-12 md:right-12 z-[100] w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group overflow-hidden"
          href="https://wa.me/201000411099"
        >
          <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
          <svg
            className="w-8 h-8 relative z-10"
            fill="currentColor"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
          </svg>
        </a>
      </div>
    );
  }

  // Original Arabic Code
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-white min-h-screen">
      <HeroSplitInteractive locale="ar" />

      <section className="relative z-20 bg-surface-container-lowest py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex items-center gap-4 group">
            <span
              className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform"
              data-icon="verified"
            >
              verified
            </span>
            <div>
              <div className="font-headline font-bold text-on-surface">
                تقنيات عالمية
              </div>
              <div className="text-xs text-on-surface-variant uppercase tracking-widest">
                خامات أمريكية
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <span
              className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform"
              data-icon="history"
            >
              history
            </span>
            <div>
              <div className="font-headline font-bold text-on-surface">
                +١٠ سنوات خبرة
              </div>
              <div className="text-xs text-on-surface-variant uppercase tracking-widest">
                ثقة وتميز
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <span
              className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform"
              data-icon="workspace_premium"
            >
              workspace_premium
            </span>
            <div>
              <div className="font-headline font-bold text-on-surface">
                فنيون معتمدون
              </div>
              <div className="text-xs text-on-surface-variant uppercase tracking-widest">
                مهارة فائقة
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <span
              className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform"
              data-icon="shield_with_heart"
            >
              shield_with_heart
            </span>
            <div>
              <div className="font-headline font-bold text-on-surface">
                ضمان شامل
              </div>
              <div className="text-xs text-on-surface-variant uppercase tracking-widest">
                راحة بال تامة
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter mb-4 text-on-surface">
              خدماتنا المتميزة
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              طبقات حماية هندسية تحافظ على بريق سيارتك وكأنها خرجت للتو من صالة
              العرض.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[900px]">
            <div className="md:col-span-8 group relative overflow-hidden rounded-xl glass-card min-h-70 sm:min-h-80">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="نانو سيراميك"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcXu26_33DthAYe36Z2hjI7gNP6GRVKvkMJfEvkE8gRJmwOysFie9A3FCb-nWXz0vwhsFG4b0Y5OX5QOudxPDrDymP04uXUdUStfaDzaeRqstGavsxZ58LrIEN2ia32ycD8r9Em-6Zl0a0mkmrGAaXic4Bb86JP7JY_Co_Z6S2Si0629urG_pmONtRKFFn9d8AR8lCXxgavGrIjNQvWQXAzYUq5MsZyt_OoY3Jlf_t0BOBeX7f2JS80Cne4BmsQXobxhJczfSbsXwu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"></div>
              <div className="absolute bottom-0 right-0 p-6 sm:p-8 md:p-10 w-full text-right">
                <h3 className="text-3xl font-headline font-bold text-on-surface mb-2">
                  النانو سيراميك
                </h3>
                <p className="text-on-surface-variant mb-6 max-w-md">
                  طبقات سيراميك بصلابة 9H تمنح سيارتك لمعاناً استثنائياً وحماية
                  دائمة ضد السوائل والبهتان.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all flex-row-reverse"
                >
                  <span
                    className="material-symbols-outlined transform rotate-180"
                    data-icon="arrow_forward"
                  >
                    arrow_forward
                  </span>{' '}
                  لمعرفة المزيد
                </Link>
              </div>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-xl glass-card min-h-70 sm:min-h-80">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="PPF"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAupQgQd-uxMuEBPw5ujL03C0COnzKEmhysHHSG8AxtF4JRcLnPiPz0QXH-KW6Trf-ITloLtr4ONgNiIkcLPbEuFhEf8N1bdOZTkbBA1pyuEg2GX1CBjXrOnVDh9WsHVT4-Rg_NugwmcckxWCGDmJt7tWRLlI4LZYcRbCVfbLwOZ2UChPxHrfb2ruOZIIj_aSankVrFzyI1doUYWK9hBsmhHgBz5w86vNg8dv1DFJQneleF6SiNvYb5iWMTHraDQL9BnyeHZ38kYXeA"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
              <div className="absolute bottom-0 right-0 p-5 sm:p-6 md:p-8 text-right w-full">
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">
                  أفلام الحماية (PPF)
                </h3>
                <p className="text-sm text-on-surface-variant mb-4">
                  أفلام معالجة ذاتياً ضد الخدوش وحصى الطريق.
                </p>
                <Link href="/services" className="text-primary font-bold">
                  لمعرفة المزيد
                </Link>
              </div>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-xl glass-card min-h-70 sm:min-h-80">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="عزل حراري"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxrMHPCZdoeKbmsQnpdOLPbRQvKetS1bC6Bnrg9TShjDNY86Gx45F-f6hY3eMCotuNPQa8sh79d019t0M4SNw0m_mboskktDZFU34GijoNNHYsP6BcwzqBusJoMf2uVWGkbKGQEEnGuEmrj8S2D12-jh-3iFKuf8CueOVXQU5MRkYCi_z2G5z1-bL0l__2UKqFJTXW68egfQQNh7-4CUOgTLnN3PSQDESWmnwwpzyhG2W-fF05QSUV8bkcM9SrqFnw6T1If7GteB9R"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
              <div className="absolute bottom-0 right-0 p-5 sm:p-6 md:p-8 text-right w-full">
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">
                  العزل الحراري 3M
                </h3>
                <p className="text-sm text-on-surface-variant mb-4">
                  عزل متقدم لدرجات الحرارة والأشعة فوق البنفسجية لراحتك التامة.
                </p>
                <Link href="/services" className="text-primary font-bold">
                  لمعرفة المزيد
                </Link>
              </div>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-xl glass-card border-primary/20 min-h-70 sm:min-h-80">
              <div className="absolute inset-0 bg-primary-container/10 z-10"></div>
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50"
                alt="طلاء الجرافين"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkf2FcjYu8InM1AYrq6qBlnm5IRcoX6MiHbh1BSXCVislbK9q-qug7OSNVxczMBTWmNAgKFbuEm5keBqOyyg_jL8nru4AEstIXYz6d3iTZJN_pXTbKdhe9A_ucf0CZY8FNaPSjwyi2HGQs5ToqyyeC30iiDZFY9tDMQ3I3K-qFrgkLxslE611MoOtL_JEjXcCg5b1OXC1czg4GsncWKIWjwCHE3WWD_1A6aHwdiDPUw8Q6dsEE8T8WRYhT1D2ZH6emZ2yNYmbTz8Kd"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
              <div className="absolute bottom-0 right-0 p-5 sm:p-6 md:p-8 z-20 text-right w-full">
                <div className="bg-primary/20 text-primary text-[10px] font-black uppercase px-2 py-1 rounded inline-block mb-3">
                  تكنولوجيا المستقبل
                </div>
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">
                  طلاء الجرافين
                </h3>
                <p className="text-sm text-on-surface-variant mb-4">
                  الطلاء الأكثر صلابة ومتانة على الإطلاق تم تطويره لأسطح
                  السيارات.
                </p>
                <Link href="/services" className="text-primary font-bold">
                  لمعرفة المزيد
                </Link>
              </div>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-xl glass-card min-h-70 sm:min-h-80">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="تلميع مرسيدس"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQixGMMi-vbD4o5GytK3m0nnq4bC9NIQoTvP1K5VohQnNLbUcT48-SQMW70Jy8-1MhrZrgcB10BF7WcTf-hdzp3J0HfzjBinsLShh_BkdVPH2jrEVF5cP192zYiLBjmPB6X4iWNfh-YtiXI_D_cSI37d0_WAAmay4X1lwM6eAg9yreOQxy7FwuXpiIdpzuVQJHnefF2oqCPM8tpKOVbNMUe0Z0MB1JYWxQGF4hD7cyhLX34uhA12mHUx9QszpbtX1YaK0qpsqSV717"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
              <div className="absolute bottom-0 right-0 p-5 sm:p-6 md:p-8 text-right w-full">
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">
                  التلميع الساطع
                </h3>
                <p className="text-sm text-on-surface-variant mb-4">
                  معالجة الطلاء متعددة المراحل لاستعادة صفاء وعمق اللون الأصلي.
                </p>
                <Link href="/services" className="text-primary font-bold">
                  لمعرفة المزيد
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-surface-container-low relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter mb-8 text-on-surface leading-tight">
              فن التميز و <br />
              <span className="text-primary">التفاصيل</span>
            </h2>
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 shrink-0 rounded-lg glass-card flex items-center justify-center text-primary electric-glow">
                  <span
                    className="material-symbols-outlined text-3xl"
                    data-icon="science"
                  >
                    science
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-headline font-bold text-on-surface mb-2">
                    خامات فائقة الجودة
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    نستورد منتجاتنا حصرياً من أرقى المعامل الكيميائية لضمان قوة
                    تحمل تتناسب مع المعايير المعملية.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 shrink-0 rounded-lg glass-card flex items-center justify-center text-primary electric-glow">
                  <span
                    className="material-symbols-outlined text-3xl"
                    data-icon="shield"
                  >
                    shield
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-headline font-bold text-on-surface mb-2">
                    حماية متقدمة
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    أنظمة دفاعية متعددة الطبقات مصممة لتحمل أسوأ ظروف الأشعة فوق
                    البنفسجية والعوامل البيئية والكيميائية.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 shrink-0 rounded-lg glass-card flex items-center justify-center text-primary electric-glow">
                  <span
                    className="material-symbols-outlined text-3xl"
                    data-icon="precision_manufacturing"
                  >
                    precision_manufacturing
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-headline font-bold text-on-surface mb-2">
                    فنيون خبراء
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    يخضع كل فني مركب لدينا لأكثر من ٥٠٠ ساعة من التدريب الصارم
                    قبل أن يلمس سيارة العميل.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full transition-opacity group-hover:opacity-100 opacity-50"></div>
            <img
              className="relative rounded-xl shadow-2xl border border-white/10 grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              alt="مركز تلميع وتظليل"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5q-q0H1I0DSidEPID6Osl4KnN0p0rjD4kyaoxv4U20H4eLXnLxfHqtd-t24UvcRciTSjEC4wUlghtZ2Ic9c7QcYlqtk6-pOv0oMyyvShf3xDaBix2ZIf1Omd_o_V3TdEuf6Hv3NxEwl7U42S2tH1l3mWMdb6riL7y5pSgyrL_r_Sj2D_g3Wx8YLz9y44-zElInSGTlPM0uDieVLOOtgfNsWB3pExw-B7b4LWwpGcJwYjIg1IyZjk0Kzx8wJPs66TD6u2oitxot-3I"
            />
            <div className="absolute bottom-8 right-8 bg-surface-container-highest/90 backdrop-blur-md p-6 rounded-lg border border-white/5">
              <div className="text-primary text-3xl font-black font-headline">
                99.8%
              </div>
              <div className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">
                رضا العملاء
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter mb-4 text-on-surface">
            اكتشف الفرق
          </h2>
          <p className="text-on-surface-variant">
            شاهد التحول المذهل من العيوب الباهتة إلى لمعان صالة العرض المبهر.
          </p>
        </div>

        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12"
          dir="ltr"
        >
          {/* Sliders kept LTR purely for visual consistency on the slider bar control, labels translate fine */}
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80"
            afterImage="https://images.unsplash.com/photo-1621245054178-9e63a14ffc1c?w=800&q=80"
            beforeLabel="التشوهات"
            afterLabel="التطعيم اللامع"
          />
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80"
            afterImage="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80"
            beforeLabel="اللون الباهت"
            afterLabel="بريق السيراميك"
          />
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80"
            afterImage="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80"
            beforeLabel="الطلاء العادي"
            afterLabel="أفلام PPF"
          />
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80"
            afterImage="https://images.unsplash.com/photo-1614145115598-f2b15dbb98a0?w=800&q=80"
            beforeLabel="زجاج قياسي"
            afterLabel="عزل حراري"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <h3 className="text-2xl md:text-3xl font-headline font-bold mb-8 text-on-surface text-center opacity-50 uppercase tracking-widest">
            لمساتنا الساحرة
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl overflow-hidden group border border-white/5 aspect-square relative">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="جنوط لامعة"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBPbtDRycMPSmkBFnQJFjc1vyFGYlWDF1GEDD8l7RRC9tVZgbAbRZovsMQXDELD4YGoBJRd7GV3nEXPjOKSlYApIzskn2y4C02AB3Azht39i8WPT3A5PxJO3efKGzcueScWmfqBvgle0lNdwxuSUGu4Mbk7P4HJRhQ4S5vU81I4-YoG3kbtS1o8yUI_k616RpqSO6UcaP9ie2zRFAQ4x8KPVJUmUV405W57NKcRZKJOMb6a-wxb_6GoIhICVq0uwOrBbL4T2cnkBvQ"
              />
            </div>
            <div className="rounded-xl overflow-hidden group border border-white/5 aspect-square relative">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="مقصورة فاخرة"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_aBOyJlAojDP3ZzCtTqjYKIf36H_hScSdxyPwrUBjod0NXhc5BTZhi9V3AB93rv_Pz5K0rd09dexO-DL9ydGOOV9uZMacNI52jgC61b_Eyic68P6QgAs9-5fdq93LOoDn9suDk6rCnrrvSmcojnGzMBt6JGXNDRtdsyX6Kk3YKw9EYROmgJxhAUpuS13uytyc3vJ3WJOcMZpQJVcBT2plbaAthd4-T-PxEjCogPmo73R0tf6k7GUTbXqUi4Pj7HlRZFRsDDs9T9wV"
              />
            </div>
            <div className="rounded-xl overflow-hidden group border border-white/5 aspect-square relative">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="شبكة أمامية نظيفة"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIED4cROk-DsXDb3U3uYJ7qj1himSm_0xCtenMuhzN50ttrQHZ8j4EOUEl6WTillMnBa_097CE65sdds9Xr7Qd7GWiz43gHPMsdZVvqVWq5Za8qnZmRRhsX1oU7Q-OFWnXDL2OxUFieUNy-cm9ScLVZuj5KdbMzknpo3G5B94PzSyXeuVcr9Sz1k0Neof3BfOT04lIXqnDX4w4UQhN7-8E-SmarhpW7XM_SXKOQ0rG2zTKHpG0Oy87VEOPFVzCLvsZWXvEbsbXymFF"
              />
            </div>
            <div className="rounded-xl overflow-hidden group border border-white/5 aspect-square relative">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="أضواء السيارات"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2oIaUU4Fpx_JtuUJo0JaSREXUss7FBu-Wow3N3r0M6pWx4hXcPq_Ua8KU6e7VD3yIpc8lTuuMlRiXZKBEb0TT6xZ8q9T1R1fJmmHyPKaWVrLli85EXrGBUkzmVBoNIfkW9WdY2Fd_hvjXkaKCAOyBjUtRqlcyPYwQcz3ZmLoUpfsPd-k00JuEEgrl5ubfjTsqxhoQWIvGpHQfT-xAp5BH_2reRCoQWKGm9cW1XY8H5WTEGovpxqlIl1Hoqd01DoDq2dB5adfqyLmf"
              />
            </div>
          </div>
        </div>
      </section>

      <TestimonialsCarousel locale="ar" />

      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-headline font-extrabold tracking-tighter mb-8 text-on-surface">
              فروعنا الحصرية
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-xl glass-card">
                <div className="font-headline font-bold text-lg text-on-surface mb-2">
                  فرع القاهرة
                </div>
                <p className="text-on-surface-variant text-sm mb-4">
                  مدينة نصر، التجمع الخامس
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-primary font-bold">
                  <a
                    href="tel:+201000411099"
                    className="flex items-center gap-1"
                  >
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="call"
                    >
                      call
                    </span>{' '}
                    <span dir="ltr">+20 1000 411 099</span>
                  </a>
                  <a
                    href="https://maps.google.com/?q=Nasr+City+5th+Settlement+Cairo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="map"
                    >
                      map
                    </span>{' '}
                    الاتجاهات
                  </a>
                </div>
              </div>
              <div className="p-6 rounded-xl glass-card">
                <div className="font-headline font-bold text-lg text-on-surface mb-2">
                  فرع الإسكندرية
                </div>
                <p className="text-on-surface-variant text-sm mb-4">
                  محافظة الإسكندرية
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-primary font-bold">
                  <a
                    href="tel:+201000411099"
                    className="flex items-center gap-1"
                  >
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="call"
                    >
                      call
                    </span>{' '}
                    <span dir="ltr">+20 1000 411 099</span>
                  </a>
                  <a
                    href="https://maps.google.com/?q=Alexandria+Governorate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="map"
                    >
                      map
                    </span>{' '}
                    الاتجاهات
                  </a>
                </div>
              </div>
              <div className="p-6 rounded-xl glass-card">
                <div className="font-headline font-bold text-lg text-on-surface mb-2">
                  فرع أكتوبر
                </div>
                <p className="text-on-surface-variant text-sm mb-4">
                  السادس من أكتوبر، الجيزة
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-primary font-bold">
                  <a
                    href="tel:+201000411099"
                    className="flex items-center gap-1"
                  >
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="call"
                    >
                      call
                    </span>{' '}
                    <span dir="ltr">+20 1000 411 099</span>
                  </a>
                  <a
                    href="https://maps.google.com/?q=6th+of+October+City+Giza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="map"
                    >
                      map
                    </span>{' '}
                    الاتجاهات
                  </a>
                </div>
              </div>
            </div>
          </div>
          <InteractiveBranchMap locale="ar" />
        </div>
      </section>

      <a
        className="fixed bottom-4 right-4 md:bottom-12 md:right-12 z-[100] w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group overflow-hidden"
        href="https://wa.me/201000411099"
      >
        <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
        <svg
          className="w-8 h-8 relative z-10"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
        </svg>
      </a>
    </div>
  );
}
