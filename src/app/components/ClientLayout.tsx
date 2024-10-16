// src/app/components/ClientLayout.tsx

"use client"; // Marca como Client Component

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login'; // Verifica se estamos na página de login
  const isSignupPage = pathname === '/login/signup'; // Verifica se estamos na página de signup
  const isSigninPage = pathname === '/login/signin'; // Verifica se estamos na página de signin

  return (
    <div className="flex">
      {/* Exibe a Navbar somente se não estiver nas páginas de login, signup ou signin */}
      {!isLoginPage && !isSignupPage && !isSigninPage && <Navbar />}
      <main className={`w-full p-8 bg-gray-100 min-h-screen ${!isLoginPage && !isSignupPage && !isSigninPage ? 'ml-24' : ''}`}>
        {children}
      </main>
    </div>
  );
}
