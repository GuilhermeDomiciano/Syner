"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { FaSmile } from "react-icons/fa";
import { EmojiClickData } from "emoji-picker-react";

interface Mensagem {
  texto: string;
  autor: string;
  dataHora: Date;
}

interface Contato {
  nome: string;
  novasMsg: number;
  mensagens: Mensagem[];
}

const contatosIniciais: Contato[] = [
  { nome: "Matheus", novasMsg: 9, mensagens: [{ texto: "Oi, tudo bem?", autor: "Matheus", dataHora: new Date(2024, 10, 11, 9, 30) }] },
  { nome: "Luis", novasMsg: 9, mensagens: [{ texto: "Oi, como vai?", autor: "Luis", dataHora: new Date(2024, 10, 11, 10, 15) }] },
  { nome: "Ana", novasMsg: 3, mensagens: [{ texto: "Bom dia!", autor: "Ana", dataHora: new Date(2024, 10, 11, 8, 45) }] },
];

const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });

export default function Page() {
  const [contatos, setContatos] = useState(contatosIniciais);
  const [contatoAtivo, setContatoAtivo] = useState<Contato | null>(null);
  const [mensagem, setMensagem] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const enviarMensagem = () => {
    if (!mensagem || !contatoAtivo) return;

    const novosContatos = contatos.map((contato) =>
      contato.nome === contatoAtivo.nome
        ? {
            ...contato,
            mensagens: [...contato.mensagens, { texto: mensagem, autor: "Você", dataHora: new Date() }],
          }
        : contato
    );

    setContatos(novosContatos);
    setMensagem("");
    setContatoAtivo({
      ...contatoAtivo,
      mensagens: [
        ...contatoAtivo.mensagens,
        { texto: mensagem, autor: "Você", dataHora: new Date() },
      ],
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      enviarMensagem();
    }
  };

  const selecionarContato = (contato: Contato) => {
    const novosContatos = contatos.map((contatoItem) =>
      contatoItem.nome === contato.nome
        ? { ...contatoItem, novasMsg: 0 }
        : contatoItem
    );

    setContatos(novosContatos);
    setContatoAtivo(contato);
  };

  const onEmojiClick = (emojiObject: EmojiClickData) => {
    setMensagem((prev) => prev + emojiObject.emoji);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Caixa Mãe: Barra Azul */}
      <div className="flex flex-col w-full h-full bg-blue-600">
        {/* Subcaixa 1: Lista de Contatos */}
        <div className="flex flex-row flex-grow">
          <div className="w-1/4 bg-white overflow-y-auto rounded-tl-3xl mt-10  border-r-2 border-gray-300 shadow-md">
            <div className="p-4">
              <h2 className="text-2xl font-bold text-blue-600">Conversas</h2>
            </div>
            <div>
              {contatos.map((contato, index) => (
                <div
                  key={index}
                  onClick={() => selecionarContato(contato)}
                  className={`p-4 border-b cursor-pointer flex items-center space-x-4 hover:bg-blue-50 transition-all ${
                    contatoAtivo?.nome === contato.nome ? "bg-blue-100" : ""
                  }`}
                >
                  <div className="bg-blue-500 text-white h-10 w-10 rounded-full flex items-center justify-center font-semibold">
                    {contato.nome[0]}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900">{contato.nome}</h3>
                    <p className="text-sm text-gray-600 truncate">
                      {contato.mensagens[contato.mensagens.length - 1]?.texto}
                    </p>
                  </div>
                  {contato.novasMsg > 0 && (
                    <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                      {contato.novasMsg}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Subcaixa 2: Janela de Conversa */}
          <div className="flex flex-col w-3/4 bg-white mt-10 ">
            
            <div className="flex-grow p-6 bg-gray-50 overflow-y-auto ">
              {contatoAtivo ? (
                contatoAtivo.mensagens.map((mensagem, index) => (
                  <div
                    key={index}
                    className={`mb-4 flex ${mensagem.autor === "Você" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`p-3 rounded-lg max-w-xs ${
                        mensagem.autor === "Você" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      <p>{mensagem.texto}</p>
                      <span
                        className={`text-xs ${
                          mensagem.autor === "Você" ? "text-white" : "text-gray-500"
                        }`}
                      >
                        {mensagem.dataHora.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-gray-600 text-center">
                  <p>Selecione um contato para ver as mensagens.</p>
                  
                </div>
              )}
            </div>

            {contatoAtivo && (
              <div className="p-4 border-t bg-white flex items-center">
                <button
                  className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition mr-4"
                  onClick={() => setShowEmojiPicker((prev) => !prev)}
                >
                  <FaSmile className="text-xl text-gray-600 " />
                </button>
                {showEmojiPicker && (
                  <div className="absolute bottom-16 left-4 z-50">
                    <EmojiPicker onEmojiClick={onEmojiClick} />
                  </div>
                )}
                <input
                  type="text"
                  placeholder="Digite sua mensagem"
                  className="flex-grow p-3 rounded-full border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 transition"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button
                  className="ml-4 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md transition"
                  onClick={enviarMensagem}
                >
                  Enviar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
