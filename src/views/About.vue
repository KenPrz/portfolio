<script setup>
import Divider from 'primevue/divider';
import Image from 'primevue/image';
</script>
<template>
    <div class="animate-fade-in flex flex-col justify-center mt-10 px-6 md:px-12 lg:px-24">
        <section data-aos="fade-up" data-aos-delay="250">
            <div class="flex flex-col">
                <div class="flex flex-col md:flex-row md:px-8 lg:px-32 space-y-3 md:space-y-0 md:space-x-3 items-center">
                    <div>
                        <h1 class="text-2xl font-bold">About Me</h1>
                        <p>Hi, I'm Ken Perez, a passionate web developer specializing in full-stack development mainly
                            using
                            PHP, JavaScript, and MySQL. With 2 years of experience in the field, I have honed my skills
                            in building dynamic, responsive, and user-friendly web applications.</p>
                    </div>
                    <div>
                        <img src="/me.jpg" alt="Ken Perez" class="w-full max-w-[500px] h-auto rounded-xl" />
                    </div>
                </div>
            </div>
        </section>
        <Divider data-aos="fade-up" data-aos-delay="280" />
        <section data-aos="fade-up" data-aos-delay="300">
            <div class="flex flex-col pb-5">
                <div class="flex flex-col md:flex-row md:px-8 lg:px-32 space-y-3 md:space-y-0 md:space-x-3 items-center">
                    <div>
                        <h1 class="text-2xl font-bold flex justify-start items-center space-x-2">
                            <span>Toolset</span><box-icon name='wrench' color="white"></box-icon>
                        </h1>
                        <p class="text-start">I primarily work with Visual Studio Code (VSCode) as my primary Integrated
                            Development Environment (IDE), coupled with Git for version control allowing me
                            to produce structured workflow.</p>
                        <br>
                        <ul>
                            <li class="flex items-center">
                                <box-icon name='dots-vertical-rounded' color="white"></box-icon>Tailwind/Bootstrap for CSS frameworks 
                            </li>
                            <li class="flex items-center">
                                <box-icon name='dots-vertical-rounded' color="white"></box-icon>
                                Vue.js for full-stack frontend development
                            </li>
                            <li class="flex items-center">
                                <box-icon name='dots-vertical-rounded' color="white"></box-icon>
                                Laravel for full-stack
                                backend development
                            </li>
                        </ul>
                    </div>
                    <div class="flex flex-col items-center md:items-start">
                        <div class="flex">
                            <box-icon name='visual-studio' type='logo' color="white" size="lg"></box-icon>
                            <box-icon name='plus' color="white" size="lg"></box-icon>
                            <box-icon type='logo' name='github' color="white" size="lg"></box-icon>
                        </div>
                        <hr class="my-2 w-full">
                        <div class="flex mt-2 w-full justify-around">
                            <box-icon name='git' type='logo' color="white" size="sm"></box-icon>
                            <box-icon name='tailwind-css' type='logo' size="sm" color="white"></box-icon>
                            <box-icon name='vuejs' type='logo' size="sm" color="white"></box-icon>
                            <box-icon name='bootstrap' type='logo' size="sm" color="white"></box-icon>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Divider data-aos="fade-up" data-aos-delay="330" />
        <section data-aos="fade-up" data-aos-delay="250">
            <div class="flex flex-col">
                <div class="flex flex-col md:flex-row md:px-8 lg:px-32 space-y-3 md:space-y-0 md:space-x-3 items-center">
                    <div>
                        <h1 class="text-2xl font-bold flex justify-start items-center space-x-2">
                            <span>Experience</span><box-icon name='briefcase-alt-2' color="white"></box-icon>
                        </h1>
                        <p>
                            Throughout my career, I have had the privilege of working on
                            <router-link class="text-md font-light hover:color-offset"
                                :class="{ 'text-offset': $route.path === '/projects' }" to="/projects">
                                <span class="ease-in duration-200 transition-all hover:text-yellow-500">
                                    <b>
                                        <i class="text-offset me-1">diverse projects</i>
                                    </b>
                                    <box-icon name='link-external' size="xs" color="yellow"></box-icon>
                                </span>
                            </router-link>
                            , from small
                            student projects to larger enterprise level systems. One of my proudest achievements was
                            <a href="https://survey.bicol-u.edu.ph/" target="_blank"
                                class="ease-in duration-200 transition-all hover:text-yellow-500">
                                <b>
                                    <i class="text-offset me-1">Bicol University's iBUCSM</i>
                                </b>
                                <box-icon name='link-external' size="xs" color="yellow"></box-icon>
                            </a>
                            My commitment to continuous learning has led me to complete
                            several certifications and courses, ensuring I stay updated with the latest trends and
                            technologies in the realm of tech as a whole.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <Divider data-aos="fade-up" data-aos-delay="280" />
        <section data-aos="fade-up" data-aos-delay="300">
            <div class="flex flex-col">
                <div class="flex flex-col md:flex-row md:px-8 lg:px-32 space-y-3 md:space-y-0 md:space-x-3 items-center">
                    <div>
                        <h1 class="text-2xl font-bold flex justify-start items-center space-x-2">
                            <span>Education and Certifications</span><box-icon name='graduation' type='solid' color="white"></box-icon>
                        </h1>
                        <p class="text-balance">
                            I am soon to be a graduate of Bicol University with a Bachelor's Degree in Information Technology this 2024. My
                            time in the university has honed my skills in programming, web development, and database
                            management. I have also completed several online courses and certifications and attended several seminars to further
                            enhance my knowledge in the field of technology.
                        </p>
                        <h1 class="mt-2 font-semibold">Certifications</h1>
                        <ul>
                            <li class="flex justify-start items-center ms-2">
                                <a href="https://e-tesda.gov.ph/course/index.php?categoryid=16" target="_blank"
                                    class="hover:text-yellow-500 transition-all duration-200">
                                    <box-icon name='link-external' size="xs" color="yellow"></box-icon>
                                    <span class="ms-1">TESDA:Computer System Servicing NC II</span>
                                </a>
                            </li>
                            <li class="flex justify-start items-center ms-2">
                                <a href="https://www.linkedin.com/learning/certificates/f512ce879a459385744caa662123c7e3bb68997b4469c4cb410abe9f1d176c35?trk=backfilled_certificate" target="_blank"
                                    class="hover:text-yellow-500 transition-all duration-200">
                                    <box-icon name='link-external' size="xs" color="yellow"></box-icon>
                                    <span class="ms-1">CompTIA Network+ (N10-007) Cert Prep: 2 The Physical Network.</span>
                                </a>
                            </li>
                        </ul>
                        <h1 class="mt-2 font-semibold">Seminars Attended</h1>
                        <ul>
                            <li class="flex justify-start items-center ms-2">
                                <a href="https://www.facebook.com/buipmd/" target="_blank"
                                    class="hover:text-yellow-500 transition-all duration-200">
                                    <box-icon name='link-external' size="xs" color="yellow"></box-icon>
                                    <span class="ms-1">IP aware BU</span>
                                </a>
                            </li>
                            <li class="flex justify-start items-center ms-2">
                                <a href="https://www.facebook.com/DICTgovph/videos/649421814039078" target="_blank"
                                    class="hover:text-yellow-500 transition-all duration-200">
                                    <box-icon name='link-external' size="xs" color="yellow"></box-icon>
                                    <span class="ms-1">HackForGov:2 Regionals <span class="text-xs">(participated)</span></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <Divider data-aos="fade-up" data-aos-delay="280" />
    </div>
</template>
