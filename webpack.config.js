/* 下面使用绝对路径通过path */
const path = require('path')
// 使用html引入index.js入口文件
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
// CSS单独抽取打包
const ExtractPlugin = require('extract-text-webpack-plugin')
// ExtractPlugin作用：将非Javascript的代码单独打包成一个静态资源文件

// 判断开发或者生产环境  NODE_ENV在package.json中配置
const isDev = process.env.NODE_ENV === 'development'
const config = module.exports = {
  target: 'web', // 在web平台上开发
  // __dirname 根路径
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(gif|jpg|png|svg|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name]-aa.[ext]' // 打包之后的图片命名 [name]：原来的名字，[ext]源文件的后缀
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new HTMLPlugin()
  ]
}
// 判断开发或者生产环境
if (isDev) {
  config.module.rules.push({
    test: /\.styl$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      'stylus-loader'
    ]
  })
  config.devtool = '#cheap-module-eval-source-map' // 调试源码而不是编译之后的代码
  config.devServer = {
    port: 8040,
    // 设置成0.0.0.0的好处可以通过localhost、127.0.0.1、内网IP进行访问
    host: '0.0.0.0',
    overlay: {
      // overlay  开发过程中有错误 会直接显示在网页上， 可以快速定位到错误
      errors: true
    },
    // historyFallback: {},
    // open: true // 自动打开浏览器
    hot: true // 热重启
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(), // 热重启之后， 不需要刷新页面， 页面数据自动变化
    new webpack.NoEmitOnErrorsPlugin()
  )
} else {
  config.entry = {
    app: path.join(__dirname, 'src/index.js'),
    vendor: ['vue']
  }
  config.output.filename = '[name].[chunkhash:8].js'
  config.module.rules.push({
    test: /\.styl$/,
    use: ExtractPlugin.extract({
      fallback: 'style-loader',
      use: [
        // style-loader作用：就是在 css-loader处理之后内容的外面包裹一层JS代码， 作用是把CSS写到HTML中， 所以在这里不需要style-loader
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        'stylus-loader'
      ]
    })
  })
}
module.exports = config
config.plugins.push(
  // 执行输出的静态文件的名字
  new ExtractPlugin('styles.[contentHash:8].css'),
  // 配置单独打包vendor.js文件
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor'
  }),
  // 把webpack相关的代码从app.js中单独拿出来单独打包到runtime（一般情况这样命名）文件
  new webpack.optimize.CommonsChunkPlugin({
    name: 'runtime'
  })
)
