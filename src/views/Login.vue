<template>
  <div class="login">
    <form class="form" @submit.prevent="login()">
      <h1>Login</h1>
      <label for="username">Username</label>
      <input
        v-model="state.form.username"
        name="username"
        type="text"
        class="input"
      />
      <label for="password">Password</label>
      <input
        v-model="state.form.password"
        name="password"
        type="text"
        class="input"
      />
      <button class="btn">Login</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

const state = reactive({
  form: {
    username: "",
    password: "",
  },
});

const router = useRouter();
const route = useRoute();
function login() {
  const username = state.form.username;
  (window as any).user = username;
  const redirectPath = (route.query.redirect as string) || "/protected";
  router.push(redirectPath);
}
</script>
