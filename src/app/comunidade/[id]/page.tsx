"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

type Participante = {
  id: number;
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
  participantes: Participante[];
  materiais: Material[];
};

export default function GrupoPage() {
  const { id } = useParams() as { id: string };
  const [grupo, setGrupo] = useState<Grupo | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchGrupos = async () => {
      try {
        const response = await fetch("/grupos.json");
        if (!response.ok) throw new Error("Erro ao carregar os grupos.");
        const grupos: Grupo[] = await response.json();
        const selectedGrupo = grupos.find((g) => g.id === parseInt(id));
        setGrupo(selectedGrupo || null);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGrupos();
  }, [id]);

  if (!grupo) return <p className="text-center mt-12">Carregando...</p>;

  const handleViewAll = (section: string) => {
    router.push(`/comunidade/${grupo.id}/${section}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 text-gray-800">
      {/* Cabeçalho */}
      <header className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
          <Image
            src={grupo.imagem || "/icons/fallback.png"}
            alt={grupo.nome || "Imagem do Grupo"}
            width={150}
            height={150}
            className="rounded-full shadow-md border-4 border-white"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">{grupo.nome}</h1>
            <p className="text-lg mt-4">
              {grupo.participantes?.length || 0} participantes
            </p>
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="max-w-6xl mx-auto mt-8 space-y-12 px-6">
        {/* Participantes */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 border-b-4 border-blue-600 pb-2">
            Participantes
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {grupo.participantes.slice(0, 6).map((participante) => (
              <li
                key={participante.id}
                className="p-6 bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-lg transform hover:-translate-y-2 transition duration-300"
              >
                <div
                  onClick={() => router.push(`/participantes/${participante.id}`)}
                  className="cursor-pointer text-center"
                >
                  <Image
                    src={participante.img || "/icons/user.png"}
                    alt={participante.name || "Participante"}
                    width={100}
                    height={100}
                    className="rounded-full mx-auto border-4 border-blue-200 shadow-md"
                  />
                  <h3 className="mt-4 text-xl font-bold text-gray-800">{participante.name}</h3>
                  <p className="text-sm text-gray-500 italic">{participante.role}</p>
                </div>
                <div className="flex justify-between items-center mt-4 bg-blue-100 p-3 rounded-lg">
                  <span className="text-blue-800 font-bold text-lg">
                    {participante.nota?.toFixed(1) || "N/A"}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          {grupo.participantes.length > 6 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => handleViewAll("participantes")}
                className="text-blue-600 font-semibold hover:text-blue-800 transition"
              >
                Ver todos
              </button>
            </div>
          )}
        </section>

        {/* Materiais */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 border-b-4 border-blue-600">
            Materiais
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {grupo.materiais.slice(0, 6).map((material, index) => (
              <li
                key={index}
                className="relative p-6 bg-gradient-to-r from-blue-100 to-white rounded-xl shadow-lg hover:shadow-2xl transition group"
              >
                <div className="absolute top-4 right-4 text-blue-600 text-2xl group-hover:scale-125 transition-transform">
                  📘
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-700">
                  {material.titulo}
                </h3>
                <p className="text-sm text-gray-700 mt-3">
                  Por <span className="font-medium">{material.monitor}</span>
                </p>
                <button
                  className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
                >
                  Ver mais
                </button>
              </li>
            ))}
          </ul>
          {grupo.materiais.length > 6 && (
            <button
              onClick={() => handleViewAll("materiais")}
              className="mt-6 block text-center text-blue-600 hover:underline font-medium"
            >
              Ver todos os materiais
            </button>
          )}
        </section>
      </main>
    </div>
  );
}
