'use client'; // Necessário para habilitar o uso de hooks e componentes dinâmicos

import Image from 'next/image'; // Importar imagem do Next.js
import { useState } from 'react'; // Importar o estado para controlar os cards

export default function HomePage() {
  // Exemplo de dados das matérias
  const materias = [
    { id: 1, nome: 'Cálculo II', monitores: 3, imagemSrc: '/materias/1.png' },
    { id: 2, nome: 'Bioquimica Lab.', monitores: 4, imagemSrc: '/materias/2.png' },
    { id: 3, nome: 'Fund. IA', monitores: 2, imagemSrc: '/materias/3.png' },
    { id: 4, nome: 'Python', monitores: 5, imagemSrc: '/materias/4.png' },
    { id: 5, nome: 'Lógica de Predicados', monitores: 3, imagemSrc: '/materias/5.png' },
    { id: 6, nome: 'Física', monitores: 4, imagemSrc: '/materias/6.png' },
    { id: 7, nome: 'JavaScript', monitores: 3, imagemSrc: '/materias/7.png' },
    { id: 8, nome: 'Estrutura de dados', monitores: 2, imagemSrc: '/materias/8.png' },
    { id: 9, nome: 'Química ', monitores: 2, imagemSrc: '/materias/9.png' },
    { id: 10, nome: 'História', monitores: 2, imagemSrc: '/materias/10.png' },
    { id: 11, nome: 'Inglês', monitores: 2, imagemSrc: '/materias/11.png' },
    { id: 12, nome: 'Espanhol', monitores: 2, imagemSrc: '/materias/12.png' },
    { id: 13, nome: 'Direito Penal', monitores: 2, imagemSrc: '/materias/13.png' },
    { id: 14, nome: 'Fund. Pisicologia', monitores: 2, imagemSrc: '/materias/14.png' },
    { id: 15, nome: 'Contabilidade', monitores: 2, imagemSrc: '/materias/15.png' },
    { id: 16, nome: 'Farmacologia', monitores: 2, imagemSrc: '/materias/16.png' },
    { id: 17, nome: 'Redação', monitores: 2, imagemSrc: '/materias/17.png' },
    { id: 18, nome: 'Geografia', monitores: 2, imagemSrc: '/materias/18.png' },
    // Continue adicionando mais matérias conforme necessário
  ];

  // Estado para armazenar o termo de busca
  const [searchTerm, setSearchTerm] = useState('');

  // Função para lidar com a mudança no campo de pesquisa
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Filtrar as matérias com base no termo de pesquisa
  const filteredMaterias = materias.filter((materia) =>
    materia.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      {/* Barra de pesquisa */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="O que quer aprender hoje?"
          className="bg-[#D8DCFF] w-full md:w-1/2 p-4 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
        />
      </div>

      {/* Título das monitorias alinhado à esquerda */}
      <h1 className="text-2xl font-semibold mb-6 text-left ml-2">Olá, Var String name</h1>

      {/* Grid de matérias */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-6">
        {filteredMaterias.map((materia) => (
          <div key={materia.id}>
            {/* Imagem como botão */}
            <button className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <Image
                src={materia.imagemSrc}
                alt={materia.nome}
                width={150}
                height={150}
                className="rounded-md object-cover mx-auto"
              />
            </button>

            {/* Nome da matéria */}
            <h2 className="text-lg font-semibold text-center mt-2">{materia.nome}</h2>

            {/* Quantidade de monitores */}
            <p className="text-gray-500 text-center">Monitores: {materia.monitores}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
