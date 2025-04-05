import { createEffect, createEvent, createStore, sample } from 'effector';
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

export const addToCart = createEvent<{ productId: string; itemId: string }>();
export const removeFromCart = createEvent<{ itemId: string }>();
export const updateQuantity = createEvent<{ itemId: string; quantity: number }>();

export const $addToCartLoading = createStore<boolean>(false);
export const $removeFromCartLoadingMap = createStore<Record<string, boolean>>({});
export const $updateQuantityLoading = createStore<boolean>(false);
export const $updateQuantityLoadingMap = createStore<Record<string, boolean>>({});

$addToCartLoading.on(addToCartFx, () => true).on(addToCartFx.finally, () => false);
$removeFromCartLoadingMap
  .on(removeFromCartFx, (state, { itemId }) => ({
    ...state,
    [itemId]: true,
  }))
  .on(removeFromCartFx.finally, (state, { params }) => ({
    ...state,
    [params.itemId]: false,
  }));
$updateQuantityLoadingMap
  .on(updateQuantityFx, (state, { itemId }) => ({
    ...state,
    [itemId]: true,
  }))
  .on(updateQuantityFx.finally, (state, { params }) => ({
    ...state,
    [params.itemId]: false,
  }));

$updateQuantityLoading.on(updateQuantityFx, () => true).on(updateQuantityFx.finally, () => false);

sample({
  clock: addToCart,
  target: addToCartFx,
});

sample({
  clock: removeFromCart,
  target: removeFromCartFx,
});

sample({
  clock: updateQuantity,
  target: updateQuantityFx,
});
