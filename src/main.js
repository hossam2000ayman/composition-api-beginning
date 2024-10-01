import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const vueApp = createApp(App);
vueApp.use(router).mount("#app");

//custom directive globally
vueApp.directive("maxSize", (element, data) => {
  element.style.fontSize = data.value + "px";
});

vueApp.directive("boldFont", (element, data) => {
  element.style.fontWeight = data.value;
});
