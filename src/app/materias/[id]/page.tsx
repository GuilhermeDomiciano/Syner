"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

type Monitor = {
  name: string;
  role: string;
  img: string;
  nota: number;
};

type Material = {
  titulo: string;
  monitor: string;
};

type Teste = {
  titulo: string;
  monitor: string;
};

type Materia = {
  id: number;
  nome: string;
  slug: string;
  imagemSrc: string;
  monitores: Monitor[];
  materiais: Material[];
  testes: Teste[];
};

export default function MateriaPage() {
  const { id } = useParams() as { id: string }; // Obtém o ID da URL
  const [materia, setMateria] = useState<Materia | null>(null);
  const [activeTab, setActiveTab] = useState<"monitores" | "materiais" | "testes">("monitores");

  useEffect(() => {
    const fetchMaterias = async () => {
      try {
        const response = await fetch("/materias.json");
        if (!response.ok) throw new Error("Erro ao carregar as matérias.");
        const materias: Materia[] = await response.json();
        const selectedMateria = materias.find((m) => m.id === parseInt(id));
        setMateria(selectedMateria || null);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMaterias();
  }, [id]);

  if (!materia) return <p>Carregando...</p>;

  return (
    <div className="min-h-screen flex">
      {/* Lado Esquerdo */}
      <aside className="fixed top-0 left-0 w-1/2 h-full p-8 flex flex-col items-center justify-center">
        <Image
          src={materia.imagemSrc || "/icons/fallback.png"}
          alt={materia.nome || "Imagem da Matéria"}
          width={200}
          height={200}
          className="rounded-full mb-4"
        />
        <h1 className="text-2xl font-bold">{materia.nome}</h1>
        <p className="text-gray-600">{materia.monitores?.length || 0} monitores</p>
      </aside>

      {/* Linha divisória */}
      <div className="fixed top-0 left-1/2 h-full w-[1px] bg-gray-300"></div>

      {/* Lado Direito */}
      <main className="ml-[50%] w-[50%] p-12">
        {/* Abas */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <button
            className={`px-6 py-3 rounded-full text-sm font-medium shadow-md ${
              activeTab === "monitores"
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("monitores")}
          >
            Monitores
          </button>
          <button
            className={`px-6 py-3 rounded-full text-sm font-medium shadow-md ${
              activeTab === "materiais"
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("materiais")}
          >
            Materiais
          </button>
          <button
            className={`px-6 py-3 rounded-full text-sm font-medium shadow-md ${
              activeTab === "testes"
                ? "bg-blue-500 text-white shadow-lg"
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
              <ul className="w-full">
                {materia.monitores.map((monitor, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between py-4 border-b border-gray-300"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={monitor.img || "/icons/monitor.png"}
                        alt={monitor.name || "Monitor"}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-lg">{monitor.name}</p>
                        <p className="text-sm text-gray-500">{monitor.role}</p>
                      </div>
                    </div>
                    <span className="text-blue-500 font-bold text-lg">
                      {monitor.nota?.toFixed(1) || "N/A"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "materiais" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Materiais</h2>
              <ul className="w-full">
                {materia.materiais.map((material, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between py-4 border-b border-gray-300"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src="/icons/material.png"
                        alt="Ícone de material"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-lg">{material.titulo}</p>
                        <p className="text-sm text-gray-500">Por {material.monitor}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "testes" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Testes</h2>
              <ul className="w-full">
                {materia.testes.map((teste, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between py-4 border-b border-gray-300"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src="/icons/teste.png"
                        alt="Ícone de teste"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-lg">{teste.titulo}</p>
                        <p className="text-sm text-gray-500">Por {teste.monitor}</p>
                      </div>
                    </div>
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
