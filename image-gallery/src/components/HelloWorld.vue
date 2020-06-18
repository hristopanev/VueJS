<template>
  <div class="hello">
    <h2 v-on:mouseover="showHeading = true">
      Time is ... ?
    </h2>
    <div v-if="showHeading">
      {{currentDate | formatDate}}
    </div>
    <div v-for="fruit in fruits" v-bind:key="fruit.id">
      <h2>{{fruit.type}}</h2>
      <p>{{fruit.weight}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function() {
    return {
      showHeading: false,
      currentDate: new Date(),
      fruits: [
        { id: 0, type: 'kiwi', weight: 0.5 },
        { id: 1, type: 'Apple', weight: 0.3 },
        { id: 2, type: 'Banana', weight: 0.6 },
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
