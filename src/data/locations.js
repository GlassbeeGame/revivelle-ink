// Central data file for all location pages
// Add new locations here - cards will auto-generate on locations page

export const locations = [
  {
    slug: 'reno',
    name: 'Reno',
    fullName: 'Reno, Nevada',
    tagline: 'Just minutes from our Sparks studio',
    driveTime: '5 min',
    distance: '2.5 miles',
    direction: 'west',
    featured: true, // Primary service area
  },
  {
    slug: 'spanish-springs',
    name: 'Spanish Springs',
    fullName: 'Spanish Springs, Nevada',
    tagline: 'Serving the northern community',
    driveTime: '10 min',
    distance: '7 miles',
    direction: 'north',
    featured: true,
  },
  {
    slug: 'sun-valley',
    name: 'Sun Valley',
    fullName: 'Sun Valley, Nevada',
    tagline: 'Easy access from the northwest',
    driveTime: '15 min',
    distance: '9 miles',
    direction: 'northwest',
    featured: false,
  },
  {
    slug: 'south-reno',
    name: 'South Reno',
    fullName: 'South Reno, Nevada',
    tagline: 'Convenient for south Reno residents',
    driveTime: '10 min',
    distance: '6 miles',
    direction: 'southwest',
    featured: true,
  },
  {
    slug: 'north-valleys',
    name: 'North Valleys',
    fullName: 'North Valleys, Nevada',
    tagline: 'Serving Lemmon Valley and Cold Springs',
    driveTime: '12 min',
    distance: '8 miles',
    direction: 'north',
    featured: false,
  },
  {
    slug: 'carson-city',
    name: 'Carson City',
    fullName: 'Carson City, Nevada',
    tagline: "Nevada's capital, worth the drive",
    driveTime: '30 min',
    distance: '28 miles',
    direction: 'south',
    featured: false,
  },
  {
    slug: 'fernley',
    name: 'Fernley',
    fullName: 'Fernley, Nevada',
    tagline: 'Easy access from the east',
    driveTime: '25 min',
    distance: '30 miles',
    direction: 'east',
    featured: false,
  },
  {
    slug: 'incline-village',
    name: 'Incline Village',
    fullName: 'Incline Village, Nevada',
    tagline: 'Serving the Lake Tahoe area',
    driveTime: '35 min',
    distance: '32 miles',
    direction: 'southwest',
    featured: false,
  },
];

// Helper function to get location by slug
export function getLocationBySlug(slug) {
  return locations.find(location => location.slug === slug);
}

// Get featured locations (for homepage or priority display)
export function getFeaturedLocations() {
  return locations.filter(location => location.featured);
}

// Get all location names for SEO
export function getAllLocationNames() {
  return locations.map(location => location.name);
}
