import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    reactjs,
    git,
    threejs,
    blender,
    coding_school,
    coderSchool,
    vulkan,
    rtx,
    bleed,
    cpp,
    kt,
    dna,
    gd,
    torch,
    tf,
    ue5,
    rust, python,
} from "../../assets";

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
        name: "Python",
        icon: python,
    },
    {
        name: "C++",
        icon: cpp,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Rust",
        icon: rust,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Kotlin",
        icon: kt,
    },
    {
        name: "Unreal Engine",
        icon: ue5,
    },
    {
        name: "Genetic Engineering",
        icon: dna,
    },
    {
        name: "Godot",
        icon: gd,
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
        name: "PyTorch",
        icon: torch,
    },
    {
        name: "TensorFlow",
        icon: tf,
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
            "Subject complexity covered everything from printing 'hello world' to helping students make winning apps for congressional app challenges.",
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
        name: "Vulkan Introduction",
        description:
            "Basic multi threaded vulkan renderer that supports both basic compute shaders and a basic pbr pipeline. This project expanded my C/C++ skills and helped me learn every step of GPU processing.",
        tags: [
            {
                name: "C/C++",
                color: "blue-text-gradient",
            },
            {
                name: "Vulkan",
                color: "green-text-gradient",
            },
            {
                name: "GLFW",
                color: "pink-text-gradient",
            },
        ],
        image: vulkan,
        source_code_link: "https://github.com/ccleavinger/VulkanIntro",
    },
    {
        name: "CPU Raytracing",
        description:
            "Multi threaded CPU raytracing following the The Cherno's youtube series. This project has taught me essentials for setting up C/C++ projects on Windows and writing performant CPU-driven code.",
        tags: [
            {
                name: "C/C++",
                color: "blue-text-gradient",
            },
            {
                name: "ImGUI",
                color: "green-text-gradient",
            },
            {
                name: "Premake",
                color: "pink-text-gradient",
            },
            {
                name: "Lua",
                color: "orange-text-gradient"
            },
        ],
        image: rtx,
        source_code_link: "https://github.com/ccleavinger/Raytracing",
    },
    {
        name: "Bleed OS",
        description:
            "A minimalist toy OS that is under-development. This massive project is teaching me the importance of project management, writing memory safe and performant code, and developing on linux.",
        tags: [
            {
                name: "x86 Assembly",
                color: "blue-text-gradient",
            },
            {
                name: "C/C++",
                color: "orange-text-gradient",
            },
            {
                name: "Linux",
                color: "green-text-gradient",
            },
            {
                name: "QEMU",
                color: "pink-text-gradient",
            },
        ],
        image: bleed,
        source_code_link: "https://github.com/ccleavinger/bleed",
    },
];

export { services, technologies, experiences, testimonials, projects };