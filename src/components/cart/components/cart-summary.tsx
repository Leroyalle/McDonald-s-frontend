import { Button, Card, Divider, Typography } from 'antd';
import { useUnit } from 'effector-react';
import React from 'react';
import { $cartLoading, orderCreate } from '../model';

const { Title, Text } = Typography;

interface Props {
  totalPrice: number;
}

export const CartSummary: React.FC<Props> = ({ totalPrice }) => {
  const [cartLoading, onOrderCreate] = useUnit([$cartLoading, orderCreate]);

  return (
    <Card className="sticky top-4">
      <Title level={4}>Итого заказа</Title>
      <Divider />
      <div className="space-y-4">
        <div className="flex justify-between">
          <Text>Сумма заказа:</Text>
          <Text strong>{totalPrice} ₽</Text>
        </div>
        <div className="flex justify-between">
          <Text>Доставка:</Text>
          <Text strong>Бесплатно</Text>
        </div>
        <Divider />
        <div className="flex justify-between">
          <Title level={5}>Итого к оплате:</Title>
          <Title level={5}>{totalPrice} ₽</Title>
        </div>
        <Button
          variant="solid"
          size="large"
          color="orange"
          block
          disabled={cartLoading}
          onClick={onOrderCreate}>
          Оформить заказ
        </Button>
      </div>
    </Card>
  );
};
