import React from 'react';
import { TrendingUp, TrendingDown, BarChart3, Target, Brain } from 'lucide-react';
import { PredictionResponse } from '../types/prediction';

interface PredictionResultProps {
  prediction: PredictionResponse | null;
  loading: boolean;
}

export const PredictionResult: React.FC<PredictionResultProps> = ({ 
  prediction, 
  loading 
}) => {
  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Analyzing Data</h3>
          <p className="text-gray-600">Our AI model is processing the employee information...</p>
        </div>
      </div>
    );
  }

  if (!prediction) {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        <div className="text-center">
          <Brain className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Predict</h3>
          <p className="text-gray-600">
            Fill out the employee information form and click "Predict Salary" to see the AI-powered prediction results.
          </p>
        </div>
      </div>
    );
  }

  const isHighSalary = prediction.prediction === '>50K';
  const confidencePercentage = Math.round(prediction.probability * 100);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className={`px-6 py-4 ${isHighSalary ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-orange-500 to-red-600'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {isHighSalary ? (
              <TrendingUp className="w-6 h-6 text-white" />
            ) : (
              <TrendingDown className="w-6 h-6 text-white" />
            )}
            <h2 className="text-xl font-semibold text-white">Prediction Result</h2>
          </div>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium text-white">
            {prediction.confidence}
          </span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="text-center">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${isHighSalary ? 'bg-green-100' : 'bg-orange-100'}`}>
            <span className={`text-2xl font-bold ${isHighSalary ? 'text-green-600' : 'text-orange-600'}`}>
              {prediction.prediction}
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Salary Prediction: {prediction.prediction}
          </h3>
          
          <p className="text-gray-600">
            {isHighSalary 
              ? 'This employee profile indicates a salary above $50,000 annually'
              : 'This employee profile indicates a salary of $50,000 or below annually'
            }
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <Target className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">{confidencePercentage}%</div>
            <div className="text-sm text-blue-700">Confidence</div>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <BarChart3 className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">
              {Math.round(prediction.model_info.accuracy * 100)}%
            </div>
            <div className="text-sm text-purple-700">Model Accuracy</div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Model Information</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Algorithm:</span>
              <span className="font-medium">{prediction.model_info.model_type}</span>
            </div>
            <div className="flex justify-between">
              <span>Training Accuracy:</span>
              <span className="font-medium">{Math.round(prediction.model_info.accuracy * 100)}%</span>
            </div>
            <div className="flex justify-between">
              <span>Prediction Confidence:</span>
              <span className="font-medium">{prediction.confidence}</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-blue-800 mb-2">Understanding the Results</h4>
          <p className="text-sm text-blue-700">
            This prediction is based on demographic and employment factors from the UCI Adult Dataset. 
            The confidence score indicates how certain our model is about this prediction.
          </p>
        </div>
      </div>
    </div>
  );
};