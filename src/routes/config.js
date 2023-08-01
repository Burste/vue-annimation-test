const routeConfig = [
    {
        name: 'Home',
        path: '/',
        component: () => import('@/pages/Home.vue'),
    },
    {
        name: 'Jiu-css',
        path: '/jiu-css',
        component: () => import('@/pages/JiuCss.vue'),
    },
];

export default routeConfig;
