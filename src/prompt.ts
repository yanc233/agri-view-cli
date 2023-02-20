/*
 * @Author: Yanc
 * @Date: 2023-02-15 14:56:28
 * @LastEditTime: 2023-02-20 19:19:48
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
  const defaultTargetDir = "new-project";
  const questions = [
    {
      name: "projectName",
      type: "input",
      message: reset("Project name:"),
      initial: defaultTargetDir,
      default: targetDir ?? defaultTargetDir,
      onState: (state: any) => {
        targetDir = formatTargetDir(state.value) || defaultTargetDir;
      },
      when: () => !targetDir, // 只在用户没有输入项目名称的时候触发
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
