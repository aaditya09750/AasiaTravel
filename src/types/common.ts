export interface NavLink {
  label: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface Feature {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
}
