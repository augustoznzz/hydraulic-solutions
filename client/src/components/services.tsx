import { Search, Wrench, Zap, Hammer, Settings } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Search,
      title: "Detecção de Vazamentos",
      description: "Identificação precisa de vazamentos em tubulações, sem quebras desnecessárias.",
      color: "bg-blue-50 text-primary-blue"
    },
    {
      icon: Wrench,
      title: "Reparo de Tubulações",
      description: "Reparos em tubulações de água, com materiais de qualidade e garantia de serviço.",
      color: "bg-green-50 text-soft-green"
    },
    {
      icon: Hammer,
      title: "Instalação Hidráulica",
      description: "Instalação completa de sistemas hidráulicos residenciais e comerciais seguindo as normas técnicas.",
      color: "bg-green-50 text-soft-green"
    },
    {
      icon: Settings,
      title: "Manutenção Preventiva",
      description: "Programa de manutenção preventiva para evitar problemas futuros e prolongar a vida útil das instalações.",
      color: "bg-blue-50 text-primary-blue"
    }
  ];

  return (
    <section id="servicos" className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark-gray mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Oferecemos soluções completas para todos os tipos de problemas hidráulicos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="text-center mb-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${service.color}`}>
                  <service.icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-dark-gray mb-2">{service.title}</h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
