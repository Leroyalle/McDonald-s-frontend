'use client';

import { ProductItemWithProductWithItems, productSizes } from '@/shared/types';
import { useUnit } from 'effector-react';
import { $productItem, $productItemLoading, $selectedSize, sizeChange } from '../model';
import { useRouter } from 'next/navigation';

interface SizeSelectorProps {
  items: ProductItemWithProductWithItems[];
}

export const SizeSelector = ({ items }: SizeSelectorProps) => {
  const router = useRouter();
  const [selectedSize, productItem, setSelectedSize, productItemLoading] = useUnit([
    $selectedSize,
    $productItem,
    sizeChange,
    $productItemLoading,
  ]);

  const handleClick = (itemId: string) => {
    router.replace(`/product/${productItem?.product.id}?itemId=${itemId}`);
    setSelectedSize(itemId);
  };

  return (
    <div className="mb-6">
      <h2 className="font-medium mb-3">Выберите размер:</h2>
      <div className="grid grid-cols-3 gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className={`border rounded-lg p-3 cursor-pointer transition-colors ${
              selectedSize === item.id
                ? 'border-2 border-orange-500 bg-orange-50'
                : 'border-gray-200 hover:border-orange-500'
            } ${productItemLoading ? 'pointer-events-none opacity-80' : ''}`}
            onClick={() => handleClick(item.id)}>
            <div className="font-medium">{productSizes[item.size]}</div>
            <div className="text-sm text-gray-500">{item.weight} г</div>
            <div className="font-bold mt-2">{item.price} ₽</div>
          </div>
        ))}
      </div>
    </div>
  );
};
