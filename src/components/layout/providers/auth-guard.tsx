'use client';
import { $userPending, userGet } from '@/shared/models/user';
import { useUnit } from 'effector-react';
import React, { ReactNode, useEffect } from 'react';
import { Spin } from 'antd';

interface Props {
  children: ReactNode;
}

export const AuthGuard: React.FC<Props> = ({ children }) => {
  const [getUser, userPending] = useUnit([userGet, $userPending]);

  useEffect(() => {
    getUser();
  }, []);

  if (userPending) {
    return <Spin percent="auto" size="large" fullscreen />;
  }

  return children;
};
