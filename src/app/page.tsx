"use client";

import Image from 'next/image';
import Coruja from './img/coruja.png';
import Mundo from './img/mundo.png';

export default function Page() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="flex w-4/5 h-4/5 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex-1 flex flex-col justify-center items-center bg-gray-50 p-10">
                    <Image src={Coruja} alt="Coruja" />
                    <h1 className="text-blue-600 text-4xl font-bold mb-8">SYNER</h1>
                    <button className="bg-blue-600 text-white py-3 px-6 rounded-lg w-4/5 mb-4 hover:bg-blue-700 transition-colors">
                        Criar Conta
                    </button>
                    <button className="bg-red-600 text-white py-3 px-6 rounded-lg w-4/5 mb-4 hover:bg-red-700 transition-colors">
                        Continuar com o Google
                    </button>
                    <button className="bg-blue-600 text-white py-3 px-6 rounded-lg w-4/5 mb-4 hover:bg-blue-700 transition-colors">
                        Entrar com instituição de ensino
                    </button>
                </div>
                <div className="w-1 bg-gray-300"></div>
                <div className="flex-1 flex flex-col justify-center items-center bg-gray-50 p-10 text-center">
                    <Image src={Mundo} alt="Mundo" />
                    <p className="text-lg text-gray-700 mb-8">
                        O Syner é uma plataforma de monitoria colaborativa, em que alunos de todo o mundo podem se conectar para compartilhar conhecimentos e aprender juntos.
                    </p>
                    <button 
                        className="bg-blue-600 text-white py-3 px-6 rounded-lg w-4/5 hover:bg-blue-700 transition-colors"
                        onClick={() => window.location.href = 'http://localhost:3000/home'}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}
