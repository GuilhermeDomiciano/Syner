import './globals.css';
import ClientLayout from './components/ClientLayout';
import { ThemeProvider } from './contexts/ThemeContext'; // Certifique-se do caminho correto

export const metadata = {
  title: 'SYNER',
  description: 'Plataforma de aprendizado personalizada',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
