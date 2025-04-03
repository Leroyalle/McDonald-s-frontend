import { EffectorNext } from '@effector/next';
import { ProductWrapper } from '@/components';
import { fetchAndSerialize } from '@/shared/lib';
import { productFetchFx } from '@/components/product/model';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  const product = await fetchAndSerialize({
    effect: productFetchFx,
    params: id,
  });

  return (
    <EffectorNext values={product}>
      <main className="container mx-auto px-4 py-6">
        <ProductWrapper />
      </main>
    </EffectorNext>
  );
}
