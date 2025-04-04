'use client';
import { FC } from 'react';
import {
  AddToCartButton,
  Allergens,
  BackToMenu,
  Ingredients,
  NutritionInfo,
  ProductImage,
  RelatedProducts,
  SizeSelector,
} from './components';
import { useUnit } from 'effector-react';
import { $productItem } from './model';

interface Props {
  className?: string;
}

const mocksProduct = {
  id: 1,
  name: 'Биг Мак',
  description:
    'Легендарный сэндвич с двумя 100% говяжьими котлетами, специальным соусом, салатом, сыром, маринованными огурчиками и луком в булочке с кунжутом.',
  price: 199,
  image: 'https://mcdonalds.ru/system/product_custom_images/000/000/000/original/BigMac.png',
  sizes: [
    { id: 1, name: 'Стандартный', price: 199 },
    { id: 2, name: 'Большой', price: 239 },
    { id: 3, name: 'МакКомбо', price: 299 },
  ],
  nutrition: {
    calories: 503,
    proteins: 25,
    fats: 26,
    carbs: 42,
  },
  allergens: ['Глютен', 'Молоко', 'Яйца', 'Кунжут'],
  relatedProducts: [
    {
      name: 'Картофель Фри',
      weight: '90 г',
      price: 'от 99 ₽',
      image: '/placeholder.svg?height=150&width=150',
    },
    {
      name: 'Кока-Кола',
      weight: '400 мл',
      price: 'от 119 ₽',
      image: '/placeholder.svg?height=150&width=150',
    },
    {
      name: 'Соус Сырный',
      weight: '25 г',
      price: 'от 39 ₽',
      image: '/placeholder.svg?height=150&width=150',
    },
    {
      name: 'Пирожок с Вишней',
      weight: '80 г',
      price: 'от 69 ₽',
      image: '/placeholder.svg?height=150&width=150',
    },
  ],
};

export const ProductWrapper: FC<Props> = () => {
  const [product] = useUnit([$productItem]);

  if (!product) {
    return null;
  }

  return (
    <>
      <BackToMenu />

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="md:flex">
          <ProductImage src={product.image} alt={product.product.name} isNew />
          <div className="md:w-1/2 p-6">
            <h1 className="text-2xl font-bold mb-2">{product.product.name}</h1>
            <p className="text-gray-600 mb-6">{product.product.description}</p>
            <SizeSelector items={product.product.items} />
            <AddToCartButton />
          </div>
        </div>
        <NutritionInfo
          nutrition={{
            proteins: '10.5 г',
            fats: '15.2 г',
            carbs: '30.8 г',
            calories: '280 ккал',
          }}
        />
        <Ingredients />
        <Allergens allergens={mocksProduct.allergens} />
      </div>
      <RelatedProducts products={mocksProduct.relatedProducts} />
    </>
  );
};
