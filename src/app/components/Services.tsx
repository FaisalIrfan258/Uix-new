import React from "react"
import { Laptop, Smartphone, Globe, ShieldCheck, Zap, Headphones } from "lucide-react"

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

const services: Service[] = [
  {
    icon: <Laptop className="h-8 w-8" />,
    title: "Web Development",
    description: "Create stunning, responsive websites",
    features: ["Custom designs", "SEO optimization", "Fast loading times"]
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile App Development",
    description: "Build powerful mobile applications",
    features: ["Cross-platform", "Native performance", "Offline capabilities"]
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Cloud Solutions",
    description: "Scalable and secure cloud services",
    features: ["Auto-scaling", "Data backup", "24/7 monitoring"]
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Cybersecurity",
    description: "Protect your digital assets",
    features: ["Threat detection", "Encryption", "Regular audits"]
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "AI & Machine Learning",
    description: "Implement intelligent solutions",
    features: ["Predictive analytics", "Natural language processing", "Computer vision"]
  },
  {
    icon: <Headphones className="h-8 w-8" />,
    title: "IT Support",
    description: "Round-the-clock technical assistance",
    features: ["Remote support", "On-site services", "Hardware troubleshooting"]
  }
]

export default function ServiceCards() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  )
}

function ServiceCard({ icon, title, description, features }: Service) {
  const [isHovered, setIsHovered] = React.useState(false)
  const id = React.useId()

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-primary">{icon}</div>
          <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-2 py-1 rounded-full">
            {features.length} Features
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul
          className={`space-y-2 transition-all duration-300 ${
            isHovered ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!isHovered}
        >
          {features.map((feature, index) => (
            <li key={`${id}-${index}`} className="flex items-center text-sm text-gray-700">
              <svg
                className="h-4 w-4 mr-2 text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}