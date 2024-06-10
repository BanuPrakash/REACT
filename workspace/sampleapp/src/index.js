import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Counter from './Counter';

// createRoot uses fiber asynchronous rendering
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Counter />);
root.render(<App />);

// React 17 version
//ReactDOM.render is no longer supported in React 18. Use createRoot instead.
//ReactDOM.render(<Counter />, document.getElementById('root'));