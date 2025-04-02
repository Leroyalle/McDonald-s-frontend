import { Product } from '@/shared/types';
import { ProductItem } from './product-item';

interface ProductListProps {
  items: Product[];
}

export const ProductList = ({ items }: ProductListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  );
};
