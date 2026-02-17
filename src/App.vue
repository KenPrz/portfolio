<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import NavBar from './components/Navbar.vue';

const scrollProgress = ref(0);

const updateScrollProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
};

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollProgress);
});
</script>

<template>
  <div class="text-dark-100 font-inter min-h-screen relative">
    <!-- Noise Overlay -->
    <div class="noise-overlay"></div>
    <!-- Grid Background -->
    <div class="fixed inset-0 grid-bg pointer-events-none"></div>

    <!-- Scroll Progress Bar -->
    <div class="scroll-progress" :style="{ width: scrollProgress + '%' }"></div>

    <!-- Navigation -->
    <NavBar />

    <!-- Main Content -->
    <router-view />

    <!-- Footer -->
    <footer class="border-t border-dark-700 py-8 px-6">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-dark-400 text-sm font-mono">
          &copy; {{ new Date().getFullYear() }} Ken Perez
        </p>
        <div class="flex items-center gap-6">
          <a href="https://github.com/kenprz" target="_blank" class="text-dark-400 hover:text-accent transition-colors duration-300 link-underline text-sm font-mono">GitHub</a>
          <a href="https://www.linkedin.com/in/ken-daryl-perez/" target="_blank" class="text-dark-400 hover:text-accent transition-colors duration-300 link-underline text-sm font-mono">LinkedIn</a>
          <a href="mailto:kenperez.dev@gmail.com" class="text-dark-400 hover:text-accent transition-colors duration-300 link-underline text-sm font-mono">Email</a>
        </div>
      </div>
    </footer>
  </div>
</template>
