<template>
  <div class="hello">
    <div>
      <h2>{{ type }}</h2>
      <div>{{ price }}</div>
      <ul>
          <li v-for="(ing, i) in ingredients" :key="i"> {{ ing }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
      type: String,
      price: Number,
      ingredients: Array
  },
  data: function() {
      return {

      }
  },
  methods: {
      changeType() {
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
    list-style: none;
}
</style>
