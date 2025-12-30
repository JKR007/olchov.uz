export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-5xl px-4 py-10">
        {/* Test Section: Tailwind CSS Classes */}
        <section className="mb-8 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Tailwind CSS v4 Test
          </h1>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            This section tests Tailwind CSS v4 functionality and theme switching.
          </p>

          {/* Color Test */}
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-blue-500 p-4 text-white">Blue 500</div>
            <div className="rounded-lg bg-green-500 p-4 text-white">Green 500</div>
            <div className="rounded-lg bg-red-500 p-4 text-white">Red 500</div>
          </div>

          {/* Dark Mode Test */}
          <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
            <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              Dark Mode Test
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              This box should have different backgrounds in light and dark modes.
            </p>
          </div>

          {/* Responsive Test */}
          <div className="mt-6">
            <div className="rounded-lg border border-gray-300 p-4 dark:border-gray-600">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Responsive: This text should adapt on mobile devices.
              </p>
              <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                  Button 1
                </button>
                <button className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600">
                  Button 2
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Theme Toggle Test Section */}
        <section className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Theme Toggle Test
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Click the theme toggle button in the top-right corner to switch between light and dark
            modes. Your preference will be saved in localStorage.
          </p>
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Current theme preference is stored in localStorage and persists across page reloads.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
