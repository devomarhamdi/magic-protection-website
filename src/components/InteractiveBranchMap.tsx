import React from 'react';

type Locale = 'en' | 'ar';

export default function InteractiveBranchMap({ locale }: { locale: Locale }) {
  const isEn = locale === 'en';

  return (
    <div className="lg:w-2/3">
      <div className="h-80 sm:h-105 lg:h-125 rounded-2xl overflow-hidden border border-white/10 bg-surface-container relative">
        <div className="absolute inset-0 bg-primary-container/10 pointer-events-none"></div>

        <img
          className="w-full h-full object-cover object-center opacity-65 grayscale"
          alt={isEn ? 'Branches map' : 'خريطة الفروع'}
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6_1UY0brajEP2IdYbs2hjKdbcZ9QEy4Y8SW5SbLTshKHdpup9mczNMbsibWu2r79IxS4rlQfbEY9EzD0C4Dyy7gTCvd80AQx_RgqS_yhqdeFazLUyrI2bSpuQUZPQzeKlmcsWZfynLZjalvExvOc02JYxqpIwHW9S6bZd5i-4L2PO5V3X1kDSqo8sh5McP8DUjnXSJ6Mo8ifPK_w3oPej5XFLatSRwb_pvOQ88W2VOq4ij0dQNLUh-QsmVPAgpqw_WPgOD6HFk1ZX"
        />
      </div>
    </div>
  );
}
