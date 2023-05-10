<template>
  <TheNavigation />
  <div class="container">
    <routerView :key="$route.path"></routerView>
  </div>
</template>
<script setup lang="ts">
import TheNavigation from "./components/TheNavigation.vue";
</script>
<style scoped></style>
