<template>
  <header class="header">
    <h1>Todo List</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/api-version">API Version </router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/example">Example</router-link>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>


<style scoped>
  .header {
    background: #323232;
    color: white;
    text-align: center;
    padding: 2em;
  }

  .header a {
    color: white;
    padding-right: 5px;
  }

</style>
