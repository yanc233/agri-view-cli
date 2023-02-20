/*
 * @Author: Yanc
 * @Date: 2023-02-15 14:56:15
 * @LastEditTime: 2023-02-20 19:56:45
 */
import program from "commander";
import { prompt } from "./prompt";
import { generator } from "./generator";
import packageJson from "../package.json";
// import { createDir } from "./createDir";

program.version(packageJson.version, "-v --version");

export async function create() {
  program.usage("<project-name>").parse(process.argv);
  // 解析命令行第一个参数作为项目名称
  const argProjectName = program.args[0];

  // let createdFile;

  try {
    const meta = await prompt(argProjectName);

    // createdFile = await createDir(meta);

    await generator(meta);

    console.log(meta);
  } catch (error) {}

  //  console.log(`\n🎉  Successfully created project ${meta.projectName}.`);
}
