<template>
  <div>
    <form @submit="addTodo_API">
      <input type="text" v-model="title" name="title" placeholder="Add Todo...">
      <input type="submit" class="btn" value="Add">
    </form>
  </div>
</template>

<script>
    // For making new IDs:
   // import uuid from 'uuid';
  // import {v4 as uuidv4} from 'uuid';

  export default {
    name: "AddTodoAPI",
    data() {
      return {
        title: ""
      }
    },
    methods: {
      addTodo_API(e){

        e.preventDefault();
        // Creates new TodoItem to latter be pushed to todos array:
        const newTodo = {
          // id: uuidv4(),
          title: this.title,
          completed: false
        }
          // Send up to parent
          this.$emit('add-todo', newTodo);

          this.title = " ";
      }
    }
  }
</script>

<style scoped>
  form {
    display: flex;
  }

  input[type="text"] {
    flex: 10;
    padding:  5px;
  }

  input[type="submit"] {
    flex: 5;
    height: 5em;
  }
</style>
