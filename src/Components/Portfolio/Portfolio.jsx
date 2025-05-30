/* eslint-disable react/prop-types */

import { portfolioItems } from "../../constant/portfolioConstant";
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <ProjectImageDetail item={item} index={index} />
                <ProjectDetail item={item.projectData} index={index} />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
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
      <p className="text-gray-400">{item?.description}</p>
      <div
        className={`flex ${
          even ? "justify-start" : "justify-end"
        } flex-wrap gap-2`}
      >
        {item.tech.map((tech, i) => (
          <span
            key={i}
            className="bg-yellow-400 text-black font-semibold text-xs px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <h3 className="text-lg underline text-yellow-300">Responsibilities</h3>
      <ul>
        {item?.responsibilities?.map((temp, i) => (
          <li key={i}>
            {even && (
              <span className="text-xs select-none text-yellow-400">o </span>
            )}
            {temp}
            {!even && (
              <span className="text-xs select-none text-yellow-400"> o</span>
            )}
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
          {item.action && (
            <button
              onClick={() => handleNavigate(item.link)}
              className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold hover:bg-yellow-300 transition-colors duration-300"
            >
              {item.action}
            </button>
          )}
        </div>
      )}
    </div>
  );
};
