/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "192.168.1.152", // Specify your desired IP address

    port: 3001, // Replace with your desired port number
  },
});
