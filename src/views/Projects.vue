<script setup>
import { ref, onMounted } from 'vue';
import Galleria from 'primevue/galleria';
import Image from 'primevue/image';
import ScrollTop from 'primevue/scrolltop';
import Divider from 'primevue/divider';

const selectedProject = ref(null);
const showDetails = ref(false);
const scrollYPosition = ref(0);
const activeIndex = ref(0);

const events = ref([
    {
        id: 'homesphere',
        name: 'HomeSphere',
        subtitle: 'Final Year Project',
        date: 'Jul 2023 - Dec 2024',
        category: 'IoT',
        icon: 'pi pi-home',
        color: '#22c55e',
        description: 'HomeSphere, a web-based home automation system I co-developed, integrates seamlessly with devices for remote control, enhancing everyday living. Built with Laravel and ESP32, it showcases both innovation and practicality, culminating my academic journey.',
        technologies: ['Laravel', 'ESP32', 'MySQL', 'MQTT', 'Tailwind CSS'],
        link: 'https://github.com/KenPrz/HomeSphere_2',
        linkIcon: 'pi pi-github',
        pathTitle: 'View on GitHub',
        images: [
            { itemImageSrc: 'https://i.ibb.co/mBNFR1J/homesphere1.png', alt: 'HomeSphere Dashboard' },
            { itemImageSrc: 'https://i.ibb.co/yynS1Cn/homesphere2.png', alt: 'HomeSphere Devices' },
            { itemImageSrc: 'https://i.ibb.co/LQTHkYR/homesphere3.png', alt: 'HomeSphere Analytics' },
            { itemImageSrc: 'https://i.ibb.co/r3cByQF/homesphere4.png', alt: 'HomeSphere Settings' },
            { itemImageSrc: 'https://i.ibb.co/3Fs27H5/homesphere5.png', alt: 'HomeSphere Mobile View' }
        ],
        longDescription: `HomeSphere represents a significant milestone in my academic journey, a comprehensive web-based home automation system that I co-developed as my final year project. The system was built with user convenience at its core, allowing homeowners to remotely control various devices throughout their living spaces.

Using Laravel as the backend framework and ESP32 microcontrollers as the hardware interface, HomeSphere creates a seamless bridge between software and hardware. The system utilizes MQTT protocol for real-time communication with connected devices, ensuring minimal latency when controlling lights, fans, door locks, and other smart home appliances.

Key features include:
• Intuitive dashboard for monitoring all connected devices
• Real-time status updates and control capabilities
• Customizable automation rules and schedules
• Mobile-responsive design for control on the go
• Energy usage analytics and optimization suggestions

The project challenged me to integrate knowledge from multiple domains including web development, IoT protocols, database management, and UI/UX design, resulting in a polished, production-ready system.`
    },
    { 
        id: 'ycrs',
        name: 'Youth Card RFID System', 
        subtitle: 'Community Project',
        date: 'Jan 2024 - present (on hold)', 
        category: 'Web Application',
        icon: 'pi pi-qrcode', 
        color: '#a855f7', 
        description: 'Youth Card RFID System (YCRS) commissioned by Sangguniang Kabataan Inarado Daraga chapter is a web application designed for managing event attendance and points redemption seamlessly. Leveraging RFID technology, this app provides a robust solution for identifying users, tracking their attendance at events, and facilitating points redemption.',
        technologies: ['PHP', 'MySQL', 'RFID', 'Bootstrap', 'jQuery'],
        link: 'https://github.com',
        linkIcon: 'pi pi-github',
        pathTitle: 'Repository is private',
        images: [
            { itemImageSrc: 'https://i.ibb.co/fXtD54Z/YCRS1.png', alt: 'YCRS Dashboard' },
            { itemImageSrc: 'https://i.ibb.co/w7StPMY/YCRS2.png', alt: 'YCRS Events' },
            { itemImageSrc: 'https://i.ibb.co/vDm9nYp/YCRS3.png', alt: 'YCRS User Management' },
            { itemImageSrc: 'https://i.ibb.co/19C5Dg3/YCRS4.png', alt: 'YCRS Reports' },
        ],
        longDescription: `The Youth Card RFID System (YCRS) is a commissioned project for the Sangguniang Kabataan Inarado Daraga chapter, designed to modernize their youth engagement programs. This web application serves as a comprehensive platform for managing youth participation in community events and activities.

At its core, YCRS leverages RFID technology to streamline the identification and attendance tracking process. Each registered youth member receives an RFID card that serves as their unique identifier within the system. When they attend events, a simple tap of their card records their presence, eliminating manual record-keeping and reducing administrative overhead.

The system incorporates a points-based incentive mechanism where youth members earn points for their participation in various community activities. These points can later be redeemed for rewards, encouraging consistent engagement and active citizenship among the youth.

Key features of the YCRS include:
• Secure user registration and profile management
• Event creation and management with attendance tracking
• Real-time points accumulation and redemption
• Comprehensive reporting and analytics dashboard
• Admin panel for system configuration and oversight

Though currently on hold, this project demonstrates my ability to create practical solutions for real-world community needs.`
    },
    { 
        id: 'agms',
        name: 'Arduino Greenhouse Monitoring', 
        subtitle: 'Agriculture Tech Project',
        date: 'Jan 2024 - Mar 2024', 
        category: 'IoT',
        icon: 'pi pi-sun', 
        color: '#f59e0b', 
        description: 'Commissioned by Bicol University College of Agriculture and Fisheries (BUCAF) students, the AGMS greenhouse monitoring system utilizes Arduino and a network of sensors. It tracks temperature, humidity, and soil moisture, logging data for analysis. The system can also automate irrigation through pumps and solenoids.',
        technologies: ['Arduino', 'C++', 'Sensors', 'Data Logging', 'Automation'],
        link: 'https://github.com/0roc4n/BUCAF_Project',
        linkIcon: 'pi pi-github',
        pathTitle: 'View on GitHub',
        images: [
            { itemImageSrc: 'https://i.ibb.co/SnMg5gs/AGMS1.jpg', alt: 'AGMS Hardware Setup' },
            { itemImageSrc: 'https://i.ibb.co/cwB1kJM/AGMS2.jpg', alt: 'AGMS Sensors' },
            { itemImageSrc: 'https://i.ibb.co/GP8c91H/AGMS3.jpg', alt: 'AGMS in Operation' },
        ],
        longDescription: `The Arduino Greenhouse Monitoring System (AGMS) was developed for students at the Bicol University College of Agriculture and Fisheries (BUCAF) to enhance their research capabilities and improve crop cultivation practices. This project represents a practical application of IoT technology in agricultural settings.

The system employs an Arduino microcontroller as its brain, connected to a network of sensors strategically placed throughout a greenhouse environment. These sensors continuously monitor critical parameters including:
• Air temperature and humidity
• Soil moisture at various depths
• Light intensity
• CO2 levels

What sets this system apart is its dual functionality - not only does it monitor environmental conditions, but it can also respond to them. When parameters fall outside of predetermined optimal ranges, the system can automatically activate irrigation pumps, adjust ventilation, or trigger alerts.

Data logging is a crucial component of the AGMS, allowing students and researchers to analyze trends over time and correlate environmental conditions with plant growth and health. This historical data provides valuable insights for improving agricultural practices and optimizing crop yields.

The development of this system required expertise in microcontroller programming, sensor calibration, data logging, and creating a user-friendly interface for monitoring and configuration. The result is a practical tool that bridges technology and agriculture, demonstrating how IoT solutions can address real-world challenges in food production.`
    },
    { 
        id: 'ibucsm',
        name: 'iBUCSM', 
        subtitle: 'Internship Project',
        date: 'Feb 2024 - May 2024', 
        category: 'Web Application',
        icon: 'pi pi-file-edit', 
        color: '#9333ea', 
        description: 'This system is designed to streamline Bicol University\'s compliance with the Anti-Red Tape Act (ARTA) by allowing staff to monitor service ratings across different university offices. The system simplifies the experience for both service providers and users, requiring just a few taps to provide valuable input.',
        technologies: ['PHP', 'JavaScript', 'MySQL', 'Ajax', 'Bootstrap'],
        link:'https://survey.bicol-u.edu.ph/',
        linkIcon: 'pi pi-external-link',
        pathTitle: 'Visit iBUCSM Survey Site',
        images:[
            { itemImageSrc: 'https://i.ibb.co/chPjKgm/i-BUCSM0-png.png', alt: 'iBUCSM Landing Page' },
            { itemImageSrc: 'https://i.ibb.co/wdLn67z/iBUCSM1.png', alt: 'iBUCSM Survey Form' },
            { itemImageSrc: 'https://i.ibb.co/nmzjZH1/i-BUCSM2-png.png', alt: 'iBUCSM Dashboard' },
            { itemImageSrc: 'https://i.ibb.co/5Lrr9kL/i-BUCSM3-png.png', alt: 'iBUCSM Reports' },
            { itemImageSrc: 'https://i.ibb.co/pZ70VXg/i-BUCSM4-png.png', alt: 'iBUCSM Analytics' },
            { itemImageSrc: 'https://i.ibb.co/jZZwhvP/i-BUCSM5-png.png', alt: 'iBUCSM Settings' },
            { itemImageSrc: 'https://i.ibb.co/1b8vkKH/i-BUCSM6-png.png', alt: 'iBUCSM User Management' },
            { itemImageSrc: 'https://i.ibb.co/WVrRkN8/i-BUCSM7-png.png', alt: 'iBUCSM Mobile View' },
        ],
        longDescription: `iBUCSM (Bicol University Client Satisfaction Measurement) was developed during my internship to address the university's need for a streamlined system to comply with the Anti-Red Tape Act (ARTA), which mandates public service quality monitoring in the Philippines.

The system serves a critical role in gathering, analyzing, and reporting client feedback across all university offices and services. What makes iBUCSM particularly effective is its simplicity - clients can provide feedback in seconds through strategically placed kiosks or mobile devices, significantly increasing response rates compared to traditional paper surveys.

As part of the development team, I contributed to:
• Building the responsive frontend interface using JavaScript and Bootstrap
• Implementing the backend logic for data processing and storage with PHP
• Creating a comprehensive admin dashboard with real-time analytics
• Developing the reporting system that compiles data for ARTA compliance
• Ensuring secure authentication and role-based access control

The system features color-coded rating visualizations, automated report generation, and trend analysis tools that help administrators identify areas for service improvement. Department heads receive regular performance metrics, fostering healthy competition among service units and ultimately elevating the quality of services provided to students and other university stakeholders.

iBUCSM represents a significant enhancement to the university's administrative capabilities and demonstrates how thoughtfully designed software can simplify regulatory compliance while providing valuable institutional insights.`
    },
]);

const openProjectDetails = (project) => {
  scrollYPosition.value = window.scrollY;
  selectedProject.value = project;
  activeIndex.value = 0; // Reset active index when opening modal
  showDetails.value = true;
  document.body.style.overflow = 'hidden';
};

const closeProjectDetails = () => {
  showDetails.value = false;
  document.body.style.overflow = '';
  setTimeout(() => {
    window.scrollTo(0, scrollYPosition.value);
  }, 100);
};

// Custom image navigation methods
const nextImage = () => {
  if (!selectedProject.value) return;
  activeIndex.value = (activeIndex.value + 1) % selectedProject.value.images.length;
};

const prevImage = () => {
  if (!selectedProject.value) return;
  activeIndex.value = activeIndex.value === 0 
    ? selectedProject.value.images.length - 1 
    : activeIndex.value - 1;
};

// Handle thumbnail click
const onThumbnailClick = (index) => {
  activeIndex.value = index;
};

onMounted(() => {
  // Initialize any animations or interactive elements
});
</script>

<template>
  <div class="min-h-screen pt-20 px-4 md:px-10 max-w-7xl mx-auto">
    <!-- Page Header -->
    <div class="mb-16">
      <h1 class="text-4xl font-bold bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">Projects</h1>
      <p class="text-surface-300 mt-4 max-w-2xl">Explore my latest work, spanning from IoT systems to web applications. Each project represents a unique challenge solved with code and creativity.</p>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="project in events" :key="project.id" 
           class="card-effect group cursor-pointer"
           @click="openProjectDetails(project)">
        <!-- Project Card -->
        <div class="h-full flex flex-col overflow-hidden">
          <!-- Project Image -->
          <div class="h-48 overflow-hidden relative">
            <img :src="project.images[0].itemImageSrc" :alt="project.images[0].alt" 
                 class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-surface-900 to-transparent opacity-70"></div>
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 text-xs font-medium rounded-full"
                    :style="{ backgroundColor: `${project.color}30`, color: project.color }">
                {{ project.category }}
              </span>
            </div>
          </div>
          
          <!-- Project Info -->
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-xl font-semibold mb-2 text-white group-hover:text-primary-400 transition-colors duration-300">{{ project.name }}</h3>
            <p class="text-sm text-surface-300 mb-4">{{ project.subtitle }}</p>
            <p class="text-surface-400 text-sm mb-4 line-clamp-3">{{ project.description }}</p>
            
            <!-- Technologies -->
            <div class="mt-auto">
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in project.technologies.slice(0, 3)" :key="tech"
                     class="px-2 py-1 bg-surface-800 rounded-md text-xs font-medium text-surface-300">
                  {{ tech }}
                </span>
                <span v-if="project.technologies.length > 3" 
                     class="px-2 py-1 bg-surface-800 rounded-md text-xs font-medium text-surface-300">
                  +{{ project.technologies.length - 3 }}
                </span>
              </div>
              
              <div class="flex items-center text-surface-400 text-sm">
                <span>{{ project.date }}</span>
                <span class="ml-auto flex items-center gap-1 text-primary-400 group-hover:translate-x-1 transition-transform duration-300">
                  View details
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Details Modal -->
    <Teleport to="body">
      <div v-if="showDetails" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-950/80 backdrop-blur-sm overflow-y-auto">
        <div class="relative bg-surface-900 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          <!-- Close Button -->
          <button @click="closeProjectDetails" class="absolute top-4 right-4 text-surface-400 hover:text-white p-2 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div v-if="selectedProject" class="p-6 md:p-8">
            <!-- Project Header -->
            <div class="mb-8">
              <div class="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div>
                  <span class="px-3 py-1 text-xs font-medium rounded-full mb-4 inline-block"
                        :style="{ backgroundColor: `${selectedProject.color}30`, color: selectedProject.color }">
                    {{ selectedProject.category }}
                  </span>
                  <h2 class="text-3xl font-bold text-white">{{ selectedProject.name }}</h2>
                  <p class="text-surface-300">{{ selectedProject.subtitle }}</p>
                </div>
                <div class="md:ml-auto">
                  <a :href="selectedProject.link" target="_blank" 
                     class="flex items-center gap-2 bg-surface-800 hover:bg-surface-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                    <span>{{ selectedProject.pathTitle }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
              
              <!-- Project Date and Technologies -->
              <div class="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
                <div>
                  <h3 class="text-surface-400 font-medium mb-1">Timeline</h3>
                  <p class="text-surface-300">{{ selectedProject.date }}</p>
                </div>
                <div>
                  <h3 class="text-surface-400 font-medium mb-1">Technologies</h3>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tech in selectedProject.technologies" :key="tech"
                         class="px-2 py-1 bg-surface-800 rounded-md text-xs font-medium text-surface-300">
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Custom Image Gallery -->
            <div class="mb-8">
              <div class="relative bg-surface-800 rounded-lg overflow-hidden">
                <!-- Main Image -->
                <div class="relative w-full h-[400px] flex items-center justify-center">
                  <div class="w-full h-full flex items-center justify-center">
                    <img 
                      :src="selectedProject.images[activeIndex].itemImageSrc" 
                      :alt="selectedProject.images[activeIndex].alt"
                      class="max-w-full max-h-full object-contain" 
                      @error="$event.target.src = 'https://placehold.co/600x400?text=Image+Not+Available'" 
                    />
                  </div>
                  
                  <!-- Navigation Arrows -->
                  <button 
                    v-if="selectedProject.images.length > 1"
                    @click.stop="prevImage" 
                    class="absolute left-2 bg-surface-900/70 hover:bg-surface-800 rounded-full p-2 text-white transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  
                  <button 
                    v-if="selectedProject.images.length > 1"
                    @click.stop="nextImage" 
                    class="absolute right-2 bg-surface-900/70 hover:bg-surface-800 rounded-full p-2 text-white transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                  
                  <!-- Image Counter -->
                  <div v-if="selectedProject.images.length > 1" class="absolute bottom-2 right-2 bg-surface-900/70 text-white px-3 py-1 text-xs rounded-full">
                    {{ activeIndex + 1 }} / {{ selectedProject.images.length }}
                  </div>
                </div>
                
                <!-- Thumbnails -->
                <div v-if="selectedProject.images.length > 1" class="flex justify-center p-2 gap-2 overflow-x-auto bg-surface-900/50">
                  <button 
                    v-for="(image, index) in selectedProject.images" 
                    :key="index"
                    @click.stop="onThumbnailClick(index)"
                    class="w-16 h-16 flex-shrink-0 rounded overflow-hidden transition-all duration-300"
                    :class="activeIndex === index ? 'ring-2 ring-primary-400' : 'opacity-60 hover:opacity-100'"
                  >
                    <img 
                      :src="image.itemImageSrc" 
                      :alt="image.alt" 
                      class="w-full h-full object-cover"
                      @error="$event.target.src = 'https://placehold.co/100x100?text=NA'" 
                    />
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Project Description -->
            <div>
              <h3 class="text-xl font-semibold mb-4 text-white">About this project</h3>
              <div class="text-surface-300 space-y-4">
                <p v-for="(paragraph, index) in selectedProject.longDescription.split('\n\n')" 
                   :key="index"
                   class="leading-relaxed">
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>