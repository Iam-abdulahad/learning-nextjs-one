import Image from "next/image";

export default function MealCard({ meal }) {
  return (
    <div className="border rounded-xl overflow-hidden shadow-sm">
      <Image
        src={meal.strMealThumb}
        alt={meal.strMeal}
        height={640}
        width={640}
        className="w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold">{meal.strMeal}</h2>
        <p className="text-sm text-gray-600">
          {meal.strArea} • {meal.strCategory}
        </p>
      </div>
    </div>
  );
}
