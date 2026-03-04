import React from "react";
import Image from "next/image";
import Navbar from "../home/Navbar";
import Footer from "../footer/footer";
import { MapPin, Plane, Train, Bus, Navigation, ExternalLink, Map, Hotel, Globe } from "lucide-react";

const VenuePage = () => {
  const attractions = [
    {
      name: "City Centre",
      image: "/images/chandigarh-city.jpg",
      description: "Experience the buzz of Chandigarh's vibrant shopping and dining scene.",
      link: "https://en.wikipedia.org/wiki/Chandigarh"
    },
    {
      name: "Rose Garden",
      image: "/images/rose-garden.jpg",
      description: "Take a leisurely walk through one of Asia's largest rose gardens.",
      link: "https://www.chandigarhtourism.gov.in"
    },
    {
      name: "Rock Garden",
      image: "/images/rock-garden.jpg",
      description: "Explore the unique sculptures and artistic flair of this famed garden.",
      link: "https://en.wikipedia.org/wiki/Rock_Garden_(Chandigarh)"
    }
  ];

  const transportOptions = [
    {
      mode: "By Air",
      icon: <Plane className="text-white" size={24} />,
      color: "bg-blue-500",
      description: "The nearest airport is Chandigarh International Airport (about 12 km away). Taxis and ride-sharing services are readily available."
    },
    {
      mode: "By Train",
      icon: <Train className="text-white" size={24} />,
      color: "bg-green-500",
      description: "Chandigarh Railway Station is approximately 8 km from the hotel. Taxis or auto-rickshaws can make the transfer comfortable and quick."
    },
    {
      mode: "By Bus",
      icon: <Bus className="text-white" size={24} />,
      color: "bg-purple-500",
      description: "The hotel is well-connected via local and intercity bus services with nearby stops in Sector 17."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen font-sans">
      <div className="bg-black"  > 
      <Navbar />
      </div>
      
      {/* Hero Section with Parallax Effect */}
      <header
        className="text-center text-white py-20 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/iit-ropar-5.avif')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-indigo-900/80"></div>
        <div className="relative z-10 px-4 py-16">
          <h1 className="text-6xl font-extrabold tracking-tight uppercase mb-4 drop-shadow-lg">Conference Venue</h1>
          <div className="flex items-center justify-center mt-6">
            <MapPin className="text-white mr-2" size={24} />
            <h2 className="text-3xl font-light">Hotel Shivalik View, Chandigarh</h2>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-16 px-6 md:px-12">
        {/* Hotel Info Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-violet-800 uppercase relative inline-block">
              About the Venue
              <div className="h-1 w-24 bg-violet-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
            </h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/3 relative h-64 md:h-auto">
                <div className="absolute inset-0 flex items-center justify-center object-fill">
                  <Image src = "/image.png" width = {810} height = {810} alt = {"Hotel.Img"} className="object-fit"/>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">4-Star Hotel</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded ml-2">City Center</span>
                </div>
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">Hotel Shivalik View</h3>
                <div className="space-y-4 text-gray-700 text-lg">
                  <p>
                    Hotel Shivalikview is a contemporary 4-star hotel nestled in Sector 17E of Chandigarh.
                    It boasts stylish, modern rooms with scenic views of a vibrant rose garden and the majestic
                    Shivalik mountain range.
                  </p>
                  <p>
                    Designed with the modern traveler in mind, the hotel offers all the amenities required for
                    both business and leisure stays. Its prime location ensures easy access to the city's key attractions.
                  </p>
                  <div className="mt-6">
                    <a
                      href="https://www.makemytrip.com/hotels/hotel_shivalikview-details-chandigarh.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 transition-colors"
                    >
                      View Hotel Details
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map and Directions */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-violet-800 uppercase relative inline-block">
              How to Reach
              <div className="h-1 w-24 bg-violet-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
            </h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="md:flex flex-row-reverse">
              <div className="md:w-1/2 relative h-80 md:h-auto">
                <a
                  href="https://www.google.com/maps/place/Hotel+Shivalikview/@30.7400909,76.773977,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                >
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJq6qqqgvtDzkRf6uYDdYE1UE&key=AIzaSyCeb_aqbbf8o4741BoBP7UFbywjrVqhrv0"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Hotel Shivalikview Map"
                  ></iframe>
                </a>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-6">
                  <Map size={24} className="text-indigo-600 mr-2" />
                  <h3 className="text-2xl font-semibold text-gray-800">Transportation Options</h3>
                </div>
                <div className="space-y-6">
                  {transportOptions.map((option, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <span className={`flex-shrink-0 p-2 ${option.color} rounded-full`}>
                        {option.icon}
                      </span>
                      <div>
                        <h3 className="font-medium text-xl text-gray-800">{option.mode}</h3>
                        <p className="text-gray-600">{option.description}</p>
                      </div>
                    </div>
                  ))}
                  <div className="mt-6">
                    <a
                      href="https://www.google.com/maps/place/Hotel+Shivalikview/@30.7400909,76.773977,17z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 transition-colors"
                    >
                      Get Directions
                      <Navigation size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Discover Chandigarh Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-violet-800 uppercase relative inline-block">
              Discover Chandigarh
              <div className="h-1 w-24 bg-violet-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
            </h2>
          </div>
          
          <div className="flex items-center justify-center mb-8">
            <div className="p-4 bg-purple-100 rounded-full">
              <Globe size={36} className="text-purple-700" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-48">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{attraction.name}</h3>
                  <p className="text-gray-600 mb-4">{attraction.description}</p>
                  <a
                    href={attraction.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    Learn more
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a
              href="https://www.chandigarhtourism.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors shadow-md"
            >
              Explore More of Chandigarh
              <ExternalLink size={18} className="ml-2" />
            </a>
          </div>
        </section>
        
        {/* Conference Facilities */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-violet-800 uppercase relative inline-block">
              Conference Facilities
              <div className="h-1 w-24 bg-violet-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
            </h2>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">Modern Conference Halls</h3>
                <p>State-of-the-art facilities equipped with the latest audiovisual technology</p>
              </div>
              <div className="p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">Exhibition Space</h3>
                <p>Dedicated areas for sponsors and exhibitors to showcase their products</p>
              </div>
              <div className="p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">Networking Lounges</h3>
                <p>Comfortable spaces designed to facilitate meaningful connections</p>
              </div>
              <div className="p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">High-Speed WiFi</h3>
                <p>Complimentary high-speed internet access throughout the venue</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default VenuePage;