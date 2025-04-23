import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { useState } from "react";

import './index.css';

const main = () => {
    const body = document.getElementsByTagName("body")[0];
    body.className = "bg-slate-800 max-w-[75%] x-auto";

    const root = ReactDOM
        .createRoot(document.getElementById('root'));

    root.render(
        <App/>
    );
}

main();
