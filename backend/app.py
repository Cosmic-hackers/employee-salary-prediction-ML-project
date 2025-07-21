from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report
import warnings
warnings.filterwarnings('ignore')

app = Flask(__name__)
CORS(app)

# Global variables for model and encoders
model = None
label_encoders = {}
feature_columns = []
model_accuracy = 0.0

def create_sample_data():
    """Create sample data that mimics the UCI Adult dataset"""
    np.random.seed(42)
    
    # Sample data generation
    n_samples = 1000
    
    workclass_options = ['Private', 'Self-emp-not-inc', 'Self-emp-inc', 'Federal-gov', 'Local-gov', 'State-gov']
    education_options = ['Bachelors', 'Some-college', 'HS-grad', 'Prof-school', 'Assoc-acdm', 'Assoc-voc', 'Masters', 'Doctorate']
    marital_options = ['Married-civ-spouse', 'Divorced', 'Never-married', 'Separated', 'Widowed']
    occupation_options = ['Tech-support', 'Craft-repair', 'Sales', 'Exec-managerial', 'Prof-specialty', 'Adm-clerical']
    relationship_options = ['Wife', 'Own-child', 'Husband', 'Not-in-family', 'Other-relative', 'Unmarried']
    race_options = ['White', 'Asian-Pac-Islander', 'Amer-Indian-Eskimo', 'Other', 'Black']
    sex_options = ['Male', 'Female']
    country_options = ['United-States', 'Canada', 'Germany', 'India', 'Japan', 'Mexico', 'Philippines']
    
    data = {
        'age': np.random.randint(17, 91, n_samples),
        'workclass': np.random.choice(workclass_options, n_samples),
        'education': np.random.choice(education_options, n_samples),
        'education_num': np.random.randint(1, 17, n_samples),
        'marital_status': np.random.choice(marital_options, n_samples),
        'occupation': np.random.choice(occupation_options, n_samples),
        'relationship': np.random.choice(relationship_options, n_samples),
        'race': np.random.choice(race_options, n_samples),
        'sex': np.random.choice(sex_options, n_samples),
        'capital_gain': np.random.exponential(scale=500, size=n_samples).astype(int),
        'capital_loss': np.random.exponential(scale=200, size=n_samples).astype(int),
        'hours_per_week': np.random.normal(40, 10, n_samples).clip(1, 99).astype(int),
        'native_country': np.random.choice(country_options, n_samples)
    }
    
    df = pd.DataFrame(data)
    
    # Create target variable with some logic
    high_salary_prob = (
        (df['age'] > 30).astype(int) * 0.2 +
        (df['education_num'] > 12).astype(int) * 0.3 +
        (df['hours_per_week'] > 40).astype(int) * 0.2 +
        (df['capital_gain'] > 1000).astype(int) * 0.2 +
        np.random.random(n_samples) * 0.1
    )
    
    df['salary'] = (high_salary_prob > 0.5).map({True: '>50K', False: '<=50K'})
    
    return df

def train_model():
    """Train the machine learning model"""
    global model, label_encoders, feature_columns, model_accuracy
    
    print("Creating training data...")
    df = create_sample_data()
    
    # Prepare features
    feature_columns = ['age', 'workclass', 'education', 'education_num', 'marital_status', 
                      'occupation', 'relationship', 'race', 'sex', 'capital_gain', 
                      'capital_loss', 'hours_per_week', 'native_country']
    
    X = df[feature_columns].copy()
    y = df['salary']
    
    # Encode categorical variables
    categorical_columns = ['workclass', 'education', 'marital_status', 'occupation', 
                          'relationship', 'race', 'sex', 'native_country']
    
    for col in categorical_columns:
        le = LabelEncoder()
        X[col] = le.fit_transform(X[col].astype(str))
        label_encoders[col] = le
    
    # Split data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Train model
    print("Training Random Forest model...")
    model = RandomForestClassifier(n_estimators=100, random_state=42, max_depth=10)
    model.fit(X_train, y_train)
    
    # Calculate accuracy
    y_pred = model.predict(X_test)
    model_accuracy = accuracy_score(y_test, y_pred)
    
    print(f"Model trained with accuracy: {model_accuracy:.3f}")
    print("\nClassification Report:")
    print(classification_report(y_test, y_pred))
    
    return model_accuracy

def preprocess_input(data):
    """Preprocess input data for prediction"""
    global label_encoders, feature_columns
    
    # Create DataFrame
    df = pd.DataFrame([data])
    
    # Ensure all feature columns are present
    for col in feature_columns:
        if col not in df.columns:
            df[col] = 0
    
    # Reorder columns to match training data
    df = df[feature_columns]
    
    # Encode categorical variables
    categorical_columns = ['workclass', 'education', 'marital_status', 'occupation', 
                          'relationship', 'race', 'sex', 'native_country']
    
    for col in categorical_columns:
        if col in label_encoders:
            try:
                # Handle unknown categories
                if data[col] in label_encoders[col].classes_:
                    df[col] = label_encoders[col].transform([data[col]])[0]
                else:
                    # Use the most common class for unknown values
                    df[col] = 0
            except:
                df[col] = 0
    
    return df

@app.route('/')
def home():
    return jsonify({
        "message": "Employee Salary Prediction API",
        "status": "active",
        "model_accuracy": round(model_accuracy, 3) if model_accuracy > 0 else "not_trained"
    })

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        
        if not data:
            return jsonify({"error": "No data provided"}), 400
        
        # Preprocess input
        processed_data = preprocess_input(data)
        
        # Make prediction
        prediction = model.predict(processed_data)[0]
        probability = model.predict_proba(processed_data)[0]
        
        # Get confidence
        max_prob = max(probability)
        
        if max_prob > 0.8:
            confidence = "High"
        elif max_prob > 0.6:
            confidence = "Medium"
        else:
            confidence = "Low"
        
        return jsonify({
            "prediction": prediction,
            "probability": float(max_prob),
            "confidence": confidence,
            "model_info": {
                "accuracy": model_accuracy,
                "model_type": "Random Forest Classifier"
            }
        })
        
    except Exception as e:
        print(f"Error during prediction: {str(e)}")
        return jsonify({"error": f"Prediction failed: {str(e)}"}), 500

@app.route('/model-info')
def model_info():
    return jsonify({
        "model_type": "Random Forest Classifier",
        "accuracy": model_accuracy,
        "features": feature_columns,
        "status": "trained" if model else "not_trained"
    })

if __name__ == '__main__':
    print("Starting Employee Salary Prediction API...")
    print("Training model...")
    train_model()
    print("Model training completed!")
    print("Starting Flask server...")
    app.run(debug=True, host='0.0.0.0', port=5000)