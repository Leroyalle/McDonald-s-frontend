import Link from 'next/link';

export const Navigation = () => {
  return (
    <nav className="flex overflow-x-auto py-3 -mx-4 px-4 scrollbar-hide">
      <div className="flex space-x-6 min-w-max">
        <Link href="#" className="font-medium">
          Меню
        </Link>
        <Link href="#" className="text-gray-600">
          Стикермания
        </Link>
        <Link href="#" className="text-gray-600">
          Кафе
        </Link>
        <Link href="#" className="text-gray-600">
          Супер Бокс
        </Link>
        <Link href="#" className="text-gray-600">
          Кидз
        </Link>
        <Link href="#" className="text-gray-600">
          Новости
        </Link>
        <Link href="#" className="text-gray-600">
          О нас
        </Link>
      </div>
    </nav>
  );
};
