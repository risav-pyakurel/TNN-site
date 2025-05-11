import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Tech Nerds Nepal
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Empowering Nepali IT students and community through education and training
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-xl mb-8">
            Be part of Nepal's growing tech community and enhance your skills
          </p>
          <Link
            href="/join"
            className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
          >
            Join Now
          </Link>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    icon: "🎓",
    title: "IT Education",
    description: "Comprehensive training programs designed for Nepali IT students and professionals.",
  },
  {
    icon: "🤝",
    title: "Community",
    description: "Join a vibrant community of tech enthusiasts and professionals in Nepal.",
  },
  {
    icon: "💡",
    title: "Innovation",
    description: "Fostering innovation and technological advancement in Nepal's IT sector.",
  },
] 