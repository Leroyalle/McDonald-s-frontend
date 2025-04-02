import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Search } from 'lucide-react';
import { Navigation } from './navigation';
import { CitySelector } from './city-selector';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center">
              <Image
                src="https://s.rbk.ru/v1_companies_s3/media/trademarks/b76f788e-af91-4140-a129-1a92c8c35e98.jpg"
                alt="Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="ml-2 font-bold text-green-800">ВКУСНО — И ТОЧКА</span>
            </Link>

            <div className="flex items-center text-gray-700">
              <MapPin className="h-5 w-5 mr-1" />
              <span>Москва</span>
            </div>

            <div className="hidden md:flex items-center text-gray-700">
              <Search className="h-5 w-5 mr-1" />
              <span>Поиск</span>
            </div>
          </div>

          <CitySelector />
        </div>

        <Navigation />
      </div>
    </header>
  );
};
