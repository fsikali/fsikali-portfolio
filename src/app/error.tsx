"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-2xl font-bold">Something went wrong</h2>

      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-white text-black rounded"
      >
        Try again
      </button>
    </div>
  );
}
