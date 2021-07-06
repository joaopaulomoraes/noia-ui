module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../packages/{{dashCase name}}/src/index.tsx',
        templateFile: 'component/src/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../packages/{{dashCase name}}/src/styles.tsx',
        templateFile: 'component/src/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../packages/{{dashCase name}}/index.ts',
        templateFile: 'component/index.ts.hbs'
      },
      {
        type: 'add',
        path: '../packages/{{dashCase name}}/package.json',
        templateFile: 'component/package.json.hbs'
      },
      {
        type: 'add',
        path: '../packages/{{dashCase name}}/README.md',
        templateFile: 'component/README.md.hbs'
      },
      {
        type: 'add',
        path: '../packages/{{dashCase name}}/tsconfig.json',
        templateFile: 'component/tsconfig.json.hbs'
      },
    ]
  })
}