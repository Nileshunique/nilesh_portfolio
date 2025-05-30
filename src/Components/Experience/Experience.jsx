import {
  achievements,
  education,
  experience,
} from "../../constant/experienctConstant";
import Heading from "../../SharedComponent/Heading/Heading";

const Experience = () => {
  return (
    <section>
      <div id="Experience" className="bg-neutral-900 text-white py-8 px-8">
        <Heading text="Experience" borderHeight={"h-9"} />
        <div className="ml-6">
          {experience.map((exp, index) => (
            <EachItem
              key={index}
              title={exp.title}
              institution={exp.company}
              duration={exp.duration}
              description={exp.description}
              image={exp.image || ""}
            />
          ))}
        </div>
      </div>

      <div className="bg-neutral-900 text-white py-8 px-8">
        <Heading text="Education" borderHeight={"h-9"} />
        <div className="ml-6">
          {education.map((edu, index) => (
            <EachItem
              key={index}
              title={edu.title}
              institution={edu.institution}
              duration={edu.duration}
              description={edu.description}
              image={edu.image || ""}
            />
          ))}
        </div>
      </div>

      {/* <div className="bg-neutral-900 text-white py-8 px-8">
        <Heading text="Achievements" borderHeight={"h-9"} />
        <div className="ml-6">
          {achievements.map((ach, index) => (
            <EachItem
              key={index}
              title={ach.title}
              institution={ach.institution}
              duration={ach.duration}
              description={ach.description}
              image={ach.image || ""}
            />
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default Experience;

const EachItem = ({
  title,
  institution,
  duration,
  description,
  image = "",
}) => {
  return (
    <div className="mb-6 flex justify-between flex-row flex-wrap md:flex-nowrap">
      <div className="flex flex-col">
        <div className="flex h-full">
          <div className="bg-yellow-400 w-4 h-4 rounded-full mr-2 -ml-[0.45rem] mt-2 mb-2 drop-shadow-glow-yellow"></div>
          <div className="h-full">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-400">{institution}</p>
          </div>
        </div>
        <div className="border-l-2 border-yellow-400 pl-4">
          {duration && (
            <div className="items-center mb-4">
              <p className="text-gray-400">{duration}</p>
            </div>
          )}
          {description && <p>{description}</p>}
        </div>
      </div>
      {image && (
        <div className="flex-shrink-0 ml-4">
          <img
            src={image}
            alt={title}
            className="h-44 object-cover rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};
