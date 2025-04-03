'use client';

import Image from 'next/image';

interface RelatedProduct {
  name: string;
  weight: string;
  price: string;
  image: string;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
}

export const RelatedProducts = ({ products }: RelatedProductsProps) => {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-6">С этим также заказывают</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.name} className="bg-white rounded-lg overflow-hidden shadow-sm">
            <Image
              src={product.image}
              alt={product.name}
              width={150}
              height={150}
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="font-medium text-sm">{product.name}</h3>
              <div className="text-xs text-gray-500">{product.weight}</div>
              <div className="font-bold text-sm mt-1">{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
