'use client'

import { Mail, Github, Linkedin, MapPin, Phone, MessageSquare, Send, Loader2 } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Open to software engineering roles, project management opportunities, and technical consulting.
            Let's build something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-blue-500/30 transition-all hover-lift">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-blue-400" />
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <a href="mailto:Dsking32@gmail.com" className="flex items-center gap-4 group">
                  <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium group-hover:text-blue-400 transition-colors">Dsking32@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:08052880962" className="flex items-center gap-4 group">
                  <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="font-medium group-hover:text-blue-400 transition-colors">08052880962</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="font-medium">Lagos, Nigeria</p>
                    <p className="text-sm text-gray-500">Open to remote & onsite opportunities</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-800">
                <h4 className="font-semibold mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/Dsking32" 
                    className="p-3 bg-gray-800/50 rounded-lg hover:bg-blue-500/10 hover:border-blue-500/30 border border-gray-700 transition-all hover-lift"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/thekingfemi32" 
                    className="p-3 bg-gray-800/50 rounded-lg hover:bg-blue-500/10 hover:border-blue-500/30 border border-gray-700 transition-all hover-lift"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:Dsking32@gmail.com" 
                    className="p-3 bg-gray-800/50 rounded-lg hover:bg-blue-500/10 hover:border-blue-500/30 border border-gray-700 transition-all hover-lift flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Availability Status */}
            <div className="bg-gradient-to-r from-blue-900/20 to-gray-900/20 rounded-xl p-6 border border-blue-500/20">
              <h4 className="font-bold text-lg mb-4">Current Status</h4>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Actively seeking opportunities</span>
              </div>
              
              <p className="text-gray-300 mb-3">Open to:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Full-time Software Engineering</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Project Management Roles</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Technical Consulting</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Contract Projects</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-blue-500/30 transition-all hover-lift">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              {/* Status Message */}
              {submitStatus.type && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input 
                      id="name"
                      name="name"
                      type="text" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="your.email@example.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input 
                    id="subject"
                    name="subject"
                    type="text" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="e.g., Job Opportunity, Project Inquiry, Collaboration"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Tell me about your project, opportunity, or how I can help..."
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                
                <div className="flex items-center justify-between">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all hover-lift disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                  <p className="text-sm text-gray-500">
                    * Required fields
                  </p>
                </div>
              </form>
              
              <div className="mt-8 pt-8 border-t border-gray-800">
                <h4 className="font-semibold mb-3">Preferred Contact Methods</h4>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-gray-800/30 rounded-full text-sm">Email</span>
                  <span className="px-4 py-2 bg-gray-800/30 rounded-full text-sm">LinkedIn</span>
                  <span className="px-4 py-2 bg-gray-800/30 rounded-full text-sm">Phone Call</span>
                  <span className="px-4 py-2 bg-gray-800/30 rounded-full text-sm">Video Meeting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}