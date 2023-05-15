import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import sourceData from "@/data.json";

const routes = [
  { path: "/", name: "Home", component: Home, alias: '/home' },
  // { path: "/home", redirect: '/' },
  { path: "/login", name: "login", component: import("@/views/Login.vue") },
  {
    path: "/protected",
    name: "protected",
    components: {
      default: () => import("@/views/Protected.vue"),
      LeftSidebar: () => import("@/components/LeftSidebar.vue"),
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/invoices",
    name: "invoices",
    components: {
      default: () => import("@/views/Invoices.vue"),
      LeftSidebar: () => import("@/components/LeftSidebar.vue"),
    },
    meta: {
      requiresAuth: true,
    },
  },
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
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({ top: 0, behavior: "smooth" });
        }, 300); //300 ms is set because transition on router-view set to 300 ms
      })
    );
    // return savedPosition || { top: 0 };
    // return { top: 0, left: 0, behavior: 'auto' };
  },
});

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !(window as any).user) {
    return { name: "login", query: { redirect: to.fullPath } };
  }
});

export default router;
