<script setup>
  import NavBar from './components/Navbar.vue'
</script>

<template>
  <div class="text-white">
    <NavBar class="sticky" />
    <router-view />
  </div>
</template>
