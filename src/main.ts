// 1. Define route components.

import { createApp } from "vue";
import router from "./routes";
import AppVue from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// 5. Create and mount the root instance.
const app = createApp(AppVue);
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router);
app.use(ElementPlus);
app.mount("#app");

// Now the app has started!
