import { useUnit } from 'effector-react';
import React from 'react';
import { $registerStep } from './models/register';
import { ConfirmCodeForm, RegisterForm } from './components';

export const RegisterSection: React.FC = () => {
  const registerStep = useUnit($registerStep);

  if (registerStep === 'register') return <RegisterForm />;
  if (registerStep === 'verify-code') return <ConfirmCodeForm />;
  return null;
};
