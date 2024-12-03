import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import axios from 'axios';
import router from './router';

const app = createApp(App);

// 设置 Axios 默认地址
axios.defaults.baseURL = '/api';  // 将 API 请求前缀设置为 /api

// 将 axios 挂载到 Vue 实例上
app.config.globalProperties.$axios = axios;

// 使用 Element Plus 和 Vue Router
app.use(ElementPlus);
app.use(router);

// 挂载 Vue 应用
app.mount('#app');
