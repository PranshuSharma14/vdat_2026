"use client";

import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPapersDropdownOpen, setIsPapersDropdownOpen] = useState(false);
  const [isVenueDropdownOpen, setIsVenueDropdownOpen] = useState(false);
  const [isprevyeardropdownopen, setIsprevyeardropdownopen] = useState(false);
  const [isProgramDropdownOpen, setIsProgramDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleprevyear = () =>
    setIsprevyeardropdownopen(!isprevyeardropdownopen);
  const togglePapersDropdown = () =>
    setIsPapersDropdownOpen(!isPapersDropdownOpen);
  const toggleVenueDropdown = () =>
    setIsVenueDropdownOpen(!isVenueDropdownOpen);
  const toggleProgramDropdown = () =>
    setIsProgramDropdownOpen(!isProgramDropdownOpen);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Registration", href: "/registration" },

    {
      label: "Authors",
      onClick: togglePapersDropdown,
      dropdown: [
        {
          label: "Camera Ready Submission Guidelines",
          href: "/camera_ready",
        },
        { label: "Call For Papers", href: "/submissions" },
        { label: "Call for Tutorials", href: "/callfortutorials" },
        { label: "CIRCUITPRENEUR", href: "/circuitpreneur" },
        { label: "PHD-FORUM", href: "/phdforum" },
      ],
    },

    {
      label: "Program",
      onClick: toggleProgramDropdown,
      dropdown: [
        { label: "Main Program", href: "/mpro" },
        { label: "Tutorials", href: "/tut_struct" },
      ],
    },

    { label: "Speakers", href: "/Speakers" },
    { label: "Committee", href: "/committees" },

    {
      label: "Venue",
      href: "/venue",
    },

    { label: "Fellowship", href: "/fellowship" },
    { label: "Sponsors", href: "/sponsor" },

    {
      label: "Previous Years",
      dropdown: [
        { label: "VDAT 2024", href: "https://vit.ac.in/vdat2024/" },
        {
          label: "VDAT 2023",
          href: "https://discovery.bits-pilani.ac.in/VDAT2023/",
        },
        { label: "VDAT 2022", href: "https://iitjammu.ac.in/vdat2022/" },
      ],
    },

    { label: "ContactUs", href: "/Contactus" },
  ];

  return (
    <nav className="px-3 bg-black text-white sticky top-0 z-50 shadow-md bg-opacity-30">
      <div className="lg:block flex">
        {/* Logo */}
        <Link href="/" className="flex mx-5 mt-3 items-center gap-3">
          <Image
            src="/vlsi.png"
            alt="VLSI Society of India Logo"
            width={55}
            height={55}
            className="drop-shadow-lg"
          />

          <h2
            className="
            text-3xl md:text-4xl font-extrabold tracking-wide
            bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-400
            text-transparent bg-clip-text
            drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)]
          "
          >
            VDAT 2026
          </h2>
        </Link>

        <div className="container mx-1 py-2 justify-between items-center">
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 lg:space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="nav relative group">
                <Link
                  href={item.href || "#"}
                  onClick={item.onClick}
                  className="
                    text-lg lg:text-[1.4vw] font-semibold tracking-wider text-white
                    drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]
                    transition-all duration-300
                    hover:text-yellow-400 hover:scale-105
                  "
                >
                  {item.label}
                </Link>

                {item.dropdown && (
                  <ul
                    className="
                    absolute left-0 mt-2 w-56 bg-gray-900 rounded-lg shadow-lg
                    s-0 invisible group-hover:opacity-100
                    group-hover:visible transition-all
                  "
                  >
                    {item.dropdown.map((dropdownItem, idx) => (
                      <li key={idx}>
                        <Link
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-base font-medium hover:bg-gray-800 hover:text-purple-500"
                        >
                          {dropdownItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-end justify-end object-left">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-gray-900 shadow-lg transition-transform transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col py-4 px-6 h-full">
            <button
              onClick={toggleMobileMenu}
              className="absolute top-4 right-4 text-white"
            >
              <FaTimes size={24} />
            </button>

            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                <button
                  className="
                    block w-full text-left px-6 py-3 text-lg font-medium
                    hover:bg-gray-800 hover:text-purple-500
                    transition-colors duration-300 rounded-lg
                  "
                  onClick={() => {
                    if (item.dropdown) {
                      if (item.label === "Authors") {
                        setIsPapersDropdownOpen(!isPapersDropdownOpen);
                      } else if (item.label === "Program") {
                        setIsProgramDropdownOpen(!isProgramDropdownOpen);
                      } else if (item.label === "Venue") {
                        setIsVenueDropdownOpen(!isVenueDropdownOpen);
                      } else if (item.label === "Previous Years") {
                        setIsprevyeardropdownopen(!isprevyeardropdownopen);
                      }
                    } else {
                      if (item.href) {
                        window.location.href = item.href;
                      }
                      toggleMobileMenu();
                    }
                  }}
                >
                  {item.label}
                </button>

                {item.dropdown && (
                  <div
                    className={`pl-6 ${
                      (item.label === "Authors" && isPapersDropdownOpen) ||
                      (item.label === "Program" && isProgramDropdownOpen) ||
                      (item.label === "Venue" && isVenueDropdownOpen) ||
                      (item.label === "Previous Years" &&
                        isprevyeardropdownopen)
                        ? "block"
                        : "hidden"
                    }`}
                  >
                    {item.dropdown.map((dropdownItem, idx) => (
                      <Link
                        key={idx}
                        href={dropdownItem.href}
                        onClick={toggleMobileMenu}
                        className="block px-6 py-3 text-base font-medium hover:bg-gray-800 hover:text-purple-500"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;