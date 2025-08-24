import { Button } from "@/components/ui/button";
import { MessageCircle, Star } from "lucide-react";

const WHATSAPP_NUMBER = "5548984217911";
const WHATSAPP_MESSAGE = "Olá, gostaria de mais informações sobre o serviço de vazamentos.";

export default function Hero() {
  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToServices = () => {
    const element = document.getElementById('servicos');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-gray leading-tight">
              Detecção Precisa de <span className="text-primary-blue">Vazamentos</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Soluções profissionais para identificar e reparar vazamentos com e anos de experiência no mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={openWhatsApp}
                className="bg-soft-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-soft-green/90 transition-all transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Solicitar Orçamento
              </Button>
              <Button 
                onClick={scrollToServices}
                variant="outline"
                className="border-2 border-primary-blue text-primary-blue px-8 py-3 rounded-lg font-semibold hover:bg-primary-blue hover:text-white transition-all"
              >
                Ver Serviços
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="/images/cm.jpg" 
                alt="Profissional trabalhando em tubulação" 
                className="rounded-2xl shadow-2xl w-80 h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold text-dark-gray">4.9/5</span>
                </div>
                <p className="text-sm text-gray-600">+200 clientes satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
