"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ComunidadePage() {
  const [activeTab, setActiveTab] = useState("grupos");

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

  const videosSugeridos = [
    { id: 1, titulo: "Introdução ao POO", imagem: "/videos/poo.png" },
    { id: 2, titulo: "Estruturas de Dados - Árvore", imagem: "/videos/estruturas.png" },
    { id: 3, titulo: "Modelagem de Software na Prática", imagem: "/videos/modelagem.png" },
  ];

  const materiaisDisponiveis = [
    { id: 1, titulo: "Material de Cálculo", imagem: "/materiais/calculo.png" },
    { id: 2, titulo: "Estruturas de Dados", imagem: "/materiais/estruturas.png" },
    { id: 3, titulo: "POO - Exemplos Práticos", imagem: "/materiais/poo.png" },
  ];

  const livrosSugeridos = [
    { id: 1, titulo: "Clean Code", imagem: "/livros/clean-code.png" },
    { id: 2, titulo: "Estruturas de Dados em Java", imagem: "/livros/estruturas-java.png" },
    { id: 3, titulo: "Cálculo para Engenharia", imagem: "/livros/calculo.png" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "grupos":
        return (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-blue-500">Comunidades que você participa</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {comunidadesParticipando.map((comunidade) => (
                <Link key={comunidade.id} href={`/comunidade/${comunidade.id}`} passHref>
                  <div className="group flex flex-col items-center bg-white p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 transform transition duration-300">
                    <Image
                      src={comunidade.imagem}
                      alt={comunidade.nome}
                      width={120}
                      height={120}
                      className="rounded-lg"
                    />
                    <p className="mt-4 font-medium text-center text-gray-800 truncate w-full group-hover:text-blue-600">
                      {comunidade.nome}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            {/* Sugestões de Grupos */}  
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-500">Sugestões de Grupos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {comunidadesSugeridas.map((sugestao) => (
                  <div
                    key={sugestao.id}
                    className="flex items-center gap-6 bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transform hover:scale-105 transition duration-300"
                  >
                    <Image
                      src={sugestao.imagem}
                      alt={sugestao.nome}
                      width={80}
                      height={80}
                      className="rounded-lg shadow"
                    />
                    <div className="flex flex-col flex-grow">
                      <p className="font-semibold text-lg truncate">{sugestao.nome}</p>
                      <p className="text-gray-600 text-sm">
                        {sugestao.membros} membros - {sugestao.materiais} materiais
                      </p>
                    </div>
                    <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow hover:from-blue-600 hover:to-blue-700 transition duration-300">
                      Participar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        );

      case "videos":
        return (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-blue-500">Vídeos Recomendados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videosSugeridos.map((video) => (
                <div key={video.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                  <Image
                    src={video.imagem}
                    alt={video.titulo}
                    width={200}
                    height={120}
                    className="rounded-lg"
                  />
                  <p className="mt-4 font-medium text-center text-gray-800">{video.titulo}</p>
                </div>
              ))}
            </div>
          </>
        );

      case "materiais":
        return (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-blue-500">Materiais Disponíveis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materiaisDisponiveis.map((material) => (
                <div key={material.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                  <Image
                    src={material.imagem}
                    alt={material.titulo}
                    width={200}
                    height={120}
                    className="rounded-lg"
                  />
                  <p className="mt-4 font-medium text-center text-gray-800">{material.titulo}</p>
                </div>
              ))}
            </div>
          </>
        );

      case "livros":
        return (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-blue-500">Livros Sugeridos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {livrosSugeridos.map((livro) => (
                <div key={livro.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                  <Image
                    src={livro.imagem}
                    alt={livro.titulo}
                    width={200}
                    height={120}
                    className="rounded-lg"
                  />
                  <p className="mt-4 font-medium text-center text-gray-800">{livro.titulo}</p>
                </div>
              ))}
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-100 p-8">
      {/* Título */}
      <h1 className="text-4xl font-bold mb-10 text-center text-blue-600 drop-shadow-md">
        Comunidade
      </h1>

      {/* Botões de Navegação */}
      <div className="flex justify-center gap-4 mb-12">
        {["grupos", "videos", "materiais", "livros"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-lg font-medium transition ${
              activeTab === tab
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Conteúdo Dinâmico */}
      {renderContent()}
    </div>
  );
}
