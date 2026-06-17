export const services = [
  'Residential Interior Design',
  'Commercial Interior Design',
  'Office Interior Design',
  'Studio Design',
  'Renovation & Remodeling',
  'Space Planning',
  'Furniture & Lighting Design',
  '3D Visualization'
];

export const skills = [
  'AutoCAD',
  'SketchUp',
  'V-Ray',
  'Lumion',
  'Revit',
  '3ds Max',
  'Photoshop',
  'Space Planning',
  'Material Selection',
  'Lighting Design',
  'BOQ',
  'Site Coordination',
  'Client Presentation'
];

export const processSteps = [
  'Consultation',
  'Concept Design',
  'Space Planning',
  '3D Visualization',
  'Material Selection',
  'Execution Support',
  'Final Styling'
];

export const testimonials = [
  {
    quote:
      'The experience felt more like commissioning a private design house than hiring a contractor. Every decision had clarity, taste, and intent.',
    name: 'Aarav Mehta',
    role: 'Founder, Fintech Advisory'
  },
  {
    quote:
      'The studio translated our brand into space with extraordinary restraint and detail. The result feels calm, premium, and unmistakably ours.',
    name: 'Nina Kapoor',
    role: 'Managing Partner, Consulting Firm'
  },
  {
    quote:
      'What stood out most was the balance of beauty and practicality. The project now works hard every day and still feels editorial.',
    name: 'Daniel Rego',
    role: 'Property Owner'
  }
];

export type ProjectImage = {
  src: string;
  alt: string;
};

export type FeaturedProject = {
  title: string;
  type: string;
  concept: string;
  challenge: string;
  solution: string;
  heroImage: ProjectImage;
  beforeImage: ProjectImage;
  afterImage: ProjectImage;
  gallery: ProjectImage[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'Photography & Podcast Studio',
    type: 'Creative production environment',
    concept: 'A warm, acoustically controlled studio with editorial lighting and layered textures.',
    challenge: 'The space had to support both visual recording and audio quality without feeling technical.',
    solution:
      'We combined soft wall treatments, concealed acoustic panels, sculptural lighting, and modular furniture to keep the room versatile and camera-ready.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1531860995303-e732ee6bdb1f?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600',
      alt: 'Podcast studio desk with microphone and recording equipment in a modern interior'
    },
    beforeImage: {
      src: 'https://images.unsplash.com/photo-1531860898813-8cecde84646c?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600',
      alt: 'Creative studio corner with microphone stand and studio accessories'
    },
    afterImage: {
      src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600',
      alt: 'Professional podcast and audio recording setup inside a dark modern studio'
    },
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1544816737-a8ec7d1e7658?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600',
        alt: 'Studio microphone and mixing setup with warm interior lighting'
      },
      {
        src: 'https://unsplash.com/photos/ZDNyhmgkZlQ/download?force=true',
        alt: 'Microphone and podcast recording station in a professional studio interior'
      },
      {
        src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600',
        alt: 'Creative workspace with audio gear and minimal studio styling'
      },
      {
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600',
        alt: 'Modern desk setup with monitors and studio-style equipment in a dark room'
      }
    ]
  },
  {
    title: 'Tax Consulting & Auditing Firm Interior',
    type: 'Professional office interior',
    concept: 'A refined, trust-forward workspace with strong circulation and executive privacy.',
    challenge: 'The brief required a space that felt authoritative for clients while staying efficient for staff.',
    solution:
      'We used a disciplined palette, bespoke storage, private meeting zones, and a reception sequence that communicates credibility from the first step in.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600',
      alt: 'Modern office reception interior with clean lines and premium materials'
    },
    beforeImage: {
      src: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600',
      alt: 'Corporate workspace with warm lighting and organized desks'
    },
    afterImage: {
      src: 'https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600',
      alt: 'Executive office meeting room with polished furniture and glass details'
    },
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600',
        alt: 'Modern meeting room with executive chairs and neutral finishes'
      },
      {
        src: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600',
        alt: 'Corporate open-plan office interior with clean desks and daylight'
      },
      {
        src: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600',
        alt: 'Minimal reception area inside a contemporary office interior'
      },
      {
        src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600',
        alt: 'Professional office conference room with modern lighting and wood accents'
      }
    ]
  },
  {
    title: 'Bungalow Interior Renovation',
    type: 'Residential transformation',
    concept: 'A layered home interior balancing heritage character with contemporary comfort.',
    challenge: 'The renovation needed to modernize the home without flattening its identity.',
    solution:
      'We preserved architectural cues, introduced richer material transitions, improved daylight flow, and created generous bespoke millwork throughout the home.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1603111691889-364c9fc6d066?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600',
      alt: 'Luxury bungalow living room with staircase and warm residential styling'
    },
    beforeImage: {
      src: 'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600',
      alt: 'Spacious luxury living room interior with sofa seating and ambient light'
    },
    afterImage: {
      src: 'https://images.unsplash.com/photo-1613545325268-9265e1609167?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600',
      alt: 'Renovated living room interior with premium finishes and soft natural lighting'
    },
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1600210492097-0b40b8b0f6b5?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600',
        alt: 'Bungalow bedroom interior with layered textiles and warm evening light'
      },
      {
        src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600',
        alt: 'Luxury dining area inside a renovated bungalow with elegant wood tones'
      },
      {
        src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600',
        alt: 'Stylish staircase and landing in a high-end residential interior'
      },
      {
        src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5e7f3f?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600',
        alt: 'Renovated lounge area in a bungalow with warm neutral decor'
      }
    ]
  }
];
