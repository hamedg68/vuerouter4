<template>
  <section class="destination">
    <h1>{{ destination?.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination?.image}`" :alt="destination?.name" />
      <p>{{ destination?.description }}</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import sourceData from "@/data.json";

const route = useRoute();

const destination = computed(() => {
  return sourceData.destinations.find(
    (destination) => destination.id === parseInt(route.params.id as string)
  );
});
</script>
