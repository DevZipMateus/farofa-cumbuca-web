import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Scale, Star } from "lucide-react";
const Products = () => {
  const products = [{
    id: 1,
    name: "Farofa Cumbuca Tradicional",
    description: "Nossa receita clássica que conquistou o paladar brasileiro. Perfeita para acompanhar feijoada, churrascos e refeições especiais.",
    weight: "230g",
    type: "Embalagem individual",
    features: ["Receita tradicional", "Sabor marcante", "Embalagem prática"],
    icon: <Package className="h-6 w-6" />,
    highlight: "Mais vendida"
  }, {
    id: 2,
    name: "Farofa Cumbuca Premium",
    description: "Uma versão especial da nossa farofa com ingredientes selecionados e toque especial para paladares exigentes.",
    weight: "230g",
    type: "Embalagem premium",
    features: ["Ingredientes premium", "Sabor refinado", "Embalagem elegante"],
    icon: <Star className="h-6 w-6" />,
    highlight: "Premium"
  }, {
    id: 3,
    name: "Farofa Cumbuca a Granel",
    description: "Para estabelecimentos e grandes consumidores. Qualidade Cumbuca em quantidades maiores com preço especial.",
    weight: "Sob consulta",
    type: "Venda a granel",
    features: ["Quantidade personalizada", "Preço especial", "Para estabelecimentos"],
    icon: <Scale className="h-6 w-6" />,
    highlight: "Atacado"
  }];
  const handleWhatsAppContact = (productName: string) => {
    const message = `Olá! Tenho interesse no produto: ${productName}. Gostaria de mais informações.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5555999739234?text=${encodedMessage}`, "_blank");
  };
  return <section id="produtos" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 sm:mb-6">
              Nossos produtos
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
              Descubra nossa linha completa de farofas artesanais. Cada produto é cuidadosamente preparado 
              para oferecer uma experiência única de sabor e qualidade.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {products.map((product, index) => <Card key={product.id} className="shadow-elegant hover:shadow-strong transition-all duration-300 group animate-slide-up border-0 bg-card/80 backdrop-blur-sm" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <CardHeader className="text-center pb-4">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <div className="text-primary-foreground">
                        {product.icon}
                      </div>
                    </div>
                    {product.highlight && <Badge variant="secondary" className="absolute -top-2 -right-2 bg-accent text-accent-foreground font-medium">
                        {product.highlight}
                      </Badge>}
                  </div>
                  <CardTitle className="text-xl text-primary">{product.name}</CardTitle>
                  <div className="flex justify-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      {product.weight}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {product.type}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary text-sm">Características:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => <li key={idx} className="text-xs text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                          {feature}
                        </li>)}
                    </ul>
                  </div>

                  <Button variant="hero" className="w-full mt-6" onClick={() => handleWhatsAppContact(product.name)}>
                    Solicitar orçamento
                  </Button>
                </CardContent>
              </Card>)}
          </div>

          {/* Product Gallery */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-primary text-center mb-6 sm:mb-8">
              Conheça nossos sabores
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              <div className="relative group overflow-hidden rounded-lg sm:rounded-xl shadow-elegant hover:shadow-strong transition-all duration-300 bg-muted/20">
                <img src="/gallery/products-1.jpg" alt="Linha completa de farofas Cumbuca com diferentes sabores" className="w-full h-48 sm:h-56 lg:h-64 object-contain group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <p className="text-primary-foreground font-medium text-sm sm:text-base">Linha completa</p>
                    <p className="text-primary-foreground/80 text-xs sm:text-sm">Diversos sabores</p>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl shadow-elegant hover:shadow-strong transition-all duration-300 bg-muted/20">
                <img src="/gallery/products-2.jpg" alt="Embalagens elegantes da Farofa Cumbuca" className="w-full h-auto min-h-[250px] object-contain group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <p className="text-secondary-foreground font-medium">Embalagem premium</p>
                    <p className="text-secondary-foreground/80 text-sm">Design moderno</p>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl shadow-elegant hover:shadow-strong transition-all duration-300 bg-muted/20">
                <img src="/gallery/products-3.jpg" alt="Variedade de sabores da Farofa Cumbuca" className="w-full h-auto min-h-[250px] object-contain group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <p className="text-accent-foreground font-medium">Sabores únicos</p>
                    <p className="text-accent-foreground/80 text-sm">Qualidade artesanal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-primary rounded-xl sm:rounded-2xl p-6 sm:p-8 text-primary-foreground">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Pronto para experimentar nossa farofa?
            </h3>
            <p className="mb-6 opacity-90 text-sm sm:text-base px-4 sm:px-0">
              Entre em contato conosco e descubra como nossos produtos podem transformar suas refeições.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button variant="accent" size="lg" onClick={() => handleWhatsAppContact("Catálogo completo")} className="w-full sm:w-auto text-sm sm:text-base">
                Ver catálogo completo
              </Button>
              <Button variant="outline" size="lg" onClick={() => {
              const element = document.getElementById("contato");
              if (element) {
                const headerHeight = 80;
                const elementPosition = element.offsetTop - headerHeight;
                window.scrollTo({
                  top: elementPosition,
                  behavior: "smooth"
                });
              }
            }} className="border-primary-foreground/60 hover:bg-primary-foreground text-zinc-950">
                Fale conosco
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Products;