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
          ? "bg-background/95 backdrop-blur-md shadow-elegant"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Farofa Cumbuca" className="h-12 w-auto" />
            <div>
              <h2 className="text-xl font-bold text-primary">Farofa Cumbuca</h2>
              <p className="text-xs text-muted-foreground">Sabor autêntico</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Contato
            </button>
            <Button
              variant="hero"
              size="sm"
              onClick={() => window.open("https://wa.me/5555999739234", "_blank")}
            >
              Fale conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t animate-slide-up">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("produtos")}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Produtos
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Contato
              </button>
              <Button
                variant="hero"
                className="w-full mt-4"
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