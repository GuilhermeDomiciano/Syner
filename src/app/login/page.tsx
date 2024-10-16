// src/app/login/page.tsx

import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="rounded-lg max-w-6xl w-full p-12 flex flex-col md:flex-row">
        {/* Esquerda: Formulário de login */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <div className="text-center mb-12">
            {/* Logo do Syner maior e centralizada */}
            <Image
              src="/icons/syner-logo.png" // Substitua pelo caminho da logo do Syner
              alt="Logo Syner"
              width={300}
              height={300}
            />
          </div>

          {/* Botões de ação */}
          <div className="space-y-6 w-full max-w-xs">
            {/* Alterando o botão de criar conta para redirecionar para a página de signup */}
            <Link href="/login/signup">
              <button className="bg-blue-600 text-white w-full py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Criar conta
              </button>
            </Link>
            <button className="bg-white border border-gray-300 w-full py-4 rounded-lg flex items-center justify-center space-x-2 font-semibold hover:bg-gray-50 transition-colors">
              <Image
                src="/icons/google-logo.png" // Substitua pelo caminho do logo do Google
                alt="Google Logo"
                width={24}
                height={24}
              />
              <span>Continuar com o Google</span>
            </button>
            <button className="bg-black text-white w-full py-4 rounded-lg flex items-center justify-center space-x-2 font-semibold hover:bg-gray-800 transition-colors">
              <Image
                src="/icons/institution-logo.png" // Substitua pelo caminho do logo da instituição
                alt="Institution Logo"
                width={24}
                height={24}
              />
              <span>Entrar com Instituição de Ensino</span>
            </button>
          </div>
        </div>

        {/* Linha de divisão */}
        <div className="w-[1px] bg-gray-300 mx-8 hidden md:block"></div>

        {/* Direita: Texto descritivo */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center pl-8">
          {/* Logo de conexão na direita */}
          <div className="text-center mb-8">
            <Image
              src="/icons/conexao.png" // Substitua pelo caminho da logo de conexão
              alt="Conexão Syner"
              width={300}
              height={350}
            />
          </div>

          <p className="text-gray-700 text-lg mb-8 text-center">
            O Syner é uma plataforma de monitoria colaborativa, em que alunos de todo o mundo podem se conectar para compartilhar conhecimentos e aprender juntos.
          </p>
          <div className="text-center w-full max-w-xs">
            <button className="bg-blue-600 text-white w-full py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            <Link href="/login/signin">Login</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
