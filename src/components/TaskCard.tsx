import React from 'react';
import { Task } from '../types';
import { format } from 'date-fns';
import { Clock, AlertTriangle, CheckCircle, Edit2, Trash2 } from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useTranslation } from '../hooks/useTranslation';

interface Props {
  task: Task;
  onEdit: (task: Task) => void;
  onStatusChange: (id: string, status: Task['status']) => void;
  onDelete: (id: string) => void;
}

const priorityColors = {
  urgent: 'bg-red-500',
  high: 'bg-orange-500',
  medium: 'bg-yellow-500',
  low: 'bg-green-500',
};

export default function TaskCard({ task, onEdit, onStatusChange, onDelete }: Props) {
  const { t } = useTranslation();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleDelete = () => {
    if (window.confirm(t.tasks.deleteConfirm)) {
      onDelete(task.id);
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">{task.title}</h3>
          <p className="text-gray-400 text-sm mt-1">{task.description}</p>
        </div>
        <div className={`w-2 h-2 rounded-full ${priorityColors[task.priority]}`} />
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-gray-400">
            <Clock size={16} className="mr-1" />
            <span className="text-sm">
              {format(task.dueDate, 'MMM d')}
            </span>
          </div>
          {task.aiEstimate > 70 && (
            <div className="flex items-center text-yellow-500">
              <AlertTriangle size={16} className="mr-1" />
              <span className="text-sm">{t.tasks.highPriority}</span>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => onStatusChange(task.id, task.status === 'completed' ? 'pending' : 'completed')}
            className={`p-2 rounded-full transition-colors ${
              task.status === 'completed'
                ? 'text-green-500 bg-green-500/20'
                : 'text-gray-400 hover:text-green-500'
            }`}
          >
            <CheckCircle size={20} />
          </button>
          <button
            onClick={() => onEdit(task)}
            className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-700"
            title={t.tasks.edit}
          >
            <Edit2 size={20} />
          </button>
          <button
            onClick={handleDelete}
            className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-full hover:bg-gray-700"
            title={t.tasks.delete}
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}