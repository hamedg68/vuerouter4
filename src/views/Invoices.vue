<template>
  <div>
    <h1>Invoices</h1>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeRouteLeave } from "vue-router";

onBeforeRouteLeave((to, from) => {
  const answer = window.confirm("are you sudr you want to leave");
  if (!answer) return false;
});
</script>
