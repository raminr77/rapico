import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "./sw";

createApp(App)
  .use(router)
  .mount("#main");
