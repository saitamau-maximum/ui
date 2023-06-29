import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(({ mode }) => {
  const plugins: PluginOption = [react()];
  if (mode === "analyze") {
    plugins.push(visualizer());
  }

  return {
    build: {
      rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
    },
    plugins,
  };
});
