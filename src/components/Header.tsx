import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md shadow-elegant"
          : "bg-black/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img src="/logo.png" alt="Farofa Cumbuca" className="h-8 sm:h-10 lg:h-12 w-auto" />
            <div className="hidden sm:block">
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-white">Farofa Cumbuca</h2>
              <p className="text-xs text-white/70">Sabor autêntico</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-white hover:text-accent transition-colors duration-300 font-medium text-sm xl:text-base"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-white hover:text-accent transition-colors duration-300 font-medium text-sm xl:text-base"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-white hover:text-accent transition-colors duration-300 font-medium text-sm xl:text-base"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-white hover:text-accent transition-colors duration-300 font-medium text-sm xl:text-base"
            >
              Contato
            </button>
            <Button
              variant="hero"
              size="sm"
              onClick={() => window.open("https://wa.me/5555999739234", "_blank")}
              className="text-xs sm:text-sm"
            >
              Fale conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10 animate-slide-up">
            <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block w-full text-left py-2 text-white hover:text-accent transition-colors duration-300 font-medium text-sm sm:text-base"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="block w-full text-left py-2 text-white hover:text-accent transition-colors duration-300 font-medium text-sm sm:text-base"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("produtos")}
                className="block w-full text-left py-2 text-white hover:text-accent transition-colors duration-300 font-medium text-sm sm:text-base"
              >
                Produtos
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="block w-full text-left py-2 text-white hover:text-accent transition-colors duration-300 font-medium text-sm sm:text-base"
              >
                Contato
              </button>
              <Button
                variant="hero"
                className="w-full mt-3 sm:mt-4 text-sm sm:text-base"
                onClick={() => window.open("https://wa.me/5555999739234", "_blank")}
              >
                Fale conosco
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;