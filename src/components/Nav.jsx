"use client"

import { useState, useEffect } from "react"
import { Menu, X, ShoppingCart, User, Home, Headphones } from "lucide-react"
import logo from "../assets/logo.jpg"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <nav className={`bg-white sticky top-0 z-50 ${scrolled ? "shadow-lg" : "shadow-sm"} transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/Home" className="transform hover:scale-105 transition-transform duration-300">
                  <img
                    className="h-10 w-auto object-contain"
                    src={logo || "/placeholder.svg"}
                    alt="Crave Corner Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                <NavLink to="/Home" icon={<Home className="w-5 h-5" />}>
                  Home
                </NavLink>
                <NavLink to="/Home/support" icon={<Headphones className="w-5 h-5" />}>
                  Support
                </NavLink>
                <NavLink to="/Home/cart/" icon={<ShoppingCart className="w-5 h-5" />}>
                  Myorders
                </NavLink>
                <NavLink
                  to="/"
                  icon={<User className="w-5 h-5" />}
                  className="bg-gradient-to-r from-[#ff3131] to-[#ff5733] text-white hover:from-[#e62c2c] hover:to-[#e64e2e]"
                >
                  Logout
                </NavLink>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full text-gray-700 hover:text-[#ff3131] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#ff3131] transition-all duration-200"
                aria-expanded={isOpen}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6 animate-spin-once" />
                ) : (
                  <Menu className="h-6 w-6 hover:rotate-12 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {isOpen && (
          <div className="md:hidden animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <MobileNavLink to="/Home" icon={<Home className="w-5 h-5" />}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/Home/support" icon={<Headphones className="w-5 h-5" />}>
                Support
              </MobileNavLink>
              <MobileNavLink to="/Home/cart/" icon={<ShoppingCart className="w-5 h-5" />}>
                Myorders
              </MobileNavLink>
              <MobileNavLink
                to="/"
                icon={<User className="w-5 h-5" />}
                className="bg-gradient-to-r from-[#ff3131] to-[#ff5733] text-white"
              >
                Logout
              </MobileNavLink>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

const NavLink = ({ to, icon, children, className = "" }) => (
  <Link
    to={to}
    className={`text-gray-700 hover:bg-gray-100 hover:text-[#ff3131] px-4 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 ease-in-out hover:scale-105 transform ${className}`}
  >
    <span className="mr-2 transform group-hover:rotate-12 transition-transform duration-300">{icon}</span>
    <span>{children}</span>
  </Link>
)

const MobileNavLink = ({ to, icon, children, className = "" }) => (
  <Link
    to={to}
    className={`text-gray-700 hover:bg-gray-100 hover:text-[#ff3131] block px-3 py-3 rounded-md text-base font-medium flex items-center transition-all duration-300 ease-in-out hover:translate-x-1 transform ${className}`}
  >
    <span className="mr-3 text-gray-500">{icon}</span>
    <span>{children}</span>
  </Link>
)

export default Navbar
