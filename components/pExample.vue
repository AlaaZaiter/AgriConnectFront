<template>
  <div >
    <form @submit.prevent="submitPayment">
      <h2>Payment Details</h2>

      <!-- Additional input fields as necessary (e.g., amount, order ID) -->
      <div class="form-group">
        <label for="amount">Amount</label>
        <input type="number" id="amount" v-model="amount" required>
      </div>

      <!-- Stripe's Card Element for secure card details entry -->
      <div id="card-element" class="form-group"></div>

      <button type="submit" class="pay-button">Pay</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

export default {
  data() {
    return {
      stripe: null,
      cardElement: null,
      amount: null, // Example additional field
    };
  },
  async mounted() {
    await this.initializeStripe();
  },
  methods: {
    async initializeStripe() {
      const stripePublicKey = 'pk_test_51OZd1WJFhc9UZk7ff69YNdGJxL8MpHQV8JpWxvt4oTRcr0QFf5UID1tUOg1KecBbimVMz0VeUXMp9VkXvrGCpNp9000z0xV4IH'; // Your Stripe public key
      this.stripe = await loadStripe(stripePublicKey);
      const elements = this.stripe.elements();
      this.cardElement = elements.create('card');
      this.cardElement.mount('#card-element');
    },
    async submitPayment() {
      try {
        // Example: Retrieve additional data like amount
        const {  PaymentStatus } = this.$route.params;
        const OrderID = 81;
        const PaymentMethod ='credit card'

        // Create a token using Stripe's Card Element
        const { token, error } = await this.stripe.createToken(this.cardElement);

        if (error) {
          console.error(error);
          return; // Handle the error
        }

        // Make a request to your backend API with the token and additional data
        const response = await axios.post('http://localhost:6001/payment/pay', {
          OrderID,
          amount: this.amount, // Use the amount from the data model
          PaymentStatus,
          PaymentMethod,
          stripeToken: token.id,
        });

        // Handle the response
        console.log(response.data);
      } catch (error) {
        console.error(error);
        // Handle errors
      }
    },
  },
};
</script>

<style>
/* Your styles here */
</style>
