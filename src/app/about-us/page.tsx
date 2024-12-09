"use client";

import Image from "next/image";

export default function AboutUsPage() {
  // Dados dos estudantes
  const students = [
    {
      name: "Nicole",
      image: "/fotos/nicole.jpg",
      description:
        "Nicole é uma estudante dedicada de Engenharia de Software na Ulbra Palmas. Apaixonada por inovação, ela adora explorar novas tecnologias e está sempre pronta para liderar projetos criativos. Seu interesse especial é no design de interfaces intuitivas e amigáveis.",
      nomelink: "",
      link: "",
    },
    {
      name: "João Pedro",
      image: "/fotos/jp.jpg",
      description:
        "Com 19 anos, João Pedro é um entusiasta da área de desenvolvimento de software. Estudante na Ulbra Palmas, ele se destaca em programação e gosta de criar soluções práticas para problemas do dia a dia. Atualmente, está focado em aprofundar seus conhecimentos em JavaScript e frameworks modernos. Projeto Secundário:",
      nomelink: "Site Saint Seiya",
      link: "https://site-saint-seiya2-0.vercel.app/",
    },
    {
      name: "Guilherme Domiciano",
      image: "/fotos/domiciano.jpg",
      description:
        "Também com 19 anos, Domiciano é um estudante apaixonado por engenharia de software. Ele tem um grande interesse em sistemas distribuídos e otimização de desempenho. Sempre disposto a aprender algo novo, ele acredita que trabalho em equipe é a chave para o sucesso.",
      nomelink: "",
      link: "",
    },
    {
      name: "Davi Pinheiro",
      image: "/fotos/davi.jpg",
      description:
        "Davi, de 19 anos, é um estudante focado e comprometido com seus objetivos. Na Ulbra Palmas, ele explora as diversas áreas da engenharia de software, com um interesse especial em inteligência artificial e aprendizado de máquina. Sempre curioso, ele está constantemente em busca de novos desafios.",
      nomelink: "",
      link: "",
    },
    {
      name: "Rafael Tavares",
      image: "/fotos/rafinha.jpg",
      description:
        "Com 22 anos, Rafael é um estudante com uma visão ampla da engenharia de software. Ele se interessa por gestão de projetos e metodologias ágeis, sendo uma líder natural em projetos colaborativos. Além disso, Rafael é apaixonado por tecnologia e inovação.",
      nomelink: "",
      link: "",
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
            <div className={`text-center ${index % 2 === 0 ? "md:text-left" : "md:text-right"} max-w-lg`}>
              <h2 className="text-3xl font-semibold text-blue-800 mb-4">{student.name}</h2>
              <p className="text-gray-700 leading-relaxed">{student.description}</p>
              {student.link && (
                <p className={`mt-4 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                  <a
                    href={student.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:text-blue-800 transition"
                  >
                    {student.nomelink}
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Texto Final */}
      <div className="mt-16 px-6 py-10 bg-gradient-to-r from-blue-50 to-blue-100 border-t-4 border-blue-300 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-4">Nosso Compromisso</h2>
        <p className="text-lg text-center text-gray-700 leading-relaxed">
          Trabalhamos dia e noite no sonho do <span className="font-bold text-blue-800">Syner</span>,
          sempre buscando torná-lo o melhor possível. Cada linha de código, cada design e cada
          decisão é feita com dedicação e paixão. Acreditamos que juntos podemos transformar esse
          sonho em uma realidade que impactará muitas vidas.
        </p>
        <div className="flex justify-center mt-8">
          <Image
            src="/icons/syner-logo.png"
            alt="Logo Syner"
            width={100}
            height={100}
            className="opacity-80"
          />
        </div>
      </div>
    </div>
  );
}
