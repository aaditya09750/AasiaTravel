import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'danger' | 'success' | 'warning' | 'info';
}

export default function Badge({ children, className, variant = 'info' }: BadgeProps) {
  const variants = {
    danger: 'bg-[#CC3B3B] text-white border-[#B32121]',
    success: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-amber-100 text-amber-800 border-amber-200',
    info: 'bg-primary-light/10 text-primary-light border-primary-light/20',
  };

  return (
    <span
      className={cn(
        'px-2 py-1 text-[10px] font-light uppercase tracking-widest border rounded-sm',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
