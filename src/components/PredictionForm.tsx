import React, { useState } from 'react';
import { Play, RotateCcw, User } from 'lucide-react';
import { PredictionData } from '../types/prediction';
import { formFields } from '../utils/formConfig';

interface PredictionFormProps {
  onPredict: (data: PredictionData) => void;
  loading: boolean;
  onReset: () => void;
}

export const PredictionForm: React.FC<PredictionFormProps> = ({ 
  onPredict, 
  loading, 
  onReset 
}) => {
  const [formData, setFormData] = useState<PredictionData>({
    age: 35,
    workclass: 'Private',
    education: 'Bachelors',
    education_num: 13,
    marital_status: 'Married-civ-spouse',
    occupation: 'Tech-support',
    relationship: 'Husband',
    race: 'White',
    sex: 'Male',
    capital_gain: 0,
    capital_loss: 0,
    hours_per_week: 40,
    native_country: 'United-States'
  });

  const handleInputChange = (name: keyof PredictionData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPredict(formData);
  };

  const handleReset = () => {
    setFormData({
      age: 35,
      workclass: 'Private',
      education: 'Bachelors',
      education_num: 13,
      marital_status: 'Married-civ-spouse',
      occupation: 'Tech-support',
      relationship: 'Husband',
      race: 'White',
      sex: 'Male',
      capital_gain: 0,
      capital_loss: 0,
      hours_per_week: 40,
      native_country: 'United-States'
    });
    onReset();
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
        <div className="flex items-center space-x-3">
          <User className="w-6 h-6 text-white" />
          <h2 className="text-xl font-semibold text-white">Employee Information</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {formFields.map((field) => (
            <div key={field.name} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                {field.label}
              </label>
              
              {field.type === 'select' ? (
                <select
                  value={formData[field.name]}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                  required
                >
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option.replace(/-/g, ' ')}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="number"
                  value={formData[field.name]}
                  onChange={(e) => handleInputChange(field.name, Number(e.target.value))}
                  min={field.min}
                  max={field.max}
                  step={field.step}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                  required
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex space-x-4 pt-6 border-t border-gray-100">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Predicting...</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                <span>Predict Salary</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 flex items-center space-x-2"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Reset</span>
          </button>
        </div>
      </form>
    </div>
  );
};