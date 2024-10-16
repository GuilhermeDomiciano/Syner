// Definir o tipo para os contatos
type Contact = {
    id: number;
    name: string;
    role: string;
  };
  
  export default function ChatWindow({ contact }: { contact: Contact }) {
    if (!contact) {
      return <div className="text-gray-500">Nenhum contato selecionado</div>;
    }
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full">
        <h2 className="text-xl font-semibold mb-4">{contact.name}</h2>
        <div className="flex-1 overflow-y-auto mb-4">
          {/* Conteúdo do chat */} 
          <div className="bg-gray-100 p-4 rounded-lg mb-2">
            Olá, como posso te ajudar?
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-lg ml-auto mb-2">
            Oi, preciso de ajuda com matemática.
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="flex-1 border border-gray-300 p-3 rounded-lg"
            placeholder="Escreva sua mensagem..."
          />
          <button className="bg-blue-500 text-white p-3 rounded-lg">Enviar</button>
        </div>
      </div>
    );
  }
  