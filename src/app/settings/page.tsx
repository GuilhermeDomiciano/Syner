"use client";

import { useState, useEffect } from "react";

export default function ConfiguracoesPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<"pt-br" | "en" | "es">("pt-br");
  const [tempTheme, setTempTheme] = useState<"light" | "dark">("light");
  const [tempLanguage, setTempLanguage] = useState<"pt-br" | "en" | "es">("pt-br");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") || "light") as "light" | "dark";
    const savedLanguage = (localStorage.getItem("language") || "pt-br") as "pt-br" | "en" | "es";
    setTheme(savedTheme);
    setLanguage(savedLanguage);
    setTempTheme(savedTheme);
    setTempLanguage(savedLanguage);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const handleSave = () => {
    setTheme(tempTheme);
    setLanguage(tempLanguage);
    localStorage.setItem("theme", tempTheme);
    localStorage.setItem("language", tempLanguage);
    document.documentElement.classList.toggle("dark", tempTheme === "dark");

    setShowPopup(true); // Exibe o pop-up
    setTimeout(() => setShowPopup(false), 3000); // Oculta o pop-up após 3 segundos
  };

  const translations = {
    "pt-br": {
      title: "Configurações",
      preferences: "Preferências",
      siteTheme: "Tema do Site",
      notifications: "Notificações",
      emailNotifications: "Receber notificações por e-mail",
      changePassword: "Alterar Senha",
      newPassword: "Digite a nova senha",
      language: "Idioma",
      save: "Salvar",
      cancel: "Cancelar",
      popupMessage: "Configurações salvas com sucesso!",
    },
    en: {
      title: "Settings",
      preferences: "Preferences",
      siteTheme: "Site Theme",
      notifications: "Notifications",
      emailNotifications: "Receive email notifications",
      changePassword: "Change Password",
      newPassword: "Enter new password",
      language: "Language",
      save: "Save",
      cancel: "Cancel",
      popupMessage: "Settings saved successfully!",
    },
    es: {
      title: "Configuraciones",
      preferences: "Preferencias",
      siteTheme: "Tema del Sitio",
      notifications: "Notificaciones",
      emailNotifications: "Recibir notificaciones por correo electrónico",
      changePassword: "Cambiar Contraseña",
      newPassword: "Ingrese una nueva contraseña",
      language: "Idioma",
      save: "Guardar",
      cancel: "Cancelar",
      popupMessage: "¡Configuraciones guardadas con éxito!",
    },
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-darkBackground flex flex-col items-center transition-colors">
      {/* Cabeçalho */}
      <header className="w-full bg-blue-600 dark:bg-darkCard text-white p-4 shadow-md">
        <h1 className="text-xl font-bold text-center">{t.title}</h1>
      </header>

      {/* Pop-up de Confirmação */}
      {showPopup && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
          {t.popupMessage}
        </div>
      )}

      {/* Conteúdo */}
      <main className="flex-1 w-full max-w-3xl p-6 bg-white dark:bg-darkCard rounded-lg shadow-lg mt-6">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">{t.preferences}</h2>

        {/* Tema do Site */}
        <div className="mb-6">
          <label htmlFor="theme" className="block text-lg font-medium mb-2 dark:text-gray-300">
            {t.siteTheme}
          </label>
          <select
            id="theme"
            value={tempTheme}
            onChange={(e) => setTempTheme(e.target.value as "light" | "dark")}
            className="w-full border-gray-300 dark:border-gray-600 dark:bg-darkBackground dark:text-white rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
          >
            <option value="light">Claro</option>
            <option value="dark">Escuro</option>
          </select>
        </div>

        {/* Notificações */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2 dark:text-gray-300">
            {t.notifications}
          </label>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              id="email-notifications"
              className="w-5 h-5 text-blue-600 focus:ring focus:ring-blue-300"
            />
            <label htmlFor="email-notifications" className="text-gray-700 dark:text-gray-300">
              {t.emailNotifications}
            </label>
          </div>
        </div>

        {/* Alteração de senha */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-lg font-medium mb-2 dark:text-gray-300">
            {t.changePassword}
          </label>
          <input
            type="password"
            id="password"
            placeholder={t.newPassword}
            className="w-full border-gray-300 dark:border-gray-600 dark:bg-darkBackground dark:text-white rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Idioma */}
        <div className="mb-6">
          <label htmlFor="language" className="block text-lg font-medium mb-2 dark:text-gray-300">
            {t.language}
          </label>
          <select
            id="language"
            value={tempLanguage}
            onChange={(e) => setTempLanguage(e.target.value as "pt-br" | "en" | "es")}
            className="w-full border-gray-300 dark:border-gray-600 dark:bg-darkBackground dark:text-white rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
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
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {t.save}
          </button>
          <button className="bg-gray-300 text-gray-700 dark:bg-gray-600 dark:text-white px-6 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-700 transition">
            {t.cancel}
          </button>
        </div>
      </main>
    </div>
  );
}
