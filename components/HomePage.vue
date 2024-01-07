
<template>
  <div >
    <AppHeader />
    <About />
    <MostPopularPosts/>
    <Category/>
    <OurProducts/>
    <contact/>
    <Footer/>

  </div>
</template>

<script>
import AppHeader  from './Header.vue';
import About from './About.vue';
import MostPopularPosts from './MostPopularPosts.vue';
import Category from './Category.vue';
import OurProducts from './OurProducts.vue';
import contact from './ContactUs.vue';
import Footer from './Footer.vue'
export default {
  name: 'HomePage',
  components: {
    AppHeader ,
    About,
    MostPopularPosts,
    Category,
    OurProducts,
    contact,
    Footer,
  },
};
</script>
