import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo grande para mobile */}
          <div className="mb-8">
            <img 
              src="/logo.png" 
              alt="Farofa Cumbuca" 
              className="h-24 md:h-32 w-auto mx-auto opacity-90"
            />
          </div>

          {/* H1 - Nome da empresa */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 tracking-tight">
            Farofa Cumbuca
          </h1>

          {/* H2 - Descrição da empresa */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 mb-8 font-light leading-relaxed">
            Desde 2020, oferecemos farofa artesanal de qualidade excepcional para seus churrascos e encontros especiais
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Do simples pote transparente às elegantes embalagens de hoje, nossa farofa conquistou o paladar brasileiro com sabor, qualidade e confiança.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="accent"
              size="lg"
              onClick={() => scrollToSection("produtos")}
              className="min-w-[200px]"
            >
              Conheça nossos produtos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("https://wa.me/5555999739234", "_blank")}
              className="min-w-[200px] border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Fale conosco
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground/80">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-light">5+</div>
              <div className="text-sm">Anos de experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-light">100%</div>
              <div className="text-sm">Artesanal</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-light">230g</div>
              <div className="text-sm">Embalagens práticas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;