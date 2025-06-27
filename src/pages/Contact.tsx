import React from 'react';
import { Mail, Phone, Globe, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import MainLayout from '../components/MainLayout';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <MainLayout>
      <div className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-16">{t.contact.title}</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-gray-400" />
                <div>
                  <h3 className="font-medium">{t.contact.email}</h3>
                  <p className="text-gray-400">contact@gfocus.app</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-gray-400" />
                <div>
                  <h3 className="font-medium">{t.contact.whatsapp}</h3>
                  <p className="text-gray-400">(xx) xxxxx-xxxx</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Globe className="w-6 h-6 text-gray-400" />
                <div>
                  <h3 className="font-medium">{t.contact.website}</h3>
                  <p className="text-gray-400">www.gfocus.app</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-gray-400" />
                <div>
                  <h3 className="font-medium">{t.contact.businessHours}</h3>
                  <p className="text-gray-400">{t.contact.hours.weekdays}</p>
                  <p className="text-gray-400">{t.contact.hours.saturday}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-gray-400" />
                <div>
                  <h3 className="font-medium">{t.contact.location}</h3>
                  <p className="text-gray-400">{t.contact.digital}</p>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  {t.contact.message}
                </label>
                <textarea
                  className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white h-32"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-100 text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                {t.contact.sendMessage}
              </button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}