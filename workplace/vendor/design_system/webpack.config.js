const path = require('path');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.less'],
    alias: {
      DesignSystemImages: path.resolve(__dirname, './src/images'),
      DesignSystemComponents: path.resolve(__dirname, './src/react_components'),
      DesignSystem: path.resolve(__dirname, './src')
    }
  }
};
