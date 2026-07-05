'use client';

import React, { useRef, useState } from 'react';
import * as Icons from 'lucide-react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import type { StepData } from '@/data/packages';

interface ExperienceTimelineProps {
  steps: StepData[];
}

export default function ExperienceTimeline({ steps }: ExperienceTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const scaleY = useSpring(scrollYProgress, {
    damping: 25,
    stiffness: 100,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScrollProgress(latest);
  });

  return (
    <section className="container-custom section-padding bg-background-cream/30 font-sans">
      <div className="mb-16">
        <span className="text-[12px] sm:text-[14px] font-medium tracking-widest text-primary uppercase block mb-4">
          THE COMPLETE EXPERIENCE
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif text-primary font-semibold">
          Everything handled for you, step by step.
        </h2>
      </div>

      <div ref={containerRef} className="relative md:pl-[192px]">
        <div className="absolute left-[25px] top-[25px] bottom-[80px] sm:bottom-[100px] w-0 border-l-[3px] border-dashed border-primary-muted/20"></div>

        <motion.div
          className="absolute left-[25px] top-[25px] bottom-[80px] sm:bottom-[100px] w-0 border-l-[3px] border-dashed border-primary-accent origin-top"
          style={{ scaleY }}
        />

        {steps.map((step, index) => {
          const LucideIcon = (Icons[step.iconName] || Icons.HelpCircle) as React.ComponentType<{
            className?: string;
          }>;

          const threshold = index / (steps.length - 1 || 1);
          const isActive = scrollProgress >= threshold - 0.05;

          return (
            <div key={step.id} className="flex gap-4 md:gap-[58px] group relative">
              <div className="flex flex-col items-center shrink-0 z-10">
                <motion.div
                  animate={{
                    backgroundColor: isActive ? '#6B3F1F' : '#FFFFFF',
                    borderColor: isActive ? '#6B3F1F' : '#E8DDD0',
                    color: isActive ? '#FFFFFF' : '#362017',
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="w-[50px] h-[50px] border rounded-full flex items-center justify-center shadow-custom group-hover:scale-110 transition-transform duration-300"
                >
                  <LucideIcon className="w-5 h-5" />
                </motion.div>
              </div>

              <div className="flex flex-col gap-2 pb-12 sm:pb-16">
                <span className="text-[12px] font-medium tracking-widest text-primary-light uppercase">
                  STEP {step.id}
                </span>
                <h3 className="text-[20px] font-serif font-bold text-primary group-hover:text-primary-light transition-colors">
                  {step.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] font-normal text-primary-light max-w-[700px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

