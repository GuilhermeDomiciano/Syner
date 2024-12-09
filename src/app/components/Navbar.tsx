"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaHome,
  FaUsers,
  FaEnvelope,
  FaCalendarAlt,
  FaComments,
  FaUserAlt,
  FaEllipsisV,
  FaShareAlt,
  FaCog,
  FaBug,
  FaAddressCard,
} from "react-icons/fa";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <aside className="bg-gradient-to-b from-blue-500 to-blue-700 shadow-xl w-24 h-full fixed top-0 left-0 flex flex-col items-center py-4 z-50">
      {/* Logo principal - Botão para voltar à tela inicial */}
      <div className="mb-8">
        <Link href="/" className="block bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
          <Image
            src="/icons/syner-logo.png"
            alt="Syner Logo"
            width={50}
            height={50}
          />
        </Link>
      </div>

      {/* Navegação principal */}
      <nav className="w-full relative flex-grow">
        <ul className="flex flex-col space-y-6 px-1">
          {/* Link: Início */}
          <li>
            <Link
              href="/"
              className="flex flex-col items-center space-y-1 px-3 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              <FaHome className="text-white text-2xl" />
              <span className="text-xs font-medium text-white">Início</span>
            </Link>
          </li>

          {/* Link: Comunidade */}
          <li>
            <Link
              href="/comunidade"
              className="flex flex-col items-center space-y-1 px-3 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              <FaUsers className="text-white text-2xl" />
              <span className="text-xs font-medium text-white">Comunidade</span>
            </Link>
          </li>

          {/* Link: Recados */}
          <li>
            <Link
              href="/recados"
              className="flex flex-col items-center space-y-1 px-3 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              <FaEnvelope className="text-white text-2xl" />
              <span className="text-xs font-medium text-white">Recados</span>
            </Link>
          </li>

          {/* Link: Agenda */}
          <li>
            <Link
              href="/agenda"
              className="flex flex-col items-center space-y-1 px-3 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              <FaCalendarAlt className="text-white text-2xl" />
              <span className="text-xs font-medium text-white">Agenda</span>
            </Link>
          </li>

          {/* Link: Chat */}
          <li>
            <Link
              href="/chat"
              className="flex flex-col items-center space-y-1 px-3 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              <FaComments className="text-white text-2xl" />
              <span className="text-xs font-medium text-white">Chat</span>
            </Link>
          </li>

          {/* Link: Perfil */}
          <li>
            <Link
              href="/profile"
              className="flex flex-col items-center space-y-1 px-3 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              <FaUserAlt className="text-white text-2xl" />
              <span className="text-xs font-medium text-white">Perfil</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Botão de menu dropdown (3 pontinhos simples) no final */}
      <div className="relative mt-auto mb-4">
        <button
          onClick={toggleDropdown}
          className="text-white text-2xl hover:text-gray-300 transition transform hover:scale-110"
        >
          <FaEllipsisV />
        </button>

        {/* Dropdown com mais opções */}
        {isDropdownOpen && (
          <div className="absolute bottom-14 left-12 bg-white shadow-lg rounded-lg w-48 z-50">
            <Link
              href="/social-media"
              className="flex items-center gap-2 px-4 py-2 text-sm text-blue-600 hover:bg-blue-100 hover:text-blue-800 transition"
            >
              <FaShareAlt />
              Redes Sociais
            </Link>
            <Link
              href="/about-us"
              className="flex items-center gap-2 px-4 py-2 text-sm text-blue-600 hover:bg-blue-100 hover:text-blue-800 transition"
            >
              <FaAddressCard />
              Sobre Nós
            </Link>
            <Link
              href="/settings"
              className="flex items-center gap-2 px-4 py-2 text-sm text-blue-600 hover:bg-blue-100 hover:text-blue-800 transition"
            >
              <FaCog />
              Configurações
            </Link>
            <Link
              href="/report-issue"
              className="flex items-center gap-2 px-4 py-2 text-sm text-blue-600 hover:bg-blue-100 hover:text-blue-800 transition"
            >
              <FaBug />
              Relatar Problema
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
}
