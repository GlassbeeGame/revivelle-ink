// Central data file for all location pages
// This is the single source of truth for location content
// Add new locations here - pages will auto-generate

export const locations = [
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

    relatedLocations: ['reno', 'north-valleys'],
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
