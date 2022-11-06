import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/secciones/:id",
    name: "Home2",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/colegio",
    name: "colegio",
    component: () => import("../views/Colegio.vue")
  },
  {
    path: "/colegio/:id",
    name: "colegioSecciones",
    component: () => import("../views/Colegio.vue")
  },
  {
    path: "/areas",
    name: "areas",
    component: () => import("../views/Areas.vue")
  },
  {
    path: "/escolares",
    name: "escolares",
    component: () => import("../views/Escolares.vue")
  },
  {
    path: "/sedes",
    name: "sedes",
    meta: { title: "sedes", requiresAuth: false },
    component: () => import("../views/Sedes.vue")
  },


  {
    path: "/plataformas",
    name: "plataformas",
    meta: { title: "Saberes", requiresAuth: false },
    component: () => import("../views/Plataformas.vue")
  },
  {
    path: "/blockinstitucional",
    name: "block GIG",
    component: () => import("../views/pagovirtual.vue")
  },
  {
    path: "/blockinstitucional/:url",
    name: "block GIG url",
    component: () => import("../views/pagovirtual.vue")
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
