<script setup>
import { ref, onMounted } from 'vue';
import Divider from 'primevue/divider';

const skills = ref([
  { 
    category: 'Frontend', 
    items: [
      { name: 'HTML/CSS', years: 3 },
      { name: 'JavaScript', years: 2 },
      { name: 'Vue.js', years: 1.5 },
      { name: 'Tailwind CSS', years: 2 },
      { name: 'Bootstrap', years: 2 }
    ] 
  },
  { 
    category: 'Backend', 
    items: [
      { name: 'PHP', years: 3 },
      { name: 'Laravel', years: 2.5 },
      { name: 'MySQL', years: 2.5 },
      { name: 'RESTful APIs', years: 2 },
      { name: 'Node.js', years: 1.5 }
    ] 
  },
  { 
    category: 'Other', 
    items: [
      { name: 'Git/GitHub', years: 3 },
      { name: 'Arduino', years: 1 },
      { name: 'Responsive Design', years: 3 },
      { name: 'UI/UX Design', years: 1 }
    ] 
  }
]);

const experiences = ref([
  {
    title: 'Software Engineer 1 at <a href="https://yns.ph/" target="_blank" class="text-primary-400 hover:text-primary-300 transition-colors duration-300">YNS JAPAN & PHILIPPINES</a>',
    period: 'July 2024 - Present',
    description: 'Working as a Software Engineer developing robust software solutions using PHP Laravel and MySQL while adapting to Japanese work culture.',
    highlights: [
      'Develop robust software solutions using PHP Laravel and MySQL, adhering to industry best practices',
      'Utilize Agile development methodologies as part of the software development life cycle (SDLC)',
      'Implement PSR-12 coding standards, maintaining high-quality and consistent code across projects',
      'Adapt to Japanese work ethics, including "Ho-Ren-So" (報告・連絡・相談: report, contact, consult) communication style'
    ]
  },
  {
    title: 'Independent Project Developer',
    period: 'January 2022 - June 2024',
    description: 'Worked on various commissioned projects and personal initiatives, delivering custom software solutions to meet specific client requirements.',
    highlights: [
      'Designed and developed custom RFID-based management systems for community organizations',
      'Created IoT solutions for environmental monitoring and home automation',
      'Built web applications with focus on user experience and administrative functionality',
      'Managed end-to-end project lifecycles from requirements gathering to deployment'
    ]
  },
  {
    title: 'Internship at Bicol University',
    period: 'Feb 2024 - May 2024',
    description: 'Developed iBUCSM, a web-based system for monitoring service ratings across university offices in compliance with the Anti-Red Tape Act.',
    highlights: [
      'Built full-stack web application using PHP, JavaScript, and MySQL',
      'Implemented responsive design for optimal user experience across devices',
      'Collaborated with university staff to gather requirements and refine features',
      'Deployed and maintained the system on university servers'
    ]
  }
]);

const education = ref([
  {
    institution: 'Bicol University',
    degree: 'Bachelor of Science in Information Technology',
    period: '2020 - 2024',
    gpa: '1.7 GWA, Cum Laude',
    thesis: 'HomeSphere: A Web-Based Home Automation System Using Microcontrollers',
    coursework: 'Database Management Systems, Web Development, Software Engineering, Data Structures and Algorithms, Information Assurance and Security, Systems Administration and Maintenance',
    achievements: [
      'Graduated Cum Laude',
      'Consistent Dean\'s Lister',
      'Project Lead at Google Developers Student Club (2023)',
      'Junior Councilor at University Student Council (2022-2023)'
    ]
  },
  {
    institution: 'Legazpi City National High School',
    degree: 'High School Diploma',
    period: '2016 - 2020',
    achievements: []
  }
]);

const certifications = ref([
  {
    name: 'CompTIA Network+ Certification',
    year: '2020',
    link: 'https://www.linkedin.com/learning/certificates/f512ce879a459385744caa662123c7e3bb68997b4469c4cb410abe9f1d176c35?trk=backfilled_certificate',
  },
  {
    name: 'Computer System Servicing NC II',
    year: '2018',
    link: 'https://e-tesda.gov.ph/course/index.php?categoryid=16',
  }
]);

const isInView = ref({});

const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isInView.value[entry.target.id] = true;
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.observe-me').forEach(el => {
    observer.observe(el);
  });
};

onMounted(() => {
  observeElements();
});
</script>

<template>
  <div class="min-h-screen pt-20 px-4 md:px-10 max-w-6xl mx-auto">
    <!-- Header Section -->
    <section id="about-header" class="observe-me mb-16 transition-all duration-500 transform" 
             :class="{ 'translate-y-0 opacity-100': isInView['about-header'], 'translate-y-10 opacity-0': !isInView['about-header'] }">
      <h1 class="text-4xl font-bold bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">About Me</h1>
      <p class="text-surface-300 mt-4 max-w-2xl">A passionate web developer with a focus on creating clean, efficient, and user-friendly digital experiences.</p>
    </section>

    <!-- Profile Section -->
    <section id="profile" class="observe-me mb-16 transition-all duration-500 transform" 
             :class="{ 'translate-y-0 opacity-100': isInView['profile'], 'translate-y-10 opacity-0': !isInView['profile'] }">
      <div class="card-effect p-8">
        <div class="flex flex-col md:flex-row gap-8 items-center">
          <div class="md:w-1/3">
            <div class="relative rounded-xl overflow-hidden aspect-square">
              <!-- Background gradient -->
              <div class="absolute inset-0 bg-gradient-to-tr from-primary-900 via-surface-800 to-purple-900 opacity-50"></div>
              
              <img src="/me.jpg" alt="Ken Perez" class="w-full h-full object-cover relative z-10" />
              
              <!-- Decorative elements -->
              <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-500/30 rounded-full blur-xl"></div>
              <div class="absolute -top-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
          
          <div class="md:w-2/3">
            <h2 class="text-2xl font-bold mb-4">Hi, I'm Ken Perez</h2>
            <p class="mb-4 text-surface-300">
              I'm a passionate web developer specializing in full-stack development primarily using PHP, JavaScript, and MySQL. With 2 years of experience in the field, I've honed my skills in building dynamic, responsive, and user-friendly web applications.
            </p>
            <p class="text-surface-300">
              My journey in tech has included creating everything from IoT solutions to database-driven web platforms. I'm currently focused on leveraging modern frameworks like Laravel and Vue.js to create seamless digital experiences.
            </p>
            
            <div class="mt-6 flex gap-4">
              <a href="https://github.com/kenprz" target="_blank" 
                 class="p-2 bg-surface-800 rounded-lg hover:bg-surface-700 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/ken-daryl-perez/" target="_blank" 
                 class="p-2 bg-surface-800 rounded-lg hover:bg-surface-700 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="mailto:kenperez.dev@gmail.com"
                 class="p-2 bg-surface-800 rounded-lg hover:bg-surface-700 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="observe-me mb-16 transition-all duration-500 transform" 
             :class="{ 'translate-y-0 opacity-100': isInView['skills'], 'translate-y-10 opacity-0': !isInView['skills'] }">
      <h2 class="text-2xl font-bold mb-6 flex items-center">
        <span>Technical Skills</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="(skillGroup, index) in skills" :key="index" class="card-effect p-6">
          <h3 class="text-xl font-medium mb-4">{{ skillGroup.category }}</h3>
          
          <div class="space-y-4">
            <div v-for="skill in skillGroup.items" :key="skill.name" class="skill-item">
              <div class="flex justify-between mb-1">
                <span class="text-sm font-medium">{{ skill.name }}</span>
                <span class="text-xs text-surface-400">{{ skill.years }} {{ skill.years === 1 ? 'year' : 'years' }}</span>
              </div>
              <div class="h-2 bg-surface-800 rounded-full overflow-hidden">
                <div class="h-full rounded-full bg-gradient-to-r from-primary-600 to-primary-400" 
                     :style="{ width: `${Math.min(skill.years * 20, 100)}%` }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="observe-me mb-16 transition-all duration-500 transform" 
             :class="{ 'translate-y-0 opacity-100': isInView['experience'], 'translate-y-10 opacity-0': !isInView['experience'] }">
      <h2 class="text-2xl font-bold mb-6 flex items-center">
        <span>Experience</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      </h2>
      
      <div class="space-y-6">
        <div v-for="(exp, index) in experiences" :key="index" class="card-effect p-6">
          <div class="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <div>
              <h3 class="text-xl font-medium" v-html="exp.title"></h3>
              <p class="text-surface-400 text-sm">{{ exp.period }}</p>
            </div>
            
            <div v-if="exp.title.includes('Bicol University')" class="md:ml-auto">
              <router-link to="/projects" class="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-300">
                <span>View related project</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </router-link>
            </div>
          </div>
          
          <p class="mb-4 text-surface-300">{{ exp.description }}</p>
          
          <ul class="space-y-2">
            <li v-for="(highlight, highlightIndex) in exp.highlights" :key="highlightIndex" class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="min-w-5 h-5 mr-2 text-primary-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-surface-300">{{ highlight }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Education and Certifications Section -->
    <section id="education" class="observe-me mb-16 transition-all duration-500 transform" 
             :class="{ 'translate-y-0 opacity-100': isInView['education'], 'translate-y-10 opacity-0': !isInView['education'] }">
      <h2 class="text-2xl font-bold mb-6 flex items-center">
        <span>Education & Certifications</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Education -->
        <div class="card-effect p-6">
          <h3 class="text-xl font-medium mb-4">Education</h3>
          
          <div v-for="(edu, index) in education" :key="index" class="mb-4">
            <h4 class="font-medium">{{ edu.institution }}</h4>
            <p class="text-primary-400">{{ edu.degree }}</p>
            <p class="text-surface-400 text-sm mb-2">{{ edu.period }}</p>
            
            <div v-if="edu.gpa" class="mb-2">
              <p class="text-surface-300 text-sm">{{ edu.gpa }}</p>
            </div>
            
            <div v-if="edu.thesis" class="mb-2">
              <p class="text-surface-300 text-sm"><span class="font-medium">Thesis:</span> {{ edu.thesis }}</p>
            </div>
            
            <div v-if="edu.coursework" class="mb-2">
              <p class="text-surface-300 text-sm"><span class="font-medium">Relevant Coursework:</span> {{ edu.coursework }}</p>
            </div>
            
            <ul v-if="edu.achievements && edu.achievements.length > 0" class="space-y-1 mt-2">
              <li v-for="(achievement, achievementIndex) in edu.achievements" :key="achievementIndex" class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="min-w-4 h-4 mr-2 text-primary-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span class="text-surface-300 text-sm">{{ achievement }}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Certifications -->
        <div class="card-effect p-6">
          <h3 class="text-xl font-medium mb-4">Certifications</h3>
          
          <div class="space-y-4">
            <div v-for="(cert, index) in certifications" :key="index">
              <a :href="cert.link" target="_blank" class="group flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="min-w-5 h-5 mr-2 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                <div>
                  <span class="group-hover:text-primary-300 transition-colors duration-300">{{ cert.name }} <span class="text-surface-400">({{ cert.year }})</span></span>
                  <div class="flex items-center text-xs text-surface-400 group-hover:text-primary-400 transition-colors duration-300 mt-1">
                    <span>View certificate</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 group-hover:translate-x-1 transition-transform duration-300" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
          
          <h3 class="text-xl font-medium my-4">Seminars</h3>
          <div class="space-y-4">
            <div class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="min-w-5 h-5 mr-2 text-primary-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <div>
                <a href="https://www.facebook.com/buipmd/" target="_blank" class="hover:text-primary-300 transition-colors duration-300">
                  IP aware BU
                </a>
              </div>
            </div>
            <div class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="min-w-5 h-5 mr-2 text-primary-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <div>
                <a href="https://www.facebook.com/DICTgovph/videos/649421814039078" target="_blank" class="hover:text-primary-300 transition-colors duration-300">
                  HackForGov:2 Regionals <span class="text-xs">(participant)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Call to Action -->
    <section id="cta" class="observe-me mb-16 transition-all duration-500 transform" 
             :class="{ 'translate-y-0 opacity-100': isInView['cta'], 'translate-y-10 opacity-0': !isInView['cta'] }">
      <div class="card-effect p-8 text-center relative overflow-hidden">
        <!-- Background accents -->
        <div class="absolute top-0 left-0 w-40 h-40 bg-primary-900/30 rounded-full filter blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-60 h-60 bg-purple-900/20 rounded-full filter blur-3xl"></div>
        
        <!-- Content -->
        <div class="relative z-10">
          <h2 class="text-2xl font-bold mb-4">Interested in working together?</h2>
          <p class="text-surface-300 mb-6 max-w-xl mx-auto">I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
          
          <router-link to="/contact" class="inline-flex items-center justify-center space-x-2 bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-primary-500/20">
            <span>Get in Touch</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>