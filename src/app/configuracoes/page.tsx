"use client";

export default function ConfiguracoesPage() {
  const handleSave = () => {
    alert("Configurações salvas com sucesso!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Cabeçalho */}
      <header className="w-full bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-xl font-bold text-center">Configurações</h1>
      </header>

      {/* Conteúdo */}
      <main className="flex-1 w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg mt-6">
        <h2 className="text-2xl font-semibold mb-4">Preferências</h2>

        {/* Tema do Site */}
        <div className="mb-6">
          <label htmlFor="theme" className="block text-lg font-medium mb-2">
            Tema do Site
          </label>
          <select
            id="theme"
            className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
          >
            <option value="light">Claro</option>
            <option value="dark">Escuro</option>
          </select>
        </div>

        {/* Notificações */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Notificações</label>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              id="email-notifications"
              className="w-5 h-5 text-blue-600 focus:ring focus:ring-blue-300"
            />
            <label htmlFor="email-notifications" className="text-gray-700">
              Receber notificações por e-mail
            </label>
          </div>
        </div>

        {/* Alteração de senha */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-lg font-medium mb-2">
            Alterar Senha
          </label>
          <input
            type="password"
            id="password"
            placeholder="Digite a nova senha"
            className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Idioma */}
        <div className="mb-6">
          <label htmlFor="language" className="block text-lg font-medium mb-2">
            Idioma
          </label>
          <select
            id="language"
            className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
          >
            <option value="pt-br">Português (BR)</option>
            <option value="en">Inglês (EN)</option>
            <option value="es">Espanhol (ES)</option>
          </select>
        </div>

        {/* Botões de Ação */}
        <div className="flex justify-end gap-4">
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Salvar
          </button>
          <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400">
            Cancelar
          </button>
        </div>
      </main>
    </div>
  );
}
