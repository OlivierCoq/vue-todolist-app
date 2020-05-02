<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <p>
      <!-- Checkbox -->
      <input type="checkbox" v-on:change="markComplete">
        <!-- Same thing:
      <input type="checkbox" @change="markComplete">-->
      {{todo.title}}
      <button @click="$emit('del-todo', todo.id)" class="del">x</button>
    </p> <!-- This takes an item in the Todos array, pulls and spits out that item's title.  -->
    <!-- <p>{{todo.id}}</p> -->

  </div>
</template>

<script>
  export default {
    name: "TodoItem",
    props: ["todo"], // <- This is an item from the Todos array
    methods: {
      markComplete() {
        this.todo.completed = !this.todo.completed; // <- This toggles between true and false
      }
    }
  }
</script>

<style scoped>
  .todo-item {
    /* background: #f4f4f4; */
    padding: 1em;
    border-bottom: 1px #ccc dotted;
    box-shadow:0 1px 5px rgba(12,12,12,0.1);
    margin: 10px;
  }

  .is-complete {
    text-decoration: line-through;
  }

  .del {
    background: red;
    color: #fff;
    padding: 5px 9px;
    cursor: pointer;
    float: right;
    border-radius: 50%;
    border: none;
    box-shadow:0 1px 5px rgba(12,12,12,0.1);
  }

</style>
