"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type Participante = {
  name: string;
  role: string;
  img: string;
  nota: number;
};

type Material = {
  titulo: string;
  monitor: string;
};

type Grupo = {
  id: number;
  nome: string;
  imagem: string;
  participando: boolean;
  participantes: Participante[];
  materiais: Material[];
};

export default function ComunidadePage() {
  const [activeTab, setActiveTab] = useState<string>("grupos");
  const [gruposParticipando, setGruposParticipando] = useState<Grupo[]>([]);
  const [gruposSugeridos, setGruposSugeridos] = useState<Grupo[]>([]);

  useEffect(() => {
    const fetchGrupos = async () => {
      try {
        const response = await fetch("/grupos.json");
        if (!response.ok) {
          throw new Error("Erro ao carregar os grupos.");
        }
        const data: Grupo[] = await response.json();

        const gruposParticipando = data.filter((grupo) => grupo.participando === true);
        const gruposSugeridos = data.filter((grupo) => grupo.participando === false);

        setGruposParticipando(gruposParticipando);
        setGruposSugeridos(gruposSugeridos);
      } catch (error) {
        console.error("Erro ao carregar os grupos:", error);
      }
    };

    fetchGrupos();
  }, []);

  

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
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Comunidades que você participa</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {gruposParticipando.map((grupo) => (
                <Link key={grupo.id} href={`/comunidade/${grupo.id}`} passHref>
                  <div className="group flex flex-col items-center bg-white p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 transform transition duration-300">
                    <Image
                      src={grupo.imagem}
                      alt={grupo.nome}
                      width={120}
                      height={120}
                      className="rounded-lg"
                    />
                    <p className="mt-4 font-medium text-center text-gray-800 truncate w-full group-hover:text-blue-600">
                      {grupo.nome}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-600">Sugestões de Grupos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gruposSugeridos.map((grupo) => (
                  <div
                    key={grupo.id}
                    className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    {/* Imagem quadrada com bordas arredondadas */}
                    <div className="w-24 h-24 mb-4 overflow-hidden rounded-lg shadow">
                      <Image
                        src={grupo.imagem}
                        alt={grupo.nome}
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    {/* Detalhes do grupo */}
                    <div className="flex flex-col items-center text-center mb-4">
                      <p className="font-semibold text-lg text-gray-800 truncate">{grupo.nome}</p>
                      <p className="text-gray-600 text-sm">
                        {grupo.participantes.length} membros - {grupo.materiais.length} materiais
                      </p>
                    </div>
                    {/* Botão */}
                    <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium rounded-lg shadow hover:shadow-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300">
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
      <h1 className="text-4xl font-bold mb-10 text-center text-blue-600 drop-shadow-md">Comunidade</h1>

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

      {renderContent()}
    </div>
  );
}
