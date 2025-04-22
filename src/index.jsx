import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);

const body = document.getElementsByTagName("body")[0];
body.className = "bg-slate-800";


