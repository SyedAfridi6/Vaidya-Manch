<script setup>
import { ref, computed, onMounted } from 'vue';
import { CNavbarNav, CCollapse, CContainer, CNavbar, CButton } from '@coreui/vue';
import { CNavbarBrand, CNavItem } from '@coreui/vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const visible = ref(false);
const menuVisible = ref(false);
const user = ref(null);

const userInitial = computed(() => {
  return user.value ? user.value.username.charAt(0).toUpperCase() : '';
});

const logout = () => {
  sessionStorage.removeItem('user');
  user.value = null;
};

const login = (userData) => {
  sessionStorage.setItem('user', JSON.stringify(userData));
  user.value = userData;
};

onMounted(() => {
  const storedUser = sessionStorage.getItem('user');
  if (storedUser) {
    user.value = JSON.parse(storedUser);
  }
});
</script>

<template>
  <CNavbar expand="lg" color-scheme="light" class="bg-light">
    <CContainer fluid class="flex justify-between items-center">
      <CNavbarBrand href="#" class="ml-5">Logo</CNavbarBrand>
      <FontAwesomeIcon :icon="faBars" class="cursor-pointer text-xl lg:hidden" @click="visible = !visible" />
      <CCollapse class="navbar-collapse lg:flex justify-center mx-auto text-center" :class="{ hidden: !visible }" :visible="visible">
        <CNavbarNav class="flex space-x-4">
          <CNavItem>
            <router-link to="/" class="nav-link" active-class="active">Home</router-link>
          </CNavItem>
          <CNavItem>
            <router-link to="/about" class="nav-link" active-class="active">About</router-link>
          </CNavItem>
          <CNavItem>
            <router-link to="/services" class="nav-link" active-class="active">Services</router-link>
          </CNavItem>
          <CNavItem>
            <router-link to="/contact" class="nav-link" active-class="active">Contact</router-link>
          </CNavItem>
        </CNavbarNav>
      </CCollapse>
      <div class="flex items-center relative ml-auto mr-5">
        <template v-if="user">
          <div class="flex items-center">
            <div 
              class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-2 cursor-pointer"
              @click="menuVisible = !menuVisible"
            >
              {{ userInitial }}
            </div>
            <div v-if="menuVisible" class="absolute right-0 mt-40 bg-white shadow-lg rounded-lg p-2">
              <router-link to="/profile" class="block text-black mb-2">Profile</router-link>
              <router-link to="/logout" class="block text-black mb-2">Logout</router-link>
            </div>
          </div>
        </template>
        <template v-else>
          <router-link to="/login" class="nav-link" active-class="active">
            <CButton color="success" variant="outline">Login</CButton>
          </router-link>
        </template>
      </div>
    </CContainer>
  </CNavbar>
</template>
