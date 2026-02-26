export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  href?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price?: string;
  image: string;
  category: string;
  featured?: boolean;
  impact?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image?: string;
  location?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Partner {
  name: string;
  logo: string;
  url?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  slug: string;
}

export interface SDGGoal {
  number: number;
  title: string;
  description: string;
  color: string;
}

export interface ContactInfo {
  factory: {
    address: string;
    city: string;
    coordinates: { lat: number; lng: number };
  };
  trainingCentre: {
    address: string;
    city: string;
    coordinates: { lat: number; lng: number };
  };
  email: string;
  phone: string;
  contactPerson: {
    name: string;
    email: string;
  };
  social: {
    linkedin: string;
    facebook: string;
    youtube: string;
  };
}

export interface Program {
  title: string;
  description: string;
  image?: string;
  target?: string;
}
