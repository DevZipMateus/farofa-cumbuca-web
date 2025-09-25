import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Heart, Clock } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 sm:mb-6">
              Nossa história
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              Conheça a trajetória da Farofa Cumbuca e descubra como nossa paixão pela culinária se transformou em uma experiência única de sabor.
            </p>
          </div>

          {/* História */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div className="animate-slide-up px-4 sm:px-0">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">
                Uma paixão que nasceu em 2020
              </h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Em 2020, uma empresa modesta nasceu da paixão pela culinária. Daniel Barcellos 
                iniciou com a criação de kits com feijoada, couve, arroz e uma irresistível farofa. 
              </p>
              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Esta farofa logo conquistou o paladar das pessoas em churrascos e encontros. 
                Do simples pote transparente às novas elegantes embalagens, a Farofa Cumbuca 
                surge como sua produção principal em uma linha de sabores em constante 
                aprimoramento.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Hoje, oferecemos uma experiência de sabor, qualidade e confiança que 
                transforma qualquer refeição em um momento especial.
              </p>
            </div>

            <div className="relative animate-slide-up">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-elegant hover:shadow-strong transition-all duration-300">
                <img 
                  src="/gallery/products-4.jpg" 
                  alt="Farofa Cumbuca sabor Cebola sendo servida - tradição artesanal"
                  className="w-full h-64 sm:h-80 lg:h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                  <p className="text-white font-medium text-sm sm:text-lg">Tradição artesanal</p>
                  <p className="text-white/80 text-xs sm:text-sm">Sabor que conquista paladares</p>
                </div>
              </div>
            </div>
          </div>

          {/* Valores e Diferenciais */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="shadow-elegant hover:shadow-strong transition-all duration-300 group">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-primary mb-2">Qualidade</h4>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  Ingredientes selecionados e processo artesanal garantem sabor autêntico
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-strong transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                  <Clock className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">Tradição</h4>
                <p className="text-muted-foreground text-sm">
                  5 anos aprimorando nossa receita para oferecer o melhor sabor
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-strong transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">Família</h4>
                <p className="text-muted-foreground text-sm">
                  Ideal para churrascos, encontros e momentos especiais em família
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-strong transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">Paixão</h4>
                <p className="text-muted-foreground text-sm">
                  Cada produto é feito com amor e dedicação pela culinária brasileira
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;