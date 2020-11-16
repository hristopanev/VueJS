<template>
  <div class="hello">
    <h2 v-on:mouseover="showHeading = true">
      Time is ...?
    </h2>
    <div v-if="showHeading">
      {{ currentDate | formatDate }}
    </div>
    <h2>Image Gallery</h2>
    <img v-bind:src="imageUrl" />
    <br>
    <a v-bind:href="siteUrl">Go To Site</a>
    <div v-if="isValid">
      Content is valid!
    </div>
    <template v-else>
      Content is Invalid!
    </template>
    <div v-for="f in fruits" v-bind:key="f.id">
      <h2>{{ f.name }}</h2>
      <div>{{ f.weight }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      imageUrl: 'https://images.unsplash.com/photo-1575202683848-b058a750ac87?ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80',
      siteUrl: 'https://unsplash.com/',
      isValid: true,
      showHeading: false,
      currentDate: new Date(),
      fruits: [
        { id: 0, name: 'kiwi', weight: 0.5 },
        { id: 1, name: 'Banana', weight: 0.2 },
        { id: 2, name: 'Orange', weight: 0.4 },
        { id: 3, name: 'Aplle', weight: 0.3 },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
