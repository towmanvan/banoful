import { ReactNode } from 'react';
import { useLazyLoad } from '@/hooks/useLazyLoad';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  fallback?: ReactNode;
  rootMargin?: string;
  threshold?: number;
}

export function LazySection({
  children,
  className = '',
  fallback,
  rootMargin = '100px',
  threshold = 0.01,
}: LazySectionProps) {
  const [ref, isIntersecting] = useLazyLoad({
    rootMargin,
    threshold,
    triggerOnce: true,
  });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {isIntersecting ? children : fallback || <SectionPlaceholder />}
    </div>
  );
}

// Default placeholder component
function SectionPlaceholder() {
  return (
    <div className="min-h-[400px] flex items-center justify-center bg-banoful-ivory">
      <div className="relative">
        <div className="w-12 h-12 border-3 border-banoful-ivory border-t-banoful-gold rounded-full animate-spin" />
      </div>
    </div>
  );
}

// Skeleton loader for cards
export function CardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-banoful-ivory rounded-lg h-64 mb-4" />
      <div className="h-4 bg-banoful-ivory rounded w-3/4 mb-2" />
      <div className="h-4 bg-banoful-ivory rounded w-1/2" />
    </div>
  );
}

// Grid skeleton
interface GridSkeletonProps {
  count?: number;
}

export function GridSkeleton({ count = 3 }: GridSkeletonProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
