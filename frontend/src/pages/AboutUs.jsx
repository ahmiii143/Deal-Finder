import React from "react";
import { FiUsers, FiTarget, FiAward } from "react-icons/fi";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Mike Johnson",
      role: "Lead Developer",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Sarah Brown",
      role: "UX Designer",
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        About Us
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
          Our Mission
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          At DealFinder, we're passionate about connecting food lovers with the
          best deals in town. Our mission is to make dining out more affordable
          and accessible for everyone, while supporting local restaurants and
          businesses.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          We built this project because we believe that great food shouldn't
          break the bank. By aggregating the best deals from various restaurants
          and food services, we're making it easier for people to enjoy
          delicious meals at fantastic prices.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
          What Sets Us Apart
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <FiTarget className="text-4xl mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Curated Deals
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              We handpick the best food deals to ensure quality and value for
              our users.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <FiUsers className="text-4xl mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Community-Driven
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Our platform thrives on user recommendations and reviews, creating
              a trustworthy community.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <FiAward className="text-4xl mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Exclusive Offers
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              We partner with restaurants to bring you deals you won't find
              anywhere else.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
          What We Do
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          DealFinder is your go-to platform for discovering the best food deals
          in your area. Here's what we offer:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>Aggregated deals from various restaurants and food services</li>
          <li>
            User-friendly search and filter options to find exactly what you're
            craving
          </li>
          <li>Real-time updates on limited-time offers and flash deals</li>
          <li>User reviews and ratings to help you make informed decisions</li>
          <li>Personalized deal recommendations based on your preferences</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
          Our Team
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
