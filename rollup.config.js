import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
import nodePolyfills from "rollup-plugin-node-polyfills";
import html from "rollup-plugin-html";
import typescript from "rollup-plugin-typescript2";

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;
export default [
  {
    input: "./pages/fulfilled/src/main.ts",
    output: {
      name: "FulfilledContract",
      file: "./public/fulfilled/bundle.js",
      format: "iife", // immediately-invoked function expression — suitable for <script> tags
      sourcemap: true,
      globals: {
        arweave: "arweave",
      },
    },

    plugins: [
      json(),
      typescript(),
      html({ include: "**/*.html" }),
      nodePolyfills(),
      resolve(),
      commonjs(),
      production && terser(), // minify, but only in production
    ],
    context: "this",
    external: "arweave",
  },
  {
    input: "./pages/acceptable/src/main.ts",
    output: {
      name: "AcceptableContract",
      file: "./public/acceptable/bundle.js",
      format: "iife", // immediately-invoked function expression — suitable for <script> tags
      sourcemap: true,
      globals: {
        arweave: "arweave",
      },
    },

    plugins: [
      json(),
      typescript(),
      html({ include: "**/*.html" }),
      nodePolyfills(),
      resolve(),
      commonjs(),
      production && terser(), // minify, but only in production
    ],
    context: "this",
    external: "arweave",
  },
  {
    input: "./pages/create/src/main.ts",
    output: {
      name: "CreateContract",
      file: "./public/create/bundle.js",
      format: "iife", // immediately-invoked function expression — suitable for <script> tags
      sourcemap: true,
      globals: {
        arweave: "arweave",
      },
    },

    plugins: [
      json(),
      typescript(),
      html({ include: "**/*.html" }),
      nodePolyfills(),
      resolve(),
      commonjs(),
      production && terser(), // minify, but only in production
    ],
    context: "this",
    external: "arweave",
  },
];
