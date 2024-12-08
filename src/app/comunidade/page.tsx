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

type Grupo = {
  id: number;
  nome: string;
  imagem: string;
  participando: boolean;
  participantes: Participante[];
  materiais: Material[];
};

type Video = {
  id: number;
  titulo: string;
  duracao: string;
  link: string;
  imagem: string;
  tema: string;
  publicadoPor: string;
  visualizacoes: number;
};

type Material = {
  id: number;
  nome: string;
  autor: string;
  tema: string;
  link: string;
};

export default function ComunidadePage() {
  const [activeTab, setActiveTab] = useState<string>("grupos");
  const [gruposParticipando, setGruposParticipando] = useState<Grupo[]>([]);
  const [gruposSugeridos, setGruposSugeridos] = useState<Grupo[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [materiais, setMateriais] = useState<Material[]>([]);


  const normalizeText = (text: string): string =>
    text
      .normalize("NFD") 
      .replace(/[\u0300-\u036f]/g, "") 
      .replace(/[^\w\s]/gi, "") 
      .toLowerCase(); 
  
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMateriais = materiais.filter((material) => {
    const normalizedSearchTerm = normalizeText(searchTerm);
    return (
      normalizeText(material.nome).includes(normalizedSearchTerm) ||
      normalizeText(material.tema).includes(normalizedSearchTerm) ||
      normalizeText(material.autor).includes(normalizedSearchTerm)
    );
  });

  const filteredVideos = videos.filter((video) =>
    `${video.titulo} ${video.publicadoPor} ${video.tema}`
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(searchTerm.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
  );
  

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

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/videos.json");
        if (!response.ok) {
          throw new Error("Erro ao carregar os vídeos.");
        }
        const data: Video[] = await response.json();
        setVideos(data);
      } catch (error) {
        console.error("Erro ao carregar os vídeos:", error);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    const fetchMateriais = async () => {
      try {
        const response = await fetch("/materiais.json"); 
        if (!response.ok) {
          throw new Error("Erro ao carregar os materiais.");
        }
        const data: Material[] = await response.json();
        setMateriais(data);
      } catch (error) {
        console.error("Erro ao carregar os materiais:", error);
      }
    };

    fetchMateriais();
  }, []);

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
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Seus Grupos</h2>
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
              
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Pesquisar"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 placeholder-gray-400"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gruposSugeridos
                  .filter((grupo) =>
                    grupo.nome
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .includes(searchTerm.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
                  )
                  .map((grupo) => (
                    <div
                      key={grupo.id}
                      className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                      <div className="w-24 h-24 mb-4 overflow-hidden rounded-lg shadow">
                        <Image
                          src={grupo.imagem}
                          alt={grupo.nome}
                          width={96}
                          height={96}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center text-center mb-4">
                        <p className="font-semibold text-lg text-gray-800 truncate">{grupo.nome}</p>
                        <p className="text-gray-600 text-sm">
                          {grupo.participantes.length} membros - {grupo.materiais.length} materiais
                        </p>
                      </div>
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
              <h2 className="text-3xl font-bold mb-6 text-blue-600">Vídeos Recomendados</h2>
        
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Pesquisar"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 placeholder-gray-400"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
              </div>
        
              <div className="space-y-12">
                {Array.from(new Set(filteredVideos.map((video) => video.tema))).map((tema, index) => {
                  const videosDoTema = filteredVideos.filter((video) => video.tema === tema);
        
                  const lotesDeVideos = [];
                  for (let i = 0; i < videosDoTema.length; i += 3) {
                    lotesDeVideos.push(videosDoTema.slice(i, i + 3));
                  }
        
                  return lotesDeVideos.map((lote, loteIndex) => (
                    <div key={`${tema}-${loteIndex}`}>
                      <h3 className="text-2xl font-semibold mb-4 text-blue-500">{tema}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {lote.map((video) => (
                          <div
                            key={video.id}
                            className="flex flex-col bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
                          >
                            <Link href={video.link} target="_blank" rel="noopener noreferrer">
                              <div className="w-full overflow-hidden rounded-t-lg">
                                <img
                                  src={video.imagem}
                                  alt={video.titulo}
                                  className="w-full h-auto"
                                />
                              </div>
                            </Link>
                            <div className="p-4">
                              <h3 className="font-semibold text-sm text-gray-800">{video.titulo}</h3>
                              <p className="text-xs text-gray-500 mt-1">{video.publicadoPor}</p>
                              <p className="text-xs text-gray-400">
                                {video.visualizacoes} visualizações
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ));
                })}
              </div>
            </>
          );
        

        case "materiais":
          return (
            <>
              <h2 className="text-3xl font-bold mb-6 text-blue-600">Materiais Disponíveis</h2>
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Pesquisar"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 placeholder-gray-400"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
              </div>
              <div className="space-y-12">
                {Array.from(new Set(filteredMateriais.map((material) => material.tema))).map((tema) => (
                  <div key={tema}>
                    <h3 className="text-xl font-bold mb-4 text-blue-600">{tema}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredMateriais
                        .filter((material) => material.tema === tema)
                        .map((material) => (
                          <div
                            key={material.id}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
                          >
                            <p className="font-bold text-gray-800 text-lg">{material.nome}</p>
                            <p className="text-sm text-gray-600 mt-2">Por: {material.autor}</p>
                            <div className="mt-4 flex justify-center">
                              <a
                                href={material.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg shadow hover:bg-blue-600 transition"
                              >
                                Baixar Material
                              </a>
                            </div>
                          </div>
                        ))}
                    </div>
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
          {["grupos", "videos", "materiais"].map((tab) => (
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
