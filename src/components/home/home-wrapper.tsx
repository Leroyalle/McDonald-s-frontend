'use client';

import { AppPromo, CitySelection, MenuSection, Notice, WelcomeSection } from './components';
import { useCheckPayment } from './hooks';

export const HomeWrapper = () => {
  const { contextHolder } = useCheckPayment();

  return (
    <>
      {contextHolder}
      <WelcomeSection />
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <CitySelection />
        <AppPromo />
      </div>
      <Notice />
      <MenuSection />
    </>
  );
};
