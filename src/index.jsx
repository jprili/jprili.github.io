import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { useState } from "react";

import './index.css';

const main = () => {
    const body = document.getElementsByTagName("body")[0];

    body.className = "md:max-w-[65%] mx-[10%] md:mx-auto";

    const root = ReactDOM
        .createRoot(document.getElementById('root'));

    root.render(
        <App/>
    );
}

main();
