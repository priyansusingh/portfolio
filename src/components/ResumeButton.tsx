import Link from "next/link"
import { CSSProperties } from "react"

export default function ResumeButton() {
  // Replace this URL with the actual link to your resume
  const resumeUrl = "https://example.com/your-resume.pdf"

  // Inline styles as a fallback if Tailwind CSS is not available
  const containerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    width: "100%",
  }

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
  }

  return (
    <div className="flex justify-center items-center min-h-screen w-full" style={containerStyle}>
      <Link href={resumeUrl} passHref legacyBehavior>
        <a
          className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-custom text-lg px-6 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          style={buttonStyle}
        >
          View Resume
        </a>
      </Link>
    </div>
  )
}