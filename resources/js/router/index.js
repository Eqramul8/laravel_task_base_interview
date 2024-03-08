import { createRouter, createWebHistory } from 'vue-router'

import login from "../pages/login.vue";
import register from "../pages/register.vue";
import user from "../pages/user.vue";
import profile from "../pages/profile.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: login,
        },
        {
            path: "/register",
            name: "register",
            component: register,
        },
        {
            path: "/userQR/:id",
            name: "user",
            component: user,
        },
        {
            path: "/user/:id",
            name: "profile",
            component: profile,
        },


    ],
});

export default router;
