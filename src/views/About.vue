<script setup>
import { ref, onMounted } from 'vue';

const skills = ref([
  {
    category: 'Frontend',
    items: [
      { name: 'HTML/CSS', years: 3 },
      { name: 'JavaScript', years: 2 },
      { name: 'Vue.js', years: 2 },
      { name: 'Tailwind CSS', years: 2 },
      { name: 'Bootstrap', years: 2 }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'PHP', years: 3 },
      { name: 'Laravel', years: 3 },
      { name: 'MySQL', years: 3 },
      { name: 'RESTful APIs', years: 2 },
      { name: 'Node.js', years: 2 }
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
    title: 'Backend Developer',
    company: 'Bellesoft Systems Inc.',
    companyLink: 'https://www.bellesoftsystems.com/',
    period: 'July 2025 - Present',
    description: 'Working as a Backend Developer to develop robust software solutions using PHP Laravel and MySQL utilizing corporate software development practices learned from previous work experience.',
    highlights: [
      'Managed and analyzed Oracle Opera PMS data structures to support hospitality system integrations and operational workflows',
      'Explored and implemented hospitality-standard software designs aligned with real-world hotel operations and PMS best practices',
      'Designed redundancy-ready backend architectures to ensure high availability and operational reliability',
      'Engineered secure API authentication mechanisms (token-based and role-based access control) for protected system integrations',
    ]
  },
  {
    title: 'Software Engineer 1',
    company: 'YNS JAPAN & PHILIPPINES',
    companyLink: 'https://yns.ph/',
    period: 'July 2024 — July 2025',
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
    company: 'Self-Employed',
    companyLink: null,
    period: 'January 2022 — June 2024',
    description: 'Worked on various commissioned projects and personal initiatives, delivering custom software solutions to meet specific client requirements.',
    highlights: [
      'Designed and developed custom RFID-based management systems for community organizations',
      'Created IoT solutions for environmental monitoring and home automation',
      'Built web applications with focus on user experience and administrative functionality',
      'Managed end-to-end project lifecycles from requirements gathering to deployment'
    ]
  },
  {
    title: 'Software Development Intern',
    company: 'Bicol University',
    companyLink: 'https://bicol-u.edu.ph',
    period: 'Feb 2024 — May 2024',
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
    period: '2020 — 2024',
    gpa: '1.7 GWA, Cum Laude',
    thesis: 'HomeSphere: A Web-Based Home Automation System Using Microcontrollers',
    achievements: [
      'Graduated Cum Laude',
      'Consistent Dean\'s Lister',
      'Project Lead at Google Developers Student Club (2023)',
    ]
  },
  {
    institution: 'Legazpi City National High School',
    degree: 'High School Diploma',
    period: '2016 — 2020',
    achievements: []
  }
]);

const certifications = ref([
  {
    name: 'CompTIA Network+ Certification',
    year: '2020',
    link: 'https://www.linkedin.com/learning/certificates/f512ce879a459385744caa662123c7e3bb68997b4469c4cb410abe9f1d176c35',
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
  }, { threshold: 0.05 });

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
};

onMounted(() => {
  observeElements();
});
</script>

<template>
  <div class="min-h-screen pt-24 pb-20 px-6 md:px-10 max-w-6xl mx-auto">

    <!-- Page Header -->
    <section id="about-header" class="reveal mb-20" :class="{ 'active': isInView['about-header'] }">
      <span class="section-number">01 // About</span>
      <h1 class="text-4xl sm:text-5xl font-bold text-white mt-2">About Me</h1>
      <p class="text-dark-300 mt-4 max-w-xl text-lg">
        A passionate web developer focused on creating clean, efficient, and user-friendly digital experiences.
      </p>
    </section>

    <!-- Profile Section -->
    <section id="profile" class="reveal mb-24" :class="{ 'active': isInView['profile'] }">
      <div class="glass-card p-8 md:p-10">
        <div class="flex flex-col md:flex-row gap-10 items-center">
          <!-- Image -->
          <div class="md:w-1/3 flex-shrink-0">
            <div class="relative rounded-2xl overflow-hidden aspect-square group">
              <img src="/me.jpg" alt="Ken Perez"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60">
              </div>
            </div>
          </div>
          <!-- Bio -->
          <div class="md:w-2/3 space-y-4">
            <h2 class="text-2xl font-bold text-white">Hi, I'm <span class="text-accent">Ken Perez</span></h2>
            <p class="text-dark-300 leading-relaxed">
              I am a Full-Stack Developer with over 3 years of experience specializing in PHP, JavaScript, and MySQL. My
              journey in tech spans from engineering IoT solutions to architecting complex, database-driven web
              platforms.
            </p>
            <p class="text-dark-300 leading-relaxed">
              Currently, I am focused on mastering software architecture, system design, and maintainable design
              patterns to build scalable, high-performance digital experiences.
            </p>
            <!-- Social Links -->
            <div class="flex gap-3 pt-4">
              <a v-for="social in [
                { href: 'https://github.com/kenprz', label: 'GitHub', icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' },
                { href: 'https://www.linkedin.com/in/ken-daryl-perez/', label: 'LinkedIn', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z' },
                { href: 'mailto:kenperez.dev@gmail.com', label: 'Email', icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6' }
              ]" :key="social.label" :href="social.href" target="_blank"
                class="w-10 h-10 rounded-lg bg-dark-800 border border-dark-700/50 flex items-center justify-center text-dark-300 hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path :d="social.icon" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="reveal mb-24" :class="{ 'active': isInView['skills'] }">
      <span class="section-number">02 // Skills</span>
      <h2 class="text-3xl font-bold text-white mt-2 mb-8">Technical Skills</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="(skillGroup, index) in skills" :key="index" class="glass-card p-6"
          :class="`reveal-delay-${index + 1}`">
          <h3 class="text-lg font-semibold text-white mb-5 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-accent"></span>
            {{ skillGroup.category }}
          </h3>

          <div class="space-y-4">
            <div v-for="skill in skillGroup.items" :key="skill.name">
              <div class="flex justify-between mb-1.5">
                <span class="text-sm font-medium text-dark-200">{{ skill.name }}</span>
                <span class="text-xs font-mono text-accent">{{ skill.years }}y</span>
              </div>
              <div class="skill-bar-bg">
                <div class="skill-bar-fill"
                  :style="{ width: isInView['skills'] ? `${Math.min(skill.years * 25, 100)}%` : '0%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="reveal mb-24" :class="{ 'active': isInView['experience'] }">
      <span class="section-number">03 // Experience</span>
      <h2 class="text-3xl font-bold text-white mt-2 mb-8">Work Experience</h2>

      <div class="relative pl-8">
        <div class="timeline-line"></div>

        <div v-for="(exp, index) in experiences" :key="index" class="timeline-item relative pb-10 last:pb-0">
          <div class="absolute left-[-25px] top-1">
            <div class="timeline-dot"></div>
          </div>

          <div class="glass-card p-6 ml-4">
            <div class="flex flex-col sm:flex-row sm:items-start gap-2 mb-3">
              <div>
                <h3 class="text-lg font-semibold text-white">{{ exp.title }}</h3>
                <p class="text-accent text-sm font-mono">
                  <a v-if="exp.companyLink" :href="exp.companyLink" target="_blank" class="hover:underline">{{
                    exp.company }}</a>
                  <span v-else>{{ exp.company }}</span>
                </p>
              </div>
              <span
                class="text-xs font-mono text-dark-400 sm:ml-auto whitespace-nowrap bg-dark-800 px-3 py-1 rounded-full">
                {{ exp.period }}
              </span>
            </div>

            <p class="text-dark-300 text-sm mb-4">{{ exp.description }}</p>

            <ul class="space-y-2">
              <li v-for="(highlight, hIdx) in exp.highlights" :key="hIdx" class="flex items-start gap-2">
                <svg class="w-4 h-4 text-accent flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span class="text-dark-300 text-sm">{{ highlight }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Education & Certifications Section -->
    <section id="education" class="reveal mb-24" :class="{ 'active': isInView['education'] }">
      <span class="section-number">04 // Education</span>
      <h2 class="text-3xl font-bold text-white mt-2 mb-8">Education & Certifications</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Education -->
        <div class="glass-card p-6">
          <h3 class="text-lg font-semibold text-white mb-5 flex items-center gap-2">
            <svg class="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            Education
          </h3>

          <div v-for="(edu, index) in education" :key="index" class="mb-6 last:mb-0 border-l-2 border-accent/30 pl-4">
            <h4 class="font-medium text-white">{{ edu.institution }}</h4>
            <p class="text-accent text-sm font-mono">{{ edu.degree }}</p>
            <p class="text-dark-400 text-xs font-mono mb-2">{{ edu.period }}</p>

            <p v-if="edu.gpa" class="text-dark-300 text-sm mb-1">
              <span class="text-dark-400">GWA:</span> {{ edu.gpa }}
            </p>
            <p v-if="edu.thesis" class="text-dark-300 text-sm mb-2">
              <span class="text-dark-400">Thesis:</span> {{ edu.thesis }}
            </p>

            <ul v-if="edu.achievements?.length" class="space-y-1 mt-2">
              <li v-for="(a, aIdx) in edu.achievements" :key="aIdx" class="flex items-start gap-2">
                <svg class="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span class="text-dark-300 text-xs">{{ a }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Certifications & Seminars -->
        <div class="glass-card p-6">
          <h3 class="text-lg font-semibold text-white mb-5 flex items-center gap-2">
            <svg class="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            Certifications
          </h3>

          <div class="space-y-4 mb-6">
            <a v-for="(cert, index) in certifications" :key="index" :href="cert.link" target="_blank"
              class="flex items-start gap-3 group p-3 -mx-3 rounded-lg hover:bg-accent/5 transition-colors duration-300">
              <div class="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path
                    d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <div>
                <span class="text-dark-200 text-sm group-hover:text-accent transition-colors">{{ cert.name }}</span>
                <span class="text-dark-500 text-xs ml-1 font-mono">({{ cert.year }})</span>
                <p
                  class="text-dark-400 text-xs mt-0.5 flex items-center gap-1 group-hover:text-accent transition-colors">
                  View certificate
                  <svg class="w-3 h-3 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </p>
              </div>
            </a>
          </div>

          <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2 pt-4 border-t border-dark-700/50">
            <svg class="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Seminars
          </h3>
          <div class="space-y-3">
            <a href="https://www.facebook.com/buipmd/" target="_blank"
              class="flex items-center gap-2 text-dark-300 text-sm hover:text-accent transition-colors link-underline">
              IP aware BU
            </a>
            <a href="https://www.facebook.com/DICTgovph/videos/649421814039078" target="_blank"
              class="flex items-center gap-2 text-dark-300 text-sm hover:text-accent transition-colors link-underline">
              HackForGov:2 Regionals <span class="text-dark-500 text-xs">(participant)</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="cta" class="reveal mb-10" :class="{ 'active': isInView['cta'] }">
      <div class="glass-card p-10 text-center relative overflow-hidden">
        <!-- Accent glow -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-accent/5 rounded-full blur-[80px]"></div>

        <div class="relative z-10">
          <h2 class="text-3xl font-bold text-white mb-4">Interested in working together?</h2>
          <p class="text-dark-300 mb-8 max-w-lg mx-auto">I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.</p>

          <router-link to="/contact" class="btn-neon btn-neon-primary">
            <span>Get in Touch</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>