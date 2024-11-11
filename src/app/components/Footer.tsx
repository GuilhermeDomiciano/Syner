export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Syner. Todos os direitos reservados.</p>
          <p className="mt-2">
            Site desenvolvido na matéria Desenvolvimento de Software para Web. Conecte-se conosco: 
            <a href="https://www.instagram.com/syner_oficial/" target="_blank" className="ml-2 text-yellow-500 hover:text-yellow-400">
              Instagram
            </a>
          </p>
        </div>
      </footer>
    );
  }