import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">404</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Bu sahifa topilmadi.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-lg bg-gray-900 px-6 py-3 text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
      >
        Bosh sahifaga qaytish
      </Link>
    </main>
  );
}

