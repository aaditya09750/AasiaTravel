'use client';

import React from 'react';
import Link from 'next/link';
import { navLinks } from '@/config/site';
import { Button } from '@/components/ui';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-8 px-4 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-primary text-lg font-medium tracking-widest"
          onClick={onClose}
        >
          {link.label}
        </Link>
      ))}
      <Button variant="primary" className="bg-secondary w-full" onClick={onClose}>
        GET IN TOUCH
      </Button>
    </div>
  );
}
