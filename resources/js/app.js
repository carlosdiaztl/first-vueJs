import "./bootstrap";
import { createApp } from "vue";
import App from "./components/App.vue";
import router from "./router";
import { RouterLink, RouterView } from "vue-router";
// import { RouterView } from "vue-router";
// Vue.use(RouterView);
const app = createApp(App);
app.component("RouterLink", RouterLink);
app.component("RouterView", RouterView);
app.use(router);
app.mount("#app");
