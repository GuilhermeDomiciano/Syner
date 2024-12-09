"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { FaSmile } from "react-icons/fa";
import { EmojiClickData } from "emoji-picker-react";

type Participante = {
  id: number;
  name: string;
  role: string;
  img: string;
  nota: number;
};

type Material = {
  titulo: string;
  monitor: string;
};

type Grupo = {
  id: number;
  nome: string;
  imagem: string;
  participantes: Participante[];
  materiais: Material[];
};

const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });

export default function GrupoPage() {
  const { id } = useParams() as { id: string };
  const [grupo, setGrupo] = useState<Grupo | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const router = useRouter();
  const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const onEmojiClick = (emojiObject: EmojiClickData) => {
    setNewMessage((prev) => prev + emojiObject.emoji);
  };
  

  let isResizing = false;
  let startSize = { width: 300, height: 400 };

  const handleResizeStart = (e: React.MouseEvent) => {
    isResizing = true;
    dragStart = { x: e.clientX, y: e.clientY };
    startSize = { ...chatSize };
  
    document.addEventListener("mousemove", handleResizing);
    document.addEventListener("mouseup", handleResizeEnd);
  };
  
  const handleResizing = (e: MouseEvent) => {
    if (!isResizing) return;
  
    const newWidth = Math.max(200, startSize.width + (e.clientX - dragStart.x));
    const newHeight = Math.max(200, startSize.height + (e.clientY - dragStart.y));
  
    setChatSize({ width: newWidth, height: newHeight });
  };
  
  const handleResizeEnd = () => {
    isResizing = false;
    document.removeEventListener("mousemove", handleResizing);
    document.removeEventListener("mouseup", handleResizeEnd);
  };
  

    const [chatPosition, setChatPosition] = useState({ x: 100, y: 100 });
    const [chatSize, setChatSize] = useState({ width: 300, height: 400 });
    const chatRef = useRef<HTMLDivElement | null>(null);

    let isDragging = false;
    let dragStart = { x: 0, y: 0 };
    let startPos = { x: 0, y: 0 };

    const handleDragStart = (e: React.MouseEvent) => {
    isDragging = true;
    dragStart = { x: e.clientX, y: e.clientY };
    startPos = { x: chatPosition.x, y: chatPosition.y };
    document.addEventListener("mousemove", handleDragging);
    document.addEventListener("mouseup", handleDragEnd);
    };

    const handleDragging = (e: MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    setChatPosition({
        x: startPos.x + dx,
        y: startPos.y + dy,
    });
    };

    const handleDragEnd = () => {
    isDragging = false;
    document.removeEventListener("mousemove", handleDragging);
    document.removeEventListener("mouseup", handleDragEnd);
    };


  useEffect(() => {
    const fetchGrupos = async () => {
      try {
        const response = await fetch("/grupos.json");
        if (!response.ok) throw new Error("Erro ao carregar os grupos.");
        const grupos: Grupo[] = await response.json();
        const selectedGrupo = grupos.find((g) => g.id === parseInt(id));
        setGrupo(selectedGrupo || null);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGrupos();
  }, [id]);

  if (!grupo) return <p className="text-center mt-12">Carregando...</p>;

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  const handleViewAll = (section: string) => {
    router.push(`/comunidade/${grupo.id}/${section}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 text-gray-800 relative">
      {/* Cabeçalho */}
      <header className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
          <Image
            src={grupo.imagem || "/icons/fallback.png"}
            alt={grupo.nome || "Imagem do Grupo"}
            width={150}
            height={150}
            className="rounded-full shadow-md border-4 border-white"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">{grupo.nome}</h1>
            <p className="text-lg mt-4">
              {grupo.participantes?.length || 0} participantes
            </p>
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="max-w-6xl mx-auto mt-8 space-y-12 px-6">
        <button
          onClick={() => setChatOpen((prev) => !prev)}
          className="fixed bottom-6 right-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          {chatOpen ? "Fechar Chat" : "Abrir Chat"}
        </button>
        {/* Participantes */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 border-b-4 border-blue-600 pb-2">
            Participantes
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {grupo.participantes.slice(0, 6).map((participante) => (
              <li
                key={participante.id}
                className="p-6 bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-lg transform hover:-translate-y-2 transition duration-300"
              >
                <div
                  onClick={() => router.push(`/participantes/${participante.id}`)}
                  className="cursor-pointer text-center"
                >
                  <Image
                    src={participante.img || "/icons/user.png"}
                    alt={participante.name || "Participante"}
                    width={100}
                    height={100}
                    className="rounded-full mx-auto border-4 border-blue-200 shadow-md"
                  />
                  <h3 className="mt-4 text-xl font-bold text-gray-800">{participante.name}</h3>
                  <p className="text-sm text-gray-500 italic">{participante.role}</p>
                </div>
                <div className="flex justify-between items-center mt-4 bg-blue-100 p-3 rounded-lg">
                  <span className="text-blue-800 font-bold text-lg">
                    {participante.nota?.toFixed(1) || "N/A"}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          {grupo.participantes.length > 6 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => handleViewAll("participantes")}
                className="text-blue-600 font-semibold hover:text-blue-800 transition"
              >
                Ver todos
              </button>
            </div>
          )}
        </section>

        {/* Materiais */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 border-b-4 border-blue-600">
            Materiais
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {grupo.materiais.slice(0, 6).map((material, index) => (
              <li
                key={index}
                className="relative p-6 bg-gradient-to-r from-blue-100 to-white rounded-xl shadow-lg hover:shadow-2xl transition group"
              >
                <div className="absolute top-4 right-4 text-blue-600 text-2xl group-hover:scale-125 transition-transform">
                  📘
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-700">
                  {material.titulo}
                </h3>
                <p className="text-sm text-gray-700 mt-3">
                  Por <span className="font-medium">{material.monitor}</span>
                </p>
                <button
                  className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
                >
                  Ver mais
                </button>
              </li>
            ))}
          </ul>
          {grupo.materiais.length > 6 && (
            <button
              onClick={() => handleViewAll("materiais")}
              className="mt-6 block text-center text-blue-600 hover:underline font-medium"
            >
              Ver todos os materiais
            </button>
          )}
        </section>
      </main>

      {chatOpen && (
        <div
          className="fixed z-50 bg-white shadow-lg rounded-lg border border-gray-300"
          style={{
            top: chatPosition.y,
            left: chatPosition.x,
            width: chatSize.width,
            height: chatSize.height,
            maxWidth: "95vw", // Garante que o chat não ultrapasse a largura da tela
            maxHeight: "90vh", // Garante que o chat não ultrapasse a altura da tela
          }}
          ref={chatRef}
          onMouseDown={handleDragStart}
        >
          {/* Título */}
          <div
            className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center cursor-move rounded-t-lg"
            onMouseDown={handleDragStart}
          >
            <h3 className="text-lg font-bold truncate">{grupo.nome}</h3>
            <button
              onClick={() => setChatOpen(false)}
              className="text-white text-xl hover:text-gray-200 transition"
            >
              ✖
            </button>
          </div>

          {/* Mensagens */}
          <div
            className="p-4 overflow-y-auto"
            style={{
              height: `calc(${chatSize.height}px - 120px)`,
              maxHeight: "calc(90vh - 120px)", // Mantém altura responsiva
            }}
          >
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 mb-2 rounded-lg ${
                    msg.startsWith("Você")
                      ? "bg-blue-600 text-white self-end"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {msg}
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">Nenhuma mensagem ainda.</p>
            )}
          </div>

          {/* Campo de Envio */}
          <div className="flex items-center border-t border-gray-200 p-2 relative bg-gray-50">
            <button
              className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition mr-4"
              onClick={() => setShowEmojiPicker((prev) => !prev)}
            >
              <FaSmile className="text-xl text-gray-600" />
            </button>
            {showEmojiPicker && (
              <div className="absolute bottom-16 left-4 z-50 max-w-xs">
                <EmojiPicker onEmojiClick={onEmojiClick} />
              </div>
            )}
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Escreva sua mensagem..."
              className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition"
            >
              Enviar
            </button>
          </div>

          {/* Controle de redimensionamento */}
          <div
            className="absolute bottom-0 right-0 w-4 h-4 bg-blue-600 cursor-se-resize"
            onMouseDown={handleResizeStart}
          />
        </div>
      )}
    </div>
  );
}