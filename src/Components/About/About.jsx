import Heading from "../../SharedComponent/Heading/Heading";
import { handleNavigate } from "../../utils";
import profile from "./../../assets/images/profile-small.png";
import {
  aboutProfileHeading,
  aboutProfileList,
  services,
  skills,
} from "../../constant/aboutConstant";

function About() {
  return (
    <div id="About" className=" text-white p-8 font-sans">
      <section className="mb-12">
        <Heading text={aboutProfileHeading} borderHeight={"h-9"} />
        <div className="flex mb-4 gap-4 flex-wrap lg:flex-nowrap">
          <div className="rounded-lg mx-auto max-w-md ">
            <img
              src={profile}
              alt="Ivan Dan"
              className="rounded-lg  hover:drop-shadow-border relative"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center sm:min-w-[400px]">
            <div className="flex">
              <div className="w-1 bg-yellow-400 mr-4 flex-shrink-0"></div>
              <p className="text-gray-300 leading-relaxed">
                I’m a
                <span className="text-yellow-400"> Full Stack Developer </span>
                with a passion for transforming ideas into dynamic web
                applications. Proficient in both front-end technologies like
                ReactJS and back-end frameworks such as Node.js, I focus on
                creating seamless user experiences. With a strong
                problem-solving mindset and a commitment to continuous learning,
                I thrive on collaboration and am always eager to tackle new
                challenges.
              </p>
            </div>
            <div class="text-gray-100 p-6">
              <ul class="space-y-3">
                {aboutProfileList.map((item, index) => (
                  <li key={index} class="flex">
                    <span class="min-w-24 md:min-w-48 font-semibold text-gray-400">
                      {item.title}
                    </span>
                    <span>: {item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <Heading text="Service" borderHeight={"h-9"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-neutral-900 hover:bg-neutral-700 p-4 rounded-lg flex flex-col gap-2 items-center justify-center border border-solid border-neutral-700 transition-transform hover:scale-105"
            >
              <div className={`text-4xl mb-2 ${service.color} rounded-md p-2`}>
                {service.type === "image" ? (
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="h-16 p-1"
                  />
                ) : (
                  service.icon
                )}
              </div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-400 text-justify">
                {service.description}
              </p>
            </div>
          ))}
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
                {skill.type === "image" ? (
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
