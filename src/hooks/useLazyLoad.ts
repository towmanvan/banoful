import { useEffect, useRef, useState, RefObject } from 'react';

interface UseLazyLoadOptions {
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

export function useLazyLoad(
  options: UseLazyLoadOptions = {}
): [RefObject<HTMLElement | null>, boolean] {
  const {
    rootMargin = '100px',
    threshold = 0.01,
    triggerOnce = true,
  } = options;

  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If already triggered and triggerOnce is true, don't observe
    if (hasTriggered && triggerOnce) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce) {
            setHasTriggered(true);
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsIntersecting(false);
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold, triggerOnce, hasTriggered]);

  return [ref, isIntersecting];
}

// Hook for preloading images
export function useImagePreload(src: string, priority: boolean = false) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Event | null>(null);

  useEffect(() => {
    if (!src || !priority) return;

    const img = new Image();
    
    const onLoad = () => setIsLoaded(true);
    const onError = (e: Event) => setError(e);

    img.addEventListener('load', onLoad);
    img.addEventListener('error', onError);
    
    img.src = src;

    // If already cached
    if (img.complete) {
      setIsLoaded(true);
    }

    return () => {
      img.removeEventListener('load', onLoad);
      img.removeEventListener('error', onError);
    };
  }, [src, priority]);

  return { isLoaded, error };
}

// Hook for scroll-based animations
export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      
      const progress = height > 0 ? winScroll / height : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, scrollProgress };
}

// Hook for intersection with element
export function useIntersection(
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverInit = {}
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
}
