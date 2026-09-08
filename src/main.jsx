import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// BrowserRouter keeps each page address in sync with the browser URL.
// Local Vite development stays at /, while the production build uses the GitHub Pages repository path.
const routerBaseName = import.meta.env.DEV ? "/" : import.meta.env.BASE_URL;

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter basename={routerBaseName}>
            <App />
        </BrowserRouter>
    </StrictMode>,
);
