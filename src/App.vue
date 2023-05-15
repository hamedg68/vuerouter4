<template>
  <TheNavigation />
  <div class="container">
    <!-- Sidebar -->
    <routerView
      v-slot="{ Component }"
      class="vire left-sidebar"
      name="LeftSidebar"
    >
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </Transition>
    </routerView>

    <!-- Main -->
    <routerView v-slot="{ Component }" class="main-view">
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </Transition>
    </routerView>
  </div>
</template>
<script setup lang="ts">
import TheNavigation from "./components/TheNavigation.vue";
</script>
<style lang="css" scoped>
/* slide transition */
.slide-enter-active,
.slide-leave-active {
  transition: 1s;
  opacity: 1s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

/* moveUp transition */
.moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.moveUp-leave-active {
  animation: moveUp 0.3s ease-in;
}

@keyframes moveUp {
  0% {
    transition: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.container {
  display: flex;
}

.left-sidebar {
  width: 20%;
}

.main-view {
  width: 100%;
}
</style>
