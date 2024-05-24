<script setup>
</script>
<template>
    <div class="animate-fade-in">
        <p>
            About Me
            I'm a backend web developer with a knack for creating efficient and scalable applications. I primarily work
            with Laravel and Vue.js, and I have a strong background in database design. In my spare time, I love
            experimenting with Arduino to bring hardware and software together.
        </p>
        <p>
            Skills
            Backend Development: Laravel, PHP
            Frontend Development: Vue.js, JavaScript
            Database Design: MySQL, PostgreSQL
            Hardware Projects: Arduin
        </p>
    </div>
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
</style>