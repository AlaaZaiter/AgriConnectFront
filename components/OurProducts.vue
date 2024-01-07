<template>
  <div id="OurProductsContainer">
  <p class="ProductsTitle">Explore Our Products</p>
  <div class="SubOurProductsContainer">
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
    <button class="ProductsButton" @click="goToProducts">View All Products</button>

</div>
</template>

<script>
import '../CSS/OurProducts.css'

export default {
  name: 'OurProductsContainer',
  methods: {
    goToProducts() {
      // Use router.push to navigate to the Products component
      this.$router.push('/products');
    },
  },
};
</script>

<style >
/* Add any scoped styles here if needed */
</style>
