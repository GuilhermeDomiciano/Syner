"use client";
import Image from 'next/image';
import User from './img/user.png';

export default function Page() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            {/* Barra lateral */}
            <aside className="fixed top-0 left-0 w-20 bg-white h-full shadow-md flex flex-col items-center py-6 space-y-4">
                <button onClick={() => window.location.href = '/'}>
                    <Image src="/icons/home.png" alt="Início" width={24} height={24} />
                </button>
                <button>
                    <Image src="/icons/community.png" alt="Comunidade" width={24} height={24} />
                </button>
                <button>
                    <Image src="/icons/recados.png" alt="Recados" width={24} height={24} />
                </button>
                <button>
                    <Image src="/icons/agenda.png" alt="Agenda" width={24} height={24} />
                </button>
                <button onClick={() => window.location.href = '/chat'}>
                    <Image src="/icons/chat.png" alt="Chat" width={24} height={24} />
                </button>
                <button onClick={() => window.location.href = '/perfil'}>
                    <Image src="/icons/profile.png" alt="Perfil" width={24} height={24} />
                </button>
            </aside>

            {/* Conteúdo principal */}
            <main className="ml-28">
                <div className="flex flex-col items-center">
                    {/* Imagem da matéria */}
                    <Image src="/materias/1.png" alt="Cálculo II" width={200} height={200} className="rounded-full" />

                    {/* Nome e número de monitores */}
                    <h1 className="text-3xl font-bold mt-4">Cálculo II</h1>
                    <p className="text-gray-500 text-lg">6 Monitores</p>

                    {/* Botões de navegação */}
                    <div className="flex space-x-4 mt-8">
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow hover:bg-blue-600 transition">
                            Monitores
                        </button>
                        <button className="bg-gray-200 text-gray-600 px-6 py-2 rounded-full shadow hover:bg-gray-300 transition">
                            Materiais
                        </button>
                        <button className="bg-gray-200 text-gray-600 px-6 py-2 rounded-full shadow hover:bg-gray-300 transition">
                            Testes
                        </button>
                    </div>

                    {/* Lista de monitores */}
                    <div className="mt-10 w-full max-w-4xl">
                        {[
                            { name: "Silas Oliveira", role: "Monitor de Matemática" },
                            { name: "Amon Silva", role: "Monitor de Matemática" },
                            { name: "Cleide Nascimento", role: "Monitor de Matemática" },
                            { name: "Josefina Silva", role: "Monitor de Matemática" },
                            { name: "Maria Paula", role: "Monitor de Matemática" },
                            { name: "Simone Lucas", role: "Monitor de Matemática" },
                        ].map((monitor, index) => (
                            <div key={index} className="flex items-center justify-between py-4 border-b">
                                <div className="flex items-center space-x-4">
                                    <Image src={User} alt={monitor.name} width={60} height={60} className="rounded-full" />
                                    <div>
                                        <h3 className="text-lg font-semibold">{monitor.name}</h3>
                                        <p className="text-gray-500">{monitor.role}</p>
                                    </div>
                                </div>
                                <span className="text-blue-500 text-lg font-bold">4.{index + 2}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
