import { createEffect, createEvent, createStore, sample } from 'effector';
import { User } from '../types';
import { requestFx } from '../api';

export const userGetFx = createEffect(async () => {
  return (await requestFx({
    method: 'GET',
    path: 'user/profile',
  })) as User;
});

export const userGet = createEvent();

export const $user = createStore<User | null>(null);
export const $userPending = createStore<boolean>(true);
export const $userError = createStore<boolean>(false);

$userPending.on(userGetFx, () => true).on(userGetFx.finally, () => false);
$userError.on(userGetFx.failData, () => true).on(userGetFx.doneData, () => false);

sample({
  clock: userGet,
  target: userGetFx,
});

sample({
  clock: userGetFx.doneData,
  target: $user,
});
