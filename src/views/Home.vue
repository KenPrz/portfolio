<script setup>
import Image from 'primevue/image';
import { ref } from 'vue';
</script>

<template>
    <main class="flex justify-center items-center h-screen">
        <div data-aos="zoom-in"  class="md:border-x md:px-48 md:py-32">
            <div class="md:border-y md:px-48 md:py-20">
                <div class="flex flex-col items-center text-center animate-fade-in">
                    <div class="flex flex-col mb-4">
                        <h1 class="text-6xl">Hello! I'm <a class="hover:text-offset_secondary text-offset transition-colors duration-200" href="https://github.com/kenprz" target="_blank">Ken Perez</a></h1>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-2xl">Web Developer.</p>
                    </div>
                    <div class="mt-3">
                        <a href="../assets/cv.pdf" download="Ken_Perez_CV.pdf">
                            <button class="hover:text-offset hover:border-offset transition-colors duration-200 flex items-center justify-center py-1 px-6 border">
                                <span>Download CV</span>
                            </button>
                        </a>
                    </div>
                    
                </div>
                
            </div>
            <div class="flex items-center justify-center mt-2">
                <div v-for="logo in logos" :key="logo.itemImageSrc" class="p-1">
                    <a :href="logo.link" target="_blank">
                        <Image :src="logo.itemImageSrc" :alt="logo.alt" width="45" />
                    </a>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
    const logos = ref([
        { itemImageSrc: 'https://i.ibb.co/7KkzQ5M/laravel.png', alt: 'laravel', link:'https://laravel.com/' },
        { itemImageSrc: 'https://i.ibb.co/wLSDBym/php.png', alt: 'php', link:'https://www.php.net/' },
        { itemImageSrc: 'https://i.ibb.co/fFkd1jm/vue.png', alt: 'vue', link:'https://vuejs.org/' },
        { itemImageSrc: 'https://i.ibb.co/xgZ54SB/mysql.png', alt: 'mysql', link:'https://www.mysql.com/' },
        { itemImageSrc: 'https://i.ibb.co/qnqnWgj/arduino.png', alt: 'arduino', link:'https://www.arduino.cc/'}
    ])
</script>