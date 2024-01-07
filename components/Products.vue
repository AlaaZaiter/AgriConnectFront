<!-- Products.vue -->
<template>
<AppHeader/>
  <div class="AllProductsContainer">
<div class ="ProductItem">
  <img src='../images/agriculturalTool.png' alt="logo Image" class="ProductImg"/>
  <button class="AddToCartBTN"> Add To Cart</button>
  <p class="ProductTitle">Product Title</p>
  <div class="starsReview">
   <p class="PriceNumber"> 360$</p>
   <p class="star"> &#9733;</p>
   <p class="star"> &#9733;</p>
   <p class="star"> &#9733;</p>
   <p class="star"> &#9733;</p>
   <p class="star"> &#9733;</p>
   <p class="numderReview"> (65)</p>
    </div>
  </div>
  <div class ="ProductItem">
  <img src='../images/agriculturalTool.png' alt="logo Image" class="ProductImg"/>
  <button class="AddToCartBTN"> Add To Cart</button>
  <p class="ProductTitle">Product Title</p>
  <div class="starsReview">
   <p class="PriceNumber"> 360$</p>
   <p class="star"> &#9733;</p>
   <p class="star"> &#9733;</p>
   <p class="star"> &#9733;</p>
   <p class="star"> &#9733;</p>
   <p class="star"> &#9733;</p>
   <p class="numderReview"> (65)</p>
    </div>
  </div><div class ="ProductItem">
  <img src='../images/agriculturalTool.png' alt="logo Image" class="ProductImg"/>
  <button class="AddToCartBTN"> Add To Cart</button>
  <p class="ProductTitle">Product Title</p>
  <div class="starsReview">
   <p class="PriceNumber"> 360$</p>
   <p class="star"> &#9733;</p>
   <p class="star"> &#9733;</p>
   <p class="star"> &#9733;</p>
   <p class="star"> &#9733;</p>
   <p class="star"> &#9733;</p>
   <p class="numderReview"> (65)</p>
    </div>
  </div>
  <div class ="ProductItem">
  <img src='../images/agriculturalTool.png' alt="logo Image" class="ProductImg"/>
  <button class="AddToCartBTN"> Add To Cart</button>
  <p class="ProductTitle">Product Title</p>
  <div class="starsReview">
   <p class="PriceNumber"> 360$</p>
   <p class="star"> &#9733;</p>
   <p class="star"> &#9733;</p>
   <p class="star"> &#9733;</p>
   <p class="star"> &#9733;</p>
   <p class="star"> &#9733;</p>
   <p class="numderReview"> (65)</p>
    </div>
  </div>

</div>
<Footer/>
</template>

<script>
import AppHeader from './Header.vue'
import Footer from './Footer.vue'
import '../CSS/OurProducts.css'
import '../CSS/AllProducts.css'

export default {
  name: 'ProductsList',
  components: {
    AppHeader,
    Footer,
  },
};
</script>

<style scoped>

</style>
