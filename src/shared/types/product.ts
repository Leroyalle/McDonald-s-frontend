export interface Product {
  id: string;
  name: string;
  description: string;
  isNew: boolean;
  bonusMultiplier: number;
  items: ProductItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductItem {
  id: string;
  size: ProductSize;
  weight: number;
  image: string;
  price: number;
  productId: string;
  product: Product;
  createdAt: Date;
  updatedAt: Date;
}

export enum ProductSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export const productSizes = {
  [ProductSize.SMALL]: 'Маленький',
  [ProductSize.MEDIUM]: 'Средний',
  [ProductSize.LARGE]: 'Большой',
} as const;

export type ProductItemWithProduct = ProductItem & { product: Product } & CartPayload;

export type CartPayload = {
  quantity: number;
  isAddToCart: boolean;
};
