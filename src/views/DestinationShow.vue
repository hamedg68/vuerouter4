<template>
 <div>
  <section class="destination">
    <h1>{{ destination?.name }}</h1>
    <GoBack/>
    <div class="destination-details">
      <img :src="`/images/${destination?.image}`" :alt="destination?.name" />
      <p>{{ destination?.description }}</p>
    </div>
  </section>

  <section class="experiences">
    <h2>Top experiences in {{ destination?.name }}</h2>
    <div class="cards">
      <RouterLink
        v-for="i in destination?.experiences"
        :key="i.slug"
        :to="{ name: 'experience.show', params: { experienceSlug: i.slug } }"
      >
        <Experience :experience="i"> </Experience>
      </RouterLink>
    </div>

    <RouterView></RouterView>
  </section>
 </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import sourceData from "@/data.json";
import Experience from "@/components/Experience.vue";
import GoBack from "@/components/GoBack.vue";
const route = useRoute();

const destination = computed(() => {
  return sourceData.destinations.find(
    (destination) => destination.id === parseInt(route.params.id as string)
  );
});

// const destination = ref();
// onMounted(async () => {
//   const res = await fetch(
//     `https://travel-dummy-api.netlify.app/${route.params.slug}`
//   );
//   destination.value = await res.json();
// });

// watch(
//   () => route.params.slug,
//   async () => {
//     const res = await fetch(
//     `https://travel-dummy-api.netlify.app/${route.params.slug}`
//   );
//   destination.value = await res.json();
//   },
//   {immediate: true}
// );
</script>
