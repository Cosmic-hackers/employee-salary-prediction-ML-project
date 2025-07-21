import { FormField } from '../types/prediction';

export const formFields: FormField[] = [
  {
    name: 'age',
    label: 'Age',
    type: 'number',
    min: 17,
    max: 90,
    step: 1
  },
  {
    name: 'workclass',
    label: 'Work Class',
    type: 'select',
    options: [
      'Private',
      'Self-emp-not-inc',
      'Self-emp-inc',
      'Federal-gov',
      'Local-gov',
      'State-gov',
      'Without-pay',
      'Never-worked'
    ]
  },
  {
    name: 'education',
    label: 'Education Level',
    type: 'select',
    options: [
      'Bachelors',
      'Some-college',
      '11th',
      'HS-grad',
      'Prof-school',
      'Assoc-acdm',
      'Assoc-voc',
      '9th',
      '7th-8th',
      '12th',
      'Masters',
      '1st-4th',
      '10th',
      'Doctorate',
      '5th-6th',
      'Preschool'
    ]
  },
  {
    name: 'education_num',
    label: 'Education Years',
    type: 'number',
    min: 1,
    max: 16,
    step: 1
  },
  {
    name: 'marital_status',
    label: 'Marital Status',
    type: 'select',
    options: [
      'Married-civ-spouse',
      'Divorced',
      'Never-married',
      'Separated',
      'Widowed',
      'Married-spouse-absent',
      'Married-AF-spouse'
    ]
  },
  {
    name: 'occupation',
    label: 'Occupation',
    type: 'select',
    options: [
      'Tech-support',
      'Craft-repair',
      'Other-service',
      'Sales',
      'Exec-managerial',
      'Prof-specialty',
      'Handlers-cleaners',
      'Machine-op-inspct',
      'Adm-clerical',
      'Farming-fishing',
      'Transport-moving',
      'Priv-house-serv',
      'Protective-serv',
      'Armed-Forces'
    ]
  },
  {
    name: 'relationship',
    label: 'Relationship',
    type: 'select',
    options: [
      'Wife',
      'Own-child',
      'Husband',
      'Not-in-family',
      'Other-relative',
      'Unmarried'
    ]
  },
  {
    name: 'race',
    label: 'Race',
    type: 'select',
    options: [
      'White',
      'Asian-Pac-Islander',
      'Amer-Indian-Eskimo',
      'Other',
      'Black'
    ]
  },
  {
    name: 'sex',
    label: 'Gender',
    type: 'select',
    options: ['Male', 'Female']
  },
  {
    name: 'capital_gain',
    label: 'Capital Gain',
    type: 'number',
    min: 0,
    max: 100000,
    step: 1
  },
  {
    name: 'capital_loss',
    label: 'Capital Loss',
    type: 'number',
    min: 0,
    max: 10000,
    step: 1
  },
  {
    name: 'hours_per_week',
    label: 'Hours per Week',
    type: 'number',
    min: 1,
    max: 99,
    step: 1
  },
  {
    name: 'native_country',
    label: 'Native Country',
    type: 'select',
    options: [
      'United-States',
      'Cambodia',
      'England',
      'Puerto-Rico',
      'Canada',
      'Germany',
      'Outlying-US(Guam-USVI-etc)',
      'India',
      'Japan',
      'Greece',
      'South',
      'China',
      'Cuba',
      'Iran',
      'Honduras',
      'Philippines',
      'Italy',
      'Poland',
      'Jamaica',
      'Vietnam',
      'Mexico',
      'Portugal',
      'Ireland',
      'France',
      'Dominican-Republic',
      'Laos',
      'Ecuador',
      'Taiwan',
      'Haiti',
      'Columbia',
      'Hungary',
      'Guatemala',
      'Nicaragua',
      'Scotland',
      'Thailand',
      'Yugoslavia',
      'El-Salvador',
      'Trinadad&Tobago',
      'Peru',
      'Hong',
      'Holand-Netherlands'
    ]
  }
];