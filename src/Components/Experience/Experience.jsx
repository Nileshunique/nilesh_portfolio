import Heading from "../../SharedComponent/Heading/Heading";

const Experience = () => {
  return (
    <div id="Experience" className="bg-neutral-900 text-white py-8 px-8">
      <Heading text="Experience" borderHeight={"h-9"} />
      <div className="ml-6">
        <div className="mb-12">
          <div className="flex h-full">
            <div className="bg-yellow-400 w-4 h-4 rounded-full mr-2 -ml-[0.45rem] mt-2 mb-2 drop-shadow-glow-yellow"></div>
            <div className="h-full">
              <h3 className="text-xl font-semibold">MERN Stack Developer</h3>
              <p className="text-gray-400">Oodles Technology</p>
            </div>
          </div>
          <div className="border-l-2 border-yellow-400 pl-4">
            <div className="tems-center mb-4">
              <p className="text-gray-400">Since May 2022</p>
            </div>
            <p>
              {"I'm"} an experienced Frontend Developer with expertise in
              ReactJS and a deep understanding of the latest technologies. I
              have practical experience working with tools and frameworks such
              as JavaScript, Material UI, React-Bootstrap, and Redux-Toolkit. I
              have made significant contributions to projects such as Heartbeat
              Design, Plant Tagging, ReBuilding, EngageAI and KaboodleAI by
              utilizing my expertise to develop innovative solutions that meet
              project requirements. I ensures that the frontend of the projects
              I works on is intuitive and user-friendly. {"I'm"} committed to
              enhancing my skills and knowledge by staying up-to-date with
              industry trends to deliver the best possible results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
