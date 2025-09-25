import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppContact = () => {
    const message = "Olá! Gostaria de saber mais sobre os produtos da Farofa Cumbuca.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5555999739234?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="whatsapp-float">
      <Button
        variant="whatsapp"
        size="icon"
        className="w-14 h-14 rounded-full shadow-strong hover:shadow-elegant"
        onClick={handleWhatsAppContact}
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default WhatsAppButton;