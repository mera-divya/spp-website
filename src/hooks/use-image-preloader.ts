import { useState, useEffect } from 'react';

export const useImagePreloader = (imageSrc: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    
    img.onload = () => {
      setIsLoaded(true);
      setIsLoading(false);
    };
    
    img.onerror = () => {
      setIsLoading(false);
    };
    
    img.src = imageSrc;
    
    // If image is already cached, it will load immediately
    if (img.complete) {
      setIsLoaded(true);
      setIsLoading(false);
    }
  }, [imageSrc]);

  return { isLoaded, isLoading };
};