import React from 'react';
import { Task } from '../types';
import { List, CheckCircle2, Clock, Calendar, Briefcase, User, BookOpen, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Props {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  tasks: Task[];
}

export default function Sidebar({ activeFilter, onFilterChange, tasks }: Props) {
  const { t } = useLanguage();

  const filters = [
    { id: 'all', label: t.sidebar.allTasks, icon: List },
    { id: 'completed', label: t.sidebar.completed, icon: CheckCircle2 },
    { id: 'today', label: t.sidebar.today, icon: Clock },
    { id: 'week', label: t.sidebar.thisWeek, icon: Calendar },
  ];

  const categories = [
    { id: 'Work', label: t.categories.work, icon: Briefcase },
    { id: 'Personal', label: t.categories.personal, icon: User },
    { id: 'Study', label: t.categories.study, icon: BookOpen },
    { id: 'Health', label: t.categories.health, icon: Heart },
  ];

  return (
    <div className="w-64 bg-gray-800 h-screen p-4 fixed left-0 top-0 pt-20">
      <div className="space-y-8">
        <div>
          <h3 className="text-gray-400 text-sm font-medium mb-4">{t.sidebar.filters}</h3>
          <div className="space-y-2">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => onFilterChange(filter.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    activeFilter === filter.id
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  <span>{filter.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-gray-400 text-sm font-medium mb-4">{t.sidebar.categories}</h3>
          <div className="space-y-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => onFilterChange(`category-${category.id}`)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    activeFilter === `category-${category.id}`
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}