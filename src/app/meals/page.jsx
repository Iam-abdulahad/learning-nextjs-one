import MealSearch from "./MealSearch";
import MealCard from "./MealCard";

export default async function Page({ searchParams }) {
  const { q = "" } = await searchParams;

  let meals = [];

  if (q) {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`,
      { cache: "no-store" }
    );

    const data = await res.json();
    meals = data.meals || [];
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🍽 Meal Finder</h1>

      <MealSearch defaultValue={q} />

      <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))
        ) : (
          q && <p>No meals found.</p>
        )}
      </div>
    </div>
  );
}
