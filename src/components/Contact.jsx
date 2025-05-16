import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-purple-500 to-green-500 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-white">
            <span className="text-white">Contact</span>
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/qblolqxa"
            method="POST"
            className="flex flex-col w-full md:w-3/4"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-white/90 border-2 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-white/90 border-2 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-white/90 border-2 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-500"
            ></textarea>

            <button className="text-white bg-gradient-to-r from-purple-600 to-green-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 font-semibold shadow-lg hover:shadow-xl">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
