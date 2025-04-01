export const CitySelection = () => {
  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <div className="mb-2">
        <span className="text-gray-500 text-sm">Меню твоего города</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-medium">Москва</span>
        <button className="bg-white rounded-lg px-4 py-2 text-sm">Выбрать</button>
      </div>
    </div>
  );
};
