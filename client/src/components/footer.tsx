import { Search, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Search className="text-primary-blue text-2xl" />
              <h3 className="text-2xl font-bold">Soluções Hidráulicas</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Especialistas em detecção e reparo de vazamentos com mais de 15 anos de experiência no mercado.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Detecção de Vazamentos</li>
              <li>Reparo de Tubulações</li>
              <li>Instalação Hidráulica</li>
              <li>Manutenção Preventiva</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(48) 98421-7911</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(48) 98416-9532</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Florianópolis - SC</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Atendimento 24/7</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Soluções Hidráulicas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
