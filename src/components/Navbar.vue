<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <!-- Desktop + Mobile Nav -->
  <nav :class="[
      'fixed top-0 w-full px-6 md:px-10 py-4 flex items-center justify-between z-[100] transition-all duration-500',
      isScrolled 
        ? 'bg-dark-950/80 backdrop-blur-xl' 
        : 'bg-transparent'
    ]">
    <!-- Logo -->
    <router-link to="/" class="flex items-center gap-2 group" @click="closeMobileMenu">
      <span class="text-xl font-bold font-mono text-white group-hover:text-accent transition-colors duration-300">
        K<span class="text-accent">.</span>
      </span>
    </router-link>

    <!-- Desktop Links -->
    <div class="hidden md:flex items-center gap-8">
      <router-link
        v-for="item in ['Home', 'About', 'Projects', 'Contact']"
        :key="item"
        :to="item === 'Home' ? '/' : `/${item.toLowerCase()}`"
        class="text-sm font-mono text-dark-300 hover:text-accent transition-colors duration-300 link-underline relative"
        active-class="!text-accent"
        :class="{ '!text-accent': $route.path === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) }">
        {{ item }}
      </router-link>
      
      <a href="/cv.pdf" download="Ken Perez CV" target="_blank"
         class="btn-neon btn-neon-outline text-xs py-2 px-4">
        Resume ↓
      </a>
    </div>

    <!-- Mobile Menu Button -->
    <button @click="toggleMobileMenu" class="md:hidden text-dark-200 hover:text-accent transition-colors duration-300 p-1">
      <!-- Hamburger / Close -->
      <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <line x1="6" y1="6" x2="18" y2="18" />
        <line x1="6" y1="18" x2="18" y2="6" />
      </svg>
    </button>
  </nav>

  <!-- Mobile Menu -->
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 -translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-4"
  >
    <div v-if="isMobileMenuOpen" class="fixed top-[56px] inset-x-0 bg-dark-950/95 backdrop-blur-xl border-b border-dark-700/50 z-[99] md:hidden">
      <div class="flex flex-col items-center py-6 gap-4">
        <router-link
          v-for="item in ['Home', 'About', 'Projects', 'Contact']"
          :key="item"
          :to="item === 'Home' ? '/' : `/${item.toLowerCase()}`"
          @click="closeMobileMenu"
          class="text-base font-mono text-dark-300 hover:text-accent transition-colors duration-300 py-2"
          :class="{ '!text-accent': $route.path === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) }">
          {{ item }}
        </router-link>
        <a href="/cv.pdf" download="Ken Perez CV" target="_blank"
           class="btn-neon btn-neon-outline text-sm py-2 px-6 mt-2">
          Resume ↓
        </a>
      </div>
    </div>
  </Transition>
</template>