// src/app/profile/page.tsx

'use client'; // Para habilitar componentes dinâmicos com Next.js

import { useState } from 'react';
import Image from 'next/image'; // Importa o componente de imagem do Next.js
import Link from 'next/link';

export default function ProfilePage() {
  // Estado para armazenar a avaliação do perfil do usuário
  const [profileRating, setProfileRating] = useState(3); // Valor inicial de avaliação do perfil

  // Função para lidar com a seleção de estrelas no perfil
  const handleProfileRating = (value: number) => {
    setProfileRating(value);
  };

  // Função para renderizar estrelas editáveis (cheias e vazias) para o perfil
  const renderEditableStars = (rating: number, onClick: (value: number) => void) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          onClick={() => onClick(i)} // Clique para definir a avaliação
          xmlns="http://www.w3.org/2000/svg"
          className={`h-8 w-8 cursor-pointer ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return stars;
  };

  // Função para renderizar estrelas fixas (sem clique) nas avaliações
  const renderFixedStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-8 w-8 ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex">
      {/* Lado esquerdo: Perfil (Fixo com 'sticky') */}
      <div className="w-full md:w-1/2 h-fit sticky top-8">
        <div className="rounded-lg p-6">
          {/* Capa */}
          <div className="relative w-full h-40 bg-[#4E74F9] rounded-t-lg">
            {/* Imagem de perfil */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
              <div className="rounded-full border-4 border-white w-28 h-28 bg-gray-300 overflow-hidden">
                <Image
                  src="/fotos/lucas.jpg" // Substitua pelo caminho real da imagem
                  alt="Profile Image"
                  width={112} // Tamanho da imagem (correspondente a w-28)
                  height={112} // Tamanho da imagem (correspondente a h-28)
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Informações do usuário */}
          <div className="mt-16 text-center">
            <h1 className="text-2xl font-bold text-gray-800">Lucas Vinícius</h1>
            <div className="flex justify-center items-center mt-2">
              <div className="flex">{renderEditableStars(profileRating, handleProfileRating)}</div>
              <span className="ml-2 text-blue-500 font-semibold text-lg">{profileRating}</span>
            </div>
          </div>

          {/* Dados pessoais */}
          <div className="mt-24">
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-4">Dados pessoais</h2>
            <p className="text-gray-700 mb-1"><strong>Nome:</strong> Lucas Vinícius</p>
            <p className="text-gray-700 mb-1"><strong>Idade:</strong> 21</p>
            <p className="text-gray-700 mb-1"><strong>De:</strong> Palmas, Tocantins</p>
            <p className="text-gray-700"><strong>Curso:</strong> Engenharia de Software</p>
          </div>
        </div>
        <div className="text-center w-full max-w-xs mb-8">
            <button className="bg-blue-600 text-white w-full py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors ">
                <Link href="/login">
                Sair
                </Link>
            </button>
        </div>
      </div>
      

        {/* Divisão central com uma linha vertical */}
        <div className="hidden md:block w-[1px] bg-gray-300"></div>

      {/* Lado direito: Publicações e Avaliações */}
      <div className="w-full md:w-2/3 pl-8">
        {/* Materiais públicos */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-4">Materiais públicos</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
            <div className="flex items-center">
                <Image
                src="/icons/material.svg"
                alt="Material Icon"
                width={40} // Mantendo o tamanho como no layout original
                height={40} // Mantendo o tamanho como no layout original
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

        {/* Avaliações */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-4">Avaliações</h2>
          <div className="flex flex-col space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                {/* Imagem de perfil para Monica Nascimento */}
                <div className="rounded-full bg-gray-300 w-10 h-10 overflow-hidden">
                  <Image
                    src="/fotos/Monica.jpg" // Substitua pelo caminho real da imagem
                    alt="Monica Nascimento"
                    width={40} // Tamanho da imagem (correspondente a w-10)
                    height={40} // Tamanho da imagem (correspondente a h-10)
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

            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                {/* Imagem de perfil para Carlos Eduardo */}
                <div className="rounded-full bg-gray-300 w-10 h-10 overflow-hidden">
                  <Image
                    src="/fotos/Carlos.jpg" // Substitua pelo caminho real da imagem
                    alt="Carlos Eduardo"
                    width={40} // Tamanho da imagem (correspondente a w-10)
                    height={40} // Tamanho da imagem (correspondente a h-10)
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
        </div>
      </div>
    </div>
  );
}
