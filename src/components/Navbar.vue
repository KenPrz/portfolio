<script setup>
</script>

<template>
    <nav class="sticky top-0 px-7 py-3 flex items-center justify-center md:justify-between bg-nav text-white shadow-lg z-10">
        <div class="md:flex hidden items-center">
            <router-link class="flex items-center" to="/">
                <img src="../assets/profile.jpg" alt="logo" class="h-10 w-10 rounded-full" />
                <h1 class="text-xl font-bold ml-2">KenPrz</h1>
            </router-link>
        </div>
        <div class="space-x-5 md:space-x-10">
            <router-link
                class="text-md font-light hover:color-offset"
                :class="{ 'text-offset': $route.path === '/' }"
                to="/"> <span class="ease-in duration-200 transition-all hover:text-offset">Home</span>
            </router-link>
            <!-- <router-link
                class="text-md font-light hover:color-offset"
                :class="{ 'text-offset': $route.path === '/about' }"
                to="/about"> <span class="ease-in duration-200 transition-all hover:text-offset">About</span>
            </router-link> -->
            <router-link
                class="text-md font-light hover:color-offset"
                :class="{ 'text-offset': $route.path === '/projects' }"
                to="/projects"> <span class="ease-in duration-200 transition-all hover:text-offset">Projects</span>
            </router-link>
            <a href="mailto:kenperez.dev@gmail.com" class="text-md font-medium hover:color-offset" target="_blank">
                <span class="ease-in duration-200 transition-all hover:text-offset">Say Hi!</span>
            </a>
        </div>
    </nav>
</template>
<script>
</script>
