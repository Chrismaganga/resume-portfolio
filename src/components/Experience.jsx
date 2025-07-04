import React from "react";
import css from "../assets/css.png";
import django from "../assets/django.png";
import fastapi from "../assets/fastapi.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import python from "../assets/python.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: python,
      title: "Python",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: django,
      title: "Django",
      style: "shadow-green-400",
    },
    {
      id: 10,
      src: fastapi,
      title: "FastApi",
      style: "shadow-blue-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-purple-500 to-green-500 w-full h-screen pt-10"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="text-center">
          <p className="text-4xl font-bold border-b-4 border-white p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg bg-white/10 backdrop-blur-sm ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
