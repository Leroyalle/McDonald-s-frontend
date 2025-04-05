import React from 'react';
import { Button } from 'antd';
import { useUnit } from 'effector-react';
import { $updateQuantityLoadingMap, updateQuantity } from '@/shared/models/cart';

interface Props {
  itemId: string;
  quantity: number;
  disabled?: boolean;
}

export const CartQuantityControl: React.FC<Props> = ({ itemId, quantity, disabled }) => {
  const [onUpdateQuantity, updateQuantityLoadingMap] = useUnit([
    updateQuantity,
    $updateQuantityLoadingMap,
  ]);

  return (
    <div className="flex items-center gap-x-1">
      <Button
        onClick={() => onUpdateQuantity({ itemId, quantity: quantity - 1 })}
        disabled={quantity <= 1 || updateQuantityLoadingMap[itemId] || disabled}>
        -
      </Button>
      <span>{quantity}</span>
      <Button
        onClick={() => onUpdateQuantity({ itemId, quantity: quantity + 1 })}
        disabled={updateQuantityLoadingMap[itemId] || disabled}>
        +
      </Button>
    </div>
  );
};
