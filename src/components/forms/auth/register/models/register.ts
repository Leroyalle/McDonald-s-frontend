import { requestFx } from '@/shared/api';
import { createEffect, createEvent, createStore, sample } from 'effector';
import { not } from 'patronum';
import { RegisterParams, type RegisterResponse } from '../types';

type RegisterStep = 'register' | 'verify-code';

export const registerFx = createEffect(async (data: RegisterParams) => {
  return (await requestFx({
    method: 'POST',
    path: 'auth/register',
    data,
  })) as RegisterResponse;
});

export const emailChanged = createEvent<string>();
export const passwordChanged = createEvent<string>();
export const confirmPasswordChanged = createEvent<string>();
export const formSubmitted = createEvent();

export const $email = createStore<string>('');
export const $password = createStore<string>('');
export const $confirmPassword = createStore<string>('');
export const $registerLoading = createStore<boolean>(false);
export const $registerError = createStore<string | null>(null);
export const $registerStep = createStore<RegisterStep>('register');

$email.on(emailChanged, (_, email) => email);
$password.on(passwordChanged, (_, password) => password);
$confirmPassword.on(confirmPasswordChanged, (_, password) => password);
$registerLoading.on(registerFx, () => true).on(registerFx.finally, () => false);
$registerError.reset(emailChanged, passwordChanged, confirmPasswordChanged);
$registerStep.on(registerFx.doneData, () => 'verify-code');

sample({
  clock: formSubmitted,
  source: {
    email: $email,
    password: $password,
    confirmPassword: $confirmPassword,
  },
  filter: not($registerLoading),
  target: registerFx,
});
