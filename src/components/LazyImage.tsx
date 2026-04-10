import { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderColor?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

export function LazyImage({
  src,
  alt,
  className = '',
  placeholderColor = '#F5F1E8',
  priority = false,
  width,
  height,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px', // Start loading 200px before entering viewport
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    if (!isInView || !imgRef.current) return;

    const img = imgRef.current;

    if (img.complete) {
      setIsLoaded(true);
    } else {
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setIsLoaded(true); // Still show placeholder on error
    }
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor: placeholderColor,
        aspectRatio: width && height ? `${width} / ${height}` : undefined,
      }}
    >
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
        />
      )}

      {/* Blur placeholder */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{
          backgroundColor: placeholderColor,
          backdropFilter: 'blur(20px)',
        }}
        aria-hidden="true"
      />
    </div>
  );
}

// Optimized background image component
interface LazyBackgroundProps {
  src: string;
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  priority?: boolean;
}

export function LazyBackground({
  src,
  children,
  className = '',
  overlayClassName = '',
  priority = false,
}: LazyBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      // Preload immediately
      const img = new Image();
      img.onload = () => setIsLoaded(true);
      img.src = src;
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px',
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, src]);

  useEffect(() => {
    if (!isInView) return;

    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = src;
  }, [isInView, src]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Background Image */}
      {isInView && (
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${src})` }}
          aria-hidden="true"
        />
      )}

      {/* Overlay */}
      {overlayClassName && (
        <div className={`absolute inset-0 ${overlayClassName}`} aria-hidden="true" />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Picture element with responsive sources
interface ResponsiveImageProps {
  src: string;
  srcSet?: string;
  sources?: Array<{
    srcSet: string;
    media?: string;
    type?: string;
  }>;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

export function ResponsiveImage({
  src,
  srcSet,
  sources = [],
  alt,
  className = '',
  priority = false,
  width,
  height,
}: ResponsiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px',
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {isInView && (
        <picture>
          {sources.map((source, index) => (
            <source
              key={index}
              srcSet={source.srcSet}
              media={source.media}
              type={source.type}
            />
          ))}
          <img
            src={src}
            srcSet={srcSet}
            alt={alt}
            width={width}
            height={height}
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            onLoad={() => setIsLoaded(true)}
          />
        </picture>
      )}
    </div>
  );
}
