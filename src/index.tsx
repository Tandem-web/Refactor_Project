import { StrictMode } from "react";
import {createRoot} from "react-dom/client";
import App from "./app";
import { BrowserRouter } from "react-router-dom";

import './shared/styles/index.scss';
import AuthProvider from "./features/Auth/context/auth-provider";
import React from "react";

const root = createRoot(document.getElementById('root'));

root.render (
    <StrictMode>
        <AuthProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </AuthProvider>
    </StrictMode>
)