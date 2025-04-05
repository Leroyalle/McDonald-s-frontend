import { Button, Card, Space, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CartQuantityControl } from '../../cart-quantity-control';
import { CartItem as TCartItem } from '../types';
import { productSizes } from '@/shared/types';

const { Title, Text } = Typography;

interface Props {
  item: TCartItem;
  onRemove: (itemId: string) => void;
  removeLoading?: boolean;
}

export const CartItem: React.FC<Props> = ({ item, onRemove, removeLoading }) => {
  return (
    <Card className="mb-4">
      <div className="flex items-center gap-6">
        <Link
          href={`/product/${item.productItem.product.id}`}
          className="w-24 h-24 relative flex-shrink-0">
          <Image
            src={item.productItem.image}
            alt={item.productItem.product.name}
            fill
            className="object-cover rounded-md"
          />
        </Link>
        <div className="flex-grow">
          <Title level={5}>{item.productItem.product.name}</Title>
          <div className="flex gap-2 items-center">
            <Text type="secondary">{item.productItem.product.description}</Text>
            <Text type="secondary">•</Text>
            <Text type="secondary">{productSizes[item.productItem.size]}</Text>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <Space>
              <CartQuantityControl itemId={item.productItem.id} quantity={item.quantity} />
              <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
                loading={removeLoading}
                onClick={() => onRemove(item.productItem.id)}>
                Удалить
              </Button>
            </Space>
            <Text strong>{item.productItem.price} ₽</Text>
          </div>
        </div>
      </div>
    </Card>
  );
};
