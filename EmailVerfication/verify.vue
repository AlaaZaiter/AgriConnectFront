<template>
  <div>
    <h1>Email Verification</h1>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'VerifyPage',
  data() {
    return {
      message: ''
    };
  },
  async mounted() {
    try {
      const token = this.$route.query.token;
      console.log(token)
      if (!token) {
        this.message = 'No verification token found.';
        return;
      }

      const response = await axios.put('http://localhost:6001/user/verify', { token });
      this.message = response.data.message;
    } catch (error) {
      this.message = 'Error verifying email: ' + error.message;
    }
  }
};
</script>
