<script setup>
import { ref } from 'vue';

const links = ref([
    {
        name: 'Email',
        link: 'mailto:kenperez.dev@gmail.com',
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/ken-daryl-perez/',
    },
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/khenzhu23/',
    },
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/kenperez.dev/',
    },
    {
        name: 'Github',
        link: 'https://github.com/kenprz',
    },
]);

const baseDelay = 150; // Base delay value
</script>

<template>
  <div class="animate-fade-in flex flex-col justify-center mt-10 px-6 md:px-12 lg:px-24">
    <h1 class="text-3xl md:text-4xl font-bold text-center">Let's Get in Touch!</h1>
    <p class="text-center mt-4">Feel free to reach out to me for any queries or collaborations.</p>
    <div class="flex flex-col justify-center items-center mt-8 space-y-4">
      <div v-for="(link, index) in links" :key="link.name">
        <div
        :data-aos="index % 2 === 0 ? 'fade-left' : 'fade-right'"
            :data-aos-delay="baseDelay + (index * 100)"
        >
            <a :href="link.link"
            target="_blank"
            class="w-48 h-12 flex items-center justify-center text-md font-semibold text-primary_main bg-offset rounded-md hover:bg-offset_secondary transition duration-300"
            >
                <span>
                    {{ link.name }}
                </span>
            </a>
        </div>
      </div>
    </div>
  </div>
</template>
