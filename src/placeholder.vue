<template>
  <div id="app">
    <Header  />
    <AddTodo v-on:add-todo="addTodo"/> <!-- run addTodo function -->
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" /> <!-- <= Here, we're binding this element with the data from our Todos component, passed in as a property-->
      <!-- ^ Whenever del-todo is emitted, run function deleteTodo() -->
    <br>
    <p>{{note}}</p>
      <!-- <h3>{{ todo.title }}</h3> -->
  </div>
</template>

<script>

import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Header,
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

      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => this.todos = this.todos.filter(todo => todo.id !== id, res.data)) // <- You HAVE to pass res.data through or you'll get an error
        .catch(err => console.log(err));

        //Using hardcoded todos array:
      // this.todos = this.todos.filter(todo => todo.id !== id); // <- This recreates the array as a new array that filters out the deleted todo
    },
    addTodo(newTodo) {

      const { title, completed } = newTodo;

          // POST request to this API. Adds our text to the API and returns with our newTodo:
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title, // <- Data
        completed // <- Data
      })
        .then(res => this.todos = [...this.todos, res.data]) //The API returns with a newTodo built for us, with a custom id
        .catch(err => console.log(err));

        // Note: when using axios to make GET and POST request, this returns:
        //   err = error message and data
        //   res = result


//Using hardcoded todos array:
        // ES6 way, using the spread operator:
      // this.todos = [...this.todos, newTodo];
        // Old way:
      // this.todos.push(newTodo);
    }
  },
      // This is a way of pulling data from apis using Vue.JS's created() function and axios:
  created() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => this.todos = res.data)
    .catch(err => console.log(err));
  }
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
