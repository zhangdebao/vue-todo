import Vue from 'vue'
import App from './App.vue'

import './assets/styles/test.css'
import './assets/styles/test.stylus.styl'
import './assets/images/bg.jpg'
/* eslint-disable */
/**
 * [h参数 本身是一个createApp方法]
 * h(App) 把App组件渲染出来
 * $mount(root) 手动把VUE实例挂载到root节点下
 */
const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
  render: (h) => h(App)
}).$mount(root)
