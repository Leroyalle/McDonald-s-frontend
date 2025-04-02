import { useUnit } from 'effector-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { $category } from '../model';

export const useSearchCategoryParams = () => {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const pathname = usePathname();
  const router = useRouter();
  const categoryStore = useUnit($category);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  useEffect(() => {
    if (categoryStore && categoryStore !== categoryFromUrl) {
      router.push(`${pathname}?${createQueryString('category', categoryStore)}`, {
        scroll: false,
      });
    }
  }, [categoryStore]);

  return {
    categoryFromUrl,
    categoryStore,
  };
};
