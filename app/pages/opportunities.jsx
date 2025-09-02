<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Find Opportunities - IVY Program</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .opportunity-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .opportunity-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        .filter-section {
            scrollbar-width: thin;
        }
        .theme-badge {
            display: inline-block;
            padding: 0.25rem 0.5rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 600;
        }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Header (matching your IVY app) -->
    <header class="bg-white shadow-md">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
            <div class="flex items-center">
                <h1 class="text-xl font-bold text-green-700">IVY Program</h1>
                <nav class="ml-8 hidden md:block">
                    <ul class="flex space-x-8">
                        <li><a href="#" class="text-green-700 font-semibold">Find Opportunities</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-green-700">Host an Opportunity</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-green-700">Resources</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-green-700">About Us</a></li>
                    </ul>
                </nav>
            </div>
            <div class="flex items-center space-x-4">
                <button class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Sign In</button>
                <button class="md:hidden text-gray-600">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row">
            <!-- Filters Sidebar -->
            <div class="w-full md:w-1/4 pr-0 md:pr-6 mb-6 md:mb-0">
                <div class="bg-white p-6 rounded-lg shadow-md sticky top-4 filter-section overflow-y-auto max-h-screen">
                    <h2 class="text-xl font-bold mb-6 text-gray-800">Filters</h2>
                    
                    <!-- Location Filter -->
                    <div class="mb-6">
                        <h3 class="font-semibold mb-3 text-gray-700">Location</h3>
                        <div class="space-y-2">
                            <div class="flex items-center">
                                <input type="checkbox" id="location-madurai" class="mr-2 rounded text-green-600 focus:ring-green-500" checked>
                                <label for="location-madurai" class="text-gray-600">Madurai</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="location-chennai" class="mr-2 rounded text-green-600 focus:ring-green-500" checked>
                                <label for="location-chennai" class="text-gray-600">Chennai</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="location-coimbatore" class="mr-2 rounded text-green-600 focus:ring-green-500" checked>
                                <label for="location-coimbatore" class="text-gray-600">Coimbatore</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="location-trichy" class="mr-2 rounded text-green-600 focus:ring-green-500" checked>
                                <label for="location-trichy" class="text-gray-600">Trichy</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="location-salem" class="mr-2 rounded text-green-600 focus:ring-green-500" checked>
                                <label for="location-salem" class="text-gray-600">Salem</label>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Theme Filter -->
                    <div class="mb-6">
                        <h3 class="font-semibold mb-3 text-gray-700">Theme</h3>
                        <div class="space-y-2">
                            <div class="flex items-center">
                                <input type="checkbox" id="theme-childcare" class="mr-2 rounded text-green-600 focus:ring-green-500" checked>
                                <label for="theme-childcare" class="text-gray-600">Childcare</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="theme-medical" class="mr-2 rounded text-green-600 focus:ring-green-500" checked>
                                <label for="theme-medical" class="text-gray-600">Medical</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="theme-wildlife" class="mr-2 rounded text-green-600 focus:ring-green-500" checked>
                                <label for="theme-wildlife" class="text-gray-600">Wildlife</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="theme-heritage" class="mr-2 rounded text-green-600 focus:ring-green-500" checked>
                                <label for="theme-heritage" class="text-gray-600">Heritage</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="theme-education" class="mr-2 rounded text-green-600 focus:ring-green-500" checked>
                                <label for="theme-education" class="text-gray-600">Education</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="theme-environment" class="mr-2 rounded text-green-600 focus:ring-green-500" checked>
                                <label for="theme-environment" class="text-gray-600">Environment</label>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Duration Filter -->
                    <div class="mb-6">
                        <h3 class="font-semibold mb-3 text-gray-700">Duration</h3>
                        <div class="space-y-2">
                            <div class="flex items-center">
                                <input type="checkbox" id="duration-less-than-week" class="mr-2 rounded text-green-600 focus:ring-green-500">
                                <label for="duration-less-than-week" class="text-gray-600">Less than 1 week</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="duration-1-2-weeks" class="mr-2 rounded text-green-600 focus:ring-green-500">
                                <label for="duration-1-2-weeks" class="text-gray-600">1-2 weeks</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="duration-2-4-weeks" class="mr-2 rounded text-green-600 focus:ring-green-500">
                                <label for="duration-2-4-weeks" class="text-gray-600">2-4 weeks</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="duration-1-plus-months" class="mr-2 rounded text-green-600 focus:ring-green-500">
                                <label for="duration-1-plus-months" class="text-gray-600">1+ months</label>
                            </div>
                        </div>
                    </div>
                    
                    <button class="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
                        Apply Filters
                    </button>
                </div>
            </div>
            
            <!-- Opportunities List -->
            <div class="w-full md:w-3/4">
                <div class="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <h2 class="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">124 Opportunities Available</h2>
                    <div class="flex items-center">
                        <span class="mr-2 text-gray-600">Sort by:</span>
                        <select class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option>Most Relevant</option>
                            <option>Newest First</option>
                            <option>Nearest Location</option>
                            <option>Shortest Duration</option>
                        </select>
                    </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- Opportunity Card 1 -->
                    <div class="opportunity-card bg-white rounded-xl shadow-md overflow-hidden">
                        <div class="h-48 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80')"></div>
                        <div class="p-5">
                            <div class="flex justify-between items-start mb-2">
                                <span class="theme-badge bg-green-100 text-green-800">Childcare</span>
                                <span class="text-sm text-gray-500"><i class="fas fa-map-marker-alt mr-1"></i> Madurai</span>
                            </div>
                            <h3 class="font-bold text-lg mb-2">Child Education Volunteer</h3>
                            <p class="text-gray-600 mb-4">Help teach basic English and math to underprivileged children in rural Madurai.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-gray-500"><i class="far fa-clock mr-1"></i> 2 weeks</span>
                                <button class="text-green-600 font-semibold hover:text-green-800">View Details</button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Opportunity Card 2 -->
                    <div class="opportunity-card bg-white rounded-xl shadow-md overflow-hidden">
                        <div class="h-48 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80')"></div>
                        <div class="p-5">
                            <div class="flex justify-between items-start mb-2">
                                <span class="theme-badge bg-blue-100 text-blue-800">Medical</span>
                                <span class="text-sm text-gray-500"><i class="fas fa-map-marker-alt mr-1"></i> Chennai</span>
                            </div>
                            <h3 class="font-bold text-lg mb-2">Health Camp Assistant</h3>
                            <p class="text-gray-600 mb-4">Assist doctors in organizing health checkup camps in urban slums of Chennai.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-gray-500"><i class="far fa-clock mr-1"></i> 3 weeks</span>
                                <button class="text-green-600 font-semibold hover:text-green-800">View Details</button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Opportunity Card 3 -->
                    <div class="opportunity-card bg-white rounded-xl shadow-md overflow-hidden">
                        <div class="h-48 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1583512603806-077998240c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80')"></div>
                        <div class="p-5">
                            <div class="flex justify-between items-start mb-2">
                                <span class="theme-badge bg-yellow-100 text-yellow-800">Wildlife</span>
                                <span class="text-sm text-gray-500"><i class="fas fa-map-marker-alt mr-1"></i> Coimbatore</span>
                            </div>
                            <h3 class="font-bold text-lg mb-2">Wildlife Conservation Volunteer</h3>
                            <p class="text-gray-600 mb-4">Participate in wildlife monitoring and conservation efforts in the Western Ghats.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-gray-500"><i class="far fa-clock mr-1"></i> 1 month</span>
                                <button class="text-green-600 font-semibold hover:text-green-800">View Details</button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Opportunity Card 4 -->
                    <div class="opportunity-card bg-white rounded-xl shadow-md overflow-hidden">
                        <div class="h-48 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80')"></div>
                        <div class="p-5">
                            <div class="flex justify-between items-start mb-2">
                                <span class="theme-badge bg-purple-100 text-purple-800">Heritage</span>
                                <span class="text-sm text-gray-500"><i class="fas fa-map-marker-alt mr-1"></i> Madurai</span>
                            </div>
                            <h3 class="font-bold text-lg mb-2">Temple Preservation Volunteer</h3>
                            <p class="text-gray-600 mb-4">Help preserve and promote the cultural heritage of Madurai's ancient temples.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-gray-500"><i class="far fa-clock mr-1"></i> 2 weeks</span>
                                <button class="text-green-600 font-semibold hover:text-green-800">View Details</button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Opportunity Card 5 -->
                    <div class="opportunity-card bg-white rounded-xl shadow-md overflow-hidden">
                        <div class="h-48 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80')"></div>
                        <div class="p-5">
                            <div class="flex justify-between items-start mb-2">
                                <span class="theme-badge bg-red-100 text-red-800">Education</span>
                                <span class="text-sm text-gray-500"><i class="fas fa-map-marker-alt mr-1"></i> Trichy</span>
                            </div>
                            <h3 class="font-bold text-lg mb-2">After-school Tutor</h3>
                            <p class="text-gray-600 mb-4">Provide academic support to students in government schools after regular school hours.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-gray-500"><i class="far fa-clock mr-1"></i> 3 weeks</span>
                                <button class="text-green-600 font-semibold hover:text-green-800">View Details</button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Opportunity Card 6 -->
                    <div class="opportunity-card bg-white rounded-xl shadow-md overflow-hidden">
                        <div class="h-48 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80')"></div>
                        <div class="p-5">
                            <div class="flex justify-between items-start mb-2">
                                <span class="theme-badge bg-teal-100 text-teal-800">Environment</span>
                                <span class="text-sm text-gray-500"><i class="fas fa-map-marker-alt mr-1"></i> Salem</span>
                            </div>
                            <h3 class="font-bold text-lg mb-2">Green City Initiative</h3>
                            <p class="text-gray-600 mb-4">Join our urban afforestation project to increase green cover in Salem city.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-gray-500"><i class="far fa-clock mr-1"></i> 1 week</span>
                                <button class="text-green-600 font-semibold hover:text-green-800">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Pagination -->
                <div class="mt-8 flex justify-center">
                    <nav class="flex items-center space-x-2">
                        <a href="#" class="px-3 py-1 rounded-md bg-green-100 text-green-800 font-semibold">1</a>
                        <a href="#" class="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100">2</a>
                        <a href="#" class="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100">3</a>
                        <a href="#" class="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100">4</a>
                        <a href="#" class="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100">Next →</a>
                    </nav>
                </div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white mt-12 py-8">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-lg font-semibold mb-4">IVY Program</h3>
                    <p class="text-gray-400">Connecting youth with meaningful internship and volunteer opportunities across Tamil Nadu.</p>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">About Us</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">For Volunteers</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">For Organizations</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">Themes</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">Childcare</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Medical</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Wildlife</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Heritage</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
                    <address class="not-italic text-gray-400">
                        <p>123 Gandhi Road</p>
                        <p>Madurai, Tamil Nadu 625001</p>
                        <p>info@ivyprogram.org</p>
                        <p>+91 98765 43210</p>
                    </address>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                <p>© 2023 IVY Program. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // Simple filter functionality for demonstration
        document.addEventListener('DOMContentLoaded', function() {
            const filterCheckboxes = document.querySelectorAll('input[type="checkbox"]');
            const applyFiltersBtn = document.querySelector('button.bg-green-600');
            
            applyFiltersBtn.addEventListener('click', function() {
                alert('Filters applied! In a real application, this would filter the opportunities.');
            });
            
            // Add click event to "View Details" buttons
            const viewDetailsButtons = document.querySelectorAll('button.text-green-600');
            viewDetailsButtons.forEach(button => {
                button.addEventListener('click', function() {
                    alert('Opportunity details would be shown here. This would navigate to a detail page in the real application.');
                });
            });
        });
    </script>
</body>
</html>
