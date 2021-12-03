<template>
  <div id="app">
    <TheNavigation/>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script >
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: { TheNavigation }
}
</script>
