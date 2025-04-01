export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: string;
  image: string;
  isNew?: boolean;
  bonusMultiplier?: number;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface City {
  id: string;
  name: string;
  isSelected: boolean;
}
