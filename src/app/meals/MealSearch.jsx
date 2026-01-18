"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MealSearch({ defaultValue }) {
  const [search, setSearch] = useState(defaultValue);
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/meals?q=${search}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-3">
      <input
        type="text"
        placeholder="Search meals (e.g. chicken)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-4 py-2 rounded-md w-full"
      />
      <button
        type="submit"
        className="bg-black text-white px-6 rounded-md"
      >
        Search
      </button>
    </form>
  );
}
