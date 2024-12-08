"use client";

import { useState } from "react";

export default function RecadosPage() {
  const [recados, setRecados] = useState([
    {
      id: 1,
      autor: "João Silva",
      mensagem: "Reunião do grupo de estudos amanhã às 14h.",
      data: "08/12/2024",
    },
    {
      id: 2,
      autor: "Maria Santos",
      mensagem: "Entrega do trabalho de POO prorrogada para sexta-feira.",
      data: "07/12/2024",
    },
    {
      id: 3,
      autor: "Ana Costa",
      mensagem: "Evento de tecnologia na Ulbra no próximo sábado!",
      data: "06/12/2024",
    },
  ]);

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
        Mural de Recados
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recados.map((recado) => (
          <div
            key={recado.id}
            className="relative bg-blue-100 border-l-8 border-blue-500 shadow-lg rounded-lg p-6"
          >
            <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2 w-8 h-8 bg-red-400 rounded-full shadow">
              <span className="block w-3 h-3 bg-red-700 rounded-full mx-auto mt-2"></span>
            </div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{recado.autor}</h2>
            <p className="text-gray-700 mb-4">{recado.mensagem}</p>
            <p className="text-sm text-gray-500 text-right">{recado.data}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg">
          Adicionar Recado
        </button>
      </div>
    </div>
  );
}
