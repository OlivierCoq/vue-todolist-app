<template>
  <div>
    <AddTodo v-on:add-todo="addTodo"/> <!-- run addTodo function -->
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" /> <!-- <= Here, we're binding this element with the data from our Todos component, passed in as a property-->
      <!-- ^ Whenever del-todo is emitted, run function deleteTodo() -->
    <br>
    <p>{{note}}</p>
      <!-- <h3>{{ todo.title }}</h3> -->
  </div>
</template>

<script>


import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';


export default {
  name: 'Home',
  components: {
    AddTodo,
    Todos
  },
  data() {
    return {
      note: "Whether you think you can, or you think you can't, you're right. ~ Henry Ford",
      todos: []
    }
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo) {
        // ES6 way, using the spread operator:
      // this.todos = [...this.todos, newTodo];
        // Old way:
      this.todos.push(newTodo);
    }
  },
}

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@import url('https://use.typekit.net/bfp8brg.css');

body {
  line-height: 1.4;
  font-family: "futura-pt", sans-serif;
  padding: 1em;
}

.btn {
  display: inline-block;
  color: white;
  border: none;
  background: #555;
  cursor: pointer;
  font-size: 14px;
  box-shadow:0 1px 5px rgba(12,12,12,0.1);
}

.btn:hover  {
  background: #666;
}

</style>
