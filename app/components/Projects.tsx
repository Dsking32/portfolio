import { ExternalLink, Github, Database, Cpu, ShoppingCart, Plane, Thermometer, Car, Lock } from 'lucide-react'

const projects = [
  {
    title: "Veritas E-Commerce & Blog Platform",
    description: "Full-stack e-commerce platform with integrated blogging system",
    problem: "Need for a unified platform handling both e-commerce transactions and content publishing with secure user management.",
    solution: "Developed using Node.js and Express.js with PostgreSQL for data storage, JWT authentication, and responsive design.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "JWT", "REST API", "HTML/CSS", "JavaScript"],
    impact: "Enabled seamless product management, secure user authentication, and content publishing in one integrated platform",
    icon: <ShoppingCart className="w-6 h-6 text-blue-400" />,
    category: "Web Application"
  },
  {
    title: "Airplane Reservation System",
    description: "Flight booking and management system with secure operations",
    problem: "Lack of efficient system for flight search, booking, and administration with proper security measures.",
    solution: "Built with Node.js, Express.js, PostgreSQL, JWT authentication, and Docker containerization for deployment.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "JWT", "Docker", "REST API"],
    impact: "Streamlined flight booking process with secure user management and containerized deployment for scalability",
    icon: <Plane className="w-6 h-6 text-blue-400" />,
    category: "System Application"
  },
  {
    title: "Bulk SMS Management System",
    description: "Telecom VAS platform for bulk SMS delivery and reporting",
    problem: "Managing millions of daily SMS deliveries with reliable reporting and partner insights.",
    solution: "Developed automated SMS delivery system with daily reporting to VAS partners and performance monitoring.",
    tech: ["Node.js", "Telecom APIs", "Database Optimization", "Automation", "Reporting"],
    impact: "Improved delivery success rates, provided partners with daily traffic insights, handled millions of messages daily",
    icon: <Database className="w-6 h-6 text-blue-400" />,
    category: "Telecom VAS"
  },
  {
    title: "Embedded Systems Projects",
    description: "Multiple embedded systems for real-world applications",
    items: [
      {
        name: "Temperature Monitoring System",
        desc: "Real-time temperature tracking with sensors and automated alerts"
      },
      {
        name: "Traffic Management System",
        desc: "Optimized vehicle flow using microcontrollers and sensor automation"
      },
      {
        name: "Door Access Control System",
        desc: "Secure RFID-based access control with unauthorized entry prevention"
      }
    ],
    tech: ["Arduino", "Proteus 8", "Raspberry Pi", "C++", "RFID", "Sensors"],
    icon: <Cpu className="w-6 h-6 text-blue-400" />,
    category: "Embedded Systems"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured <span className="text-blue-500">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-gradient-to-b from-gray-900/50 to-gray-900/20 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover-lift group slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      {project.icon}
                    </div>
                    <span className="text-sm text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
              
              {/* For embedded projects with multiple items */}
              {project.items ? (
                <div className="space-y-4 mb-6">
                  {project.items.map((item, idx) => (
                    <div key={idx} className="bg-gray-800/30 p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        {idx === 0 && <Thermometer className="w-4 h-4 text-green-400" />}
                        {idx === 1 && <Car className="w-4 h-4 text-yellow-400" />}
                        {idx === 2 && <Lock className="w-4 h-4 text-red-400" />}
                        <h4 className="font-semibold">{item.name}</h4>
                      </div>
                      <p className="text-sm text-gray-300">{item.desc}</p>
                    </div>
                  ))}
                </div>
              ) : (
                /* For regular projects */
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-1">Challenge</h4>
                    <p className="text-sm text-gray-300">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-1">Solution</h4>
                    <p className="text-sm text-gray-300">{project.solution}</p>
                  </div>
                </div>
              )}
              
              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="font-semibold text-blue-400 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-gray-800/50 rounded-full text-xs border border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Impact */}
              <div className="pt-4 border-t border-gray-800">
                <h4 className="font-semibold text-green-400 mb-2">Impact & Outcome</h4>
                <p className="text-sm text-gray-300">{project.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}