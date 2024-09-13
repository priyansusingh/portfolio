"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Code} from "lucide-react"
import Link from "next/link"

// Define the Project type
type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  imageUrl: string
  githubUrl: string
  liveUrl: string
}

// Sample project data
const projects: Project[] = [
  {
    id: 1,
    title: "Digital Dairy",
    description: "DigitalDairy is a modern blogging platform that emphasizes simplicity and readability",
    tags: ["React", "TypeScript", "TailwindCSS", "Postgres"],
    imageUrl: "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F44aca216-4ecf-445e-95a2-64cd04a9a7cf%2FScreenshot_2024-03-01_at_11.25.14_AM.png?table=block&id=dc6dfd4b-93ad-40de-a583-ee4356da4867&cache=v2",
    githubUrl: "https://github.com/priyansusingh/Digital-Dairy",
    liveUrl: "https://digital-dairy-one.vercel.app/",
  },
  {
    id: 2,
    title: "Payments Application",
    description: "The Payment Application is designed to manage and process payments efficiently.",
    tags: ["React.js", "Tailwind CSS","JavaScript", "MongoDB", "Express.js"],
    imageUrl: "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F50b28b8f-6593-463d-a39f-9a26d3a504ef%2FScreenshot_2024-01-21_at_4.07.20_AM.png?table=block&id=053e8a32-8c24-44df-8a07-cbcdf48de72e&cache=v2",
    githubUrl: "git@github.com:priyansusingh/payments-application.git",
    liveUrl: "https://payments-app-iota.vercel.app/",
  },
  {
    id: 3,
    title: "To Do Application ",
    description: "This project contains a TO DO application it has following features- -Anyone can create a list of To Do's -Anyone can see their existing To Do's",
    tags: ["React", "MongoDB", "Express.js","Mongoose"],
    imageUrl: "https://i.pinimg.com/originals/c5/78/1d/c5781d72c1298dc869b74702b4ee42a0.png",
    githubUrl: "https://github.com/priyansusingh/To-DO-App",
    liveUrl: "",
  },
]

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="font-bold text-2xl mb-2 text-gray-100">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-600 text-blue-100 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300"
          >
            <Code className="mr-2" size={20} />
            <span>GitHub</span>
          </Link>
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300"
          >
            <ExternalLink className="mr-2" size={20} />
            <span>Live Demo</span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-center mb-12 text-gray-100"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}