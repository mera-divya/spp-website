import { ReactNode } from 'react';
import { useImagePreloader } from '@/hooks/use-image-preloader';

interface HeroSectionProps {
  backgroundImage: string;
  altText: string;
  children: ReactNode;
}

export const HeroSection = ({ backgroundImage, altText, children }: HeroSectionProps) => {
  const { isLoaded } = useImagePreloader(backgroundImage);

  return (
    <section className="relative hero-gradient text-primary-foreground overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className={`w-full h-full transition-opacity duration-1000 ${
            isLoaded ? 'opacity-20' : 'opacity-0'
          }`}
        >
          <img 
            src={backgroundImage}
            alt={altText}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        {/* Fallback gradient background while loading */}
        <div 
          className={`absolute inset-0 hero-gradient transition-opacity duration-1000 ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        {children}
      </div>
    </section>
  );
};