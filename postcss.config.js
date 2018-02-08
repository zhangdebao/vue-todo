/* postcss作用：帮助我们后处理css(已经经过处理之后的style转换出来的css)，再经过postcss优化 */
const autoprefixer = require('autoprefixer')

module.exports = {
  /* 具体通过以下插件优化 */
  plugins: [
    /* 为css添加浏览器前缀 */
    autoprefixer()
  ]
}
