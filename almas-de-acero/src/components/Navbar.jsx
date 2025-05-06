import { useState } from "react";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileDropdownOpen(false); // Cerrar dropdown al cerrar menú móvil
  };

  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevenir que el click se propague
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileDropdown = (e) => {
    e.stopPropagation(); // Prevenir que el click se propague
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  // Cerrar dropdown cuando se hace click fuera
  const handleClickOutside = () => {
    setIsDropdownOpen(false);
  };

  // Agregar event listener para cerrar dropdown al hacer click fuera
  useState(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);

    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="block left-0 right-0 top-0 z-50">
      {/* Desktop Navbar */}
      <div className="hidden h-[65px] w-full items-center justify-between border-black/30 bg-[#C1B396] px-4 py-3 background-blur-lg lg:flex lg:px-4">
        <div className="flex items-center gap-2">
          <NavLink to="/" className="flex items-center gap-2">
            <img src="/logo.png" width={55} alt="logo" />
            <span className="text-md font-semibold">Almas de Acero</span>
          </NavLink>
        </div>
        <div>
          <ul className="flex items-center gap-8 font-semibold relative">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index} className="relative">
                {item.children ? (
                  <>
                    <button
                      onClick={toggleDropdown}
                      className="flex items-center gap-1 text-sm hover:text-[#A18167]"
                    >
                      {item.label}
                    </button>
                    {isDropdownOpen && (
                      <ul className="absolute left-0 mt-6 w-48 flex-col gap-2 rounded-lg bg-[#f3e3d4] pt-1 pb-1 shadow-lg z-50">
                        {item.children.map((child, i) => (
                          <li key={i} className="hover:bg-[#e2d3c5] hover:text-black">
                            <NavLink
                              to={child.href}
                              className={({ isActive }) =>
                                `block px-4 py-2 text-sm ${
                                  isActive ? "text-[#A18167] hover:text-black" : ""
                                }`
                              }
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `text-sm hover:text-[#A18167] ${isActive ? "text-[#A18167]" : ""}`
                    }
                    end={item.href === "/"}
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="h-[65px] w-full border-black/30 bg-[#C1B396] px-4 py-1 lg:hidden">
        <div className="flex items-center justify-between px-4">
          <NavLink to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="logo" width={55} />
            <span className="text-md font-semibold">Almas de Acero</span>
          </NavLink>
          <button
            className="focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="absolute left-0 right-0 top-[65px] bg-[#f3e3d4] shadow-lg z-50">
            <ul className="flex flex-col gap-4 px-4 py-4">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  {item.children ? (
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={toggleMobileDropdown}
                        className="flex items-center justify-between text-lg"
                      >
                        {item.label}
                      </button>
                      {isMobileDropdownOpen && (
                        <ul className="ml-4 flex flex-col gap-1">
                          {item.children.map((child, i) => (
                            <li key={i}>
                              <NavLink
                                to={child.href}
                                className={({ isActive }) =>
                                  `text-base hover:text-[#A18167] ${
                                    isActive ? "text-[#A18167]" : ""
                                  }`
                                }
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsMobileDropdownOpen(false);
                                }}
                              >
                                {child.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `block w-full text-lg hover:text-[#A18167] ${
                          isActive ? "text-[#A18167]" : ""
                        }`
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                      end={item.href === "/"}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
