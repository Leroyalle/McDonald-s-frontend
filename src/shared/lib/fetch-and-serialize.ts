import { allSettled, Effect, fork, serialize } from 'effector';

type FetchOptions<P = unknown, R = unknown, E = Error> = {
  effect: Effect<P, R, E>;
  params?: P;
};

export async function fetchAndSerialize<P, R, E>(options: FetchOptions<P, R, E>) {
  const scope = fork();

  const { effect, params } = options;
  await allSettled(effect, { scope, params });

  return serialize(scope);
}
