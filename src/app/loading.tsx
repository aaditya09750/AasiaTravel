import React from 'react';
import { Skeleton } from '@/components/ui';

export default function Loading() {
  return (
    <div className="container-custom py-20 space-y-8 font-sans">
      <Skeleton className="h-12 w-1/3" />
      <Skeleton className="h-64 w-full" />
      <div className="grid md:grid-cols-3 gap-6">
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-40 w-full" />
      </div>
    </div>
  );
}
