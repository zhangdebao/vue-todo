# vue-todo

> A Vue.js project

## Build Setup

``` bash
# 安装
npm i html-webpack-plugin
npm i postcss-loader autoprefixer babel-loader babel-core
#根目录新建.babelrc文件和postcss.config.js文件
npm i babel-preset-env babel-plugin-transform-vue-jsx
npm i babel-helper-vue-jsx-merge-props babel-plugin-syntax-jsx

# CSS单独抽取打包
npm i extract-text-webpack-plugin
# ExtractPlugin作用：将非Javascript的代码单独打包成一个静态资源文件
# 1、webpack.config.js配置  const ExtractPlugin = require('extract-text-webpack-plugin')
# 2、根据运行开发环境和生产环境， 配置处理.stylus文件的内容、
#
# 第三方类库代码单独打包
# config.entry = {
#  app: path.join(__dirname, 'src/index.js'),
#  vendor: ['vue', 'vue-router']  //单独打包vue,vue-router等
# }
# config.plugins中追加
#  new webpack.optimize.CommonsChunkPlugin({
#    name: 'vendor'
#  })
#  
# 打包输出文件必须使用chunkhash（hash是整个项目的hash， chunkhash是单个输出文件的hash），这样每次业务代码修改之后， 生成的chunkhash也会发生变化
#
# 把webpack相关的代码从app.js中单独拿出来单独打包到runtime（一般情况这样命名）文件
# new webpack.optimize.CommonsChunkPlugin({
#  name: 'runtime'
# })
#

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
