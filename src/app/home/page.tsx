import { HomeWrapper } from '@/components';
import { productsFetchFx, categoriesFetchFx } from '@/components/home/model';
import { fetchAndSerialize } from '@/shared/lib';
import { EffectorNext } from '@effector/next';

export default async function Home({ searchParams }: { searchParams: { category?: string } }) {
  const params = await searchParams;
  const productValues = await fetchAndSerialize({
    effect: productsFetchFx,
    params: { category: params.category || '' },
  });

  const categoryValues = await fetchAndSerialize({
    effect: categoriesFetchFx,
  });

  const values = {
    ...productValues,
    ...categoryValues,
    category: params.category || '',
  };

  return (
    <EffectorNext values={values}>
      <main className="container mx-auto px-4 py-6">
        <HomeWrapper />
      </main>
    </EffectorNext>
  );
}
