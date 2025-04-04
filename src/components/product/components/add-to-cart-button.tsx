import { Button } from 'antd';
import React from 'react';
import { $productItem, $productItemLoading } from '../model';
import { useUnit } from 'effector-react';
import {
  $addToCartLoading,
  $removeFromCartLoading,
  addToCart,
  removeFromCart,
} from '@/shared/models/cart';

interface Props {
  className?: string;
}

export const AddToCartButton: React.FC<Props> = ({ className }) => {
  const [productItem, productItemLoading] = useUnit([$productItem, $productItemLoading]);
  const [onAddToCart, addToCartLoading, onRemoveFromCart, removeFromCartLoading] = useUnit([
    addToCart,
    $addToCartLoading,
    removeFromCart,
    $removeFromCartLoading,
  ]);

  console.log(productItem);

  if (productItem?.isAddToCart) {
    return (
      <div className="flex items-center gap-x-4">
        <div className="flex items-center gap-x-1">
          <Button>-</Button>
          <span>{productItem.quantity}</span>
          <Button>+</Button>
        </div>
        <Button
          loading={removeFromCartLoading || productItemLoading}
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
      loading={addToCartLoading || productItemLoading}
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
