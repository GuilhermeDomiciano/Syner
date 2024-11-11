"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter(); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    if (password !== confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-8 flex flex-col items-center">
        <div className="mb-8 text-center">
          <Image
            src="/icons/syner-logo.png" 
            alt="Logo Syner"
            width={200}
            height={200}
          />
          <h1 className="text-2xl font-semibold text-gray-800 mt-4">Crie sua conta</h1>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Seu e-mail"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Sua senha"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirmar Senha</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Confirme sua senha"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Criar Conta
          </button>
        </form>

        <div className="mt-6">
          <p className="text-gray-600">
            Já tem uma conta?{' '}
            <Link href="/login" className="text-blue-600 hover:underline">
              Fazer Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
