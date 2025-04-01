import { useState } from 'react';
import { MenuCategory } from '@/types/menu';
import { MENU_CATEGORIES } from '@/constants/menu';

export const useMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(MENU_CATEGORIES[0].id);
  const [categories] = useState<MenuCategory[]>(MENU_CATEGORIES);

  const currentCategory = categories.find((cat) => cat.id === selectedCategory);

  return {
    categories,
    selectedCategory,
    currentCategory,
    setSelectedCategory,
  };
};
