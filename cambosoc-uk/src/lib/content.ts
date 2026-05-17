export const ASSOCIATION = {
  name: 'CSA UK',
  fullName: "Cambodian Students' Association UK",
  founded: '2019',
  memberCount: '120+',
  eventCount: '18',
  universityCount: '6',
  email: 'hello@cambosoc.org.uk',
  instagram: '@cambosocuk',
  instagramUrl: 'https://instagram.com/cambosocuk',
  tagline: 'A home for Cambodian students across Britain.',
  membershipPrice: '£5',
};

export type Event = {
  id: string;
  featured: boolean;
  day: string;
  month: string;
  year: string;
  name: string;
  category: 'Cultural' | 'Social' | 'Career';
  venue: string;
  time: string;
  description: string;
};

export const EVENTS: Event[] = [
  {
    id: '1',
    featured: true,
    day: '21', month: 'May', year: '2026',
    name: 'Khmer New Year Gala Night',
    category: 'Cultural',
    venue: 'Imperial College London',
    time: '7:00 PM · Formal dress',
    description: 'Our flagship annual event celebrating the Khmer New Year. An evening of traditional music, Cambodian cuisine, and community. All members and guests welcome.',
  },
  {
    id: '2',
    featured: false,
    day: '28', month: 'May', year: '2026',
    name: 'Career Panel: Finance & Consulting',
    category: 'Career',
    venue: 'Online (Zoom)',
    time: '6:30 PM · Open to all',
    description: 'Hear from Cambodian professionals working in finance and consulting across the UK. Q&A session included.',
  },
  {
    id: '3',
    featured: false,
    day: '7', month: 'Jun', year: '2026',
    name: 'Freshers Welcome Mixer',
    category: 'Social',
    venue: 'University of Bristol',
    time: 'TBC · Free entry',
    description: 'A relaxed evening for new and returning students to meet, share food, and get to know the society.',
  },
];

export const VALUES = [
  { num: '01', title: 'Community & belonging', desc: 'Creating genuine connections and a sense of home for every Cambodian student in the UK.' },
  { num: '02', title: 'Cultural pride & heritage', desc: 'Celebrating Khmer culture, language, and traditions — from Bon Om Touk to Pchum Ben.' },
  { num: '03', title: 'Academic empowerment', desc: 'Sharing knowledge, mentorship, and opportunities to help each other succeed.' },
  { num: '04', title: 'Mutual support', desc: 'Looking out for one another — especially during the transition to life in the UK.' },
];

export const TEAM = [
  { initials: 'SP', name: 'Sophea Prak', role: 'President' },
  { initials: 'RC', name: 'Ratana Chan', role: 'Vice President' },
  { initials: 'BM', name: 'Bopha Men', role: 'Events Officer' },
  { initials: 'KS', name: 'Kosal Sok', role: 'Outreach Officer' },
];

export const ABOUT_PARAGRAPHS = [
  "The Cambodian Students' Association UK was founded in 2019 by a small group of students who wanted to create a genuine sense of home for Cambodian students studying across Britain.",
  "Today we span six universities — from Bristol and London to Edinburgh — bringing together students from all backgrounds and disciplines who share Khmer heritage and a desire to stay connected to their culture.",
  "Whether you were born in Cambodia, grew up in the UK, or are the child of Cambodian parents — you belong here.",
];
