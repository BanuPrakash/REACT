import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import StateCompExample from './hooks/StateCompExample';
import EffectExample from './hooks/EffectExample';
import ReducerHook from './hooks/ReducerHook';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ReducerHook />);

