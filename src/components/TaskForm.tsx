import React, { useState } from 'react';
import { Task, Priority } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { X } from 'lucide-react';

interface Props {
  onSubmit: (task: Omit<Task, 'id' | 'createdAt' | 'aiEstimate'>) => void;
  onClose: () => void;
  initialData?: Task;
}

export default function TaskForm({ onSubmit, onClose, initialData }: Props) {
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
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold mb-6">
          {initialData ? t.tasks.edit : t.tasks.new}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              {t.form.title}
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              {t.form.description}
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white h-24"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                {t.form.priority}
              </label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value as Priority })}
                className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white"
              >
                <option value="low">{t.priorities.low}</option>
                <option value="medium">{t.priorities.medium}</option>
                <option value="high">{t.priorities.high}</option>
                <option value="urgent">{t.priorities.urgent}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                {t.form.category}
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white"
              >
                <option value="Work">{t.categories.work}</option>
                <option value="Personal">{t.categories.personal}</option>
                <option value="Study">{t.categories.study}</option>
                <option value="Health">{t.categories.health}</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              {t.form.dueDate}
            </label>
            <input
              type="date"
              value={formData.dueDate}
              onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
              className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-100 text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            {initialData ? t.tasks.update : t.tasks.create}
          </button>
        </form>
      </div>
    </div>
  );
}