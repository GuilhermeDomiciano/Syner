"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type Materia = {
  id: number;
  nome: string;
  imagemSrc: string;
  monitores: { name: string; role: string }[];
};

export default function HomePage() {
  const [materias, setMaterias] = useState<Materia[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(false); // Para lidar com erros de carregamento

  useEffect(() => {
    const fetchMaterias = async () => {
      try {
        const response = await fetch("/materias.json");
        if (!response.ok) throw new Error("Erro ao carregar as matérias.");
        const data = await response.json();
        setMaterias(data);
      } catch (error) {
        console.error(error);
        setError(true); // Marcar erro como verdadeiro
      }
    };

    fetchMaterias();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredMaterias = materias.filter((materia) =>
    materia.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-600">
          Erro ao carregar as matérias. Tente novamente mais tarde.
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="O que quer aprender hoje?"
          className="bg-white w-full md:w-1/2 p-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
        />
      </div>

      <h1 className="text-3xl font-bold mb-6 text-left ml-2 text-blue-600">
        Bem-vindo!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {filteredMaterias.map((materia) => (
          <div key={materia.id}>
            <Link href={`/materias/${materia.id}`} passHref>
              <div className="bg-white p-6 rounded-3xl shadow-lg text-center hover:shadow-xl hover:scale-105 transform transition-transform duration-300 cursor-pointer">
                <Image
                  src={materia.imagemSrc || "/fallback.png"} // Adicionado fallback
                  alt={materia.nome || "Matéria"}
                  width={150}
                  height={150}
                  className="rounded-md object-cover mx-auto"
                />
              </div>
            </Link>
            <h2 className="text-lg font-semibold text-center mt-4 text-blue-800">
              {materia.nome}
            </h2>
            <p className="text-gray-600 text-center">
              Monitores: {materia.monitores.length}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
