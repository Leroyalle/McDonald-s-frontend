import { HomeWrapper } from '@/components';
import { productsFetchFx } from '@/components/home/model';
import { fetchAndSerialize } from '@/shared/lib';
import { EffectorNext } from '@effector/next';

export default async function Home() {
  const values = await fetchAndSerialize({
    effect: productsFetchFx,
    params: { category: 'new' },
  });

  return (
    <EffectorNext values={values}>
      <main className="container mx-auto px-4 py-6">
        <HomeWrapper />
      </main>
    </EffectorNext>
  );
}
