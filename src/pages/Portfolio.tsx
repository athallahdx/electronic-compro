import type React from "react"
import { companyPortfolio } from "../data/mockData"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="portfolio" />

      {/* Header */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Explore our successful projects and innovative solutions delivered to clients across various industries.
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyPortfolio.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 bg-gray-50 flex items-center justify-center p-6">
                <img
                  src={project.logo || "/placeholder.svg"}
                  alt={project.name}
                  className="max-w-full max-h-full object-contain"
                />
                {project.since && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Since {project.since}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
                {project.description && (
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                )}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  {project.website ? (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center transition-colors"
                    >
                      Visit Website
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  ) : (
                    <span className="text-gray-400 text-sm">Contact for details</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Portfolio
