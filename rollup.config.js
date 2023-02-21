/*
 * @Author: Yanc
 * @Date: 2023-02-20 15:27:46
 * @LastEditTime: 2023-02-21 19:06:56
 */
import { defineConfig } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import clear from "rollup-plugin-clear";
import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";

export default defineConfig({
  input: "./src/index.ts",
  plugins: [
    typescript(),
    commonjs(),
    babel({ babelHelpers: "bundled", presets: ["@babel/env"] }),
    nodeResolve({
      exportConditions: ["node"], // add node option here,
      preferBuiltins: false,
    }),
    json(),
    clear({
      targets: ["dist"],
    }),
  ],
  output: [
    {
      file: "dist/index.js",
      format: "es",
    },
  ],
  external: [
    "commander",
    "globby",
    "inquirer",
    "node:path",
    "node:url",
    "globby",
    "gulp",
    "gulp-replace",
    "chalk",
  ],
  // onwarn(warning, warn) {
  //   // 忽略指定类型的警告
  //   if (warning.code === "UNRESOLVED_IMPORT") return;

  //   // 使用默认处理函数兜底
  //   warn(warning);
  // },
});
