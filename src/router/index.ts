import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
  },
  {
    path: "/destination/:id/:slug/:experienceSlug",
    name: "experience.show",
    component: () => import("@/views/ExperienceShow.vue"),
    props: (route: any) => ({ ...route.params, id: parseInt(route.params.id) }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "my-link-active",
});

export default router;
