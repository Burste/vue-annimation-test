import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import { createPinia } from 'pinia';
import routes from '@/routes/config.js';
import { createRouter, createWebHashHistory } from 'vue-router';

const pinia = createPinia();
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount('#app');
