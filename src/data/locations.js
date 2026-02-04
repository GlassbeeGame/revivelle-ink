// Central data file for all location pages
// This is the single source of truth for location content
// Add new locations here - pages will auto-generate

export const locations = [
  {
    // Sparks - Primary Studio Location
    slug: 'sparks',
    name: 'Sparks',
    fullName: 'Sparks, Nevada',
    tagline: 'Our primary studio location',
    driveTime: 'Studio',
    distance: '0 miles',
    direction: 'primary',
    featured: true,
    isPrimary: true, // Flag to identify primary location

    // SEO & Meta
    meta: {
      title: 'Paramedical Tattoo Studio in Sparks, NV | Revivelle Ink',
      description: 'Professional paramedical tattoo studio in Sparks, NV specializing in stretch mark camouflage, scar camouflage tattoo, and inkless revision. Private, appointment-only studio. Licensed & insured. Book your free consultation.',
      keywords: 'paramedical tattoo Sparks NV, stretch mark camouflage Sparks, scar camouflage Sparks, inkless revision Sparks, Revivelle Ink Sparks',
    },

    // Hero Section
    hero: {
      title: 'Paramedical Tattoo Services in Sparks, NV',
      subtitle: 'Professional stretch mark and scar camouflage serving Sparks residents — from our private Sparks studio.',
    },

    // Introduction Section
    intro: {
      tagline: 'Serving Your Community',
      heading: 'Professional Paramedical Tattoo Services for Sparks Residents',
      description: 'Revivelle Ink is a boutique, appointment-only paramedical tattoo studio located in Sparks, Nevada, specializing in stretch mark camouflage, scar camouflage tattoo, and inkless revision. This Sparks location is our primary and only studio, serving clients throughout Washoe County and Northern Nevada.',
    },

    // Services Offered (with backlinks to service pages)
    servicesOffered: [
      {
        name: 'Stretch Mark Camouflage',
        slug: 'stretch-mark-camouflage',
        description: 'Custom pigment-matching tattoo that blends healed stretch marks into your natural skin tone.',
      },
      {
        name: 'Scar Camouflage & Revision',
        slug: 'scar-camouflage',
        description: 'Specialized paramedical tattooing to reduce the appearance of surgical and injury scars.',
      },
      {
        name: 'Inkless Stretch Mark Revision',
        slug: 'inkless-revision',
        description: 'Natural, pigment-free treatment that improves texture and tone at every stage.',
      },
    ],

    // Benefits for this location
    benefits: [
      'Located directly in Sparks, NV — no commuting required',
      'Easy access from major roads and nearby neighborhoods',
      'Private, appointment-only studio environment',
      'Free consultations available by phone or in-person',
      'Flexible scheduling for Sparks residents',
      'All services performed at our Sparks studio',
      'Licensed, insured, and Washoe County compliant',
    ],

    // Directions & What to Expect
    process: [
      {
        step: '01',
        title: 'Easy to Find',
        description: 'Studio Address: 2165 Green Vista Dr, Suite 206B, Sparks, NV 89431. The studio is located in a professional building designed for privacy and accessibility. It\'s easily reachable from Victorian Square, Sparks Marina, and surrounding neighborhoods.',
      },
      {
        step: '02',
        title: 'Plan Your Visit',
        description: 'Most Sparks residents can expect a 5–10 minute drive, depending on neighborhood and time of day. Parking is available near the building. Morning and early afternoon appointments typically offer the lightest traffic.',
      },
      {
        step: '03',
        title: 'Your Appointment',
        description: 'Appointments are scheduled in advance to ensure a calm, one-on-one experience. You\'ll be welcomed into a quiet studio environment focused on precision, restoration, and comfort.',
      },
      {
        step: '04',
        title: 'Follow-Up Care',
        description: 'If your treatment plan includes multiple sessions, follow-up appointments are scheduled with healing timelines in mind. Ongoing aftercare support is provided directly from the Sparks studio.',
      },
    ],

    // Pricing (same as services)
    pricing: {
      display: '$250 per section',
      details: [
        'Starting at $250 per treatment area',
        'Pricing is the same for all clients',
        'Most clients need 1–3 sessions for best results',
        'Free initial consultation (phone or in-person)',
        'Flexible scheduling for Sparks residents',
      ],
      cta: 'Pricing does not vary by location. All services are performed at the Sparks studio with transparent guidance provided during consultation.',
    },

    // Who from this area should come
    idealFor: {
      heading: 'Why Choose Revivelle Ink from Sparks?',
      intro: 'Residents of Sparks choose Revivelle Ink because:',
      criteria: [
        'It is a local Sparks-based paramedical tattoo studio',
        'Specialized focus on stretch marks and scars — not general tattooing',
        'No need to travel to Reno, California, or Las Vegas for advanced care',
        'Familiarity with Northern Nevada\'s dry climate and skin considerations',
        'Licensed, insured, and professionally trained care',
        'Custom treatments designed for all skin tones',
        'A private, peaceful studio rooted in compassion and precision',
      ],
      note: 'Revivelle Ink is proud to serve the Sparks community with restorative care that prioritizes quality over volume.',
    },

    // Neighborhoods/areas within this location
    commonAreas: [
      'Victorian Square',
      'Sparks Marina District',
      'Wingfield Springs',
      'Los Altos Parkway',
      'Spanish Springs area',
      'Vista Boulevard corridor',
    ],

    // Location-specific FAQs
    faqs: [
      {
        question: 'Is this your main location?',
        answer: 'Yes. Revivelle Ink is located in Sparks, NV, and all services are performed at this studio.',
      },
      {
        question: 'Do you serve areas outside of Sparks?',
        answer: 'Yes. While the studio is in Sparks, we welcome clients from Reno and surrounding areas.',
      },
      {
        question: 'Is parking available?',
        answer: 'Yes. Parking is available near the studio building.',
      },
      {
        question: 'Can I book a consultation if I live in Sparks?',
        answer: 'Absolutely. Free consultations are available by phone or in person.',
      },
      {
        question: 'Do Sparks residents receive the same services and pricing?',
        answer: 'Yes. All clients receive the same professional services and pricing regardless of where they\'re visiting from.',
      },
    ],

    // Related locations for cross-linking
    relatedLocations: ['reno', 'spanish-springs'],
  },

  {
    // Basic Info (Used for cards and navigation)
    slug: 'reno',
    name: 'Reno',
    fullName: 'Reno, Nevada',
    tagline: 'Just minutes from our Sparks studio',
    driveTime: '5 min',
    distance: '2.5 miles',
    direction: 'west',
    featured: true, // Shows "Popular" badge on card

    // SEO & Meta
    meta: {
      title: 'Paramedical Tattoo Services in Reno, NV | Revivelle Ink',
      description: 'Professional paramedical tattoo services serving Reno residents. Stretch mark camouflage, scar camouflage tattoo, and inkless revision. Just 5 minutes from our Sparks studio. Licensed & insured. Book your free consultation.',
      keywords: 'paramedical tattoo Reno NV, stretch mark camouflage Reno, scar camouflage Reno, inkless revision Reno, Revivelle Ink Reno',
    },

    // Hero Section
    hero: {
      title: 'Paramedical Tattoo Services in Reno, NV',
      subtitle: 'Professional stretch mark and scar camouflage serving Reno residents. Just 5 minutes from our Sparks studio.',
    },

    // Introduction Section
    intro: {
      tagline: 'Serving Your Community',
      heading: 'Professional Paramedical Tattoo Services for Reno Residents',
      description: 'Revivelle Ink is a boutique paramedical tattoo studio located in Sparks, Nevada, serving clients throughout Reno and the surrounding Washoe County area. Many Reno residents visit us for specialized care that focuses on stretch mark camouflage, scar camouflage tattoo, and inkless revision, all performed in a private, appointment-only setting.',
    },

    // Services Offered (with backlinks to service pages)
    servicesOffered: [
      {
        name: 'Stretch Mark Camouflage',
        slug: 'stretch-mark-camouflage',
        description: 'Custom pigment-matching tattoo that blends healed stretch marks into your natural skin tone.',
      },
      {
        name: 'Scar Camouflage & Revision',
        slug: 'scar-camouflage',
        description: 'Specialized paramedical tattooing to reduce the appearance of surgical and injury scars.',
      },
      {
        name: 'Inkless Stretch Mark Revision',
        slug: 'inkless-revision',
        description: 'Natural, pigment-free treatment that improves texture and tone at every stage.',
      },
    ],

    // Benefits for this location
    benefits: [
      'Just 5 minutes from downtown Reno',
      'Easy access via I-80 East',
      'Private, appointment-only studio',
      'Free consultations available by phone or in-person',
      'Flexible scheduling to accommodate Reno commuters',
      'All the same professional services offered at our Sparks studio',
      'Licensed, insured, and Washoe County compliant',
    ],

    // Directions & What to Expect
    process: [
      {
        step: '01',
        title: 'Easy to Find',
        description: 'From downtown Reno, take I-80 East toward Sparks. Exit at Vista Boulevard and follow local roads to Green Vista Drive. The studio is located in a professional building designed for privacy and easy access.',
      },
      {
        step: '02',
        title: 'Plan Your Visit',
        description: 'Most Reno residents can expect a 5–10 minute drive, depending on traffic. Morning and early afternoon appointments typically offer the lightest congestion. Parking is available near the studio.',
      },
      {
        step: '03',
        title: 'Your Appointment',
        description: 'Appointments are scheduled in advance to ensure focused and unrushed care. You\'ll be welcomed into a calm, comfortable studio environment focused on precision and restoration.',
      },
      {
        step: '04',
        title: 'Follow-Up Care',
        description: 'If your treatment plan includes multiple sessions, follow-ups are scheduled with travel time in mind. Aftercare support is provided regardless of where you\'re visiting from.',
      },
    ],

    // Pricing (same as services)
    pricing: {
      display: '$250 per section',
      details: [
        'Starting at $250 per treatment area',
        'Pricing is the same for all service areas',
        'Most clients need 1–3 sessions for best results',
        'Free initial consultation (phone or in-person)',
        'Flexible scheduling for Reno residents',
        'Personalized quotes provided after consultation',
      ],
      cta: 'Pricing does not change based on location. All clients receive the same professional care and transparent guidance.',
    },

    // Who from this area should come
    idealFor: {
      heading: 'Why Choose Revivelle Ink from Reno?',
      intro: 'Residents of Reno choose Revivelle Ink because:',
      criteria: [
        'It\'s the closest certified paramedical tattoo studio specializing in scars and stretch marks',
        'No need to travel to California or Las Vegas for advanced skin camouflage',
        'Familiar with Northern Nevada\'s dry climate and skin care considerations',
        'Licensed, insured, and experienced professional care',
        'Custom treatments designed for all skin tones',
        'Flexible scheduling that works with Reno commutes',
      ],
      note: 'Many Reno clients appreciate having access to highly specialized care just minutes away, without the pressure of high-volume cosmetic studios.',
    },

    // Neighborhoods/areas within this location
    commonAreas: [
      'Downtown Reno',
      'Midtown Reno',
      'South Reno',
      'Old Southwest Reno',
      'University District',
      'Plumas',
      'Wells Avenue District',
    ],

    // Location-specific FAQs
    faqs: [
      {
        question: 'Do you serve Reno residents?',
        answer: 'Yes. While the studio is located in Sparks, many clients visit us from Reno.',
      },
      {
        question: 'How do I get to your studio from Reno?',
        answer: 'Most clients take I-80 East toward Sparks and exit near Vista Boulevard.',
      },
      {
        question: 'How long does it take to drive from Reno to your studio?',
        answer: 'Typically 5–10 minutes, depending on traffic.',
      },
      {
        question: 'Do you offer the same services to Reno residents?',
        answer: 'Yes. All services are available regardless of where you\'re visiting from.',
      },
      {
        question: 'Is parking available near your studio?',
        answer: 'Yes. Parking is available near the building.',
      },
      {
        question: 'Can I schedule a consultation if I live in Reno?',
        answer: 'Absolutely. Free consultations are available by phone or in person.',
      },
      {
        question: 'How much does paramedical tattooing cost for Reno residents?',
        answer: 'Pricing is the same for all clients and starts at $250 per treatment area.',
      },
    ],

    // Related locations for cross-linking
    relatedLocations: ['spanish-springs', 'south-reno'],
  },

  {
    // Spanish Springs
    slug: 'spanish-springs',
    name: 'Spanish Springs',
    fullName: 'Spanish Springs, Nevada',
    tagline: 'Serving the northern community',
    driveTime: '10 min',
    distance: '7 miles',
    direction: 'north',
    featured: true,

    meta: {
      title: 'Paramedical Tattoo Services in Spanish Springs, NV | Revivelle Ink',
      description: 'Professional paramedical tattoo services serving Spanish Springs residents. Stretch mark camouflage, scar camouflage tattoo, and inkless revision. Just 10 minutes from our Sparks studio. Licensed & insured. Book your free consultation.',
      keywords: 'paramedical tattoo Spanish Springs NV, stretch mark camouflage Spanish Springs, scar camouflage Spanish Springs, inkless revision Spanish Springs, Revivelle Ink Spanish Springs',
    },

    hero: {
      title: 'Paramedical Tattoo Services in Spanish Springs, NV',
      subtitle: 'Professional stretch mark and scar camouflage serving Spanish Springs residents. Just 10 minutes from our Sparks studio.',
    },

    intro: {
      tagline: 'Serving Your Community',
      heading: 'Professional Paramedical Tattoo Services for Spanish Springs Residents',
      description: 'Revivelle Ink is a boutique, appointment-only paramedical tattoo studio located in Sparks, Nevada, serving clients throughout Spanish Springs and Northern Washoe County. Many Spanish Springs residents visit our Sparks studio for highly specialized care focused on stretch mark camouflage, scar camouflage tattoo, and inkless revision.',
    },

    // Services Offered (with backlinks to service pages)
    servicesOffered: [
      {
        name: 'Stretch Mark Camouflage',
        slug: 'stretch-mark-camouflage',
        description: 'Custom pigment-matching tattoo that blends healed stretch marks into your natural skin tone.',
      },
      {
        name: 'Scar Camouflage & Revision',
        slug: 'scar-camouflage',
        description: 'Specialized paramedical tattooing to reduce the appearance of surgical and injury scars.',
      },
      {
        name: 'Inkless Stretch Mark Revision',
        slug: 'inkless-revision',
        description: 'Natural, pigment-free treatment that improves texture and tone at every stage.',
      },
    ],

    benefits: [
      'Just 10 minutes from Spanish Springs',
      'Easy access via Pyramid Way and Vista Boulevard',
      'Private, appointment-only studio',
      'Free consultations available by phone or in-person',
      'Flexible scheduling for Spanish Springs residents',
      'Same professional services and pricing as our Sparks location',
      'Licensed, insured, and Washoe County compliant',
    ],

    process: [
      {
        step: '01',
        title: 'Easy to Find',
        description: 'From Spanish Springs, head south on Pyramid Way, then connect to Vista Boulevard toward Sparks. Follow local roads to Green Vista Drive, where our studio is located in a quiet professional building.',
      },
      {
        step: '02',
        title: 'Plan Your Visit',
        description: 'Most Spanish Springs residents can expect a 10–15 minute drive, depending on location and traffic. Parking is available near the studio. Morning and early afternoon appointments typically offer the easiest travel.',
      },
      {
        step: '03',
        title: 'Your Appointment',
        description: 'Appointments are scheduled intentionally to allow for privacy and unrushed care. You\'ll be welcomed into a peaceful studio setting focused on precision and comfort.',
      },
      {
        step: '04',
        title: 'Follow-Up Care',
        description: 'If your treatment plan includes multiple sessions, follow-ups are scheduled with commute time and healing windows in mind. Ongoing aftercare support is provided directly through our Sparks studio.',
      },
    ],

    pricing: {
      display: '$250 per section',
      details: [
        'Starting at $250 per treatment area',
        'Pricing is the same for all clients, regardless of location',
        'Most clients need 1–3 sessions for best results',
        'Free initial consultation (phone or in-person)',
        'Flexible scheduling for Spanish Springs residents',
      ],
      cta: 'All services are performed at our Sparks studio with transparent pricing discussed during consultation.',
    },

    idealFor: {
      heading: 'Why Choose Revivelle Ink from Spanish Springs?',
      intro: 'Residents of Spanish Springs choose Revivelle Ink because:',
      criteria: [
        'It\'s the closest specialized paramedical tattoo studio for scars and stretch marks',
        'No need to travel to Reno, California, or Las Vegas',
        'Familiarity with Northern Nevada\'s dry climate and skin care considerations',
        'Licensed, insured, and professionally trained care',
        'Custom treatments designed for all skin tones',
        'Appointment-only scheduling that respects your time and commute',
      ],
      note: 'Many Spanish Springs clients appreciate having advanced care so close, without sacrificing privacy or quality.',
    },

    commonAreas: [
      'Eagle Canyon',
      'Wingfield Springs North',
      'Spanish Springs Valley',
      'Pyramid Highway corridor',
      'Adjacent North Valleys areas',
    ],

    faqs: [
      {
        question: 'Do you serve Spanish Springs residents?',
        answer: 'Yes. Many clients visit us from Spanish Springs for paramedical tattoo services.',
      },
      {
        question: 'How long does it take to drive from Spanish Springs to your studio?',
        answer: 'Typically 10–15 minutes, depending on traffic and location.',
      },
      {
        question: 'How do I get to your studio from Spanish Springs?',
        answer: 'Most clients take Pyramid Way south and connect to Vista Boulevard toward Sparks.',
      },
      {
        question: 'Do Spanish Springs residents receive the same services and pricing?',
        answer: 'Yes. All clients receive the same professional care and pricing.',
      },
      {
        question: 'Is parking available near your studio?',
        answer: 'Yes. Parking is available near the studio building.',
      },
    ],

    relatedLocations: ['sparks', 'reno', 'north-valleys'],
  },

  {
    // Sun Valley
    slug: 'sun-valley',
    name: 'Sun Valley',
    fullName: 'Sun Valley, Nevada',
    tagline: 'Easy access from the northwest',
    driveTime: '15 min',
    distance: '9 miles',
    direction: 'northwest',
    featured: false,

    meta: {
      title: 'Paramedical Tattoo Services in Sun Valley, NV | Revivelle Ink',
      description: 'Professional paramedical tattoo services serving Sun Valley residents. Stretch mark camouflage, scar camouflage tattoo, and inkless revision. Just 15 minutes from our Sparks studio. Licensed & insured. Book your free consultation.',
      keywords: 'paramedical tattoo Sun Valley NV, stretch mark camouflage Sun Valley, scar camouflage Sun Valley, inkless revision Sun Valley, Revivelle Ink Sun Valley',
    },

    hero: {
      title: 'Paramedical Tattoo Services in Sun Valley, NV',
      subtitle: 'Professional stretch mark and scar camouflage serving Sun Valley residents. Just 15 minutes from our Sparks studio.',
    },

    intro: {
      tagline: 'Serving Your Community',
      heading: 'Professional Paramedical Tattoo Services for Sun Valley Residents',
      description: 'Revivelle Ink is a boutique, appointment-only paramedical tattoo studio located in Sparks, Nevada, serving clients throughout Sun Valley and the surrounding North Valleys area. Many Sun Valley residents visit our Sparks studio for specialized care focused on stretch mark camouflage, scar camouflage tattoo, and inkless revision.',
    },

    // Services Offered (with backlinks to service pages)
    servicesOffered: [
      {
        name: 'Stretch Mark Camouflage',
        slug: 'stretch-mark-camouflage',
        description: 'Custom pigment-matching tattoo that blends healed stretch marks into your natural skin tone.',
      },
      {
        name: 'Scar Camouflage & Revision',
        slug: 'scar-camouflage',
        description: 'Specialized paramedical tattooing to reduce the appearance of surgical and injury scars.',
      },
      {
        name: 'Inkless Stretch Mark Revision',
        slug: 'inkless-revision',
        description: 'Natural, pigment-free treatment that improves texture and tone at every stage.',
      },
    ],

    benefits: [
      'Just 15 minutes from Sun Valley',
      'Easy access via Clear Acre Lane and Vista Boulevard',
      'Private, appointment-only studio',
      'Free consultations available by phone or in-person',
      'Flexible scheduling for Sun Valley residents',
      'Same professional services and pricing as our Sparks location',
      'Licensed, insured, and Washoe County compliant',
    ],

    process: [
      {
        step: '01',
        title: 'Easy to Find',
        description: 'From Sun Valley, take Clear Acre Lane toward Sparks, then connect to Vista Boulevard. Follow local roads to Green Vista Drive, where our studio is located in a quiet professional building designed for privacy and accessibility.',
      },
      {
        step: '02',
        title: 'Plan Your Visit',
        description: 'Most Sun Valley residents can expect a 15–20 minute drive, depending on traffic and time of day. Parking is available near the studio. Midday appointments often provide the easiest travel conditions.',
      },
      {
        step: '03',
        title: 'Your Appointment',
        description: 'Appointments are scheduled intentionally to allow for a calm, one-on-one experience. You\'ll be welcomed into a peaceful studio environment focused on precision, restoration, and comfort.',
      },
      {
        step: '04',
        title: 'Follow-Up Care',
        description: 'If your treatment plan includes multiple sessions, follow-up appointments are scheduled with commute time and healing timelines in mind. Ongoing aftercare support is provided directly from our Sparks studio.',
      },
    ],

    pricing: {
      display: '$250 per section',
      details: [
        'Starting at $250 per treatment area',
        'Pricing is the same for all clients, regardless of location',
        'Most clients need 1–3 sessions for best results',
        'Free initial consultation (phone or in-person)',
        'Flexible scheduling for Sun Valley residents',
      ],
      cta: 'All services are performed at our Sparks studio with transparent pricing discussed during consultation.',
    },

    idealFor: {
      heading: 'Why Choose Revivelle Ink from Sun Valley?',
      intro: 'Residents of Sun Valley choose Revivelle Ink because:',
      criteria: [
        'It\'s the closest specialized paramedical tattoo studio for stretch marks and scars',
        'No need to travel to Reno, California, or Las Vegas',
        'Familiarity with Northern Nevada\'s dry climate and skin considerations',
        'Licensed, insured, and professionally trained care',
        'Custom treatments designed for all skin tones',
        'Appointment-only scheduling that respects your time and commute',
      ],
      note: 'Many Sun Valley clients value having access to high-level, compassionate care just a short drive away.',
    },

    commonAreas: [
      'Sun Valley Boulevard area',
      'Clear Acre Lane corridor',
      'Highland Ranch',
      'North Valleys adjacent neighborhoods',
    ],

    faqs: [
      {
        question: 'Do you serve Sun Valley residents?',
        answer: 'Yes. Many clients visit us from Sun Valley for paramedical tattoo services.',
      },
      {
        question: 'How long does it take to drive from Sun Valley to your studio?',
        answer: 'Typically 15–20 minutes, depending on traffic.',
      },
      {
        question: 'How do I get to your studio from Sun Valley?',
        answer: 'Most clients take Clear Acre Lane toward Sparks and connect to Vista Boulevard.',
      },
      {
        question: 'Do Sun Valley residents receive the same services and pricing?',
        answer: 'Yes. All clients receive the same professional care and pricing.',
      },
      {
        question: 'Is parking available near your studio?',
        answer: 'Yes. Parking is available near the studio building.',
      },
    ],

    relatedLocations: ['reno', 'north-valleys'],
  },

  {
    // South Reno
    slug: 'south-reno',
    name: 'South Reno',
    fullName: 'South Reno, Nevada',
    tagline: 'Convenient for south Reno residents',
    driveTime: '10 min',
    distance: '6 miles',
    direction: 'southwest',
    featured: true,

    meta: {
      title: 'Paramedical Tattoo Services in South Reno, NV | Revivelle Ink',
      description: 'Professional paramedical tattoo services serving South Reno residents. Stretch mark camouflage, scar camouflage tattoo, and inkless revision. Just 10 minutes from our Sparks studio. Licensed & insured. Book your free consultation.',
      keywords: 'paramedical tattoo South Reno NV, stretch mark camouflage South Reno, scar camouflage South Reno, inkless revision South Reno, Revivelle Ink South Reno',
    },

    hero: {
      title: 'Paramedical Tattoo Services in South Reno, NV',
      subtitle: 'Professional stretch mark and scar camouflage serving South Reno residents. Just 10 minutes from our Sparks studio.',
    },

    intro: {
      tagline: 'Serving Your Community',
      heading: 'Professional Paramedical Tattoo Services for South Reno Residents',
      description: 'Revivelle Ink is a boutique, appointment-only paramedical tattoo studio located in Sparks, Nevada, serving clients throughout South Reno and the greater Washoe County area. Many South Reno residents choose our Sparks studio for specialized care focused on stretch mark camouflage, scar camouflage tattoo, and inkless revision — all performed in a private, calm environment.',
    },

    // Services Offered (with backlinks to service pages)
    servicesOffered: [
      {
        name: 'Stretch Mark Camouflage',
        slug: 'stretch-mark-camouflage',
        description: 'Custom pigment-matching tattoo that blends healed stretch marks into your natural skin tone.',
      },
      {
        name: 'Scar Camouflage & Revision',
        slug: 'scar-camouflage',
        description: 'Specialized paramedical tattooing to reduce the appearance of surgical and injury scars.',
      },
      {
        name: 'Inkless Stretch Mark Revision',
        slug: 'inkless-revision',
        description: 'Natural, pigment-free treatment that improves texture and tone at every stage.',
      },
    ],

    benefits: [
      'Just 10 minutes from South Reno',
      'Easy access via I-580 and Veterans Parkway',
      'Private, appointment-only studio',
      'Free consultations available by phone or in-person',
      'Flexible scheduling for South Reno residents',
      'Same professional services and pricing as our Sparks location',
      'Licensed, insured, and Washoe County compliant',
    ],

    process: [
      {
        step: '01',
        title: 'Easy to Find',
        description: 'From South Reno, take I-580 North toward Sparks or connect via Veterans Parkway. Follow signs toward Vista Boulevard, then local roads to Green Vista Drive. Our studio is located in a quiet professional building designed for privacy and easy access.',
      },
      {
        step: '02',
        title: 'Plan Your Visit',
        description: 'Most South Reno residents can expect a 10–15 minute drive, depending on traffic and time of day. Parking is available near the studio. Mid-morning and early afternoon appointments often provide the smoothest commute.',
      },
      {
        step: '03',
        title: 'Your Appointment',
        description: 'Appointments are scheduled intentionally to provide one-on-one care in a calm, unrushed environment. You\'ll be welcomed into a peaceful studio focused on precision, restoration, and comfort.',
      },
      {
        step: '04',
        title: 'Follow-Up Care',
        description: 'If your treatment plan includes multiple sessions, follow-ups are scheduled with commute time and healing timelines in mind. Aftercare support is always provided directly from our Sparks studio.',
      },
    ],

    pricing: {
      display: '$250 per section',
      details: [
        'Starting at $250 per treatment area',
        'Pricing is the same for all clients, regardless of location',
        'Most clients need 1–3 sessions for best results',
        'Free initial consultation (phone or in-person)',
        'Flexible scheduling for South Reno residents',
      ],
      cta: 'All services are performed at our Sparks studio with transparent pricing discussed during consultation.',
    },

    idealFor: {
      heading: 'Why Choose Revivelle Ink from South Reno?',
      intro: 'Residents of South Reno choose Revivelle Ink because:',
      criteria: [
        'It\'s the closest specialized paramedical tattoo studio for stretch marks and scars',
        'No need to travel to California or Las Vegas for advanced care',
        'Familiarity with Northern Nevada\'s dry climate and skin considerations',
        'Licensed, insured, and professionally trained care',
        'Custom treatments designed for all skin tones',
        'Appointment-only scheduling that respects your time and commute',
      ],
      note: 'Many South Reno clients appreciate having advanced, compassionate care available just minutes away.',
    },

    commonAreas: [
      'Damonte Ranch',
      'Double Diamond',
      'South Meadows',
      'Virginia Foothills',
      'Mount Rose Highway corridor',
    ],

    faqs: [
      {
        question: 'Do you serve South Reno residents?',
        answer: 'Yes. Many clients visit us from South Reno for paramedical tattoo services.',
      },
      {
        question: 'How do I get to your studio from South Reno?',
        answer: 'Most clients take I-580 North or Veterans Parkway toward Sparks.',
      },
      {
        question: 'How long does it take to drive from South Reno to your studio?',
        answer: 'Typically 10–15 minutes, depending on traffic.',
      },
      {
        question: 'Do South Reno residents receive the same services and pricing?',
        answer: 'Yes. All clients receive the same professional care and pricing.',
      },
      {
        question: 'Is parking available near your studio?',
        answer: 'Yes. Parking is available near the studio building.',
      },
    ],

    relatedLocations: ['reno', 'carson-city'],
  },

  {
    // North Valleys
    slug: 'north-valleys',
    name: 'North Valleys',
    fullName: 'North Valleys, Nevada',
    tagline: 'Serving Lemmon Valley and Cold Springs',
    driveTime: '12 min',
    distance: '8 miles',
    direction: 'north',
    featured: false,

    meta: {
      title: 'Paramedical Tattoo Services in North Valleys, NV | Revivelle Ink',
      description: 'Professional paramedical tattoo services serving North Valleys residents. Stretch mark camouflage, scar camouflage tattoo, and inkless revision. Just 12 minutes from our Sparks studio. Licensed & insured. Book your free consultation.',
      keywords: 'paramedical tattoo North Valleys NV, stretch mark camouflage North Valleys, scar camouflage North Valleys, inkless revision North Valleys, Revivelle Ink North Valleys',
    },

    hero: {
      title: 'Paramedical Tattoo Services in North Valleys, NV',
      subtitle: 'Professional stretch mark and scar camouflage serving North Valleys residents. Just 12 minutes from our Sparks studio.',
    },

    intro: {
      tagline: 'Serving Your Community',
      heading: 'Professional Paramedical Tattoo Services for North Valleys Residents',
      description: 'Revivelle Ink is a boutique, appointment-only paramedical tattoo studio located in Sparks, Nevada, serving clients throughout the North Valleys and greater Washoe County area. Many North Valleys residents visit our Sparks studio for specialized care focused on stretch mark camouflage, scar camouflage tattoo, and inkless revision — all performed in a calm, private environment.',
    },

    // Services Offered (with backlinks to service pages)
    servicesOffered: [
      {
        name: 'Stretch Mark Camouflage',
        slug: 'stretch-mark-camouflage',
        description: 'Custom pigment-matching tattoo that blends healed stretch marks into your natural skin tone.',
      },
      {
        name: 'Scar Camouflage & Revision',
        slug: 'scar-camouflage',
        description: 'Specialized paramedical tattooing to reduce the appearance of surgical and injury scars.',
      },
      {
        name: 'Inkless Stretch Mark Revision',
        slug: 'inkless-revision',
        description: 'Natural, pigment-free treatment that improves texture and tone at every stage.',
      },
    ],

    benefits: [
      'Just 12–15 minutes from North Valleys',
      'Easy access via US-395 and Vista Boulevard',
      'Private, appointment-only studio',
      'Free consultations available by phone or in-person',
      'Flexible scheduling for North Valleys residents',
      'Same professional services and pricing as our Sparks location',
      'Licensed, insured, and Washoe County compliant',
    ],

    process: [
      {
        step: '01',
        title: 'Easy to Find',
        description: 'From North Valleys communities such as Lemmon Valley or Golden Valley, take US-395 South toward Sparks, then connect to Vista Boulevard. Follow local roads to Green Vista Drive, where our studio is located in a professional building designed for privacy and easy access.',
      },
      {
        step: '02',
        title: 'Plan Your Visit',
        description: 'Most North Valleys residents can expect a 12–20 minute drive, depending on neighborhood and traffic. Parking is available near the studio. Late morning and early afternoon appointments often provide the easiest travel conditions.',
      },
      {
        step: '03',
        title: 'Your Appointment',
        description: 'Appointments are scheduled intentionally to provide one-on-one care in a calm, unrushed environment. You\'ll be welcomed into a peaceful studio focused on precision, restoration, and comfort.',
      },
      {
        step: '04',
        title: 'Follow-Up Care',
        description: 'If your treatment plan includes multiple sessions, follow-up appointments are scheduled with commute time and healing timelines in mind. Aftercare support is provided directly from our Sparks studio.',
      },
    ],

    pricing: {
      display: '$250 per section',
      details: [
        'Starting at $250 per treatment area',
        'Pricing is the same for all clients, regardless of location',
        'Most clients need 1–3 sessions for best results',
        'Free initial consultation (phone or in-person)',
        'Flexible scheduling for North Valleys residents',
      ],
      cta: 'All services are performed at our Sparks studio with transparent pricing discussed during consultation.',
    },

    idealFor: {
      heading: 'Why Choose Revivelle Ink from North Valleys?',
      intro: 'Residents of the North Valleys choose Revivelle Ink because:',
      criteria: [
        'It\'s the closest specialized paramedical tattoo studio for stretch marks and scars',
        'No need to travel to Reno, California, or Las Vegas for advanced care',
        'Familiarity with Northern Nevada\'s dry climate and skin considerations',
        'Licensed, insured, and professionally trained care',
        'Custom treatments designed for all skin tones',
        'Appointment-only scheduling that respects your time and commute',
      ],
      note: 'Many North Valleys clients value having access to high-level, compassionate care just a short drive away.',
    },

    commonAreas: [
      'Lemmon Valley',
      'Golden Valley',
      'Stead',
      'Cold Springs',
      'North Hills Estates',
    ],

    faqs: [
      {
        question: 'Do you serve North Valleys residents?',
        answer: 'Yes. Many clients visit us from North Valleys for paramedical tattoo services.',
      },
      {
        question: 'How do I get to your studio from North Valleys?',
        answer: 'Most clients take US-395 South toward Sparks, then connect to Vista Boulevard.',
      },
      {
        question: 'How long does it take to drive from North Valleys to your studio?',
        answer: 'Typically 12–20 minutes, depending on neighborhood and traffic.',
      },
      {
        question: 'Do North Valleys residents receive the same services and pricing?',
        answer: 'Yes. All clients receive the same professional care and pricing.',
      },
      {
        question: 'Is parking available near your studio?',
        answer: 'Yes. Parking is available near the studio building.',
      },
    ],

    relatedLocations: ['spanish-springs', 'sun-valley'],
  },

  {
    // Carson City
    slug: 'carson-city',
    name: 'Carson City',
    fullName: 'Carson City, Nevada',
    tagline: "Nevada's capital, worth the drive",
    driveTime: '30 min',
    distance: '28 miles',
    direction: 'south',
    featured: false,

    meta: {
      title: 'Paramedical Tattoo Services in Carson City, NV | Revivelle Ink',
      description: 'Professional paramedical tattoo services serving Carson City residents. Stretch mark camouflage, scar camouflage tattoo, and inkless revision. Approximately 30 minutes from our Sparks studio. Licensed & insured. Book your free consultation.',
      keywords: 'paramedical tattoo Carson City NV, stretch mark camouflage Carson City, scar camouflage Carson City, inkless revision Carson City, Revivelle Ink Carson City',
    },

    hero: {
      title: 'Paramedical Tattoo Services in Carson City, NV',
      subtitle: 'Professional stretch mark and scar camouflage serving Carson City residents. Approximately 30 minutes from our Sparks studio.',
    },

    intro: {
      tagline: 'Serving Your Community',
      heading: 'Professional Paramedical Tattoo Services for Carson City Residents',
      description: 'Revivelle Ink is a boutique, appointment-only paramedical tattoo studio located in Sparks, Nevada, serving clients throughout Carson City and Northern Nevada. Many Carson City residents make the short drive to Sparks for specialized care focused on stretch mark camouflage, scar camouflage tattoo, and inkless revision — services that are not widely available locally.',
    },

    // Services Offered (with backlinks to service pages)
    servicesOffered: [
      {
        name: 'Stretch Mark Camouflage',
        slug: 'stretch-mark-camouflage',
        description: 'Custom pigment-matching tattoo that blends healed stretch marks into your natural skin tone.',
      },
      {
        name: 'Scar Camouflage & Revision',
        slug: 'scar-camouflage',
        description: 'Specialized paramedical tattooing to reduce the appearance of surgical and injury scars.',
      },
      {
        name: 'Inkless Stretch Mark Revision',
        slug: 'inkless-revision',
        description: 'Natural, pigment-free treatment that improves texture and tone at every stage.',
      },
    ],

    benefits: [
      'Approximately 30 minutes from Carson City',
      'Easy access via US-395 North',
      'Private, appointment-only studio',
      'Free consultations available by phone or in-person',
      'Flexible scheduling to accommodate longer commutes',
      'Same professional services and pricing as our Sparks location',
      'Licensed, insured, and Washoe County compliant',
    ],

    process: [
      {
        step: '01',
        title: 'Easy to Find',
        description: 'From Carson City, take US-395 North toward Reno/Sparks. Continue through South Reno, then connect to I-580 North or surface roads toward Vista Boulevard. Follow local directions to Green Vista Drive, where our studio is located in a quiet professional building.',
      },
      {
        step: '02',
        title: 'Plan Your Visit',
        description: 'Most Carson City residents can expect a 30–35 minute drive, depending on traffic and time of day. Morning appointments are often ideal for smoother travel. Parking is available near the studio.',
      },
      {
        step: '03',
        title: 'Your Appointment',
        description: 'Appointments are scheduled in advance to ensure one-on-one care in a calm, unrushed environment. Many Carson City clients choose to plan longer appointment windows and follow-ups together.',
      },
      {
        step: '04',
        title: 'Follow-Up Care',
        description: 'If multiple sessions are recommended, follow-ups are scheduled with travel and healing timelines in mind. Aftercare support is provided directly from our Sparks studio between visits.',
      },
    ],

    pricing: {
      display: '$250 per section',
      details: [
        'Starting at $250 per treatment area',
        'Pricing is the same for all clients, regardless of location',
        'Most clients need 1–3 sessions for best results',
        'Free initial consultation (phone or in-person)',
        'Flexible scheduling for Carson City residents',
      ],
      cta: 'All services are performed at our Sparks studio, with transparent pricing discussed during consultation.',
    },

    idealFor: {
      heading: 'Why Choose Revivelle Ink from Carson City?',
      intro: 'Residents of Carson City choose Revivelle Ink because:',
      criteria: [
        'It\'s the closest specialized paramedical tattoo studio for stretch marks and scars',
        'No need to travel to California or Las Vegas for advanced skin camouflage',
        'A focused practice dedicated specifically to scars and stretch marks',
        'Licensed, insured, and professionally trained care',
        'Custom treatments designed for all skin tones',
        'Appointment-only scheduling that respects longer travel time',
      ],
      note: 'Many Carson City clients feel the drive is worthwhile for care that prioritizes quality, privacy, and realistic results.',
    },

    commonAreas: [
      'Downtown Carson City',
      'North Carson City',
      'South Carson City',
      'Indian Hills',
      'Clear Creek',
      'Jacks Valley',
    ],

    faqs: [
      {
        question: 'Do you serve Carson City residents?',
        answer: 'Yes. Many clients visit us from Carson City for paramedical tattoo services.',
      },
      {
        question: 'How do I get to your studio from Carson City?',
        answer: 'Most clients take US-395 North toward Sparks.',
      },
      {
        question: 'How long does it take to drive from Carson City to your studio?',
        answer: 'Typically 30–35 minutes, depending on traffic.',
      },
      {
        question: 'Do Carson City residents receive the same services and pricing?',
        answer: 'Yes. All clients receive the same professional care and pricing.',
      },
      {
        question: 'Is parking available near your studio?',
        answer: 'Yes. Parking is available near the studio building.',
      },
    ],

    relatedLocations: ['south-reno', 'reno'],
  },

  {
    // Fernley
    slug: 'fernley',
    name: 'Fernley',
    fullName: 'Fernley, Nevada',
    tagline: 'Easy access from the east',
    driveTime: '25 min',
    distance: '30 miles',
    direction: 'east',
    featured: false,

    meta: {
      title: 'Paramedical Tattoo Services in Fernley, NV | Revivelle Ink',
      description: 'Professional paramedical tattoo services serving Fernley residents. Stretch mark camouflage, scar camouflage tattoo, and inkless revision. Approximately 25 minutes from our Sparks studio. Licensed & insured. Book your free consultation.',
      keywords: 'paramedical tattoo Fernley NV, stretch mark camouflage Fernley, scar camouflage Fernley, inkless revision Fernley, Revivelle Ink Fernley',
    },

    hero: {
      title: 'Paramedical Tattoo Services in Fernley, NV',
      subtitle: 'Professional stretch mark and scar camouflage serving Fernley residents. Approximately 25 minutes from our Sparks studio.',
    },

    intro: {
      tagline: 'Serving Your Community',
      heading: 'Professional Paramedical Tattoo Services for Fernley Residents',
      description: 'Revivelle Ink is a boutique, appointment-only paramedical tattoo studio located in Sparks, Nevada, serving clients throughout Fernley and the greater Northern Nevada region. Many Fernley residents choose to visit our Sparks studio for specialized care focused on stretch mark camouflage, scar camouflage tattoo, and inkless revision — services that are limited or unavailable locally.',
    },

    // Services Offered (with backlinks to service pages)
    servicesOffered: [
      {
        name: 'Stretch Mark Camouflage',
        slug: 'stretch-mark-camouflage',
        description: 'Custom pigment-matching tattoo that blends healed stretch marks into your natural skin tone.',
      },
      {
        name: 'Scar Camouflage & Revision',
        slug: 'scar-camouflage',
        description: 'Specialized paramedical tattooing to reduce the appearance of surgical and injury scars.',
      },
      {
        name: 'Inkless Stretch Mark Revision',
        slug: 'inkless-revision',
        description: 'Natural, pigment-free treatment that improves texture and tone at every stage.',
      },
    ],

    benefits: [
      'Approximately 25 minutes from Fernley',
      'Easy access via I-80 West',
      'Private, appointment-only studio',
      'Free consultations available by phone or in-person',
      'Flexible scheduling to accommodate longer drives',
      'Same professional services and pricing as our Sparks location',
      'Licensed, insured, and Washoe County compliant',
    ],

    process: [
      {
        step: '01',
        title: 'Easy to Find',
        description: 'From Fernley, take I-80 West toward Sparks. Exit near Vista Boulevard, then follow local roads to Green Vista Drive. Our studio is located in a quiet professional building designed for privacy and accessibility.',
      },
      {
        step: '02',
        title: 'Plan Your Visit',
        description: 'Most Fernley residents can expect a 25–30 minute drive, depending on traffic and time of day. Morning appointments often offer smoothest travel conditions. Parking is available near the studio.',
      },
      {
        step: '03',
        title: 'Your Appointment',
        description: 'Appointments are scheduled intentionally to ensure one-on-one care in a calm, unrushed environment. Many Fernley clients plan longer appointment windows or multiple sessions in advance.',
      },
      {
        step: '04',
        title: 'Follow-Up Care',
        description: 'If your treatment plan includes multiple sessions, follow-ups are scheduled with travel time and healing timelines in mind. Ongoing aftercare support is provided directly from our Sparks studio between visits.',
      },
    ],

    pricing: {
      display: '$250 per section',
      details: [
        'Starting at $250 per treatment area',
        'Pricing is the same for all clients, regardless of location',
        'Most clients need 1–3 sessions for best results',
        'Free initial consultation (phone or in-person)',
        'Flexible scheduling for Fernley residents',
      ],
      cta: 'All services are performed at our Sparks studio, with transparent pricing discussed during consultation.',
    },

    idealFor: {
      heading: 'Why Choose Revivelle Ink from Fernley?',
      intro: 'Residents of Fernley choose Revivelle Ink because:',
      criteria: [
        'It\'s the closest specialized paramedical tattoo studio for stretch marks and scars',
        'No need to travel to Reno, California, or Las Vegas',
        'Focused practice dedicated specifically to skin restoration',
        'Licensed, insured, and professionally trained care',
        'Custom treatments designed for all skin tones',
        'Appointment-only scheduling that respects longer travel times',
      ],
      note: 'Many Fernley clients feel the drive is worthwhile for care that prioritizes quality, discretion, and realistic results.',
    },

    commonAreas: [
      'Downtown Fernley',
      'Fernley Highlands',
      'Desert Lakes',
      'Silverland Estates',
      'Cottonwood Drive area',
    ],

    faqs: [
      {
        question: 'Do you serve Fernley residents?',
        answer: 'Yes. Many clients visit us from Fernley for paramedical tattoo services.',
      },
      {
        question: 'How do I get to your studio from Fernley?',
        answer: 'Most clients take I-80 West toward Sparks.',
      },
      {
        question: 'How long does it take to drive from Fernley to your studio?',
        answer: 'Typically 25–30 minutes, depending on traffic.',
      },
      {
        question: 'Do Fernley residents receive the same services and pricing?',
        answer: 'Yes. All clients receive the same professional care and pricing.',
      },
      {
        question: 'Is parking available near your studio?',
        answer: 'Yes. Parking is available near the studio building.',
      },
    ],

    relatedLocations: ['reno', 'spanish-springs'],
  },

  {
    // Incline Village
    slug: 'incline-village',
    name: 'Incline Village',
    fullName: 'Incline Village, Nevada',
    tagline: 'Serving the Lake Tahoe area',
    driveTime: '35 min',
    distance: '32 miles',
    direction: 'southwest',
    featured: false,

    meta: {
      title: '[Location Name] Paramedical Tattoo | Stretch Mark & Scar Camouflage | Revivelle Ink',
      description: 'Professional paramedical tattoo services serving [Location]. Stretch mark camouflage, scar revision, inkless treatments. Licensed & insured. Book your free consultation.',
      keywords: 'paramedical tattoo [location], stretch mark camouflage [location], scar camouflage [location], inkless revision [location], Revivelle Ink [location]',
    },

    hero: {
      title: 'Paramedical Tattoo Services in [Location Name]',
      subtitle: 'Professional stretch mark and scar camouflage serving [location] residents. Just [X] minutes from our Sparks studio.',
    },

    intro: {
      tagline: 'Serving Your Community',
      heading: 'Professional Paramedical Tattoo Services for [Location] Residents',
      description: '[Location-specific intro paragraph]',
    },

    benefits: [
      'Just [X] minutes from [location landmark]',
      'Easy parking and accessible studio location',
      'Serving [location] and surrounding areas since [year]',
      'Free consultations available by phone or in-person',
      'Flexible scheduling to accommodate your commute',
      'All the same professional services as our Sparks location',
    ],

    process: [
      {
        step: '01',
        title: 'Easy to Find',
        description: '[Detailed directions from this location]',
      },
      {
        step: '02',
        title: 'Plan Your Visit',
        description: '[Drive time and parking info]',
      },
      {
        step: '03',
        title: 'Your Appointment',
        description: '[What to expect]',
      },
      {
        step: '04',
        title: 'Follow-Up Care',
        description: '[Follow-up information]',
      },
    ],

    pricing: {
      display: '$250 per section',
      details: [
        'Starting at $250 per treatment area',
        'Most clients need 1-3 sessions for best results',
        'Free initial consultation (phone or in-person)',
        'Flexible scheduling for [location] residents',
        'Same professional pricing regardless of location',
      ],
      cta: 'Pricing is the same for all service areas. Call for a personalized quote based on your needs.',
    },

    idealFor: {
      heading: 'Why Choose Revivelle Ink from [Location]?',
      intro: 'Residents of [location] choose Revivelle Ink because:',
      criteria: [
        '[Location-specific reason 1]',
        '[Location-specific reason 2]',
        '[Location-specific reason 3]',
        '[General reason]',
        '[General reason]',
        '[Convenience reason]',
      ],
      note: '[Optional note about serving this community]',
    },

    commonAreas: [
      '[Neighborhood 1]',
      '[Neighborhood 2]',
      '[Neighborhood 3]',
      '[Neighborhood 4]',
    ],

    faqs: [
      {
        question: 'Do you serve [location name]?',
        answer: '[Answer with details]',
      },
      {
        question: 'How do I get to your studio from [location]?',
        answer: '[Detailed directions]',
      },
      {
        question: 'How long does it take to drive from [location] to your studio?',
        answer: '[Drive time information]',
      },
      {
        question: 'Do you offer the same services to [location] residents?',
        answer: '[Confirm all services available]',
      },
      {
        question: 'Is parking available near your studio?',
        answer: '[Parking information]',
      },
      {
        question: 'Can I schedule a consultation if I live in [location]?',
        answer: '[Yes, consultation details]',
      },
      {
        question: 'What services do you offer to [location] residents?',
        answer: '[List all services]',
      },
      {
        question: 'How much does paramedical tattooing cost for [location] residents?',
        answer: '[Pricing information]',
      },
    ],

    relatedLocations: ['reno', 'south-reno'],
  },
];

// Helper function to get location by slug
export function getLocationBySlug(slug) {
  return locations.find(location => location.slug === slug);
}

// Helper function to get related locations
export function getRelatedLocations(currentSlug) {
  const currentLocation = getLocationBySlug(currentSlug);
  if (!currentLocation) return [];

  return currentLocation.relatedLocations
    .map(slug => getLocationBySlug(slug))
    .filter(Boolean);
}

// Get featured locations (for homepage or priority display)
export function getFeaturedLocations() {
  return locations.filter(location => location.featured);
}

// Get all location names for SEO
export function getAllLocationNames() {
  return locations.map(location => location.name);
}
