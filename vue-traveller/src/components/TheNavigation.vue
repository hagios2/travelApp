<template>
  <div id="nav">
    <router-link id="logo" to="/">Home</router-link>
    <router-link
      :key="destination.id"
      v-for="destination in destinations"
      :to="{
        name: 'destination.show',
        params: { id: destination.id, slug: destination.slug },
      }"
    >
      {{ destination.name }}
    </router-link>
  </div>
</template>
<script>
import sourceData from "@/data.json";

export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>
