'use client';
import { MenuItem, MenuCategories } from '.';
import { useMenu } from '@/hooks/use-menu';

export const MenuSection = () => {
  const { categories, selectedCategory, currentCategory, setSelectedCategory } = useMenu();

  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold mb-6">Наше меню</h2>
      <MenuCategories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentCategory?.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
