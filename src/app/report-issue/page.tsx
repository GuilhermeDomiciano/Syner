"use client";

import { useState } from "react";

export default function ReportIssuePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issueType: "",
    description: "",
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simular envio dos dados do formulário
    console.log("Issue submitted:", formData);

    // Exibir pop-up de confirmação
    setShowConfirmation(true);

    // Limpar o formulário
    setFormData({
      name: "",
      email: "",
      issueType: "",
      description: "",
    });
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-6 md:px-12">
      <h1 className="text-5xl font-extrabold text-center text-blue-700 mb-8">Relatar Problema</h1>

      <div className="bg-white shadow-xl rounded-lg p-8 max-w-3xl mx-auto">
        <p className="text-gray-700 text-lg mb-6 text-center">
          Encontrou um problema? Conte-nos para que possamos melhorar!
        </p>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Seu Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite seu nome"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Seu Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite seu email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Tipo de Problema */}
          <div>
            <label htmlFor="issueType" className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Problema
            </label>
            <select
              id="issueType"
              name="issueType"
              value={formData.issueType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>
                Selecione um tipo de problema
              </option>
              <option value="Bug">Bug</option>
              <option value="Sugestão">Sugestão</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          {/* Descrição */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Descrição
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Descreva o problema ou sugestão com detalhes"
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          {/* Botão de Enviar */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>

      {/* Pop-up de Confirmação */}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Obrigado!</h2>
            <p className="text-gray-700 mb-6">
              Seu problema foi enviado com sucesso. Agradecemos pelo seu feedback!
            </p>
            <button
              onClick={closeConfirmation}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
