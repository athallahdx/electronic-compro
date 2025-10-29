"use client"

import type React from "react"
import { useState } from "react"
import { productKatalog } from "../data/mockData"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"

const Katalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = [
    { id: "all", name: "All Products" },
    { id: "sensors", name: "Sensors" },
    { id: "controllers", name: "Controllers" },
    { id: "motors", name: "Motors & Drives" },
    { id: "power", name: "Power Supplies" },
    { id: "accessories", name: "Accessories" },
  ]

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const getCategoryFromName = (name: string): string => {
    if (name.toLowerCase().includes("sensor")) return "sensors"
    if (name.toLowerCase().includes("plc") || name.toLowerCase().includes("hmi")) return "controllers"
    if (name.toLowerCase().includes("motor") || name.toLowerCase().includes("vfd")) return "motors"
    if (name.toLowerCase().includes("power") || name.toLowerCase().includes("psu")) return "power"
    return "accessories"
  }

  const productsWithCategory = productKatalog.map((product, index) => ({
    ...product,
    category: getCategoryFromName(product.name),
    inStock: index % 4 !== 2,
  }))

  const filteredProducts =
    selectedCategory === "all"
      ? productsWithCategory
      : productsWithCategory.filter((product) => product.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="katalog" />

      {/* Header */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Catalog</h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Browse our extensive range of electronic components and systems for your projects.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-gray-50 rounded-lg border border-gray-100 p-6 sticky top-20">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                      selectedCategory === category.id
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content - Products */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600 text-sm">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
              </p>
              <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Name: A to Z</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-56 bg-gray-100">
                    <img
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {!product.inStock && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Out of Stock
                      </div>
                    )}
                    {product.inStock && (
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        In Stock
                      </div>
                    )}
                    {product.images.length > 1 && (
                      <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-xs font-medium">
                        +{product.images.length - 1} more
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-600">{formatPrice(product.price)}</span>
                      <button
                        disabled={!product.inStock}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          product.inStock
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        {product.inStock ? "Add to Cart" : "Unavailable"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Katalog
