import { allSettled, Effect, fork, serialize } from 'effector';

type FetchOptions<P, R, E> = {
  effect: Effect<P, R, E>;
  params?: P;
};

export async function fetchAndSerialize<P, R, E>(options: FetchOptions<P, R, E>) {
  const { effect, params } = options;
  const scope = fork();
  await allSettled(effect, { scope, params });
  const values = serialize(scope);
  return values;
}
