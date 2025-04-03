'use client';

import Image from 'next/image';

interface ProductImageProps {
  src: string;
  alt: string;
  isNew?: boolean;
}

export const ProductImage = ({ src, alt, isNew }: ProductImageProps) => {
  return (
    <div className="md:w-1/2 relative">
      {isNew && (
        <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
          НОВИНКА
        </div>
      )}
      <Image
        src={src || '/placeholder.svg'}
        alt={alt}
        width={400}
        height={400}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};
