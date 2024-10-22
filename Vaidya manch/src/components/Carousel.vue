<template>
    <div class="relative w-full max-w-lg mx-auto">
      <div class="overflow-hidden rounded-lg">
        <div class="carousel-inner transition-transform duration-500" :style="`transform: translateX(-${currentIndex * 100}%)`">
          <div class="carousel-item" v-for="(image, index) in images" :key="index" :class="{ 'opacity-100': currentIndex === index, 'opacity-0': currentIndex !== index }">
            <img :src="image" alt="Image" class="w-full transition-opacity duration-500" />
          </div>
        </div>
      </div>
  
      <button class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2" @click="prevSlide">
        <span class="material-icons">chevron_left</span>
      </button>
      <button class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2" @click="nextSlide">
        <span class="material-icons">chevron_right</span>
      </button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Carousel',
    data() {
      return {
        currentIndex: 0,
        images: [
          'https://img.freepik.com/free-psd/optometrist-template-design_23-2150851853.jpg?w=996&t=st=1729614255~exp=1729614855~hmac=1fa6147351608e885e7423cdeabb26b9bb0b9e3d2bcd684b613c6409e4f12dbb',
          'https://img.freepik.com/free-psd/optometrist-template-design_23-2150851853.jpg?w=996&t=st=1729614255~exp=1729614855~hmac=1fa6147351608e885e7423cdeabb26b9bb0b9e3d2bcd684b613c6409e4f12dbb',
          'https://img.freepik.com/free-psd/optometrist-template-design_23-2150851853.jpg?w=996&t=st=1729614255~exp=1729614855~hmac=1fa6147351608e885e7423cdeabb26b9bb0b9e3d2bcd684b613c6409e4f12dbb',
        ],
      };
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
    },
  });
  </script>
  
  <style scoped>
  .carousel-item {
    transition: opacity 0.5s ease-in-out;
  }
  </style>
  