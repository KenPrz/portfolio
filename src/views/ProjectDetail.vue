<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getProjectById, projects } from '../data/projects.js';

const route = useRoute();
const router = useRouter();
const activeIndex = ref(0);
const isLoaded = ref(false);

const project = computed(() => getProjectById(route.params.id));

// Adjacent projects for prev/next nav
const currentIdx = computed(() => projects.findIndex(p => p.id === route.params.id));
const prevProject = computed(() => currentIdx.value > 0 ? projects[currentIdx.value - 1] : null);
const nextProject = computed(() => currentIdx.value < projects.length - 1 ? projects[currentIdx.value + 1] : null);

const nextImage = () => {
  if (!project.value) return;
  activeIndex.value = (activeIndex.value + 1) % project.value.images.length;
};
const prevImage = () => {
  if (!project.value) return;
  activeIndex.value = activeIndex.value === 0 ? project.value.images.length - 1 : activeIndex.value - 1;
};

const paragraphs = computed(() => {
  if (!project.value) return [];
  return project.value.longDescription.split('\n\n').map(p => {
    // Detect bullet lines
    if (p.startsWith('•') || p.includes('\n•')) {
      return { type: 'list', items: p.split('\n').filter(l => l.trim()).map(l => l.replace(/^•\s*/, '')) };
    }
    return { type: 'text', content: p };
  });
});

onMounted(() => {
  setTimeout(() => { isLoaded.value = true; }, 50);
});
</script>

<template>
  <div class="min-h-screen pt-24 pb-20 px-6 md:px-10 max-w-5xl mx-auto" v-if="project">
    <!-- Back Button -->
    <div :class="['mb-8 transition-all duration-500', isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4']">
      <router-link to="/projects" class="inline-flex items-center gap-2 text-dark-400 hover:text-accent transition-colors duration-300 text-sm font-mono group">
        <svg class="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back to Projects
      </router-link>
    </div>

    <!-- Header -->
    <div :class="['mb-10 transition-all duration-500 delay-100', isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4']">
      <div class="flex flex-wrap items-center gap-3 mb-4">
        <span class="px-3 py-1 text-[10px] font-mono font-medium rounded-full border"
              :style="{ borderColor: project.color + '40', color: project.color, backgroundColor: project.color + '15' }">
          {{ project.category }}
        </span>
        <span class="text-dark-500 text-xs font-mono">{{ project.date }}</span>
      </div>
      <h1 class="text-4xl sm:text-5xl font-bold text-white mb-2">{{ project.name }}</h1>
      <p class="text-dark-400 text-sm font-mono">{{ project.subtitle }}</p>
    </div>

    <!-- Hero Image Gallery -->
    <div :class="['mb-10 transition-all duration-700 delay-200', isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4']">
      <div class="relative rounded-2xl overflow-hidden border border-dark-700/30 bg-dark-900/50">
        <!-- Main Image -->
        <div class="relative w-full aspect-video flex items-center justify-center bg-dark-950/50">
          <img :src="project.images[activeIndex].itemImageSrc"
               :alt="project.images[activeIndex].alt"
               class="w-full h-full object-contain"
               @error="$event.target.src = 'https://placehold.co/800x450?text=Image+Not+Available'" />

          <!-- Nav Arrows -->
          <button v-if="project.images.length > 1" @click="prevImage"
                  class="absolute left-3 w-10 h-10 rounded-full bg-dark-900/80 backdrop-blur-sm border border-dark-700/50 flex items-center justify-center text-dark-300 hover:text-accent hover:border-accent/30 transition-all">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button v-if="project.images.length > 1" @click="nextImage"
                  class="absolute right-3 w-10 h-10 rounded-full bg-dark-900/80 backdrop-blur-sm border border-dark-700/50 flex items-center justify-center text-dark-300 hover:text-accent hover:border-accent/30 transition-all">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6" /></svg>
          </button>

          <!-- Counter -->
          <div v-if="project.images.length > 1" class="absolute bottom-3 right-3 bg-dark-900/80 backdrop-blur-sm text-dark-300 px-3 py-1 text-xs font-mono rounded-full border border-dark-700/30">
            {{ activeIndex + 1 }} / {{ project.images.length }}
          </div>
        </div>

        <!-- Thumbnails -->
        <div v-if="project.images.length > 1" class="flex justify-center p-3 gap-2 overflow-x-auto border-t border-dark-700/20 bg-dark-950/30">
          <button v-for="(image, idx) in project.images" :key="idx" @click="activeIndex = idx"
                  class="w-16 h-12 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300"
                  :class="activeIndex === idx ? 'border-accent/60 ring-1 ring-accent/20' : 'border-transparent opacity-40 hover:opacity-80'">
            <img :src="image.itemImageSrc" :alt="image.alt" class="w-full h-full object-cover"
                 @error="$event.target.src = 'https://placehold.co/100x75?text=NA'" />
          </button>
        </div>
      </div>
    </div>

    <!-- Content Grid: Description + Sidebar -->
    <div :class="['grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 transition-all duration-700 delay-300', isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4']">
      <!-- Description -->
      <div class="lg:col-span-2">
        <h2 class="text-lg font-semibold text-white mb-5 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-accent"></span>
          About this project
        </h2>
        <div class="space-y-4">
          <template v-for="(block, idx) in paragraphs" :key="idx">
            <p v-if="block.type === 'text'" class="text-dark-300 text-sm leading-relaxed">{{ block.content }}</p>
            <ul v-else class="space-y-2 pl-1">
              <li v-for="(item, liIdx) in block.items" :key="liIdx" class="flex items-start gap-2">
                <svg class="w-4 h-4 text-accent flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span class="text-dark-300 text-sm">{{ item }}</span>
              </li>
            </ul>
          </template>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="space-y-6">
        <!-- Tech Stack -->
        <div class="p-5 rounded-xl bg-dark-800/20 border border-dark-700/20">
          <h3 class="text-xs font-mono text-dark-500 uppercase tracking-wider mb-3">Tech Stack</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="tech in project.technologies" :key="tech"
                  class="px-2.5 py-1 bg-dark-900/50 border border-dark-700/40 rounded-md text-xs font-mono text-dark-300">
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Link -->
        <a :href="project.link" target="_blank" rel="noopener"
           class="flex items-center gap-3 p-5 rounded-xl bg-dark-800/20 border border-dark-700/20 hover:border-accent/20 transition-all duration-300 group">
          <div class="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
            <svg v-if="project.linkIcon === 'github'" class="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <svg v-else class="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </div>
          <div>
            <span class="text-sm text-dark-200 group-hover:text-accent transition-colors">{{ project.pathTitle }}</span>
          </div>
        </a>

        <!-- Timeline -->
        <div class="p-5 rounded-xl bg-dark-800/20 border border-dark-700/20">
          <h3 class="text-xs font-mono text-dark-500 uppercase tracking-wider mb-2">Timeline</h3>
          <span class="text-sm text-dark-200 font-mono">{{ project.date }}</span>
        </div>
      </div>
    </div>

    <!-- Prev / Next Navigation -->
    <div :class="['border-t border-dark-700/30 pt-8 transition-all duration-700 delay-400', isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4']">
      <div class="flex justify-between items-center">
        <router-link v-if="prevProject" :to="`/projects/${prevProject.id}`"
                     class="group flex items-center gap-3 text-dark-400 hover:text-accent transition-colors">
          <svg class="w-5 h-5 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6" /></svg>
          <div>
            <span class="text-[10px] font-mono text-dark-500 block">Previous</span>
            <span class="text-sm font-medium">{{ prevProject.name }}</span>
          </div>
        </router-link>
        <div v-else></div>

        <router-link v-if="nextProject" :to="`/projects/${nextProject.id}`"
                     class="group flex items-center gap-3 text-dark-400 hover:text-accent transition-colors text-right">
          <div>
            <span class="text-[10px] font-mono text-dark-500 block">Next</span>
            <span class="text-sm font-medium">{{ nextProject.name }}</span>
          </div>
          <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6" /></svg>
        </router-link>
        <div v-else></div>
      </div>
    </div>
  </div>

  <!-- 404 fallback -->
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-dark-700 mb-4">404</h1>
      <p class="text-dark-400 mb-6">Project not found.</p>
      <router-link to="/projects" class="btn-neon btn-neon-primary">Back to Projects</router-link>
    </div>
  </div>
</template>
