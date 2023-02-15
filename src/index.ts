import program from "commander";
import { prompt } from "./prompt";

export async function cli() {
  program.usage("<project-name>").parse(process.argv);
  const argProjectName = program.args[0];

  const meta = await prompt(argProjectName);
  console.log(meta);
  //  console.log(`\n🎉  Successfully created project ${meta.projectName}.`);
}

cli();
