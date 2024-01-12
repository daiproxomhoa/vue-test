// 1. Define route components.

import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import AboutVue from "./About.vue";
import CalculateVue from "./Calculate.vue";
import LoginPageVue from "./LoginPage.vue";
import DefaultLayout from "./layout/DefaultLayout.vue";
import { authState } from "./store/auth";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        component: CalculateVue,
      },
      { path: "/about", component: AboutVue },
      { path: "/calculate", component: CalculateVue },
    ],
  },
  { path: "/login", component: LoginPageVue, name: "Login" },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(""),
  routes, // short for `routes: routes`
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !authState.isLogin) {
    next({ name: "Login" });
  }
  // if the user is not authenticated, `next` is called twice
  else if (to.name === "Login" && authState.isLogin) {
    next({ path: "/" });
  } else {
    next();
  }
});

export default router;
