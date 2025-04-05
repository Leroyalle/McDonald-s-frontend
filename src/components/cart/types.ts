import { ProductItemWithProduct } from '@/shared/types';

export type Cart = {
  id: string;
  userId: string;
  items: CartItem[];
  createdAt: Date;
  updatedAt: Date;
};

export type CartItem = {
  id: string;
  productItemId: string;
  cartId: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  productItem: ProductItemWithProduct;
};

export type PaymentDto = {
  paymentUrl: string;
};
