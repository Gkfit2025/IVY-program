<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IVY Volunteering Platform</title>
  <script src="https://cdn.jsdelivr.net/npm/react@18/umd/react.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    const { useState, useEffect } = React;

    const IVYHomePage = () => {
      const [searchFilters, setSearchFilters] = useState({
        location: "",
        theme: "",
        duration: "",
        type: "",
      });

      const [blink, setBlink] = useState(false);
      const blinkInterval = 400;

      const handleJoinMouseOver = (e) => {
        setBlink(true);
      };

      const handleJoinMouseOut = (e) => {
        setBlink(false);
        e.currentTarget.style.background = "#FA6916";
        e.currentTarget.style.color = "#030303";
      };

      const joinButtonStyle = {
        background: blink ? "#FCF5F5" : "#FA6916",
        color: blink ? "#030303" : "#030303",
        fontWeight: 700,
        transition: "background 0.2s, color 0.2s",
      };

      useEffect(() => {
        let timer;
        if (blink) {
          timer = setInterval(() => {
            setBlink((prev) => !prev);
          }, blinkInterval);
        }
        return () => {
          if (timer) clearInterval(timer);
        };
      }, [blink]);

      const handleSearch = () => {
        const params = new URLSearchParams();
        Object.entries(searchFilters).forEach(([key, value]) => {
          if (value) params.set(key, value);
        });
        const queryString = params.toString();
        window.location.href = `/search${queryString ? `?${queryString}` : ""}`;
      };

      return (
        <div className="min-h-screen bg-gray-100">
          {/* Navigation */}
          <nav className="fixed top-0 w-full border-b border-gray-200 z-50 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center space-x-2">
                  <img
                    src="https://via.placeholder.com/40?text=Logo"
                    alt="Grace Kennett Foundation Logo"
                    className="h-10 w-10 object-contain"
                  />
                  <span className="font-serif font-bold text-2xl text-orange-500">
                    Grace Kennett Foundation
                  </span>
                </div>
                <div className="flex items-center space-x-8">
                  <a
                    href="#search"
                    className="text-lg font-semibold text-orange-500 hover:text-white transition-colors"
                  >
                    Find Opportunities
                  </a>
                  <a
                    href="#about"
                    className="text-lg font-semibold text-orange-500 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                  <a
                    href="#impact"
                    className="text-lg font-semibold text-orange-500 hover:text-white transition-colors"
                  >
                    Impact Stories
                  </a>
                  <a
                    href="#contact"
                    className="text-lg font-semibold text-orange-500 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                  <button
                    className="px-4 py-2 rounded-md"
                    style={joinButtonStyle}
                    onMouseOver={handleJoinMouseOver}
                    onMouseOut={handleJoinMouseOut}
                  >
                    Join IVY
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <section
            className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative flex items-center justify-center"
            style={{
              backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('https://via.placeholder.com/1200x600?text=Hero+Background')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "600px",
              filter: "brightness(1.09) contrast(1.12) saturate(1.15)",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="max-w-7xl mx-auto relative z-10 text-center">
              <h1 className="font-serif font-bold text-4xl md:text-6xl">
                <span style={{ color: "#D17038" }}>Find Your Perfect </span>
                <span style={{ color: "#F55900" }}>Volunteering </span>
                <span style={{ color: "#D17038" }}>Match</span>
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mt-4">
                Connect with meaningful causes and choose the volunteering role that best suits your interests and strengths.
              </p>
              <div className="flex justify-center items-center space-x-8 text-sm text-white/80 mt-8">
                <div className="flex items-center space-x-2">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>500+ Volunteers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>50+ Locations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>100+ Projects</span>
                </div>
              </div>
            </div>
          </section>

          {/* Search Section */}
          <section id="search" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-200">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="font-serif font-bold text-2xl text-orange-500">
                      Find Your Perfect Opportunity
                    </h2>
                    <p className="text-gray-500">
                      Search and filter volunteering opportunities that match your interests
                    </p>
                  </div>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      placeholder="Search opportunities, organizations, or keywords..."
                      className="pl-10 h-12 w-full border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    {[
                      { name: "location", placeholder: "Location", options: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh", "Telangana"] },
                      { name: "theme", placeholder: "Theme", options: ["Childcare & Education", "Healthcare & Medical", "Wildlife & Environment", "Heritage & Culture", "Community Development", "Elderly Care", "Disability Support"] },
                      { name: "duration", placeholder: "Duration", options: ["1-2 weeks", "3-4 weeks", "1-2 months", "3-6 months", "6+ months"] },
                      { name: "type", placeholder: "Type", options: ["Volunteer", "Internship", "Both"] },
                    ].map((select, index) => (
                      <select
                        key={index}
                        value={searchFilters[select.name]}
                        onChange={(e) =>
                          setSearchFilters((prev) => ({ ...prev, [select.name]: e.target.value }))
                        }
                        className="h-12 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="">{select.placeholder}</option>
                        {select.options.map((option, i) => (
                          <option key={i} value={option.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ))}
                  </div>
                  <button
                    onClick={handleSearch}
                    className="w-full h-12 text-lg font-bold text-white bg-orange-600 rounded-md hover:bg-orange-200 hover:text-orange-600 transition-colors"
                  >
                    <svg className="inline mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search Opportunities
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Available Opportunities */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="font-serif font-bold text-3xl text-orange-500">
                    Available Opportunities
                  </h2>
                  <p className="text-gray-500">147 opportunities found</p>
                </div>
                <button
                  className="border border-orange-600 text-orange-600 bg-transparent font-bold px-4 py-2 rounded-md hover:bg-orange-600 hover:text-white transition-colors"
                >
                  <svg className="inline mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707v3.586a1 1 0 01-1.707.707l-2-2A1 1 0 0110 15.586V12a1 1 0 00-.293-.707L3.293 4.707A1 1 0 013 4z" />
                  </svg>
                  More Filters
                </button>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Child Education Support",
                    location: "Madurai, Tamil Nadu",
                    duration: "2-4 weeks",
                    category: "Childcare & Education",
                    type: "Volunteer & Intern",
                    hostName: "Sunshine Children's Foundation",
                    hostImage: "https://via.placeholder.com/32?text=Host",
                    image: "https://via.placeholder.com/400x240?text=Child",
                    rating: 4.8,
                    reviews: 24,
                    price: "₹2,500/week",
                    accommodation: "Shared dormitory",
                    meals: "3 meals included",
                    verified: true,
                  },
                  {
                    title: "Wildlife Conservation Project",
                    location: "Coimbatore, Tamil Nadu",
                    duration: "1-3 months",
                    category: "Wildlife & Environment",
                    type: "Volunteer",
                    hostName: "Western Ghats Conservation Trust",
                    hostImage: "https://via.placeholder.com/32?text=Host",
                    image: "https://via.placeholder.com/400x240?text=Wildlife",
                    rating: 4.9,
                    reviews: 18,
                    price: "₹3,200/week",
                    accommodation: "Private room",
                    meals: "Vegetarian meals",
                    verified: true,
                  },
                  {
                    title: "Rural Healthcare Support",
                    location: "Kochi, Kerala",
                    duration: "3-6 weeks",
                    category: "Healthcare & Medical",
                    type: "Intern",
                    hostName: "Kerala Rural Health Initiative",
                    hostImage: "https://via.placeholder.com/32?text=Host",
                    image: "https://via.placeholder.com/400x240?text=Medical",
                    rating: 4.7,
                    reviews: 31,
                    price: "₹2,800/week",
                    accommodation: "Host family",
                    meals: "Local cuisine",
                    verified: true,
                  },
                  {
                    title: "Heritage Site Restoration",
                    location: "Hampi, Karnataka",
                    duration: "2-8 weeks",
                    category: "Heritage & Culture",
                    type: "Volunteer",
                    hostName: "Hampi Heritage Foundation",
                    hostImage: "https://via.placeholder.com/32?text=Host",
                    image: "https://via.placeholder.com/400x240?text=Heritage",
                    rating: 4.6,
                    reviews: 15,
                    price: "₹2,200/week",
                    accommodation: "Guesthouse",
                    meals: "Traditional meals",
                    verified: true,
                  },
                  {
                    title: "Elderly Care Program",
                    location: "Chennai, Tamil Nadu",
                    duration: "1-4 weeks",
                    category: "Elderly Care",
                    type: "Volunteer & Intern",
                    hostName: "Golden Years Care Center",
                    hostImage: "https://via.placeholder.com/32?text=Host",
                    image: "https://via.placeholder.com/400x240?text=Elderly",
                    rating: 4.8,
                    reviews: 28,
                    price: "₹2,000/week",
                    accommodation: "Nearby hostel",
                    meals: "South Indian meals",
                    verified: true,
                  },
                  {
                    title: "Special Needs Education",
                    location: "Bangalore, Karnataka",
                    duration: "2-12 weeks",
                    category: "Disability Support",
                    type: "Intern",
                    hostName: "Inclusive Learning Center",
                    hostImage: "https://via.placeholder.com/32?text=Host",
                    image: "https://via.placeholder.com/400x240?text=Special+Needs",
                    rating: 4.9,
                    reviews: 22,
                    price: "₹3,000/week",
                    accommodation: "Shared apartment",
                    meals: "Flexible dining",
                    verified: true,
                  },
                ].map((opportunity, index) => (
                  <div key={index} className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden">
                    <div className="relative">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={opportunity.image}
                          alt={opportunity.title}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {opportunity.verified && (
                        <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded">
                          Verified
                        </span>
                      )}
                      <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2">
                        <svg className="h-4 w-4 text-gray-500 hover:text-red-500 cursor-pointer transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">
                          {opportunity.category}
                        </span>
                        <div className="flex items-center space-x-1 text-sm">
                          <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="font-medium">{opportunity.rating}</span>
                          <span className="text-gray-500">({opportunity.reviews})</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 truncate">{opportunity.title}</h3>
                        <div className="flex items-center space-x-1 text-sm text-gray-500 mt-1">
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{opportunity.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 py-2">
                        <img
                          src={opportunity.hostImage}
                          alt={opportunity.hostName}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{opportunity.hostName}</p>
                          <p className="text-xs text-gray-500">Host organization</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm text-gray-500">
                        <div className="flex items-center justify-between">
                          <span>Duration:</span>
                          <span className="text-gray-900">{opportunity.duration}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Type:</span>
                          <span className="text-gray-900">{opportunity.type}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Accommodation:</span>
                          <span className="text-gray-900">{opportunity.accommodation}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                        <div>
                          <span className="text-lg font-bold text-gray-900">{opportunity.price}</span>
                          <p className="text-xs text-gray-500">{opportunity.meals}</p>
                        </div>
                        <button
                          className="px-3 py-1 text-sm font-bold text-white bg-orange-600 rounded-md hover:bg-orange-200 hover:text-orange-600 transition-colors"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <button
                  className="border border-orange-600 text-orange-600 bg-transparent font-bold px-6 py-3 rounded-md hover:bg-orange-600 hover:text-white transition-colors"
                >
                  Load More Opportunities
                  <svg className="inline ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </section>

          {/* Featured Opportunities */}
          <section id="opportunities" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-200">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="font-serif font-bold text-3xl md:text-4xl text-orange-500">
                  Featured Opportunities
                </h2>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                  Discover meaningful ways to contribute to communities across South India
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Child Education Support",
                    location: "Madurai, Tamil Nadu",
                    duration: "2-4 weeks",
                    category: "Education",
                    image: "https://via.placeholder.com/400x240?text=Child",
                    rating: 4.8,
                    reviews: 24,
                  },
                  {
                    title: "Wildlife Conservation",
                    location: "Coimbatore, Tamil Nadu",
                    duration: "1-3 months",
                    category: "Environment",
                    image: "https://via.placeholder.com/400x240?text=Wildlife",
                    rating: 4.9,
                    reviews: 18,
                  },
                  {
                    title: "Healthcare Assistance",
                    location: "Kochi, Kerala",
                    duration: "3-6 weeks",
                    category: "Healthcare",
                    image: "https://via.placeholder.com/400x240?text=Medical",
                    rating: 4.7,
                    reviews: 31,
                  },
                ].map((opportunity, index) => (
                  <div key={index} className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={opportunity.image}
                        alt={opportunity.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">
                          {opportunity.category}
                        </span>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span>{opportunity.rating}</span>
                          <span>({opportunity.reviews})</span>
                        </div>
                      </div>
                      <h3 className="font-serif text-xl text-gray-900">{opportunity.title}</h3>
                    </div>
                    <div className="px-6 pb-6 space-y-4">
                      <div className="space-y-2 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <svg className="h-4 w-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{opportunity.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <svg className="h-4 w-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{opportunity.duration}</span>
                        </div>
                      </div>
                      <button
                        className="w-full font-bold text-white bg-orange-600 rounded-md px-4 py-2 hover:bg-orange-200 hover:text-orange-600 transition-colors"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <button
                  className="border border-orange-600 text-orange-600 bg-transparent font-bold px-6 py-3 rounded-md hover:bg-orange-600 hover:text-white transition-colors"
                >
                  View All Opportunities
                  <svg className="inline ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </section>

          {/* Impact Stories */}
          <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="font-serif font-bold text-3xl md:text-4xl text-orange-500">
                  Impact Stories
                </h2>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                  Real stories from volunteers who made a difference
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Sarah Johnson",
                    role: "Education Volunteer",
                    location: "Madurai",
                    quote: "Working with local children was incredibly rewarding. I learned as much as I taught, and the cultural exchange was beautiful.",
                    image: "https://via.placeholder.com/48?text=Sarah",
                  },
                  {
                    name: "Michael Chen",
                    role: "Healthcare Volunteer",
                    location: "Kochi",
                    quote: "The experience opened my eyes to different healthcare challenges and solutions. The community welcomed me with open arms.",
                    image: "https://via.placeholder.com/48?text=Michael",
                  },
                  {
                    name: "Emma Rodriguez",
                    role: "Environmental Volunteer",
                    location: "Coimbatore",
                    quote: "Contributing to wildlife conservation while learning about local ecosystems was a life-changing experience.",
                    image: "https://via.placeholder.com/48?text=Emma",
                  },
                ].map((story, index) => (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{story.name}</h4>
                        <p className="text-sm text-gray-500">
                          {story.role} • {story.location}
                        </p>
                      </div>
                    </div>
                    <blockquote className="text-gray-500 italic">"{story.quote}"</blockquote>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-200">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="font-serif font-bold text-3xl md:text-4xl text-orange-500">
                    About Us
                  </h2>
                  <div className="space-y-4 text-gray-500 leading-relaxed text-justify">
                    <p>
                      Grace Kennett Foundation is a non-governmental organization with a glorious 80-year history. 
                      Our work has saved the lives of a thousand victims of female infanticide and abandoned children.
                      A thousand happy families have been built through adoption. If you need to have a garden, dig a well first. 
                      Our well is our hospital and our allied services. We address the physical, mental, and social well being of the community and raise resources to pursue our lofty objectives.
                      IVY is an innovative platform that connects passionate volunteers with meaningful opportunities across
                      South India. Just like Airbnb revolutionized travel, we're transforming how people discover and engage
                      in volunteer work.
                    </p>
                    <p>
                      Our mission is to create lasting positive impact in communities while providing volunteers with
                      authentic cultural experiences and personal growth opportunities.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                      <div className="text-2xl font-bold text-orange-600">500+</div>
                      <div className="text-sm text-gray-500">Active Volunteers</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                      <div className="text-2xl font-bold text-orange-600">50+</div>
                      <div className="text-sm text-gray-500">Partner Organizations</div>
                    </div>
                  </div>
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://via.placeholder.com/500?text=Volunteers"
                    alt="IVY volunteers working together"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-orange-600 text-white">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="font-serif font-bold text-3xl md:text-4xl">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl opacity-90">
                Join our community of changemakers and start your volunteering journey today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="font-bold text-white bg-orange-600 rounded-md px-6 py-3 hover:bg-orange-200 hover:text-orange-600 transition-colors"
                >
                  Find Opportunities
                </button>
                <button
                  className="border border-orange-600 text-orange-600 bg-transparent font-bold px-6 py-3 rounded-md hover:bg-orange-200 hover:text-orange-600 transition-colors"
                >
                  Become a Host
                </button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 border-t border-gray-200">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="font-serif font-bold text-xl text-gray-900">IVY</span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Connecting volunteers with meaningful opportunities across South India.
                  </p>
                  <div className="flex space-x-4">
                    <svg className="h-5 w-5 text-gray-500 hover:text-orange-600 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                    <svg className="h-5 w-5 text-gray-500 hover:text-orange-600 cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 3.81.227 1.792 2.222.072 5.999.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948 1.72 3.777 3.715 5.772 7.492 5.928 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c3.777-.156 5.772-2.151 5.928-5.928.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.156-3.777-2.151-5.772-5.928-5.928-1.28-.058-1.689-.072-4.948-.072z" />
                      <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">For Volunteers</h4>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>Find Opportunities</div>
                    <div>How It Works</div>
                    <div>Safety Guidelines</div>
                    <div>FAQs</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">For Hosts</h4>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>List Your Project</div>
                    <div>Host Resources</div>
                    <div>Best Practices</div>
                    <div>Support</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Contact</h4>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>gkfit2025@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>+91 96268 40401</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>8,Kennet Road, Madurai - 16, Tamil Nadu</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-500">
                <p>&copy; 2024 IVY Platform. All rights reserved. Spreading kindness across South India.</p>
              </div>
            </div>
          </footer>
        </div>
      );
    };
