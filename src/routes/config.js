const routeConfig = [
    {
        name: 'Home',
        path: '/',
        component: () => import('@/pages/Home.vue'),
    },
    {
        name: '九宮格動畫（CSS）',
        path: '/jiu-css',
        component: () => import('@/pages/JiuCss.vue'),
    },
    {
        name: '九宮格動畫（GSAP）',
        path: '/jiu-gsap',
        component: () => import('@/pages/JiuGsap.vue'),
    },
];

export default routeConfig;
