import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppContact = () => {
    window.open("https://wa.me/5555999739234", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://instagram.com/farofacumbuca", "_blank");
  };

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
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4 sm:mb-6">
              <img src="/logo.png" alt="Farofa Cumbuca" className="h-10 sm:h-12 w-auto opacity-90" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Farofa Cumbuca</h3>
                <p className="text-xs sm:text-sm opacity-80">Sabor autêntico desde 2020</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Farofa artesanal de qualidade excepcional. Nossa paixão pela culinária 
              brasileira transformou-se em uma experiência única de sabor, qualidade e confiança.
            </p>
            <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4">
              <button
                onClick={handleWhatsAppContact}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                onClick={handleInstagramClick}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <a
                href="mailto:farofacumbuca@gmail.com"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Navegação</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 text-sm sm:text-base"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 text-sm sm:text-base"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("produtos")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 text-sm sm:text-base"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 text-sm sm:text-base"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contato</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-2 sm:space-x-3">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 opacity-80" />
                <span className="text-xs sm:text-sm text-primary-foreground/80">(55) 99973-9234</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 sm:space-x-3">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 opacity-80" />
                <span className="text-xs sm:text-sm text-primary-foreground/80 break-words">farofacumbuca@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 sm:space-x-3">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 opacity-80" />
                <span className="text-xs sm:text-sm text-primary-foreground/80">Rua Apel 161</span>
              </div>
              <div className="text-xs sm:text-sm text-primary-foreground/80 mt-3 sm:mt-4">
                <strong>Horário:</strong><br />
                Segunda a sexta: 14h às 19h
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
            <p className="text-xs sm:text-sm text-primary-foreground/80">
              © {currentYear} Farofa Cumbuca. Todos os direitos reservados.
            </p>
            <p className="text-xs sm:text-sm text-primary-foreground/80">
              CNPJ: 40.808.856/0001-02
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;