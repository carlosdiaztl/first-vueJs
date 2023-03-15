import { createRouter, createWebHashHistory } from "vue-router";
import productIndex from "../components/products/index.vue";
import notFound from "../components/notFound.vue";

const routes = [
    {
        path: "/products",
        component: productIndex,
    },
    {
        path: "/:pathMatch(.*)",
        component: notFound,
    },
];

const router = createRouter({
    history: createWebHashHistory(""),
    routes,
});

export default router; // Agregamos esta línea para exportar el objeto router
