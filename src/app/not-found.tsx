export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-4xl font-bold">404</h1>

      <p className="text-gray-500 mt-2">
        Page not found
      </p>

      <a
        href="/"
        className="mt-6 px-4 py-2 bg-white text-black rounded"
      >
        Go Home
      </a>
    </div>
  );
}
