import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vite.dev/config/
export default defineConfig({
  base: "/ui-kit-tailwind/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  plugins: [react()],
})
