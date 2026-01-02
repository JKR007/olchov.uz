import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-blue-200 bg-gradient-to-b from-blue-50 to-blue-100 dark:border-blue-900 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-blue-600 dark:text-blue-400">
              O&apos;lchov.uz
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              O&apos;lchov birliklarini onlayn aylantirish uchun bepul va tez konvertor.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-blue-600 dark:text-blue-400">
              Kategoriyalar
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/uzunlik"
                  className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  Uzunlik
                </Link>
              </li>
              <li>
                <Link
                  href="/ogirlik"
                  className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  Og&apos;irlik
                </Link>
              </li>
              <li>
                <Link
                  href="/maydon"
                  className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  Maydon
                </Link>
              </li>
              <li>
                <Link
                  href="/hajm"
                  className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  Hajm
                </Link>
              </li>
              <li>
                <Link
                  href="/harorat"
                  className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  Harorat
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-blue-600 dark:text-blue-400">
              Havolalar
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link
                  href="#barcha-konvertorlar"
                  className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  Barcha konvertorlar
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-blue-600 dark:text-blue-400">
              Ma&apos;lumot
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>© {currentYear} olchov.uz</li>
              <li>Barcha huquqlar himoyalangan</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-blue-100 pt-6 dark:border-blue-900">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {currentYear}{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">olchov.uz</span> • Bepul va tez o&apos;lchov birliklari konvertori
          </p>
        </div>
      </div>
    </footer>
  );
}

