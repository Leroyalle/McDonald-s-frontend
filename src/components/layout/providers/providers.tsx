import '@ant-design/v5-patch-for-react-19';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { EffectorNext } from '@effector/next';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <EffectorNext>
      <AntdRegistry>{children}</AntdRegistry>
    </EffectorNext>
  );
};
