"use client"
export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Algo salió mal</h2>
      <p className="text-gray-600 mb-6 max-w-md">{error.message}</p>
      <button
        onClick={reset}
        className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
      >
        Intentar de nuevo
      </button>
    </div>
  )
}

