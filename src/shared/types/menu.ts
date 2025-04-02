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
  createdAt: Date;
  updatedAt: Date;
}

export interface City {
  id: string;
  name: string;
  isSelected: boolean;
}
