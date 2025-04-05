import { List } from 'antd';
import React from 'react';
import { CartItem } from './cart-item';
import { CartItem as TCartItem } from '../types';

interface Props {
  items: TCartItem[];
  onRemoveFromCart: (params: { itemId: string }) => void;
  removeFromCartLoadingMap: Record<string, boolean>;
}

export const CartItemsList: React.FC<Props> = ({
  items,
  onRemoveFromCart,
  removeFromCartLoadingMap,
}) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={items}
      renderItem={(item) => (
        <CartItem
          item={item}
          onRemove={(itemId) => onRemoveFromCart({ itemId })}
          removeLoading={removeFromCartLoadingMap[item.productItem.id]}
        />
      )}
    />
  );
};
