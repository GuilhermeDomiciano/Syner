"use client";

import { FaInstagram, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 py-12 px-6 md:px-12">
      <h1 className="text-5xl font-extrabold text-center text-blue-700 mb-8">Conecte-se Conosco</h1>

      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <p className="text-gray-700 text-lg text-center leading-relaxed mb-10">
          O <span className="font-bold text-blue-600">Syner</span> é mais do que um projeto, é uma
          comunidade! Siga-nos nas redes sociais e fique por dentro das novidades, dicas e conteúdos
          exclusivos. Estamos sempre disponíveis para ouvir você!
        </p>

        {/* Links das Redes Sociais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/syner_oficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition transform"
          >
            <FaInstagram className="text-4xl mb-3" />
            <span className="text-xl font-semibold">Instagram</span>
            <span className="text-sm">@syner_oficial</span>
          </a>

          {/* Email */}
          <a
            href="mailto:syneroficial@gmail.com"
            className="flex flex-col items-center px-6 py-4 bg-blue-600 text-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition transform"
          >
            <FaEnvelope className="text-4xl mb-3" />
            <span className="text-xl font-semibold">Email</span>
            <span className="text-sm">syneroficial@gmail.com</span>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/syner_oficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center px-6 py-4 bg-blue-400 text-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition transform"
          >
            <FaTwitter className="text-4xl mb-3" />
            <span className="text-xl font-semibold">Twitter</span>
            <span className="text-sm">@syner_oficial</span>
          </a>
        </div>

        {/* Texto motivacional */}
        <div className="mt-12 bg-gradient-to-r from-blue-100 to-blue-200 py-8 px-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">Estamos Aqui Por Você!</h2>
          <p className="text-gray-700 text-center text-lg leading-relaxed">
            A sua opinião e participação são essenciais para o crescimento do Syner. Junte-se a
            nós nas redes sociais, compartilhe suas ideias e ajude a construir algo incrível. O
            futuro está sendo criado agora, com você!
          </p>
        </div>
      </div>
    </div>
  );
}
