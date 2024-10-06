import Heading from "../../SharedComponent/Heading/Heading";
import apaapi from "./../../assets/images/icons/apaapi_logo.png";
import bedrock from "./../../assets/images/icons/bedrock.svg";
import { SiRedux, SiJavascript, SiExpress, SiMongodb } from "react-icons/si";
import {
  FaUbuntu,
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { handleNavigate } from "../../utils";

function About() {
  return (
    <div id="About" className=" text-white p-8 font-sans">
      <section className="mb-12">
        <Heading text="About" borderHeight={"h-9"} />
        <div className="flex">
          <div className="w-1 bg-yellow-400 mr-4 flex-shrink-0"></div>
          <p className="text-gray-300 leading-relaxed">
            I’m a Full Stack Developer with a passion for transforming ideas
            into dynamic web applications. Proficient in both front-end
            technologies like React and back-end frameworks such as Node.js, I
            focus on creating seamless user experiences. With a strong
            problem-solving mindset and a commitment to continuous learning, I
            thrive on collaboration and am always eager to tackle new
            challenges.
          </p>
        </div>
      </section>

      <section>
        <Heading text="My Skills" borderHeight={"h-9"} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              onClick={() => handleNavigate(skill.link)}
              className={`cursor-pointer bg-neutral-900 hover:bg-neutral-700 p-4 rounded-lg flex flex-col items-center justify-center border border-solid border-neutral-700 transition-transform hover:scale-105`}
            >
              <div className={`text-4xl mb-2 ${skill.color} rounded-full p-2`}>
                {skill.type == "image" ? (
                  <img src={skill.icon} alt={skill.name} className="h-6" />
                ) : (
                  skill.icon
                )}
              </div>
              {/* <div className="text-xl font-bold">{skill.rating}%</div> */}
              <div className="text-sm font-medium text-gray-400">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;

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
  // {
  //   name: "MUI",
  //   icon: <SiMui />,
  //   type: "icon",
  //   color: "bg-cyan-400",
  //   rating: "4",
  // },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    type: "icon",
    color: "bg-yellow-400",
    rating: "4",
    link: "https://javascript.info/",
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
    type: "icon",
    color: "bg-yellow-400",
    rating: "4",
    link: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS",
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
    name: "Ubuntu",
    icon: <FaUbuntu />,
    type: "icon",
    color: "bg-red-500",
    rating: "4",
    link: "https://ubuntu.com/",
  },
  {
    name: "Amazon Bedrock",
    icon: bedrock,
    type: "image",
    color: "bg-yellow-500",
    rating: "4",
    link: "https://aws.amazon.com/bedrock/",
  },
  {
    name: "Amazon PAAPI Integration",
    icon: apaapi,
    type: "image",
    color: "bg-white-500",
    rating: "4",
    link: "https://affiliate-program.amazon.in/",
  },
];
