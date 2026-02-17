<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { Icon } from '@iconify/vue';
import axios from 'axios';

const techCategories = ref([
  { name: 'PHP', icon: 'simple-icons:php', children: [
    { name: 'Laravel', icon: 'simple-icons:laravel' },
  ]},
  { name: 'Node.js', icon: 'simple-icons:nodedotjs', children: [
    { name: 'Vue', icon: 'simple-icons:vuedotjs' },
    { name: 'React', icon: 'simple-icons:react' },
  ]},
  { name: 'Linux', icon: 'simple-icons:linux', children: [
    { name: 'Docker', icon: 'simple-icons:docker' },
  ]},
  { name: 'Go', icon: 'simple-icons:go', children: [
    { name: 'Gin', icon: 'simple-icons:gin' },
  ]},
  { name: 'Databases', icon: 'simple-icons:mysql', children: [
    { name: 'MySQL', icon: 'simple-icons:mysql' },
    { name: 'Oracle', icon: 'simple-icons:oracle' },
    { name: 'SQLite', icon: 'simple-icons:sqlite' },
    { name: 'Prisma', icon: 'simple-icons:prisma' },
  ]},
  { name: 'IoT', icon: 'simple-icons:arduino', children: [
    { name: 'Arduino', icon: 'simple-icons:arduino' },
  ]},
]);

const showAllTech = ref(false);

const text = ref('Full-Stack Developer.');
const cursorPosition = ref(0);
const maxChars = 50;
const isLimitExceeded = ref(false);
const isProfanity = ref(false);
const isLoaded = ref(false);

const preCursorText = computed(() => text.value.slice(0, cursorPosition.value));
const postCursorText = computed(() => text.value.slice(cursorPosition.value));

const moveCursorLeft = () => {
  if (cursorPosition.value > 0) cursorPosition.value--;
};
const moveCursorRight = () => {
  if (cursorPosition.value < text.value.length) cursorPosition.value++;
};

const insertCharacter = (char) => {
  if (text.value.length < maxChars) {
    text.value = text.value.slice(0, cursorPosition.value) + char + text.value.slice(cursorPosition.value);
    cursorPosition.value++;
    isLimitExceeded.value = false;
    checkProfanity(text.value);
  } else {
    isLimitExceeded.value = true;
  }
};

const deleteCharacter = () => {
  if (cursorPosition.value > 0) {
    text.value = text.value.slice(0, cursorPosition.value - 1) + text.value.slice(cursorPosition.value);
    cursorPosition.value--;
    isLimitExceeded.value = false;
    checkProfanity(text.value);
  }
};

const checkProfanity = async (text) => {
  try {
    const response = await axios.get('https://www.purgomalum.com/service/containsprofanity', { params: { text } });
    isProfanity.value = response.data === true;
    isLimitExceeded.value = isProfanity.value;
  } catch (error) {
    console.error('Error checking profanity:', error);
  }
};

const handleKeyDown = (event) => {
  if (event.ctrlKey && (event.key === 'a' || event.key === 'z')) return;
  if (event.key === 'ArrowLeft') moveCursorLeft();
  else if (event.key === 'ArrowRight') moveCursorRight();
  else if (event.key === 'Backspace') deleteCharacter();
  else if (event.key.length === 1) {
    event.preventDefault();
    insertCharacter(event.key);
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);

  // Typing animation
  const originalText = text.value;
  text.value = '';
  cursorPosition.value = 0;

  setTimeout(() => {
    isLoaded.value = true;
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < originalText.length) {
        insertCharacter(originalText[i]);
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80);
  }, 300);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<template>
  <main class="min-h-screen flex items-center justify-center relative overflow-hidden">

    <!-- Radial Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

    <!-- Content -->
    <div class="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
      <div class="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        
        <!-- Text Side -->
        <div class="lg:w-3/5 text-center lg:text-left space-y-6">
          <!-- Badge -->
          <div :class="['transition-all duration-700', isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4']">
            <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-mono tracking-wider">
              <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              AVAILABLE FOR WORK
            </span>
          </div>

          <!-- Name -->
          <div :class="['transition-all duration-700 delay-100', isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4']">
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
              Hello, I'm
              <span class="block text-accent text-glow mt-1">Ken Perez</span>
            </h1>
          </div>

          <!-- Typed Text -->
          <div :class="['transition-all duration-700 delay-200', isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4']">
            <h2 :class="['text-xl sm:text-2xl font-light text-dark-300 font-mono', { 'text-red-400 shake': isLimitExceeded }]">
              <span class="text-dark-400">// </span>
              <span>{{ preCursorText }}</span>
              <span class="text-accent animate-typing-blink font-thin">|</span>
              <span>{{ postCursorText }}</span>
            </h2>
            <p v-if="isProfanity" class="text-red-400 text-xs font-mono mt-2 italic">
              (c'mon, you're better than that...)
            </p>
          </div>

          <!-- Quote -->
          <div :class="['transition-all duration-700 delay-300', isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4']">
            <p class="text-dark-400 text-sm italic border-l-2 border-accent/30 pl-4">
              "In the beginning there was Nothing but Nothing is unstable so Something came about."
              <span class="block text-dark-500 text-xs mt-1 not-italic">
                — Exurb1a,
                <a href="https://www.goodreads.com/book/show/30137549-the-bridge-to-lucy-dunne" target="_blank" class="text-accent/60 hover:text-accent transition-colors">The Bridge to Lucy Dunne</a>
              </span>
            </p>
          </div>

          <!-- Tech Stack -->
          <div :class="['transition-all duration-700 delay-[400ms]', isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4']">
            <div class="flex items-center gap-3 mb-4">
              <h3 class="section-number">Tech Stack</h3>
              <button @click="showAllTech = !showAllTech"
                      class="text-[10px] font-mono text-dark-400 hover:text-accent border border-dark-700/50 hover:border-accent/30 px-2.5 py-1 rounded-full transition-all duration-300">
                {{ showAllTech ? 'Collapse' : 'Show All' }}
              </button>
            </div>

            <!-- Single container — pills never leave the DOM -->
            <div class="ts-container" :class="{ 'ts-expanded': showAllTech }">
              <div v-for="(cat, catIdx) in techCategories" :key="cat.name"
                   class="ts-group" :class="{ 'ts-group-expanded': showAllTech }">

                <!-- Category label (always in DOM, animated via max-width) -->
                <div class="ts-label" :class="{ 'ts-label-show': showAllTech }">
                  <Icon :icon="cat.icon" class="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span class="text-[11px] font-mono font-medium text-dark-200 whitespace-nowrap">{{ cat.name }}</span>
                  <div class="ts-sep"></div>
                </div>

                <!-- Child pills -->
                <div v-for="child in cat.children" :key="child.name" class="ts-pill">
                  <Icon :icon="child.icon" class="w-4 h-4 text-accent/70" />
                  <span class="text-xs font-mono text-dark-300">{{ child.name }}</span>
                </div>

                <!-- Dot separator between groups (collapsed only) -->
                <span v-if="catIdx < techCategories.length - 1" class="ts-dot" :class="{ 'ts-dot-hide': showAllTech }">·</span>
              </div>
            </div>
          </div>

          <!-- CTAs -->
          <div :class="['flex flex-wrap justify-center lg:justify-start gap-4 pt-4 transition-all duration-700 delay-500', isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4']">
            <a href="mailto:kenperez.dev@gmail.com" class="btn-neon btn-neon-primary">
              <span>Hire Me</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
            <a href="/cv.pdf" download="Ken Perez CV" target="_blank" class="btn-neon btn-neon-outline">
              <span>Download CV</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Profile Image -->
        <div :class="['lg:w-2/5 flex justify-center transition-all duration-1000', isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90']">
          <div class="relative">
            <!-- Glow ring -->
            <div class="absolute inset-0 rounded-full bg-accent/10 blur-2xl scale-110 animate-glow-pulse"></div>
            
            <!-- Image container -->
            <div class="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full p-[3px] bg-gradient-to-br from-accent/60 via-accent/20 to-transparent">
              <div class="w-full h-full rounded-full overflow-hidden bg-dark-900">
                <img src="/me.jpg" alt="Ken Perez" class="w-full h-full object-cover" />
              </div>
            </div>

            <!-- Floating label -->
            <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-dark-900/90 backdrop-blur-sm border border-dark-700/50 px-4 py-2 rounded-full flex items-center gap-2">
              <span class="relative flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
              <span class="text-xs font-mono text-dark-200">Open to work</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.shake {
  animation: shake 0.5s;
}
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-5px); }
  40%, 80% { transform: translateX(5px); }
}

/* ─── Tech Stack reflow system ───────────── */
.ts-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  max-width: 600px;
  transition: gap 0.4s ease;
}
.ts-container.ts-expanded {
  gap: 0.375rem;
}

/* Each category group — border/padding always present but invisible by default */
.ts-group {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.375rem;
  border: 1px solid transparent;
  border-radius: 0.75rem;
  padding: 0 0;
  background: transparent;
  flex-basis: auto;
  transition: flex-basis 0.4s cubic-bezier(0.4, 0, 0.2, 1),
              padding 0.4s cubic-bezier(0.4, 0, 0.2, 1),
              background 0.4s ease,
              border-color 0.4s ease,
              gap 0.4s ease;
}
.ts-group-expanded {
  flex-basis: 100%;
  background: rgba(255, 255, 255, 0.015);
  border-color: rgba(255, 255, 255, 0.04);
  padding: 0.5rem 0.75rem;
  gap: 0.5rem;
}

/* Category label — hidden with max-width:0, revealed on expand */
.ts-label {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  max-width: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-width 0.4s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.3s ease 0.05s,
              margin 0.4s ease;
  margin-right: 0;
}
.ts-label-show {
  max-width: 140px;
  opacity: 1;
  margin-right: 0.25rem;
}

/* Vertical separator inside label */
.ts-sep {
  width: 1px;
  height: 14px;
  background: rgba(204, 255, 0, 0.2);
  flex-shrink: 0;
  margin-left: 0.25rem;
}

/* Individual tech pill */
.ts-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.65rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  white-space: nowrap;
  transition: border-color 0.3s, background 0.3s, transform 0.3s;
}
.ts-pill:hover {
  border-color: #ccff0030;
  background: #ccff0008;
}

/* Dot separator between groups — fades out on expand */
.ts-dot {
  color: #404040;
  font-size: 1.25rem;
  line-height: 1;
  transition: opacity 0.25s ease, max-width 0.3s ease;
  max-width: 1rem;
  overflow: hidden;
}
.ts-dot-hide {
  opacity: 0;
  max-width: 0;
}
</style>