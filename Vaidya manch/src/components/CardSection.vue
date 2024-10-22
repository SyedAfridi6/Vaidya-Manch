<template>
  <div class="card-container">
    <div class="card" @click="handleClick('physical-activity')">
      <h3>Physical Activity</h3>
      <p>
        Praesent porttitor, nulla vitae posuere iaculis, arcu nisi dignissim
        dolor, a pretium mi sem ut ipsum.
      </p>
      <div class="plus-icon">+</div>
      <div class="overlay"></div>
    </div>

    <div class="card" @click="handleClick('mental-wellness')">
      <h3>Mental Wellness</h3>
      <p>
        Praesent porttitor, nulla vitae posuere iaculis, arcu nisi dignissim
        dolor, a pretium mi sem ut ipsum.
      </p>
      <div class="plus-icon">+</div>
      <div class="overlay"></div>
    </div>

    <div class="card" @click="handleClick('nutrition')">
      <h3>Nutrition</h3>
      <p>
        Praesent porttitor, nulla vitae posuere iaculis, arcu nisi dignissim
        dolor, a pretium mi sem ut ipsum.
      </p>
      <div class="plus-icon">+</div>
      <div class="overlay"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardSection',
  methods: {
    handleClick(section) {
      console.log(`Navigating to ${section}`);
    },
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  gap: 100px;
  justify-content: center;
  flex-wrap: wrap; /* Allows wrapping to new lines on smaller screens */
  padding: 60px 30px;
}

.card {
  position: relative;
  background: linear-gradient(135deg, #4caf50, #66bb6a);
  width: 400px;
  height: 300px;
  padding: 30px 20px;
  border-radius: 20px;
  text-align: center;
  color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.card h3 {
  margin: 20px 0;
  font-size: 22px;
}

.card p {
  font-size: 16px;
}

.plus-icon {
  position: absolute;
  bottom: 30px;
  left: calc(50% - 20px);
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #4caf50;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.plus-icon:hover {
  background-color: rgba(255, 255, 255, 1);
}

.card .overlay {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  transition: left 0.3s ease-in-out;
}

.card:hover .overlay {
  left: 0;
}

/* Media Query for Responsive Design */
@media (max-width: 768px) {
  .card-container {
    flex-direction: column; /* Stack cards vertically */
    align-items: center;
  }

  .card {
    width: 100%; /* Make the cards take full width on small screens */
  }
}
</style>
