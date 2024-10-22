<template>
    <div class="card-slider">
      <div class="card-container" :style="sliderStyle" ref="slider">
        <!-- All cards -->
        <div class="card" v-for="(doctor, index) in visibleDoctors" :key="index">
          <img class="card-img" :src="doctor.image" :alt="doctor.name" />
          <div class="card-content">
            <h5 class="card-title">{{ doctor.name }}</h5>
            <p class="card-description">{{ doctor.description }}</p>
          </div>
          <ul class="card-details">
            <li>Specialization: {{ doctor.specialization }}</li>
            <li>Experience: {{ doctor.experience }} years</li>
            <li>Location: {{ doctor.location }}</li>
          </ul>
          <div class="card-footer">
            <a href="#" class="card-link">Profile</a>
            <a href="#" class="card-link">Book Appointment</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Doctors',
    data() {
      return {
        doctors: [
          {
            name: 'Doctor 1',
            specialization: 'Cardiology',
            experience: 10,
            location: 'New York',
            description: 'Brief information about Doctor 1.',
            image: 'https://via.placeholder.com/150', // Replace with actual image link
          },
          {
            name: 'Doctor 2',
            specialization: 'Dermatology',
            experience: 8,
            location: 'Los Angeles',
            description: 'Brief information about Doctor 2.',
            image: 'https://via.placeholder.com/150', // Replace with actual image link
          },
          {
            name: 'Doctor 3',
            specialization: 'Neurology',
            experience: 12,
            location: 'San Francisco',
            description: 'Brief information about Doctor 3.',
            image: 'https://via.placeholder.com/150', // Replace with actual image link
          },
          {
            name: 'Doctor 4',
            specialization: 'Orthopedics',
            experience: 7,
            location: 'Chicago',
            description: 'Brief information about Doctor 4.',
            image: 'https://via.placeholder.com/150', // Replace with actual image link
          },
          {
            name: 'Doctor 5',
            specialization: 'Pediatrics',
            experience: 5,
            location: 'Miami',
            description: 'Brief information about Doctor 5.',
            image: 'https://via.placeholder.com/150', // Replace with actual image link
          },
          {
            name: 'Doctor 6',
            specialization: 'General Medicine',
            experience: 15,
            location: 'Seattle',
            description: 'Brief information about Doctor 6.',
            image: 'https://via.placeholder.com/150', // Replace with actual image link
          },
          {
            name: 'Doctor 7',
            specialization: 'Endocrinology',
            experience: 9,
            location: 'Boston',
            description: 'Brief information about Doctor 7.',
            image: 'https://via.placeholder.com/150', // Replace with actual image link
          },
          {
            name: 'Doctor 8',
            specialization: 'Gastroenterology',
            experience: 11,
            location: 'Houston',
            description: 'Brief information about Doctor 8.',
            image: 'https://via.placeholder.com/150', // Replace with actual image link
          },
        ],
        offset: 0,
        speed: 0.5, // Speed of the conveyor belt
        visibleCardsCount: 4, // Default number of visible cards
      };
    },
    computed: {
      sliderStyle() {
        return {
          transform: `translateX(-${this.offset}px)`,
          transition: 'transform 0s', // No transition to create the continuous effect
          display: 'flex',
        };
      },
      visibleDoctors() {
        return this.doctors.slice(0, this.visibleCardsCount);
      },
    },
    mounted() {
      this.startConveyorBelt();
      window.addEventListener('resize', this.updateVisibleCardsCount);
      this.updateVisibleCardsCount();
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.updateVisibleCardsCount);
    },
    methods: {
      startConveyorBelt() {
        const cardWidth = this.$refs.slider.offsetWidth / this.visibleCardsCount; // Get width for visible cards
        const totalWidth = this.doctors.length * cardWidth;
  
        setInterval(() => {
          this.offset += this.speed;
          if (this.offset >= totalWidth) {
            this.offset = 0; // Reset offset when end is reached
          }
        }, 1000 / 60); // ~60 frames per second
      },
      updateVisibleCardsCount() {
        const width = window.innerWidth;
        if (width < 600) {
          this.visibleCardsCount = 1; // 1 card visible on small screens
        } else if (width < 900) {
          this.visibleCardsCount = 2; // 2 cards visible on medium screens
        } else {
          this.visibleCardsCount = 4; // 4 cards visible on larger screens
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .card-slider {
    overflow: hidden; /* Hide overflow to create a sliding effect */
    width: 100%; /* Full width for the slider */
  }
  
  .card-container {
    display: flex;
    white-space: nowrap; /* Prevent wrapping */
    gap: 60px;
    padding: 40px;
  }
  
  .card {
    min-width: 25%; /* Four cards visible by default */
    box-sizing: border-box; /* Include padding/border in width */
    padding: 10px; /* Padding around each card */
  }
  
  .card-img {
    width: 100%;
    height: auto; /* Maintain aspect ratio */
  }
  
  .card-content {
    padding: 16px;
  }
  
  .card-title {
    font-weight: bold;
    font-size: 1.25rem;
    margin-bottom: 8px;
  }
  
  .card-description {
    color: gray;
  }
  
  .card-details {
    list-style-type: none;
    border-top: 1px solid #e5e7eb;
    padding: 0;
    margin: 0;
  }
  
  .card-details li {
    padding: 8px 16px;
  }
  
  .card-footer {
    display: flex;
    justify-content: space-between;
    padding: 16px;
  }
  
  .card-link {
    color: indigo;
    text-decoration: none;
  }
  
  .card-link:hover {
    text-decoration: underline;
  }
  </style>
  