import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const BackToMenu = () => {
  return (
    <Link href="/" className="inline-flex items-center text-gray-600 mb-6">
      <ArrowLeft className="h-4 w-4 mr-2" />
      <span>Вернуться в меню</span>
    </Link>
  );
};
