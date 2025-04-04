import { createEffect, createEvent, createStore } from 'effector';
import { requestFx } from '../api';

export const addToCartFx = createEffect(
  async ({ productId, itemId }: { productId: string; itemId: string }) => {
    return await requestFx({
      method: 'POST',
      path: `cart`,
      data: { productId, itemId },
    });
  },
);

export const removeFromCartFx = createEffect(async ({ itemId }: { itemId: string }) => {
  return await requestFx({
    method: 'DELETE',
    path: `cart`,
    data: { productItemId: itemId },
  });
});

export const addToCart = createEvent();
export const removeFromCart = createEvent();

export const $addToCartLoading = createStore<boolean>(false);
export const $removeFromCartLoading = createStore<boolean>(false);

$addToCartLoading.on(addToCartFx, () => true).on(addToCartFx.finally, () => false);
$removeFromCartLoading.on(removeFromCartFx, () => true).on(removeFromCartFx.finally, () => false);
