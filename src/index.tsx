import { StrictMode } from "react";
import {createRoot} from "react-dom/client";
import App from "./app";
import { BrowserRouter } from "react-router-dom";

import './styles/index.scss';

const root = createRoot(document.getElementById('root'));

root.render (
    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>
)