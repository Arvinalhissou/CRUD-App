import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/create",
      name: "create",
      component: () => import("./components/CreateDocument.vue"),
    },
    {
      path: "/collection",
      name: "collection",
      component: () => import("./components/DeleteDocument.vue"),
    },
    {
      path: "/update",
      name: "update",
      component: () => import("./components/UpdateDocument.vue"),
    },
  ],
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

//createApp(App).mount("#app");
