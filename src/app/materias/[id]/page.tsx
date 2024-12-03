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
            <ul className="w-full">
              {materia.monitores.map((monitor, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-gray-300"
                >
                  {/* Informações do monitor */}
                  <div className="flex items-center gap-4">
                    <Image
                      src={monitor.img}
                      alt={monitor.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-lg">{monitor.name}</p>
                      <p className="text-sm text-gray-500">{monitor.role}</p>
                    </div>
                  </div>

                  {/* Nota e estrela */}
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500 font-bold text-lg">
                      {monitor.nota.toFixed(1)}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431 8.2 1.194-5.934 5.781 1.402 8.164L12 18.896l-7.336 3.861 1.402-8.164L.13 9.212l8.2-1.194z" />
                    </svg>
                  </div>
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
                  {/* Ícone do material */}
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
                  {/* Ícone do teste */}
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
