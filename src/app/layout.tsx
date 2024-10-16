// src/app/layout.tsx

import './globals.css';
import ClientLayout from './components/ClientLayout'; // Importa o layout cliente

export const metadata = {
  title: 'Syner',
  description: 'Plataforma de aprendizado personalizada',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ClientLayout>{children}</ClientLayout> {/* Usa o layout cliente */}
      </body>
    </html>
  );
}
