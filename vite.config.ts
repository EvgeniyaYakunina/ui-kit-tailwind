// https://vite.dev/config/
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
  base: "/ui-kit-tailwind/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  plugins: [react()],
})
