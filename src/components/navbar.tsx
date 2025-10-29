"use client"

import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { companyMetadata } from "../data/mockData"
import logo from "../../public/logo.png"

interface NavbarProps {
  currentPage?: "home" | "portfolio" | "katalog" | "services"
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage = "home" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home", id: "home" },
    { href: "/portfolio", label: "Portfolio", id: "portfolio" },
    { href: "/katalog", label: "Katalog", id: "katalog" },
    { href: "/services", label: "Services", id: "services" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <img src={logo || "/placeholder.svg"} alt={companyMetadata.companyName} className="w-14 h-14" />
            <span className="text-xl font-semibold text-gray-900 tracking-tight hidden sm:inline">
              {companyMetadata.companyName}
            </span>
          </Link>

          {/* Desktop Navigation Links - increased button size */}
          <div className="hidden md:flex md:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={`px-6 py-3 text-lg font-medium rounded-md transition-colors ${
                  currentPage === item.id
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - added burger menu for mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - added dropdown menu for mobile view */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-lg font-medium rounded-md transition-colors ${
                    currentPage === item.id
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
