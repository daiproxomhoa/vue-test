// store.js
import { reactive } from "vue";
import router from "../routes";

export const authState = reactive({
  isLogin: true,
  login() {
    localStorage.setItem("token", "daivt");
    this.isLogin = true;
    router.replace("/");
  },
  logout() {
    localStorage.removeItem("token");
    this.isLogin = false;
    router.replace("/login");
  },
});
