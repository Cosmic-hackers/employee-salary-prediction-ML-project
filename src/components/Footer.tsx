import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About the System</h3>
            <p className="text-gray-400 leading-relaxed">
              This employee salary prediction system uses advanced machine learning algorithms 
              trained on the UCI Adult Dataset to provide accurate salary range predictions 
              based on demographic and employment characteristics.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Technology Stack</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• React + TypeScript Frontend</li>
              <li>• Python Flask Backend</li>
              <li>• Scikit-learn ML Models</li>
              <li>• UCI Adult Dataset</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/Cosmic-hackers" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Employee Salary Prediction System. Built with ❤️ using Machine Learning.
          </p>
        </div>
      </div>
    </footer>
  );
};