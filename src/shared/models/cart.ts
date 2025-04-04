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

export const updateQuantityFx = createEffect(
  async ({ itemId, quantity }: { itemId: string; quantity: number }) => {
    return await requestFx({
      method: 'PATCH',
      path: `cart/quantity`,
      data: { productItemId: itemId, quantity },
    });
  },
);

export const addToCart = createEvent();
export const removeFromCart = createEvent();
export const updateQuantity = createEvent<'increment' | 'decrement'>();

export const $addToCartLoading = createStore<boolean>(false);
export const $removeFromCartLoading = createStore<boolean>(false);
export const $updateQuantityLoading = createStore<boolean>(false);

$addToCartLoading.on(addToCartFx, () => true).on(addToCartFx.finally, () => false);
$removeFromCartLoading.on(removeFromCartFx, () => true).on(removeFromCartFx.finally, () => false);
$updateQuantityLoading.on(updateQuantityFx, () => true).on(updateQuantityFx.finally, () => false);
