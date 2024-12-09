"use client";

import Image from "next/image";

export default function AboutUsPage() {
  // Dados dos estudantes
  const students = [
    {
      name: "Nicole França",
      image: "/fotos/nicole.jpg",
      description:
        "Nick é uma estudante dedicada de Engenharia de Software na Ulbra Palmas. Apaixonada por inovação, ela adora explorar novas tecnologias e está sempre pronta para liderar projetos criativos. Seu interesse especial é no design de interfaces intuitivas e amigáveis.",
    },
    {
      name: "João Pedro",
      image: "/fotos/jp.jpg",
      description:
        "Com 19 anos, João Pedro é um entusiasta da área de desenvolvimento de software. Estudante na Ulbra Palmas, ele se destaca em programação e gosta de criar soluções práticas para problemas do dia a dia. Atualmente, está focado em aprofundar seus conhecimentos em JavaScript e frameworks modernos.",
    },
    {
      name: "Guilherme Domiciano",
      image: "/fotos/domiciano.jpg",
      description:
        "Também com 19 anos, Domiciano é um estudante apaixonado por engenharia de software. Ele tem um grande interesse em sistemas distribuídos e otimização de desempenho. Sempre disposto a aprender algo novo, ele acredita que trabalho em equipe é a chave para o sucesso.",
    },
    {
      name: "Davi Pinheiro",
      image: "/fotos/davi.jpg",
      description:
        "Davi, de 19 anos, é um estudante focado e comprometido com seus objetivos. Na Ulbra Palmas, ele explora as diversas áreas da engenharia de software, com um interesse especial em inteligência artificial e aprendizado de máquina. Sempre curioso, ele está constantemente em busca de novos desafios.",
    },
    {
      name: "Rafael Tavares",
      image: "/fotos/rafinha.jpg",
      description:
        "Com 22 anos, Rafael é um estudante com uma visão ampla da engenharia de software. Ele se interessa por gestão de projetos e metodologias ágeis, sendo uma líder natural em projetos colaborativos. Além disso, Rafael é apaixonado por tecnologia e inovação.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-100 py-12 px-6 md:px-12">
      <h1 className="text-5xl font-extrabold text-center text-blue-700 mb-16">Sobre Nós</h1>

      <div className="space-y-16">
        {students.map((student, index) => (
          <div
            key={student.name}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-8 md:gap-16`}
          >
            {/* Imagem */}
            <div className="w-56 h-56 flex-shrink-0">
              <Image
                src={student.image}
                alt={student.name}
                width={224}
                height={224}
                className="rounded-lg shadow-xl object-cover border-4 border-blue-200"
              />
            </div>

            {/* Texto */}
            <div className="text-center md:text-left max-w-lg">
              <h2 className="text-3xl font-semibold text-blue-800 mb-4">{student.name}</h2>
              <p className="text-gray-700 leading-relaxed">{student.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Texto Final */}
      <div className="mt-16 bg-blue-600 text-white py-8 px-6 md:px-12 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-4">Nosso Compromisso</h2>
        <p className="text-lg text-center leading-relaxed">
          Trabalhamos dia e noite no sonho do <span className="font-bold">Syner</span>, sempre buscando torná-lo o melhor possível. Cada linha de código, cada design e cada decisão é feita com dedicação e paixão. Acreditamos que juntos podemos transformar esse sonho em uma realidade que impactará muitas vidas.
        </p>
      </div>
    </div>
  );
}
