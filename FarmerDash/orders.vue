<template>
  <div>
    <table class="posts-table">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Total Amount</th>
          <th>Status</th>
          <th>Date</th>
          <th>Approving</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in orders" :key="index">
          <td>{{ order.id }}</td>
          <td>{{ order.TotalAmount }}</td>
          <td>{{ order.orderStatus }}</td>
          <td>{{ order.created_at }}</td>
          <td>
            <button @click="approveOrder(order.Orderid)" class="ApproveButton">Approve</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ordersDash',
  data() {
    return {
      orders: [],
    };
  },
  mounted() {
    this.fetchOrders();
  },
  async created(){
await this.fetchOrders()
  },
  methods: {
    fetchOrders() {
      const apiUrl = 'http://localhost:6001/order/getAll';

      axios.get(apiUrl)
        .then(response => {
          console.log('Orders fetched:', response.data.data); // Add this line
      this.orders = response.data.data;
        })
        .catch(error => {
          console.error('Error fetching orders:', error);
        });
    },
    approveOrder(orderId) {
      const apiUrl = 'http://localhost:6001/order/updateStatus/'+orderId;
      console.log('Approving order:', orderId);
      axios.put(apiUrl , {
        orderStatus: "completed",
        })
        .then(response => {
         console.log(response)
          this.fetchOrders();
          
        })
        .catch(error => {
          console.error('Error fetching orders:', error);
        });
    },
    
  },
};
</script>

<style scoped>
.ApproveButton{
background-color: #355E3B;
color: white;
width: 70%;
height: 50%;
}
</style>
