import { Calendar, Building2, MapPin, Users, Target, BarChart } from 'lucide-react'

const experiences = [
  {
    company: "Venix Partners Limited",
    role: "Software Engineer & Project Manager",
    period: "May 2024 - Present",
    location: "Lagos, Nigeria",
    points: [
      "Collaborate with the team to launch value-added services across all major mobile network operators (MNOs)",
      "Engineer innovative solutions leveraging team growth and technical expertise",
      "Facilitate impactful team meetings and sprint reviews to ensure project alignment",
      "Successfully launched and onboarded over 3 Corporate Business (CBRT) clients on MTN network",
      "Work with telecom providers to integrate and optimize service delivery platforms"
    ]
  },
  {
    company: "Bricks International Ideal Limited (NYSC)",
    role: "Software Engineer / IT Support",
    period: "December 2023 - October 2024",
    location: "Lagos, Nigeria",
    points: [
      "Developed and managed bulk SMS services, working with telecom providers to ensure reliable message delivery to millions of users daily",
      "Improved delivery success rates and system performance through optimization and monitoring",
      "Built an automated system that generates and sends daily SMS usage reports to VAS partners, providing clear insights into message traffic",
      "Collaborated with telecom providers and VAS partners to resolve delivery issues and ensure high success rates",
      "Contributed to improving system performance and scalability to handle growing demand"
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 lg:px-24 py-20 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          Professional <span className="text-blue-500">Experience</span>
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={exp.company} 
              className="slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Timeline marker */}
                <div className="flex items-center md:flex-col md:items-start gap-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div className="md:hidden">
                    <Calendar className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-sm text-blue-400 font-medium md:mt-1">{exp.period}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 hover-lift">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      <div className="flex items-center gap-3 mt-2">
                        <Building2 className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300 font-medium">{exp.company}</span>
                        <MapPin className="w-4 h-4 text-gray-400 ml-2" />
                        <span className="text-gray-400 text-sm">{exp.location}</span>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <Calendar className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    {exp.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-4 mb-4 last:mb-0">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{point}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Key metrics for Venix */}
                  {exp.company === "Venix Partners Limited" && (
                    <div className="mt-6 pt-6 border-t border-gray-800">
                      <h4 className="font-semibold text-blue-400 mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Key Achievements
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-3 bg-blue-500/10 rounded-lg">
                          <div className="text-2xl font-bold text-blue-400">3+</div>
                          <div className="text-sm text-gray-400">CBRT Clients</div>
                        </div>
                        <div className="text-center p-3 bg-blue-500/10 rounded-lg">
                          <div className="text-2xl font-bold text-blue-400">All</div>
                          <div className="text-sm text-gray-400">Major MNOs</div>
                        </div>
                        <div className="text-center p-3 bg-blue-500/10 rounded-lg">
                          <div className="text-2xl font-bold text-blue-400">Agile</div>
                          <div className="text-sm text-gray-400">Sprint Management</div>
                        </div>
                        <div className="text-center p-3 bg-blue-500/10 rounded-lg">
                          <div className="text-2xl font-bold text-blue-400">Team</div>
                          <div className="text-sm text-gray-400">Collaboration</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}