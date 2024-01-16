import { createRouter, createWebHistory } from 'vue-router';
import Posts from '../components/Posts.vue';
import Products from '../components/Products.vue';
import Payment from '../components/pExample.vue';
import HomePage from '../components/HomePage.vue';
import Login from '../components/Login.vue';
import ordersPage from '../components/Orderspage.vue';

import VerifyPage from '../EmailVerfication/verify.vue';
import AdminDashboardWrapper from '../components/AdminDashboardWrapper.vue';
import FarmerDashboardWrapper from '../components/FarmerDashboardWrapper.vue';


const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/orders', name: 'ordersPage', component: ordersPage },
  { path: '/login', name: 'Login', component: Login },
  { path: '/verify', name: 'verify', component: VerifyPage },
  { path: '/admin', name: 'AdminDash', component: AdminDashboardWrapper },
  { path: '/farmer', name: 'farmerDash', component: FarmerDashboardWrapper },
 { path: '/posts', name: 'posts', component: Posts },
  { path: '/products', name: 'Products', component: Products },
  { path: '/payment', name: 'Payment', component: Payment }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
