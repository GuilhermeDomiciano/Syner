"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

type Monitor = {
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
  const { id } = useParams() as { id: string };
  const [materia, setMateria] = useState<Materia | null>(null);
  const router = useRouter();

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

  if (!materia) return <p className="text-center mt-12">Carregando...</p>;

  const handleViewAll = (section: string) => {
    router.push(`/materias/${materia.id}/${section}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 text-gray-800">
      {/* Cabeçalho */}
      <header className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
          <Image
            src={materia.imagemSrc || "/icons/fallback.png"}
            alt={materia.nome || "Imagem da Matéria"}
            width={150}
            height={150}
            className="rounded-full shadow-md border-4 border-white"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">{materia.nome}</h1>
            <p className="text-lg mt-4">
              {materia.monitores?.length || 0} monitores disponíveis
            </p>
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="max-w-6xl mx-auto mt-8 space-y-12 px-6">
        {/* Monitores */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Monitores</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {materia.monitores.slice(0, 6).map((monitor) => (
              <li
                key={monitor.id}
                className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition"
              >
                <div
                  onClick={() => router.push(`/monitores/${monitor.id}`)}
                  className="cursor-pointer text-center"
                >
                  <Image
                    src={monitor.img || "/icons/monitor.png"}
                    alt={monitor.name || "Monitor"}
                    width={80}
                    height={80}
                    className="rounded-full mx-auto"
                  />
                  <h3 className="mt-4 text-xl font-bold">{monitor.name}</h3>
                  <p className="text-sm text-gray-500">{monitor.role}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-blue-600 font-bold text-lg">
                    {monitor.nota?.toFixed(1) || "N/A"}
                  </span>
                  <button
                    onClick={() => router.push(`/monitores/${monitor.id}`)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
                  >
                    Ver Perfil
                  </button>
                </div>
              </li>
            ))}
          </ul>
          {materia.monitores.length > 6 && (
            <button
              onClick={() => handleViewAll("monitores")}
              className="mt-4 text-blue-600 hover:underline"
            >
              Ver todos
            </button>
          )}
        </section>

        {/* Materiais */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Materiais</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {materia.materiais.slice(0, 6).map((material, index) => (
              <li
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold">{material.titulo}</h3>
                <p className="text-sm text-gray-600 mt-2">Por {material.monitor}</p>
              </li>
            ))}
          </ul>
          {materia.materiais.length > 6 && (
            <button
              onClick={() => handleViewAll("materiais")}
              className="mt-4 text-blue-600 hover:underline"
            >
              Ver todos
            </button>
          )}
        </section>

        {/* Testes */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Testes</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {materia.testes.slice(0, 6).map((teste, index) => (
              <li
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold">{teste.titulo}</h3>
                <p className="text-sm text-gray-600 mt-2">Por {teste.monitor}</p>
              </li>
            ))}
          </ul>
          {materia.testes.length > 6 && (
            <button
              onClick={() => handleViewAll("testes")}
              className="mt-4 text-blue-600 hover:underline"
            >
              Ver todos
            </button>
          )}
        </section>
      </main>
    </div>
  );
}
