import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// BrowserRouter and Vite use the same repository base path in local and production builds.
const routerBaseName = import.meta.env.BASE_URL;

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter basename={routerBaseName}>
            <App />
        </BrowserRouter>
    </StrictMode>,
);
