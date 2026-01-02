import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-gray-900 dark:text-white">
              O&apos;lchov.uz
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              O&apos;lchov birliklarini onlayn aylantirish uchun bepul va tez konvertor.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-gray-900 dark:text-white">
              Kategoriyalar
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/uzunlik"
                  className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Uzunlik
                </Link>
              </li>
              <li>
                <Link
                  href="/ogirlik"
                  className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Og&apos;irlik
                </Link>
              </li>
              <li>
                <Link
                  href="/maydon"
                  className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Maydon
                </Link>
              </li>
              <li>
                <Link
                  href="/hajm"
                  className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Hajm
                </Link>
              </li>
              <li>
                <Link
                  href="/harorat"
                  className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Harorat
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-gray-900 dark:text-white">
              Havolalar
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link
                  href="#barcha-konvertorlar"
                  className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Barcha konvertorlar
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-gray-900 dark:text-white">
              Ma&apos;lumot
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>© {currentYear} olchov.uz</li>
              <li>Barcha huquqlar himoyalangan</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-700">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} olchov.uz • Bepul va tez o&apos;lchov birliklari konvertori
          </p>
        </div>
      </div>
    </footer>
  );
}

