"use client"; // Para habilitar hooks no Next.js (como useState)

import { useState } from 'react'; // Importação do useState
import ChatLayout from '../components/ChatLayout'; // Certifique-se de que o caminho está correto
import ChatWindow from '../components/ChatWindow'; // Certifique-se de que o caminho está correto

// Definir o tipo Contact
type Contact = {
  id: number;
  name: string;
  role: string;
};

export default function ChatPage() {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null); // Estado para o contato selecionado

  return (
    <ChatLayout onSelectContact={setSelectedContact}> {/* Passa a função setSelectedContact para o ChatLayout */}
      {selectedContact ? (
        <ChatWindow contact={selectedContact} /> // Exibe a janela de chat ao selecionar um contato
      ) : (
        // Exibe a mensagem padrão quando nenhum contato está selecionado
        <div className="flex justify-center items-center h-full">
          <p className="text-gray-500 text-lg">Selecione um contato para iniciar a conversa.</p>
        </div>
      )}
    </ChatLayout>
  );
}
