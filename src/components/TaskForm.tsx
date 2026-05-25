import React, { useState } from 'react';
import { Task, Priority } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (task: Omit<Task, 'id' | 'createdAt' | 'aiEstimate'>) => void;
  initialData?: Task;
}

export default function TaskForm({ open, onOpenChange, onSubmit, initialData }: Props) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    description: initialData?.description || '',
    priority: initialData?.priority || 'medium' as Priority,
    category: initialData?.category || 'Personal',
    status: initialData?.status || 'pending',
    dueDate: initialData?.dueDate ? new Date(initialData.dueDate).toISOString().split('T')[0] : '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      dueDate: new Date(formData.dueDate),
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{initialData ? t.tasks.edit : t.tasks.new}</DialogTitle>
          <DialogDescription>
            {initialData
              ? 'Atualize os detalhes da tarefa.'
              : 'Adicione uma nova tarefa à sua lista.'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="task-title" className="block text-sm font-medium text-gray-300 mb-1.5">
              {t.form.title}
            </label>
            <input
              id="task-title"
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors"
              placeholder="Ex: Estudar React hooks"
              required
              autoFocus
            />
          </div>

          <div>
            <label htmlFor="task-desc" className="block text-sm font-medium text-gray-300 mb-1.5">
              {t.form.description}
            </label>
            <textarea
              id="task-desc"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors h-20 resize-none"
              placeholder="Detalhes opcionais"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="task-priority" className="block text-sm font-medium text-gray-300 mb-1.5">
                {t.form.priority}
              </label>
              <select
                id="task-priority"
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value as Priority })}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors"
              >
                <option value="low">{t.priorities.low}</option>
                <option value="medium">{t.priorities.medium}</option>
                <option value="high">{t.priorities.high}</option>
                <option value="urgent">{t.priorities.urgent}</option>
              </select>
            </div>

            <div>
              <label htmlFor="task-category" className="block text-sm font-medium text-gray-300 mb-1.5">
                {t.form.category}
              </label>
              <select
                id="task-category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors"
              >
                <option value="Work">{t.categories.work}</option>
                <option value="Personal">{t.categories.personal}</option>
                <option value="Study">{t.categories.study}</option>
                <option value="Health">{t.categories.health}</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="task-date" className="block text-sm font-medium text-gray-300 mb-1.5">
              {t.form.dueDate}
            </label>
            <input
              id="task-date"
              type="date"
              value={formData.dueDate}
              onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors"
              required
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg text-sm font-semibold bg-gray-100 text-gray-900 hover:bg-white transition-colors"
            >
              {initialData ? t.tasks.update : t.tasks.create}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
