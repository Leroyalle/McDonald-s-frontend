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

export const addToCartFx = createEffect(
  async ({ productId, itemId }: { productId: string; itemId: string }) => {
    requestFx({
      method: 'POST',
      path: `cart`,
      data: { productId, itemId },
    });
  },
);

export const sizeChange = createEvent<string>();
export const addToCart = createEvent();

export const $product = createStore<Product | null>(null, { sid: 'product' });
export const $selectedSize = createStore<string>('', { sid: 'selectedSize' });
export const $addToCartLoading = createStore<boolean>(false);

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

sample({
  clock: addToCart,
  source: { product: $product, itemId: $selectedSize },
  filter: ({ product, itemId }) => !!product?.id && !!itemId,
  fn: ({ product, itemId }) => ({
    productId: product?.id ?? '',
    itemId,
  }),
  target: addToCartFx,
});

sample({
  clock: addToCartFx.pending,
  fn: () => {
    console.log('pending');
    return true;
  },
  target: $addToCartLoading,
});

sample({
  clock: addToCartFx.doneData,
  fn: () => {
    console.log('doneData');
    return false;
  },
  target: $addToCartLoading,
});
