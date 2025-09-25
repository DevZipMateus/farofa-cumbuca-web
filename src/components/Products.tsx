import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Scale, Star } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Farofa Cumbuca Tradicional",
      description: "Nossa receita clássica que conquistou o paladar brasileiro. Perfeita para acompanhar feijoada, churrascos e refeições especiais.",
      weight: "230g",
      type: "Embalagem individual",
      features: ["Receita tradicional", "Sabor marcante", "Embalagem prática"],
      icon: <Package className="h-6 w-6" />,
      highlight: "Mais vendida"
    },
    {
      id: 2,
      name: "Farofa Cumbuca Premium",
      description: "Uma versão especial da nossa farofa com ingredientes selecionados e toque especial para paladares exigentes.",
      weight: "230g",
      type: "Embalagem premium",
      features: ["Ingredientes premium", "Sabor refinado", "Embalagem elegante"],
      icon: <Star className="h-6 w-6" />,
      highlight: "Premium"
    },
    {
      id: 3,
      name: "Farofa Cumbuca a Granel",
      description: "Para estabelecimentos e grandes consumidores. Qualidade Cumbuca em quantidades maiores com preço especial.",
      weight: "Sob consulta",
      type: "Venda a granel",
      features: ["Quantidade personalizada", "Preço especial", "Para estabelecimentos"],
      icon: <Scale className="h-6 w-6" />,
      highlight: "Atacado"
    }
  ];

  const handleWhatsAppContact = (productName: string) => {
    const message = `Olá! Tenho interesse no produto: ${productName}. Gostaria de mais informações.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5555999739234?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="produtos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Nossos produtos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Descubra nossa linha completa de farofas artesanais. Cada produto é cuidadosamente preparado 
              para oferecer uma experiência única de sabor e qualidade.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="shadow-elegant hover:shadow-strong transition-all duration-300 group animate-slide-up border-0 bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <div className="text-primary-foreground">
                        {product.icon}
                      </div>
                    </div>
                    {product.highlight && (
                      <Badge 
                        variant="secondary" 
                        className="absolute -top-2 -right-2 bg-accent text-accent-foreground font-medium"
                      >
                        {product.highlight}
                      </Badge>
                    )}
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
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    variant="hero" 
                    className="w-full mt-6"
                    onClick={() => handleWhatsAppContact(product.name)}
                  >
                    Solicitar orçamento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para experimentar nossa farofa?
            </h3>
            <p className="mb-6 opacity-90">
              Entre em contato conosco e descubra como nossos produtos podem transformar suas refeições.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => handleWhatsAppContact("Catálogo completo")}
              >
                Ver catálogo completo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => {
                  const element = document.getElementById("contato");
                  if (element) {
                    const headerHeight = 80;
                    const elementPosition = element.offsetTop - headerHeight;
                    window.scrollTo({
                      top: elementPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Fale conosco
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;