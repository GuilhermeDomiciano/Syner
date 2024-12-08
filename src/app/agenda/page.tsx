"use client";

export default function Page() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gray-100 min-h-screen">
            {/* Coluna Ensinar */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-semibold mb-6">Ensinar</h1>
                <div className="space-y-4">
                    {/* Monitoria 1 */}
                    <div className="p-4 border rounded-lg shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50">
                        <div>
                            <h2 className="text-xl font-medium">Monitoria de HTML</h2>
                            <p className="text-gray-600">
                                Agendada para dia 19/05 às 20:00 horas
                            </p>
                        </div>
                        <div className="flex mt-4 md:mt-0 gap-2">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                Ir para a sala
                            </button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                X
                            </button>
                        </div>
                    </div>
                    {/* Monitoria 2 */}
                    <div className="p-4 border rounded-lg shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50">
                        <div>
                            <h2 className="text-xl font-medium">Monitoria de CSS</h2>
                            <p className="text-gray-600">
                                Agendada para dia 20/05 às 18:00 horas
                            </p>
                        </div>
                        <div className="flex mt-4 md:mt-0 gap-2">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                Ir para a sala
                            </button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                X
                            </button>
                        </div>
                    </div>
                    {/* Monitoria 3 */}
                    <div className="p-4 border rounded-lg shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50">
                        <div>
                            <h2 className="text-xl font-medium">Monitoria de JavaScript</h2>
                            <p className="text-gray-600">
                                Agendada para dia 21/05 às 15:00 horas
                            </p>
                        </div>
                        <div className="flex mt-4 md:mt-0 gap-2">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                Ir para a sala
                            </button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                X
                            </button>
                        </div>
                    </div>
                    {/* Monitoria 4 */}
                    <div className="p-4 border rounded-lg shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50">
                        <div>
                            <h2 className="text-xl font-medium">Monitoria de React</h2>
                            <p className="text-gray-600">
                                Agendada para dia 22/05 às 19:00 horas
                            </p>
                        </div>
                        <div className="flex mt-4 md:mt-0 gap-2">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                Ir para a sala
                            </button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                X
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow">
                        Agendar nova monitoria
                    </button>
                </div>
            </div>


            {/* Coluna Aprender */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-semibold mb-6">Aprender</h1>
                {/* Monitorias Individuais */}
                <div className="mb-6">
                    <h2 className="text-lg font-medium mb-4">Individuais</h2>
                    <div className="space-y-4">
                        {/* Monitoria Individual */}
                        <div className="flex items-center gap-4 border rounded-lg p-4 bg-gray-50 shadow-sm">
                            <img
                                src="../public/fotos/carlos.jpg"
                                alt="João Paulo"
                                className="w-16 h-16 rounded-full object-cover"
                            />
                            <div className="flex-grow">
                                <p className="font-medium">João Paulo</p>
                                <p className="text-gray-600">
                                    Monitoria de <b>Matemática</b>
                                </p>
                                <p className="text-green-600 font-medium">
                                    A monitoria está acontecendo agora mesmo
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                    Entrar na sala
                                </button>
                                <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                    X
                                </button>
                            </div>
                        </div>
                        {/* Outro exemplo de monitoria individual pode ser adicionado aqui */}
                    </div>
                    <div className="flex justify-center mt-4">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow">
                            Buscar monitorias individuais
                        </button>
                    </div>
                </div>


                {/* Monitorias Coletivas */}
                <div>
                    <h2 className="text-lg font-medium mb-4">Coletivas</h2>
                    <div className="space-y-4">
                        <div className="p-6 border rounded-lg bg-gray-100 text-gray-600 shadow-md flex flex-col items-center">
                            <img
                                src="../public/fotos/carinhaTriste.jpg"
                                alt="Nenhuma monitoria agendada"
                                className="w-16 h-16 mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-700">
                                Nenhuma monitoria coletiva agendada
                            </h3>
                            <p className="text-sm text-gray-500 mt-2 text-center">
                                Ainda não há monitorias coletivas disponíveis.
                            </p>
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
                                Buscar monitorias coletivas
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
