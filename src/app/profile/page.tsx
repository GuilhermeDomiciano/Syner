'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'materiais' | 'avaliacoes'>('materiais');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    nome: 'Lucas Vinícius',
    idade: 21,
    local: 'Palmas, Tocantins',
    curso: 'Engenharia de Software',
    perfilPublico: true,
    materiaisPublicos: true,
    comentariosPublicos: true,
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-8 w-8 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ));
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 w-1/2 h-full p-8 flex flex-col items-center justify-center bg-white shadow-lg">
        <div className="w-full max-w-md text-center">
          <div className="relative w-full h-24 bg-gradient-to-r from-blue-500 to-blue-500 rounded-t-lg flex justify-center items-center">
            <div className="absolute -bottom-12 w-32 h-32 rounded-full border-4 border-white bg-gray-300 overflow-hidden shadow-md">
              <Image
                src="/fotos/lucas.jpg"
                alt="Profile Image"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="mt-20">
            <h1 className="text-3xl font-bold text-gray-800">{profileData.nome}</h1>
            <p className="text-lg text-gray-500 mt-1">{profileData.curso}</p>
            <div className="flex justify-center items-center mt-4">
              <div className="flex">{renderStars(3)}</div>
              <span className="ml-2 text-blue-500 font-semibold text-lg">3</span>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-4">Dados pessoais</h2>
            <ul className="space-y-2 text-left">
              <li className="text-gray-700"><strong>Nome:</strong> {profileData.nome}</li>
              <li className="text-gray-700"><strong>Idade:</strong> {profileData.idade}</li>
              <li className="text-gray-700"><strong>De:</strong> {profileData.local}</li>
              <li className="text-gray-700"><strong>Curso:</strong> {profileData.curso}</li>
            </ul>
          </div>

          <div className="mt-8 space-y-4">
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Editar Perfil
            </button>
            <Link href="/login">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                Sair
              </button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Vertical Divider */}
      <div className="fixed top-0 left-1/2 h-full w-[1px] bg-gray-300"></div>

      {/* Main Content */}
      <main className="ml-[50%] w-[50%] p-12">
        <div className="flex space-x-4 mb-8 justify-center">
          <button
            onClick={() => setActiveTab('materiais')}
            className={`px-6 py-2 rounded-full shadow-lg ${
              activeTab === 'materiais' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
            } hover:bg-blue-600 transition`}
          >
            Materiais
          </button>
          <button
            onClick={() => setActiveTab('avaliacoes')}
            className={`px-6 py-2 rounded-full shadow-lg ${
              activeTab === 'avaliacoes' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
            } hover:bg-blue-600 transition`}
          >
            Avaliações
          </button>
        </div>

        <div>
          {activeTab === 'materiais' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2 mb-4">Materiais públicos</h2>
              <ul className="space-y-4">
                {[
                  'Números Decimais',
                  'Equação de Segundo Grau',
                  'Limites e Integradas',
                  'Notação Científica',
                  'Álgebra Linear',
                  'Cálculo Diferencial',
                  'Geometria Analítica',
                  'Estatística Básica',
                ].map((material) => (
                  <li key={material} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image
                        src="/icons/material.svg"
                        alt="Material Icon"
                        width={40}
                        height={40}
                      />
                      <span className="text-gray-800 font-medium ml-2">{material}</span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">...</button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'avaliacoes' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Avaliações</h2>
              {[
                {
                  nome: 'Monica Nascimento',
                  rating: 3,
                  texto: 'Gostei das explicações, mas demora a responder.',
                  data: '22 de janeiro de 2023',
                  foto: '/fotos/Monica.jpg',
                },
                {
                  nome: 'Carlos Eduardo',
                  rating: 4,
                  texto: 'Esse cara me ajudou bastante na minha prova.',
                  data: '13 de fevereiro de 2023',
                  foto: '/fotos/Carlos.jpg',
                },
              ].map((avaliacao) => (
                <div key={avaliacao.nome} className="bg-gray-100 p-4 rounded-lg shadow-lg">
                  <div className="flex items-center mb-2">
                    <div className="rounded-full bg-gray-300 w-10 h-10 overflow-hidden shadow-md">
                      <Image
                        src={avaliacao.foto}
                        alt={avaliacao.nome}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-2">
                      <h3 className="font-semibold text-gray-800">{avaliacao.nome}</h3>
                      <div className="flex">{renderStars(avaliacao.rating)}</div>
                    </div>
                  </div>
                  <p className="text-gray-600">{avaliacao.texto}</p>
                  <p className="text-gray-400 text-sm mt-2">Avaliado em {avaliacao.data}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gradient-to-b from-blue-500 to-blue-400 text-white p-8 rounded-lg shadow-lg w-[90%] max-w-md">
            <h2 className="text-xl font-semibold mb-4">Editar Perfil</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsEditModalOpen(false);
              }}
              className="space-y-6"
            >
              {/* Inputs */}
              <div>
                <label className="block text-sm font-medium">Nome</label>
                <input
                  type="text"
                  value={profileData.nome}
                  onChange={(e) =>
                    setProfileData((prev) => ({ ...prev, nome: e.target.value }))
                  }
                  className="mt-1 p-2 border rounded w-full text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Idade</label>
                <input
                  type="number"
                  value={profileData.idade}
                  onChange={(e) =>
                    setProfileData((prev) => ({ ...prev, idade: parseInt(e.target.value, 10) }))
                  }
                  className="mt-1 p-2 border rounded w-full text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">De</label>
                <input
                  type="text"
                  value={profileData.local}
                  onChange={(e) =>
                    setProfileData((prev) => ({ ...prev, local: e.target.value }))
                  }
                  className="mt-1 p-2 border rounded w-full text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Curso</label>
                <input
                  type="text"
                  value={profileData.curso}
                  onChange={(e) =>
                    setProfileData((prev) => ({ ...prev, curso: e.target.value }))
                  }
                  className="mt-1 p-2 border rounded w-full text-black"
                />
              </div>

              {/* Toggles */}
              <div>
                <label className="flex items-center justify-between">
                  <span>Perfil Público</span>
                  <div
                    className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                      profileData.perfilPublico ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    onClick={() =>
                      setProfileData((prev) => ({
                        ...prev,
                        perfilPublico: !prev.perfilPublico,
                      }))
                    }
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ${
                        profileData.perfilPublico ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
              <div>
                <label className="flex items-center justify-between">
                  <span>Materiais Públicos</span>
                  <div
                    className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                      profileData.materiaisPublicos ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    onClick={() =>
                      setProfileData((prev) => ({
                        ...prev,
                        materiaisPublicos: !prev.materiaisPublicos,
                      }))
                    }
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ${
                        profileData.materiaisPublicos ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
              <div>
                <label className="flex items-center justify-between">
                  <span>Comentários Públicos</span>
                  <div
                    className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                      profileData.comentariosPublicos ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    onClick={() =>
                      setProfileData((prev) => ({
                        ...prev,
                        comentariosPublicos: !prev.comentariosPublicos,
                      }))
                    }
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ${
                        profileData.comentariosPublicos ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    ></div>
                  </div>
                </label>
              </div>

              {/* Buttons */}
              <div className="flex justify-between space-x-4">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="bg-gray-300 py-2 px-4 rounded text-black hover:bg-gray-400 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 py-2 px-4 rounded text-white hover:bg-blue-700 transition"
                >
                  Salvar
                </button>
                <a href='/login'>
                  <button
                    type="button"
                    className="bg-red-500 py-2 px-4 rounded text-white hover:bg-red-600 transition"
                    onClick={() => alert('Conta excluída!')}
                  >
                    Excluir Conta
                  </button>
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
