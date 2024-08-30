const bioBridgeThemeVariables = {
  '@primary-color': '#5175B3',
  '@secondary-color': '#5174B5',
  '@info-color': '#5175B3',
  '@text-color': '#1C1C1C',
  '@text-color-secondary': '#B9D6F2',
  '@heading-color': '#5175B3',
  '@layout-header-background': '#1C1C1C',
  '@layout-sider-background': '#1C1C1C',
  '@btn-primary-bg': '#5175B3',
  '@processing-color': '#5174B5',
  '@success-copy-color': '#52c41a',
};

module.exports = {
  plugins: [
    {
      plugin: require('craco-less'),
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: bioBridgeThemeVariables,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
