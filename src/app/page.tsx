'use client'; 

import Image from 'next/image'; 
import Link from 'next/link'; 
import { useState } from 'react'; 
import Footer from './components/Footer'; 

export default function HomePage() {
  
  const materias = [
    { id: 1, nome: 'Cálculo II', monitores: 300, imagemSrc: '/materias/1.png', link: '/materia/calculo' },
    { id: 2, nome: 'Bioquimica Lab.', monitores: 4, imagemSrc: '/materias/2.png', link: '/materia/calculo' },
    { id: 3, nome: 'Fund. IA', monitores: 2, imagemSrc: '/materias/3.png', link: '/materia/calculo' },
    { id: 4, nome: 'Python', monitores: 5, imagemSrc: '/materias/4.png', link: '/materia/calculo' },
    { id: 5, nome: 'Lógica de Predicados', monitores: 3, imagemSrc: '/materias/5.png', link: '/materia/calculo' },
    { id: 6, nome: 'Física', monitores: 4, imagemSrc: '/materias/6.png', link: '/materia/calculo' },
    { id: 7, nome: 'JavaScript', monitores: 3, imagemSrc: '/materias/7.png', link: '/materia/calculo' },
    { id: 8, nome: 'Estrutura de dados', monitores: 2, imagemSrc: '/materias/8.png', link: '/materia/calculo' },
    { id: 9, nome: 'Química ', monitores: 2, imagemSrc: '/materias/9.png', link: '/materia/calculo' },
    { id: 10, nome: 'História', monitores: 2, imagemSrc: '/materias/10.png', link: '/materia/calculo' },
    { id: 11, nome: 'Inglês', monitores: 2, imagemSrc: '/materias/11.png', link: '/materia/calculo' },
    { id: 12, nome: 'Espanhol', monitores: 2, imagemSrc: '/materias/12.png', link: '/materia/calculo' },
    { id: 13, nome: 'Direito Penal', monitores: 2, imagemSrc: '/materias/13.png', link: '/materia/calculo' },
    { id: 14, nome: 'Fund. Pisicologia', monitores: 2, imagemSrc: '/materias/14.png', link: '/materia/calculo' },
    { id: 15, nome: 'Contabilidade', monitores: 2, imagemSrc: '/materias/15.png', link: '/materia/calculo' },
    { id: 16, nome: 'Farmacologia', monitores: 2, imagemSrc: '/materias/16.png', link: '/materia/calculo' },
    { id: 17, nome: 'Redação', monitores: 2, imagemSrc: '/materias/17.png', link: '/materia/calculo' },
    { id: 18, nome: 'Geografia', monitores: 2, imagemSrc: '/materias/18.png', link: '/materia/calculo' },  
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };


  const filteredMaterias = materias.filter((materia) =>
    materia.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const userName = "const userName"; 

  return (
    <div className="min-h-screen p-8 ">
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="O que quer aprender hoje?"
          className="bg-white w-full md:w-1/2 p-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
        />
      </div>


      <h1 className="text-3xl font-bold mb-6 text-left ml-2 text-blue-600">Olá, {userName}!</h1>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {filteredMaterias.map((materia) => (
          <div key={materia.id}>
            <Link href={materia.link} passHref>
              <button className="bg-white p-6 rounded-3xl shadow-lg text-center hover:shadow-xl hover:scale-105 transform transition-transform duration-300">
                <Image
                  src={materia.imagemSrc}
                  alt={materia.nome}
                  width={150}
                  height={150}
                  className="rounded-md object-cover mx-auto"
                />
              </button>
            </Link>

            <h2 className="text-lg font-semibold text-center mt-4 text-blue-800">{materia.nome}</h2>

            <p className="text-gray-600 text-center">Monitores: {materia.monitores}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
