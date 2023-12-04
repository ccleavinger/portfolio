import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs, blender, coding_school, coderSchool,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Experience",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "ML Developer",
        icon: web,
    },
    {
        title: "Tutor",
        icon: mobile,
    },
    {
        title: "Eagle Scout",
        icon: backend,
    },
    {
        title: "Decathlete",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "QxQ Quantum Winter",
        company_name: "The Coding School",
        icon: coding_school,
        iconBg: "#383E56",
        date: "Feb 2023",
        points: [
            "Selected for a college-level Quantum Computing opportunity as a Sophomore.",
            "Learned the fundamentals of quantum computing and quantum physics.",
            "Collaborated with students around the globe.",
            "Ran and built code for quantum hardware using Microsoft Azure.",
        ],
    },
    {
        title: "Open Source Contributor",
        company_name: "Blender Foundation",
        icon: blender,
        iconBg: "#E6DEDD",
        date: "Feb 2023 - Present",
        points: [
            "Became an active member of the Blender Foundation.",
            "Worked to democratize digital art, 3d animation, and computer science to all.",
            "Fixed a major bug in a large codebase with over 1 million lines of code in under a day.",
            "My code is currently in production with Blender 4.0.",
        ],
    },
    {
        title: "TRAIN Student",
        company_name: "The Coding School",
        icon: coding_school,
        iconBg: "#142c69",
        date: "Aug 2023 - Present",
        points: [
            "Selected for a year-long AI course funded by the department of defense and made in collaboration with Stanford Grad School and John Hopkins University.",
            "Worked on every step of the process in training AI in a variety of contexts.",
            "Learned about and applied ethics in AI.",
            "I learned about ML Algorithms, Data Prep & Visualization, Deep Learning, and Natural Language Processing.",
        ],
    },
    {
        title: "Tutor",
        company_name: "TheCoderSchool",
        icon: coderSchool,
        iconBg: "#E6DEDD",
        date: "Oct 2023 - Present",
        points: [
            "Taught students computer science in a project based education structure.",
            "Collaborated with fellow high school students, college students, and grad students in my teaching experience.",
            "Subject complexity covered everything from printing 'hello world' to helping students make apps for congressional app challenges.",
            "Subjects I've taught include; Web Development, Game Development, Android app development, and AI development.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };