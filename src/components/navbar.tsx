"use client"

import type React from "react"
import { Link } from "react-router-dom"
import { companyMetadata } from "../data/mockData"
import logo from "../../public/logo.png"  

interface NavbarProps {
  currentPage?: "home" | "portfolio" | "katalog" | "services"
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage = "home" }) => {
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
            <img src={logo} alt={companyMetadata.companyName} className="w-12 h-12" />
            <span className="text-xl font-semibold text-gray-900 tracking-tight hidden sm:inline">
              {companyMetadata.companyName}
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden sm:flex sm:space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
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
      </div>
    </nav>
  )
}
