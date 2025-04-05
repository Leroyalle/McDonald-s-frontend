import { requestFx } from '@/shared/api';
import { createEffect, createEvent, createStore, sample } from 'effector';
import { MenuCategory, ProductWithItemsWithProduct } from '@/shared/types';

export interface Category {
  id: number;
  name: string;
}

export const productsFetchFx = createEffect(async (params: { category: string }) => {
  return requestFx({
    method: 'GET',
    path: 'product',
    params: {
      category: params.category,
    },
  }) as Promise<ProductWithItemsWithProduct[]>;
});

export const categoriesFetchFx = createEffect(async () => {
  return requestFx({
    method: 'GET',
    path: 'category',
  }) as Promise<MenuCategory[]>;
});

export const categoryChange = createEvent<string>();

export const productsFetch = createEvent<{ category: string }>();

export const $products = createStore<ProductWithItemsWithProduct[]>([], { sid: 'products' });
export const $categories = createStore<MenuCategory[]>([], { sid: 'categories' });
export const $category = createStore<string>('', { sid: 'category' });

$category.on(categoryChange, (_, category) => category);
$categories.on(categoriesFetchFx.doneData, (_, categories) => categories);

sample({
  clock: [productsFetch, categoryChange],
  source: { category: $category },
  target: productsFetchFx,
});

sample({
  clock: productsFetchFx.doneData,
  fn: (data) => data as ProductWithItemsWithProduct[],
  target: $products,
});
