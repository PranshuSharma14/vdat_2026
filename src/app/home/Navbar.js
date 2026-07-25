"use client";

import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
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

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Registration", href: "/registration" },
    {
      label: "Authors",
      dropdown: [
        { label: "Camera Ready Submission Guidelines", href: "/camera_ready" },
        { label: "Call For Papers", href: "/submissions" },
        { label: "Call for Tutorials", href: "/callfortutorials" },
        { label: "CHIPPRENEUR", href: "/chippreneur" },
        { label: "PHD-FORUM", href: "/phdforum" },
      ],
    },
    {
      label: "Program",
      dropdown: [
        { label: "Main Program", href: "/mpro" },
        { label: "Tutorials", href: "/tut_struct" },
      ],
    },
    { label: "Speakers", href: "/Speakers" },
    { label: "Committee", href: "/committees" },
    { label: "Venue", href: "/venue" },
    { label: "Fellowship", href: "/fellowship" },
    
    {
      label: "Previous Years",
      dropdown: [
        { label: "VDAT 2025", href: "https://vdat.org.in/vdat2025/" },
        { label: "VDAT 2024", href: "https://vit.ac.in/vdat2024/" },
        { label: "VDAT 2023", href: "https://discovery.bits-pilani.ac.in/VDAT2023/" },
        { label: "VDAT 2022", href: "https://iitjammu.ac.in/vdat2022/" },
      ],
    },
    { label: "ContactUs", href: "/Contactus" },
  ];

  return (
    <>
      <style>{`
        .nav-root {
          width: 100%;
          background: linear-gradient(180deg, rgba(5,53,137,0.97) 0%, rgba(4,32,143,0.93) 100%), url('/images/chip.jpeg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-blend-mode: multiply;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(250,204,21,0.18);
          box-shadow: 0 4px 32px rgba(109,40,217,0.25);
          position: relative;
          z-index: 50;
        }

        .nav-root::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #facc15, #a855f7, #facc15, transparent);
        }

        .nav-link {
          color: white;
          font-size: 0.95rem;
          font-weight: 700;
          padding: 8px 14px;
          border-radius: 6px;
          transition: 0.2s;
          white-space: nowrap;
          position: relative;
        }

        .nav-link:hover {
          color: #facc15;
          background: rgba(250,204,21,0.08);
        }

        .dropdown-menu {
          background: linear-gradient(160deg, #1744a5 0%, #2a0860 100%);
          border: 1px solid rgba(250,204,21,0.15);
          border-radius: 12px;
          box-shadow: 0 16px 40px rgba(0,0,0,0.5);
          overflow: hidden;
          min-width: 240px;
        }

        .dropdown-item {
          display: block;
          padding: 10px 16px;
          font-size: 0.82rem;
          font-weight: 500;
          color: rgba(233,213,255,0.85);
          transition: 0.2s;
        }

        .dropdown-item:hover {
          color: #facc15;
          background: rgba(250,204,21,0.07);
          padding-left: 22px;
        }
      `}</style>

      <nav className="nav-root">
        <div className="px-4 sm:px-6">

          {/* TOP ROW */}
          <div className="flex items-center justify-between w-full py-2">

            {/* LEFT LOGO + TITLE */}
            <Link href="/" className="flex items-center gap-4">

              {/* VDAT LOGO */}
              <div
                style={{
                  borderRadius: "10px",
                  padding: "3px",
                  background: "linear-gradient(135deg,#facc15,#a855f7)",
                }}
              >
                <div
                  style={{
                    borderRadius: "8px",
                    overflow: "hidden",
                    background: "rgba(30,5,60,0.9)",
                    padding: "2px",
                  }}
                >
                  <Image
                    src="/vlsi.png"
                    alt="VLSI Logo"
                    width={48}
                    height={48}
                  />
                </div>
              </div>

              {/* TITLE */}
              <div className="flex flex-col leading-none">
                <span
                  className="text-xl sm:text-2xl font-black tracking-widest"
                  style={{
                    background:
                      "linear-gradient(90deg,#facc15 0%,#e879f9 60%,#818cf8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  VDAT 2026
                </span>

                <span
                  className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-medium"
                  style={{ color: "#facc15" }}
                >
                  VLSI DESIGN & TEST
                </span>
              </div>
            </Link>

            {/* RIGHT IEEE LOGO + MOBILE MENU */}
            <div className="flex items-center gap-3">

              {/* IEEE LOGO */}
              <div
                className="hidden lg:flex"
                style={{
                  background: "white",
                  borderRadius: "5px",
                  padding: "5px 6px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
              >
                <Image
                  src="/images/ieeelogo.jpeg"
                  alt="IEEE Logo"
                  width={100}
                  height={20}
                  style={{ objectFit: "contain" }}
                />
              </div>

              {/* MOBILE BUTTON */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center"
                style={{
                  background: "rgba(250,204,21,0.08)",
                  border: "1px solid rgba(250,204,21,0.2)",
                }}
              >
                {isMobileMenuOpen ? (
                  <FaTimes color="#facc15" />
                ) : (
                  <FaBars color="#facc15" />
                )}
              </button>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center flex-wrap pb-2">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  href={item.href || "#"}
                  className="nav-link flex items-center gap-1"
                >
                  {item.label}
                  {item.dropdown && <FaChevronDown size={10} />}
                </Link>

                {item.dropdown && (
                  <div className="dropdown-menu absolute left-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.dropdown.map((drop, i) => (
                      <Link
                        key={i}
                        href={drop.href}
                        className="dropdown-item"
                      >
                        {drop.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-4/5 max-w-xs z-[100] transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background: "linear-gradient(160deg,#140330,#270760)",
        }}
      >
        <div className="flex justify-between items-center px-5 py-4 border-b border-yellow-400/20">
          <span className="text-lg font-bold text-yellow-400">VDAT 2026</span>
          <button onClick={toggleMobileMenu}>
            <FaTimes color="#facc15" />
          </button>
        </div>

        <div className="flex flex-col px-4 py-3">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              href={item.href || "#"}
              className="text-white py-3 border-b border-white/10"
              onClick={toggleMobileMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* OVERLAY */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-[90]"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
};

export default Navbar;