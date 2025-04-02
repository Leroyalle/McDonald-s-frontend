'use client';
import { MENU_CATEGORIES } from '@/constants/menu';
import { MenuCategories } from '.';
import { useUnit } from 'effector-react';
import { $category, categoryChange } from '../model';
import { ProductList } from './product-list';

export const MenuSection = () => {
  const [setCategory, category] = useUnit([categoryChange, $category]);

  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold mb-6">Наше меню</h2>
      <MenuCategories
        categories={MENU_CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <ProductList items={MENU_CATEGORIES[0].items} />
    </div>
  );
};
