/*
 * @Author: Yanc
 * @Date: 2023-02-15 14:56:28
 * @LastEditTime: 2023-02-15 15:55:07
 */
import inquirer from "inquirer";
import { red, reset } from "kolorist";

export interface Meta {
  projectName: string;
  description: string;
  user: string;
  template: string;
}

export async function prompt(targetDir: string) {
  const defaultTargetDir = "agri-project";

  const questions = [
    {
      type: targetDir ? null : "text",
      name: "projectName",
      message: reset("Project name:"),
      initial: defaultTargetDir,
      default: defaultTargetDir,
      onState: (state: any) => {
        targetDir = formatTargetDir(state.value) || defaultTargetDir;
      },
    },
    {
      name: "template",
      type: "list",
      message: "请选择你要使用的项目模板",
      choices: [
        {
          name: "agri-system",
          value: "agri-system",
        },
        {
          name: "lib-monorepo",
          value: "lib-monorepo",
        },
      ],
    },
    {
      name: "description",
      message: "project description",
      default: "",
    },
    {
      name: "user",
      message: "your name",
      default: "",
    },
  ];

  const meta: Meta = await inquirer.prompt(questions, {
    onCancel: () => {
      throw new Error(red("✖") + " Operation cancelled");
    },
  });

  return meta;
}

function formatTargetDir(targetDir: string) {
  return targetDir?.trim().replace(/\/+$/g, "");
}
