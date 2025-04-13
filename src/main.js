import { createApp } from "vue";
import App2 from "./App2.vue";
import router from "./router";
// import "@/assets/css/reset.css";

// use(xxx) => 使用vue以外的擴充組件
createApp(App2).use(router).mount("#app");
