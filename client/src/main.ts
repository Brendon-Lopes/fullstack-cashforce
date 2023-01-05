import { createApp } from "vue";
import Toast, { type PluginOptions, POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from "./App.vue";

import "./assets/main.css";

const options: PluginOptions = {
  transition: "Vue-Toastification__bounce",
  maxToasts: 5,
  newestOnTop: true,
  position: POSITION.BOTTOM_RIGHT,
  pauseOnHover: false,
  pauseOnFocusLoss: false,
};

createApp(App).use(Toast, options).mount("#app");
