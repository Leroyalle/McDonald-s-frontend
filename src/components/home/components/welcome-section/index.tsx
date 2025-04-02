import Image from 'next/image';

export const WelcomeSection = () => {
  return (
    <div className="flex items-center mb-8">
      <div className="bg-green-100 rounded-full p-2 mr-3">
        <Image
          src="https://s.rbk.ru/v1_companies_s3/media/trademarks/b76f788e-af91-4140-a129-1a92c8c35e98.jpg"
          alt="Icon"
          width={40}
          height={40}
          className="h-10 w-10"
        />
      </div>
      <h1 className="text-3xl font-bold">Приходи к нам!</h1>
    </div>
  );
};
