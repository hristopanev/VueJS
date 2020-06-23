<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Counter v-bind:counter="counter" />
    <ProductList :products="products" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Counter from './components/Counter.vue';
import ProductList from './components/ProductList.vue';

export default {
  name: 'App',
  data: function() {
    return {
      counter: 0,
      products: [
        { 
          type: 'Paste', 
          price: 5, 
          ingredients: [ "Meatballs", "Sauce" ] 
        },
        { 
          type: 'Musaka', 
          price: 11, 
          ingredients: [ "Potatoes", "Mince" ] 
        },
      ]
    }
  },
  components: {
    HelloWorld,
    Counter,
    ProductList
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
