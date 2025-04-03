'use client';
import { AuthModal } from '@/components/modals';
import { Button } from 'antd';
import { useUnit } from 'effector-react';
import { $authModalIsOpened, authModalOpened } from './model';

interface Props {
  className?: string;
}

export const ProfileButton = ({ className }: Props) => {
  const [authModalIsOpened, setAuthModalIsOpened] = useUnit([$authModalIsOpened, authModalOpened]);

  return (
    <>
      <Button onClick={() => setAuthModalIsOpened(true)} type="link" className={className}>
        Войти
      </Button>

      <AuthModal isOpen={authModalIsOpened} onClose={() => setAuthModalIsOpened(false)} />
    </>
  );
};
