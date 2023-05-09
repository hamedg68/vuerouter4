<template>
  <div class="home">
    <h1>All destinations</h1>

    <div class="destinations">
      <RouterLink
        v-for="i in destinations"
        :key="i.id"
        :to="{ name: 'destination.show', params: { id: i.id } }"
      >
        <h2>{{ i.name }}</h2>
        <img :src="`/images/${i.image}`" :alt="i.name" />
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import sourceData from "@/data.json";

const destinations = ref(sourceData.destinations);
</script>
