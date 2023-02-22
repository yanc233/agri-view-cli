/*
 * @Author: Yanc
 * @Date: 2023-02-20 19:29:02
 * @LastEditTime: 2023-02-22 09:33:02
 */
import gulp from "gulp";
import replace from "gulp-replace";
import { join } from "path";
import { fileURLToPath } from "url";
import { Meta } from "./prompt";

export async function generator(meta: Meta) {
  const templateDir = join(
    fileURLToPath(import.meta.url), // 在esm环境下的node 不能使用__direname
    `../../templates/${meta.template}`
  );

  return new Promise((resolve, reject) => {
    gulp
      .src([`${templateDir}/**`, "!node_modules"], { dot: true })
      .pipe(replace("@{projectName}", meta.projectName))
      .pipe(replace("@{description}", meta.description))
      .pipe(gulp.dest(meta.projectName))
      .on("error", (err) => {
        reject(err);
      })
      .on("end", () => {
        resolve(true);
      });
  });
}
