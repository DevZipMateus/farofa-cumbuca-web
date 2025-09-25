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
        behavior: "smooth"
      });
    }
  };
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url(/hero-bg.jpg)'
    }}></div>
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-secondary/70"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-xl animate-float" style={{
      animationDelay: "1s"
    }}></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Fundo esmaecido atrás dos textos */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12">
            {/* Logo grande para mobile */}
            <div className="mb-6 sm:mb-8">
              <img src="/logo.png" alt="Farofa Cumbuca" className="h-16 sm:h-20 md:h-24 lg:h-32 w-auto mx-auto opacity-90" />
            </div>

            {/* H1 - Nome da empresa */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 tracking-tight leading-tight">
              Farofa Cumbuca
            </h1>

            {/* H2 - Descrição da empresa */}
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary-foreground/90 mb-6 sm:mb-8 font-light leading-relaxed px-2 sm:px-0">
              Desde 2020, oferecemos farofa artesanal de qualidade excepcional para seus churrascos e encontros especiais
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-foreground/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4 lg:px-0">
              Do simples pote transparente às elegantes embalagens de hoje, nossa farofa conquistou o paladar brasileiro com sabor, qualidade e confiança.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-0">
              <Button variant="accent" size="lg" onClick={() => scrollToSection("produtos")} className="w-full sm:w-auto min-w-[180px] sm:min-w-[200px] text-sm sm:text-base">
                Conheça nossos produtos
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              
              <Button variant="outline" size="lg" onClick={() => window.open("https://wa.me/5555999739234", "_blank")} className="w-full sm:w-auto min-w-[180px] sm:min-w-[200px] border-primary-foreground/60 hover:bg-primary-foreground text-slate-950 text-sm sm:text-base">
                Fale conosco
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-primary-foreground/80">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent-light">5+</div>
                <div className="text-xs sm:text-sm">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent-light">100%</div>
                <div className="text-xs sm:text-sm">Artesanal</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent-light">230g</div>
                <div className="text-xs sm:text-sm">Embalagens práticas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;