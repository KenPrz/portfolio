<script setup>
import Timeline from 'primevue/timeline';
import ScrollTop from 'primevue/scrolltop';
import Divider from 'primevue/divider';
import Card from 'primevue/card';
import { ref } from 'vue';
</script>
<template>
    <div class="animate-fade-in px-10">
        <h1 class="ps-4 sm:ps-6 lg:ps-8 pt-10 text-3xl text-center font-semibold">Projects Timeline</h1>
        <Divider />
        <div class="flex justify-center px-4 sm:px-6 lg:px-8 py-8">
            <div class="card">
                <Timeline :value="events" align="alternate" class="customized-timeline">
                    <template #marker="slotProps">
                        <span
                            class="flex w-12 h-12 items-center justify-center text-white rounded-full z-20 shadow-sm"
                            :style="{ backgroundColor: slotProps.item.color }">
                            <i :class="slotProps.item.icon"></i>
                        </span>
                    </template>
                    <template #content="slotProps">
                        <Card class="mt-3">
                            <template #title class="text-lg sm:text-xl lg:text-2xl">
                                {{ slotProps.item.name }}
                            </template>
                            <template #subtitle class="text-sm sm:text-base lg:text-lg">
                                {{ slotProps.item.date }}
                            </template>
                            
                            <template #content class="text-sm sm:text-base lg:text-lg">
                                <p>
                                    {{ slotProps.item.description }}
                                </p>
                                <div class="pt-4">
                                    <a class="text-offset_secondary hover:text-offset transition-colors duration-200 text-sm sm:text-base lg:text-lg" :href="slotProps.item.link">
                                        <i class="me-1" :class="slotProps.item.linkIcon"></i> {{ slotProps.item.pathTitle }}
                                    </a>
                                </div>
                            </template>
                        </Card>
                    </template>
                </Timeline>
            </div>
        </div>
        <ScrollTop />
    </div>
</template>

<script>
const events = ref([
    {
        name: 'HomeSphere (Final Year Project)',
        date: 'Jul 2023 - Dec 2024',
        icon: 'pi pi-home',
        color: '#9C27B0',
        description: 'HomeSphere, a web-based home automation system I co-developed, integrates seamlessly with devices for remote control, enhancing everyday living. Built with Laravel and ESP32, it showcases both innovation and practicality, culminating my academic journey.',
        link: 'https://github.com/KenPrz/HomeSphere_2',
        linkIcon: 'pi pi-github',
        pathTitle: 'View on GitHub'
    },
    { 
        name: 'Youth Card RFID System', 
        date: 'Jan 2024 - present (on hold)', 
        icon: 'pi pi-qrcode', 
        color: '#673AB7', 
        description: 'Youth Card RFID System (YCRS) commissioned by Sangguniang Kabataan Inarado Daraga chapter is a  web application designed for managing event attendance and points redemption seamlessly. Leveraging RFID technology, this app provides a robust solution for identifying users, tracking their attendance at events, and facilitating points redemption.',
        link: 'https://github.com',
        linkIcon: 'pi pi-github',
        pathTitle: 'Repository is private'
    },
    { 
        name: 'Arduino Greenhouse Monitoring System', 
        date: 'Jan 2024 - Mar 2024', 
        icon: 'pi pi-sun', 
        color: '#FF9800', 
        description: 'Commissioned by Bicol University College of Agriculture and Fisheries (BUCAF) students, the AGMS greenhouse monitoring system utilizes Arduino and a network of sensors. It tracks temperature, humidity, and soil moisture, logging data for analysis. The system can also automate irrigation through pumps and solenoids.',
        link: 'https://github.com/0roc4n/BUCAF_Project',
        linkIcon: 'pi pi-github',
        pathTitle: 'View on GitHub'
    },
    { 
        name: 'GradMaster', 
        date: 'Mar 2024 - Present (ongoing)', 
        icon: 'pi pi-book', 
        color: '#607D8B', 
        description: 'GradMaster is a web-based thesis management system designed to streamline the process of managing student theses for professors. This application provides a centralized platform for professors to efficiently supervise, track progress, and evaluate theses of their students.',
        link:'https://github.com/KenPrz/gradmaster',
        linkIcon: 'pi pi-github',
        pathTitle: 'View on GitHub'
    },
    { 
        name: 'iBUCSM (Internship Project)', 
        date: 'Feb 2024 - May 2024', 
        icon: 'pi pi-file-edit', 
        color: '#9C27B0', 
        description: 'This system is designed to streamline Bicol University\'s compliance with the Anti-Red Tape Act (ARTA) by allowing staff to monitor service ratings across different university offices. The system simplifies the experience for both service providers and users, requiring just a few taps to provide valuable input.',
        link:'https://survey.bicol-u.edu.ph/',
        linkIcon: 'pi pi-external-link',
        pathTitle: 'Visit iBUCSM Survey Site'
    },
]);
</script>
