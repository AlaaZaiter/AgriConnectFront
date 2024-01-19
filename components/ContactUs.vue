<template>
  <div id="contactContainer">
      <p class="ContactTitle">Contact Us</p>
    <div class="contact-container">
      <div class="inside-contact-container">
        <div class="message-form" action="">
          <p class="SubContctTitle">Send A Message</p>
          <div class="text">
            <input
              type="text"
              class="name contact-inp"
              placeholder="Your Name"
              v-model="name"
            />
            <input
              type="text"
              class="email contact-inp"
              placeholder="Your Email"
              v-model="email"
            />
            <textarea
              class="message-box contact-inp"
              placeholder="Message"
              v-model="message"
            ></textarea>
            <br />
            <button class="contact-button" @click="handleAddEmail">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div class="inside-contact-container">
        <div class="get-in-touch-message">
          <p class="SubContctTitle">Get in Touch</p>
          <div class="text">
            <p class="in-touch-message">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam
              magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis
              mollitia inventore?
            </p>

            <div class="info-container">
              <div class="info">
                <img src="../images/Location.png" class="svgs" />
                <p class="get-in-info"> Beirut, Lebanon </p>
              </div>

              <div class="info">
                <img src="../images/Email.png" class="svgs" />
                <a href="mailto:zaiteralaa29@gmail.com" >
zaiteralaa29@gmail.com                </a>
              </div>

              
              <div class="info">
                <img src="../images/Call.png" class="svgs" />
                <p class="get-in-info"> +961 71 729 503</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../CSS/ContactUs.css'
export default {
  data() {
    return {
      name: '',
      
    };
  },
  methods: {
    async handleAddEmail() {
      const emailBody = { name: this.name, email: this.email, message: this.message };
      console.log(emailBody);
      try {
        const response = await fetch("http://localhost:5000/emails/addEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailBody),
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          window.alert("Message sent successfully!");
        } else {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        console.error("Error:", error);
        window.alert("Error sending message. Please try again later.");
      }
    },
  },
};
</script>

<style scoped>
/* Include the relevant styles from your CSS here */
</style>
