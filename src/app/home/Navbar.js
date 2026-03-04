"use client";

import Link from 'next/link';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';
import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400','700','900'], 
  display: 'swap',
});

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPapersDropdownOpen, setIsPapersDropdownOpen] = useState(false);
  const [isVenueDropdownOpen, setIsVenueDropdownOpen] = useState(false);
  const [isprevyeardropdownopen, setIsprevyeardropdownopen] = useState(false);
  const [isProgramDropdownOpen, setIsProgramDropdownOpen] = useState(false);
  
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleprevyear = () => setIsprevyeardropdownopen(!isprevyeardropdownopen);
  const togglePapersDropdown = () => setIsPapersDropdownOpen(!isPapersDropdownOpen);
  const toggleVenueDropdown = () => setIsVenueDropdownOpen(!isVenueDropdownOpen);
  const toggleProgramDropdown = () => setIsProgramDropdownOpen(!isProgramDropdownOpen);

  const menuItems = [
    { label: "Home", href: "/" },
    {label:"Registration", href:"/registration"},
    {
      label: "Authors",
      onClick: togglePapersDropdown,
      dropdown: [
        {label:"Camera Ready Submission Guidelines", href:"/camera_ready"},
        { label: "Call For Papers", href: "/submissions" },
        { label: "Call for Tutorials", href: "/callfortutorials" },
        {label: "CIRCUITPRENEUR", href: "/circuitpreneur"},
        {label: "PHD-FORUM", href: "/phdforum"},
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
    { label: "Venue", href: "/venue" },
    { label: "Fellowship", href: "/fellowship" },
    { label: "Sponsors", href: "/sponsor" },
    {
      label: "Previous Years",
      dropdown: [
        { label: "VDAT 2025", href: "https://vdat.org.in/" },
        { label: "VDAT 2024", href: "https://vit.ac.in/vdat2024/" },
        { label: "VDAT 2023", href: "https://discovery.bits-pilani.ac.in/VDAT2023/" },
        { label: "VDAT 2022", href: "https://iitjammu.ac.in/vdat2022/" },
      ],
    },
    {label: "ContactUs", href:"/Contactus"}
  ];

  return (
    <>
      <style>{`
        .nav-root {
          width: 100%;
          background: linear-gradient(180deg, rgba(30,5,60,0.97) 0%, rgba(55,15,100,0.93) 100%);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(250,204,21,0.18);
          box-shadow: 0 4px 32px rgba(109,40,217,0.25), 0 1px 0 rgba(250,204,21,0.1);
          position: relative;
          z-index: 50;
        }
        /* Thin yellow accent line at very top */
        .nav-root::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #facc15, #a855f7, #facc15, transparent);
        }
        .nav-link {
          color: rgba(255,255,255,1);
          font-size: 0.88vw;
          font-weight: 600;
          letter-spacing: 0.03em;
          padding: 5px 10px;
          border-radius: 6px;
          transition: all 0.2s ease;
          white-space: nowrap;
          position: relative;
        }
        .nav-link:hover {
          color: #facc15;
          background: rgba(250,204,21,0.08);
        }
        /* Active underline on hover */
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 50%; right: 50%;
          height: 2px;
          background: #facc15;
          transition: left 0.2s ease, right 0.2s ease;
          border-radius: 2px;
        }
        .nav-link:hover::after {
          left: 10px;
          right: 10px;
        }
        .dropdown-menu {
          background: linear-gradient(160deg, #1e0545 0%, #2a0860 100%);
          border: 1px solid rgba(250,204,21,0.15);
          border-radius: 12px;
          box-shadow: 0 16px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(167,139,250,0.1);
          overflow: hidden;
          min-width: 240px;
        }
        .dropdown-item {
          display: block;
          padding: 10px 16px;
          font-size: 0.82rem;
          font-weight: 500;
          color: rgba(233,213,255,0.85);
          border-bottom: 1px solid rgba(167,139,250,0.08);
          transition: all 0.15s ease;
        }
        .dropdown-item:hover {
          color: #facc15;
          background: rgba(250,204,21,0.07);
          padding-left: 22px;
        }
        .dropdown-item:last-child { border-bottom: none; }
      `}</style>

      <nav className="nav-root">
        <div className="flex items-center justify-between lg:block px-4 sm:px-6">

          {/* ── TOP ROW: Logo + Hamburger (mobile) ── */}
          <div className="flex items-center justify-between w-full lg:w-auto">
            <Link href="/" className="flex py-2 items-center gap-3">
              {/* Logo with yellow ring */}
              <div style={{
                borderRadius: '10px',
                padding: '3px',
                background: 'linear-gradient(135deg, #facc15, #a855f7)',
              }}>
                <div style={{borderRadius:'8px', overflow:'hidden', background:'rgba(30,5,60,0.9)', padding:'2px'}}>
                  <Image src="/vlsi.png" alt="VLSI Society of India Logo" width={48} height={48} />
                </div>
              </div>

              {/* Title */}
              <div className="flex flex-col leading-none">
                <span className="text-xl sm:text-2xl font-black tracking-widest"
                  style={{background:'linear-gradient(90deg,#facc15 0%,#e879f9 60%,#818cf8 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>
                  VDAT 2026
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-medium"
                  style={{color:'rgba(250,204,21,1)'}}>
                  VLSI Design &amp; Test
                </span>
              </div>
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden focus:outline-none flex flex-col justify-center items-center gap-[5px] w-9 h-9 rounded-lg"
              style={{background:'rgba(250,204,21,0.08)', border:'1px solid rgba(250,204,21,0.2)'}}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen
                ? <FaTimes size={18} color="#facc15" />
                : <FaBars size={18} color="#facc15" />
              }
            </button>
          </div>

          {/* ── DESKTOP NAV LINKS ── */}
          <div className="hidden lg:flex items-center flex-wrap gap-x-0 gap-y-1 pb-2 pt-0">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  href={item.href || "#"}
                  className="nav-link flex items-center gap-1"
                  onClick={item.onClick}
                >
                  {item.label}
                  {item.dropdown && <FaChevronDown size={9} style={{opacity:1, marginTop:'1px', transition:'transform 0.2s'}} className="group-hover:rotate-180" />}
                </Link>

                {item.dropdown && (
                  <div className="dropdown-menu absolute left-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.dropdown.map((dropdownItem, idx) => (
                      <Link key={idx} href={dropdownItem.href} className="dropdown-item">
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </nav>

      {/* ── MOBILE SLIDE-IN MENU ── */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-4/5 max-w-xs shadow-2xl transition-transform duration-300 z-[100] ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{background:'linear-gradient(160deg,#140330 0%,#270760 100%)', borderLeft:'1px solid rgba(250,204,21,0.15)'}}
      >
        {/* Mobile header */}
        <div className="flex items-center justify-between px-5 py-4" style={{borderBottom:'1px solid rgba(250,204,21,0.12)'}}>
          <span className="text-base font-black tracking-widest"
            style={{background:'linear-gradient(90deg,#facc15,#e879f9)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>
            VDAT 2026
          </span>
          <button onClick={toggleMobileMenu} style={{color:'#facc15'}}>
            <FaTimes size={20} />
          </button>
        </div>

        <div className="flex flex-col py-2 px-3 h-full overflow-y-auto">
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <button
                className="flex items-center justify-between w-full text-left px-4 py-3 text-sm font-semibold rounded-lg transition-colors duration-200"
                style={{color:'rgba(243,232,255,0.9)', borderBottom:'1px solid rgba(167,139,250,0.08)'}}
                onMouseEnter={e => { e.currentTarget.style.color='#facc15'; e.currentTarget.style.background='rgba(250,204,21,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.color='rgba(243,232,255,0.9)'; e.currentTarget.style.background='transparent'; }}
                onClick={() => {
                  if (item.dropdown) {
                    if (item.label === "Authors") setIsPapersDropdownOpen(!isPapersDropdownOpen);
                    else if (item.label === "Program") setIsProgramDropdownOpen(!isProgramDropdownOpen);
                    else if (item.label === "Venue") setIsVenueDropdownOpen(!isVenueDropdownOpen);
                    else if (item.label === "Previous Years") setIsprevyeardropdownopen(!isprevyeardropdownopen);
                  } else {
                    if (item.href) window.location.href = item.href;
                    toggleMobileMenu();
                  }
                }}
              >
                {item.label}
                {item.dropdown && (
                  <FaChevronDown size={10} style={{
                    color:'rgba(250,204,21,0.6)',
                    transform: (
                      (item.label === "Authors" && isPapersDropdownOpen) ||
                      (item.label === "Program" && isProgramDropdownOpen) ||
                      (item.label === "Venue" && isVenueDropdownOpen) ||
                      (item.label === "Previous Years" && isprevyeardropdownopen)
                    ) ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition:'transform 0.2s'
                  }} />
                )}
              </button>

              {item.dropdown && (
                <div className={`pl-3 ${
                  (item.label === "Authors" && isPapersDropdownOpen) ||
                  (item.label === "Program" && isProgramDropdownOpen) ||
                  (item.label === "Venue" && isVenueDropdownOpen) ||
                  (item.label === "Previous Years" && isprevyeardropdownopen)
                    ? "block" : "hidden"
                }`}>
                  {item.dropdown.map((dropdownItem, idx) => (
                    <Link
                      key={idx}
                      href={dropdownItem.href}
                      className="block px-4 py-2.5 text-xs font-medium rounded-lg transition-colors duration-150"
                      style={{color:'rgba(196,181,253,0.8)', borderLeft:'2px solid rgba(250,204,21,0.25)', marginBottom:'2px'}}
                      onMouseEnter={e => { e.currentTarget.style.color='#facc15'; }}
                      onMouseLeave={e => { e.currentTarget.style.color='rgba(196,181,253,0.8)'; }}
                      onClick={toggleMobileMenu}
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

      {/* Tap-outside overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/60 z-[90]" onClick={toggleMobileMenu} />
      )}
    </>
  );
};

export default Navbar;