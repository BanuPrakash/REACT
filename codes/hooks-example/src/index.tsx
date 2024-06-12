import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Demo from './imperative-handle/Demo';
import Demo from './deffered/Demo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Demo />);


