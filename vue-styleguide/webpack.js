const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const vueLoader = require('vue-loader')
const path = require('path')
var baseComponentsUrl = './src/components'
var assetsPath = function (_path) {
  const assetsSubDirectory =  baseComponentsUrl;
  return path.posix.join(assetsSubDirectory, _path)
}
 
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports={
  resolve: {
    alias: {
      '~': path.join(__dirname, './test')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        include: [resolve('node_modules/better-picker'),resolve('node_modules/deepmerge')],
        use: {
          loader: 'babel-loader',
          options: {
            sourceType: 'unambiguous',
            presets: [
              [
                '@babel/preset-env',
                {
                  // useBuiltIns: 'usage', 
                  targets: {
                    ie: '11'
                  }
                }
              ]
            ],
            comments: false
          }
        }
      },
      {
        test:/\.(css?|scss)(\?.*)?$/,
        use: ['style-loader', 'css-loader','sass-loader']
      },  
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        // loader: 'file-loader',
        options: {
          limit: 10000,
          name: '/fonts/[name].[ext]?v=[hash:8]',
        }
      },   
      {
        test:/\.svg$/,
        use:['svg-sprite-loader','svgo-loader'],  
      } 
    ]
  }, 
  plugins: [new vueLoader.VueLoaderPlugin()].concat(
    process.argv.includes('--analyze') ? [new BundleAnalyzerPlugin()] : []
  )
}