<template>
  <div>
    <h1>Greetings, {{ username }}</h1>
    <button @click="logout()">logout</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

//https://bobbyhadz.com/blog/typescript-property-does-not-exist-on-type-window
const username = ref((window as any).user);

function logout() {
  (window as any).user = null;
  router.push({ name: "Home" });
}
</script>
