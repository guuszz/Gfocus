import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Consegui organizar minha empresa inteira com o GFOCUS. Minha produtividade triplicou!",
      author: "Ana Silva",
      role: "CEO TechStart",
      rating: 5
    },
    {
      text: "Finalmente um app que entende minha rotina caótica. Indispensável!",
      author: "Carlos Santos",
      role: "Médico",
      rating: 5
    },
    {
      text: "Minha equipe economiza 5 horas por semana desde que começamos a usar.",
      author: "Maria Costa",
      role: "Gerente de Projetos",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          O Que Nossos Usuários Dizem
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-8 rounded-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 text-lg italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}