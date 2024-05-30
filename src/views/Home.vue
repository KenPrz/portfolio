<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import axios from 'axios';
import Divider from 'primevue/divider';

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
var delay = ref(150);
const githubLink = ref('https://github.com/kenprz');
const image = ref('/me.jpg');
const text = ref('a Web Developer ');
const cursorPosition = ref(text.value.length); // Set cursor position at the end of the text initially
const maxChars = 50; // Maximum characters allowed
const isLimitExceeded = ref(false); // Indicates if the character limit is exceeded
const isProfanity = ref(false); // Indicates if the text contains profanity
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
      params: {
        text: text
      }
    });
    if (response.data === true) {
      isLimitExceeded.value = true;
      isProfanity.value = true;
    }else{
      isProfanity.value = false;
    }
  } catch (error) {
    console.error('Error checking profanity:', error);
  }
};

const handleKeyDown = (event) => {
  if (event.ctrlKey && event.key === 'a') {
    return;
  }
  if (event.ctrlKey && event.key === 'z') {
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

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<template>
<main class="flex justify-center items-center min-h-screen">
  <div data-aos-once="true" :data-aos="'zoom-in'" data-aos-delay="10" class="flex flex-col items-center text-center animate-fade-in">
    <div class="flex flex-col-reverse md:flex-row items-center space-x-0 md:space-x-4 w-full">
      <div class="flex flex-col md:justify-start md:items-start w-full md:w-1/2 px-4 md:px-0">
        <h1 data-aos-once="true" :data-aos="'fade-left'" data-aos-delay="250" class="text-md font-semibold">Hello!</h1>
        <h1 data-aos-once="true" :data-aos="'fade-left'" data-aos-delay="100" class="text-xl md:text-6xl">I'm <b><a :data-aos="'fade-left'" data-aos-delay="300" class="hover:text-offset transition-colors duration-500" :href="githubLink">Ken</a></b></h1>
        <h1 :class="{'text-red-500': isLimitExceeded, 'shake': isLimitExceeded}" class="py-1 font-light text-lg">
          <b>{{ preCursorText }}</b>
          <span class="cursor font-thin">|</span>
          <b>{{ postCursorText }}</b><span v-if="isProfanity" class="py-1 font-light text-lg">(c'mon man, you're better than that...)</span>
        </h1>
        <div class="w-full" data-aos-once="true" :data-aos="'fade-left'" data-aos-delay="300">
          <p :data-aos="'fade-left'" data-aos-delay="300" class="text-center md:text-start text-md font-light flex flex-col">
            <span><i>“In the beginning there was Nothing but Nothing is unstable so Something came about.”</i></span>
            <span class="text-center text-sm md:text-md md:text-start">― Exurb1a, <a href="https://www.goodreads.com/book/show/30137549-the-bridge-to-lucy-dunne" target="_blank" class="text-xs hover:text-offset transition-colors duration-200">The Bridge to Lucy Dunne</a></span>
          </p>

          <div class="flex md:justify-start justify-center items-center space-x-2 mt-4">
            <template v-for="(logo, index) in logos">
              <a :href="logo.link" target="_blank">
                <img 
                  :data-aos="'fade-up'" 
                  :data-aos-delay="delay + (index * 100)"
                  :src="logo.src" 
                  :alt="logo.alt" 
                  class="w-8 h-8"
                >
              </a>
            </template>
          </div>
          <Divider />
        </div>
        <div class="flex w-full space-x-2" :data-aos="'fade-up'" data-aos-delay="350">
          <a href="mailto:kenperez.dev@gmail.com"
             class="w-1/2 bg-offset text-primary_main px-3 py-1 rounded-lg hover:bg-offset_secondary hover:text-white transition-all duration-500">
            Hire Me
          </a>
          <a href="/cv.pdf" download="Ken Perez CV" target="_blank"
             class="w-1/2 text-offset px-3 py-1 rounded-lg border-offset border-2 hover:bg-offset hover:text-primary_main transition-all duration-500">
            Download CV
          </a>
        </div>
      </div>
      <div class="w-full flex justify-center md:justify-start md:w-2/3 px-4 md:px-12">
        <img :src="image" alt="ken perez" class="w-48 md:w-[500px] h-auto rounded-full">
      </div>
    </div>
  </div>
</main>
</template>

<style scoped>
@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.cursor {
  animation: blink 1s infinite;
}

.shake {
  animation: shake 0.5s;
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  20%, 60% {
    transform: translateX(-10px);
  }
  40%, 80% {
    transform: translateX(10px);
  }
}

.text-red-500 {
  color: red;
}
</style>
