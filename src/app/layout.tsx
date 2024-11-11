import './globals.css';
import ClientLayout from './components/ClientLayout'; 

export const metadata = {
  title: 'SYNER',
  description: 'Plataforma de aprendizado personalizada',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ClientLayout>{children}</ClientLayout> 
      </body>
    </html>
  );
}
