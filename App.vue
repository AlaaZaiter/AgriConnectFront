
<template>
  <div id="app">
    <AppHeader />
    <About />
    <MostPopularPosts/>
    <Category/>
    <BestSelling/>
  </div>
</template>

<script>
import AppHeader  from './components/Header.vue';
import About from './components/About.vue';
import MostPopularPosts from './components/MostPopularPosts.vue';
import Category from './components/Category.vue';
import BestSelling from './components/BestSelling.vue';
export default {
  name: 'App',
  components: {
    AppHeader ,
    About,
    MostPopularPosts,
    Category,
    BestSelling,
  },
};
</script>
