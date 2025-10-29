import type React from "react"
import { Link } from "react-router-dom"
import { companyMetadata, motto, aboutUs, advantages } from "../data/mockData"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="home" />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Welcome to <span className="text-blue-600">{companyMetadata.companyName}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">{motto.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Portfolio
            </Link>
            <Link
              to="/katalog"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Browse Catalog
            </Link>
          </div>
        </div>
      </div>

       {/* About Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{aboutUs.description}</p>
              <p className="text-blue-600 font-medium italic mb-8">{aboutUs.footerMessage}</p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{companyMetadata.foundedAt}</div>
                  <div className="text-sm text-gray-600 mt-2">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{companyMetadata.clients}+</div>
                  <div className="text-sm text-gray-600 mt-2">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">
                    {new Date().getFullYear() - companyMetadata.foundedAt}+
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Years</div>
                </div>
              </div>
            </div>
            <div>
              <img src={aboutUs.image || "/placeholder.svg"} alt="About Us" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>


      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.slice(0, 6).map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <div className="mb-4 h-40 rounded-md overflow-hidden bg-gray-100">
                  <img
                    src={advantage.image || "/placeholder.svg"}
                    alt={advantage.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default LandingPage
