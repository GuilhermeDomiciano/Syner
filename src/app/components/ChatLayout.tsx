"use client"; // Marca o componente como um Client Component

import { ReactNode } from 'react';
import ChatSidebar, { Contact } from './ChatSidebar'; // Certifique-se de importar o tipo Contact do arquivo correto

// Adiciona a prop onSelectContact para ser passada ao ChatSidebar
export default function ChatLayout({
  children,
  onSelectContact,
}: {
  children: ReactNode;
  onSelectContact: (contact: Contact) => void;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Barra lateral de contatos */}
      <aside className="w-64 fixed left-0 top-0 h-full bg-white shadow-lg z-10">
        <ChatSidebar onSelectContact={onSelectContact} /> {/* Passa onSelectContact corretamente */}
      </aside>

      {/* Conteúdo do chat */}
      <div className="flex-1 ml-64 p-6"> {/* Margin-left para evitar a sobreposição */}
        {children} {/* Aqui é onde o conteúdo do chat será carregado */}
      </div>
    </div>
  );
}
