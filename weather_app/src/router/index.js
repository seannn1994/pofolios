import { createRouter, createWebHistory } from 'vue-router';
// import AppLayout from '../views/AppLayout.vue';
import WeatherPage from '../views/WeatherPage.vue';  // 假设你有一个天气查询页面
// import OtherPage from '../views/OtherPage.vue';  // 其他页面

const routes = [
    {
        path: '/',
        name: 'AppLayout',
        // component: AppLayout,
        children: [
            {
                path: '',
                name: 'WeatherPage',
                component: WeatherPage,
            },
            // {
            //     path: 'other',
            //     name: 'OtherPage',
            //     component: OtherPage,
            // },
            // 你可以继续添加其他页面路由
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
