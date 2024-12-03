"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

type Monitor = {
  name: string;
  role: string;
  img: string;
};

type Materia = {
  id: number;
  nome: string;
  slug: string;
  imagemSrc: string;
  monitores: Monitor[];
  materiais: string[];
  testes: string[];
};

export default function ProfilePage() {
  const { id } = useParams() as { id: string }; // Obtem o ID dinâmico da URL
  const [materia, setMateria] = useState<Materia | null>(null);
  const [activeTab, setActiveTab] = useState("monitores");

  useEffect(() => {
    const fetchMaterias = async () => {
      const response = await fetch("/materias.json"); // Carrega o JSON da pasta public
      const data: Materia[] = await response.json();
      const selectedMateria = data.find((m) => m.id === parseInt(id));
      setMateria(selectedMateria || null);
    };

    fetchMaterias();
  }, [id]);

  if (!materia) return <p>Carregando...</p>;

  return (
    <div className="min-h-screen flex">
      {/* Lado Esquerdo */}
      <aside className="fixed top-0 left-0 w-1/2 h-full p-8 flex flex-col items-center justify-center bg-white shadow-lg">
        <Image
          src={materia.imagemSrc}
          alt={materia.nome}
          width={200}
          height={200}
          className="rounded-full mb-4"
        />
        <h1 className="text-2xl font-bold">{materia.nome}</h1>
        <p className="text-gray-600">{materia.monitores.length} monitores</p>
      </aside>

      {/* Linha divisória */}
      <div className="fixed top-0 left-1/2 h-full w-[1px] bg-gray-300"></div>

      {/* Lado Direito */}
      <main className="ml-[50%] w-[50%] p-12">
        {/* Abas */}
        <div className="flex gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "monitores"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("monitores")}
          >
            Monitores
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "materiais"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("materiais")}
          >
            Materiais
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "testes"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("testes")}
          >
            Testes
          </button>
        </div>

        {/* Conteúdo Dinâmico */}
        <div>
        {activeTab === "monitores" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Monitores</h2>
            <ul>
              {materia.monitores.map((monitor, index) => (
                <li key={index} className="mb-4 flex items-center gap-4">
                  <Image
                    src={`${monitor.img}`}
                    alt={monitor.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{monitor.name}</p>
                    <p className="text-sm text-gray-500">{monitor.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

          {activeTab === "materiais" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Materiais</h2>
              <ul>
                {materia.materiais.map((material, index) => (
                  <li key={index} className="mb-2">
                    <p>{material}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "testes" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Testes</h2>
              <ul>
                {materia.testes.map((teste, index) => (
                  <li key={index} className="mb-2">
                    <p>{teste}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
