import { FaLinkedin, FaGithub } from "react-icons/fa";
import rishi from "../assets/collegepic.jpg";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div>
    <section
      id="home"
      className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-20"
    >
   
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          I'm <span className="text-purple-600">Vidya Sagar</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Full-stack MERN Developer | Real-time Web & Scalable App Specialist
        </h2>
        <p className="text-gray-400 max-w-lg">
          Specialized in MERN stack with a focus on scalable, high-performance
          apps. Experienced in real-time technologies like WebSockets and
          WebRTC for interactive user experiences.
        </p>

        {/* Social Links */}
        <div className="flex space-x-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/vidya-sagar-a8517b338/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/rockysingh728208"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500"
          >
            <FaGithub />
          </a>
        </div>

     
<Link
  to="/contact"
  className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md transition"
>
  Contact Me →
</Link>

      </div>

     
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <img
          src={rishi}
          alt="Vidya Sagar"
          className="w-72 h-72 object-cover rounded-full border-4 border-purple-600 shadow-lg"
        />
      </div>
    </section>
    </div>
  );
}
