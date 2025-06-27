import React from 'react';
import { Brain, CheckSquare, Focus, BarChart3, Cloud, Smartphone, Bell } from 'lucide-react';
import MainLayout from '../components/MainLayout';

export default function Resources() {
  const features = [
    {
      icon: Brain,
      title: 'Priorização Inteligente com IA',
      description: 'Nossa IA analisa suas tarefas e sugere automaticamente a ordem de prioridade baseada em palavras-chave de urgência, proximidade dos prazos, complexidade e seu histórico de produtividade.',
    },
    {
      icon: CheckSquare,
      title: 'Gerenciamento Avançado de Tarefas',
      description: 'Interface intuitiva para criar, editar e organizar. Sistema de categorias coloridas, tags personalizáveis, filtros avançados e busca em tempo real.',
    },
    {
      icon: Focus,
      title: 'Modo Foco Revolucionário',
      description: 'Interface minimalista que mostra apenas 1 tarefa. Timer Pomodoro integrado, notificações inteligentes de pausa e música ambiente para concentração.',
    },
    {
      icon: BarChart3,
      title: 'Analytics e Insights',
      description: 'Gráficos de produtividade diária/semanal, relatórios de tarefas concluídas, análise de padrões de trabalho e metas personalizadas.',
    },
    {
      icon: Cloud,
      title: 'Sincronização Multi-dispositivo',
      description: 'Acesso pelo celular, tablet e computador. Sincronização automática em tempo real, backup seguro na nuvem e trabalho offline.',
    },
    {
      icon: Smartphone,
      title: 'Interface Elegante',
      description: 'Design moderno e clean com tema escuro, animações suaves e responsivas. Totalmente acessível em qualquer dispositivo.',
    },
    {
      icon: Bell,
      title: 'Notificações Inteligentes',
      description: 'Lembretes personalizáveis, alertas de prazos, sugestões de horários ideais e resumo diário por email.',
    },
  ];

  return (
    <MainLayout>
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-16">Recursos do GFOCUS</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform"
                >
                  <Icon className="w-12 h-12 text-gray-300 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}