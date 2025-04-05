import { createEffect } from 'effector';

export const redirectFx = createEffect((url: string) => {
  window.location.href = url;
});
