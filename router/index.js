import { createRouter, createWebHistory } from 'vue-router';
import Posts from '../components/Posts.vue';
import Products from '../components/Products.vue';
import Payment from '../components/Payment.vue';
import HomePage from '../components/HomePage.vue';
import Login from '../components/Login.vue';
import ordersPage from '../components/Orderspage.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/orders', name: 'ordersPage', component: ordersPage },
  { path: '/login', name: 'Login', component: Login },
  { path: '/posts', name: 'posts', component: Posts },
  { path: '/products', name: 'Products', component: Products },
  { path: '/payment', name: 'Payment', component: Payment }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
