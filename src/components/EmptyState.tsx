import React from 'react';
import { Plus, Trophy } from 'lucide-react';

interface Props {
  type: 'empty' | 'completed';
  onAddTask?: () => void;
}

export default function EmptyState({ type, onAddTask }: Props) {
  return (
    <div className="text-center py-12">
      {type === 'empty' ? (
        <>
          <h3 className="text-2xl font-bold mb-4">Sua Lista Está Vazia!</h3>
          <p className="text-gray-400 mb-8">
            Comece sua jornada de produtividade adicionando sua primeira tarefa.
          </p>
          <button
            onClick={onAddTask}
            className="bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1 flex items-center mx-auto space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>ADICIONAR PRIMEIRA TAREFA</span>
          </button>
        </>
      ) : (
        <>
          <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Parabéns! Você Concluiu Todas as Tarefas!</h3>
          <p className="text-gray-400 mb-8">
            Que tal adicionar novos objetivos para conquistar?
          </p>
          <button
            onClick={onAddTask}
            className="bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1 flex items-center mx-auto space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>ADICIONAR NOVA META</span>
          </button>
        </>
      )}
    </div>
  );
}