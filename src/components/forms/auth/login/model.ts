import { requestFx } from '@/shared/api';
import { createEffect, createEvent, createStore, sample } from 'effector';
import { not } from 'patronum';
import { LoginParams, LoginResponse } from './types';
import { setCookie } from '@/app/actions';

export const loginFx = createEffect(async (data: LoginParams) => {
  const res = (await requestFx({
    method: 'POST',
    path: 'auth/login',
    data,
  })) as LoginResponse;

  await setCookie('token', res.token);

  return res;
});

export const emailChanged = createEvent<string>();
export const passwordChanged = createEvent<string>();
export const formSubmitted = createEvent();

export const $email = createStore<string>('');
export const $password = createStore<string>('');
export const $loginLoading = createStore<boolean>(false);
export const $loginError = createStore<string | null>(null);

$email.on(emailChanged, (_, email) => email);
$password.on(passwordChanged, (_, password) => password);
$loginLoading.on(loginFx, () => true).on(loginFx.finally, () => false);

$loginError.reset(emailChanged, passwordChanged);

sample({
  clock: formSubmitted,
  source: { email: $email, password: $password },
  filter: not($loginLoading),
  target: loginFx,
});
