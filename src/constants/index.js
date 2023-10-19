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
  vrtx,
  wb,
  emerson,
  carrent,
  jobit,
  tripguide,
  threejs,
  danville,
  python,
  java,
  pinecone,
  next,
  aws,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
      id: 'projects',
      title: 'Projects'
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
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
    name: "AWS",
    icon: aws,
  },
  {
    name: "Pinecone",
    icon: pinecone,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "President & Web Developer",
    company_name: "Vertex Nonprofit",
    icon: vrtx,
    iconBg: "#E6DEDD",
    date: "June 2020 - Sep 2022",
    points: [
      "Enhanced accessibility to homeless shelter information by curating a list of 1,000+ active shelters categorized by location and availability in the 5 states with the highest homelessness rates using data scraping, parsing and cleaning techniques",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Personalized resource accessibility for California residents by an crafting algorithm that outputs tailored recommendations for each of the 58 California counties using data-driven analysis of local resources and user location parameters",
      "• Amplified awareness and enhanced data comprehension for users by creating a React.js and d3.js web application that was visited over 5,000 times by implementing advanced data synthesis and visualization techniques",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Emerson Electric Co.",
    icon: emerson,
    iconBg: "#E6DEDD",
    date: "May 2022 - August 2022",
    points: [
      "Boosted the sales team’s efficiency by +35% by automating the company’s quote processing system using Python scripts",
      "Enhanced efficiency in price list searches by 20% through identifying key areas for improvement using Excel optimization strategies and orchestrating collaborative meetings with 4 regional managers in North America to formalize list structure",
    ],
  },
  {
    title: "Special Advisor",
    company_name: "Mayor's Office",
    icon: danville,
    iconBg: "#383E56",
    date: "March 2022 - Sep 2022",
    points: [
      "Enhanced collaboration among key homeless coordinators by facilitating strategic meetings from top homeless states using data-driven insights sourced from national statistics and comprehensive interviews with over 50 homeless shelters",
      "Optimized municipal resource allocation by crafting strategic interventions for Mayor Arnerich using data analysis",
    ],
  },
  {
    title: "Co-founder & Full stack Developer",
    company_name: "Whiteboard AI",
    icon: wb,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "Co-founded and boostrapped +$100k ARR gen-AI edtech startup with +10k MAUs & +30m TikTok impressions",
      "Spearheaded full-stack development using AWS Lambda, Docker, & Next.js with Pinecone, Langchain, & OpenAI",
      "Boosted engagement and retention +120% through refining onboarding and sign-up processes using in-depth usage data",
      "Elevated brand visibility and outreach by launching innovative advertisement campaigns through establishing an affiliate system and collaborating with influencers using strategic marketing and partnership techniques",
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

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  navLinks,
};
