export interface PredictionData {
  age: number;
  workclass: string;
  education: string;
  education_num: number;
  marital_status: string;
  occupation: string;
  relationship: string;
  race: string;
  sex: string;
  capital_gain: number;
  capital_loss: number;
  hours_per_week: number;
  native_country: string;
}

export interface PredictionResponse {
  prediction: string;
  probability: number;
  confidence: string;
  model_info: {
    accuracy: number;
    model_type: string;
  };
}

export interface FormField {
  name: keyof PredictionData;
  label: string;
  type: 'select' | 'number';
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
}