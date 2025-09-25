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
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.png" alt="Farofa Cumbuca" className="h-12 w-auto opacity-90" />
              <div>
                <h3 className="text-xl font-bold">Farofa Cumbuca</h3>
                <p className="text-sm opacity-80">Sabor autêntico desde 2020</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Farofa artesanal de qualidade excepcional. Nossa paixão pela culinária 
              brasileira transformou-se em uma experiência única de sabor, qualidade e confiança.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleWhatsAppContact}
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5" />
              </button>
              <button
                onClick={handleInstagramClick}
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </button>
              <a
                href="mailto:farofacumbuca@gmail.com"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("produtos")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 opacity-80" />
                <span className="text-sm text-primary-foreground/80">(55) 99973-9234</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 opacity-80" />
                <span className="text-sm text-primary-foreground/80">farofacumbuca@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 opacity-80" />
                <span className="text-sm text-primary-foreground/80">Rua Apel 161</span>
              </div>
              <div className="text-sm text-primary-foreground/80 mt-4">
                <strong>Horário:</strong><br />
                Segunda a sexta: 14h às 19h
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/80">
              © {currentYear} Farofa Cumbuca. Todos os direitos reservados.
            </p>
            <p className="text-sm text-primary-foreground/80">
              CNPJ: 40.808.856/0001-02
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;