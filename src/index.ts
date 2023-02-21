/*
 * @Author: Yanc
 * @Date: 2023-02-15 14:56:15
 * @LastEditTime: 2023-02-21 18:45:03
 */
import program from "commander";
import { prompt } from "./prompt";
import { generator } from "./generator";
import { version } from "../package.json";
import { createDir } from "./createDir";

program.version(version, "-v --version");

export async function create() {
  program.usage("<project-name>").parse(process.argv);
  // 解析命令行第一个参数作为项目名称
  const argProjectName = program.args[0];

  // let createdFile;

  try {
    const meta = await prompt(argProjectName);

    // createdFile = await createDir(meta);
    await createDir(meta);

    const url = await generator(meta);
    console.log(
      "%c [ url ]-28",
      "font-size:13px; background:pink; color:#bf2c9f;",
      url
    );
  } catch (error) {
    console.log(
      "%c [ url ]-28",
      "font-size:13px; background:pink; color:#bf2c9f;",
      error
    );
  }

  //  console.log(`\n🎉  Successfully created project ${meta.projectName}.`);
}
