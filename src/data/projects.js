export const projects = [
  {
    id: "nexus-procurement-system",
    name: "Nexus Procurement System",
    subtitle: "Enterprise Workflow Platform",
    date: "2025 — Present",
    category: "Web App",
    color: "#0ea5e9",
    description:
      "A centralized procurement workflow platform designed to digitalize and standardize the full lifecycle of Purchase Requisitions (PR), Purchase Orders (PO), and Receiving Reports (RR).",
    technologies: ["Vue.js", "Laravel", "MySQL", "Tailwind CSS", "Workflow"],
    link: "#",
    linkIcon: "github",
    pathTitle: "Internal System",
    images: [
      {
        itemImageSrc: "/images/nexus/nexus-1.png",
        alt: "Nexus Procurement Dashboard",
      },
      {
        itemImageSrc: "/images/nexus/nexus-2.png",
        alt: "Nexus Procurement Workflow",
      },
    ],
    longDescription: `Nexus Procurement System is an enterprise-grade solution built to modernize and automate the procurement process within an organization. It provides a structured, digital environment for managing the complex lifecycle of goods and services acquisition.

The platform standardizes every step of the procurement journey:
• Purchase Requisitions (PR): Streamlined initiation and multi-level approval workflows.
• Purchase Orders (PO): Automated generation and vendor management.
• Receiving Reports (RR): Verification and inventory integration.

Built with a modern tech stack (Vue.js and Laravel), Nexus ensures high performance, scalability, and a seamless user experience. The system emphasizes data integrity, audit trails, and efficient communication between departments to minimize bottlenecks and operational costs.`,
  },
  {
    id: "homesphere",
    name: "HomeSphere",
    subtitle: "Final Year Project",
    date: "Jul 2023 — Dec 2024",
    category: "IoT",
    color: "#ccff00",
    description:
      "HomeSphere, a web-based home automation system I co-developed, integrates seamlessly with devices for remote control, enhancing everyday living. Built with Laravel and ESP32, it showcases both innovation and practicality, culminating my academic journey.",
    technologies: ["Laravel", "ESP32", "MySQL", "MQTT", "Tailwind CSS"],
    link: "https://github.com/KenPrz/HomeSphere_2",
    linkIcon: "github",
    pathTitle: "View on GitHub",
    images: [
      {
        itemImageSrc: "/images/homesphere/homesphere1.png",
        alt: "HomeSphere Dashboard",
      },
      {
        itemImageSrc: "/images/homesphere/homesphere2.png",
        alt: "HomeSphere Devices",
      },
      {
        itemImageSrc: "/images/homesphere/homesphere3.png",
        alt: "HomeSphere Analytics",
      },
      {
        itemImageSrc: "/images/homesphere/homesphere4.png",
        alt: "HomeSphere Settings",
      },
      {
        itemImageSrc: "/images/homesphere/homesphere5.png",
        alt: "HomeSphere Mobile View",
      },
    ],
    longDescription: `HomeSphere represents a significant milestone in my academic journey, a comprehensive web-based home automation system that I co-developed as my final year project. The system was built with user convenience at its core, allowing homeowners to remotely control various devices throughout their living spaces.

Using Laravel as the backend framework and ESP32 microcontrollers as the hardware interface, HomeSphere creates a seamless bridge between software and hardware. The system utilizes MQTT protocol for real-time communication with connected devices, ensuring minimal latency when controlling lights, fans, door locks, and other smart home appliances.

Key features include:
• Intuitive dashboard for monitoring all connected devices
• Real-time status updates and control capabilities
• Customizable automation rules and schedules
• Mobile-responsive design for control on the go
• Energy usage analytics and optimization suggestions

The project challenged me to integrate knowledge from multiple domains including web development, IoT protocols, database management, and UI/UX design, resulting in a polished, production-ready system.`,
  },
  {
    id: "ycrs",
    name: "Youth Card RFID System",
    subtitle: "Community Project",
    date: "Jan 2024 — present (on hold)",
    category: "Web App",
    color: "#a855f7",
    description:
      "Youth Card RFID System (YCRS) commissioned by Sangguniang Kabataan Inarado Daraga chapter is a web application designed for managing event attendance and points redemption seamlessly.",
    technologies: ["PHP", "MySQL", "RFID", "Bootstrap", "jQuery"],
    link: "https://github.com",
    linkIcon: "github",
    pathTitle: "Repository is private",
    images: [
      { itemImageSrc: "/images/ycrs/YCRS1.png", alt: "YCRS Dashboard" },
      { itemImageSrc: "/images/ycrs/YCRS2.png", alt: "YCRS Events" },
      { itemImageSrc: "/images/ycrs/YCRS3.png", alt: "YCRS User Management" },
      { itemImageSrc: "/images/ycrs/YCRS4.png", alt: "YCRS Reports" },
    ],
    longDescription: `The Youth Card RFID System (YCRS) is a commissioned project for the Sangguniang Kabataan Inarado Daraga chapter, designed to modernize their youth engagement programs. This web application serves as a comprehensive platform for managing youth participation in community events and activities.

At its core, YCRS leverages RFID technology to streamline the identification and attendance tracking process. Each registered youth member receives an RFID card that serves as their unique identifier within the system.

The system incorporates a points-based incentive mechanism where youth members earn points for their participation in various community activities. These points can later be redeemed for rewards, encouraging consistent engagement and active citizenship among the youth.

Key features of the YCRS include:
• Secure user registration and profile management
• Event creation and management with attendance tracking
• Real-time points accumulation and redemption
• Comprehensive reporting and analytics dashboard
• Admin panel for system configuration and oversight

Though currently on hold, this project demonstrates my ability to create practical solutions for real-world community needs.`,
  },
  {
    id: "agms",
    name: "Arduino Greenhouse Monitoring",
    subtitle: "Agriculture Tech Project",
    date: "Jan 2024 — Mar 2024",
    category: "IoT",
    color: "#f59e0b",
    description:
      "Commissioned by Bicol University BUCAF students, the AGMS greenhouse monitoring system utilizes Arduino and a network of sensors to track temperature, humidity, and soil moisture.",
    technologies: ["Arduino", "C++", "Sensors", "Data Logging", "Automation"],
    link: "https://github.com/0roc4n/BUCAF_Project",
    linkIcon: "github",
    pathTitle: "View on GitHub",
    images: [
      { itemImageSrc: "/images/agms/AGMS1.jpg", alt: "AGMS Hardware Setup" },
      { itemImageSrc: "/images/agms/AGMS2.jpg", alt: "AGMS Sensors" },
      { itemImageSrc: "/images/agms/AGMS3.jpg", alt: "AGMS in Operation" },
    ],
    longDescription: `The Arduino Greenhouse Monitoring System (AGMS) was developed for students at the Bicol University College of Agriculture and Fisheries (BUCAF) to enhance their research capabilities and improve crop cultivation practices.

The system employs an Arduino microcontroller connected to a network of sensors strategically placed throughout a greenhouse environment. These sensors continuously monitor critical parameters including air temperature and humidity, soil moisture at various depths, light intensity, and CO2 levels.

What sets this system apart is its dual functionality — not only does it monitor environmental conditions, but it can also respond to them. When parameters fall outside of predetermined optimal ranges, the system can automatically activate irrigation pumps, adjust ventilation, or trigger alerts.

Data logging is a crucial component, allowing students and researchers to analyze trends over time and correlate environmental conditions with plant growth and health.`,
  },
  {
    id: "ibucsm",
    name: "iBUCSM",
    subtitle: "Internship Project",
    date: "Feb 2024 — May 2024",
    category: "Web App",
    color: "#9333ea",
    description:
      "This system is designed to streamline Bicol University's compliance with the Anti-Red Tape Act (ARTA) by monitoring service ratings across offices.",
    technologies: ["PHP", "JavaScript", "MySQL", "Ajax", "Bootstrap"],
    link: "https://survey.bicol-u.edu.ph/",
    linkIcon: "external",
    pathTitle: "Visit iBUCSM Survey Site",
    images: [
      {
        itemImageSrc: "/images/ibucsm/iBUCSM0.png",
        alt: "iBUCSM Landing Page",
      },
      { itemImageSrc: "/images/ibucsm/iBUCSM1.png", alt: "iBUCSM Survey Form" },
      { itemImageSrc: "/images/ibucsm/iBUCSM2.png", alt: "iBUCSM Dashboard" },
      { itemImageSrc: "/images/ibucsm/iBUCSM3.png", alt: "iBUCSM Reports" },
      { itemImageSrc: "/images/ibucsm/iBUCSM4.png", alt: "iBUCSM Analytics" },
      { itemImageSrc: "/images/ibucsm/iBUCSM5.png", alt: "iBUCSM Settings" },
      {
        itemImageSrc: "/images/ibucsm/iBUCSM6.png",
        alt: "iBUCSM User Management",
      },
      { itemImageSrc: "/images/ibucsm/iBUCSM7.png", alt: "iBUCSM Mobile View" },
    ],
    longDescription: `iBUCSM (Bicol University Client Satisfaction Measurement) was developed during my internship to address the university's need for a streamlined system to comply with the Anti-Red Tape Act (ARTA).

The system serves a critical role in gathering, analyzing, and reporting client feedback across all university offices and services. Clients can provide feedback in seconds through strategically placed kiosks or mobile devices, significantly increasing response rates compared to traditional paper surveys.

As part of the development team, I contributed to:
• Building the responsive frontend interface using JavaScript and Bootstrap
• Implementing the backend logic for data processing and storage with PHP
• Creating a comprehensive admin dashboard with real-time analytics
• Developing the reporting system that compiles data for ARTA compliance
• Ensuring secure authentication and role-based access control

The system features color-coded rating visualizations, automated report generation, and trend analysis tools that help administrators identify areas for service improvement.`,
  },
];

export function getProjectById(id) {
  return projects.find((p) => p.id === id);
}
