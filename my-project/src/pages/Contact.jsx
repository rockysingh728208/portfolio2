import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await axios.post("https://portfolio2-ea6t.onrender.com/api/contact", form);
      const res = await axios.post("https://portfolio2-iota-three.vercel.app/api/contact", form);
      if (res.data.success) {
        toast.success("Email sent successfully!");
        setForm({ name: "", email: "", message: "" }); 
      }
    } catch (error) {
      toast.error("Failed to send message!");
    }
  };

  return ( 
    <div className="bg-gray-900 text-white py-12 px-6 mt-9">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
      
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="mb-4 text-gray-300">
            I’d love to hear from you! Whether you have a project in mind, a question, 
            or just want to connect, feel free to reach out.  
          </p>
          <div className="space-y-3">
            <p><span className="font-semibold">📍 Location:</span> Rajpura, SVGOI, Chandigarh</p>
            <p><span className="font-semibold">📞 Phone:</span> 72820 89286</p>
            <p><span className="font-semibold">✉️ Email:</span> sagarkashyap9155@example.com</p>
          </div>
          <div className="flex space-x-6 mt-6">
            <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="hover:text-gray-400">GitHub</a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="hover:text-gray-400">LinkedIn</a>
          </div>
        </div>

       
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Send me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

    
      <div className="text-center text-gray-500 mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Vidya Sagar. All rights reserved.
      </div>
    </div>
  );
};

export default Contact;
