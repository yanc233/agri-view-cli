/*
 * @Author: Yanc
 * @Date: 2023-02-20 15:27:46
 * @LastEditTime: 2023-02-20 19:20:31
 */
import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["src/index"],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
});
