import { createEffect, createEvent, createStore, sample } from 'effector';
import { Cart, PaymentDto } from './types';
import { requestFx, redirectFx } from '@/shared/api';
import { addToCartFx, removeFromCartFx, updateQuantityFx } from '@/shared/models/cart';

export const cartFetchFx = createEffect(async () => {
  return (await requestFx({
    method: 'GET',
    path: 'cart',
  })) as Cart;
});

export const orderCreateFx = createEffect(async () => {
  return (await requestFx({
    method: 'POST',
    path: 'order',
  })) as PaymentDto;
});

export const cartFetch = createEvent();
export const orderCreate = createEvent();

export const $cart = createStore<Cart | null>(null);
export const $cartLoading = createStore<boolean>(false);
export const $cartInitialFetching = createStore<boolean>(false);
export const $cartIsInitialized = createStore<boolean>(false);

$cart.on(cartFetchFx.doneData, (_, cart) => cart);
$cartLoading.on(cartFetchFx, () => true).on(cartFetchFx.finally, () => false);

sample({
  clock: cartFetchFx,
  filter: $cartIsInitialized.map((cartIsInitialized) => !cartIsInitialized),
  fn: () => true,
  target: $cartInitialFetching,
});
sample({
  clock: cartFetchFx.doneData,
  fn: () => true,
  target: $cartIsInitialized,
});

sample({
  clock: cartFetchFx.finally,
  fn: () => false,
  target: $cartInitialFetching,
});

sample({
  clock: cartFetch,
  target: cartFetchFx,
});

sample({
  clock: [addToCartFx.doneData, removeFromCartFx.doneData, updateQuantityFx.doneData],
  target: cartFetch,
});

sample({
  clock: orderCreate,
  target: orderCreateFx,
});

sample({
  clock: orderCreateFx.doneData,
  fn: (paymentDto) => paymentDto.paymentUrl,
  target: redirectFx,
});
