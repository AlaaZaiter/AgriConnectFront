<template>
    <div>
      <form @submit.prevent="submitPayment">
        <h2>Payment Details</h2>
        
        <div class="form-group">
          <label for="cardName">Name on Card</label>
          <input type="text" id="cardName" v-model="cardDetails.cardName" required>
        </div>
  
        <div class="form-group">
          <label for="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" v-model="cardDetails.cardNumber" required>
        </div>
  
        <div class="form-group">
          <label for="expiryDate">Expiry Date</label>
          <input type="month" id="expiryDate" v-model="cardDetails.expiryDate" required>
        </div>
  
        <div class="form-group">
          <label for="cvv">CVV</label>
          <input type="number" id="cvv" v-model="cardDetails.cvv" required>
        </div>
  
        <button type="submit" class="pay-button">Pay</button>
      </form>
    </div>
  </template>
  
  <script>
  // eslint-disable-next-line no-unused-vars
  import axios from 'axios';
  import { Stripe } from 'stripe';
  
  export default {
    data() {
      return {
        cardDetails: {
          cardName: '',
          cardNumber: '',
          expiryDate: '',
          cvv: '',
          cardElement: null

        },
      };
    },
    methods: {
        generateCardElement() {
        const stripe = Stripe('pk_test_51OOLiDGhkBd0eFQipZbm4Nnrooer7NB24xlC3Qwigrbpdc8oGrUibLdMIEBTfshmc7ch9PtX27mewEP1i9p0bJfj00aD2eeCpE');
        const elements = stripe.elements(); // Corrected to lowercase
        const cardElement = elements.create('card', {});
        cardElement.mount('#card-element');
},
      async submitPayment() {
        try {
          const { OrderID, amount, PaymentStatus, PaymentMethod } = this.$route.params;
  
          // Generate a token using Stripe.js (replace 'your-public-key' with your actual public key)
          const stripe = Stripe('pk_test_51OOLiDGhkBd0eFQipZbm4Nnrooer7NB24xlC3Qwigrbpdc8oGrUibLdMIEBTfshmc7ch9PtX27mewEP1i9p0bJfj00aD2eeCpE');
          const elements = stripe.elements();
          const cardElement = elements.create('card');
          const { token } = await stripe.createToken(cardElement);
  
          // Make a request to your backend API with the generated token
          const response = await axios.post('http://localhost:6001/payment/pay', {
            OrderID,
            amount,
            PaymentStatus,
            PaymentMethod,
            token: token.id,
          });
  
          // Use the response as needed
          console.log(response.data);
        } catch (error) {
          console.error(error);
          // Handle errors or show an error message to the user
        }
      },
    },
  };
  </script>
  
  <style>
  /* Your styles here */
  </style>
  