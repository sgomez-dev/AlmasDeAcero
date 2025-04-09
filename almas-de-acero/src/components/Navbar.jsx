import { useState } from "react";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
    <nav className="fixed left-0 right-0 top-0 z-50">
      {/* Desktop Navbar */}
      <div className="hidden h-[65px] w-full items-center justify-between border-black/30 bg-[#C1B396] px-4 py-3 background-blur-lg lg:flex lg:px-8">
        <div className="flex items-center gap-2">
          <NavLink to="/" className="flex items-center gap-2">
            <img src="/logo.png" width={55} alt="logo" />
            <span className="text-md font-semibold">Almas de Acero</span>
          </NavLink>
        </div>
        <div>
          <ul className="flex items-center gap-8 font-semibold">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `text-sm hover:text-[#A18167] ${
                      isActive ? "text-[#A18167]" : ""
                    }`
                  }
                  end={item.href === "/"}
                >
                  {item.label}
                </NavLink>
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
          <ul className="flex flex-col gap-4 bg-[#f3e3d4] px-4 py-4 rounded-2xl">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
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
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
