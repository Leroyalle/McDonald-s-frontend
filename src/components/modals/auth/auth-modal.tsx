import '@ant-design/v5-patch-for-react-19';
import React, { ReactNode } from 'react';
import { Modal, Tabs } from 'antd';

import { LoginForm, RegisterSection } from '@/components/forms';
import { useUnit } from 'effector-react';
import { $authStep, AuthStep, authStepChanged } from './model';

type StepItem = {
  key: AuthStep;
  label: string;
  children: ReactNode;
};

interface Props {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<Props> = ({ className, isOpen, onClose }) => {
  const [authStep, setAuthStep] = useUnit([$authStep, authStepChanged]);

  const items: StepItem[] = [
    {
      key: 'login',
      label: 'Войти',
      children: <LoginForm />,
    },
    {
      key: 'register',
      label: 'Зарегистрироваться',
      children: <RegisterSection />,
    },
  ];

  return (
    <Modal
      centered
      open={isOpen}
      onCancel={onClose}
      footer={null}
      title="Добро пожаловать"
      className={className}>
      <Tabs
        activeKey={authStep}
        onChange={(key) => setAuthStep(key as AuthStep)}
        items={items}
        centered
      />
    </Modal>
  );
};
