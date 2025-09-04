export interface Opportunity {
  id: number
  title: string
  location: string
  state: string
  duration: string
  theme: string
  type: string
  category: string
  hostName: string
  hostImage: string
  image: string
  rating: number
  reviews: number
  price: string
  accommodation: string
  meals: string
  verified: boolean
  description?: string
  requirements?: string[]
  included?: string[]
}

export const opportunitiesDatabase: Opportunity[] = [
  {
    id: 1,
    title: "Child Education Support",
    location: "Madurai",
    state: "tamil-nadu",
    duration: "2-4weeks",
    theme: "childcare",
    type: "both",
    category: "Childcare & Education",
    hostName: "Sunshine Children's Foundation",
    hostImage: "smiling indian woman host profile photo",
    image: "children learning in classroom with volunteer teacher",
    rating: 4.8,
    reviews: 24,
    price: "₹2,500/week",
    accommodation: "Shared dormitory",
    meals: "3 meals included",
    verified: true,
    description:
      "Support local children's education through teaching assistance, activity planning, and mentorship programs.",
    requirements: ["Basic English proficiency", "Patience with children", "Teaching experience preferred"],
    included: ["Accommodation", "All meals", "Local transport", "Orientation program"],
  },
  {
    id: 2,
    title: "Wildlife Conservation Project",
    location: "Coimbatore",
    state: "tamil-nadu",
    duration: "1-2months",
    theme: "wildlife",
    type: "volunteer",
    category: "Wildlife & Environment",
    hostName: "Western Ghats Conservation Trust",
    hostImage: "indian male conservationist profile photo",
    image: "volunteers working on wildlife conservation project",
    rating: 4.9,
    reviews: 18,
    price: "₹3,200/week",
    accommodation: "Private room",
    meals: "Vegetarian meals",
    verified: true,
    description:
      "Participate in wildlife research, habitat restoration, and community education programs in the Western Ghats.",
    requirements: ["Physical fitness", "Interest in wildlife", "Basic research skills"],
    included: ["Private accommodation", "Vegetarian meals", "Research training", "Field equipment"],
  },
  // Add more opportunities here...
]

export function searchOpportunities(filters: {
  location?: string
  theme?: string
  duration?: string
  type?: string
  keyword?: string
}): Opportunity[] {
  return opportunitiesDatabase.filter((opportunity) => {
    const matchesLocation = !filters.location || opportunity.state === filters.location
    const matchesTheme = !filters.theme || opportunity.theme === filters.theme
    const matchesDuration = !filters.duration || opportunity.duration === filters.duration
    const matchesType =
      !filters.type || filters.type === "both" || opportunity.type === filters.type || opportunity.type === "both"
    const matchesKeyword =
      !filters.keyword ||
      opportunity.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
      opportunity.category.toLowerCase().includes(filters.keyword.toLowerCase()) ||
      opportunity.location.toLowerCase().includes(filters.keyword.toLowerCase())

    return matchesLocation && matchesTheme && matchesDuration && matchesType && matchesKeyword
  })
}
