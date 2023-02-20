/*
 * @Author: Yanc
 * @Date: 2023-02-20 15:27:46
 * @LastEditTime: 2023-02-20 15:27:55
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
