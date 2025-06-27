import React, { useState } from 'react';
import { Task } from '../types';
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Plus } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';
import Sidebar from '../components/Sidebar';
import { useTaskStore } from '../store/taskStore';

export default function Dashboard() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const { tasks, addTask, updateTask, deleteTask, reorderTasks } = useTaskStore();
  const { t } = useLanguage();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = tasks.findIndex((task) => task.id === active.id);
      const newIndex = tasks.findIndex((task) => task.id === over.id);
      const newTasks = [...tasks];
      const [movedTask] = newTasks.splice(oldIndex, 1);
      newTasks.splice(newIndex, 0, movedTask);
      reorderTasks(newTasks);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'completed') return task.status === 'completed';
    if (activeFilter === 'today') {
      const today = new Date();
      return (
        task.dueDate.getDate() === today.getDate() &&
        task.dueDate.getMonth() === today.getMonth() &&
        task.dueDate.getFullYear() === today.getFullYear()
      );
    }
    if (activeFilter === 'week') {
      const today = new Date();
      const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
      return task.dueDate >= today && task.dueDate <= weekFromNow;
    }
    if (activeFilter.startsWith('category-')) {
      const category = activeFilter.replace('category-', '');
      return task.category === category;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Sidebar
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        tasks={tasks}
      />

      <div className="ml-64 p-8 pt-20">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">{t.tasks.title}</h1>
          <button
            onClick={() => setIsFormOpen(true)}
            className="flex items-center space-x-2 bg-gray-100 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Plus size={20} />
            <span>{t.tasks.new}</span>
          </button>
        </div>

        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            <div className="space-y-4">
              {filteredTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onEdit={(task) => {
                    setEditingTask(task);
                    setIsFormOpen(true);
                  }}
                  onStatusChange={(id, status) => updateTask(id, { status })}
                  onDelete={deleteTask}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>

        {isFormOpen && (
          <TaskForm
            onSubmit={(taskData) => {
              if (editingTask) {
                updateTask(editingTask.id, taskData);
              } else {
                addTask(taskData);
              }
              setIsFormOpen(false);
              setEditingTask(null);
            }}
            onClose={() => {
              setIsFormOpen(false);
              setEditingTask(null);
            }}
            initialData={editingTask || undefined}
          />
        )}
      </div>
    </div>
  );
}