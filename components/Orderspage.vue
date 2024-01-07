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
          <tr>
            <td>1</td>
            <td>Product A</td>
            <td>3</td>
            <td>$30.00</td>
            <td>
              <button class="SeeProductsBTN" @click="openProductsModal">See your products</button>
              <!-- Products Modal -->
              <div v-if="isProductsModalOpen" class="modal">
                <div class="modalContent">
                  <button @click.stop="closeProductsModal"><img src='../images/close.svg' class="closeButton"/></button>
                  <!-- Your modal content goes here -->
                  <div class="ProductsContainer">
                    
                    <ul>
                      <li>
                       <div class="EachProduct">
                       <img src='../images/agriculturalTool.png' alt="logo Image" class="ProductImg"/>
                       <div>
                       <p>item name</p>
                       <p>item name: description about item</p>
                       <p>Price</p>
                       </div>
                       </div>
                      </li>

                    </ul>
                    <p class="TotalAmountP">Total:360$</p>
                  </div>
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

export default {
  name: 'OrdersPage',
  components: {
    AppHeader,
    Footer,
  },
  data() {
    return {
      isProductsModalOpen: false,
    };
  },
  methods: {
    openProductsModal() {
      this.isProductsModalOpen = true;
    },
    closeProductsModal() {
      this.isProductsModalOpen = false;
    },
  },
};
</script>

<style scoped>
/* Add your specific table styling here if needed */

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
    width: 100%;
    height: 150px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;    
    }
.EachProduct{
    display:flex;
    flex-direction:row;
}
.TotalAmountP{
    text-align:center;
}
</style>
