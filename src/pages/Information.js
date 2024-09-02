import Footer from "../components/footer";
import Header from "../components/header";
import { Helmet } from "react-helmet";

function Information() {
  const plantCategories = [
    {
      title: "Flowering Plants",
      description: "Flowering plants, also known as angiosperms, are the most diverse group of land plants. They produce flowers and seeds enclosed within a fruit."
    },
    {
      title: "Herbs",
      description: "Herbs are plants with savory or aromatic properties that are used for flavoring and garnishing food, for medicinal purposes, or for fragrances."
    },
    {
      title: "Ferns",
      description: "Ferns are non-flowering plants with feathery leaves, known as fronds. They reproduce via spores and thrive in shady, moist environments."
    },
    {
      title: "Succulents",
      description: "Succulents are drought-resistant plants with thick, fleshy leaves that store water. They are popular for their low maintenance and unique appearance."
    },
    {
      title: "Cacti",
      description: "Cacti are a type of succulent that store water in their thick, spiny stems. They are well-adapted to arid environments and require minimal watering."
    },
    {
      title: "Trees",
      description: "Trees are perennial plants with an elongated stem or trunk. They provide shade, oxygen, and habitats for numerous species of wildlife."
    },
    {
      title: "Shrubs",
      description: "Shrubs are woody plants with multiple stems and are shorter than trees. They are commonly used in landscaping for their dense foliage."
    },
    {
      title: "Vines",
      description: "Vines are climbing plants that grow along the ground or climb up structures. They are often used to cover walls, trellises, and other vertical spaces."
    },
    {
      title: "Aquatic Plants",
      description: "Aquatic plants, also known as hydrophytes, are plants that have adapted to living in water environments, both fresh and saltwater."
    }
  ];

  return (
    <div className="font-montserrat bg-green-100 min-h-screen">
      <Helmet>
        <title>Types of Plants - Comprehensive Guide to Flowering, Succulents, Trees, and More</title>
        <meta
          name="description"
          content="Explore the diverse world of plants with our comprehensive guide to flowering plants, succulents, trees, herbs, and more. Learn about different plant types and their care needs."
        />
        <meta
          name="keywords"
          content="types of plants, flowering plants, succulents, trees, herbs, ferns, aquatic plants, plant care, plant categories, gardening tips"
        />
      </Helmet>
      <Header />
      <div className="max-w-7xl mx-auto p-6">
        {/* Enhanced H1 Tag with Keywords */}
        <h1 className="text-3xl font-semibold mb-8 text-center text-emerald-700">
          Comprehensive Guide to Plant Types and Categories
        </h1>

        {/* Introduction Section with H2 Tag */}
        <h2 className="text-2xl font-semibold mb-6 text-emerald-600 text-center">
          Explore Different Types of Plants: From Flowering to Aquatic Plants
        </h2>

        {/* Plant Categories Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plantCategories.map((category, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              {/* Each Plant Category Title as an H3 Tag */}
              <h3 className="text-xl font-semibold mb-4 text-emerald-700">{category.title}</h3>
              <p className="text-gray-700">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Information;
