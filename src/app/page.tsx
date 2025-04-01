import { MenuSection, WelcomeSection, CitySelection, AppPromo, Notice } from '@/components';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-6">
      <WelcomeSection />
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <CitySelection />
        <AppPromo />
      </div>
      <Notice />
      <MenuSection />
    </main>
  );
}
