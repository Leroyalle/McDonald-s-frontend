import { notification } from 'antd';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const useCheckPayment = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [api, contextHolder] = notification.useNotification();
  console.log(searchParams);

  useEffect(() => {
    if (searchParams.has('paid')) {
      console.log(searchParams);
      api.success({
        message: 'Заказ успешно оплачен!',
      });
      router.replace(pathname);
    }
  }, [searchParams]);

  return {
    contextHolder,
  };
};
