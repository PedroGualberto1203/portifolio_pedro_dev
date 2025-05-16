import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-dark-light bg-opacity-90 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-poppins text-primary">
          Pedro<span className="text-light">.dev</span>
        </a>
        <div className="md:flex hidden space-x-6">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#skills" className="hover:text-primary transition-colors">Habilidades</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experiência</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projetos</a>
          <a href="#education" className="hover:text-primary transition-colors">Formação</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contato</a>
        </div>
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-light text-2xl"
          aria-label="Toggle mobile menu"
        >
          <Menu />
        </button>
      </div>
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-dark-light w-full`}>
        <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
          <a href="#home" className="py-2 hover:text-primary transition-colors" onClick={closeMobileMenu}>Home</a>
          <a href="#skills" className="py-2 hover:text-primary transition-colors" onClick={closeMobileMenu}>Habilidades</a>
          <a href="#experience" className="py-2 hover:text-primary transition-colors" onClick={closeMobileMenu}>Experiência</a>
          <a href="#projects" className="py-2 hover:text-primary transition-colors" onClick={closeMobileMenu}>Projetos</a>
          <a href="#education" className="py-2 hover:text-primary transition-colors" onClick={closeMobileMenu}>Formação</a>
          <a href="#contact" className="py-2 hover:text-primary transition-colors" onClick={closeMobileMenu}>Contato</a>
        </div>
      </div>
    </nav>
  );
}
