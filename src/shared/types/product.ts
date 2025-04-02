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
  weight: string;
  image: string;
  price: number;
  quantity: number;
  productId: string;
  product: Product;
  createdAt: Date;
  updatedAt: Date;
}
