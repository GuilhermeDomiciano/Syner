import './globals.css';
import ClientLayout from './components/ClientLayout'; 
import Footer from './components/Footer'; 

export const metadata = {
  title: 'SYNER',
  description: 'Plataforma de aprendizado personalizada',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ClientLayout>{children}</ClientLayout> 
        {/* <Footer /> */}
      </body>
    </html>
  );
}
