'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui';

interface PriceCalculatorProps {
  basePrice: number;
  sharingPrices: Record<string, number>;
  addonPrices: Record<string, number>;
}

export default function PriceCalculator({
  basePrice,
  sharingPrices,
  addonPrices,
}: PriceCalculatorProps) {
  const [travellers, setTravellers] = useState(1);
  const [sharing, setSharing] = useState('Quad');
  const [addons, setAddons] = useState<string[]>([]);

  const sharingAdjustment = sharingPrices[sharing] || 0;
  const addonsTotal = addons.reduce((sum, addon) => sum + (addonPrices[addon] || 0), 0);
  const totalPerPerson = basePrice + sharingAdjustment + addonsTotal;
  const grandTotal = totalPerPerson * travellers;

  const toggleAddon = (addon: string) => {
    setAddons((prev) =>
      prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]
    );
  };

  return (
    <div className="bg-white border border-primary-soft rounded-[4px] p-6 lg:p-9 flex flex-col lg:flex-row gap-8 lg:gap-[60px] font-sans">
      {/* Filters */}
      <div className="flex-1 space-y-8">
        <div>
          <label className="text-[12px] font-semibold tracking-wide text-primary-muted uppercase mb-3 block">
            Number of Travellers
          </label>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTravellers(Math.max(1, travellers - 1))}
              className="w-[34px] h-[34px] rounded-full border border-primary-soft bg-background-warm flex items-center justify-center text-lg font-bold text-primary hover:bg-primary-soft transition-colors cursor-pointer"
            >
              −
            </button>
            <span className="font-serif text-lg font-bold min-w-[20px] text-center text-primary">
              {travellers}
            </span>
            <button
              onClick={() => setTravellers(travellers + 1)}
              className="w-[34px] h-[34px] rounded-full border border-primary-soft bg-background-warm flex items-center justify-center text-lg font-bold text-primary hover:bg-primary-soft transition-colors cursor-pointer"
            >
              +
            </button>
          </div>
        </div>

        <div>
          <label className="text-[12px] font-semibold tracking-wide text-primary-muted uppercase mb-3 block">
            Room Sharing
          </label>
          <div className="flex flex-wrap gap-3">
            {Object.keys(sharingPrices).map((label) => {
              const isActive = sharing === label;
              return (
                <button
                  key={label}
                  onClick={() => setSharing(label)}
                  className={`px-4 py-2 rounded-full border text-[12px] font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-primary-light text-white border-primary-light'
                      : 'bg-background-warm text-primary border-primary-soft hover:border-primary-muted'
                  }`}
                >
                  {label} Sharing
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="text-[11.2px] font-semibold tracking-wide text-primary-muted uppercase mb-3 block">
            Add-ons
          </label>
          <div className="flex flex-wrap gap-3">
            {Object.keys(addonPrices).map((addon) => {
              const isActive = addons.includes(addon);
              return (
                <button
                  key={addon}
                  onClick={() => toggleAddon(addon)}
                  className={`px-4 py-2 rounded-full border text-[12px] font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-primary-light text-white border-primary-light'
                      : 'bg-background-warm text-primary border-primary-soft hover:border-primary-muted'
                  }`}
                >
                  {addon}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Summary Card */}
      <div className="lg:w-[458px] bg-background-dark rounded-[4px] p-8 text-white flex flex-col justify-between shadow-lg">
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center text-[14px] font-light">
            <span className="text-primary-soft/80">Base price / person</span>
            <span className="text-background-cream font-semibold">Rs {basePrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center text-[14px] font-light">
            <span className="text-primary-soft/80">Room sharing adjustment</span>
            <span className="text-background-cream font-semibold">+{sharingAdjustment.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center text-[14px] font-light">
            <span className="text-primary-soft/80">Add-ons</span>
            <span className="text-background-cream font-semibold">Rs {addonsTotal.toLocaleString()} / person</span>
          </div>
          <div className="flex justify-between items-center text-[14px] font-light">
            <span className="text-primary-soft/80">Travellers</span>
            <span className="text-background-cream font-semibold">{travellers}</span>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10">
          <div className="flex justify-between items-end mb-6">
            <span className="text-[14px] font-medium tracking-wide text-primary-soft uppercase">
              Estimated Total
            </span>
            <span className="font-serif text-[30px] font-bold text-background-cream leading-none">
              Rs {grandTotal.toLocaleString()}
            </span>
          </div>
          <Button variant="dark" fullWidth className="bg-primary hover:bg-primary-light">
            BOOK ON WHATSAPP
          </Button>
        </div>
      </div>
    </div>
  );
}
