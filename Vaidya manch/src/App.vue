<template>
  <div>
    <Navbar />
    <router-view />
    <CardSection /> <!-- Add the CardSection component here -->
    <Carousel /> <!-- Add the Carousel component here -->
    <Doctors /> <!-- Add the Doctors component here -->
  </div>
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue';
import CardSection from './components/CardSection.vue'; // Import the CardSection component
import Carousel from './components/Carousel.vue'; // Import the Carousel component
import Doctors from './components/Doctors.vue'; // Import the Doctors component

export default {
  name: 'App',
  components: {
    Navbar,
    CardSection, // Register the CardSection component
    Carousel, // Register the Carousel component
    Doctors, // Register the Doctors component
  },
};
</script>

<style>
/* Add global styles if needed */
</style>
