import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves this repository from /basic-react-router-app/ instead of the domain root.
export default defineConfig({
    base: "/basic-react-router-app/",
    plugins: [react()],
});
