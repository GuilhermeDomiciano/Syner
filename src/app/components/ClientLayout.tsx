"use client"; // Marca como Client Component

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login'; // Verifica se estamos na página de login
  const isSignupPage = pathname === '/login/signup'; // Verifica se estamos na página de signup
  const isSigninPage = pathname === '/login/signin'; // Verifica se estamos na página de signin

  const showNavbar = !isLoginPage && !isSignupPage && !isSigninPage;

  return (
    <div className="flex">
      {/* Exibe a Navbar somente se não estiver nas páginas de login, signup ou signin */}
      {showNavbar && (
        <aside className="w-[6rem] bg-white fixed top-0 left-0 h-full z-50">
          <Navbar /> {/* Exibe a Navbar quando não está nas páginas de login, signup ou signin */}
        </aside>
      )}
      
      {/* Ajusta o conteúdo principal para ter margem esquerda quando a Navbar é exibida */}
      <main className={`flex-1 p-8 bg-gray-100 min-h-screen ${showNavbar ? 'ml-[6rem]' : ''}`}>
        {children}
      </main>
    </div>
  );
}
