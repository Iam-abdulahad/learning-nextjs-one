import Link from "next/link";

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  const posts = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Users</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border rounded-xl p-4 shadow-sm"
          >
            <h2 className="text-lg font-semibold">{post.name}</h2>
            <p className="text-gray-600">{post.username}</p>

            <Link
              href={`/data/${post.id}`}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
