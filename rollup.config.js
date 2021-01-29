import pkg from "./package.json";
import sucrase from "rollup-plugin-sucrase";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: false,
      strict: false,
    },
  ],
  plugins: [
    resolve({
      extensions: [".js"],
      customResolveOptions: {
        moduleDirectory: "src",
      },
    }),
    sucrase({
      exclude: ["node_modules/**"],
      transforms: ["jsx"],
    }),
    commonjs(),
  ],
  external: ["react", "react-dom"],
};
