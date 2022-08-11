const { override } = require("customize-cra");
const addLessLoader = require("customize-cra-less-loader");

module.exports = override(
  addLessLoader({
    lessLoaderOptions: {
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {
          '@base-color': '#ff0965',
          '@enable-css-reset': false,
          '@enable-ripple-effect': false,
          '@font-family': 'Helvetica Neue',
          '@font-size-base': '24px'
        }
      }
    }
  })
);