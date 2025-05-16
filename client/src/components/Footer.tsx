import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold font-poppins text-primary">
              Pedro<span className="text-light">.dev</span>
            </a>
            <p className="text-gray-400 mt-2">Desenvolvedor Backend especializado em C# e .NET</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/PedroGualberto1203" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-primary transition-colors hover-zoom"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/pedro-gualberto-9a2b62316/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-primary transition-colors hover-zoom"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:pedro.gualberto@email.com" 
              className="text-gray-400 hover:text-primary transition-colors hover-zoom"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Pedro Gualberto. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
