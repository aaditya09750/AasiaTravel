'use client';

import React, { useState, useEffect } from 'react';
import { heroTimeWidgetConfig } from '@/data/home';
import { cn } from '@/lib/utils';

interface TimeWidgetProps {
  className?: string;
}

export default function TimeWidget({ className }: TimeWidgetProps) {
  const [makkahTime, setMakkahTime] = useState(heroTimeWidgetConfig.fallbackTime);
  const [makkahDate, setMakkahDate] = useState(heroTimeWidgetConfig.fallbackDate);

  useEffect(() => {
    const updateMakkahTime = () => {
      const now = new Date();

      try {
        const timeFormatter = new Intl.DateTimeFormat('en-US', {
          timeZone: heroTimeWidgetConfig.timeZone,
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });

        const timeStr = timeFormatter.format(now).toLowerCase();
        setMakkahTime(timeStr);

        const hijriFormatter = new Intl.DateTimeFormat('en-US-u-ca-islamic-umalqura', {
          timeZone: heroTimeWidgetConfig.timeZone,
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        });

        const hijriStr = hijriFormatter.format(now);

        const dayMatch = hijriStr.match(/\b\d{1,2}\b/);
        const yearMatch = hijriStr.match(/\b\d{4}\b/);

        const months = [
          'Muharram',
          'Safar',
          "Rabi' al-Awwal",
          "Rabi' al-Thani",
          'Jumada al-Awwal',
          'Jumada al-Thani',
          'Rajab',
          "Sha'ban",
          'Ramadan',
          'Shawwal',
          'Dhu al-Qadah',
          'Dhu al-Hijjah',
        ];

        let monthName = 'Muharram';
        for (const m of months) {
          if (
            hijriStr.includes(m) ||
            hijriStr.toLowerCase().includes(m.toLowerCase().replace("'", ''))
          ) {
            monthName = m;
            break;
          }
        }

        if (dayMatch && yearMatch) {
          const dayNum = parseInt(dayMatch[0]);
          const yearNum = yearMatch[0];

          let suffix = 'th';
          if (dayNum % 10 === 1 && dayNum !== 11) suffix = 'st';
          else if (dayNum % 10 === 2 && dayNum !== 12) suffix = 'nd';
          else if (dayNum % 10 === 3 && dayNum !== 13) suffix = 'rd';

          setMakkahDate(`${dayNum}${suffix} ${monthName}, ${yearNum} AH`);
        } else {
          setMakkahDate(hijriStr.includes('AH') ? hijriStr : `${hijriStr} AH`);
        }
      } catch {
        setMakkahTime(heroTimeWidgetConfig.fallbackTime);
        setMakkahDate(heroTimeWidgetConfig.fallbackDate);
      }
    };

    updateMakkahTime();
    const interval = setInterval(updateMakkahTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        'bg-background-warm/90 backdrop-blur-sm border border-primary-soft p-3.5 sm:p-4 rounded-4px inline-block',
        className
      )}
    >
      <p className="text-[10px] tracking-[0.2em] font-bold text-primary-light mb-1 font-sans">
        {heroTimeWidgetConfig.label}
      </p>
      <p className="font-serif text-xl sm:text-2xl font-bold mb-1 tracking-widest text-primary">
        {makkahTime}
      </p>
      <p className="text-[10px] tracking-[0.2em] font-semibold text-primary-light font-sans">
        {makkahDate}
      </p>
    </div>
  );
}
