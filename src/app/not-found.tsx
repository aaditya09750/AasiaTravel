import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 font-sans">
      <h2 className="text-4xl font-serif font-bold text-primary mb-4">Page Not Found</h2>
      <p className="text-primary-light mb-8 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/">
        <Button variant="primary">Go back Home</Button>
      </Link>
    </div>
  );
}
