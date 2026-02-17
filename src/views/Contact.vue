<script setup>
import { ref, onMounted } from 'vue';

const links = ref([
    {
        name: 'Email',
        link: 'mailto:kenperez.dev@gmail.com',
        display: 'kenperez.dev@gmail.com',
        icon: 'mail',
        color: '#ccff00'
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/ken-daryl-perez/',
        display: 'ken-daryl-perez',
        icon: 'linkedin',
        color: '#0077b5'
    },
    {
        name: 'GitHub',
        link: 'https://github.com/kenprz',
        display: 'kenprz',
        icon: 'github',
        color: '#8b5cf6'
    },
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/khenzhu23/',
        display: 'khenzhu23',
        icon: 'facebook',
        color: '#3b82f6'
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
  }, { threshold: 0.05 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

onMounted(() => {
  observeElements();
});
</script>

<template>
  <div class="min-h-screen pt-24 pb-20 px-6 md:px-10 max-w-6xl mx-auto">
    
    <!-- Header -->
    <section id="contact-header" class="reveal mb-16" :class="{ 'active': isInView['contact-header'] }">
      <span class="section-number">// Contact</span>
      <h1 class="text-4xl sm:text-5xl font-bold text-white mt-2">Let's Connect</h1>
      <p class="text-dark-300 mt-4 max-w-xl text-lg">
        I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
      </p>
    </section>

    <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <!-- Contact Methods -->
      <section id="contact-info" class="reveal lg:col-span-3" :class="{ 'active': isInView['contact-info'] }">
        <div class="glass-card p-8">
          <h2 class="text-xl font-semibold text-white mb-2">Get in touch</h2>
          <p class="text-dark-400 text-sm mb-8">Choose your preferred method. I usually respond within 24 hours.</p>
          
          <div class="space-y-3">
            <a v-for="(link, index) in links" :key="link.name"
               :href="link.link"
               target="_blank"
               class="contact-card flex items-center p-4 rounded-xl bg-dark-800/50 border border-dark-700/30 hover:border-accent/20 hover:bg-accent/5 transition-all duration-300 group"
               :style="{ '--accent-color': link.color }"
               :class="`reveal-delay-${index + 1}`">
              
              <!-- Icon -->
              <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-4 transition-all duration-300 border border-dark-700/50 group-hover:border-accent/30"
                   :style="{ backgroundColor: link.color + '10', color: link.color }">
                <!-- Mail -->
                <svg v-if="link.icon === 'mail'" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
                <!-- LinkedIn -->
                <svg v-else-if="link.icon === 'linkedin'" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
                <!-- GitHub -->
                <svg v-else-if="link.icon === 'github'" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <!-- Facebook -->
                <svg v-else-if="link.icon === 'facebook'" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              
              <div class="flex-1 min-w-0">
                <h3 class="font-medium text-dark-200 text-sm group-hover:text-white transition-colors">{{ link.name }}</h3>
                <p class="text-dark-500 text-xs font-mono truncate group-hover:text-dark-300 transition-colors">{{ link.display }}</p>
              </div>
              
              <svg class="w-4 h-4 text-dark-600 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      <!-- Sidebar -->
      <section id="contact-sidebar" class="reveal lg:col-span-2 space-y-6" :class="{ 'active': isInView['contact-sidebar'] }">
        <!-- Status -->
        <div class="glass-card p-6">
          <h3 class="text-sm font-semibold text-white mb-4 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-accent"></span>
            Current Status
          </h3>
          <div class="flex items-center bg-dark-800/50 border border-dark-700/30 p-4 rounded-xl">
            <span class="relative flex h-3 w-3 mr-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span class="text-sm text-dark-200">Available for freelance & full-time</span>
          </div>
        </div>
        
        <!-- Location -->
        <div class="glass-card p-6">
          <h3 class="text-sm font-semibold text-white mb-4 flex items-center gap-2">
            <svg class="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            Location
          </h3>
          
          <div class="space-y-3">
            <div class="text-center py-6 bg-dark-800/50 border border-dark-700/30 rounded-xl">
              <p class="font-mono text-accent text-xs mb-1">14.5547°N, 121.0244°E</p>
              <p class="font-medium text-white text-sm">Makati City, Philippines</p>
              <p class="text-dark-400 text-xs font-mono mt-1">UTC+08:00</p>
            </div>
            
            <p class="text-dark-400 text-xs leading-relaxed">
              Based in Makati City, Philippines. Available for remote work worldwide. Open to relocation for the right opportunity.
            </p>
          </div>
        </div>

        <!-- Quick CTA -->
        <div class="glass-card p-6 text-center relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none"></div>
          <div class="relative">
            <p class="text-dark-300 text-sm mb-4">Ready to start a project?</p>
            <a href="mailto:kenperez.dev@gmail.com" class="btn-neon btn-neon-primary text-xs w-full justify-center">
              Send me an email
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.contact-card {
  position: relative;
  overflow: hidden;
}
.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: var(--accent-color, #ccff00);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.3s ease;
}
.contact-card:hover::before {
  transform: scaleY(1);
}
</style>