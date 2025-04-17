<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <nav :class="[
      'fixed top-0 w-full px-7 py-4 flex items-center justify-between z-10 transition-all duration-300',
      isScrolled ? 'bg-surface-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    ]">
    <!-- Logo Section -->
    <div class="flex items-center">
      <router-link class="flex items-center group" to="/">
        <div class="relative overflow-hidden rounded-full border-2 border-primary-400 p-0.5">
          <img src="../assets/profile.jpg" alt="logo" class="h-10 w-10 rounded-full transition-transform duration-500 group-hover:scale-110" />
        </div>
        <h1 class="text-xl font-bold ml-2 bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
          KenPrz<span class="text-primary-400">.</span>
        </h1>
      </router-link>
    </div>

    <!-- Desktop Navigation -->
    <div class="hidden md:flex space-x-10">
      <router-link
        v-for="(item, index) in ['Home', 'About', 'Projects', 'Contact']"
        :key="index"
        :to="item === 'Home' ? '/' : `/${item.toLowerCase()}`"
        class="relative text-md font-medium overflow-hidden group"
        :class="{ 'text-primary-400': $route.path === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) }">
        <span class="inline-block transition-transform duration-300 group-hover:-translate-y-full">
          {{ item === 'Contact' ? 'Say Hi!' : item }}
        </span>
        <span class="absolute left-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-primary-400">
          {{ item === 'Contact' ? 'Say Hi!' : item }}
        </span>
        <span class="absolute bottom-0 left-0 h-0.5 w-0 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
      </router-link>
    </div>

    <!-- Mobile Menu Button -->
    <button @click="toggleMobileMenu" class="md:hidden text-white focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" :class="{ 'hidden': isMobileMenuOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" :class="{ 'hidden': !isMobileMenuOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </nav>

  <!-- Mobile Menu -->
  <div v-if="isMobileMenuOpen" class="fixed top-16 left-0 w-full bg-surface-900/95 backdrop-blur-md shadow-lg z-10 md:hidden transform transition-transform duration-300 ease-in-out">
    <div class="flex flex-col items-center py-4 space-y-4">
      <router-link
        v-for="(item, index) in ['Home', 'About', 'Projects', 'Contact']"
        :key="index"
        :to="item === 'Home' ? '/' : `/${item.toLowerCase()}`"
        @click="isMobileMenuOpen = false"
        class="w-full text-center py-3 text-md font-medium hover:bg-surface-800 transition-colors duration-200"
        :class="{ 'text-primary-400': $route.path === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) }">
        {{ item === 'Contact' ? 'Say Hi!' : item }}
      </router-link>
    </div>
  </div>
</template>