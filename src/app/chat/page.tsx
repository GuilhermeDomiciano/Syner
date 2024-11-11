"use client";

export default function Page() {
  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-blue-100 p-4">
        <div className="mb-2 p-4 border-b cursor-pointer hover:bg-blue-200 rounded-lg">
          <h2 className="text-xl font-semibold">Matheus</h2>
          <p className="text-sm text-gray-600">9 novas mensagens</p>
        </div>
        <div className="mb-2 p-4 border-b cursor-pointer hover:bg-blue-200 rounded-lg">
          <h2 className="text-xl font-semibold">Luis</h2>
          <p className="text-sm text-gray-600">9 novas mensagens</p>
        </div>
      </div>
           
      <div className="flex flex-col w-2/3 bg-white relative">
        <div className="flex-grow p-4 overflow-y-auto">
          <div className="mb-4 text-left">
            <p className="text-gray-600 bg-gray-100 p-2 rounded-lg inline-block">
              Matheus: Oi, tudo bem?
            </p>
          </div>
          <div className="mb-4 text-right">
            <p className="text-white bg-blue-500 p-2 rounded-lg inline-block">
              Você: Sim, e você?
            </p>
          </div>
        </div>

        <div className="p-4 border-t bg-white sticky bottom-0 flex items-center">
          <input
            type="text"
            placeholder="Digite sua mensagem"
            className="w-full p-3 border rounded-full bg-blue-500 text-white placeholder-blue-200 focus:bg-blue-600 focus:outline-none"
          />
          <button className="ml-4 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
