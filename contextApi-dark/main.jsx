import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from "react-dom";

import './index.css';
import App from './App';
import { ThemeProvider, useTheme } from './ThemeContext';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');

const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<ThemeProvider><App /></ThemeProvider> );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// ReactDOM.render(<ThemeProvider><App /></ThemeProvider>, document.getElementById('root'));
