'use client'; 
import { useState } from 'react';
import Image from 'next/image'; 
import Link from 'next/link';

export default function ProfilePage() {
  const [profileRating, setProfileRating] = useState(3); 

  const handleProfileRating = (value: number) => {
    setProfileRating(value);
  };

  const renderEditableStars = (rating: number, onClick: (value: number) => void) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          onClick={() => onClick(i)} 
          xmlns="http://www.w3.org/2000/svg"
          className={`h-8 w-8 cursor-pointer ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return stars;
  };

  const renderFixedStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-8 w-8 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return stars;
  };

  const [activeTab, setActiveTab] = useState<'materiais' | 'avaliacoes'>('materiais');

  return (
    <div className="min-h-screen flex ">
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
            <h1 className="text-3xl font-bold text-gray-800">Lucas Vinícius</h1>
            <p className="text-lg text-gray-500 mt-1">Engenharia de Software</p>
            <div className="flex justify-center items-center mt-4">
              <div className="flex">{renderEditableStars(profileRating, handleProfileRating)}</div>
              <span className="ml-2 text-blue-500 font-semibold text-lg">{profileRating}</span>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-4">Dados pessoais</h2>
            <ul className="space-y-2 text-left">
              <li className="text-gray-700"><strong>Nome:</strong> Lucas Vinícius</li>
              <li className="text-gray-700"><strong>Idade:</strong> 21</li>
              <li className="text-gray-700"><strong>De:</strong> Palmas, Tocantins</li>
              <li className="text-gray-700"><strong>Curso:</strong> Engenharia de Software</li>
            </ul>
          </div>

          <div className="mt-8">
            <Link href="/login">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                Sair
              </button>
            </Link>
          </div>
        </div>
      </aside>

      <div className="fixed top-0 left-1/2 h-full w-[1px] bg-gray-300"></div>

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
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2 mb-4">Materiais públicos</h2>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                  src="/icons/material.svg"
                  alt="Material Icon"
                  width={40} 
                  height={40} 
                  className="mr-2"
                  />
                  <span className="text-gray-800 font-medium ml-2">Números Decimais</span>
              </div>
              <button className="text-gray-400 hover:text-gray-600">...</button>
              </li>
              <li className="flex items-center justify-between">
              <div className="flex items-center">
                  <Image
                  src="/icons/material.svg"
                  alt="Material Icon"
                  width={40}
                  height={40}
                  className="mr-2"
                  />
                  <span className="text-gray-800 font-medium ml-2">Equação de Segundo Grau</span>
              </div>
              <button className="text-gray-400 hover:text-gray-600">...</button>
              </li>
              <li className="flex items-center justify-between">
              <div className="flex items-center">
                  <Image
                  src="/icons/material.svg"
                  alt="Material Icon"
                  width={40}
                  height={40}
                  className="mr-2"
                  />
                  <span className="text-gray-800 font-medium ml-2">Limites e Integradas</span>
              </div>
              <button className="text-gray-400 hover:text-gray-600">...</button>
              </li>
              <li className="flex items-center justify-between">
              <div className="flex items-center">
                  <Image
                  src="/icons/material.svg"
                  alt="Material Icon"
                  width={40}
                  height={40}
                  className="mr-2"
                  />
                  <span className="text-gray-800 font-medium ml-2">Notação Científica</span>
              </div>
              <button className="text-gray-400 hover:text-gray-600">...</button>
              </li>
              <li className="flex items-center justify-between">
              <div className="flex items-center">
                  <Image
                  src="/icons/material.svg"
                  alt="Material Icon"
                  width={40}
                  height={40}
                  className="mr-2"
                  />
                  <span className="text-gray-800 font-medium ml-2">Álgebra Linear</span>
              </div>
              <button className="text-gray-400 hover:text-gray-600">...</button>
              </li>
              <li className="flex items-center justify-between">
              <div className="flex items-center">
                  <Image
                  src="/icons/material.svg"
                  alt="Material Icon"
                  width={40}
                  height={40}
                  className="mr-2"
                  />
                  <span className="text-gray-800 font-medium ml-2">Cálculo Diferencial</span>
              </div>
              <button className="text-gray-400 hover:text-gray-600">...</button>
              </li>
              <li className="flex items-center justify-between">
              <div className="flex items-center">
                  <Image
                  src="/icons/material.svg"
                  alt="Material Icon"
                  width={40}
                  height={40}
                  className="mr-2"
                  />
                  <span className="text-gray-800 font-medium ml-2">Geometria Analítica</span>
              </div>
              <button className="text-gray-400 hover:text-gray-600">...</button>
              </li>
              <li className="flex items-center justify-between">
              <div className="flex items-center">
                  <Image
                  src="/icons/material.svg"
                  alt="Material Icon"
                  width={40}
                  height={40}
                  className="mr-2"
                  />
                  <span className="text-gray-800 font-medium ml-2">Estatística Básica</span>
              </div>
              <button className="text-gray-400 hover:text-gray-600">...</button>
              </li>
            </ul>
          </div>
          )}

          {activeTab === 'avaliacoes' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Avaliações</h2>
              <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                <div className="flex items-center mb-2">
                  <div className="rounded-full bg-gray-300 w-10 h-10 overflow-hidden shadow-md">
                    <Image
                      src="/fotos/Monica.jpg" 
                      alt="Monica Nascimento"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-2">
                    <h3 className="font-semibold text-gray-800">Monica Nascimento</h3>
                    <div className="flex">{renderFixedStars(3)}</div>
                  </div>
                </div>
                <p className="text-gray-600">Gostei das explicações, mas demora a responder.</p>
                <p className="text-gray-400 text-sm mt-2">Avaliado em 22 de janeiro de 2023</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                <div className="flex items-center mb-2">
                  <div className="rounded-full bg-gray-300 w-10 h-10 overflow-hidden shadow-md">
                    <Image
                      src="/fotos/Carlos.jpg" 
                      alt="Carlos Eduardo"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-2">
                    <h3 className="font-semibold text-gray-800">Carlos Eduardo</h3>
                    <div className="flex">{renderFixedStars(4)}</div>
                  </div>
                </div>
                <p className="text-gray-600">Esse cara me ajudou bastante na minha prova.</p>
                <p className="text-gray-400 text-sm mt-2">Avaliado em 13 de fevereiro de 2023</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
