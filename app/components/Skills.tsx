const skillCategories = [
  {
    title: "Programming & Backend",
    skills: ["Node.js", "Python", "Express.js", "Django", "REST APIs", "Microservices", "Object-Oriented Programming", "C++"]
  },
  {
    title: "Databases & DevOps",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Docker", "Version Control (Git/GitHub)", "Unit Testing (Jest, PyTest)", "Postman"]
  },
  {
    title: "Project Management",
    skills: ["Agile Methodology", "Sprint Planning", "Team Leadership", "Stakeholder Management", "Risk Management", "Technical Documentation"]
  },
  {
    title: "Embedded Systems & Tools",
    skills: ["Arduino", "Proteus 8", "Raspberry Pi", "RFID Systems", "Sensor Integration", "JIRA", "Confluence"]
  }
]

export default function Skills() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-20" id="skills">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Technical <span className="text-blue-500">Skills</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={category.title}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-blue-500/30 transition-all duration-300 hover-lift fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map(skill => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-gray-800/50 rounded-full text-sm border border-gray-700 hover:border-blue-500 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Soft Skills */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center text-blue-400">Professional Competencies</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {["Problem-Solving", "Communication", "Adaptability", "Attention to Detail", "Customer Focus", "Continuous Learning", "Resilience", "Team Collaboration", "Time Management"].map(skill => (
            <span 
              key={skill}
              className="px-5 py-2 bg-gray-800/30 rounded-lg text-gray-300 border border-gray-700 hover:border-blue-400/50 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}