'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MateriaPage() {
  const [materias, setMaterias] = useState([]);
  const [activeTab, setActiveTab] = useState<'monitores' | 'materiais' | 'testes'>('monitores');
  const [selectedMateria, setSelectedMateria] = useState(null);

  useEffect(() => {
    fetch('/materias.json')
      .then((response) => response.json())
      .then((data) => setMaterias(data));
  }, []);

  const handleTabChange = (tab: 'monitores' | 'materiais' | 'testes') => {
    setActiveTab(tab);
  };

  const handleMateriaClick = (materia) => {
    setSelectedMateria(materia);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-1/3 lg:w-1/4 p-8 flex flex-col items-center justify-center bg-gray-100">
        {selectedMateria ? (
          <>
            <Image src={selectedMateria.imagemSrc} alt={selectedMateria.nome} width={150} height={150} className="rounded-full" />
            <h1 className="text-3xl font-bold mt-4">{selectedMateria.nome}</h1>
            <p className="text-gray-500 text-lg">Monitores: {selectedMateria.monitores.length}</p>
          </>
        ) : (
          <p className="text-lg text-gray-500">Selecione uma matéria para visualizar mais detalhes</p>
        )}
      </aside>

      {/* Divider */}
      <div className="md:hidden h-[1px] bg-gray-300 w-full" />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Bem-vindo!</h1>

        {/* Materia List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {materias.map((materia) => (
            <div key={materia.id} className="group relative">
              <Link href={`/materia/${materia.slug}`} passHref>
                <div
                  onClick={() => handleMateriaClick(materia)}
                  className="bg-white p-6 rounded-3xl shadow-lg text-center hover:shadow-xl hover:scale-105 transform transition-transform duration-300"
                >
                  <Image
                    src={materia.imagemSrc}
                    alt={materia.nome}
                    width={150}
                    height={150}
                    className="rounded-md object-cover mx-auto"
                  />
                </div>
              </Link>
              <h2 className="text-lg font-semibold text-center mt-4 text-blue-800">{materia.nome}</h2>
              <p className="text-gray-600 text-center">Monitores: {materia.monitores.length}</p>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        {selectedMateria && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => handleTabChange('monitores')}
              className={`px-6 py-2 rounded-full shadow ${activeTab === 'monitores' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'} hover:bg-blue-600 transition`}
            >
              Monitores
            </button>
            <button
              onClick={() => handleTabChange('materiais')}
              className={`px-6 py-2 rounded-full shadow ${activeTab === 'materiais' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'} hover:bg-blue-600 transition`}
            >
              Materiais
            </button>
            <button
              onClick={() => handleTabChange('testes')}
              className={`px-6 py-2 rounded-full shadow ${activeTab === 'testes' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'} hover:bg-blue-600 transition`}
            >
              Testes
            </button>
          </div>
        )}

        {/* Tab Content */}
        {selectedMateria && (
          <div className="mt-8">
            {activeTab === 'monitores' && (
              <div className="space-y-4">
                {selectedMateria.monitores.map((monitor, index) => (
                  <div key={index} className="flex items-center justify-between py-4 border-b">
                    <div className="flex items-center space-x-4">
                      <Image src="/img/user.png" alt={monitor.name} width={60} height={60} className="rounded-full" />
                      <div>
                        <h3 className="text-lg font-semibold">{monitor.name}</h3>
                        <p className="text-gray-500">{monitor.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'materiais' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Materiais</h2>
                <ul>
                  {selectedMateria.materiais.map((material, index) => (
                    <li key={index} className="text-gray-700">{material}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'testes' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Testes</h2>
                <ul>
                  {selectedMateria.testes.map((teste, index) => (
                    <li key={index} className="text-gray-700">{teste}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
