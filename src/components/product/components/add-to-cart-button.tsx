import { Button } from 'antd';
import React from 'react';
import { $productItem, $productItemLoading } from '../model';
import { useUnit } from 'effector-react';
import {
  $addToCartLoading,
  $removeFromCartLoading,
  $updateQuantityLoading,
  addToCart,
  removeFromCart,
  updateQuantity,
} from '@/shared/models/cart';

interface Props {
  className?: string;
}

export const AddToCartButton: React.FC<Props> = ({ className }) => {
  const [productItem, productItemLoading] = useUnit([$productItem, $productItemLoading]);
  const [
    onAddToCart,
    addToCartLoading,
    onRemoveFromCart,
    removeFromCartLoading,
    onUpdateQuantity,
    updateQuantityLoading,
  ] = useUnit([
    addToCart,
    $addToCartLoading,
    removeFromCart,
    $removeFromCartLoading,
    updateQuantity,
    $updateQuantityLoading,
  ]);

  console.log(productItem);

  if (productItem?.isAddToCart) {
    return (
      <div className="flex items-center gap-x-4">
        <div className="flex items-center gap-x-1">
          <Button
            onClick={() => onUpdateQuantity('decrement')}
            disabled={productItem.quantity <= 1 || updateQuantityLoading || productItemLoading}>
            -
          </Button>
          <span>{productItem.quantity}</span>
          <Button
            onClick={() => onUpdateQuantity('increment')}
            disabled={updateQuantityLoading || productItemLoading}>
            +
          </Button>
        </div>
        <Button
          loading={removeFromCartLoading}
          disabled={productItemLoading}
          onClick={onRemoveFromCart}
          variant="solid"
          block
          size="large"
          className={className}
          color="geekblue">
          Удалить из корзины
        </Button>
      </div>
    );
  }

  return (
    <Button
      loading={addToCartLoading}
      disabled={productItemLoading}
      onClick={onAddToCart}
      variant="solid"
      block
      size="large"
      className={className}
      color="orange">
      Добавить в корзину
    </Button>
  );
};
