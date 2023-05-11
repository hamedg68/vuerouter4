<template>
    <div class="card">
        <img :src="`/images/${experience.image}`" :alt="experience.name">
        <span class="card__text">
            {{ experience.name }}
        </span>
    </div>
</template>


<script lang="ts" setup>

const props = withDefaults(
  defineProps<{
    experience: any;
  }>(),
  {
  }
);

</script>