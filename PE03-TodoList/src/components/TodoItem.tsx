import React from 'react';
import { Trash2, Circle, CheckCircle } from 'lucide-react';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

export function TodoItem({ id, text, completed, onDelete, onToggle }: TodoItemProps) {
  return (
    <div className="group flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
      <button
        onClick={() => onToggle(id)}
        className="text-gray-400 hover:text-blue-500 transition-colors"
      >
        {completed ? (
          <CheckCircle className="w-5 h-5 text-green-500" />
        ) : (
          <Circle className="w-5 h-5" />
        )}
      </button>
      <span className={`flex-1 ${completed ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
        {text}
      </span>
      <button
        onClick={() => onDelete(id)}
        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
}