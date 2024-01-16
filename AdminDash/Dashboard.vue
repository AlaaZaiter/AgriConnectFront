<template>
  <div class="Dashboard">
    <div class="side-menu">
      <p class="dash-title" @click="handleClick('default')"> Admin Dashboard</p>
      <ul class="dash-menu">
        <li class="dash-menu-item" @click="handleClick('products')">Products</li>
        <li class="dash-menu-item" @click="handleClick('orders')">Accounts</li>
        <li class="dash-menu-item" @click="handleClick('categories')">Categories</li>
      </ul>
    </div>
    <hr />
    <div class="dash-content">
      
      <div id="dash-projects" v-show="activeSection === 'products'">
        <productsDash />
      </div>
      <div id="dash-cv" v-show="activeSection === 'orders'">
        <AccountsDash />
      </div>
      <div id="dash-cv" v-show="activeSection === 'categories'">
        <CategoryDash />
      </div>
      <div id="default" v-show="activeSection === 'default'">
        <h2 class="default-dash-title">Welcome to Admin dashboard</h2>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsDash from './products.vue';
import AccountsDash from './Accounts.vue';
import CategoryDash from './Caregories.vue'
import '../CSS/FarmerDash.css';
export default {
  name: 'DashboardPage',
  components: {
    ProductsDash,
    AccountsDash,
    CategoryDash,
  },
  data() {
    return {
      activeSection: 'default',
    };
  },
  methods: {
    handleClick(section) {
      switch (section) {
        case 'posts':
          this.activeSection = 'posts';
          break;
        case 'products':
          this.activeSection = 'products';
          break;
        case 'orders':
          this.activeSection = 'orders';
          break;
        case 'categories':
          this.activeSection = 'categories';
          break;
        default:
          this.activeSection = 'default';
      }
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
