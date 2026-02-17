<script setup>
import { ref, onMounted, computed } from 'vue';
import { projects } from '../data/projects.js';

const isInView = ref({});
const activeFilter = ref('All');

const categories = computed(() => {
  const cats = [...new Set(projects.map(p => p.category))];
  return ['All', ...cats];
});

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects;
  return projects.filter(p => p.category === activeFilter.value);
});

const featured = computed(() => filteredProjects.value[0] || null);
const rest = computed(() => filteredProjects.value.slice(1));

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

    <!-- Page Header -->
    <section id="projects-header" class="reveal mb-12" :class="{ 'active': isInView['projects-header'] }">
      <span class="section-number">// Projects</span>
      <h1 class="text-4xl sm:text-5xl font-bold text-white mt-2">My Work</h1>
      <p class="text-dark-300 mt-4 max-w-xl text-lg">
        From IoT systems to web platforms — each project is a challenge solved with code and curiosity.
      </p>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap gap-2 mt-6">
        <button v-for="cat in categories" :key="cat"
                @click="activeFilter = cat"
                class="px-4 py-1.5 text-xs font-mono rounded-full border transition-all duration-300"
                :class="activeFilter === cat
                  ? 'border-accent bg-accent/15 text-accent'
                  : 'border-dark-600 text-dark-300 hover:text-white hover:border-dark-500'">
          {{ cat }}
        </button>
      </div>
    </section>

    <!-- Featured Project (first item) -->
    <section v-if="featured" id="featured" class="reveal mb-10" :class="{ 'active': isInView['featured'] }">
      <router-link :to="`/projects/${featured.id}`"
                   class="group block rounded-2xl overflow-hidden border border-dark-600/50 bg-dark-800/70 hover:border-accent/30 transition-all duration-500">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <!-- Image half -->
          <div class="h-64 lg:h-full overflow-hidden relative">
            <img :src="featured.images[0].itemImageSrc" :alt="featured.images[0].alt"
                 class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                 @error="$event.target.src = 'https://placehold.co/600x400?text=Preview'" />
            <div class="absolute inset-0 bg-gradient-to-r from-transparent to-dark-950/60 hidden lg:block"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent lg:hidden"></div>
          </div>

          <!-- Info half -->
          <div class="p-8 flex flex-col justify-center">
            <div class="flex items-center gap-3 mb-4">
              <span class="px-3 py-1 text-[11px] font-mono font-semibold rounded-full"
                    :style="{ color: featured.color, backgroundColor: featured.color + '20', border: '1px solid ' + featured.color + '50' }">
                {{ featured.category }}
              </span>
              <span class="text-dark-400 text-xs font-mono">{{ featured.date }}</span>
            </div>

            <h2 class="text-2xl lg:text-3xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-2">
              {{ featured.name }}
            </h2>
            <p class="text-dark-400 text-xs font-mono mb-4">{{ featured.subtitle }}</p>
            <p class="text-dark-200 text-sm leading-relaxed mb-6">{{ featured.description }}</p>

            <!-- Tech pills -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="tech in featured.technologies" :key="tech"
                    class="px-2.5 py-1 bg-dark-700/60 border border-dark-600/50 rounded-md text-[11px] font-mono text-dark-200">
                {{ tech }}
              </span>
            </div>

            <div class="flex items-center gap-2 text-accent text-sm font-mono group-hover:gap-3 transition-all duration-300">
              View Project
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
        </div>
      </router-link>
    </section>

    <!-- Remaining Projects Grid -->
    <section id="projects-grid" class="reveal" :class="{ 'active': isInView['projects-grid'] }">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <router-link
          v-for="project in rest"
          :key="project.id"
          :to="`/projects/${project.id}`"
          class="group block rounded-xl overflow-hidden border border-dark-600/40 bg-dark-800/50 hover:border-accent/25 hover:bg-dark-800/70 transition-all duration-400"
        >
          <!-- Image -->
          <div class="h-44 overflow-hidden relative">
            <img :src="project.images[0].itemImageSrc" :alt="project.images[0].alt"
                 class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                 @error="$event.target.src = 'https://placehold.co/400x250?text=Preview'" />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent"></div>

            <!-- Category Badge -->
            <div class="absolute top-3 left-3">
              <span class="px-2.5 py-0.5 text-[10px] font-mono font-semibold rounded-full backdrop-blur-md"
                    :style="{ color: project.color, backgroundColor: project.color + '20', border: '1px solid ' + project.color + '50' }">
                {{ project.category }}
              </span>
            </div>
          </div>

          <!-- Info -->
          <div class="p-5">
            <h3 class="text-lg font-semibold text-white group-hover:text-accent transition-colors duration-300 mb-1">
              {{ project.name }}
            </h3>
            <p class="text-dark-300 text-[11px] font-mono mb-3">{{ project.subtitle }}</p>
            <p class="text-dark-200 text-sm leading-relaxed line-clamp-2 mb-4">{{ project.description }}</p>

            <!-- Tech -->
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span v-for="tech in project.technologies.slice(0, 3)" :key="tech"
                    class="px-2 py-0.5 bg-dark-700/70 border border-dark-500/40 rounded text-[10px] font-mono text-dark-200">
                {{ tech }}
              </span>
              <span v-if="project.technologies.length > 3"
                    class="px-2 py-0.5 bg-dark-700/70 border border-dark-500/40 rounded text-[10px] font-mono text-dark-300">
                +{{ project.technologies.length - 3 }}
              </span>
            </div>

            <!-- Footer -->
            <div class="flex items-center justify-between pt-3 border-t border-dark-700/40">
              <span class="text-dark-400 text-[11px] font-mono">{{ project.date }}</span>
              <span class="flex items-center gap-1 text-accent/70 text-xs font-mono group-hover:text-accent group-hover:gap-2 transition-all duration-300">
                View
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </div>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>