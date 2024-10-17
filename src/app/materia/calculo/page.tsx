'use client'; // Para habilitar hooks e componentes dinâmicos

import Image from 'next/image';
import User from './img/user.png';
import { useState } from 'react';

export default function Page() {
  // Controlar qual aba está selecionada (Monitores, Materiais, Testes)
  const [activeTab, setActiveTab] = useState<'monitores' | 'materiais' | 'testes'>('monitores');

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Lado esquerdo fixo */}
      <aside className="fixed top-0 left-0 w-1/2 h-full bg-white shadow-lg p-8 flex flex-col items-center justify-center">
        {/* Imagem da matéria */}
        <Image src="/materias/1.png" alt="Cálculo II" width={150} height={150} className="rounded-full" />

        {/* Nome da matéria e informações */}
        <h1 className="text-3xl font-bold mt-4">Cálculo II</h1>
        <p className="text-gray-500 text-lg">6 Monitores</p>
      </aside>

      {/* Lado direito rolável, ajustado para começar após o lado esquerdo */}
      <main className="ml-[50%] w-[50%] p-12">
        {/* Botões de navegação para "Monitores", "Materiais", "Testes" */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('monitores')}
            className={`px-6 py-2 rounded-full shadow ${
              activeTab === 'monitores' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
            } hover:bg-blue-600 transition`}
          >
            Monitores
          </button>
          <button
            onClick={() => setActiveTab('materiais')}
            className={`px-6 py-2 rounded-full shadow ${
              activeTab === 'materiais' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
            } hover:bg-blue-600 transition`}
          >
            Materiais
          </button>
          <button
            onClick={() => setActiveTab('testes')}
            className={`px-6 py-2 rounded-full shadow ${
              activeTab === 'testes' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
            } hover:bg-blue-600 transition`}
          >
            Testes
          </button>
        </div>

        {/* Conteúdo dinâmico baseado na aba selecionada */}
        <div>
          {activeTab === 'monitores' && (
            <div className="space-y-4">
              {[
                { name: "Silas Oliveira", role: "Monitor de Matemática" },
                { name: "Amon Silva", role: "Monitor de Matemática" },
                { name: "Cleide Nascimento", role: "Monitor de Matemática" },
                { name: "Josefina Silva", role: "Monitor de Matemática" },
                { name: "Maria Paula", role: "Monitor de Matemática" },
                { name: "Simone Lucas", role: "Monitor de Matemática" },
              ].map((monitor, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-b">
                  <div className="flex items-center space-x-4">
                    <Image src={User} alt={monitor.name} width={60} height={60} className="rounded-full" />
                    <div>
                      <h3 className="text-lg font-semibold">{monitor.name}</h3>
                      <p className="text-gray-500">{monitor.role}</p>
                    </div>
                  </div>
                  <span className="text-blue-500 text-lg font-bold">4.{index + 2}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'materiais' && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Materiais</h2>
              {/* Aqui você pode colocar a lista de materiais */}
              <p>Conteúdo dos materiais vai aqui.</p>
            </div>
          )}

          {activeTab === 'testes' && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Testes</h2>
              {/* Aqui você pode colocar a lista de testes */}
              <p>Conteúdo dos testes vai aqui.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
