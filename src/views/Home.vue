<script setup>
</script>

<template>
    <main class="flex justify-center items-center h-screen">
        <div class="md:border-x md:px-48 md:py-32">
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
        </div>
    </main>
</template>
<style scoped>
@keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.animate-fade-in {
    animation: fade-in 2s ease-out forwards;
}

h1, h2, p {
    margin: 0;
}
</style>
