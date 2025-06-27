import React from 'react';
import { Target, Zap, Users, Award, Code, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import MainLayout from '../components/MainLayout';

export default function About() {
  const { t } = useLanguage();

  return (
    <MainLayout>
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <section className="text-center mb-20">
            <h1 className="text-4xl font-bold mb-6">{t.about.title}</h1>
            <p className="text-xl text-gray-400">
              {t.about.subtitle}
            </p>
          </section>

          <section className="mb-20">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-gray-300 mr-4" />
              <h2 className="text-2xl font-bold">{t.about.mission.title}</h2>
            </div>
            <p className="text-gray-400">
              {t.about.mission.description}
            </p>
          </section>

          <section className="mb-20">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-gray-300 mr-4" />
              <h2 className="text-2xl font-bold">{t.about.howItWorks.title}</h2>
            </div>
            <ol className="space-y-4 text-gray-400">
              {t.about.howItWorks.steps.map((step, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-20">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-gray-300 mr-4" />
              <h2 className="text-2xl font-bold">{t.about.forWhom.title}</h2>
            </div>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-400">
              {t.about.forWhom.users.map((user, index) => (
                <li key={index} className="bg-gray-800 p-4 rounded-lg">{user}</li>
              ))}
            </ul>
          </section>

          <section className="mb-20">
            <div className="flex items-center mb-6">
              <Code className="w-8 h-8 text-gray-300 mr-4" />
              <h2 className="text-2xl font-bold">{t.about.technology.title}</h2>
            </div>
            <ul className="space-y-3 text-gray-400">
              {t.about.technology.features.map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
          </section>

          <section>
            <div className="flex items-center mb-6">
              <Eye className="w-8 h-8 text-gray-300 mr-4" />
              <h2 className="text-2xl font-bold">{t.about.vision.title}</h2>
            </div>
            <p className="text-gray-400">
              {t.about.vision.description}
            </p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}