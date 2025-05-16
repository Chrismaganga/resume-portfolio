import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-r from-purple-600 to-green-500 text-white py-8">
            <div className="max-w-screen-lg mx-auto px-4 flex flex-col items-center">
                <div className="flex space-x-6 mb-4">
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-green-200 transition-colors"
                    >
                        <FaLinkedin size={30} />
                    </a>
                    <a
                        href="https://github.com/Chrismaganga"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-green-200 transition-colors"
                    >
                        <FaGithub size={30} />
                    </a>
                    <a
                        href="mailto:chrismaganga3@gmail.com"
                        className="hover:text-green-200 transition-colors"
                    >
                        <HiOutlineMail size={30} />
                    </a>
                </div>
                <p className="text-center">
                    © {new Date().getFullYear()} Chris. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer; 