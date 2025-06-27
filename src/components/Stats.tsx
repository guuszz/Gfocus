import React from 'react';
import { Users, Clock, CheckCircle, Star } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      number: "15,247",
      label: "pessoas organizaram suas vidas"
    },
    {
      icon: Clock,
      number: "2.3",
      label: "horas economizadas por dia"
    },
    {
      icon: CheckCircle,
      number: "94%",
      label: "relatam aumento de produtividade"
    },
    {
      icon: Star,
      number: "4.8/5",
      label: "estrelas nas avaliações"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Resultados Comprovados
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="text-center transform transition-all duration-300 hover:-translate-y-2"
              >
                <Icon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-3xl font-bold mb-2">{stat.number}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}