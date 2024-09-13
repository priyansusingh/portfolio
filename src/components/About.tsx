"use client";

import { motion } from "framer-motion";
import { useState, useEffect, CSSProperties } from "react";
import Link from "next/link"; // Assuming you're using Next.js

const skillCategories = [
  {
    name: "Programming Languages",
    skills: ["TypeScript", "JavaScript", "C++", "Java", "C", "Python"],
  },
  {
    name: "Tools and Platforms",
    skills: ["Git", "GitHub", "Linux", "Vercel", "Cloudflare Workers", "Postman", "Leetcode"],
  },
  {
    name: "Frameworks and Libraries",
    skills: ["Next.js", "React.js", "Express.js", "Node.js", "Tailwind CSS", "Recoil", "Bootstrap"],
  },
  {
    name: "Databases and ORMs",
    skills: ["SQL (MySQL, PostgreSQL)", "MongoDB", "Mongoose", "Prisma"],
  },
];

export default function About() {

  const resumeUrl = "https://drive.google.com/file/d/1FrrWLngxFYtl4XGYTWFhSo46eESwLN1D/view";

  // const containerStyle: CSSProperties = {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   minHeight: "100vh",
  //   width: "100%",
  // };

  const buttonStyle: CSSProperties = {
    background: "linear-gradient(to right, #3b82f6, #1d4ed8)",
    color: "white",
    fontFamily: "'CustomFont', sans-serif",
    fontSize: "1.125rem",
    padding: "0.75rem 1.5rem",
    borderRadius: "9999px",
    transition: "all 300ms ease-in-out",
    display: "inline-block",
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
  };


  const [typedText, setTypedText] = useState("");
  const fullText = "I'm a versatile full-stack developer with expertise in a wide range of technologies, passionate about creating efficient and user-friendly applications.";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-extrabold mb-8 text-center">About Me</h1>
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 mb-12">
          <motion.img
            src="https://media.licdn.com/dms/image/v2/D5603AQGFFiKPBQA-TQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724652654179?e=1731542400&v=beta&t=V24xdBL6_rQvV_B-4Pr40pTCiZgxQDLTYkw-iUIAd_o"
            alt="Developer"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          />
          <motion.p
            className="text-xl text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {typedText}
          </motion.p>
          <div className="flex justify-center items-center">
        <Link href={resumeUrl} passHref legacyBehavior>
        <a
          className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-custom text-lg px-6 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          style={buttonStyle}
        >
          View Resume
        </a>
      </Link>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                className="bg-gray-700 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 + 1, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1.2,
                        duration: 0.3,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
  
      </motion.div>
    </div>
  );
}

