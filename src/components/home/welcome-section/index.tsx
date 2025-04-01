import Image from 'next/image';

export const WelcomeSection = () => {
  return (
    <div className="flex items-center mb-8">
      <div className="bg-green-100 rounded-full p-2 mr-3">
        <Image
          src="/placeholder.svg?height=40&width=40"
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
