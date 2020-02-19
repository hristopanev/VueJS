/* eslint-disable vue/require-v-for-key */
<template>
<div>
    <h3>Todo</h3>
    <ul id="incomplete-tasks">
        <li v-for="todo in todos" :key="todo.id">
          <label >{{ todo.name }}</label>
          <label>Feed the Cat</label>
          <button class="complete" @click="completeTodo(todo.id)">Complete</button>
          <button class="delete">Delete</button>
        </li>
    </ul>
</div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'incompleted-todos',
    props: {
      todos: {
        type: Array,
        required: true
      }
    },
    methods: {
      completeTodo(todoId) {
        this.$$emit('completed-todos', todoId)
      }
    }
    
}
</script>

<style scoped>
/* ToDo List */
  li {
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
  }
  li > label {
    font-size: 18px;
    line-height: 40px;
    width: 237px;
    padding: 0 0 0 11px;
  }
  
  button {
    margin: 0 0 0 10px;
  }
</style>