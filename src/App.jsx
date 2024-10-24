import React from 'react';
import './App.css';
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <header className="bg-blue-600 text-white px-6 py-8">
          <h1 className="text-3xl font-bold">ADITYA VERMA</h1>
          <div className="flex flex-wrap gap-4 mt-4">
            <a href="mailto:adityaaverma2002@gmail.com" className="hover:underline">
              📧 adityaaverma2002@gmail.com
            </a>
            <a href="mailto:aa0680@srmist.edu.in" className="hover:underline">
              📧 aa0680@srmist.edu.in
            </a>
            <a href="tel:8240374166" className="hover:underline">
              📱 8240374166
            </a>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/Aditya227-tech" className="hover:underline">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/aditya-verma-3b664323b" className="hover:underline">
              LinkedIn
            </a>
          </div>
        </header>

        <main className="p-6">
          {/* Profile Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <p className="text-gray-700">
              Enthusiastic about applying strong analytical and problem-solving skills to the world of software development. 
              Continuously seeking opportunities to learn and grow as a developer.
            </p>
          </section>

          {/* Key Expertise Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Key Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {['C++', 'JAVA', 'HTML', 'CSS', 'JAVASCRIPT', 'NODE.JS', 'REACT.JS', 'NEXT.JS', 
                'WEB DEVELOPMENT', 'WEB APPLICATION DEVELOPMENT', 'FRONTEND APP DEVELOPMENT'].map((skill) => (
                <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">SRM Institute of Science and Technology</h3>
                <p className="text-gray-600">Chennai, Tamil Nadu</p>
                <p className="text-gray-700">CGPA - 7.03</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Gems Akademia International School</h3>
                <p className="text-gray-600">Kolkata, West Bengal</p>
              </div>
            </div>
          </section>

          {/* Internships Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Internships</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">Skyscanner - Front-End Software Engineer</h3>
                <p className="text-gray-600">Feb 12, 2024 - Mar 12, 2024 | Chennai, Tamil Nadu</p>
                <p className="text-gray-700 mt-2">
                  Worked on building a web application using Backpack library, implementing 
                  functionality for reservation date picking with calendar integration.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Devtown - Full Stack Web Developer</h3>
                <p className="text-gray-600">Oct 15, 2023 - Dec 15, 2024 | Chennai, Tamil Nadu</p>
                <p className="text-gray-700 mt-2">
                  Worked as a Full Stack Web Developer under the mentorship of Rohan Kinnal.
                </p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Home-Food-Recipie-React-app",
                  tech: "REACT.JS, NODE.JS",
                  desc: "This project is about creating a Home Food Recipie React app, created with the help oh Node.js and React.js",
                  link: "https://github.com/Aditya227-tech/Home-Food-Recipie-React-app"
                },
                {
                  title: "Headset-Store-Website.com",
                  tech: "HTML, CSS, JAVASCRIPT, NODE.JS, REACT.JS, Stripe",
                  desc: "A Hotel booking website using Node.js,  React.js and Stripe",
                  link: "https://github.com/Aditya227-tech/Headset-Store-Website.com"
                },
                {
                  title: "HotelBooker.com",
                  tech: "HTML, CSS, JAVASCRIPT, NODE.JS, REACT.JS",
                  desc: "A Hotel booking website using Node.js and React.js",
                  link: "https://github.com/Aditya227-tech/Aditya227-tech-HotelBooker.com"
                },
                {
                  title: "Car-Rental-Website-React",
                  tech: "HTML, CSS, JAVASCRIPT, NODE.JS, REACT.JS",
                  desc: "A Car Rental Website created using Node.js React.js",
                  link: "https://github.com/Aditya227-tech/Car-Rental-Website-React"
                }
              ].map((project) => (
                <div key={project.title} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold">
                    <a href={project.link} className="text-blue-600 hover:underline">{project.title}</a>
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{project.tech}</p>
                  <p className="text-gray-700 mt-2">{project.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Personal Details Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Personal Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p><span className="font-semibold">Date of Birth:</span> 20 September, 2002</p>
                <p><span className="font-semibold">Gender:</span> Male</p>
                <p><span className="font-semibold">Blood Group:</span> A+</p>
                <p><span className="font-semibold">Languages:</span> English, Hindi, Bengali</p>
              </div>
              <div>
                <p><span className="font-semibold">Current Address:</span> Maha Lakshmi PG, Easwaran Nagar, Ramapuram, Chennai - 600089</p>
                <p><span className="font-semibold">Permanent Address:</span> 132/1, Upen Bannerjee Road, Behala Paurnashree, Kolkata - 700060</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;