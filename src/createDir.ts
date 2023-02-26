/*
 * @Author: Yanc
 * @Date: 2023-02-20 19:34:36
 * @LastEditTime: 2023-02-26 21:37:42
 */
// import { globby } from "globby";
import { mkdirSync, readdirSync, statSync } from "fs";
import { join } from "path";
import { Meta } from "./prompt";

async function checkDir(name: string) {
  // 一个支持glob匹配模式的文件查找库
  // const list = await globby("*", { onlyDirectories: true });

  // Node API
  const list = readdirSync("./").filter((file) =>
    statSync(join("./", file)).isDirectory()
  );

  if (list.includes(name)) {
    const msg = `Directory ${name} already exists.`;
    console.error(msg);
    throw new Error(msg);
  }
}

export async function createDir(meta: Meta) {
  await checkDir(meta.projectName);

  await mkdirSync(meta.projectName);

  return meta.projectName;
}
