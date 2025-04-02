import { API_URL } from '@/constants';
import { createEffect } from 'effector';
import ky from 'ky';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

type Request = {
  method: RequestMethod;
  path: string;
  data?: unknown;
  params?: Record<string, string>;
};

export const instance = ky.create({
  prefixUrl: API_URL,
});

export const requestFx = createEffect<Request, unknown, Error>(async (params) => {
  const response = await instance(params.path, {
    method: params.method,
    json: params.data,
    searchParams: params.params,
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
});
