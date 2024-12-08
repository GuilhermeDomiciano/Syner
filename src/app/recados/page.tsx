"use client";

import { useState, useEffect } from "react";

// Definição do tipo Recado
type Recado = {
  id: number;
  autor: string;
  mensagem: string;
  data: string;
};

export default function RecadosPage() {
  // Recados padrão de base
  const baseRecados: Recado[] = [
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
  ];

  const [recados, setRecados] = useState<Recado[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newRecado, setNewRecado] = useState<Pick<Recado, "autor" | "mensagem">>({
    autor: "",
    mensagem: "",
  });

  // Carregar recados do Local Storage ou inicializar com os recados padrão
  useEffect(() => {
    const storedRecados = localStorage.getItem("recados");
    if (storedRecados) {
      setRecados(JSON.parse(storedRecados));
    } else {
      setRecados(baseRecados);
      localStorage.setItem("recados", JSON.stringify(baseRecados));
    }
  }, []);

  // Salvar recados no Local Storage sempre que forem alterados
  useEffect(() => {
    if (recados.length > 0) {
      localStorage.setItem("recados", JSON.stringify(recados));
    }
  }, [recados]);

  const handleAddRecado = () => {
    if (newRecado.autor && newRecado.mensagem) {
      const novoRecado: Recado = {
        id: recados.length + 1, // Garantir IDs únicos
        autor: newRecado.autor,
        mensagem: newRecado.mensagem,
        data: new Date().toLocaleDateString(),
      };
      setRecados([...recados, novoRecado]);
      setNewRecado({ autor: "", mensagem: "" });
      setShowForm(false);
    } else {
      alert("Preencha todos os campos antes de adicionar um recado.");
    }
  };

  // Função para excluir um recado pelo ID
  const handleDeleteRecado = (id: number) => {
    const filteredRecados = recados.filter((recado) => recado.id !== id);
    setRecados(filteredRecados);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
        Mural de Recados
      </h1>

      {/* Mural de Recados */}
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
            <button
              onClick={() => handleDeleteRecado(recado.id)}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
            >
              Excluir
            </button>
          </div>
        ))}
      </div>

      {/* Botão Adicionar Recado */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg"
        >
          {showForm ? "Cancelar" : "Adicionar Recado"}
        </button>
      </div>

      {/* Formulário para adicionar recado */}
      {showForm && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">
            Novo Recado
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Autor"
              value={newRecado.autor}
              onChange={(e) => setNewRecado({ ...newRecado, autor: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Mensagem"
              value={newRecado.mensagem}
              onChange={(e) => setNewRecado({ ...newRecado, mensagem: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            ></textarea>
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={handleAddRecado}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Salvar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
