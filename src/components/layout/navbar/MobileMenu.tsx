'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '@/config/site';
import { Button } from '@/components/ui';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) return;

    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.documentElement.classList.add('lenis-stopped');
    
    // 2. Pause Lenis smooth scrolling if active
    const lenisInstance = typeof window !== 'undefined' ? ((window as any).lenis as Lenis | undefined) : undefined;
    if (lenisInstance) {
      lenisInstance.stop();
    }

    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    document.addEventListener('touchmove', preventScroll, { passive: false });
    document.addEventListener('wheel', preventScroll, { passive: false });

    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.classList.remove('lenis-stopped');

      const lenisInstanceCleanup = typeof window !== 'undefined' ? ((window as any).lenis as Lenis | undefined) : undefined;
      if (lenisInstanceCleanup) {
        lenisInstanceCleanup.start();
      }
      document.removeEventListener('touchmove', preventScroll);
      document.removeEventListener('wheel', preventScroll);
    };
  }, [isOpen]);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    onClose();
    if (href === '/') {
      if (typeof window !== 'undefined' && window.location.pathname === '/') {
        e.preventDefault();
        const lenis = (window as any).lenis;
        if (lenis && typeof lenis.scrollTo === 'function') {
          setTimeout(() => {
            lenis.scrollTo(0, { offset: 0 });
          }, 50);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
      return;
    }

    if (href.startsWith('/#') || href.startsWith('#')) {
      const id = href.replace('/#', '').replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        const lenis = typeof window !== 'undefined' ? (window as any).lenis : undefined;
        if (lenis && typeof lenis.scrollTo === 'function') {
          // A tiny timeout allows the scroll unlock cleanup in useEffect to complete first
          setTimeout(() => {
            lenis.scrollTo(element, { offset: -70 });
          }, 50);
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[90] lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-xs z-10"
            onClick={onClose}
          />

          {/* Dropdown Menu Card sliding down from behind the navbar */}
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-0 w-full bg-white border-b border-primary-soft/30 shadow-2xl px-6 pt-[76px] pb-6 flex flex-col gap-5 z-20 overflow-hidden"
          >
            {/* Links */}
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className="py-4 text-[#B0895B] text-sm font-normal border-b border-primary-soft hover:text-accent-gold transition-colors block uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Footer info & CTA */}
            <div className="pt-2 flex flex-col gap-3 items-start">
              <span className="text-sm text-secondary">
                Need help?
              </span>
              <Button
                variant="primary"
                className="bg-secondary hover:bg-secondary/90 text-white text-xs tracking-widest px-8 py-3.5 rounded-[4px] transition-colors"
                onClick={onClose}
              >
                GET IN TOUCH
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

