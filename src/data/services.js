// Central data file for all service pages
// This is the single source of truth for service content

export const services = [
  {
    // Basic Info
    slug: 'stretch-mark-camouflage',
    name: 'Stretch Mark Camouflage Tattoo',
    shortName: 'Stretch Mark Camouflage',
    icon: 'brush', // Will use SVG icons

    // SEO & Meta
    meta: {
      title: 'Stretch Mark Camouflage Tattoo | Sparks, NV | Revivelle Ink',
      description: 'Professional stretch mark camouflage tattooing in Sparks, NV. Custom pigment matching for natural-looking results. Safe for all skin tones. Book your free consultation.',
      keywords: 'stretch mark camouflage Sparks NV, stretch mark tattoo Reno, paramedical tattoo Nevada, stretch mark removal Sparks, skin camouflage tattoo Washoe County',
    },

    // Page Content
    hero: {
      title: 'Stretch Mark Camouflage Tattoo',
      subtitle: 'Custom pigment-matching tattoo that blends stretch marks into your natural skin tone for smoother, more confident skin.',
    },

    intro: {
      tagline: 'Transform Your Skin',
      heading: 'What is Stretch Mark Camouflage Tattooing?',
      description: 'Stretch mark camouflage is a specialized paramedical tattoo technique that uses custom-blended pigments to match your natural skin tone. By carefully tattooing pigment into white or light stretch marks, we can significantly reduce their appearance and create a smoother, more even look. This treatment is ideal for those with mature, light-colored stretch marks who want long-lasting results.',
    },

    benefits: [
      'Custom pigment perfectly matched to your skin tone',
      'Long-lasting results (3-7 years)',
      'Safe and effective for all skin tones',
      'Minimal downtime and fast healing',
      'Reduces visibility of white and light stretch marks',
      'Boost confidence and feel comfortable in your skin',
    ],

    process: [
      {
        step: '01',
        title: 'Free Consultation',
        description: 'We discuss your goals, examine your stretch marks, and determine if you\'re a good candidate. I\'ll answer all your questions and explain what to expect.',
      },
      {
        step: '02',
        title: 'Custom Color Matching',
        description: 'I create a custom pigment blend that perfectly matches your natural skin tone, ensuring seamless, natural-looking results.',
      },
      {
        step: '03',
        title: 'Treatment Session',
        description: 'Using a sterile, single-use cartridge, I carefully tattoo the custom pigment into your stretch marks. Numbing is available for comfort.',
      },
      {
        step: '04',
        title: 'Healing & Follow-Up',
        description: 'Your skin heals over 4-6 weeks. Most clients need 1-3 sessions total, spaced 8-12 weeks apart for optimal results.',
      },
    ],

    pricing: {
      display: '$250 per section',
      details: [
        'Starting at $250 per treatment area per session',
        'Most clients need 1-3 sessions for best results',
        'Sessions spaced 8-12 weeks apart',
        'Non-refundable deposit required to book',
        'Free initial consultation (phone or in-person)',
      ],
      cta: 'Pricing varies based on size and complexity of the area. Call for a personalized quote.',
    },

    idealFor: {
      heading: 'Is This Treatment Right for You?',
      intro: 'Stretch mark camouflage tattooing works best for clients who meet these criteria:',
      criteria: [
        'You have white, silver, or light-colored stretch marks',
        'Your stretch marks are fully healed (at least 1 year old)',
        'Your skin tone is stable (no recent tanning or sun exposure)',
        'You want a long-lasting, low-maintenance solution',
        'You\'re not pregnant or nursing',
        'You have realistic expectations about results',
      ],
      note: 'This treatment is safe for all skin tones. I customize every session to your unique skin type and goals.',
    },

    commonAreas: [
      'Abdomen',
      'Hips',
      'Thighs',
      'Buttocks',
      'Breasts',
      'Arms',
      'Lower back',
      'Calves',
    ],

    faqs: [
      {
        question: 'How long does stretch mark camouflage last?',
        answer: 'Results typically last 3-7 years, depending on your lifestyle, skin type, and sun exposure. Touch-ups may be needed over time as pigment naturally fades.',
      },
      {
        question: 'Does stretch mark camouflage tattooing hurt?',
        answer: 'Most clients describe the sensation as mild scratching or vibration, similar to a regular tattoo. Topical numbing cream is available to maximize your comfort during the session.',
      },
      {
        question: 'How many sessions will I need?',
        answer: 'Most clients need 1-3 sessions to achieve their desired results. The number of sessions depends on the size, depth, and color of your stretch marks. Sessions are spaced 8-12 weeks apart.',
      },
      {
        question: 'Can you treat red or purple stretch marks?',
        answer: 'No, this treatment is only for white, silver, or light-colored stretch marks that have fully matured. Red or purple marks are still in the healing phase and cannot be tattooed. Wait until they turn white (typically 1+ year).',
      },
      {
        question: 'Will my stretch marks completely disappear?',
        answer: 'While camouflage tattooing can dramatically reduce the appearance of stretch marks, it cannot make them completely disappear. The goal is to blend them into your natural skin tone for a smoother, more even look.',
      },
      {
        question: 'What is the healing process like?',
        answer: 'Healing takes 4-6 weeks. The treated area may appear darker initially, then gradually lightens to match your skin tone. You\'ll need to avoid sun exposure, swimming, and heavy sweating during healing.',
      },
      {
        question: 'Is this treatment safe for all skin tones?',
        answer: 'Yes! I specialize in color matching for all skin tones, from very fair to very deep. I custom-blend pigments to ensure natural, seamless results regardless of your complexion.',
      },
      {
        question: 'How much does stretch mark camouflage cost in Sparks, NV?',
        answer: 'Treatment starts at $250 per section per session. The total cost depends on the size and number of areas treated. Most clients invest $500-$1,500 total for complete treatment. Call for a free consultation and personalized quote.',
      },
    ],

    // Related services for cross-linking
    relatedServices: ['inkless-revision', 'scar-camouflage'],
  },

  {
    // Basic Info
    slug: 'inkless-revision',
    name: 'Inkless Stretch Mark Revision',
    shortName: 'Inkless Revision',
    icon: 'sparkles',

    // SEO & Meta
    meta: {
      title: 'Inkless Stretch Mark Revision | Sparks, NV | Revivelle Ink',
      description: 'Natural inkless stretch mark revision in Sparks, NV. Pigment-free collagen stimulation treatment for smoother skin texture. Safe for all skin types. Book consultation.',
      keywords: 'inkless stretch mark revision Sparks NV, inkless scar revision Reno, stretch mark treatment Nevada, collagen induction therapy Sparks, natural scar treatment Washoe County',
    },

    // Page Content
    hero: {
      title: 'Inkless Stretch Mark Revision',
      subtitle: 'Pigment-free treatment using custom serums and controlled needling to naturally improve stretch mark texture and appearance.',
    },

    intro: {
      tagline: 'Natural Healing',
      heading: 'What is Inkless Stretch Mark Revision?',
      description: 'Inkless revision is a natural, pigment-free treatment that uses controlled micro-needling and specialized healing serums to stimulate your skin\'s own collagen production. Unlike tattooing, this technique doesn\'t add any ink or pigment—instead, it works with your body\'s natural healing response to improve stretch mark texture, tone, and overall appearance. It\'s an excellent option for those who prefer a holistic approach or aren\'t ready for pigment.',
    },

    benefits: [
      'No tattoo pigment or ink used',
      'Stimulates natural collagen production',
      'Improves texture, tone, and appearance',
      'Safe for all skin types and tones',
      'Can treat red, purple, white, and silver stretch marks',
      'Natural healing process with long-lasting results',
    ],

    process: [
      {
        step: '01',
        title: 'Consultation & Assessment',
        description: 'We evaluate your stretch marks and skin type, discuss your goals, and create a personalized treatment plan tailored to your needs.',
      },
      {
        step: '02',
        title: 'Skin Preparation',
        description: 'The treatment area is thoroughly cleansed and prepped. Numbing cream is applied if desired for maximum comfort.',
      },
      {
        step: '03',
        title: 'Controlled Needling',
        description: 'I perform precise micro-needling to create controlled micro-channels in the skin, triggering your body\'s natural collagen response.',
      },
      {
        step: '04',
        title: 'Serum Infusion',
        description: 'Specialized healing serums are applied and gently infused into the micro-channels to support regeneration and optimal healing.',
      },
      {
        step: '05',
        title: 'Aftercare & Follow-Up',
        description: 'I provide detailed aftercare instructions and schedule your next session. Most clients need 3-6 treatments spaced 6-8 weeks apart.',
      },
    ],

    pricing: {
      display: '$250 per section',
      details: [
        'Starting at $250 per treatment area per session',
        'Most clients need 3-6 sessions for optimal results',
        'Sessions spaced 6-8 weeks apart',
        'Non-refundable deposit required to book',
        'Free initial consultation (phone or in-person)',
      ],
      cta: 'Pricing varies based on size and complexity of the area. Call for a personalized quote.',
    },

    idealFor: {
      heading: 'Is Inkless Revision Right for You?',
      intro: 'Inkless stretch mark revision is ideal for clients who:',
      criteria: [
        'Prefer a natural, pigment-free approach',
        'Have red, purple, white, or silver stretch marks',
        'Want to improve texture and tone without tattoo ink',
        'Are willing to commit to multiple sessions (3-6 treatments)',
        'Have realistic expectations about gradual improvement',
        'Are not pregnant or nursing',
      ],
      note: 'This treatment works beautifully on all skin tones and can be combined with pigment camouflage for enhanced results.',
    },

    commonAreas: [
      'Abdomen',
      'Hips',
      'Thighs',
      'Buttocks',
      'Breasts',
      'Arms',
      'Lower back',
      'Shoulders',
    ],

    faqs: [
      {
        question: 'What\'s the difference between inkless revision and camouflage tattooing?',
        answer: 'Inkless revision uses no pigment or ink—it relies on your body\'s natural collagen production to improve texture and tone. Camouflage tattooing uses custom-blended pigments to match your skin tone and visually blend stretch marks. Inkless is more natural, while tattooing provides more dramatic color correction.',
      },
      {
        question: 'How many inkless revision sessions will I need?',
        answer: 'Most clients need 3-6 sessions for optimal results. Treatments are spaced 6-8 weeks apart to allow your skin to heal and build new collagen between sessions.',
      },
      {
        question: 'Does inkless stretch mark revision hurt?',
        answer: 'Most clients describe the sensation as mild scratching or tingling. Numbing cream is available to ensure your comfort throughout the treatment.',
      },
      {
        question: 'How long do inkless revision results last?',
        answer: 'Results are long-lasting because the treatment stimulates your body\'s own collagen production. The improvements develop gradually over 3-6 months and can continue to improve for up to a year after your final session.',
      },
      {
        question: 'Can inkless revision treat red or purple stretch marks?',
        answer: 'Yes! Unlike pigment camouflage, inkless revision can treat stretch marks at any stage—red, purple, white, or silver. It\'s an excellent option for newer stretch marks.',
      },
      {
        question: 'What is the healing process like for inkless revision?',
        answer: 'Healing takes about 1-2 weeks. You may experience mild redness and sensitivity immediately after treatment. The area will heal relatively quickly, and you\'ll see gradual improvement over the following weeks as collagen builds.',
      },
      {
        question: 'Can I combine inkless revision with pigment camouflage?',
        answer: 'Absolutely! Many clients start with inkless revision to improve texture, then add pigment camouflage for color correction. This combination approach often produces the best overall results.',
      },
      {
        question: 'How much does inkless stretch mark revision cost in Sparks, NV?',
        answer: 'Treatment starts at $250 per section per session. Most clients invest $750-$1,500 total for a complete series of 3-6 treatments. Call for a free consultation and personalized quote.',
      },
    ],

    relatedServices: ['stretch-mark-camouflage', 'scar-camouflage'],
  },

  {
    // Basic Info
    slug: 'scar-camouflage',
    name: 'Scar Camouflage & Revision',
    shortName: 'Scar Camouflage',
    icon: 'healing',

    // SEO & Meta
    meta: {
      title: 'Scar Camouflage Tattoo | Sparks, NV | Revivelle Ink',
      description: 'Professional scar camouflage tattooing in Sparks, NV. Reduce appearance of surgical scars, C-sections, and injury scars. Safe, natural results. Book consultation.',
      keywords: 'scar camouflage Sparks NV, scar tattoo Reno, C-section scar camouflage Nevada, surgical scar treatment Sparks, paramedical tattoo Washoe County, scar revision Reno',
    },

    // Page Content
    hero: {
      title: 'Scar Camouflage & Revision',
      subtitle: 'Specialized paramedical tattooing to reduce the appearance of surgical scars, injury scars, and texture irregularities.',
    },

    intro: {
      tagline: 'Restore Your Confidence',
      heading: 'What is Scar Camouflage?',
      description: 'Scar camouflage is a specialized paramedical tattoo technique that blends scars into the surrounding skin using custom-matched pigments. Whether you have a C-section scar, tummy tuck scar, or injury scar, this treatment can significantly reduce visibility and help you feel more confident. For textured scars, we can also use inkless revision techniques to improve the scar\'s texture before adding pigment.',
    },

    benefits: [
      'Reduces visibility of surgical and injury scars',
      'Custom color matching for natural-looking results',
      'Safe for all skin tones',
      'Can treat C-section, tummy tuck, and surgical scars',
      'Inkless options available for texture improvement',
      'Boost confidence and reduce self-consciousness',
    ],

    process: [
      {
        step: '01',
        title: 'Consultation & Evaluation',
        description: 'I examine your scar, discuss your goals, and determine the best treatment approach—pigment camouflage, inkless revision, or a combination.',
      },
      {
        step: '02',
        title: 'Treatment Planning',
        description: 'For pigment work, I create a custom color blend. For textured scars, I may recommend starting with inkless revision to improve texture first.',
      },
      {
        step: '03',
        title: 'Treatment Session',
        description: 'Using sterile, single-use equipment, I carefully perform the treatment. Numbing is available to ensure your comfort.',
      },
      {
        step: '04',
        title: 'Healing & Results',
        description: 'Your scar heals over 4-6 weeks. Multiple sessions may be needed depending on the scar type, size, and desired results.',
      },
    ],

    pricing: {
      display: '$250 per section',
      details: [
        'Starting at $250 per treatment area per session',
        'Number of sessions varies by scar type and size',
        'Sessions spaced 8-12 weeks apart for pigment work',
        'Sessions spaced 6-8 weeks apart for inkless revision',
        'Non-refundable deposit required to book',
        'Free initial consultation (phone or in-person)',
      ],
      cta: 'Pricing varies based on scar size, type, and treatment approach. Call for a personalized quote.',
    },

    idealFor: {
      heading: 'Is Scar Camouflage Right for You?',
      intro: 'Scar camouflage works best for clients who:',
      criteria: [
        'Have fully healed scars (at least 12-18 months old)',
        'Want to reduce the visibility of surgical or injury scars',
        'Have realistic expectations about results',
        'Are not keloid-prone (raised, overgrown scars)',
        'Have stable skin tone (no recent tanning)',
        'Are not pregnant or nursing',
      ],
      note: 'Not all scars are suitable for camouflage. Keloid scars, hypertrophic scars, and very recent scars may not be good candidates. Call for a free consultation to discuss your specific scar.',
    },

    commonAreas: [
      'C-section scars',
      'Tummy tuck scars',
      'Breast surgery scars',
      'Injury scars',
      'Surgical scars',
      'Burn scars (healed)',
      'Self-harm scars',
      'Accident scars',
    ],

    faqs: [
      {
        question: 'Can you camouflage any type of scar?',
        answer: 'Not all scars are suitable for camouflage. The best candidates are flat, fully healed scars that are at least 12-18 months old. Keloid scars, hypertrophic (raised) scars, and very textured scars may not be good candidates. Call for a consultation to discuss your specific scar.',
      },
      {
        question: 'How long does scar camouflage last?',
        answer: 'Scar camouflage typically lasts 3-7 years, depending on the scar location, your lifestyle, and sun exposure. Touch-ups may be needed as pigment naturally fades over time.',
      },
      {
        question: 'Can you treat C-section scars?',
        answer: 'Yes! C-section scars are one of the most common areas we treat. The scar must be fully healed (at least 12-18 months postpartum) and you must not be pregnant or nursing.',
      },
      {
        question: 'Does scar camouflage hurt?',
        answer: 'Most clients describe the sensation as mild discomfort, similar to a regular tattoo. Scar tissue can sometimes be less sensitive than normal skin. Numbing cream is available for your comfort.',
      },
      {
        question: 'How many sessions will I need for scar camouflage?',
        answer: 'It depends on the scar type, size, and color difference. Most clients need 1-3 sessions for pigment camouflage, or 3-6 sessions if starting with inkless revision for texture improvement.',
      },
      {
        question: 'What\'s the difference between scar camouflage and inkless scar revision?',
        answer: 'Scar camouflage uses pigment to blend the scar color into surrounding skin. Inkless revision uses micro-needling and serums to improve scar texture without adding pigment. They can be combined for optimal results.',
      },
      {
        question: 'Will my scar completely disappear?',
        answer: 'No treatment can make a scar completely disappear. The goal of camouflage is to reduce the scar\'s visibility by blending it into the surrounding skin tone. Results vary depending on the scar type and skin tone.',
      },
      {
        question: 'How much does scar camouflage cost in Sparks, NV?',
        answer: 'Treatment starts at $250 per session. The total cost depends on scar size, type, and number of sessions needed. Most clients invest $250-$1,000+ for complete treatment. Call for a free consultation and personalized quote.',
      },
    ],

    relatedServices: ['stretch-mark-camouflage', 'inkless-revision'],
  },
];

// Helper function to get service by slug
export function getServiceBySlug(slug) {
  return services.find(service => service.slug === slug);
}

// Helper function to get related services
export function getRelatedServices(currentSlug) {
  const currentService = getServiceBySlug(currentSlug);
  if (!currentService) return [];

  return currentService.relatedServices
    .map(slug => getServiceBySlug(slug))
    .filter(Boolean);
}
