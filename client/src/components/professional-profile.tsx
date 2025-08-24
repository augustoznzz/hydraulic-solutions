import { GraduationCap, Award, Clock, Wrench } from "lucide-react";

export default function ProfessionalProfile() {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-gray mb-4">Conheça o Profissional</h2>
            <p className="text-gray-600 text-lg">Experiência e dedicação em cada serviço</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-center md:text-left">
              <img 
                src="/.netlify/images?url=/images/cleber" 
                alt="Cleber - Especialista em Detecção de Vazamentos" 
                className="w-64 h-64 rounded-full mx-auto md:mx-0 object-cover shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-dark-gray mb-2">Cleber Peres</h3>
                <p className="text-primary-blue font-semibold mb-4">Especialista em Detecção de Vazamentos</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <GraduationCap className="text-soft-green text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-dark-gray">Formação Técnica</h4>
                    <p className="text-gray-600">• Noções gerais de instalação hidráulica - SAA</p>
                    <p className="text-gray-600">• Controle e redução de perdas de água - geofonamento</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="text-soft-green text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-dark-gray">Experiência</h4>
                    <p className="text-gray-600">• Mais de 15 anos no mercado de detecção de vazamentos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Wrench className="text-soft-green text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-dark-gray">Equipamentos</h4>
                    <p className="text-gray-600">• Geofonamento com equipamento analógico e eletrônico</p>
                    <p className="text-gray-600">• Utilização de compressor de ar para pressurização da rede hidráulica</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Novo profissional */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <img 
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                alt="Marcos Jorge - Especialista em Detecção de Vazamentos" 
                className="w-64 h-64 rounded-full mx-auto md:mx-0 object-cover shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-dark-gray mb-2">Marcos Jorge</h3>
                <p className="text-primary-blue font-semibold mb-4">Especialista em Detecção de Vazamentos</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <GraduationCap className="text-soft-green text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-dark-gray">Formação Técnica</h4>
                    <p className="text-gray-600">• Instalação e manutenção hidráulica residencial</p>
                    <p className="text-gray-600">• Curso de detecção eletrônica de vazamentos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="text-soft-green text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-dark-gray">Experiência</h4>
                    <p className="text-gray-600">• 15 anos atuando em detecção e reparo de vazamentos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Wrench className="text-soft-green text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-dark-gray">Equipamentos</h4>
                    <p className="text-gray-600">• Geofone eletrônico de alta precisão</p>
                    <p className="text-gray-600">• Compressor de ar para testes de pressão</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
