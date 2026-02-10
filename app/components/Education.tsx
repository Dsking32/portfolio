import { GraduationCap, Award, Calendar, CheckCircle } from 'lucide-react'
// Changed Certificate to CheckCircle

const education = [
  {
    institution: "Veritas University, Abuja",
    degree: "B.Sc Computer Science",
    period: "October 2019 - July 2023",
    description: "Graduated with comprehensive knowledge in software engineering, algorithms, database systems, and computer networks.",
    achievements: [
      "Developed multiple full-stack projects including e-commerce and reservation systems",
      "Gained hands-on experience with embedded systems and IoT projects",
      "Completed coursework in data structures, algorithms, and software engineering principles"
    ]
  }
]

const certifications = [
  {
    title: "IT Essentials",
    issuer: "Cisco Networking Academy",
    year: "2023",
    credential: "Cisco Certified",
    icon: <CheckCircle className="w-5 h-5" />
  },
  {
    title: "Cyber Ops Associate",
    issuer: "Cisco Networking Academy",
    year: "2023",
    credential: "Cybersecurity Fundamentals",
    icon: <CheckCircle className="w-5 h-5" />
  },
  {
    title: "Project Management Professional",
    issuer: "Project Management Institute (PMI)",
    year: "In Progress",
    credential: "PMI Certification",
    icon: <Award className="w-5 h-5" />
  }
]

export default function Education() {
  return (
    <section id="education" className="px-6 md:px-12 lg:px-24 py-20 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          Education & <span className="text-blue-500">Certifications</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-blue-400" />
              Education
            </h3>
            
            {education.map((edu) => (
              <div key={edu.institution} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 hover-lift">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold">{edu.institution}</h4>
                    <p className="text-blue-400 font-medium mt-1">{edu.degree}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{edu.description}</p>
                
                <div className="space-y-3">
                  <h5 className="font-semibold text-gray-400">Key Learning Outcomes:</h5>
                  {edu.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-blue-400" />
              Certifications & Training
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.title}
                  className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 hover-lift slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold">{cert.title}</h4>
                        <span className={`text-sm ${cert.year === "In Progress" ? "text-yellow-400 bg-yellow-500/10" : "text-blue-400 bg-blue-500/10"} px-3 py-1 rounded-full`}>
                          {cert.year}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Issued by: {cert.issuer}</span>
                        <span className="text-gray-500 font-mono text-xs">{cert.credential}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Technical Skills Summary */}
            <div className="mt-12 bg-gradient-to-r from-blue-900/20 to-gray-900/20 rounded-xl p-6 border border-blue-500/20">
              <h4 className="text-xl font-bold mb-4">Technical Proficiency</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300">Backend Development</span>
                    <span className="text-sm text-blue-400">Advanced</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-4/5"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300">Database Management</span>
                    <span className="text-sm text-blue-400">Advanced</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-3/4"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300">Project Management</span>
                    <span className="text-sm text-blue-400">Intermediate</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-2/3"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300">Embedded Systems</span>
                    <span className="text-sm text-blue-400">Intermediate</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}