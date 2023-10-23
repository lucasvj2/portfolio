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
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  vrtx,
  wb,
  emerson,
  threejs,
  danville,
  python,
  java,
  pinecone,
  next,
  aws,
  whiteboard,
  ourshelters,
  portfolio
} from "../assets";

import {AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

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
    id: "projects",
    title: "Projects",
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

const socials = [
  {
    name: 'github',
    icon: AiOutlineGithub
  },
  {
    name: 'linkedIn',
    icon: AiOutlineLinkedin
  }
]

const projects = [
  {
    name: "Whiteboard AI",
    description:
      "Ed-Tech GenAI platform that gives students the ability to ask questions, get summaries, and generate flashcards for college lectures, video media, and pdfs.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "pinecone",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "orange-text-gradient",
      },
      {
        name: "docker",
        color: "yellow-text-gradient",
      },
    ],
    image: whiteboard,
    source_code_link: "",
    live_link: "https://www.mywhiteboard.ai/"
  },
  {
    name: "Ourshelters",
    description:
      "Web application that enables efficient allocation and lookup of resources for the homeless based on homeless and resource availability data",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ourshelters,
    source_code_link: "https://github.com/lucasvj2/homeless-project",
    live_link: ""
  },
  {
    name: "Portfolio",
    description:
      "A portfolio website encapsulating my past projects, experiences, and skills",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/lucasvj2/portfolio",
    live_link: ""
  },
];

export {
  services,
  technologies,
  experiences,
  projects,
  navLinks,
  socials
};
