import { createEvent, createStore } from 'effector';

export type AuthStep = 'login' | 'register';

export const authStepChanged = createEvent<AuthStep>();

export const $authStep = createStore<AuthStep>('login');

$authStep.on(authStepChanged, (_, step) => step);
