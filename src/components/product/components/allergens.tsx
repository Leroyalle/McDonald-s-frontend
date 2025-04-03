'use client';

interface AllergensProps {
  allergens: string[];
}

export const Allergens = ({ allergens }: AllergensProps) => {
  return (
    <div className="border-t border-gray-100 p-6">
      <h2 className="font-medium mb-4">Аллергены:</h2>
      <div className="flex flex-wrap gap-2">
        {allergens.map((allergen) => (
          <span
            key={allergen}
            className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {allergen}
          </span>
        ))}
      </div>
    </div>
  );
};
