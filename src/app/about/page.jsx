import Link from "next/link";
import React from "react";

function AboutPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-2xl text-center bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">About Me</h1>

        <p className="text-gray-600 leading-relaxed mb-6">
          I am a web developer focused on building modern, performant, and
          user-friendly applications using React and Next.js. I enjoy learning
          new technologies and solving real-world problems through code.
        </p>

        <Link
          href="/about/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}

export default AboutPage;
