const HtmlPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const {normalize, join, resolve} = require('path');

const ROOT = normalize(join(__dirname));

const PATHS = Object.freeze({
  ROOT         : ROOT,
  NODE_MODULES : join(ROOT, 'node_modules'),
  SRC          : join(ROOT, 'src'),
  PUBLIC       : join(ROOT, 'public')
});

module.exports = {

  // Target
  target : 'web',

  // Dev Tool
  devtool : 'source-map',

  // Resolve
  resolve : {

    // modules directories
    modules : [
      PATHS.SRC,
      PATHS.NODE_MODULES
    ],

    // extensions
    extensions : ['*', '.js', '.jsx', '.json', 'css']
  },

  entry : {
    main : [
      resolve(PATHS.SRC, 'index')
    ]
  },

  output : {
    path     : PATHS.PUBLIC,
    pathinfo : true,
    filename : 'main.js'
  },

  module : {
    rules : [
    {
      test    : /\.js$/,
      exclude : /node_modules/,
      loader  : 'babel-loader'
    },
    {
      test    : /\.css/,
      loaders : [
        {
          loader : 'style-loader'
        },
        {
          loader : 'css-loader',
          query : {
            import         : false,
            importLoaders  : 1,
            localIdentName : '[name]__[local]___[hash:base64:5]',
            modules        : true,
            sourceMap      : true
          }
        },
        {
          loader  : 'postcss-loader',
          options : {
            config : {
              path : resolve(__dirname, './postcss.config.js')
            }
          }
        }
      ]
    }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template : 'src/index.html',
      title    : 'main',
      inject   : true,
      mode     : 'production'
    })
  ]
}
