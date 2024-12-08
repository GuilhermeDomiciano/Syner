"use client";

export default function Page() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gray-100 min-h-screen">
            {/* Coluna Ensinar */}
            <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col">
                <h1 className="text-3xl font-semibold text-blue-700 mb-6 border-b-4 border-blue-300 pb-2">Ensinar</h1>
                <div className="space-y-6">
                    {/* Monitoria 1 */}
                    <div className="p-6 border-l-4 border-blue-500 rounded-lg shadow-md bg-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div>
                            <h2 className="text-2xl font-medium">Monitoria de HTML</h2>
                            <p className="text-gray-600 text-lg">
                                Agendada para dia 19/05 às 20:00 horas
                            </p>
                        </div>
                        <div className="flex mt-4 md:mt-0 gap-4">
                            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                Ir para a sala
                            </button>
                            <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                X
                            </button>
                        </div>
                    </div>
                    {/* Monitoria 2 */}
                    <div className="p-6 border-l-4 border-blue-500 rounded-lg shadow-md bg-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div>
                            <h2 className="text-2xl font-medium">Monitoria de CSS</h2>
                            <p className="text-gray-600 text-lg">
                                Agendada para dia 20/05 às 18:00 horas
                            </p>
                        </div>
                        <div className="flex mt-4 md:mt-0 gap-4">
                            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                Ir para a sala
                            </button>
                            <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                X
                            </button>
                        </div>
                    </div>
                    {/* Monitoria 3 */}
                    <div className="p-6 border-l-4 border-blue-500 rounded-lg shadow-md bg-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div>
                            <h2 className="text-2xl font-medium">Monitoria de JavaScript</h2>
                            <p className="text-gray-600 text-lg">
                                Agendada para dia 21/05 às 15:00 horas
                            </p>
                        </div>
                        <div className="flex mt-4 md:mt-0 gap-4">
                            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                Ir para a sala
                            </button>
                            <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                X
                            </button>
                        </div>
                    </div>
                    {/* Monitoria 4 */}
                    <div className="p-6 border-l-4 border-blue-500 rounded-lg shadow-md bg-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div>
                            <h2 className="text-2xl font-medium">Monitoria de React</h2>
                            <p className="text-gray-600 text-lg">
                                Agendada para dia 22/05 às 19:00 horas
                            </p>
                        </div>
                        <div className="flex mt-4 md:mt-0 gap-4">
                            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                Ir para a sala
                            </button>
                            <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                X
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow">
                        Agendar nova monitoria
                    </button>
                </div>
            </div>

            {/* Coluna Aprender */}
            <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col ">
                <h1 className="text-3xl font-semibold text-blue-700 mb-6 border-b-4 border-blue-300 pb-2">Aprender</h1>
                {/* Monitorias Individuais */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Individuais</h2>
                    <div className="space-y-6">
                        {/* Monitoria Individual 1 (já em andamento) */}
                        <div className="flex items-center gap-4 border-l-4 border-blue-500 p-6 bg-gray-50 rounded-lg shadow-md">
                            <img
                                src="../public/fotos/carlos.jpg"
                                alt="João Paulo"
                                className="w-20 h-20 rounded-full object-cover"
                            />
                            <div className="flex-grow">
                                <p className="text-xl font-medium">João Paulo</p>
                                <p className="text-gray-600 text-lg">
                                    Monitoria de <b>Matemática</b>
                                </p>
                                <p className="text-green-600 font-medium text-lg">
                                    A monitoria está acontecendo agora mesmo
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                    Entrar na sala
                                </button>
                                <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                    X
                                </button>
                            </div>
                        </div>
                        {/* Monitoria Individual 2 (ainda não iniciada) */}
                        <div className="flex items-center gap-4 border-l-4 border-blue-500 p-6 bg-gray-50 rounded-lg shadow-md">
                            <img
                                src="../public/fotos/carlos.jpg"
                                alt="Lucas Silva"
                                className="w-20 h-20 rounded-full object-cover"
                            />
                            <div className="flex-grow">
                                <p className="text-xl font-medium">Lucas Silva</p>
                                <p className="text-gray-600 text-lg">
                                    Monitoria de <b>Física</b>
                                </p>
                                <p className="text-gray-600 font-medium text-lg">
                                    Agendada para dia 23/05 às 19:00 horas
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                    Entrar na sala
                                </button>
                                <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                    X
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow">
                            Buscar monitorias individuais
                        </button>
                    </div>
                </div>

                {/* Monitorias Coletivas */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Coletivas</h2>
                    <div className="space-y-6">
                        <div className="p-8 border rounded-lg bg-gray-100 text-gray-600 shadow-lg flex flex-col items-center">
                            <img
                                src="../public/fotos/carinhaTriste.jpg"
                                alt="Nenhuma monitoria agendada"
                                className="w-20 h-20 mb-6"
                            />
                            <h3 className="text-2xl font-semibold text-gray-700">
                                Nenhuma monitoria coletiva agendada
                            </h3>
                            <p className="text-lg text-gray-500 mt-4 text-center">
                                Ainda não há monitorias coletivas disponíveis.
                            </p>
                            <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
                                Buscar monitorias coletivas
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
