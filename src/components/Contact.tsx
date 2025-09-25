import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefone",
      value: "(55) 99973-9234",
      link: "tel:5555999739234",
      description: "Ligue para tirar dúvidas"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "farofacumbuca@gmail.com",
      link: "mailto:farofacumbuca@gmail.com",
      description: "Envie sua mensagem"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Endereço",
      value: "Rua Apel 161",
      description: "Nossa localização"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horário",
      value: "Segunda a sexta das 14h às 19h",
      description: "Funcionamento"
    }
  ];

  const handleWhatsAppContact = () => {
    const message = "Olá! Gostaria de saber mais sobre os produtos da Farofa Cumbuca.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5555999739234?text=${encodedMessage}`, "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://instagram.com/farofacumbuca", "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Entre em contato
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Estamos prontos para atender você! Entre em contato conosco para tirar dúvidas, 
              fazer pedidos ou conhecer melhor nossos produtos.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Informações de contato
              </h3>
              
              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index} 
                    className="shadow-elegant hover:shadow-strong transition-all duration-300 group animate-slide-up border-0"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <div className="text-primary">
                            {info.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-primary mb-1">{info.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{info.description}</p>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Fale conosco agora
              </h3>
              
              <Card className="shadow-elegant border-0 bg-gradient-primary text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <MessageCircle className="h-16 w-16 mx-auto mb-6 opacity-90" />
                  <h4 className="text-xl font-bold mb-4">
                    WhatsApp
                  </h4>
                  <p className="mb-6 opacity-90">
                    A forma mais rápida de entrar em contato conosco. 
                    Responderemos em alguns minutos!
                  </p>
                  <Button 
                    variant="whatsapp" 
                    size="lg" 
                    className="w-full"
                    onClick={handleWhatsAppContact}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Conversar no WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-elegant border-0 bg-gradient-accent text-accent-foreground">
                <CardContent className="p-8 text-center">
                  <Instagram className="h-16 w-16 mx-auto mb-6 opacity-90" />
                  <h4 className="text-xl font-bold mb-4">
                    Instagram
                  </h4>
                  <p className="mb-6 opacity-90">
                    Siga-nos nas redes sociais e acompanhe novidades, 
                    receitas e dicas culinárias.
                  </p>
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="w-full"
                    onClick={handleInstagramClick}
                  >
                    <Instagram className="mr-2 h-5 w-5" />
                    @farofacumbuca
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Business Hours Highlight */}
          <Card className="shadow-elegant border-0 bg-secondary text-secondary-foreground">
            <CardContent className="p-8 text-center">
              <Clock className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h4 className="text-xl font-bold mb-2">
                Horário de atendimento
              </h4>
              <p className="text-lg opacity-90">
                Segunda a sexta-feira: 14h às 19h
              </p>
              <p className="text-sm opacity-75 mt-2">
                Respondemos mensagens fora do horário comercial o mais breve possível
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;