<template>
  <div class="home">
    <h1>All destinations</h1>

    <button @click="triggerRouterError()">Go to home page</button>
    <div class="destinations">
      <RouterLink
        v-for="i in destinations"
        :key="i.id"
        :to="{ name: 'destination.show', params: { id: i.id, slug: i.slug } }"
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
import {
  isNavigationFailure,
  NavigationFailureType,
  useRouter,
} from "vue-router";
const destinations = ref(sourceData.destinations);

const router = useRouter();
async function triggerRouterError() {
  const navigationFailure = await router.push("/");
  if (
    isNavigationFailure(navigationFailure, NavigationFailureType.duplicated)
  ) {
    console.log("to", navigationFailure.to);
    console.log("from", navigationFailure.from);
  }
}
</script>
