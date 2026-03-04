import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {

  const partnerLogos = {
    "JIIT NOIDA": "/logos/jiit.png",
    "Delhi Technological University": "/logos/dtu.jpeg",
    "IIIT Delhi": "/logos/iiitdelhi.png",
    "IGDTUW": "/logos/igdtuw.jpeg",
    "NSUT": "/logos/nsut.png",
    "NIT Delhi": "/logos/nitdelhi.png",
  };

  const sponsorLogos = {
    "Platinum Partner": "/logos/iit-mandi1.png",
    "Silver Partner": "/logos/OS.png",
    "Gold Partner": "/images/Agmatel_Keyisght Logo HD.png",
    "Gold Partner, Media Partner": "/images/yourpedia.png",
    "Publication Sponsor": "/images/springer.png",
    "Inauguration Sponsor": "/logos/NXP.jpg",
    "Startup Partner": "/logos/SOC.png",
    "Exhibitor": "/logos/sqube.png",
  };

  return (
    <footer
      className="relative text-white py-16 px-4 md:px-8 overflow-hidden"
      style={{ backgroundColor: "#6c21a8" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* =========================
           Partner Institutes
        ========================= */}

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-10">
            Organising Partner Institutes
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {Object.entries(partnerLogos).map(([name, src]) => (
              <div
                key={name}
                className="relative group bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                style={{ aspectRatio: "4/3", minHeight: "120px" }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={name}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium block text-center">
                    {name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}

        <div className="border-t border-white/20 my-12"></div>

        {/* =========================
           Sponsors
        ========================= */}

        {/* =========================
           Sponsors
========================= */}

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Our Sponsors
          </h3>

          {/* Coming Soon Section */}

          <div className="flex flex-col items-center justify-center py-16">

            <div className="text-6xl mb-6 animate-pulse">🚀</div>

            <h4 className="text-3xl font-semibold text-gray-200 mb-4">
              Sponsors Coming Soon
            </h4>

            <p className="text-gray-400 text-lg max-w-xl text-center">
              We are currently finalizing our sponsorship partnerships. 
              Stay tuned for exciting announcements from our esteemed sponsors.
            </p>

          </div>


          {/* =========================
                ORIGINAL SPONSOR CODE
                (COMMENTED OUT)
          ========================= */}

          {/*
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
            {Object.entries(sponsorLogos).map(([category, src]) => {

              let badgeColor = "bg-green-500";

              if (category.includes("Platinum"))
                badgeColor = "bg-gradient-to-r from-gray-400 to-gray-600";

              else if (category.includes("Silver"))
                badgeColor = "bg-gradient-to-r from-gray-400 to-gray-600";

              else if (category.includes("Gold"))
                badgeColor = "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black";

              else if (category.includes("Publication"))
                badgeColor = "bg-gradient-to-r from-blue-400 to-blue-600";

              return (
                <div
                  key={category}
                  className="relative group w-full max-w-xs"
                >

                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <div className={`px-4 py-2 rounded-full text-xs font-bold shadow-lg ${badgeColor}`}>
                      {category}
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 pt-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border-2 border-white/20 hover:border-white/40">

                    <div className="relative w-full h-24">
                      <Image
                        src={src}
                        alt={category}
                        fill
                        className="object-contain"
                      />
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
          */}

        </div>

        {/* Divider */}

        {/* Bottom Section */}
          <div className="border-t border-white/20 pt-8 text-center space-y-3">

            {/* Copyright */}

            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} All rights reserved.
            </p>

            {/* Developer Credit */}

           <p className="text-sm text-gray-200 flex justify-center items-center gap-2 flex-wrap">
              Designed & Developed by

              <Link
                href="https://www.linkedin.com/in/pranshu-sharma-6a84132a5"
                target="_blank"
                className="font-semibold hover:underline flex items-center gap-1"
              >
                Pranshu Sharma
                <FaLinkedin size={14} />
              </Link>

              <span>and</span>

              <Link
                href="https://www.linkedin.com/in/suryanshtomar/?originalSubdomain=in"
                target="_blank"
                className="font-semibold hover:underline flex items-center gap-1"
              >
                Suryansh Tomar
                <FaLinkedin size={14} />
              </Link>
            </p>
          </div>
      </div>

      {/* Decorative Background */}

      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      </div>

    </footer>
  );
};

export default Footer;