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
  carrent,
  jobit,
  tripguide,
  threejs,
  supabase,
  gcubeinfra,
  aksharestates,
  omnifood,
  natours,
  thewildoasis,
  thaispa,
  wildOasisWebsite
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web & App Development",
    icon: web,
  },

  {
    title: "UX / UI  Design",
    icon: backend,
  },
  {
    title: "Digital Marketing",
    icon: mobile,
  },
  {
    title: "Seo & Content Writing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "figma",
    icon: figma,
  },
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
    {
    name: "Next.js",
    icon: docker,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Supabase",
    icon: supabase,
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


];

const experiences = [
  {
    title: " UX / UI Designer",
    company_name: "the Insight Solutions",
    icon: figma,
    iconBg: " #E6DEDD",
    date: "December 2022 - May 2022",
    points: [
      "User-Centered Design: Conducted user research, created personas, and developed user flows.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web designer",
    company_name: "the insight Solutions",
    icon: css,
    iconBg: "#383E56",
    date: "May 2022 - Jun 2023",
    points: [
      "Developing and maintaining web applications using Html , Css , Js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Siva Complete Solutions",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Nov 2023",
    points: [
      "Developing and maintaining web applications using Html , Css , js , Bootstrap, asp.net and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "G Cube Studios",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Dec 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sharan agency proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sharan agency does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Sharan agency optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Interior Design Studio",
    description:
      "A sleek and modern website designed for an interior design studio, featuring a contemporary UI and elegant animations to showcase their portfolio and capture potential leads.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://gcubestudio.com/",
  },

  {
    name: "G Cube Infra",
    description:
      "A sophisticated website tailored for the Architecture & Construction industry, boasting a modern user interface and tasteful animations to exhibit their portfolio and attract prospective clients.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gcubeinfra,
    source_code_link: "https://gcubeinfra.com/",
  },
   {
    name: "Hotel Management app",
    description:
      "This application is designed to manage hotel operations, including sales statistics, cabin management, user management, booking management and authentication",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: thewildoasis,
    source_code_link: "https://the-wild-oasis-i7mu.vercel.app/",
  },
   {
    name: "Hotel Booking App",
    description:
      "This application is designed to manage to reserve your cabins and authentication  ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: wildOasisWebsite,
    source_code_link: "https://the-wild-oasias-website-sharan.vercel.app/",
  },
    {
    name: "Nayan Internation Thai Spa",
    description:
      "Luxury International Thai spa bangalore",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: thaispa,
    source_code_link:
      "https://nayaninternationalthaispa.com/",
  },
  {
    name: "Akshar estates",
    description:
      "An innovative website tailored for the Real Estate sector, showcasing a sleek user interface and stylish animations to highlight property listings and captivate potential buyers.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: aksharestates,
    source_code_link: "https://aksharestates.com/",
  },
  {
    name: "Kelsi Organics",
    description:
      "A robust e-commerce platform on WordPress and WooCommerce, seamlessly integrated with a secure payment gateway,  purchasing of diverse products.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "woocommerce",
        color: "green-text-gradient",
      },
      {
        name: "payment",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://kelsiorganics.com/",
  },
  {
    name: "Omnifood",
    description:
      "A vibrant website for health-conscious foodies, delivering nutritious meals. Explore our wholesome menu and order now!",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: omnifood,
    source_code_link: "https://omnifoodprojectsharan.netlify.app/",
  },
  {
    name: "Natours",
    description:
      "Embark on unforgettable journeys with our tour website. Discover captivating destinations and book your adventure today!",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: natours,
    source_code_link:
      "https://sharanupatil8.github.io/Natours-landing-page-design/",
  },
];

export { services, technologies, experiences, testimonials, projects };
