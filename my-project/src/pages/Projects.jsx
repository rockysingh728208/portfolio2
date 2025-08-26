import React from "react";
import { Contact, ExternalLink, Github } from "lucide-react"; 

import appointmentImg from "../assets/appoint.png";
import foodImg from "../assets/foodimage.png";
import portfolio from "../assets/portfolio2img.png";
const projects = [
  {
    id: 1,
    title: "Food Delivery App",
    description: "This Food Delivery App is a fully responsive frontend project developed using React, Vite, and Tailwind CSS. The application provides an easy-to-use interface where users can browse food items by categories, view product images and details, and add them to the cart. The cart updates dynamically, showing item quantities and total price in real time. With its clean design and smooth user experience, the app effectively demonstrates a modern food delivery platform. (Note: This project is frontend-only without backend integration.)",
    image: foodImg,
    demoLink: "https://food-deliver-owner-sagar.netlify.app",
    codeLink: "https://github.com/rockysingh728208/Deliver",
    tech: ["React", "Redux"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Personal portfolio with animations and smooth navigation.",
    image: portfolio,
    demoLink: "https://portfolio2-1-f5g6.onrender.com/",
    codeLink: "https://github.com/rockysingh728208/portfolio2",
    tech: ["React", "Tailwind", "node.js,express.js,Mongodb"],
  },
  {
    id: 3,
    title: "Appointment Booking App",
    description: "A doctor appointment booking application where patients can easily browse doctors, view availability, and book appointments online. It provides secure authentication, appointment tracking, and a smooth user experience.",
    image: appointmentImg,
    demoLink: "https://mausam-frontend-swart.vercel.app",
    codeLink: "https://github.com/rockysingh728208/mausam",
    tech: ["React", "Node.js", "Express.js"],
  },
];

const Projects = () => {
  return (
    <div>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-6 py-16">
     
      <h2 className="text-4xl font-extrabold text-center mb-14 text-blue-700 tracking-wide">
         My Projects
      </h2>

      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
          
            <div className="overflow-hidden">
             <img
  src={project.image}
  alt={project.title}
  className="w-full h-auto rounded-t-2xl object-contain bg-gray-50"
/>
            </div>

           
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                {project.description}
              </p>

   
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

           
              <div className="flex justify-between mt-6">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                >
                  <Github size={16} /> View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
};

export default Projects;
