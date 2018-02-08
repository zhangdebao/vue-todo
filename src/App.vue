<template lang="html">
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/todo/header.vue'
import Footer from './components/todo/footer.jsx'
import Todo from './components/todo/todo.vue'
export default {
  components: {
    Header,
    Footer,
    Todo
  }
}
</script>

<style lang="stylus" scoped>
  #app
    position absolute
    left 0
    right 0
    top 0
    bottom 0
  #cover
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    background-color #999
    z-index -1
    opacity .2
</style>
