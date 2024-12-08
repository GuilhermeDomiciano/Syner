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
    <div className="flex flex-col w-full h-screen bg-gray-100">
      {/* Imagem da Monitoria (Topo da página) */}
      <div className="w-full h-1/2 bg-gray-300">
        <img
          src="/images/monitoria.png"
          alt="Monitoria de Matemática"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Abas de Navegação (Bate Papo e Pessoas) */}
      <div className="p-4 flex gap-4 justify-center bg-white shadow-md">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 w-1/2">
          Bate Papo
        </button>
        <button className="bg-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300 w-1/2">
          Pessoas
        </button>
      </div>

      {/* Corpo do Chat e Campo de Mensagem */}
      <main className="flex flex-col flex-1 overflow-y-auto p-4">
        {/* Mensagens */}
        <div className="mt-6 flex flex-col gap-4 overflow-y-auto flex-1 bg-white p-4 rounded-lg shadow-inner">
          {mensagens.map((mensagem) => (
            <div
              key={mensagem.id}
              className={`p-4 rounded-lg ${
                mensagem.autor === "professor"
                  ? "bg-gray-200 text-gray-700 self-start"
                  : "bg-blue-500 text-white self-end"
              }`}
            >
              {mensagem.texto}
            </div>
          ))}
        </div>

        {/* Campo de Texto */}
        <div className="mt-4 flex items-center gap-2">
          <input
            type="text"
            value={novaMensagem}
            onChange={(e) => setNovaMensagem(e.target.value)}
            placeholder="Digite sua mensagem"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
          />
          <button
            onClick={enviarMensagem}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Enviar
          </button>
        </div>
      </main>
    </div>
  );
}
