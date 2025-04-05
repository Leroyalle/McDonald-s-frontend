'use client';
import React, { useEffect } from 'react';
import { Typography } from 'antd';
import { useUnit } from 'effector-react';
import { $cart, $cartInitialFetching, cartFetch } from './model';
import { $removeFromCartLoadingMap, removeFromCart } from '@/shared/models/cart';
import { CartEmpty } from './components/cart-empty';
import { CartItemsList } from './components/cart-items-list';
import { CartSummary } from './components/cart-summary';

const { Title } = Typography;

export const CartWrapper: React.FC = () => {
  const [cart, cartInitialFetching, cartGet] = useUnit([$cart, $cartInitialFetching, cartFetch]);
  const [onRemoveFromCart, removeFromCartLoadingMap] = useUnit([
    removeFromCart,
    $removeFromCartLoadingMap,
  ]);

  useEffect(() => {
    cartGet();
  }, []);

  const totalPrice =
    cart?.items.reduce((acc, item) => acc + item.productItem.price * item.quantity, 0) || 0;

  if (cartInitialFetching) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Title level={2}>Загрузка...</Title>
      </div>
    );
  }

  if (!cart || !cart.items.length) {
    return <CartEmpty />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Title level={2}>Корзина</Title>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CartItemsList
            items={cart.items}
            onRemoveFromCart={onRemoveFromCart}
            removeFromCartLoadingMap={removeFromCartLoadingMap}
          />
        </div>
        <div className="lg:col-span-1">
          <CartSummary totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};
