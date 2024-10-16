// Definir o tipo Contact
export type Contact = {
    id: number;
    name: string;
    role: string;
  };
  
  export default function ChatSidebar({
    onSelectContact,
  }: {
    onSelectContact: (contact: Contact) => void;
  }) {
    const contacts: Contact[] = [
      { id: 1, name: 'Silas Oliveira', role: 'Monitor de Matemática' },
      { id: 2, name: 'Fernanda Martins', role: 'Monitor de Matemática' },
      { id: 3, name: 'Amanda Silva', role: 'Monitor de Matemática' },
      { id: 4, name: 'José Arthur', role: 'Monitor de Matemática' },
      { id: 5, name: 'Maria Eduarda', role: 'Monitor de Matemática' },
    ];
  
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Contatos</h2>
        <ul className="space-y-4">
          {contacts.map((contact) => (
            <li
              key={contact.id}
              className="cursor-pointer"
              onClick={() => onSelectContact(contact)}
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div> {/* Placeholder para a imagem */}
                <div>
                  <p className="font-semibold">{contact.name}</p>
                  <p className="text-gray-500 text-sm">{contact.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  