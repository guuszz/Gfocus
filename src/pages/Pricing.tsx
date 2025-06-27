import React from 'react';
import { Check, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import MainLayout from '../components/MainLayout';

export default function Pricing() {
  const { t } = useLanguage();

  const plans = [
    {
      name: t.pricing.free.name,
      price: t.pricing.free.price,
      features: t.pricing.free.features,
      buttonText: t.pricing.free.buttonText,
      popular: false,
    },
    {
      name: t.pricing.pro.name,
      price: t.pricing.pro.price,
      features: t.pricing.pro.features,
      buttonText: t.pricing.pro.buttonText,
      popular: true,
    },
  ];

  return (
    <MainLayout>
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-16">{t.pricing.title}</h1>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-gray-800 rounded-lg p-8 relative ${
                  plan.popular ? 'border-2 border-gray-100' : ''
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-100 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                    {t.pricing.popular}
                  </span>
                )}
                <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-extrabold">R$ {plan.price}</span>
                  <span className="text-gray-400 ml-2">{t.pricing.perMonth}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      {index < 4 ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <X className="w-5 h-5 text-red-500" />
                      )}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center text-yellow-400">
              {t.pricing.launchOffer}
            </h3>
            <p className="text-center text-lg mb-2">
              {t.pricing.launchDescription}
            </p>
            <p className="text-center text-gray-400">
              {t.pricing.validUntil}
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">{t.pricing.faq}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {t.pricing.faqs.map((faq, index) => (
                <div key={index}>
                  <h4 className="font-semibold mb-2">{faq.question}</h4>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}