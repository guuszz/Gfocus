import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import MainLayout from '../components/MainLayout';
import { CheckCircle, Clock, Target, Star, Users, ArrowRight } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';

export default function Landing() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <MainLayout showNavbar={true}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-gray-400 text-transparent bg-clip-text leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
          <button 
            onClick={() => navigate('/dashboard')}
            className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-lg flex items-center mx-auto space-x-2"
          >
            <span>{t.hero.cta}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">{t.features.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.features.items.map((feature, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                {index === 0 && <Target className="h-12 w-12 text-gray-400 mb-6" />}
                {index === 1 && <CheckCircle className="h-12 w-12 text-gray-400 mb-6" />}
                {index === 2 && <Clock className="h-12 w-12 text-gray-400 mb-6" />}
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Transformar sua Produtividade?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Junte-se a mais de 15.000 pessoas que já eliminaram o caos mental e 
            conquistaram resultados extraordinários.
          </p>
          <button 
            onClick={() => navigate('/dashboard')}
            className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-lg flex items-center mx-auto space-x-2"
          >
            <span>TESTAR 30 DIAS SEM COMPROMISSO</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </MainLayout>
  );
}