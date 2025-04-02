'use client';

import { AppPromo, CitySelection, MenuSection, Notice, WelcomeSection } from './components';

export const HomeWrapper = () => {
  return (
    <>
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
