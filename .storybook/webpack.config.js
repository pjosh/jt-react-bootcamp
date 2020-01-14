const path = require('path');

module.exports = async ({ config, mode }) => {
  config.resolve.alias = {
    DesignSystemImages: path.resolve(__dirname, '../src/images'),
    DesignSystemComponents: path.resolve(__dirname, '../src/react_components'),
    DesignSystem: path.resolve(__dirname, '../src')
  };

  config.module.rules.push({
    test: /\.less$/,
    loaders: ["style-loader", "css-loader", "less-loader"]
  });

  config.resolve.extensions.push('.less');

  return config;
};
