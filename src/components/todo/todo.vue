<template lang="html">
  <section class="real-app">
    <input type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下去要做什么？"
      @keyup.enter="addTodo"></input>
      <Item
      v-for ="todo in filteredTodos"
      :Keys = "todo.id"
      :todo="todo"
      @del="deleteTodo"/>
      <Tabs
      @toggle="toggleFilter"
      @clearAllCompleted = "clearAllCompleted"
      :filter="filter"
      :todos="todos"/>
  </section>
</template>

<script>
let id = 0
import Item from './items.vue'
import Tabs from './tabs.vue'
export default {
  data () {
    return {
      todos: [],
      filter: 'all'
    }
  },
  components: {
    Item,
    Tabs
  },
  methods: {
    addTodo (e) {
      this.todos.unshift({
        id: id++,
        content : e.target.value.trim(),
        completed: false
      })
       e.target.value = ''
    },
    deleteTodo (index) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === index))
    },
    toggleFilter (state) {
      this.filter = state
    },
    clearAllCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  },
  computed: {
    filteredTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed' ? true : false
      return this.todos.filter(todo => completed === todo.completed)
    }
  }
}
</script>

<style lang="stylus" scoped>
.real-app
  width 600px
  margin 0 auto
  box-shadow 0 0 5px #666
.add-input
  position relative
  width 100%
  font-size 24px
  font-family inherit
  font-weight inherit
  line-height 1.4em
  outline none
  color inherit
  padding 6px
  border 1px solid #999
  box-shadow inset 0 -1px 5px 0 rgba(0, 0, 0, .5)
  box-sizing border-box
  padding 16px 16px 16px 60px
</style>
