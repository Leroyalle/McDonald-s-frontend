import Image from 'next/image';

export const AppPromo = () => {
  return (
    <div className="bg-yellow-50 rounded-lg p-4 flex items-center">
      <div className="mr-4">
        <Image
          src="/placeholder.svg?height=80&width=80"
          alt="App Icon"
          width={80}
          height={80}
          className="h-20 w-20"
        />
      </div>
      <div className="flex-1">
        <div className="mb-1">
          <span>В приложении </span>
          <span className="font-bold">еще больше акций.</span>
        </div>
        <div className="text-sm">Получи любимые продукты с выгодой!</div>
      </div>
      <button className="bg-orange-500 text-white rounded-full px-4 py-2 text-sm whitespace-nowrap">
        Скачать приложение
      </button>
    </div>
  );
};
