import { requestFx } from '@/shared/api';
import { createEffect, createEvent, createStore, sample } from 'effector';

export interface Product {
  id: number;
  name: string;
  price: number;
}

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
  });
});

export const productsFetch = createEvent();
export const categoryChange = createEvent<string>();

export const $products = createStore<Product[]>([], { sid: 'products' });
export const $category = createStore<string>('');

$category.on(categoryChange, (_, category) => category);

sample({
  clock: [productsFetch, categoryChange],
  source: { category: $category },
  target: productsFetchFx,
});

sample({
  clock: productsFetchFx.doneData,
  fn: (data) => data as Product[],
  target: $products,
});
