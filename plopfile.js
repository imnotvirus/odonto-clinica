import * as plop from "plop";

/**
 *
 * @param {plop.NodePlopAPI} plop
 */
export default function plopConfig(plop) {
  plop.setGenerator("component", {
    description: "Create a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of your component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/Component.tsx.hbs",
      },
    ],
  });

  // generate page
  plop.setGenerator("page", {
    description: "Create a new page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of your page?",
      },
      {
        type: "list",
        name: "type",
        message: "What type of page is this?",
        choices: ["public", "private", "not authenticated"],
        default: "public",
      },
    ],
    actions: (data) => {
      const isPrivate = data.type === "private";
      const isNotAuthenticated = data.type === "not authenticated";

      let templateFile = "templates/PagePublic.tsx.hbs";
      if (isPrivate) {
        templateFile = "templates/PagePrivate.tsx.hbs";
      } else if (isNotAuthenticated) {
        templateFile = "templates/PageNotAuthenticated.tsx.hbs";
      }

      const actions = [
        {
          type: "add",
          path: "src/app/{{lowerCase name}}/page.tsx",
          templateFile,
        },
      ];
      return actions;
    },
  });
}
