import { EffectorNext } from '@effector/next';
import { ProductWrapper } from '@/components';
import { fetchAndSerialize } from '@/shared/lib';
import { productFetchFx } from '@/components/product/model';

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ itemId: string }>;
}) {
  const productId = (await params).id;
  const itemId = (await searchParams).itemId;

  const product = await fetchAndSerialize({
    effect: productFetchFx,
    params: {
      productId,
      itemId,
    },
  });

  return (
    <EffectorNext values={product}>
      <main className="container mx-auto px-4 py-6">
        <ProductWrapper />
      </main>
    </EffectorNext>
  );
}
