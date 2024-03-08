import './bootstrap';
import 'bootstrap';
import '@popperjs/core';
import {createApp} from 'vue'
// import { createPinia } from 'pinia'
import router from './router'


import App from "./layouts/app.vue";

const app = createApp(App);
// const pinia = createPinia();

app.use(router);
// app.use(pinia);

app.mount("#app");
