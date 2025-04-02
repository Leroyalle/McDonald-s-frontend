import { ChevronDown } from 'lucide-react';
import { MenuCategory } from '@/shared/types/menu';

interface MenuCategoriesProps {
  categories: MenuCategory[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const MenuCategories = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: MenuCategoriesProps) => {
  return (
    <div className="flex overflow-x-auto py-2 -mx-4 px-4 mb-6 scrollbar-hide">
      <div className="flex space-x-4 min-w-max">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`rounded-full px-4 py-2 text-sm ${
              selectedCategory === category.id
                ? 'bg-gray-100 font-medium'
                : 'bg-white text-gray-600'
            }`}>
            {category.name}
          </button>
        ))}
        <button className="bg-white rounded-full px-4 py-2 text-sm text-gray-600 flex items-center">
          Ещё <ChevronDown className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  );
};
