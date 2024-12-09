"use client";

import { useState } from "react";

export default function MonitoriasPage() {
  const [mensagens, setMensagens] = useState([
    { id: 1, texto: "Bom dia! Daqui a pouquinho começaremos a aula", autor: "professor" },
    { id: 2, texto: "Bom dia, no aguardo", autor: "aluno" },
    { id: 3, texto: "A resposta é 0,8", autor: "aluno" },
    { id: 4, texto: "Poderia fazer um vídeo de multiplicação e divisão algébrica de monômios? Preciso muito", autor: "aluno" },
  ]);
  const [novaMensagem, setNovaMensagem] = useState("");

  const enviarMensagem = () => {
    if (novaMensagem.trim() === "") return;
    setMensagens([...mensagens, { id: mensagens.length + 1, texto: novaMensagem, autor: "aluno" }]);
    setNovaMensagem("");
  };

  return (
    <div className="flex w-full h-screen">
      {/* Coluna do Vídeo */}
      <div className="w-1/2 h-full bg-gray-300">
        <iframe
          src="https://www.youtube.com/embed/rqMorNThj1s"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Coluna do Chat */}
      <div className="w-1/2 h-full flex flex-col bg-gray-100">
        {/* Abas de Navegação */}
        <div className="p-4 flex gap-4 justify-center bg-white shadow sticky top-0 z-10">
          <button className="bg-blue-500 text-white py-2 px-8 rounded-full hover:bg-blue-600 transition-shadow shadow-md">
            Bate Papo
          </button>
          <button className="bg-gray-200 text-gray-700 py-2 px-8 rounded-full hover:bg-gray-300 transition-shadow shadow-md">
            Pessoas
          </button>
        </div>

        {/* Corpo do Chat */}
        <main className="flex flex-col flex-1 p-4">
          {/* Mensagens */}
          <div
            className="flex flex-col gap-4 overflow-y-auto bg-white p-6 rounded-lg shadow-lg flex-1"
            style={{ maxHeight: "calc(100% - 80px)" }}
          >
            {mensagens.map((mensagem) => (
              <div
                key={mensagem.id}
                className={`p-4 rounded-full px-8 max-w-sm ${
                  mensagem.autor === "professor"
                    ? "bg-gray-100 text-gray-800 self-start border-l-4 shadow-sm rounded-full"
                    : "bg-blue-500 text-white self-end shadow-md rounded-full"
                }`}
              >
                {mensagem.texto}
              </div>
            ))}
          </div>

          {/* Campo de Mensagem */}
          <div className="mt-4 flex items-center gap-3">
            <input
              type="text"
              value={novaMensagem}
              onChange={(e) => setNovaMensagem(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={enviarMensagem}
              className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
            >
              Enviar
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
