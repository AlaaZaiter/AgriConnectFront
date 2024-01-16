<template>
  <div id="CategoryContainer">
  <p class="CategoryTitle"> Browse By Category</p>
  <div class="categoriesContainer">
  <div class = "SubCategoryContainer" v-for="category in Categories" :key="category.id">
  <div>
    <img :src="category.image" alt="logo Image" class="CatgoryImg"/>
    <p class ="CategoryName">{{category.Title}}</p>
  </div>
   </div>
  </div>
  <div class="RightAndLeft">
    <img src='../images/previous.png' alt="logo Image" class="Arrow"/>
    <img src='../images/next.png' alt="logo Image" class="Arrow"/>
  </div>
</div>
</template>

<script>
import '../CSS/Category.css'
import { getUserID } from "../Util/Userdata.js"; 
import axios from 'axios';
export default {
  name: 'CategoryContainerr',
  data(){
    return {
      
      Categories: [],
      userId: null, // hardcoded value
    };
  },
  async created() {
    this.userId = await getUserID();
    this.fetchCategories();
  },
  methods: {
async fetchCategories(){
  try {
    const response = await axios.get('http://localhost:6001/category/getAll');
    this.Categories=response.data.data;
  } catch (error) {
    console.log(error)
  }

}
  },
};
</script>

<style >
/* Add any scoped styles here if needed */
</style>
