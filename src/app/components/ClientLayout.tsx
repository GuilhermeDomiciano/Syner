"use client"; 

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';
  const isSignupPage = pathname === '/login/signup'; 
  const isSigninPage = pathname === '/login/signin';

  const showNavbar = !isLoginPage && !isSignupPage && !isSigninPage;

  return (
    <div className="flex">
      {showNavbar && (
        <aside className="w-[6rem] bg-white fixed top-0 left-0 h-full z-50">
          <Navbar /> 
        </aside>
      )}
      
      <main className={`flex-1 p-8 bg-gray-100 min-h-screen ${showNavbar ? 'ml-[6rem]' : ''}`}>
        {children}
      </main>
    </div>
  );
}
