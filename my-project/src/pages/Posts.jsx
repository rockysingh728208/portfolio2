// import React from "react";
// import { Contact, ExternalLink, Github } from "lucide-react"; 

// import appointmentImg from "../assets/appoint.png";
// import foodImg from "../assets/foodimage.png";
// import portfolio from "../assets/portfolio2img.png";
// const projects = [
//   {
//     id: 1,
//     title: "Food Delivery App",
//     description: "This Food Delivery App is a fully responsive frontend project developed using React, Vite, and Tailwind CSS. The application provides an easy-to-use interface where users can browse food items by categories, view product images and details, and add them to the cart. The cart updates dynamically, showing item quantities and total price in real time. With its clean design and smooth user experience, the app effectively demonstrates a modern food delivery platform. (Note: This project is frontend-only without backend integration.)",
//     image: foodImg,
//     demoLink: "https://food-deliver-owner-sagar.netlify.app",
//     codeLink: "https://github.com/rockysingh728208/Deliver",
//     tech: ["React", "Redux"],
//   },
//   {
//     id: 2,
//     title: "Portfolio Website",
//     description: "Personal portfolio with animations and smooth navigation.",
//     image: portfolio,
//     demoLink: "https://portfolio2-1-f5g6.onrender.com/",
//     codeLink: "https://github.com/rockysingh728208/portfolio2",
//     tech: ["React", "Tailwind", "node.js,express.js,Mongodb"],
//   },
//   {
//     id: 3,
//     title: "Appointment Booking App",
//     description: "A doctor appointment booking application where patients can easily browse doctors, view availability, and book appointments online. It provides secure authentication, appointment tracking, and a smooth user experience.",
//     image: appointmentImg,
//     demoLink: "https://mausam-frontend-swart.vercel.app",
//     codeLink: "https://github.com/rockysingh728208/mausam",
//     tech: ["React", "Node.js", "Express.js"],
//   },
// ];

// const Projects = () => {
//   return (
//     <div>
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-6 py-16">
     
//       <h2 className="text-4xl font-extrabold text-center mb-14 text-blue-700 tracking-wide">
//          My Projects
//       </h2>

      
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className="group relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
//           >
          
//             <div className="overflow-hidden">
//              <img
//   src={project.image}
//   alt={project.title}
//   className="w-full h-auto rounded-t-2xl object-contain bg-gray-50"
// />
//             </div>

           
//             <div className="p-6">
//               <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
//                 {project.title}
//               </h3>
//               <p className="text-gray-600 text-sm mt-2 leading-relaxed">
//                 {project.description}
//               </p>

   
//               <div className="flex flex-wrap gap-2 mt-3">
//                 {project.tech.map((tag, i) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

           
//               <div className="flex justify-between mt-6">
//                 <a
//                   href={project.demoLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//                 >
//                   <ExternalLink size={16} /> Live Demo
//                 </a>
//                 <a
//                   href={project.codeLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
//                 >
//                   <Github size={16} /> View Code
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>

//     </div>
//   );
// };

// export default Projects;
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Saare images import
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";
import img15 from "../assets/15.jpg";
import img16 from "../assets/16.jpg";
import img17 from "../assets/17.jpg";
import img18 from "../assets/18.jpg";
import img19 from "../assets/19.jpg";
import img20 from "../assets/20.jpg";
import img21 from "../assets/21.jpg";
import img22 from "../assets/22.jpg";
import img23 from "../assets/23.jpg";

const images = [
  img1, img2, img3, img4, img5, img6, img7,
  img8, img9, img10, img11, img12, img13,
  img14, img15, img16, img17, img18, img19,
  img20, img21, img22, img23,
];

const Posts = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // tilt logic
  const handleMouseMove = (e, index) => {
    const card = document.getElementById(`card-${index}`);
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / 20).toFixed(2);
      const rotateY = ((x - centerX) / -20).toFixed(2);
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    }
  };

  const handleMouseLeave = (index) => {
    const card = document.getElementById(`card-${index}`);
    if (card) {
      card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    }
  };

  return (
    <section className="py-12 px-6 bg-gradient-to-r from-gray-50 via-purple-50 to-gray-50">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
        ✨ Our Creative Posts ✨
      </h2>

      {/* Card Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((src, index) => (
          <motion.div
            id={`card-${index}`}
            key={index}
            className="rounded-2xl border border-gray-200 shadow-lg overflow-hidden cursor-pointer transition-transform bg-white relative group"
            style={{ transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => setSelectedImage(src)}
          >
            {/* Image */}
            <motion.img
              src={src}
              alt={`Post ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"></div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-black/90 via-gray-900/80 to-black/90 flex items-center justify-center z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition"
            >
              <X size={28} />
            </button>

            {/* Image */}
            <motion.img
              src={selectedImage}
              alt="Full view"
              className="max-w-6xl max-h-[90vh] rounded-lg shadow-2xl border border-white/20"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: -50 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Posts;
