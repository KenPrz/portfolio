<script setup>
</script>
<template>
    <nav class="py-3 flex items-center justify-center md:justify-between text-white">
        <div class="md:flex hidden items-center">
            <router-link class="flex items-center" to="/">
                <img src="../assets/profile.jpg" alt="logo" class="h-10 w-10 rounded-full" />
                <h1 class="text-xl font-bold ml-2">KenPrz</h1>
            </router-link>
        </div>
        <div class="space-x-5 md:space-x-10">
            <router-link
                class="text-md font-light hover:color-offset"
                 to="/"> <span class="ease-in duration-200 transition-all hover:text-offset">Home</span>
            </router-link>
            <router-link
                class="text-md font-light hover:color-offset"
                 to="/about"> <span class="ease-in duration-200 transition-all hover:text-offset">About</span>
            </router-link>
            <router-link
                class="text-md font-light hover:color-offset"
                 to="/projects"> <span class="ease-in duration-200 transition-all hover:text-offset">Projects</span>
            </router-link>
            <router-link
                class="text-md font-medium hover:color-offset"
                 to="/contact"> <span class="ease-in duration-200 transition-all hover:text-offset">Say Hi!</span>
            </router-link>
        </div>
    </nav>
</template>
<script>
</script>