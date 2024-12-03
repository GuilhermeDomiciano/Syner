"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ComunidadePage() {
  const [activeTab, setActiveTab] = useState("grupos");

  const destaques = [
    { id: 1, nome: "POO 2N Ultra", imagem: "/icons/poo.png" },
    { id: 2, nome: "Grupo de Estudos FDBt", imagem: "/icons/fdb.png" },
    { id: 3, nome: "Unidos da Estrutura", imagem: "/icons/arvore.png" },
  ];

  const comunidadesParticipando = [
    { id: 1, nome: "POO 2N Ulbra", imagem: "/comunidades/POO 2N Ulbra.png" },
    { id: 2, nome: "Unidos da Estrutura de Dados", imagem: "/comunidades/Unidos da Estrutura.png" },
    { id: 3, nome: "Cálculo 4N -0609", imagem: "/comunidades/Cálculo 4N -0609.png" },
    { id: 4, nome: "Grupo de Estudos", imagem: "/comunidades/Grupo de Estudos.png" },
    { id: 5, nome: "Modelagem de Software", imagem: "/comunidades/Modelagem de .png" },
    { id: 6, nome: "SYNER - Desenvolvimento", imagem: "/comunidades/SYNER.png" },
  ];

  const comunidadesSugeridas = [
    {
      id: 4,
      nome: "Unidos da Computação",
      membros: 124,
      materiais: 72,
      imagem: "/comunidades/computacao.png",
    },
    {
      id: 5,
      nome: "Engenharia de Software",
      membros: 12,
      materiais: 5,
      imagem: "/comunidades/software.png",
    },
    {
      id: 6,
      nome: "Estruturas de Dados",
      membros: 40,
      materiais: 18,
      imagem: "/comunidades/estruturas.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Título */}
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Comunidades</h1>

      {/* Comunidades Participando */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-blue-500">Participando</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {comunidadesParticipando.map((comunidade) => (
            <Link key={comunidade.id} href={`/comunidade/${comunidade.id}`} passHref>
              <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow">
                <Image
                  src={comunidade.imagem}
                  alt={comunidade.nome}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
                <p className="mt-2 font-medium text-center text-gray-800 truncate w-full">
                  {comunidade.nome}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Sugestões de Comunidades */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-blue-500">Sugestões</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comunidadesSugeridas.map((sugestao) => (
            <li
              key={sugestao.id}
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md border border-gray-300"
            >
              <Image
                src={sugestao.imagem}
                alt={sugestao.nome}
                width={60}
                height={60}
                className="rounded"
              />
              <div className="flex flex-col flex-grow">
                <p className="font-medium truncate">{sugestao.nome}</p>
                <p className="text-sm text-gray-500">
                  {sugestao.membros} membros - {sugestao.materiais} materiais
                </p>
              </div>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Participar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
