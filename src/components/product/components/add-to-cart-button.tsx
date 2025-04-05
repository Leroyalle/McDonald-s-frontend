import { Button } from 'antd';
import React from 'react';
import { $productItem, $productItemLoading } from '../model';
import { useUnit } from 'effector-react';
import {
  $addToCartLoading,
  $removeFromCartLoadingMap,
  addToCart,
  removeFromCart,
} from '@/shared/models/cart';
import { CartQuantityControl } from '@/components/cart-quantity-control';

interface Props {
  className?: string;
}

export const AddToCartButton: React.FC<Props> = ({ className }) => {
  const [productItem, productItemLoading] = useUnit([$productItem, $productItemLoading]);
  const [onAddToCart, addToCartLoading, onRemoveFromCart, removeFromCartLoadingMap] = useUnit([
    addToCart,
    $addToCartLoading,
    removeFromCart,
    $removeFromCartLoadingMap,
  ]);

  if (!productItem) {
    return null;
  }

  if (productItem?.isAddToCart) {
    return (
      <div className="flex items-center gap-x-4">
        <CartQuantityControl
          itemId={productItem.id}
          quantity={productItem.quantity}
          disabled={productItemLoading}
        />
        <Button
          loading={removeFromCartLoadingMap[productItem.id]}
          disabled={productItemLoading}
          onClick={() => onRemoveFromCart({ itemId: productItem.id })}
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
      onClick={() => onAddToCart({ productId: productItem.product.id, itemId: productItem.id })}
      variant="solid"
      block
      size="large"
      className={className}
      color="orange">
      Добавить в корзину
    </Button>
  );
};
