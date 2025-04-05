import '@ant-design/v5-patch-for-react-19';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { EffectorNext } from '@effector/next';
import { AuthGuard } from './auth-guard';
import NextTopLoader from 'nextjs-toploader';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <EffectorNext>
      <AntdRegistry>
        <AuthGuard>{children}</AuthGuard>
      </AntdRegistry>
      <NextTopLoader color="orange" />
    </EffectorNext>
  );
};
