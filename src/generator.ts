/*
 * @Author: Yanc
 * @Date: 2023-02-20 19:29:02
 * @LastEditTime: 2023-02-26 22:00:43
 */
import gulp from "gulp";
import replace from "gulp-replace";
import { join } from "path";
import { fileURLToPath } from "url";
import { Meta } from "./prompt";
// import { promisify } from "util";
// import download from "download-git-repo";

// const downloadGitRepo = promisify(download);

export async function generator(meta: Meta) {
  const templateDir = join(
    fileURLToPath(import.meta.url), // 在esm环境下的node 不能使用__direname
    `../../templates/${meta.template}`
  );

  // meta.repo 注意地址后面加 #分支名 默认是下载master分支
  // await downloadGitRepo(meta.repo, templateDir, {clone:true});

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
