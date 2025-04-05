import { Empty, Typography } from 'antd';
import React from 'react';

const { Title, Text } = Typography;

export const CartEmpty: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Empty
        description={
          <div className="text-center">
            <Title level={4}>Корзина пуста</Title>
            <Text type="secondary">Добавьте что-нибудь из меню</Text>
          </div>
        }
      />
    </div>
  );
};
