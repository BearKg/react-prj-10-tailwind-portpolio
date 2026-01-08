import { TbWorldWww } from "react-icons/tb";
import { FaSquareGithub } from "react-icons/fa6";

const ProjectsCard = ({ img, url, github, title, text }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-2xl duration-300">
      {/* Image container */}
      <div className="w-full h-[284px] overflow-hidden rounded-t-lg">
        <img
          src={img}
          alt="project image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-8">
        <h4 className="mt-6 capitalize text-xl font-medium">{title}</h4>
        <p className="mt-2 text-slate-500 leading-7">{text}</p>

        <div className="flex gap-x-4 text-slate-500 mt-4">
          <a href={url}>
            <TbWorldWww className="h-8 w-8 hover:text-slate-950 cursor-pointer" />
          </a>
          <a href={github}>
            <FaSquareGithub className="h-8 w-8 hover:text-slate-950 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
