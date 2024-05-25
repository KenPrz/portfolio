<script setup>
  import NavBar from './components/Navbar.vue'
</script>

<template>
  <div class="text-white scroll-smooth">
    <NavBar class="sticky" />
    <router-view />
  </div>
</template>
<style>
@keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.animate-fade-in {
    animation: fade-in 2s ease-out forwards;
}

h1, h2, p {
    margin: 0;
}
</style>

