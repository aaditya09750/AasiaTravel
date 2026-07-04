import type { NavLink } from '@/types';

export const siteConfig = {
  name: 'Aasia Travel',
  description:
    'Trusted Hajj & Umrah specialists. Thoughtfully guided pilgrimages for those who seek more than just a trip — a transformation.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aasiatravel.com',
  ogImage: '/images/hero.png',
  logo: '/images/logo.png',
  contact: {
    email: 'aasiatravel@gmail.com',
    phone: '+91 8800665701',
    address: 'New Delhi',
  },
  social: {
    facebook: '#',
    instagram: '#',
    youtube: '#',
  },
};

export const navLinks: NavLink[] = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/#about' },
  { label: 'PACKAGES', href: '/#packages' },
  { label: 'REVIEWS', href: '/#reviews' },
];
