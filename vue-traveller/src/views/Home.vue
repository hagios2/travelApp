<template>
  <div class="home">
    <h1>Home</h1>

    <div class="destinations">
      <router-link
      :key="destination.id"
      v-for="destination in destinations"
      :to="destination.slug"
      >
      <h2>{{ destination.name }}</h2>
      <img :src="`images/${destination.image}`" :alt="destination.name">
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import sourceData from "@/data.json";

export default {
  data() {
    return {
      destinations: sourceData.destinations,
    }
  },
};
</script>
