import React from 'react';

interface AtAGlanceProps {
  duration: string;
  dates: string;
  departureCity: string;
  seatsLeft: number;
}

export default function AtAGlance({
  duration,
  dates,
  departureCity,
  seatsLeft,
}: AtAGlanceProps) {
  return (
    <section className="border-y border-primary-soft/30 py-16 bg-white font-sans">
      <div className="container-custom">
        <span className="text-[16px] font-semibold tracking-widest text-primary uppercase block mb-6">
          AT A GLANCE
        </span>
        <div className="grid md:grid-cols-3 border border-primary-soft rounded-[4px] overflow-hidden">
          <div className="p-8 border-b md:border-b-0 md:border-r border-primary-soft hover:bg-background-cream/20 transition-colors group">
            <span className="text-[10px] font-medium tracking-wider text-primary-light uppercase mb-3 block">
              Departure Duration
            </span>
            <h4 className="font-serif text-[18px] font-bold text-primary group-hover:text-primary-light transition-colors">
              {duration}
            </h4>
            <p className="text-[12px] font-normal text-primary-light mt-1">{dates}</p>
          </div>
          <div className="p-8 border-b md:border-b-0 md:border-r border-primary-soft hover:bg-background-cream/20 transition-colors group">
            <span className="text-[10px] font-medium tracking-wider text-primary-light uppercase mb-3 block">
              Departure City
            </span>
            <h4 className="font-serif text-[18px] font-bold text-primary group-hover:text-primary-light transition-colors">
              Departs {departureCity}
            </h4>
            <p className="text-[12px] font-normal text-primary-light mt-1">Round-trip origin</p>
          </div>
          <div className="p-8 hover:bg-background-cream/20 transition-colors group">
            <span className="text-[10px] font-medium tracking-wider text-primary-light uppercase mb-3 block">
              Group Size
            </span>
            <h4 className="font-serif text-[18px] font-bold text-primary group-hover:text-primary-light transition-colors">
              {seatsLeft} seats left
            </h4>
            <p className="text-[12px] font-normal text-primary-light mt-1">
              Confirm early to secure a spot
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
