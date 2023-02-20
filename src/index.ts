/*
 * @Author: Yanc
 * @Date: 2023-02-15 14:56:15
 * @LastEditTime: 2023-02-20 19:04:17
 */
import program from "commander";
import { prompt } from "./prompt";
import packageJson from "../package.json";

program.version(packageJson.version, "-v --version");

export async function create() {
  program.usage("<project-name>").parse(process.argv);
  // 解析命令行第一个参数作为项目名称
  const argProjectName = program.args[0];

  const meta = await prompt(argProjectName);
  console.log(meta);
  //  console.log(`\n🎉  Successfully created project ${meta.projectName}.`);
}
