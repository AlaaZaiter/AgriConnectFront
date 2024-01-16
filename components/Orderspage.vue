<template>
  <div>
    <AppHeader/>
    <div class="TableContainer">
      <table class="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Date</th>
            <th>Products</th>
            <th>Pay</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{order.id}}</td>
            <td>{{ order.TotalAmount }}</td>
            <td>{{order.orderStatus}}</td>
            <td>{{ order.created_at }}</td>
            <td>
              <button class="SeeProductsBTN" @click="openProductsModal(order.id)">See your products</button>
              <!-- Products Modal -->
              <div v-if="isProductsModalOpen" class="modal">
                <div class="modalContent">
                  <button @click.stop="closeProductsModal"><img src='../images/close.png' class="closeButton"/></button>
                  <!-- Your modal content goes here -->
                  <div class="ProductsContainer" v-for="product in this.products" :key="product.id">
                    
                    <ul>
                      <li>
                       <div class="EachProduct">
                       <img :src="product.image" alt="logo Image" class="ProductImg"/>
                       <div class="ProductTextInfo">
                       <p class="productTitle">{{ product.Title }}</p>
                       <p>{{ product.description }}</p>
                       <p class="productTitle">{{ product.price }} $</p>
                       
                       </div>
                       </div>
                      </li>

                    </ul>
                  </div>
                  <p class="TotalAmountP">Total:360$</p>

                </div>
              </div>
            </td>
            <td><button class="CheckPaidBTN">Check if paid</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <Footer/>
  </div>
</template>

<script>
import AppHeader from './Header.vue'
import Footer from './Footer.vue'
import '../CSS/OrdersPage.css'
import '../CSS/OurProducts.css'
import axios from 'axios'
import { getUserID } from "../Util/Userdata.js";


export default {
  name: 'OrdersPage',
  components: {
    AppHeader,
    Footer,
  },
  data() {
    return {
      isProductsModalOpen: false,
      orders:[],
      products:[],
      userId:null,
    };
  },
  async created() {
    this.userId = await getUserID();
console.log(this.userId)
    this.fetchOrders();

  },
  methods: {
    
    closeProductsModal() {
      this.isProductsModalOpen = false;
    },
    async fetchOrders(){
      const api = 'http://localhost:6001/orderProducst/getOrderByUserID/' +this.userId;
     try {
      const response = await axios.get(api)
      this.orders = response.data.data;     
    } catch (error) {
      console.error('Error fetching comments:', error);
     }
    },
    async fetchProducts(OrderId){
      const api = 'http://localhost:6001/orderProducst/getByOrderID/' +OrderId;
     try {
      const response = await axios.get(api)
      this.products = response.data.data;     
    } catch (error) {
      console.error('Error fetching comments:', error);
     }
    },
    openProductsModal(orderId) {
      this.isProductsModalOpen = true;
      this.fetchProducts(orderId)
    },
  },
};
</script>

<style scoped>
/* Add your specific table styling here if needed */
.ProductsContainer{
  box-shadow: 0 4px 8px ; /* Box shadow */
  margin: 10px;
  border-radius: 10px;

}
.orders-table {
  width: 80%;
  border-collapse: collapse;
  margin: 20px;
  align-self:center;
}
.TableContainer{
    display:flex;
    justify-content:center;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
    background-color:#355E3B;
    color:white;
    font-family:Arial, Helvetica, sans-serif;
}
.CheckPaidBTN, .SeeProductsBTN {
    width:90%;
    height:30px;
    background-color:#355E3B;
    color:white;
    border:none;
    border-radius:40px;
}
.closeButton {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
  background: none;
  border: none;
  cursor: pointer;
  color: #000; 
  width:50px;
  height:50px;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.productTitle{
  font-size: large;
  font-weight: bold;
  
}

.modalContent {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
ul{
        list-style-type: none;

}
.ProductImg{
    width: 30%;
    border-radius: 10px;
    margin: 5px;
    }
.EachProduct{
    display:flex;
    flex-direction:row;
    
}
.TotalAmountP{
    text-align:center;
    font-size: larger;
    font-weight: bold;
    color: #000;
}
.ProductTextInfo{
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  padding: 15px;
}
.ProductTextInfo p{
  color: #000;
}
</style>
