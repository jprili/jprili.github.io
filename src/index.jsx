import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { useState } from "react";

import './index.css';

const main = () => {
    const body = document.getElementsByTagName("body")[0];
    body.className = "max-w-[75%] mx-auto";

    const root = ReactDOM
        .createRoot(document.getElementById('root'));

    root.render(
        <App/>
    );
}

main();
