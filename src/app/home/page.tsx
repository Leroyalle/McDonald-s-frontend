import { HomeWrapper } from '@/components';
import { productsFetch } from '@/components/home/model';
import { EffectorNext } from '@effector/next';
import { fork, allSettled, serialize } from 'effector';

export default async function Home() {
  const scope = fork();
  await allSettled(productsFetch, {
    scope,
  });
  const values = serialize(scope);
  return (
    <EffectorNext values={values}>
      <main className="container mx-auto px-4 py-6">
        <HomeWrapper />
      </main>
    </EffectorNext>
  );
}
