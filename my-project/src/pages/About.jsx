
import { Contact } from "lucide-react";
import React from "react";

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss } from "react-icons/si";

const About = () => {
  const skills = [
    { icon: <FaHtml5 className="text-orange-500 text-6xl" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500 text-6xl" />, name: "CSS" },
    { icon: <SiJavascript className="text-yellow-400 text-6xl" />, name: "JavaScript" },
    { icon: <FaReact className="text-cyan-400 text-6xl" />, name: "React" },
    { icon: <SiTailwindcss className="text-sky-400 text-6xl" />, name: "Tailwind" },
    { icon: <FaNodeJs className="text-green-500 text-6xl" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-400 text-6xl" />, name: "Express" },
    { icon: <SiMongodb className="text-green-400 text-6xl" />, name: "MongoDB" },
    { icon: <FaPython className="text-yellow-500 text-6xl" />, name: "Python" },
  ];

  return (
    <div>
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
    
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

  
      <p className="max-w-3xl text-center text-lg leading-relaxed mb-10">
        Hi, I’m <span className="text-yellow-400 font-semibold">Vidya Sagar</span>, 
        a passionate full-stack developer with expertise in building modern and responsive web applications. 
        I love working on both <span className="text-blue-400">Frontend</span> and 
        <span className="text-green-400"> Backend</span> to deliver complete solutions.
      </p>

  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Frontend</h2>
          <p className="text-gray-300">
            Skilled in building responsive UIs with React, Tailwind CSS, and JavaScript.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">Backend</h2>
          <p className="text-gray-300">
            Experienced in developing APIs and databases using Node.js, Express, and MongoDB.
          </p>
        </div>
      </div>

   
      <h2 className="text-3xl font-bold mb-6">My Skills</h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-12 animate-marquee">
          {[...skills, ...skills].map((s, i) => (
            <div key={i} className="flex flex-col items-center min-w-[120px]">
              {s.icon}
              <span className="mt-2 text-lg">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
 
    </div>
  );
};


export default About;
