const CracoLessPlugin = require('craco-less');

module.exports = {
  webpack: {
    configure: {
      output: {
        publicPath: 'https://maurms.ppdaicdn.com/react-demo'
      }
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@ant-prefix': 'st' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};