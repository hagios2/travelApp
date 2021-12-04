import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import sourceData from '@/data.json'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () =>
      import(
        /* webpackChunkName: "destination details" */ "@/views/DestinationShow.vue"
      ),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    beforeEnter: (to) => {
      const exists = sourceData.destinations.find(
        (destination) => parseInt(to.params.id) === destination.id);

      if(!exists) {

        return {

          name: 'NotFound',

          params: {pathMatch: to.path.split('/').slice(1)},

          query: to.query,

          hash: to.hash
        
        }
      }
    },
    children: [
      {
        path: ":experienceSlug",
        name: "experience.show",
        component: () =>
          import(
            /* webpackChunkName: "experience details" */ "@/views/ExperienceShow.vue"
          ),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/components/NotFound')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {

    return savedPosition || new Promise((resolve) => { 
      
      setTimeout(() => {
        resolve({ top: 0, behavior: 'smooth'})
      }, 300)
    })
  }
});

export default router;
