'use client';

import { MenuCategories } from '.';
import { useUnit } from 'effector-react';
import { $categories, $category, $products, categoryChange } from '../../model';
import { ProductList } from './product-list';
import { useSearchCategoryParams } from '../../hooks';

export const MenuSection = () => {
  useSearchCategoryParams();
  const [categories, category, products, setCategory] = useUnit([
    $categories,
    $category,
    $products,
    categoryChange,
  ]);

  console.log(category);
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold mb-6">Наше меню</h2>
      <MenuCategories
        categories={categories}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <ProductList items={products} />
    </div>
  );
};
