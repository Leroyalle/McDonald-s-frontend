'use client';
import { AuthModal } from '@/components/modals';
import { Button } from 'antd';
import { useUnit } from 'effector-react';
import { $authModalIsOpened, authModalOpened } from './model';
import { $user } from '@/shared/models/user';

interface Props {
  className?: string;
}

export const ProfileButton = ({ className }: Props) => {
  const user = useUnit($user);
  const [authModalIsOpened, setAuthModalIsOpened] = useUnit([$authModalIsOpened, authModalOpened]);

  if (user) {
    return (
      <Button href="/profile" type="link" className={className}>
        Профиль
      </Button>
    );
  }
  return (
    <>
      <Button onClick={() => setAuthModalIsOpened(true)} type="link" className={className}>
        Войти
      </Button>

      <AuthModal isOpen={authModalIsOpened} onClose={() => setAuthModalIsOpened(false)} />
    </>
  );
};
