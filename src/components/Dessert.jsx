import { Link } from "react-router-dom"

// Import images
import cake from "../assets/cake.jpg"
import icecream from "../assets/icecream.jpg"
import cookies from "../assets/cookies.jpg"
import pie from "../assets/pie.jpg"
import brownies from "../assets/brownies.jpg"
import Doughnuts from "../assets/Doughnuts.jpg"
import FriedDesserts from "../assets/FriedDesserts.jpg"
import Pudding from "../assets/Pudding.jpg"
import Pastries from "../assets/Pastries.jpg"
import gulabjamun from "../assets/gulabjamun.jpg"
import jalebi from "../assets/jalebi.jpg"
import halwa from "../assets/halwa.jpg"

const DessertGallery = () => {
  const desserts = [
    {
      name: "Cake",
      image: cake,
      alt: "A slice of chocolate cake on a black plate",
      link: "/desserts/cake",
      description: "Moist, delicious cakes for every occasion",
    },
    {
      name: "Ice Cream",
      image: icecream,
      alt: "Bowls of green and pink ice cream with a spoon",
      link: "/desserts/Icecream",
      description: "Creamy, cold treats in various flavors",
    },
    {
      name: "Cookies",
      image: cookies,
      alt: "Chocolate chip cookies stacked on a dark background",
      link: "/desserts/Cookies",
      description: "Freshly baked cookies with perfect texture",
    },
    {
      name: "Pie",
      image: pie,
      alt: "A delicious slice of pie on a plate",
      link: "/desserts/Pie",
      description: "Flaky crusts with sweet and savory fillings",
    },
    {
      name: "Brownies",
      image: brownies,
      alt: "Chocolate brownies stacked on a plate",
      link: "/desserts/Brownie",
      description: "Rich, fudgy chocolate brownies",
    },
    {
      name: "Doughnuts",
      image: Doughnuts,
      alt: "A variety of doughnuts on a tray",
      link: "/desserts/Doughnuts",
      description: "Soft, fluffy doughnuts with various toppings",
    },
    {
      name: "Fried Desserts",
      image: FriedDesserts,
      alt: "Golden crispy fried desserts",
      link: "/desserts/FriedDesserts",
      description: "Crispy, golden treats for indulgent moments",
    },
    {
      name: "Pudding",
      image: Pudding,
      alt: "A selection of Pudding",
      link: "/desserts/Pudding",
      description: "Smooth, creamy puddings for comfort",
    },
    {
      name: "Pastries",
      image: Pastries,
      alt: "A selection of Pastries",
      link: "/desserts/Pastries",
      description: "Delicate, flaky pastries with sweet fillings",
    },
    {
      name: "Gulab Jamun",
      image: gulabjamun,
      alt: "A bowl of gulab jamun",
      link: "/desserts/GulabJamun",
      description: "Sweet, syrupy Indian dessert balls",
    },
    {
      name: "Jalebi",
      image: jalebi,
      alt: "Crispy orange jalebi",
      link: "/desserts/Jalebi",
      description: "Crispy, syrup-soaked spiral treats",
    },
    {
      name: "Halwa",
      image: halwa,
      alt: "A bowl of delicious halwa",
      link: "/desserts/Halwa",
      description: "Rich, sweet pudding-like dessert",
    },
  ]

  return (
    <div className="bg-[#f8f8f0] min-h-screen py-12">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] bg-cover bg-center mb-12" style={{ backgroundImage: `url(${cake})` }}>
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold text-center">
            Sweet <span className="text-[#ff3131]">Treats</span>
          </h1>
          <p className="text-2xl md:text-3xl font-medium mt-4 text-center">Indulge in Delicious Desserts</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#122348]">Our Dessert Collection</h2>
          <div className="w-24 h-1 bg-[#ff3131] mx-auto mt-4"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Treat yourself to something sweet! Explore our delightful selection of desserts crafted to satisfy your
            cravings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {desserts.map((dessert, index) => (
            <Link key={index} to={dessert.link} className="group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl transform group-hover:-translate-y-1">
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={dessert.image || "/placeholder.svg"}
                    alt={dessert.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-all duration-300">
                    <h3 className="text-white font-bold text-lg">{dessert.name}</h3>
                    <p className="text-gray-200 text-sm">{dessert.description}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#122348] text-lg">{dessert.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{dessert.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#122348] py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Satisfy Your Sweet Tooth?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Order now and treat yourself to our delicious desserts. Perfect for any occasion or just because you deserve
            it!
          </p>
          <Link
            to="/desserts/cake"
            className="px-6 py-3 bg-[#ff3131] text-white rounded-full font-medium hover:bg-[#e62c2c] transition-colors inline-block"
          >
            Order Desserts Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DessertGallery

