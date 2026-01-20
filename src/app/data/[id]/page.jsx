import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { id } = await params;
 
  // fetch post information
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
    res.json()
  )
 
  return {
    title: user.name,
    description: user.email,
  }
}

export default async function Page({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return notFound();
  }

  const post = await res.json();

  return (
    <div className="p-6">
      <Link href="/data" className="text-blue-500 hover:underline">
        ← Back to users
      </Link>

      <h1 className="text-2xl font-bold mt-4 mb-4">User Details</h1>

      <div className="border rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold">{post.name}</h2>
        <p><strong>Username:</strong> {post.username}</p>
        <p><strong>Email:</strong> {post.email}</p>
        <p><strong>Phone:</strong> {post.phone}</p>
        <p><strong>Website:</strong> {post.website}</p>
      </div>
    </div>
  );
}
