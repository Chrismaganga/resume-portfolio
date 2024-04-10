import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-4 m-4 rounded-mdborder-gray-200">
            <span className="text-blue-500">About</span>
          </p>
        </div>

        <p className="text-xl mt-20 text-blue-500">
          I am versatile web developer proficient in Python,
          Django, and full-stack technologies like Next.js
          and React. With Python's robust backend capabilities,
          i crafts efficient server-side solutions, leveraging Django's MVC
          framework for scalable web applications. Fluent in frontend development,
          I harnesses the power of React to build dynamic user interfaces, enhancing user experiences.
          My expertise extends to full-stack development,
          seamlessly integrating frontend and backend components for cohesive applications.
          With a keen eye for detail and a passion for innovation,

        </p>

        <br />

        <p className="text-xl text-blue-500">
          I consistently delivers high-quality solutions tailored to client needs.
          My proficiency in these technologies makes him a valuable asset in the
          ever-evolving landscape of web development.
        </p>
      </div>
    </div>
  );
};

export default About;
