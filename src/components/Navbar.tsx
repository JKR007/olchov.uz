import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-lg font-semibold">
            <span className="text-gray-900 dark:text-white">olchov.uz</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden items-center space-x-6 md:flex">
            <Link
              href="/"
              className="text-base text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Bosh sahifa
            </Link>
            <Link
              href="/uzunlik"
              className="text-base text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Uzunlik
            </Link>
            <Link
              href="/ogirlik"
              className="text-base text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Og&apos;irlik
            </Link>
            <Link
              href="/maydon"
              className="text-base text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Maydon
            </Link>
            <Link
              href="/hajm"
              className="text-base text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Hajm
            </Link>
            <Link
              href="/harorat"
              className="text-base text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Harorat
            </Link>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

