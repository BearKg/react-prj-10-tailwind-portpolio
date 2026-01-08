import React from "react";
import about from "../assets/about.svg";
const About = () => {
  return (
    <div className="sample-page bg-white grid grid-cols-1 sm:grid-cols-2 gap-x-16">
      <img
        src={about}
        alt="about image"
        className="h-64 w-full hidden md:block"
      />

      <div>
        <h2 className="title">code and coffee</h2>
        <p className="mt-8 text-slate-500 tracking-wider leading-7">
          I enjoy programming because it allows me to solve problems creatively
          and build meaningful products. Coding brings me joy as I continuously
          learn new technologies, improve my skills, and turn ideas into
          practical solutions through clean and efficient code.
        </p>
      </div>
    </div>
  );
};

export default About;

// import React from "react";
// import about from "../assets/about.jpg";

// const About = () => {
//   return (
//     <div className="sample-page bg-white grid grid-cols-1 sm:grid-cols-2 gap-x-16">
//       {/* Image wrapper */}
//       <div className="relative hidden md:block mx-auto">
//         {/* Border */}
//         <div className="absolute inset-0 border-8 border-emerald-500 translate-x-8 -translate-y-8"></div>

//         {/* Image */}
//         <img
//           src={about}
//           alt="about image"
//           className="relative h-64 w-64 object-cover"
//         />
//       </div>

//       <div>
//         <h2 className="title">code and coffee</h2>
//         <p className="mt-8 text-slate-500 tracking-wider leading-7">
//           I enjoy programming because it allows me to solve problems creatively
//           and build meaningful products. Coding brings me joy as I continuously
//           learn new technologies, improve my skills, and turn ideas into
//           practical solutions through clean and efficient code.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;
