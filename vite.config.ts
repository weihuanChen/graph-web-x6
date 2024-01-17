import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: ['.js', '.json', '.ts','.vue'] // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
  
});
