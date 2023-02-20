/*
 * @Author: Yanc
 * @Date: 2023-02-20 19:34:36
 * @LastEditTime: 2023-02-20 19:54:51
 */
// import { globby } from "globby";
import { mkdirSync } from "fs";
import { Meta } from "./prompt";

async function checkDir(name: string) {
  // const list = await globby("*", { onlyDirectories: true });
  const list = ["ss", "ss"];
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
