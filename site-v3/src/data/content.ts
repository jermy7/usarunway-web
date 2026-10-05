export const nav = [
  { href: '/what-we-do/', label: 'What we do' },
  { href: '/approach/', label: 'Our approach' },
  { href: '/industries/', label: 'Industries' },
  { href: '/leadership/', label: 'Leadership' },
];

export const method = [
  { t: 'Listen', d: 'Understand the company, technology, objectives, current position and the people behind it.' },
  { t: 'Evaluate', d: 'Assess the U.S. opportunity, barriers and commercial fit, and whether USARunway has the expertise, capabilities and network to create meaningful value.' },
  { t: 'Build', d: 'Develop the U.S. pathway: strategy, priority markets, target customers and partners, deliverables and timeline.' },
  { t: 'Prepare', d: 'Strengthen positioning, messaging, materials and leadership readiness for the U.S. market and key meetings.' },
  { t: 'Execute', d: 'Activate the strategy through targeted outreach, qualified introductions, meetings, U.S.-based representation, coordination and disciplined follow-through.' },
];

export const assess = [
  { t: 'Assess the opportunity', d: 'Understand the market, opportunity, barriers and commercial fit before committing significant resources.' },
  { t: 'Focus the investment', d: 'Prioritize the markets, customers, partners and relationships most relevant to the opportunity.' },
  { t: 'Enter prepared', d: 'Move forward with defined positioning, strategy, targets and an execution pathway.' },
];

export const partnership = [
  { t: 'We qualify before we commit', d: 'Before accepting an engagement, we determine whether our expertise, capabilities and relationships can create meaningful value.' },
  { t: 'We define the engagement', d: 'We establish the priorities, target opportunities, deliverables and timeline before significant execution begins.' },
  { t: 'We stay involved', d: 'We support preparation, representation, introductions, meetings, coordination and follow-through, not simply the initial connection.' },
];

export const pillars = [
  { t: 'Clarity', d: 'A defined understanding of the opportunity, priorities, barriers and next steps.' },
  { t: 'Access', d: 'Qualified introductions to customers, partners, institutions and decision-makers relevant to the opportunity.' },
  { t: 'Experience', d: 'An experienced U.S.-based team that can represent the opportunity and support engagement on the ground.' },
  { t: 'Accountability', d: 'Defined deliverables, timelines, follow-through and engagement.' },
];

export const industries = [
  {
    id: 'healthcare', n: '01', name: 'Healthcare & Health Technology',
    title: 'Build within the U.S. healthcare ecosystem.',
    lead: 'Helping healthcare and health-technology companies prepare, position and navigate their path into the U.S. market.',
    body: [
      "Innovation alone doesn't drive adoption. U.S. healthcare decision-makers evaluate more than the technology: clinical value, economic value, operational fit and the confidence required to support adoption.",
      'We help healthcare and health-technology companies translate innovation into a proposition that U.S. healthcare decision-makers can understand, evaluate and act on. The right introduction starts with the right preparation.',
    ],
    chips: [],
  },
  {
    id: 'defense', n: '02', name: 'Defense & National Security',
    title: 'Navigate the U.S. defense ecosystem.',
    lead: 'We help international defense and advanced-technology companies prepare, position and navigate their path into the U.S. defense market.',
    body: [
      "Technology alone doesn't drive adoption. U.S. defense stakeholders evaluate more than technical capability: mission relevance, operational readiness, security and compliance alignment, and credibility with the people expected to use it.",
      'Emerging technologies often require more than a strong technical proposition. USARunway helps companies evaluate mission relevance, identify the right pathways and stakeholders, and prepare for meaningful engagement in the United States.',
    ],
    chips: [
      { t: 'Aerospace & mission operations', d: 'Aerospace engineering, military aviation, flight operations, international deployments and advanced-technology environments.' },
      { t: 'Cybersecurity & secure environments', d: 'Secure communications, military information operations, classified environments and defense-grade technology systems.' },
    ],
  },
  {
    id: 'supply-chain', n: '03', name: 'Supply Chain & Manufacturing',
    title: 'Global industry. U.S. opportunity. Real results.',
    lead: 'USARunway helps international manufacturing and supply chain companies enter and grow in the U.S. market.',
    body: [
      'We identify the right opportunities, connect you with key customers and partners, and support successful market entry with a practical, results-driven approach.',
      'Entering the U.S. market is only the beginning. Sustainable growth depends on the right operational model, technology integration, partnerships and execution across the supply chain.',
    ],
    chips: [
      { t: 'Manufacturing', d: 'Automation, production, industrial technology.' },
      { t: 'Warehousing & distribution', d: 'Yard, dock and warehouse operations.' },
      { t: 'Logistics & transportation', d: 'Movement, visibility, coordination.' },
      { t: 'Enterprise technology', d: 'Systems, integration, operational intelligence.' },
    ],
  },
];

export type Person = { name: string; role: string; bio: string };

export const leaders: Person[] = [
  { name: 'Gus Cardenas', role: 'Founder & Chief Executive Officer', bio: "Entrepreneur and healthcare leader with extensive experience in strategic planning, organizational development and building cross-sector relationships. Gus leads USARunway's vision, growth and strategic partnerships, drawing on a long-standing network across healthcare, business, government and the Texas innovation ecosystem." },
  { name: 'Monika Sebestova Sirilova, JD, PhD', role: 'Founder & Chief Operating Officer', bio: "Attorney and business executive with experience in corporate law, real estate, M&A, operations and international business development. Monika leads USARunway's operations and client execution, transforming market-entry objectives into structured strategies, partnerships and actionable pathways for international companies entering and expanding in the United States." },
  { name: 'Ron Farris', role: 'President', bio: 'Retired U.S. Air Force Colonel and aerospace engineer with distinguished careers spanning the U.S. Air Force and NASA. His experience includes aerospace operations, mission leadership, high-altitude research programs and leading teams operating complex facilities internationally. Ron brings disciplined execution, technical expertise and extensive experience navigating government and mission-driven environments.' },
  { name: 'Roman Dano', role: 'Senior Vice President, International Development', bio: "International business executive focused on developing cross-border relationships and connecting European companies with opportunities in the United States. Roman leads USARunway's international development efforts, supporting company sourcing, strategic partnerships and the development of relationships that connect international innovation with U.S. markets." },
];

export const advisors: Person[] = [
  { name: 'Philip Sanger', role: 'Strategic Advisor, Healthcare', bio: 'Physician, entrepreneur and healthcare investor with decades of experience building and supporting innovative healthcare companies. Philip is a Managing Partner of TEXO Ventures and has founded and invested in multiple healthcare ventures, including Intercede Health and HealthSpring. Combining extensive clinical experience with healthcare entrepreneurship and venture investment, he brings deep expertise in healthcare innovation, commercialization, strategic growth, and helping emerging technologies navigate the complex U.S. healthcare market.' },
  { name: 'Phil M. Dolbow', role: 'Strategic Advisor, Defense & National Security', bio: 'Retired U.S. Army Sergeant Major and cybersecurity executive with more than 35 years of experience in IT security and systems engineering. Phil served 21 years in the U.S. Army, including leadership roles in information operations and assignments across Europe, Africa, South America and the Middle East. His career also includes work supporting government, defense and intelligence organizations, with expertise spanning cybersecurity, cloud systems, vulnerability assessment and mission-critical technology.' },
  { name: 'Osh Agabi', role: 'Strategic Advisor, Deep Technology & Innovation', bio: 'Founder and CEO of Koniku, Osh Agabi is a technology entrepreneur and pioneer in synthetic neurobiology, developing systems that combine biological intelligence with advanced computing. Through Koniku, he is advancing next-generation sensory technology designed to detect and interpret complex chemical signatures. Osh brings USARunway deep expertise in emerging technology, artificial intelligence, biotechnology, commercialization, and translating breakthrough scientific innovation into real-world applications across security, healthcare, and industry.' },
  { name: 'Zac Stamples', role: 'Strategic Advisor, Defense & National Security Technology', bio: "Former U.S. Navy officer, technology entrepreneur and defense innovation leader with more than two decades of military service. Zac previously directed the Center for Cyber Warfare Research at the Naval Postgraduate School and received the Secretary of the Navy's Innovation Catalyst Award. As Founder and CEO of Fathom5, he brings extensive expertise in cybersecurity, artificial intelligence, maritime technology, and the development of advanced technologies for defense and national-security applications." },
  { name: 'Michael ("Mick") Skinta', role: 'Strategic Advisor, Defense & Military Operations', bio: 'Retired U.S. Marine Corps Chief Warrant Officer and seasoned defense professional with extensive experience in infantry operations, scout sniper training and advanced marksmanship. Mick served as Chief Instructor of the Marine Corps Scout Sniper Course and later as a Regimental Gunner for the School of Infantry-West. His career includes developing and leading advanced training for Marines, military specialists, and federal and law-enforcement personnel, bringing USARunway deep operational expertise and firsthand understanding of the U.S. defense environment.' },
];

export const contact = {
  address: ['USARunway Inc', '6101 West Courtyard Drive, Suite 2-225', 'Austin, Texas 78730', 'United States'],
  email: 'sebest@usarunway.us',
};

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (p: string) => base + p;

export const icons = {
  assess: ['assess', 'focus', 'enter'],
  method: ['listen', 'evaluate', 'build', 'prepare', 'execute'],
  partnership: ['qualify', 'define', 'stay'],
  pillars: ['clarity', 'access', 'experience', 'accountability'],
  industries: ['healthcare', 'defense', 'supply'],
};

export const tags: Record<string, string[]> = {
  'Gus Cardenas': ['Healthcare', 'Strategic partnerships', 'Texas ecosystem'],
  'Monika Sebestova Sirilova, JD, PhD': ['Corporate law', 'M&A', 'Operations'],
  'Ron Farris': ['U.S. Air Force', 'NASA', 'Aerospace'],
  'Roman Dano': ['International development', 'Europe ↔ U.S.'],
  'Philip Sanger': ['TEXO Ventures', 'Healthcare', 'Venture'],
  'Phil M. Dolbow': ['U.S. Army', 'Cybersecurity', 'Defense'],
  'Osh Agabi': ['Koniku', 'Deep tech', 'AI'],
  'Zac Stamples': ['U.S. Navy', 'Fathom5', 'Cyber warfare'],
  'Michael ("Mick") Skinta': ['U.S. Marine Corps', 'Defense operations'],
};

export const stats = [
  { n: 3, label: 'Core sectors', sub: 'Healthcare · Defense · Supply chain' },
  { n: 5, label: 'Step method', sub: 'From listening to execution' },
  { n: 9, label: 'Senior leaders & advisors', sub: 'One integrated U.S. team' },
  { n: 1, label: 'U.S. base', sub: 'Austin, Texas' },
];

export const photo: Record<string, string> = {
  'Gus Cardenas': 'p-gus', 'Monika Sebestova Sirilova, JD, PhD': 'p-monika', 'Ron Farris': 'p-ron', 'Roman Dano': 'p-roman',
  'Philip Sanger': 'p-sanger', 'Phil M. Dolbow': 'p-dolbow', 'Osh Agabi': 'p-osh', 'Zac Stamples': 'p-zac', 'Michael ("Mick") Skinta': 'p-mick',
};
export const indImg = ['ind-health', 'ind-defense', 'ind-supply'];
export const indHero = ['health-doctors', 'soldier', 'port'];
