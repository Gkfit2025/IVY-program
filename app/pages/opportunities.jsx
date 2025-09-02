<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IVY Opportunities - Debug Page</title>
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
        .theme-badge {
            display: inline-block;
            padding: 0.25rem 0.5rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 600;
        }
        .debug-panel {
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            font-size: 14px;
        }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Header -->
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

    <!-- Debug Information Panel -->
    <div class="container mx-auto px-4 py-6">
        <div class="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
            <div class="flex">
                <div class="flex-shrink-0">
                    <i class="fas fa-exclamation-triangle text-yellow-600"></i>
                </div>
                <div class="ml-3">
                    <h2 class="text-lg font-bold text-yellow-800">Debug Information</h2>
                    <p class="text-yellow-700">
                        You're seeing this page because your <code class="bg-yellow-200 px-1 py-0.5 rounded">/opportunities</code> route is returning a 404 error.
                    </p>
                </div>
            </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 class="text-xl font-bold mb-4 text-gray-800">Common Causes & Solutions</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 debug-panel">
                <div>
                    <h3 class="font-semibold mb-2 text-red-600">1. File Location Issues</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>Ensure the file is at <code class="bg-gray-100 p-1">app/pages/opportunities.jsx</code></li>
                        <li>Check the file name is exactly <code class="bg-gray-100 p-1">opportunities.jsx</code></li>
                        <li>Verify the directory exists: <code class="bg-gray-100 p-1">app/pages/</code></li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-semibold mb-2 text-red-600">2. Next.js Configuration</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>Check if you're using the App Router or Pages Router</li>
                        <li>For App Router, files should be in <code class="bg-gray-100 p-1">app/</code> directory</li>
                        <li>For Pages Router, files should be in <code class="bg-gray-100 p-1">pages/</code> directory</li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-semibold mb-2 text-red-600">3. Export Issues</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>Ensure your component uses <code class="bg-gray-100 p-1">export default</code></li>
                        <li>Check for syntax errors in the JSX file</li>
                        <li>Verify the component renders correctly</li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-semibold mb-2 text-red-600">4. Vercel Deployment</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>Check build logs for errors</li>
                        <li>Verify the file exists in deployment</li>
                        <li>Ensure correct configuration in <code class="bg-gray-100 p-1">vercel.json</code></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- Opportunities Content (for reference) -->
    <main class="container mx-auto px-4 py-8">
        <div class="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 class="text-2xl font-bold text-blue-800 mb-4">Your Opportunities Page Should Look Like This:</h2>
            <p class="text-blue-700">If your routing is working correctly, you should see a page similar to this below.</p>
        </div>

        <div class="flex flex-col md:flex-row">
            <!-- Filters Sidebar -->
            <div class="w-full md:w-1/4 pr-0 md:pr-6 mb-6 md:mb-0">
                <div class="bg-white p-6 rounded-lg shadow-md sticky top-4">
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
                    <h2 class="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">Opportunities Available</h2>
                    <div class="flex items-center">
                        <span class="mr-2 text-gray-600">Sort by:</span>
                        <select class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option>Most Relevant</option>
                            <option>Newest First</option>
                        </select>
                    </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>
            </div>
        </div>
    </main>

    <!-- Next.js Specific Debug Info -->
    <div class="container mx-auto px-4 py-8">
        <div class="bg-gray-100 p-6 rounded-lg">
            <h2 class="text-xl font-bold mb-4 text-gray-800">Next.js Specific Checks</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 debug-panel">
                <div>
                    <h3 class="font-semibold mb-2">For Pages Router (traditional)</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>File should be at: <code class="bg-gray-200 p-1">pages/opportunities.jsx</code></li>
                        <li>Export default component: <code class="bg-gray-200 p-1">export default function Opportunities() {...}</code></li>
                        <li>No special configuration needed</li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-semibold mb-2">For App Router (new in Next.js 13+)</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>File should be at: <code class="bg-gray-200 p-1">app/opportunities/page.jsx</code></li>
                        <li>Export default component: <code class="bg-gray-200 p-1">export default function Page() {...}</code></li>
                        <li>Might need layout.js file in app directory</li>
                    </ul>
                </div>
            </div>
            <div class="mt-6 p-4 bg-yellow-100 rounded-lg">
                <p class="text-yellow-800"><strong>Note:</strong> Based on your file path (<code class="bg-yellow-200 p-1">app/pages/opportunities.jsx</code>), it seems you might be mixing both routers. This could be causing the 404 error.</p>
            </div>
        </div>
    </div>

    <!-- Test Your Setup -->
    <div class="container mx-auto px-4 py-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-bold mb-4 text-gray-800">Test Your Current Setup</h2>
            <div class="mb-4">
                <p class="mb-2">Try accessing these URLs to test your routing:</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><a href="/" class="text-blue-600 hover:underline">Home Page</a> - Should work</li>
                    <li><a href="/opportunities" class="text-blue-600 hover:underline">Opportunities Page</a> - Currently 404</li>
                    <li><a href="/api/hello" class="text-blue-600 hover:underline">API Route</a> - Test if API routes work</li>
                </ul>
            </div>
            <div class="bg-gray-100 p-4 rounded">
                <p class="font-mono text-sm">// Check your browser's Developer Tools (F12) → Network tab to see the 404 request</p>
            </div>
        </div>
    </div>

    <footer class="bg-gray-800 text-white mt-12 py-8">
        <div class="container mx-auto px-4 text-center">
            <p>IVY Program - Connecting youth with meaningful opportunities</p>
            <p class="mt-2 text-gray-400">If you continue to experience issues, check your Next.js version and router configuration.</p>
        </div>
    </footer>

    <script>
        // Simple functionality for demonstration
        document.addEventListener('DOMContentLoaded', function() {
            // Add click event to "View Details" buttons
            const viewDetailsButtons = document.querySelectorAll('button.text-green-600');
            viewDetailsButtons.forEach(button => {
                button.addEventListener('click', function() {
                    alert('This button would navigate to opportunity details in a working implementation.');
                });
            });
            
            // Log routing information
            console.log('Current path:', window.location.pathname);
            console.log('If you see a 404 error for /opportunities, check your file structure and Next.js configuration.');
        });
    </script>
</body>
</html>
