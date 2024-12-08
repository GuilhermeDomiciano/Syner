"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaUserGraduate, FaBookOpen } from "react-icons/fa";

type Materia = {
  id: number;
  nome: string;
  imagemSrc: string;
  monitores: { name: string; role: string }[];
};

export default function HomePage() {
  const [materias, setMaterias] = useState<Materia[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMaterias = async () => {
      try {
        const response = await fetch("/materias.json");
        if (!response.ok) throw new Error("Erro ao carregar as matérias.");
        const data = await response.json();
        setMaterias(data);
      } catch (error) {
        console.error(error);
        setError(true);
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
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Barra de Pesquisa */}
      <div className="flex justify-center items-center mb-8 relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="O que quer aprender hoje?"
          className="bg-white w-full md:w-1/2 p-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
        />
        <FaSearch className="absolute right-[15%] md:right-[26.5%] text-blue-500 text-xl" />
      </div>

      {/* Título */}
      <h1 className="text-4xl font-extrabold mb-6 text-left ml-2 text-blue-600 flex items-center gap-2">
        <FaBookOpen className="text-blue-500" />
        Bem-vindo!
      </h1>

      {/* Lista de Matérias */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {filteredMaterias.map((materia) => (
          <div
            key={materia.id}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-transform duration-300 h-full"
          >
            <Link href={`/materias/${materia.id}`} passHref>
              <div className="flex justify-center items-center h-48 w-full">
                <Image
                  src={materia.imagemSrc || "/fallback.png"}
                  alt={materia.nome || "Matéria"}
                  width={120}
                  height={120}
                  className="rounded-md object-contain"
                />
              </div>
            </Link>
            <h2 className="text-lg font-semibold text-center mt-4 text-blue-800">
              {materia.nome}
            </h2>
            <div className="mt-auto flex justify-center items-center text-gray-600 text-sm gap-2 w-full border-t border-gray-300 pt-2">
              <FaUserGraduate className="text-blue-500 text-lg" />
              <span>Monitores: {materia.monitores.length}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
