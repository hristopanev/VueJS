<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>



import HelloWorld from './components/HelloWorld.vue';
import Vue from 'vue';
Vue.component('HelloWorld', HelloWorld);

export default {
  name: 'app',
  data() {
    return { title: 'from App'}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
