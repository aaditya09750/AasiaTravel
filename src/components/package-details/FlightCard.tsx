import React from 'react';
import { Plane } from 'lucide-react';
import type { FlightInfo } from '@/types';

export default function FlightCard({
  type,
  code,
  city,
  destCode,
  destCity,
  plane,
  date,
  time,
}: FlightInfo) {
  return (
    <div className="bg-primary-muted/10 border border-primary-soft rounded-[4px] p-6 lg:p-[26px] flex flex-col gap-4 font-sans">
      <span className="text-[10.5px] font-semibold tracking-wider text-primary uppercase">
        {type} Flight
      </span>

      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="font-serif text-2xl font-bold text-primary">{code}</span>
          <span className="text-[11.8px] font-normal text-primary-muted">{city}</span>
        </div>

        <div className="flex-1 flex items-center gap-2">
          <div className="h-[1px] flex-1 bg-primary-soft"></div>
          <Plane className="w-5 h-5 text-primary-muted rotate-90" />
          <div className="h-[1px] flex-1 bg-primary-soft"></div>
        </div>

        <div className="flex flex-col items-end">
          <span className="font-serif text-2xl font-bold text-primary">{destCode}</span>
          <span className="text-[11.8px] font-normal text-primary-muted text-right">{destCity}</span>
        </div>
      </div>

      <div className="pt-4 border-t border-primary-soft flex justify-between text-[12.5px] font-normal text-primary-muted">
        <span>Flight {plane}</span>
        <span>{date}</span>
        <span>{time}</span>
      </div>
    </div>
  );
}
