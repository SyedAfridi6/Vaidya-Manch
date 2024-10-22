<template>
    <div class="contact-page">
      <h1>Contact Us</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea id="message" v-model="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div v-if="submitted" class="success-message">
        Your message has been sent! We will get back to you shortly.
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const name = ref('');
  const email = ref('');
  const message = ref('');
  const submitted = ref(false);
  
  const handleSubmit = () => {
    // Here you can add logic to send the form data to a server or an email service
    console.log('Name:', name.value);
    console.log('Email:', email.value);
    console.log('Message:', message.value);
    submitted.value = true;
  
    // Clear the form
    name.value = '';
    email.value = '';
    message.value = '';
  };
  </script>
  
  <style scoped>
  .contact-page {
    padding: 20px;
    background-color: #f9f9f9;
  }
  .contact-page form {
    display: flex;
    flex-direction: column;
  }
  .contact-page div {
    margin-bottom: 15px;
  }
  .success-message {
    margin-top: 20px;
    color: green;
  }
  </style>
  