import React from 'react';
import { Brain, TrendingUp } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">WageVista  AI Developed by siddu Yadagiri </h1>
              <p className="text-sm text-gray-600">ML-Powered Salary Analytics</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-lg">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-800">87.2% Accuracy</span>
          </div>
        </div>
      </div>
    </header>
  );
};