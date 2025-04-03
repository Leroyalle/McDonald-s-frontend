import { requestFx } from '@/shared/api';
import { Product } from '@/shared/types';
import { createEffect, createEvent, createStore, sample } from 'effector';

export const productFetchFx = createEffect(
  async (id: string) =>
    requestFx({
      method: 'GET',
      path: `product/${id}`,
    }) as Promise<Product>,
);
export const sizeChange = createEvent<string>();

export const $product = createStore<Product | null>(null, { sid: 'product' });

export const $selectedSize = createStore<string>('', { sid: 'selectedSize' });

sample({
  clock: productFetchFx.doneData,
  fn: (product) => product.items[0]?.id ?? '',
  target: $selectedSize,
});

sample({
  clock: sizeChange,
  target: $selectedSize,
});

sample({
  clock: productFetchFx.doneData,
  target: $product,
});
