<script setup>
import Galleria from 'primevue/galleria';
import Image from 'primevue/image';
import ScrollTop from 'primevue/scrolltop';
import Divider from 'primevue/divider';
import { ref } from 'vue';
</script>
<template>
    <div class="animate-fade-in px-10">
        <div class="animate-fade-in px-10">
        <h1 data-aos="fade-left" :data-aos-delay="delay+100" class="pt-10 text-3xl text-center md:text-start font-semibold">Projects Timeline</h1>
        <Divider class="bg-white" />
        <div class="flex justify-center px-4 sm:px-6 lg:px-8 py-8">
            <div class="card text-xs sm:text-sm md:text-lg font-thin md:font-normal">
                <div v-for="event in events" :key="event.name" class="mb-8" data-aos="fade-up" :data-aos-delay="delay+100">
                    <div class="flex w-full flex-col md:flex-row">
                        <div class="flex flex-col w-full md:w-1/2 justify-center">
                            <div class="flex items-center mb-2">
                                <h2 data-aos="fade-left" :data-aos-delay="delay+100" class="text-pretty text-xl md:text-4xl font-semibold text-white">{{ event.name }}</h2>
                            </div>
                            <div data-aos="fade-left" :data-aos-delay="delay+100" class="font-light text-slate-300 text-sm mb-2">{{ event.date }}</div>
                            <p data-aos="fade-left" :data-aos-delay="delay+200" class="text-pretty mb-2">{{ event.description }}</p>
                            <a data-aos="fade-left" :data-aos-delay="delay+250" :href="event.link" class="text-offset hover:text-offset_secondary transition-colors duration-300 flex items-center" target="_blank">
                                <i :class="event.linkIcon" class="mr-2"></i>{{ event.pathTitle }}
                            </a>
                        </div>
                        <div class="w-full md:w-1/2 px-5 mt-5 md:mt-0">
                            <Galleria :value="event.images" :numVisible="5"
                                :circular="true" :autoplay="true"
                                :showThumbnails="false" 
                                :showIndicators="true"
                                :showItemNavigators="true"
                                :changeItemOnIndicatorHover="false">
                                <template #item="slotProps">
                                    <Image :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" width="650" />
                                </template>
                            </Galleria>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ScrollTop />
    </div>
    </div>
</template>

<script>
const delay = ref(150);
const events = ref([
    {
        name: 'HomeSphere (Final Year Project)',
        date: 'Jul 2023 - Dec 2024',
        icon: 'pi pi-home',
        color: '#9C27B0',
        description: 'HomeSphere, a web-based home automation system I co-developed, integrates seamlessly with devices for remote control, enhancing everyday living. Built with Laravel and ESP32, it showcases both innovation and practicality, culminating my academic journey.',
        link: 'https://github.com/KenPrz/HomeSphere_2',
        linkIcon: 'pi pi-github',
        pathTitle: 'View on GitHub',
        images: [
            { itemImageSrc: 'https://i.ibb.co/mBNFR1J/homesphere1.png', alt: 'HomeSphere 1' },
            { itemImageSrc: 'https://i.ibb.co/yynS1Cn/homesphere2.png', alt: 'HomeSphere 2' },
            { itemImageSrc: 'https://i.ibb.co/LQTHkYR/homesphere3.png', alt: 'HomeSphere 3' },
            { itemImageSrc: 'https://i.ibb.co/r3cByQF/homesphere4.png', alt: 'HomeSphere 4' },
            { itemImageSrc: 'https://i.ibb.co/3Fs27H5/homesphere5.png', alt: 'HomeSphere 5' }
        ],
    },
    { 
        name: 'Youth Card RFID System', 
        date: 'Jan 2024 - present (on hold)', 
        icon: 'pi pi-qrcode', 
        color: '#673AB7', 
        description: 'Youth Card RFID System (YCRS) commissioned by Sangguniang Kabataan Inarado Daraga chapter is a  web application designed for managing event attendance and points redemption seamlessly. Leveraging RFID technology, this app provides a robust solution for identifying users, tracking their attendance at events, and facilitating points redemption.',
        link: 'https://github.com',
        linkIcon: 'pi pi-github',
        pathTitle: 'Repository is private',
        images: [
            { itemImageSrc: 'https://i.ibb.co/fXtD54Z/YCRS1.png', alt: 'YCRS 3' },
            { itemImageSrc: 'https://i.ibb.co/w7StPMY/YCRS2.png', alt: 'YCRS 4' },
            { itemImageSrc: 'https://i.ibb.co/vDm9nYp/YCRS3.png', alt: 'YCRS 1' },
            { itemImageSrc: 'https://i.ibb.co/19C5Dg3/YCRS4.png', alt: 'YCRS 2' },
        ],
    },
    { 
        name: 'Arduino Greenhouse Monitoring System', 
        date: 'Jan 2024 - Mar 2024', 
        icon: 'pi pi-sun', 
        color: '#FF9800', 
        description: 'Commissioned by Bicol University College of Agriculture and Fisheries (BUCAF) students, the AGMS greenhouse monitoring system utilizes Arduino and a network of sensors. It tracks temperature, humidity, and soil moisture, logging data for analysis. The system can also automate irrigation through pumps and solenoids.',
        link: 'https://github.com/0roc4n/BUCAF_Project',
        linkIcon: 'pi pi-github',
        pathTitle: 'View on GitHub',
        images: [
            { itemImageSrc: 'https://i.ibb.co/SnMg5gs/AGMS1.jpg', alt: 'AGMS 1' },
            { itemImageSrc: 'https://i.ibb.co/cwB1kJM/AGMS2.jpg', alt: 'AGMS 2' },
            { itemImageSrc: 'https://i.ibb.co/GP8c91H/AGMS3.jpg', alt: 'AGMS 3' },
        ],
    },
    { 
        name: 'GradMaster', 
        date: 'Mar 2024 - Present (ongoing)', 
        icon: 'pi pi-book', 
        color: '#607D8B', 
        description: 'GradMaster is a web-based thesis management system designed to streamline the process of managing student theses for professors. This application provides a centralized platform for professors to efficiently supervise, track progress, and evaluate theses of their students.',
        link:'https://github.com/KenPrz/gradmaster',
        linkIcon: 'pi pi-github',
        pathTitle: 'View on GitHub',
        images: [
            { itemImageSrc: 'https://placehold.co/600x400?text=NO+PREVIEW+AVAILABLE', alt: 'GradMaster 1' },
        ]
    },
    { 
        name: 'iBUCSM (Internship Project)', 
        date: 'Feb 2024 - May 2024', 
        icon: 'pi pi-file-edit', 
        color: '#9C27B0', 
        description: 'This system is designed to streamline Bicol University\'s compliance with the Anti-Red Tape Act (ARTA) by allowing staff to monitor service ratings across different university offices. The system simplifies the experience for both service providers and users, requiring just a few taps to provide valuable input.',
        link:'https://survey.bicol-u.edu.ph/',
        linkIcon: 'pi pi-external-link',
        pathTitle: 'Visit iBUCSM Survey Site',
        images:[
            { itemImageSrc: 'https://i.ibb.co/chPjKgm/i-BUCSM0-png.png', alt: 'BUCSM0' },
            { itemImageSrc: 'https://i.ibb.co/wdLn67z/iBUCSM1.png', alt: 'BUCSM1' },
            { itemImageSrc: 'https://i.ibb.co/nmzjZH1/i-BUCSM2-png.png', alt: 'BUCSM2' },
            { itemImageSrc: 'https://i.ibb.co/5Lrr9kL/i-BUCSM3-png.png', alt: 'BUCSM3' },
            { itemImageSrc: 'https://i.ibb.co/pZ70VXg/i-BUCSM4-png.png', alt: 'BUCSM4' },
            { itemImageSrc: 'https://i.ibb.co/jZZwhvP/i-BUCSM5-png.png', alt: 'BUCSM5' },
            { itemImageSrc: 'https://i.ibb.co/1b8vkKH/i-BUCSM6-png.png', alt: 'BUCSM6' },
            { itemImageSrc: 'https://i.ibb.co/WVrRkN8/i-BUCSM7-png.png', alt: 'BUCSM7' },

        ]
    },
]);
</script>
