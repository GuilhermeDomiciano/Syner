"use client";

import { useState, useEffect } from "react";
import { FaTrashAlt, FaPlusCircle, FaUserAlt, FaCalendarAlt } from "react-icons/fa";
import { MdMessage, MdChat } from "react-icons/md";

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <h1 className="text-5xl font-extrabold mb-8 text-center text-blue-700 drop-shadow-lg">
        Mural de Recados
      </h1>

      {/* Mural de Recados */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recados.map((recado) => (
          <div
            key={recado.id}
            className="relative bg-white border-l-8 border-blue-500 shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaUserAlt className="text-blue-500 text-2xl" />
              <h2 className="text-xl font-semibold text-blue-700">{recado.autor}</h2>
            </div>
            <p className="text-gray-700 mb-4 flex items-start gap-2">
              <MdMessage className="text-gray-500 text-xl" />
              {recado.mensagem}
            </p>
            <p className="text-sm text-gray-500 flex justify-end items-center gap-1">
              <FaCalendarAlt className="text-gray-400" /> {recado.data}
            </p>
            <button
              onClick={() => handleDeleteRecado(recado.id)}
              className="mt-4 flex items-center justify-center gap-2 w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-2 rounded-lg shadow hover:shadow-lg hover:from-red-600 hover:to-red-700 transition duration-300"
            >
              <FaTrashAlt /> Excluir
            </button>
          </div>
        ))}
      </div>

      {/* Botão Adicionar Recado */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-6 py-3 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition duration-300"
        >
          <FaPlusCircle className="text-2xl" />
          {showForm ? "Cancelar" : "Adicionar Recado"}
        </button>
      </div>

      {/* Formulário para adicionar recado */}
      {showForm && (
        <div className="mt-8 bg-white p-8 rounded-lg shadow-2xl max-w-lg mx-auto border-t-4 border-blue-500">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
            Novo Recado
          </h2>
          <div className="space-y-6">
            <input
              type="text"
              placeholder="Autor"
              value={newRecado.autor}
              onChange={(e) => setNewRecado({ ...newRecado, autor: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
            <textarea
              placeholder="Mensagem"
              value={newRecado.mensagem}
              onChange={(e) => setNewRecado({ ...newRecado, mensagem: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              rows={4}
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button
              onClick={handleAddRecado}
              className="px-6 py-3 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition duration-300"
            >
              <FaPlusCircle className="text-xl" />
              Salvar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
