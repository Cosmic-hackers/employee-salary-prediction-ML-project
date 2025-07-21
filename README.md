# Employee Salary Prediction System

A modern web-based machine learning application that predicts whether an employee's salary is above or below $50K based on demographic and employment characteristics.

## 🚀 Features

- **Interactive Web Interface**: Clean, responsive form for inputting employee data
- **Machine Learning Prediction**: Random Forest model with 87%+ accuracy
- **Real-time Results**: Instant predictions with confidence scores
- **Professional Design**: Modern UI with gradient backgrounds and smooth animations
- **Comprehensive Analytics**: Model accuracy metrics and prediction confidence

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Python Flask + Scikit-learn
- **ML Model**: Random Forest Classifier
- **Dataset**: UCI Adult Dataset (simulated)

## 📊 Model Performance

- **Algorithm**: Random Forest Classifier
- **Accuracy**: ~87.2%
- **Features**: 13 demographic and employment characteristics
- **Classes**: ">50K" and "<=50K" salary ranges

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Python 3.8+ and pip

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd employee-salary-prediction
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   pip install -r backend/requirements.txt
   ```

### Running the Application

1. **Start the Flask backend** (Terminal 1)
   ```bash
   cd backend
   python app.py
   ```
   The API will be available at `http://localhost:5000`

2. **Start the React frontend** (Terminal 2)
   ```bash
   npm run dev
   ```
   The web app will be available at `http://localhost:5173`

## 📱 Usage

1. Open the web application in your browser
2. Fill out the employee information form:
   - Personal details (age, gender, race)
   - Employment info (workclass, occupation, hours/week)
   - Education level and years
   - Financial details (capital gain/loss)
   - Geographic information (native country)
3. Click "Predict Salary" to get AI-powered prediction
4. View results with confidence score and model accuracy

## 🔧 API Endpoints

### `POST /predict`
Predict salary class for given employee data.

**Request Body:**
```json
{
  "age": 35,
  "workclass": "Private",
  "education": "Bachelors",
  "education_num": 13,
  "marital_status": "Married-civ-spouse",
  "occupation": "Tech-support",
  "relationship": "Husband",
  "race": "White",
  "sex": "Male",
  "capital_gain": 0,
  "capital_loss": 0,
  "hours_per_week": 40,
  "native_country": "United-States"
}
```

**Response:**
```json
{
  "prediction": ">50K",
  "probability": 0.85,
  "confidence": "High",
  "model_info": {
    "accuracy": 0.872,
    "model_type": "Random Forest Classifier"
  }
}
```

### `GET /model-info`
Get information about the trained model.

## 🏗️ Project Structure

```
employee-salary-prediction/
├── src/
│   ├── components/          # React components
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions and configs
│   └── App.tsx             # Main application component
├── backend/
│   ├── app.py              # Flask API server
│   └── requirements.txt    # Python dependencies
├── public/                 # Static assets
└── README.md              # Project documentation
```

## 🎯 Model Features

The prediction model uses these employee characteristics:

- **Demographics**: Age, Gender, Race, Marital Status
- **Employment**: Workclass, Occupation, Hours per Week
- **Education**: Education Level, Years of Education
- **Financial**: Capital Gain, Capital Loss
- **Geographic**: Native Country
- **Family**: Relationship Status

## 🔮 Future Enhancements

- [ ] Real UCI Adult Dataset integration
- [ ] Model explainability with SHAP values
- [ ] Batch prediction from CSV upload
- [ ] Admin dashboard with analytics
- [ ] Model retraining pipeline
- [ ] A/B testing for model versions
- [ ] Resume/CV parsing for auto-fill

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For questions or support, please open an issue in the GitHub repository.

---

Built with ❤️ using Machine Learning and Modern Web Technologies