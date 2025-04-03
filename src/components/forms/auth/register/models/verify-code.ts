import { requestFx } from '@/shared/api';
import { createStore, createEvent, createEffect, sample } from 'effector';
import { registerFx } from './register';
import { VerifyCodeParams, VerifyResponse } from '../types';

export const codeVerifyFx = createEffect(async (data: VerifyCodeParams) => {
  return (await requestFx({
    method: 'POST',
    path: 'auth/verify',
    data,
  })) as VerifyResponse;
});

export const codeChanged = createEvent<string>();
export const formSubmitted = createEvent();

export const $code = createStore<string>('');
export const $userId = createStore<string>('');
export const $codeVerifyLoading = createStore<boolean>(false);

$codeVerifyLoading.on(codeVerifyFx, () => true).on(codeVerifyFx.finally, () => false);
$code.on(codeChanged, (_, code) => code);

sample({
  clock: registerFx.doneData,
  fn: (data) => data.userId,
  target: $userId,
});

sample({
  clock: formSubmitted,
  source: { userId: $userId, code: $code },
  target: codeVerifyFx,
});
