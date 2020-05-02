<template>
  <div>
      <div v-for="todo in todos" :key="todo"><!-- <= Loops through the Todos component and creates a key|value array from the data() -->
        <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)" /> <!-- <= We need to bind a property here.
          Each loop, this assigns an instance of TodoItem,
           each instance pulling from each itiration from the loop above!

              key: An item from the "todos" array, found in the data() from Todos component
              value: An instance of TodoItem, with its property importing the data from each loop instance from Todo, exporting "Title"
            -->
      </div>
  </div>
</template>


<script>

import TodoItem from "./TodoItem.vue";

export default {
  name: "Todos",
  components: {
    TodoItem
  },
  props: ["todos"] // <-- Accepting as property of this object. This represents the array with all of our todo items from the component
}
</script>

<style scoped>

</style>
