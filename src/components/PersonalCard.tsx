'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function PersonalCard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-gray-800 rounded-lg shadow-xl overflow-hidden"
      >
        <div className="p-6 space-y-4">
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
            className="bg-pink-600 text-white text-xl font-bold py-2 px-4 rounded-full inline-block"
          >
           HELLO WORLD 
          </motion.div>
          <h1 className="text-4xl font-extrabold text-white">
            Hello I&apos;m <span className="text-pink-500">Priyansu</span>.
          </h1>
          <p className="text-gray-300 text-lg">
            I&apos;m into <span className="text-pink-400">&lt;Full-Stack Development /&gt;</span>
          </p>
          <motion.div initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
            className="bg-pink-600 text-white text-xl py-2 px-4 rounded-full inline-block">
          <p className="text-gray-400">
            I am Gifted for experience with Better Service & Faster. I was able to help
            the client and successfully created with an identity.
          </p>
          </motion.div>
          <div className="flex space-x-4 text-gray-400">
            <FaLinkedin className="w-6 h-6 hover:text-pink-500 transition-colors duration-200" />
            <FaGithub className="w-6 h-6 hover:text-pink-500 transition-colors duration-200" />
            <FaTwitter className="w-6 h-6 hover:text-pink-500 transition-colors duration-200" />
            <FaInstagram className="w-6 h-6 hover:text-pink-500 transition-colors duration-200" />
            <FaEnvelope className="w-6 h-6 hover:text-pink-500 transition-colors duration-200" />
          </div>
          <div className="flex items-center text-gray-400">
            <FaPhone className="w-5 h-5 mr-2" />
            <span>+91 6294376957</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}