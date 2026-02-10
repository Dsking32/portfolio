'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [imageError, setImageError] = useState(false)

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-24 py-12 gap-12 fade-in">
      {/* Left Column - Content */}
      <div className="md:w-1/2 space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Stephen Kingsley <span className="text-blue-500">Femi</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 font-medium">
            Software Engineer & Project Manager
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Building scalable MVAS, fintech platforms, and digital products. Specializing in 
            Node.js, Python, and backend systems that power millions of daily transactions.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all hover-lift"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border border-gray-700 hover:border-blue-500 text-gray-300 font-semibold rounded-lg transition-all hover-lift"
          >
            Contact Me
          </a>
        </div>
        
        {/* Quick Contact Info */}
        <div className="flex flex-wrap gap-6 pt-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-400">Available for opportunities</span>
          </div>
          <a href="mailto:Dsking32@gmail.com" className="text-blue-400 hover:text-blue-300">
            Dsking32@gmail.com
          </a>
          <a href="tel:08052880962" className="text-gray-400 hover:text-gray-300">
            08052880962
          </a>
        </div>
      </div>

      {/* Right Column - Profile Image */}
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover-lift">
          {!imageError ? (
            <Image
              src="/images/Femi.jpeg"
              alt="Stephen Kingsley Femi - Software Engineer & Project Manager"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 256px, 320px"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-900/30 to-gray-900/50 flex items-center justify-center">
              <div className="text-center">
                <span className="text-4xl font-bold text-blue-400 block">SKF</span>
                <span className="text-gray-400 text-sm mt-2">Add profile.jpg to /public/images/</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

