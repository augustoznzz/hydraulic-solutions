import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Search className="text-primary-blue text-2xl" />
            <h1 className="text-2xl font-bold text-dark-gray">Caça Vazamentos</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-dark-gray hover:text-primary-blue transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-dark-gray hover:text-primary-blue transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-dark-gray hover:text-primary-blue transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-dark-gray hover:text-primary-blue transition-colors"
            >
              Contato
            </button>
          </nav>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-dark-gray"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="text-xl" />
          </Button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left text-dark-gray hover:text-primary-blue transition-colors py-2"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left text-dark-gray hover:text-primary-blue transition-colors py-2"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="block w-full text-left text-dark-gray hover:text-primary-blue transition-colors py-2"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="block w-full text-left text-dark-gray hover:text-primary-blue transition-colors py-2"
            >
              Contato
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
