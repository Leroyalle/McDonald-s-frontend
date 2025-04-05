export type ProductWithItemsWithProduct = Product & {
  items: ProductItemWithProductWithItems[];
};

export type ProductItemWithProductWithItems = ProductItem & {
  product: ProductWithItemsWithProduct;
};

export type ProductItemWithProduct = ProductItem & {
  product: Product;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  isNew: boolean;
  bonusMultiplier: number;
  createdAt: Date;
  updatedAt: Date;
};

export type ProductItem = {
  id: string;
  size: ProductSize;
  weight: number;
  image: string;
  price: number;
  productId: string;
  createdAt: Date;
  updatedAt: Date;
};

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

export type ProductItemWithRelations = ProductItemWithProductWithItems & CartPayload;

export type CartPayload = {
  quantity: number;
  isAddToCart: boolean;
};
