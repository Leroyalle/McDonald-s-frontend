'use client';

interface NutritionInfoProps {
  nutrition: {
    proteins: string;
    fats: string;
    carbs: string;
    calories: string;
  };
}

export const NutritionInfo = ({ nutrition }: NutritionInfoProps) => {
  return (
    <div className="border-t border-gray-100 p-6">
      <h2 className="font-medium mb-4">Пищевая ценность на 100 г:</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <div className="text-sm text-gray-500">Белки</div>
          <div className="font-medium">{nutrition.proteins}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Жиры</div>
          <div className="font-medium">{nutrition.fats}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Углеводы</div>
          <div className="font-medium">{nutrition.carbs}</div>
        </div>
        <div>
          <div className="text-sm text-gray-500">Энергетическая ценность</div>
          <div className="font-medium">{nutrition.calories}</div>
        </div>
      </div>
    </div>
  );
};
