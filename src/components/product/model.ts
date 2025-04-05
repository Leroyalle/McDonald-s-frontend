import { requestFx } from '@/shared/api';
import { addToCartFx, removeFromCartFx, updateQuantityFx } from '@/shared/models/cart';
import { ProductItemWithRelations } from '@/shared/types';
import { createEffect, createEvent, createStore, sample } from 'effector';

export const productFetchFx = createEffect(
  async ({ productId, itemId }: { productId: string; itemId: string }) => {
    return (await requestFx({
      method: 'GET',
      path: `product-item/${productId}`,
      params: { itemId },
    })) as Promise<ProductItemWithRelations>;
  },
);

export const sizeChange = createEvent<string>();

export const $productItem = createStore<ProductItemWithRelations | null>(null, { sid: 'product' });
export const $productItemLoading = createStore<boolean>(false, { sid: 'productLoading' });
export const $selectedSize = createStore<string>('', { sid: 'selectedSize' });

$productItemLoading.on(productFetchFx, () => true).on(productFetchFx.finally, () => false);

sample({
  clock: productFetchFx.doneData,
  fn: (product) => product.id,
  target: $selectedSize,
});

sample({
  clock: sizeChange,
  target: $selectedSize,
});

sample({
  clock: productFetchFx.doneData,
  target: $productItem,
});

sample({
  clock: $selectedSize.updates,
  source: { productItem: $productItem, selectedSize: $selectedSize },
  fn: ({ productItem, selectedSize }) => {
    return {
      productId: productItem?.product.id ?? '',
      itemId: selectedSize,
    };
  },
  target: productFetchFx,
});

sample({
  clock: [addToCartFx.doneData, removeFromCartFx.doneData, updateQuantityFx.doneData],
  source: { productItem: $productItem, selectedSize: $selectedSize },
  filter: ({ productItem, selectedSize }) => !!productItem?.product.id && !!selectedSize,
  fn: ({ productItem, selectedSize }) => ({
    productId: productItem?.product.id ?? '',
    itemId: selectedSize,
  }),
  target: productFetchFx,
});
