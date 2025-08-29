import profileImage from "../assets/images/profile-small.png";
import profileImage2 from "../assets/images/profile-2.png";
import EngageAi from "./../assets/images/projects/EngageAi.png";
import Heartbeat_Design from "./../assets/images/projects/Heartbeat_Design.png";
import PVDiagnostics from "./../assets/images/projects/PVDiagnostics.png";
import Reblding from "./../assets/images/projects/Reblding.png";
import Kaboodle from "./../assets/images/projects/Kaboodle.png";
import story_lego from "./../assets/images/projects/story_lego.jpeg";
import futureagi from "./../assets/images/projects/futureagi.png";
import responsive from "./../assets/images/icons/responsive.svg";
import frontEnd from "./../assets/images/icons/front-end.svg";
import backend from "./../assets/images/icons/backend.svg";
import api from "./../assets/images/icons/api.svg";
import { FaCss3, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiReacthookform,
  SiJira,
  SiLinear,
} from "react-icons/si";
import { BsGrid3X3Gap } from "react-icons/bs";
import { BiLogoJquery } from "react-icons/bi";
import { RiNextjsLine, RiNotionFill } from "react-icons/ri";

const profileName = "Nilesh Kumar";
const typeWriterTexts = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Software Engineer",
  "Web Developer",
  "UI Developer / Designer",
];
const mainJobRole = "Full Stack Developer";
const description =
  "I’m a passionate and detail-oriented Front-End Developer with over 3 years of experience building responsive, accessible, and SEO-optimized web interfaces. I specialize in modern front-end technologies including ReactJS, NextJS, NodeJS, ExpressJS and MongoDB.";
const aboutDescription = `with a passion for transforming ideas into dynamic web applications. Proficient in both front-end technologies like ReactJS and back-end frameworks such as Node.js, I focus on creating seamless user experiences. With a strong problem-solving mindset and a commitment to continuous learning, I thrive on collaboration and am always eager to tackle new challenges.`;

const personalDetail = [
  { title: "Full Name", value: "Nilesh Kumar" },
  { title: "Age", value: "27 Years" },
  { title: "Nationality", value: "Indian" },
  { title: "Languages", value: "English, Hindi" },
  { title: "Address", value: "Gurgaon, Haryana (122001)" },
  { title: "Job Type", value: "Full-Time" },
];

const profileLinks = {
  facebook: "https://www.facebook.com/nileshunique/",
  linkedin: "https://www.linkedin.com/in/nilesh-kumar-692906236/",
  whatsapp: "https://wa.me/+919911148122",
  phone: "+919911148122",
  email: "nilesh.document1@gmail.com",
  github: "https://github.com/nileshunique",
  location: "Shanti Nagar, Gurgaon, Haryana, India",
};

const devBlogProfileLink = "https://dev.to/api/articles?username=gyantocode";

const services = [
  {
    color: "bg-blue-500",
    type: "image",
    icon: responsive,
    title: "Responsive Design",
    description:
      "We craft responsive, accessible, and user-friendly UIs using modern frameworks to deliver seamless, high-performance experiences across all devices, aligned with your business goals.",
  },
  {
    color: "bg-blue-500",
    type: "image",
    icon: frontEnd,
    title: "Web Development",
    description:
      "We build dynamic, responsive web apps with smooth UX, cross-browser support, API integrations, and performance optimizations to ensure top-tier functionality across all platforms.",
  },
  {
    color: "bg-blue-500",
    type: "image",
    icon: frontEnd,
    title: "Front-End Development",
    description:
      "We create engaging, fast, and accessible front-ends with modern tools and frameworks, ensuring responsive layouts, smooth navigation, and intuitive user experiences.",
  },
  {
    color: "bg-red-500",
    type: "image",
    icon: backend,
    title: "Back-End Development",
    description:
      "We develop scalable back-end systems with secure APIs, database integration, and authentication to ensure fast, reliable, and robust application performance.",
  },
  {
    color: "bg-green-400",
    type: "image",
    icon: api,
    title: "API Development",
    description:
      "We design secure, scalable APIs for seamless data exchange between systems, supporting third-party integrations and enabling consistent app performance across platforms.",
  },
];

const skills = [
  {
    name: "ReactJS",
    icon: <FaReact />,
    type: "icon",
    color: "bg-blue-500",
    rating: "4",
    link: "https://react.dev/",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    type: "icon",
    color: "bg-blue-500",
    rating: "4",
    link: "https://redux-toolkit.js.org/",
  },
  {
    name: "NextJS",
    icon: <RiNextjsLine />,
    type: "icon",
    color: "bg-blue-500",
    rating: "4",
    link: "https://nextjs.org/",
  },
  {
    name: "React-Hook-Form",
    icon: <SiReacthookform />,
    type: "icon",
    color: "bg-pink-400",
    rating: "4",
    link: "https://javascript.info/",
  },
  {
    name: "React-Query",
    icon: <BiLogoJquery />,
    type: "icon",
    color: "bg-blue-400",
    rating: "4",
    link: "https://javascript.info/",
  },
  {
    name: "React-Ag-Grid",
    icon: <BsGrid3X3Gap />,
    type: "icon",
    color: "bg-orange-400",
    rating: "4",
    link: "https://javascript.info/",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    type: "icon",
    color: "bg-yellow-400",
    rating: "4",
    link: "https://javascript.info/",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    type: "icon",
    color: "bg-yellow-400",
    rating: "4",
    link: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS, CSS3",
    icon: <FaCss3 />,
    type: "icon",
    color: "bg-yellow-400",
    rating: "4",
    link: "https://www.w3schools.com/css/default.asp",
  },
  {
    name: "NodeJS",
    icon: <FaNodeJs />,
    type: "icon",
    color: "bg-green-400",
    rating: "4",
    link: "https://nodejs.org/",
  },
  {
    name: "ExpressJS",
    icon: <SiExpress />,
    type: "icon",
    color: "bg-green-400",
    rating: "4",
    link: "https://expressjs.com/",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    type: "icon",
    color: "bg-green-400",
    rating: "4",
    link: "https://www.mongodb.com/",
  },
  {
    name: "Git Source Control",
    icon: <FaGitAlt />,
    type: "icon",
    color: "bg-red-500",
    rating: "4",
    link: "https://git-scm.com/",
  },
  {
    name: "Jira",
    icon: <SiJira />,
    type: "icon",
    color: "bg-red-500",
    rating: "4",
    link: "https://www.atlassian.com/software/jira",
  },
  {
    name: "Linear",
    icon: <SiLinear />,
    type: "icon",
    color: "bg-red-500",
    rating: "4",
    link: "https://linear.app/",
  },
  {
    name: "Notion",
    icon: <RiNotionFill />,
    type: "icon",
    color: "bg-red-500",
    rating: "4",
    link: "https://www.notion.com/",
  },
];

const experience = [
  {
    title: "MERN Stack Developer",
    company: "Oodles Technology",
    duration: "Since May 2022",
    description: `I'm an experienced Frontend Developer with expertise in
    ReactJS and a deep understanding of the latest technologies. I
    have practical experience working with tools and frameworks such
    as JavaScript, Material UI, React-Bootstrap, and Redux-Toolkit.
    I have made significant contributions to projects such as
    Heartbeat Design, Plant Tagging, ReBuilding, EngageAI and
    KaboodleAI by utilizing my expertise to develop innovative
    solutions that meet project requirements. I ensures that the
    frontend of the projects I works on is intuitive and
    user-friendly. I'm committed to enhancing my skills and
    knowledge by staying up-to-date with industry trends to deliver
    the best possible results.`,
  },
];

const education = [
  {
    title: "Bachelor of Computer Application",
    institution: "Indira Gandhi National Open University",
    duration: "July 2015 - June 2021",
    description:
      "Completed a comprehensive undergraduate program focused on computer science and applications. Gained in-depth knowledge of programming, database management, software development, and web technologies. Developed problem-solving skills and hands-on experience through academic projects and practical assignments.",
  },
];

const achievements = [
  {
    title: "Extra Mile Award",
    institution: "Oodles Technology",
    duration: "26-03-2025",
    description:
      "Recognized for exceptional dedication, outstanding performance, and consistently going above and beyond in delivering high-quality results. Demonstrated strong problem-solving skills, teamwork, and a commitment to excellence, contributing significantly to the success of projects and organizational goals.",
    image: "https://i.ibb.co/4dXb8h7/Extra-Mile-Award.png",
  },
];

const portfolioItems = [
  {
    image: futureagi,
    alt: "Future AGI",
    title: "Future AGI",
    description:
      "This project Build, evaluate, observe, and optimize your LLMs applications 10x faster without Human-in-the-Loop or Ground Truth.",
    action: "See More",
    link: "https://app.futureagi.com/",
    projectData: {
      name: "Future AGI",
      tech: [
        "ReactJS",
        "MUI",
        "React-ag-grid",
        "React-form-hook",
        "React-query",
      ],
      description:
        "This project Build, evaluate, observe, and optimize your LLMs applications 10x faster without Human-in-the-Loop or Ground Truth.",
      responsibilities: [
        "Create UI and Integrate rest api for all the required functionality.",
        "Revamp UI according to Figma.",
        "Create multiple complex UI and its functionality as different sections.",
      ],
    },
  },
  {
    image: "",
    alt: "Caregrowth Language App",
    title: "Caregrowth Language App",
    description:
      "This is a language learning app that helps users to learn english languages with the help of AI.",
    // action: "See More",
    link: "",
    projectData: {
      name: "Caregrowth Language App",
      tech: [
        "React Native",
        "Zustand",
        "Tailwind CSS",
        "Django",
        "Postgres",
        "OpenAI",
      ],
      description:
        "This is the English language learning app. It includes google login, apple login for ios, simple email password login for all.",
      responsibilities: [
        "Create UI for all screens and REST API integration",
        "Record audio for pronunciation and send it to BE",
        "Create practices for listening, speaking, vocabulary, and writing.",
        "Build and test apk for android and test flight for IOS.",
      ],
    },
  },
  {
    image: story_lego,
    alt: "Chatwell AI Dashboard",
    title: "ChatWell AI",
    description:
      "This project works to record the thought and transcribe it. Then all thoughts within a login session combine together and generate a story in text and audio format.",
    // action: "See More",
    // link: "https://app.writeoutloud.app/",
    projectData: {
      name: "Chatwell AI",
      tech: [
        "ReactJS",
        "Redux Toolkit",
        "Tailwind",
        "Django",
        "Postgres",
        "OpenAI",
      ],
      description:
        "This project works to record the thought and transcribe it. Then all thoughts within a login session combine together and generate a story in text and audio format.",
      responsibilities: [
        "Create UI for all pages and REST API integration",
        "Record audio and send it to backend to transcribe it",
        "play recorded audio and Edit transcript data of the same audio",
        "Export PDF of the generated stories and download the audio for the same story",
      ],
    },
  },
  {
    image: Kaboodle,
    alt: "Kaboodle Dashboard",
    title: "Kaboodle",
    description:
      "It generates four different responses to a given prompt. It also has the functionality to change the tone of response for each LLM.",
    // action: "See More",
    // link: "https://www.kaboodleai.com",
    projectData: {
      name: "Kaboodle AI",
      tech: [
        "ReactJS",
        "Redux Toolkit",
        "Tailwind CSS",
        "Nodejs",
        "MongoDB",
        "Amazon Bedrock",
        "OpenAI",
        "amazon PAAPI",
      ],
      description:
        "This project works to generate four different responses to a given prompt. It also has the functionality to change the tone of response for each LLM.",
      responsibilities: [
        "REST API creation and integration",
        "Integrate Amazon bedrock api for the LLM and open ai api",
        "Create a history of the chat if the user searches for it for the first time for each prompt",
        "Integrate Amazon Product Affiliate API to show the product list according to the prompt",
      ],
    },
  },
  {
    image: EngageAi,
    alt: "EngageAi Dashboard",
    title: "Engage Ai",
    description:
      "It analyze the uploaded resumes and result in the score according to our requirement.",
    action: "See More",
    link: "https://engage-ai.tech/",
    // link: "https://recruitai.engage-ai.tech/login",
    projectData: {
      name: "Engage AI",
      tech: ["ReactJS", "Redux Toolkit", "Tailwind CSS"],
      description:
        "This project works to analyze the uploaded resumes and result in the score according to our requirement.",
      responsibilities: [
        "REST API integration",
        "Implement the functionality to logout if the user is not active for a long time",
        "Add validation to the fields and api calling functionality",
      ],
    },
  },
  {
    image: Heartbeat_Design,
    alt: "Heartbeat_Design Dashboard",
    title: "Heartbeat Design",
    description:
      "It is an IVF hospital management to provide a complete solution to manage their work.",
    action: "See More",
    link: "https://www.heartbeat.design/",
    projectData: {
      name: "Heartbeat Design",
      tech: ["ReactJS", "Apex Chart", "MUI", "Devexpress React scheduler"],
      description:
        "This project works for IVF hospital to provide a complete solution to manage their work.",
      responsibilities: [
        "Worked in the Reception module to register the patient and manage all the details of that person",
        "Worked on Laboratory view to make their work easy by easily drag and drop feature and create form for each test report",
        "REST API integration",
        "Creating UI for the project",
      ],
    },
  },
  {
    image: PVDiagnostics,
    alt: "PVDiagnostics Dashboard",
    title: "PV Diagnostics",
    description:
      "The project keeps an eye on the Solar plant by the help of a map and shows all details about each section of that plant.",
    action: "See More",
    link: "https://dashboard.pv-diagnostics.com/",
    projectData: {
      name: "PV Diagnostic",
      tech: ["ReactJS", "Highchart", "react-google-maps/api"],
      description:
        "The project keeps an eye on the Solar plant by the help of a map and shows all details about each section of that plant.",
      responsibilities: [
        "REST API integration",
        "Add filters to identify all the different types of solar plant and its module",
        "Create charts for different types of modules",
        "Render maps and create markers to identify the different modules",
      ],
    },
  },
  {
    image: Reblding,
    alt: "Reblding Dashboard",
    title: "Reblding",
    description:
      "It deals in recreating, restructuring and fixing some issues in houses and create a interface for 3 types of users login (Admin, Homeowner, Contractor).",
    action: "See More",
    link: "https://www.reblding.com/",
    projectData: {
      name: "REBLDING",
      tech: ["ReactJS", "Redux Toolkit"],
      description:
        "The project has 3 types of user login (Admin, Homeowner, Contractor). It deals in recreating, restructuring and fixing some issues in houses.",
      responsibilities: [
        "Converting previous written code in new format",
        "replace some deprecated libraries",
        "Replace graphql api to REST Api",
        "REST API integration",
      ],
    },
  },
];

const userProfile = {
  profileName: profileName,
  profileImage2: profileImage2,
  typeWriterTexts,
  description,
  profileImage,
  mainJobRole,
  aboutDescription,
  personalDetail,
  profileLinks,
  services,
  skills,
  experience,
  education,
  achievements,
  portfolioItems,
  devBlogProfileLink,
};

export default userProfile;
