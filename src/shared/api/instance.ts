import { getCookie } from '@/app/actions';
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
  credentials: 'include',
  hooks: {
    beforeRequest: [
      async (req) => {
        const token = await getCookie('token');
        if (token) {
          req.headers.set('Authorization', `Bearer ${token.value}`);
        }
      },
    ],
  },
});

export const requestFx = createEffect<Request, unknown, Error>(async (params) => {
  const filteredParams = params.params
    ? Object.fromEntries(Object.entries(params.params).filter(([, v]) => v !== undefined))
    : undefined;

  const response = await instance(params.path, {
    method: params.method,
    json: params.data,
    searchParams: filteredParams,
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
});
