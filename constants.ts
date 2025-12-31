
import { RoadmapStep } from './types';

export const ROADMAP_DATA: RoadmapStep[] = [
  {
    id: 'step1',
    title: 'STEP 1: Python Basics',
    items: [
      // Core Fundamentals
      { id: 'py-core-1', label: 'Python Syntax & Basics', category: '1. Core Fundamentals' },
      { id: 'py-core-2', label: 'Data Types (Int, Float, String, Bool)', category: '1. Core Fundamentals' },
      { id: 'py-core-3', label: 'Arithmetic & Logical Operators', category: '1. Core Fundamentals' },
      // Control Flow
      { id: 'py-flow-1', label: 'Conditional Statements (If, Else, Elif)', category: '2. Control Flow' },
      { id: 'py-flow-2', label: 'Loops (For & While)', category: '2. Control Flow' },
      // Functions & Logic
      { id: 'py-logic-1', label: 'Functions & Arguments', category: '3. Functions & Logic' },
      { id: 'py-logic-2', label: 'Lambda Functions', category: '3. Functions & Logic' },
      { id: 'py-logic-3', label: 'Scope (Global vs Local)', category: '3. Functions & Logic' },
      // Data Structures
      { id: 'py-ds-1', label: 'Lists & List Methods', category: '4. Data Structures' },
      { id: 'py-ds-2', label: 'Dictionaries & Sets', category: '4. Data Structures' },
      { id: 'py-ds-3', label: 'Tuples', category: '4. Data Structures' },
      // Error Handling
      { id: 'py-err-1', label: 'Try, Except, Finally', category: '5. Error Handling' },
      { id: 'py-err-2', label: 'Custom Exceptions', category: '5. Error Handling' },
    ],
  },
  {
    id: 'step2',
    title: 'STEP 2: Mathematics',
    items: [
      // 1. Statistics
      { id: 'math-stats-1', label: 'Mean, Median, Mode', category: '1. Statistics (#1 Priority)' },
      { id: 'math-stats-2', label: 'Variance & Std Deviation', category: '1. Statistics (#1 Priority)' },
      { id: 'math-stats-3', label: 'Correlation', category: '1. Statistics (#1 Priority)' },
      { id: 'math-stats-4', label: 'Probability Basics', category: '1. Statistics (#1 Priority)' },
      { id: 'math-stats-5', label: 'Hypothesis Testing', category: '1. Statistics (#1 Priority)' },
      { id: 'math-stats-6', label: 'p-value', category: '1. Statistics (#1 Priority)' },
      { id: 'math-stats-7', label: 'Confidence Interval', category: '1. Statistics (#1 Priority)' },
      // 2. Linear Algebra
      { id: 'math-la-1', label: 'Vectors & Matrices', category: '2. Linear Algebra (#2 Priority)' },
      { id: 'math-la-2', label: 'Dot Product', category: '2. Linear Algebra (#2 Priority)' },
      { id: 'math-la-3', label: 'Matrix Multiplication', category: '2. Linear Algebra (#2 Priority)' },
      { id: 'math-la-4', label: 'Eigenvalues / Eigenvectors (PCA)', category: '2. Linear Algebra (#2 Priority)' },
      // 3. Probability
      { id: 'math-prob-1', label: 'Conditional Probability', category: '3. Probability (#3 Priority)' },
      { id: 'math-prob-2', label: 'Bayes Theorem', category: '3. Probability (#3 Priority)' },
      { id: 'math-prob-3', label: 'Normal Distribution', category: '3. Probability (#3 Priority)' },
      // 4. Calculus
      { id: 'math-calc-1', label: 'Derivatives', category: '4. Calculus (Basics)' },
      { id: 'math-calc-2', label: 'Gradient Descent (Concept)', category: '4. Calculus (Basics)' },
      // 5. Optimization
      { id: 'math-opt-1', label: 'Loss Function', category: '5. Optimization (Conceptual)' },
      { id: 'math-opt-2', label: 'Learning Rate', category: '5. Optimization (Conceptual)' },
      { id: 'math-opt-3', label: 'Minima', category: '5. Optimization (Conceptual)' },
    ],
  },
  {
    id: 'step3',
    title: 'STEP 3: Python Libraries',
    items: [
      { id: 's3-numpy-1', label: 'Arrays Creation & Reshaping', category: '1. NumPy (Numerical Python)' },
      { id: 's3-numpy-2', label: 'Array Indexing & Slicing', category: '1. NumPy (Numerical Python)' },
      { id: 's3-numpy-3', label: 'Broadcasting & Vectorization', category: '1. NumPy (Numerical Python)' },
      { id: 's3-numpy-4', label: 'Universal Functions (ufuncs)', category: '1. NumPy (Numerical Python)' },
      { id: 's3-pandas-1', label: 'Series & DataFrame Basics', category: '2. Pandas (Data Analysis)' },
      { id: 's3-pandas-2', label: 'Reading & Writing Data (CSV, Excel, SQL)', category: '2. Pandas (Data Analysis)' },
      { id: 's3-pandas-3', label: 'Selection, Filter & Sort', category: '2. Pandas (Data Analysis)' },
      { id: 's3-pandas-4', label: 'Missing Data (NaN) Handling', category: '2. Pandas (Data Analysis)' },
      { id: 's3-pandas-5', label: 'Groupby & Aggregation', category: '2. Pandas (Data Analysis)' },
      { id: 's3-pandas-6', label: 'Merging, Joining & Concat', category: '2. Pandas (Data Analysis)' },
      { id: 's3-pandas-7', label: 'Pivot Tables & Multi-indexing', category: '2. Pandas (Data Analysis)' },
      { id: 's3-mpl-1', label: 'Basic Line, Bar & Scatter Plots', category: '3. Matplotlib (Static Viz)' },
      { id: 's3-mpl-2', label: 'Subplots & Layout Management', category: '3. Matplotlib (Static Viz)' },
      { id: 's3-mpl-3', label: 'Plot Customization (Colors, Labels, Legend)', category: '3. Matplotlib (Static Viz)' },
      { id: 's3-sns-1', label: 'Distribution Plots (Hist, KDE)', category: '4. Seaborn (Statistical Viz)' },
      { id: 's3-sns-2', label: 'Categorical Plots (Box, Violin, Count)', category: '4. Seaborn (Statistical Viz)' },
      { id: 's3-sns-3', label: 'Matrix Plots (Heatmaps, Cluster)', category: '4. Seaborn (Statistical Viz)' },
      { id: 's3-sns-4', label: 'Regression Plots (lmplot)', category: '4. Seaborn (Statistical Viz)' },
      { id: 's3-plotly-1', label: 'Interactive Charts (Zoom, Hover)', category: '5. Interactive Visualization' },
      { id: 's3-plotly-2', label: 'Cufflinks Integration with Pandas', category: '5. Interactive Visualization' },
    ],
  },
  {
    id: 'step4',
    title: 'STEP 4: ML & DL Algorithms',
    items: [
      // Supervised
      { id: 's4-reg-1', label: 'Simple & Multiple Linear Regression', category: '1. Supervised: Regression' },
      { id: 's4-reg-2', label: 'OLS, Ridge & Lasso Regularization', category: '1. Supervised: Regression' },
      { id: 's4-class-1', label: 'Logistic Regression & Sigmoid', category: '2. Supervised: Classification' },
      { id: 's4-class-2', label: 'K-Nearest Neighbours (KNN)', category: '2. Supervised: Classification' },
      { id: 's4-class-3', label: 'Support Vector Machines (SVM)', category: '2. Supervised: Classification' },
      { id: 's4-class-4', label: 'Evaluation Metrics (Precision/Recall)', category: '2. Supervised: Classification' },
      // Trees
      { id: 's4-tree-1', label: 'Decision Trees (Entropy/Gini)', category: '3. Tree & Ensemble Methods' },
      { id: 's4-tree-2', label: 'Random Forest (Bagging)', category: '3. Tree & Ensemble Methods' },
      { id: 's4-tree-3', label: 'Boosting (XGBoost/LightGBM)', category: '3. Tree & Ensemble Methods' },
      // Unsupervised
      { id: 's4-un-1', label: 'K-Means Clustering & Elbow Method', category: '4. Unsupervised Learning' },
      { id: 's4-un-2', label: 'Principal Component Analysis (PCA)', category: '4. Unsupervised Learning' },
      // Specialized
      { id: 's4-dl-1', label: 'Natural Language Processing (NLP)', category: '5. NLP & Deep Learning' },
      { id: 's4-dl-2', label: 'Neural Networks Architecture', category: '5. NLP & Deep Learning' },
      { id: 's4-dl-3', label: 'Backpropagation & Optimizers', category: '5. NLP & Deep Learning' },
    ],
  },
  {
    id: 'step5',
    title: 'STEP 5: ML & DL Libraries',
    items: [
      { id: 's5-sk-1', label: 'Scikit-learn: Preprocessing', category: '1. Scikit-learn (Workflow)' },
      { id: 's5-sk-2', label: 'Scikit-learn: Pipelines', category: '1. Scikit-learn (Workflow)' },
      { id: 's5-sk-3', label: 'Scikit-learn: Model Selection', category: '1. Scikit-learn (Workflow)' },
      { id: 's5-dl-1', label: 'TensorFlow & Keras API', category: '2. Deep Learning Frameworks' },
      { id: 's5-dl-2', label: 'PyTorch: Tensors & Gradients', category: '2. Deep Learning Frameworks' },
    ],
  },
  {
    id: 'step6',
    title: 'STEP 6: Big Data & Apache Spark',
    items: [
      { id: 's6-spark-1', label: 'Apache Spark Basics & Architecture', category: '1. Spark Fundamentals' },
      { id: 's6-spark-2', label: 'Resilient Distributed Datasets (RDDs)', category: '1. Spark Fundamentals' },
      { id: 's6-spark-3', label: 'PySpark: DataFrames', category: '2. Spark Data & SQL' },
      { id: 's6-spark-4', label: 'Spark SQL & Catalyst Optimizer', category: '2. Spark Data & SQL' },
    ],
  },
  {
    id: 'step7',
    title: 'STEP 7: SQL',
    items: [
      { id: 's7-basic-1', label: 'DQL: SELECT, FROM, WHERE', category: '1. SQL Fundamentals' },
      { id: 's7-basic-2', label: 'Joins (Inner, Left, Right, Full)', category: '1. SQL Fundamentals' },
      { id: 's7-basic-3', label: 'Aggregations: GROUP BY, HAVING', category: '1. SQL Fundamentals' },
      { id: 's7-basic-4', label: 'Subqueries & CTEs', category: '1. SQL Fundamentals' },
      { id: 's7-sys-1', label: 'MySQL & PostgreSQL', category: '2. Database Systems' },
      { id: 's7-sys-2', label: 'SQL Server & Oracle DB', category: '2. Database Systems' },
      { id: 's7-sys-3', label: 'SQLite (Lightweight)', category: '2. Database Systems' },
    ],
  },
];
