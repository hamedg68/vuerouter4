import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import sourceData from "@/data.json";

const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
    beforeEnter(to: any, from: any) {
      const exists = sourceData.destinations.find(
        (destination) => destination.id === parseInt(to.params.id)
      );

      if (!exists)
        return {
          name: "NotFound",
          //alows keeping the URL while rendering a different page
          params: { pathMatch: to.path.split("/").slice(1) },
          query: to.query,
          hash: to.hash,
        };
    },
    children: [
      {
        path: ":experienceSlug",
        name: "experience.show",
        component: () => import("@/views/ExperienceShow.vue"),
        props: (route: any) => ({
          ...route.params,
          id: parseInt(route.params.id),
        }),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "my-link-active",
});

export default router;
