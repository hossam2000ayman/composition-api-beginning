import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/view/HomePage.vue"),
    meta: {
      title: "Home",
    },
  },

  {
    name: "Todo List",
    path: "/todo/list",
    component: () => import("@/view/ShowTodo.vue"),
    meta: {
      title: "Todo List",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // to and from are both route objects. after make some validation then  must call `next`.
  document.title = to.meta.title;
  next();
});

export default router;
