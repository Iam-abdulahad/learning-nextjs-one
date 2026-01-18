export default function MealCard({ meal }) {
  return (
    <div className="border rounded-xl overflow-hidden shadow-sm">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
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
