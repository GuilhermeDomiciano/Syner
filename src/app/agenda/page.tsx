"use client";

export default function Page() {
    return (
        <div className="flex flex-col md:flex-row items-start justify-between p-8 bg-gray-100 min-h-screen gap-8">
            {/* Ensinar Section */}
            <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold">Ensinar</h1>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Ensinar
                    </button>
                </div>
                <div className="space-y-4">
                    {/* Monitoria Card */}
                    <div className="p-4 border rounded-lg shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50">
                        <div>
                            <h2 className="text-xl font-medium">Monitoria de HTML</h2>
                            <p className="text-gray-600">
                                Agendada para dia 19/05 às 20:00 horas
                            </p>
                        </div>
                        <div className="flex mt-4 md:mt-0 gap-2">
                            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                                Ir para a sala
                            </button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                X
                            </button>
                        </div>
                    </div>
                    {/* Repetir monitoria */}
                    <div className="p-4 border rounded-lg shadow-sm bg-gray-50">Exemplo de outra monitoria</div>
                </div>
            </div>

            {/* Aprender Section */}
            <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold">Aprender</h1>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Aprender
                    </button>
                </div>

                {/* Individuais */}
                <div className="mb-6">
                    <h2 className="text-lg font-medium mb-4">Individuais</h2>
                    <div className="space-y-4">
                        {/* Card */}
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
                            </div>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                                    Agora Mesmo
                                </button>
                                <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                    X
                                </button>
                            </div>
                        </div>
                        {/* Outro exemplo */}
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
                            </div>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
                                    Amanhã
                                </button>
                                <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                    X
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Coletivas */}
                <div>
                    <h2 className="text-lg font-medium mb-4">Coletivas</h2>
                    <div className="p-4 border rounded-lg shadow-sm bg-gray-50 flex flex-col items-center">
                        <img
                            src="emojitriste.jpg"
                            alt="Triste"
                            className="w-12 h-12 mb-2"
                        />
                        <p className="text-gray-600">Você não tem monitorias coletivas</p>
                    </div>
                    <div className="mt-4">
                        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full">
                            Buscar monitorias coletivas
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
