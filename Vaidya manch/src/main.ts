import { createApp } from 'vue';
import './assets/styles/style.css';
import App from './App.vue';
import router from './router';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import CoreUI CSS (if you're using it)
import '@coreui/coreui/dist/css/coreui.min.css';

createApp(App).use(router).mount('#app');
