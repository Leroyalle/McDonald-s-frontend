import { EffectorNext } from '@effector/next';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <EffectorNext>{children}</EffectorNext>;
};
