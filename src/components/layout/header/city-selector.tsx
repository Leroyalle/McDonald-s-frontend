export const CitySelector = () => {
  return (
    <div className="bg-gray-100 rounded-lg px-4 py-2 hidden md:block">
      <div className="flex items-center">
        <span className="text-sm text-gray-500">Твой город —</span>
        <span className="text-sm ml-1">Обнинск?</span>
        <div className="flex ml-4 space-x-4">
          <button className="text-sm">Да, верно</button>
          <button className="text-sm text-orange-500">Другой</button>
        </div>
      </div>
    </div>
  );
};
