<template>
  <div class="home-container">
    <header class="home-header">
      <h1>
        Welcome to <span class="animated-span">Vaidya Manch</span>
      </h1>
      <p>Your one-stop solution for amazing Health Care.</p>
    </header>
    <main class="home-main">
      <section class="intro">
        <h2>Explore Our Features</h2>
        <p>Discover a world of possibilities with our services.</p>
        <button class="cta-button">Get Started</button>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
});
</script>

<style scoped>
@import '../assets/styles/HomePage.css';

.animated-span {
  display: inline-block;
  color: #007bff; /* Change to your preferred color */
  opacity: 0;
  transform: translateY(-20px);
  animation: fadeInUp 0.8s forwards; /* Animation name and duration */
  animation-delay: 0.8s; /* Delay before the animation starts */
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
