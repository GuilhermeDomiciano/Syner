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

  if (!materia) return <p>Carregando...</p>;

  const handleViewAll = (section: string) => {
    router.push(`/materias/${materia.id}/${section}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      {/* Cabeçalho */}
      <header className="w-full max-w-6xl p-6 bg-white rounded-lg shadow-lg flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-6">
          <Image
            src={materia.imagemSrc || "/icons/fallback.png"}
            alt={materia.nome || "Imagem da Matéria"}
            width={150}
            height={150}
            className="rounded-full"
          />
          <div>
            <h1 className="text-5xl font-bold text-gray-800">{materia.nome}</h1>
            <p className="text-2xl text-gray-600 mt-4">
              {materia.monitores?.length || 0} monitores disponíveis
            </p>
          </div>
        </div>
      </header>

      {/* Conteúdo Dinâmico */}
      <main className="w-full max-w-6xl flex-1 mt-8 bg-white rounded-lg shadow-lg p-8 space-y-12">
        {/* Seção de Monitores */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Monitores</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materia.monitores.slice(0, 6).map((monitor) => (
              <li
                key={monitor.id}
                className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <button
                  onClick={() => router.push(`/monitores/${monitor.id}`)}
                  className="hover:opacity-80"
                >
                  <Image
                    src={monitor.img || "/icons/monitor.png"}
                    alt={monitor.name || "Monitor"}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </button>
                <button
                  onClick={() => router.push(`/monitores/${monitor.id}`)}
                  className="text-center mt-4 hover:underline"
                >
                  <p className="text-xl font-semibold">{monitor.name}</p>
                  <p className="text-gray-500 text-sm">{monitor.role}</p>
                </button>
                <div className="flex items-center gap-4 mt-4">
                  <span className="text-blue-600 font-bold text-xl">
                    {monitor.nota?.toFixed(1) || "N/A"}
                  </span>
                  <button
                    onClick={() => router.push(`/monitores/${monitor.id}`)}
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm shadow-md hover:bg-blue-700 transition"
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

        {/* Seção de Materiais */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Materiais</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {materia.materiais.slice(0, 6).map((material, index) => (
              <li
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <p className="text-xl font-semibold text-gray-800">{material.titulo}</p>
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

        {/* Seção de Testes */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Testes</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {materia.testes.slice(0, 6).map((teste, index) => (
              <li
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <p className="text-xl font-semibold text-gray-800">{teste.titulo}</p>
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
