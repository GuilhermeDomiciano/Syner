"use client";

import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center">
      {/* Ícone e título */}
      <div className="flex flex-col items-center space-y-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-20 h-20 text-blue-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75h.008v.008h-.008V9.75zm4.5 0h.008v.008h-.008V9.75zM8.25 16.5h7.5m6-4.5a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h1 className="text-5xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600">
          Oops! Parece que esta página não existe.
        </p>
      </div>

      {/* Botões */}
      <div className="mt-8 flex space-x-4">
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Voltar para Home
        </button>
        <button
          onClick={() => router.back()}
          className="px-6 py-3 text-gray-800 bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 transition"
        >
          Voltar à página anterior
        </button>
      </div>
    </div>
  );
}
