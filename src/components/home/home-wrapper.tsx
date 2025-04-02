'use client';
import { AppPromo } from './app-promo';
import { CitySelection } from './city-selection';
import { MenuSection } from './menu-section';

import { Notice } from './notice';
import { WelcomeSection } from './welcome-section';

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
