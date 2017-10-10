/**
 * 这个文件可以修改build的默认设置
 * 默认配置请看 `node_modules/packing/config/webpack.build.babel.js`
 *
 * @param object webpackConfig 默认配置对象
 * @param object program packing-cli程序对象
 * @param object appConfig config/packing.js中的配置
 */

import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default (webpackConfig, program, appConfig) => {
  const config = webpackConfig;

  if (!config.resolve.alias) {
    config.resolve.alias = {};
  }
  config.resolve.alias.ajax = 'common/utils/ajax.js';

  if (appConfig.cssModules) {
    let cssModulesIdentName = '[path][name]__[local]--[hash:base64:5]';
    if (appConfig.cssModulesIdentName) {
      cssModulesIdentName = appConfig.cssModulesIdentName;
    }
    config.module.rules.forEach((rule) => {
      if (rule.test.test('.css')) {
        rule.loader = ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 2, minimize: true, module: true, localIdentName: cssModulesIdentName } },
            { loader: 'postcss-loader' }
          ]
        });
      }
    });
  }

  return config;
};
