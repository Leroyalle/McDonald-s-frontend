import Image from 'next/image';
import { MenuItem as MenuItemType } from '@/types/menu';

interface MenuItemProps {
  item: MenuItemType;
}

export const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="relative">
        {item.isNew && (
          <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
            НОВИНКА
          </div>
        )}
        {item.bonusMultiplier && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white rounded-full p-2">
            <div className="text-xs font-bold">x{item.bonusMultiplier}</div>
            <div className="text-[10px]">БОНУСОВ</div>
          </div>
        )}
        <Image
          src={item.image}
          alt={item.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium mb-4">{item.name}</h3>
        <div className="text-sm text-gray-500">{item.weight}</div>
        <div className="font-bold mt-1">от {item.price} ₽</div>
      </div>
    </div>
  );
};
