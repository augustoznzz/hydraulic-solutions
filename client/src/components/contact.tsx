import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin, MessageCircle, Shield, Zap, DollarSign } from "lucide-react";

const WHATSAPP_NUMBER = "5548984217911";
const WHATSAPP_MESSAGE = "Olá, gostaria de mais informações sobre o serviço de vazamentos.";

export default function Contact() {
  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-dark-gray mb-4">Entre em Contato</h2>
          <p className="text-gray-600 text-lg mb-8">
            Precisa de ajuda com vazamentos? Fale conosco pelo WhatsApp!
          </p>
          
          <div className="bg-gradient-to-t from-blue-100 via-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-dark-gray">
                <h3 className="text-2xl font-bold mb-4 text-primary-blue">Atendimento 24/7</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-xl" />
                    <span>Cleber Peres: (48) 98421-7911</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-xl" />
                    <span>Marcos Jorge: (48) 98416-9532</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="text-xl" />
                    <span>Emergências 24 horas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-xl" />
                    <span>Florianópolis e região</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={openWhatsApp}
                  className="bg-soft-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-soft-green/90 transition-all transform hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Falar no WhatsApp
                </Button>
                <p className="text-gray-600 text-sm mt-3">
                  Resposta rápida garantida
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary-blue text-2xl" />
              </div>
              <h4 className="font-semibold text-dark-gray mb-2">Garantia</h4>
              <p className="text-gray-600">Todos os serviços com garantia de qualidade</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-soft-green text-2xl" />
              </div>
              <h4 className="font-semibold text-dark-gray mb-2">Rapidez</h4>
              <p className="text-gray-600">Atendimento ágil e eficiente</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="text-primary-blue text-2xl" />
              </div>
              <h4 className="font-semibold text-dark-gray mb-2">Preço Justo</h4>
              <p className="text-gray-600">Orçamentos transparentes e competitivos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
