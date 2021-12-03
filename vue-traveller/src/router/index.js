import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/brazil",
    name: "Brazil",
    component: () => import(/* webpackChunkName: "brazil" */ "@/views/Brazil.vue"),
  },
  {
    path: "/panama",
    name: "Panama",
    component: () => import(/* webpackChunkName: "panama" */ "@/views/Panama.vue"),
  },
  {
    path: "/hawaii",
    name: "Hawaii",
    component: () => import(/* webpackChunkName: "hawaii" */ "@/views/Hawaii.vue"),
  },
  {
    path: "/destination/:id",
    name: "destination.show",
    component: () => import(/* webpackChunkName: "destination details" */ "@/views/DestinationShow.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
