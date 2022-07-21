import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: () =>
            import("../components/MoviesPage.vue"),
    },
    {
        path: "/DetailsPage/:id",
        name: "DetailsPage",
        component: () =>             import("../components/DetailsPage.vue"),
    }]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes})

export default router