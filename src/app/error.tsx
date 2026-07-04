'use client';

import React, { useEffect } from 'react';
import { Button } from '@/components/ui';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 font-sans">
      <h2 className="text-3xl font-serif font-bold text-primary mb-4">Something went wrong!</h2>
      <p className="text-primary-light mb-8 max-w-md">
        An error occurred during rendering. Please retry or go back to the homepage.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()} variant="primary">
          Try Again
        </Button>
        <Button onClick={() => (window.location.href = '/')} variant="outline">
          Go Home
        </Button>
      </div>
    </div>
  );
}
