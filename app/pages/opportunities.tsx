"use client"
import type React from "react"
import { useState } from "react"

// Define types for our data
interface Opportunity {
  id: number
  title: string
  description: string
  location: string
  theme: string
  duration: string
  imageUrl: string
}

// Sample data - in a real app this would come from an API
const opportunitiesData: Opportunity[] = [
  {
    id: 1,
    title: "Child Education Volunteer",
    description: "Help teach basic English and math to underprivileged children in rural Madurai.",
    location: "Madurai",
    theme: "childcare",
    duration: "2 weeks",
    imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Health Camp Assistant",
    description: "Assist doctors in organizing health checkup camps in urban slums of Chennai.",
    location: "Chennai",
    theme: "medical",
    duration: "3 weeks",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Wildlife Conservation Volunteer",
    description: "Participate in wildlife monitoring and conservation efforts in the Western Ghats.",
    location: "Coimbatore",
    theme: "wildlife",
    duration: "1 month",
    imageUrl: "https://images.unsplash.com/photo-1583512603806-077998240c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Temple Preservation Volunteer",
    description: "Help preserve and promote the cultural heritage of Madurai's ancient temples.",
    location: "Madurai",
    theme: "heritage",
    duration: "2 weeks",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "After-school Tutor",
    description: "Provide academic support to students in government schools after regular school hours.",
    location: "Trichy",
    theme: "education",
    duration: "3 weeks",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "Green City Initiative",
    description: "Join our urban afforestation project to increase green cover in Salem city.",
    location: "Salem",
    theme: "environment",
    duration: "1 week",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  }
]

// Define filter types
interface Filters {
  locations: string[]
  themes: string[]
  durations: string[]
}

export default function OpportunitiesPage() {
  // State for filters
  const [filters, setFilters] = useState<Filters>({
    locations: ["Madurai", "Chennai", "Coimbatore", "Trichy", "Salem"],
    themes: ["childcare", "medical", "wildlife", "heritage", "education", "environment"],
    durations: []
  })

  // Handle filter changes
  const handleFilterChange = (filterType: keyof Filters, value: string) => {
    setFilters(prev => {
      const currentFilters = [...prev[filterType]]
      const index = currentFilters.indexOf(value)
      
      if (index > -1) {
        currentFilters.splice(index, 1)
      } else {
        currentFilters.push(value)
      }
      
      return {
        ...prev,
        [filterType]: currentFilters
      }
    })
  }

  // Handle view details
  const handleViewDetails = (id: number) => {
    alert(`Opportunity ${id} details would be shown here. This would navigate to a detail page in the real application.`)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-green-700">IVY Program</h1>
            <nav className="ml-8 hidden md:block">
              <ul className="flex space-x-8">
                <li><a href="/opportunities" className="text-green-700 font-semibold">Find Opportunities</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-700">Host an Opportunity</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-700">Resources</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-700">About Us</a></li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Sign In</button>
            <button className="md:hidden text-gray-600">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          {/* Filters Sidebar */}
          <div className="w-full md:w-1/4 pr-0 md:pr-6 mb-6 md:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-4 overflow-y-auto max-h-screen">
              <h2 className="text-xl font-bold mb-6 text-gray-800">Filters</h2>
              
              {/* Location Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-gray-700">Location</h3>
                <div className="space-y-2">
                  {["Madurai", "Chennai", "Coimbatore", "Trichy", "Salem"].map(location => (
                    <div key={location} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`location-${location}`}
                        checked={filters.locations.includes(location)}
                        onChange={() => handleFilterChange("locations", location)}
                        className="mr-2 rounded text-green-600 focus:ring-green-500"
                      />
                      <label htmlFor={`location-${location}`} className="text-gray-600">{location}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Theme Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-gray-700">Theme</h3>
                <div className="space-y-2">
                  {[
                    { id: "childcare", label: "Childcare" },
                    { id: "medical", label: "Medical" },
                    { id: "wildlife", label: "Wildlife" },
                    { id: "heritage", label: "Heritage" },
                    { id: "education", label: "Education" },
                    { id: "environment", label: "Environment" }
                  ].map(theme => (
                    <div key={theme.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`theme-${theme.id}`}
                        checked={filters.themes.includes(theme.id)}
                        onChange={() => handleFilterChange("themes", theme.id)}
                        className="mr-2 rounded text-green-600 focus:ring-green-500"
                      />
                      <label htmlFor={`theme-${theme.id}`} className="text-gray-600">{theme.label}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Duration Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-gray-700">Duration</h3>
                <div className="space-y-2">
                  {[
                    { id: "less-than-week", label: "Less than 1 week" },
                    { id: "1-2-weeks", label: "1-2 weeks" },
                    { id: "2-4-weeks", label: "2-4 weeks" },
                    { id: "1-plus-months", label: "1+ months" }
                  ].map(duration => (
                    <div key={duration.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`duration-${duration.id}`}
                        checked={filters.durations.includes(duration.id)}
                        onChange={() => handleFilterChange("durations", duration.id)}
                        className="mr-2 rounded text-green-600 focus:ring-green-500"
                      />
                      <label htmlFor={`duration-${duration.id}`} className="text-gray-600">{duration.label}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <button 
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
                onClick={() => alert('Filters applied! In a real application, this would filter the opportunities.')}
              >
                Apply Filters
              </button>
            </div>
          </div>
          
          {/* Opportunities List */}
          <div className="w-full md:w-3/4">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">{opportunitiesData.length} Opportunities Available</h2>
              <div className="flex items-center">
                <span className="mr-2 text-gray-600">Sort by:</span>
                <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Most Relevant</option>
                  <option>Newest First</option>
                  <option>Nearest Location</option>
                  <option>Shortest Duration</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {opportunitiesData.map(opportunity => {
                // Determine theme badge color based on theme type
                let badgeClass = ""
                switch(opportunity.theme) {
                  case "childcare":
                    badgeClass = "bg-green-100 text-green-800"
                    break
                  case "medical":
                    badgeClass = "bg-blue-100 text-blue-800"
                    break
                  case "wildlife":
                    badgeClass = "bg-yellow-100 text-yellow-800"
                    break
                  case "heritage":
                    badgeClass = "bg-purple-100 text-purple-800"
                    break
                  case "education":
                    badgeClass = "bg-red-100 text-red-800"
                    break
                  case "environment":
                    badgeClass = "bg-teal-100 text-teal-800"
                    break
                  default:
                    badgeClass = "bg-gray-100 text-gray-800"
                }
                
                return (
                  <div key={opportunity.id} className="opportunity-card bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                    <div 
                      className="h-48 bg-cover bg-center" 
                      style={{ backgroundImage: `url(${opportunity.imageUrl})` }}
                    ></div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <span className={`theme-badge inline-block px-2 py-1 rounded-full text-xs font-semibold ${badgeClass}`}>
                          {opportunity.theme.charAt(0).toUpperCase() + opportunity.theme.slice(1)}
                        </span>
                        <span className="text-sm text-gray-500">
                          <i className="fas fa-map-marker-alt mr-1"></i> {opportunity.location}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{opportunity.title}</h3>
                      <p className="text-gray-600 mb-4">{opportunity.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          <i className="far fa-clock mr-1"></i> {opportunity.duration}
                        </span>
                        <button 
                          className="text-green-600 font-semibold hover:text-green-800"
                          onClick={() => handleViewDetails(opportunity.id)}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            
            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-2">
                <a href="#" className="px-3 py-1 rounded-md bg-green-100 text-green-800 font-semibold">1</a>
                <a href="#" className="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100">2</a>
                <a href="#" className="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100">3</a>
                <a href="#" className="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100">4</a>
                <a href="#" className="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100">Next →</a>
              </nav>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">IVY Program</h3>
              <p className="text-gray-400">Connecting youth with meaningful internship and volunteer opportunities across Tamil Nadu.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">For Volunteers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">For Organizations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Themes</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Childcare</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Medical</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Wildlife</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Heritage</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <address className="not-italic text-gray-400">
                <p>123 Gandhi Road</p>
                <p>Madurai, Tamil Nadu 625001</p>
                <p>info@ivyprogram.org</p>
                <p>+91 98765 43210</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>© 2023 IVY Program. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
