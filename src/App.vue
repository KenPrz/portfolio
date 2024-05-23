<script setup>
  import NavBar from './components/Navbar.vue'
</script>

<template>
  <div class="container">
    <div class="px-5">
      <NavBar />
    </div>
    <router-view />
  </div>
</template>
