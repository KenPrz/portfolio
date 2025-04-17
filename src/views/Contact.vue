<script setup>
import { ref, onMounted } from 'vue';

const links = ref([
    {
        name: 'Email',
        link: 'mailto:kenperez.dev@gmail.com',
        icon: 'mail',
        color: '#f59e0b'
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/ken-daryl-perez/',
        icon: 'linkedin',
        color: '#0077b5'
    },
    {
        name: 'GitHub',
        link: 'https://github.com/kenprz',
        icon: 'github',
        color: '#6e5494'
    },
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/khenzhu23/',
        icon: 'facebook',
        color: '#1877f2'
    },
]);

const isInView = ref({});

const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isInView.value[entry.target.id] = true;
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.observe-me').forEach(el => {
    observer.observe(el);
  });
};

onMounted(() => {
  observeElements();
});
</script>

<template>
  <div class="min-h-screen pt-20 px-4 md:px-10 max-w-6xl mx-auto">
    <!-- Header Section -->
    <section id="contact-header" class="observe-me mb-16 transition-all duration-500 transform" 
             :class="{ 'translate-y-0 opacity-100': isInView['contact-header'], 'translate-y-10 opacity-0': !isInView['contact-header'] }">
      <h1 class="text-4xl font-bold bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">Let's Connect</h1>
      <p class="text-surface-300 mt-4 max-w-2xl">I'm always interested in hearing about new projects and opportunities. Feel free to reach out!</p>
    </section>

    <div class="flex flex-col gap-10">
      <!-- Contact Cards Section -->
      <section id="contact-info" class="observe-me transition-all duration-500 transform" 
               :class="{ 'translate-y-0 opacity-100': isInView['contact-info'], 'translate-y-10 opacity-0': !isInView['contact-info'] }">
        <div class="card-effect p-8">
          <h2 class="text-2xl font-semibold mb-6">Connect with me</h2>
          
          <p class="text-surface-300 mb-8">Choose your preferred method of communication. I'm usually quick to respond!</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a v-for="(link, index) in links" :key="link.name"
               :href="link.link"
               target="_blank"
               class="flex items-center p-4 bg-surface-800 rounded-lg hover:bg-surface-700 transition-colors duration-300 group"
               :style="{ '--hover-color': link.color }">
              
              <!-- Icon based on link type -->
              <div class="w-10 h-10 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300"
                   :style="{ backgroundColor: `${link.color}30`, color: link.color }">
                <!-- Mail Icon -->
                <svg v-if="link.icon === 'mail'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                
                <!-- LinkedIn Icon -->
                <svg v-else-if="link.icon === 'linkedin'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                
                <!-- GitHub Icon -->
                <svg v-else-if="link.icon === 'github'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                
                <!-- Facebook Icon -->
                <svg v-else-if="link.icon === 'facebook'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                
                <!-- Instagram Icon -->
                <svg v-else-if="link.icon === 'instagram'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              
              <div>
                <h3 class="font-medium group-hover:text-white transition-colors duration-300">{{ link.name }}</h3>
                <span class="text-sm text-surface-400 group-hover:text-surface-300 transition-colors duration-300">{{ link.link.replace('mailto:', '') }}</span>
              </div>
              
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-auto group-hover:translate-x-1 transition-transform duration-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
          
          <div class="mt-10">
            <h3 class="text-lg font-medium mb-4">Current Status</h3>
            <div class="flex items-center bg-surface-800 p-4 rounded-lg">
              <span class="flex h-3 w-3 relative mr-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span>Available for freelance and full-time opportunities</span>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Location Section -->
      <section id="location" class="observe-me mb-16 transition-all duration-500 transform" 
              :class="{ 'translate-y-0 opacity-100': isInView['location'], 'translate-y-10 opacity-0': !isInView['location'] }">
        <div class="card-effect p-8">
          <h2 class="text-2xl font-semibold mb-6">Location</h2>
          
          <div class="flex flex-col md:flex-row gap-8 items-center">
            <div class="md:w-1/2">
              <p class="text-surface-300 mb-4">Based in Makati City, Philippines, but available for remote work worldwide.</p>
              <p class="text-surface-300">I'm open to relocation for the right opportunity.</p>
            </div>
            
            <div class="md:w-1/2 h-64 bg-surface-800 rounded-lg overflow-hidden">
              <!-- Map of the Philippines with marker on Legazpi City -->
              <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface-700 to-surface-900 relative">
                <div class="absolute inset-0 opacity-30 bg-surface-800 background-pattern"></div>
                <div class="text-center z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <p class="font-medium">Makati City, Philippines</p>
                  <p class="text-sm text-surface-400">GMT+8 Time Zone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
a.group {
  position: relative;
  overflow: hidden;
}

a.group::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: var(--hover-color, #10b981);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.3s ease;
}

a.group:hover::before {
  transform: scaleY(1);
}

.background-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23333' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}
</style>