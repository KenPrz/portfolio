<script setup>
</script>
<template>
    <nav class="py-3 flex items-center justify-center md:justify-between">
        <div class="md:flex hidden items-center">
            <router-link class="flex items-center" to="/">
                <img src="../assets/profile.jpg" alt="logo" class="h-10 w-10 rounded-full" />
                <h1 class="text-xl font-bold ml-2">KenPrz</h1>
            </router-link>
        </div>
        <div class="space-x-5 md:space-x-10">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/projects">Projects</router-link>
            <router-link to="/contact">Say Hi!</router-link>
        </div>
    </nav>
</template>
<script>
</script>