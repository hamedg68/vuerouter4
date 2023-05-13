<template>
  <div id="nav">
    <RouterLink id="logo" to="/">vue router 4</RouterLink>
    <RouterLink
      v-for="i in destinations"
      :key="i.id"
      :to="{ name: 'destination.show', params: { id: i.id, slug: i.slug } }"
    >
      {{ i.name }}
    </RouterLink>
    <RouterLink :to="{ name: 'protected' }">Dashboard</RouterLink>
  </div>
</template>

<script lang="ts" setup>
import sourceData from "@/data.json";
import { reactive } from "vue";

const destinations = reactive(sourceData.destinations);
</script>

<style lang="css" scoped>
#nav .my-link-active {
  color: #d4af37;
  border-bottom: 1px solid #d4af37;
}
</style>
