const routerPrompt= (cli) => {
  // 注入特性
  cli.injectFeature({
    name: 'Router',
    value: 'router',
    description: '是否支持路由',
  });
  // 如果上面选择了不需要支持路由的话，应该就不用弹下面这个 prompt 了吧
  // 弹出选项，决定路由模式
  cli.injectPrompt({
    name: 'routerMode',
    when: (answers) => answers.features.includes('router'),
    message: '请选择路由模式',
    type: 'list',
    choices: [
      { name: 'hash', value: 'hash' },
      { name: 'history', value: 'history' },
    ],
    default: 'history',
  });
  // App组件的title
  cli.injectPrompt({
    name: 'appTitle',
    when: (answers) => answers.features.includes('router'),
    message: '请输入App组件的内容',
    type: 'text',
    default: 'AppTitle',
  });
  // 选完路由模式后的回调
  cli.onPromptComplete((answers, projectOptions) => {
    if (answers.features.includes('router')) {
      if (!projectOptions.plugins) {
        projectOptions.plugins = {};
      }
      // 如果是包含了多个 package 的话，建议可以改成 monorepo
      projectOptions.plugins['@rippiorg/react-router-plugin'] = {
        routerMode: answers.routerMode,
      };
      projectOptions.routerMode = answers.routerMode;
      projectOptions.appTitle = answers.appTitle;
    }
  })
};

export default routerPrompt;
