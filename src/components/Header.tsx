import React from 'react';
import { Brain } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Brain className="h-6 w-6" />
          <h1 className="text-xl font-semibold">Artificial Neural Networks</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Article</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Talk</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Read</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">View source</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">View history</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};