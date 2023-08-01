const routeConfig = [
    {
        name: 'Jiu-css',
        path: '/jiu-css',
        component: () => import('@/pages/JiuCss.vue'),
    },
    {
        name: 'Jiu-gsap',
        path: '/jiu-gsap',
        component: () => import('@/pages/JiuGsap.vue'),
    },
];

export default routeConfig;
