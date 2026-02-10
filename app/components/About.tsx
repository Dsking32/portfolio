export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-20 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">
          About <span className="text-blue-500">Me</span>
        </h2>
        
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            Software Engineer and Project Manager with hands-on experience in designing, building, 
            and optimizing scalable systems for digital platforms and value-added services. 
            Proficient in Node.js, Python, MongoDB, and RESTful API development with a strong focus 
            on performance, security, and maintainability.
          </p>
          
          <p>
            Currently working at <span className="text-blue-400 font-medium">Venix Partners Limited</span> as a Software Engineer & Project Manager, 
            where I collaborate with telecom providers to launch value-added services across multiple 
            mobile network operators. Previously at <span className="text-blue-400 font-medium">Bricks International Ideal Limited</span> (NYSC), 
            I developed bulk SMS services handling millions of daily messages.
          </p>
          
          <p>
            My expertise lies in integrating third-party APIs, managing databases, and implementing 
            backend solutions that power MVAS, fintech applications, and digital platforms. I excel 
            at bridging technical execution with business objectives to deliver measurable impact.
          </p>
        </div>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all hover-lift">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Backend Development</h3>
            <p className="text-gray-400">Node.js, Python, REST APIs, Microservices, Database Design</p>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all hover-lift">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Project Management</h3>
            <p className="text-gray-400">Agile/Scrum, Team Leadership, Stakeholder Management, Sprint Planning</p>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all hover-lift">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Telecom & Fintech</h3>
            <p className="text-gray-400">MVAS Systems, Bulk SMS, Payment Gateways, API Integrations</p>
          </div>
        </div>
      </div>
    </section>
  )
}