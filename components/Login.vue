<template>
  <div class="Login">
    <div class="LoginContainer" :class="{ 'right-panel-active': activePanel === 'sign-up' }">
      <div class="form-container sign-in-container" v-show="activePanel === 'sign-in'">
        <form class="logInForm" @submit.prevent="handleLogin">
          <h1 class="h1login">Sign in</h1>
          <input class="inputlogin" type="email" placeholder="Email" v-model="emailLogin" />
          <input class="inputlogin" type="password" placeholder="Password" v-model="passwordLogin" />
          <p>{{ message }}</p>
          <button class="Sign" type="submit">Sign In</button>
        </form>
      </div>
      <div class="form-container sign-up-container" v-show="activePanel === 'sign-up'">
        <form class="logInForm" @submit.prevent="handleSignUp">
          <h1 class="h1login">Create Account</h1>
          <input class="inputlogin" type="text" placeholder="Name" v-model="name" />
          <input class="inputlogin" type="number" placeholder="Phone Number" v-model="phone" />
          <input class="inputlogin" type="email" placeholder="Email" v-model="email" />
          <input class="inputlogin" type="password" placeholder="Password" v-model="password" />
          <br />
          <p>{{ message }}</p>
          <button class="Sign" type="submit">Sign Up</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1 class="h1login">Welcome Back!</h1>
            <p class="plogin">To stay connected with us, please login with your personal info</p>
            <button class="ghost Sign" @click="handleSignInClick">Sign In</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1 class="h1login">Hello, Friend!</h1>
            <p class="plogin">Enter your info and start your farming journey!</p>
            <button class="ghost Sign" @click="handleSignUpClick">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../CSS/Login.css';
import axios from 'axios';



export default {
  name: 'LoginApp',
  components: {
  },
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      password: '',
      message: '',
      emailLogin:'',
      passwordLogin:'',
      activePanel: 'sign-in',
      error: null,
    };
  },
  methods: {
    async handleLogin() {
    try {
      const response = await axios.post('http://localhost:6001/user/login', {
        email: this.emailLogin,
        password: this.passwordLogin,
      });
      console.log('User logged in successfully: ', response.data.data);
      const token = response.data.token;
      if (token) {
        sessionStorage.setItem("authToken", token);
        this.$router.push('/');
      } else {
        console.error('Token not found in response');
      }
    } catch (error) {
      console.log(error);
    }
  },
    async handleSignUp() {
      try {

        const response = await axios.post('http://localhost:6001/user/register',{
          FullName: this.name,
          email: this.email,
          phoneNumber: this.phone,
          password: this.password,
        })

        console.log('User added successfully:', response.data);
        console.log('API response:', response.data);
        const token = response.data.data.token;

    if (token) {
        sessionStorage.setItem("authToken", token);
        this.$router.push('/');
      } else {
        console.error('Token not found in response');
      }
      
        

      } catch (error) {
        console.log(error)
      }
    },
    handleSignInClick() {
      this.activePanel = 'sign-in';
    },
    handleSignUpClick() {
      this.activePanel = 'sign-up';
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
