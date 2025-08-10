import { defineConfig } from "vite";

export default defineConfig({
    base: '/Anuraj-Portfolio/', // 👈 this must match your repo name
    build: {
        minify: "terser",
    },
});
