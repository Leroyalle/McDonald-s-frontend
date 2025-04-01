import { MenuCategory } from '@/types/menu';

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'new',
    name: 'Новинки',
    items: [
      {
        id: 'atlantic-burger',
        name: 'Атлантик Бургер',
        description: 'Сочный бургер с рыбой',
        price: 272,
        weight: '170 г',
        image: '/placeholder.svg?height=200&width=300',
        isNew: true,
        bonusMultiplier: 2,
      },
      {
        id: 'fish-sticks',
        name: 'Фиш Стикс',
        description: 'Рыбные палочки',
        price: 129,
        weight: '84 г',
        image: '/placeholder.svg?height=200&width=300',
        isNew: true,
        bonusMultiplier: 2,
      },
    ],
  },
  {
    id: 'sets',
    name: 'Сеты и пары',
    items: [],
  },
  {
    id: 'super-box',
    name: 'Супер Бокс',
    items: [],
  },
];

export const CITIES = [
  { id: 'moscow', name: 'Москва', isSelected: true },
  { id: 'obninsk', name: 'Обнинск', isSelected: false },
];
