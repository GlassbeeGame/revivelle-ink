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
      title: '[Location Name] Paramedical Tattoo | Stretch Mark & Scar Camouflage | Revivelle Ink',
      description: 'Professional paramedical tattoo services serving [Location]. Stretch mark camouflage, scar revision, inkless treatments. Licensed & insured. Book your free consultation.',
      keywords: 'paramedical tattoo [location], stretch mark camouflage [location], scar camouflage [location], inkless revision [location], Revivelle Ink [location]',
    },

    // Hero Section
    hero: {
      title: 'Paramedical Tattoo Services in [Location Name]',
      subtitle: 'Professional stretch mark and scar camouflage serving [location] residents. Just [X] minutes from our Sparks studio.',
    },

    // Introduction Section
    intro: {
      tagline: 'Serving Your Community',
      heading: 'Professional Paramedical Tattoo Services for [Location] Residents',
      description: '[Location-specific intro paragraph. Mention proximity to studio, why this area is served, any location-specific details like "convenient for [neighborhood] residents" or "easy access from [major road/landmark]"]',
    },

    // Benefits for this location
    benefits: [
      'Just [X] minutes from [location landmark]',
      'Easy parking and accessible studio location',
      'Serving [location] and surrounding areas since [year]',
      'Free consultations available by phone or in-person',
      'Flexible scheduling to accommodate your commute',
      'All the same professional services as our Sparks location',
    ],

    // Directions & What to Expect
    process: [
      {
        step: '01',
        title: 'Easy to Find',
        description: '[Detailed directions from this location to the studio. Mention major roads, landmarks, highways. Example: "From downtown Reno, take I-80 east to Exit 18..."]',
      },
      {
        step: '02',
        title: 'Plan Your Visit',
        description: '[Information about drive time, parking availability, traffic considerations. Example: "Allow 10-15 minutes for your drive, plus time for parking. Morning appointments typically have lighter traffic."]',
      },
      {
        step: '03',
        title: 'Your Appointment',
        description: '[What to expect during the appointment. This can be similar across all locations but with location-specific touches if relevant.]',
      },
      {
        step: '04',
        title: 'Follow-Up Care',
        description: '[Information about follow-up appointments, scheduling for multiple sessions, aftercare support.]',
      },
    ],

    // Pricing (same as services)
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

    // Who from this area should come
    idealFor: {
      heading: 'Why Choose Revivelle Ink from [Location]?',
      intro: 'Residents of [location] choose Revivelle Ink because:',
      criteria: [
        '[Location-specific reason 1 - e.g., "Closest certified paramedical tattoo specialist"]',
        '[Location-specific reason 2 - e.g., "No need to drive to California or Las Vegas"]',
        '[Location-specific reason 3 - e.g., "Familiar with local climate and skin care needs"]',
        '[General reason - e.g., "Licensed, insured, and experienced professional"]',
        '[General reason - e.g., "Custom treatments for all skin tones"]',
        '[Convenience reason - e.g., "Flexible scheduling to work with your commute"]',
      ],
      note: '[Optional note about serving this community, local partnerships, or commitment to the area.]',
    },

    // Neighborhoods/areas within this location
    commonAreas: [
      '[Neighborhood 1]',
      '[Neighborhood 2]',
      '[Neighborhood 3]',
      '[Neighborhood 4]',
      '[Landmark area]',
      '[District]',
    ],

    // Location-specific FAQs
    faqs: [
      {
        question: 'Do you serve [location name]?',
        answer: '[Answer explaining yes, how close the studio is, drive time, and any location-specific details]',
      },
      {
        question: 'How do I get to your studio from [location]?',
        answer: '[Detailed directions from this location to the studio, mentioning major roads and landmarks]',
      },
      {
        question: 'How long does it take to drive from [location] to your studio?',
        answer: '[Drive time information, traffic considerations, best times to travel]',
      },
      {
        question: 'Do you offer the same services to [location] residents?',
        answer: '[Confirm that all services are available regardless of location, same quality, same pricing]',
      },
      {
        question: 'Is parking available near your studio?',
        answer: '[Information about parking, accessibility, and what to expect when arriving]',
      },
      {
        question: 'Can I schedule a consultation if I live in [location]?',
        answer: '[Yes, explain consultation options - phone or in-person, free of charge, how to book]',
      },
      {
        question: 'What services do you offer to [location] residents?',
        answer: '[List all services: stretch mark camouflage, inkless revision, scar camouflage, with brief descriptions]',
      },
      {
        question: 'How much does paramedical tattooing cost for [location] residents?',
        answer: '[Same pricing as all areas, starting at $250, mention free consultation for personalized quote]',
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
