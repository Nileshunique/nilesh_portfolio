/* eslint-disable react/prop-types */
import EngageAi from "./../../assets/images/projects/EngageAi.png";
import Heartbeat_Design from "./../../assets/images/projects/Heartbeat_Design.png";
import PVDiagnostics from "./../../assets/images/projects/PVDiagnostics.png";
import Reblding from "./../../assets/images/projects/Reblding.png";
import Kaboodle from "./../../assets/images/projects/Kaboodle.png";
import story_lego from "./../../assets/images/projects/story_lego.jpeg";
import Heading from "../../SharedComponent/Heading/Heading";
import { handleNavigate } from "../../utils";

const PortfolioGrid = () => {
  return (
    <div id="Portfolio" className=" text-white min-h-screen p-8">
      <Heading text="Portfolio" borderHeight={"h-9"} />
      <div className=" flex flex-col gap-8">
        {portfolioItems.map((item, index) => (
          <div key={index} className="border border-gray-400 rounded-xl p-2">
            {index % 2 === 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <ProjectImageDetail item={item} index={index} />
                <ProjectDetail item={item.projectData} index={index} />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <ProjectDetail item={item.projectData} index={index} />
                <ProjectImageDetail item={item} index={index} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;

const ProjectDetail = (props) => {
  const { item, index } = props;
  if (!item) return;
  const even = index % 2 === 0;
  return (
    <div
      className={`w-full lg:col-span-3 ${even ? "text-left" : "text-right"}`}
    >
      <h3 className="text-lg font-bold text-yellow-400">{item?.name}</h3>
      <p>{item?.tech?.join(", ")}</p>
      <p className="text-gray-400">{item?.description}</p>
      <h3 className="text-lg underline text-yellow-300">Responsibilities</h3>
      <ul>
        {item?.responsibilities?.map((temp, i) => (
          <li key={i}>
            {even ? <span className="text-xs select-none">o </span> : ""}{temp}
            {even ? "" : <span className="text-xs select-none"> o</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProjectImageDetail = (props) => {
  const { item } = props;
  return (
    <div className="relative group overflow-hidden rounded-lg lg:col-span-2">
      <img
        src={item.image}
        alt={item.alt}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      {item.title && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-sm mb-4">{item.description}</p>
          <button
            onClick={() => handleNavigate(item.link)}
            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold hover:bg-yellow-300 transition-colors duration-300"
          >
            {item.action}
          </button>
        </div>
      )}
    </div>
  );
};

const portfolioItems = [
  {
    image: story_lego,
    alt: "Chatwell AI Dashboard",
    title: "ChatWell AI",
    description:
      "This project works to record the thought and transcribe it. Then all thoughts within a login session combine together and generate a story in text and audio format.",
    action: "See More",
    link: "https://app.writeoutloud.app/",
    projectData: {
      name: "Chatwell AI",
      tech: [
        "ReactJS", "Redux Toolkit", "Tailwind", "Django", "Postgres", "OpenAI"
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
    action: "See More",
    link: "https://www.kaboodleai.com",
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
    link: "http://191.101.232.33:5173/",
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
