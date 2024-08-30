const { theme } = require('antd');
const { getDesignToken } = theme;

const bioBridgeTheme = {
  token: {
    colorPrimary: '#5175B3',
    colorInfo: '#5174B5',
    colorDanger: '#f5222d',
    colorSuccess: '#52c41a',
    colorWarning: '#ff7a45',
    colorBackground: '#fff',
    colorText: '#1C1C1C',
    colorTextSecondary: '#B9D6F2',
  },
};

const globalToken = getDesignToken(bioBridgeTheme);

module.exports = {
  plugins: [
    {
      plugin: require('craco-less'),
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: globalToken,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
