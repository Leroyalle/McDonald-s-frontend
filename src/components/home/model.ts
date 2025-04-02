import { requestFx } from '@/shared/api';
import { createEffect, createEvent, createStore, sample } from 'effector';
import { Product } from '@/shared/types';

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

export const productsFetch = createEvent<{ category: string }>();
export const categoryChange = createEvent<string>();

export const $products = createStore<Product[]>([], { sid: 'products' });
export const $category = createStore<string>('new');

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
