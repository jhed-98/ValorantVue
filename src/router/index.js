import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/agents",
      name: "AgentsList",
      component: () => import("../views/agents/AgentsView.vue"),
    },
    {
      path: "/agents/:uuid",
      name: "AgentDetails",
      props: true,
      component: () => import("../views/agents/AgentDetailsView.vue"),
    },
  ],
});

export default router;
