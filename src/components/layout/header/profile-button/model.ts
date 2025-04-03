import { codeVerifyFx } from '@/components/forms/auth/register/models/verify-code';
import { createEvent, createStore, sample } from 'effector';

export const authModalOpened = createEvent<boolean>();

export const $authModalIsOpened = createStore<boolean>(false);

$authModalIsOpened.on(authModalOpened, (_, value) => value);

sample({
  clock: codeVerifyFx.doneData,
  fn: () => false,
  target: $authModalIsOpened,
});
