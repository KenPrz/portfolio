<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import axios from 'axios';

const logos = ref([
  { src: '/icons/php.svg', alt: 'php', link: 'https://www.php.net/' },
  { src: '/icons/laravel.svg', alt: 'laravel', link: 'https://laravel.com/' },
  { src: '/icons/vue.svg', alt: 'vue', link: 'https://vuejs.org/' },
  { src: '/icons/tailwind.svg', alt: 'tailwindcss', link: 'https://tailwindcss.com/' },
  { src: '/icons/bootstrap.svg', alt: 'bootstrap', link: 'https://getbootstrap.com/' },
  { src: '/icons/mysql.svg', alt: 'mysql', link: 'https://www.mysql.com/' },
  { src: '/icons/arduino.svg', alt: 'arduino', link: 'https://www.arduino.cc/' },
]);

const cv = ref('/cv.pdf');
const githubLink = ref('https://github.com/kenprz');
const image = ref('/me.jpg');
const text = ref('a Web Developer ');
const cursorPosition = ref(text.value.length);
const maxChars = 50;
const isLimitExceeded = ref(false);
const isProfanity = ref(false);
const isVisible = ref({});

// Typed text effect
const preCursorText = computed(() => text.value.slice(0, cursorPosition.value));
const postCursorText = computed(() => text.value.slice(cursorPosition.value));

const moveCursorLeft = () => {
  if (cursorPosition.value > 0) {
    cursorPosition.value--;
  }
};

const moveCursorRight = () => {
  if (cursorPosition.value < text.value.length) {
    cursorPosition.value++;
  }
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
    const response = await axios.get('https://www.purgomalum.com/service/containsprofanity', {
      params: { text: text }
    });
    isProfanity.value = response.data === true;
    isLimitExceeded.value = isProfanity.value;
  } catch (error) {
    console.error('Error checking profanity:', error);
  }
};

const handleKeyDown = (event) => {
  if (event.ctrlKey && (event.key === 'a' || event.key === 'z')) {
    return;
  }

  if (event.key === 'ArrowLeft') {
    moveCursorLeft();
  } else if (event.key === 'ArrowRight') {
    moveCursorRight();
  } else if (event.key === 'Backspace') {
    deleteCharacter();
  } else if (event.key.length === 1) {
    event.preventDefault();
    insertCharacter(event.key);
  }
};

// Intersection observer for animations
const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value[entry.target.id] = true;
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
  observeElements();
  
  // Simulate typing effect on load
  const originalText = text.value;
  text.value = '';
  cursorPosition.value = 0;
  
  let i = 0;
  const typeInterval = setInterval(() => {
    if (i < originalText.length) {
      insertCharacter(originalText[i]);
      i++;
    } else {
      clearInterval(typeInterval);
    }
  }, 100);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<template>
  <main class="flex justify-center items-center min-h-screen pt-20">
    <div class="flex flex-col items-center text-center w-full max-w-5xl px-6">
      <!-- Hero Section -->
      <div class="flex flex-col-reverse md:flex-row items-center w-full space-y-8 md:space-y-0 mb-16">
        <!-- Text Content -->
        <div id="hero-text" class="animate-on-scroll smooth-appear md:w-1/2 text-left" :class="{ 'active': isVisible['hero-text'] }">
          <div class="space-y-4">
            <span class="inline-block px-4 py-1 text-sm font-medium bg-primary-900/50 text-primary-400 rounded-full">Full-Stack Developer</span>
            <h1 class="text-4xl md:text-6xl font-bold">
              Hello, I'm 
              <span class="text-primary-400 relative inline-block">
                Ken
                <span class="absolute -bottom-2 left-0 w-full h-1 bg-primary-400/30"></span>
              </span>
            </h1>
            
            <h2 :class="{'text-red-500': isLimitExceeded, 'shake': isLimitExceeded}" 
                class="py-1 text-xl md:text-2xl font-light">
              <span>I'm </span>
              <b>{{ preCursorText }}</b>
              <span class="cursor font-thin">|</span>
              <b>{{ postCursorText }}</b>
              <span v-if="isProfanity" class="py-1 font-light text-red-500 text-sm italic block mt-1">
                (c'mon man, you're better than that...)
              </span>
            </h2>
            
            <p class="text-md font-light text-surface-300">
              <span class="italic">"In the beginning there was Nothing but Nothing is unstable so Something came about."</span>
              <span class="text-sm block mt-1">― Exurb1a, 
                <a href="https://www.goodreads.com/book/show/30137549-the-bridge-to-lucy-dunne" 
                   target="_blank" 
                   class="text-primary-400 hover:underline transition-colors duration-200">The Bridge to Lucy Dunne</a>
              </span>
            </p>

            <!-- Tech Stack -->
            <div class="pt-6">
              <h3 class="text-sm uppercase tracking-wider text-surface-400 mb-3">Tech Stack</h3>
              <div class="flex flex-wrap gap-4 items-center">
                <a v-for="(logo, index) in logos" 
                   :key="index"
                   :href="logo.link" 
                   target="_blank"
                   class="tech-icon bg-surface-800/50 p-2 rounded-lg transition-all duration-300 hover:bg-primary-900/50 hover:-translate-y-1">
                  <img :src="logo.src" :alt="logo.alt" class="w-8 h-8">
                </a>
              </div>
            </div>

            <!-- Call To Action -->
            <div class="flex space-x-4 pt-6">
              <a href="mailto:kenperez.dev@gmail.com"
                 class="flex items-center justify-center space-x-2 bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-primary-500/20">
                <span>Hire Me</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
              <a href="/cv.pdf" download="Ken Perez CV" target="_blank"
                 class="flex items-center justify-center space-x-2 bg-transparent border border-primary-500 text-primary-400 px-6 py-3 rounded-lg font-medium hover:bg-primary-900/20 transition-all duration-300">
                <span>Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Profile Image -->
        <div id="hero-image" class="animate-on-scroll smooth-appear md:w-1/2 flex justify-center md:justify-end" :class="{ 'active': isVisible['hero-image'] }">
          <div class="relative">
            <!-- Background Elements -->
            <div class="absolute -z-10 top-0 right-0 w-full h-full">
              <div class="absolute top-0 right-10 w-32 h-32 bg-primary-500/10 rounded-full filter blur-3xl"></div>
              <div class="absolute bottom-10 left-0 w-40 h-40 bg-purple-500/10 rounded-full filter blur-3xl"></div>
            </div>
            
            <!-- Image with Border -->
            <div class="relative rounded-full p-2 bg-gradient-to-r from-primary-600 to-primary-400">
              <img :src="image" alt="Ken Perez" class="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full border-4 border-surface-900">
              
              <!-- Status Indicator -->
              <div class="absolute bottom-6 right-6 flex items-center bg-surface-900/80 backdrop-blur-sm py-2 px-3 rounded-full">
                <span class="flex h-3 w-3 relative mr-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span class="text-xs font-medium">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.cursor {
  animation: blink 1s infinite;
}

.shake {
  animation: shake 0.5s;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-5px); }
  40%, 80% { transform: translateX(5px); }
}

.tech-icon {
  position: relative;
  overflow: hidden;
}

.tech-icon::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%);
  transform: scale(0);
  opacity: 0;
  transition: transform 0.5s, opacity 0.5s;
}

.tech-icon:hover::before {
  transform: scale(1);
  opacity: 1;
}
</style>