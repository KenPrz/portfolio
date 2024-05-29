import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import PrimeVue from 'primevue/config';
import Lara from './assets/preset';
import AOS from 'aos';
import axios from 'axios';
import 'aos/dist/aos.css';
import 'boxicons';
import Home from './views/Home.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {   path: '/', 
            name: 'home',
            component: Home 
        },
        {   path: '/about', 
            name: 'about',
            component: About 
        },
        {   path: '/projects', 
            name: 'projects',
            component: Projects 
        },
        {   path: '/contact', 
            name: 'contact',
            component: Contact 
        }
    ]
})
AOS.init();
createApp(App)
.use(axios)
.use(router)
.use(PrimeVue, {
    unstyled: true,
    pt: Lara       
})
.mount('#app')
