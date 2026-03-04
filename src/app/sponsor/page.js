  import React from 'react';
  import Footer from '../footer/footer';
  import Navbar from '../home/Navbar';
  import { CheckCircle, Mail, X, Star, Award, Shield, FileDown } from "lucide-react";

  const sponsorshipTiers = [
    { 
      tier: "Platinum", 
      amount: "5,00,000/-", 
      icon: <Award className="text-yellow-400 mx-auto mb-2" size={40} />,
      benefits: [true, true, true, "8", "3", true, true, true, true, true, true, true] 
    },
    { 
      tier: "Gold", 
      amount: "3,50,000/-", 
      icon: <Star className="text-yellow-500 mx-auto mb-2" size={36} />,
      benefits: [true, true, true, "5", "2", true, true, true, true, false, false, false] 
    },
    { 
      tier: "Silver", 
      amount: "2,00,000/-", 
      icon: <Shield className="text-gray-400 mx-auto mb-2" size={32} />,
      benefits: [true, true, true, "3", "1", false, false, false, false, false, false, false] 
    },
    { 
      tier: "Bronze", 
      amount: "1,50,000/-", 
      icon: <Shield className="text-amber-700 mx-auto mb-2" size={28} />,
      benefits: [true, true, true, "2", false, false, false, false, false, false, false, false] 
    }
  ];

  const advertisements = [
    { type: "Full Page", cost: "Rs. 30,000/-", description: "Maximum visibility with a complete page dedicated to your advertisement" },
    { type: "Half Page", cost: "Rs. 20,000/-", description: "Excellent visibility with half a page for your advertisement" },
    { type: "Quarter Page", cost: "Rs. 10,000/-", description: "Cost-effective option with quarter page space" }
  ];

  const benefitLabels = [
    "Sponsorship Amount", 
    "Name and logo on the website",
    "Banner at the main venue entrance",
    "Logo on background screens",
    "Complimentary Registrations", 
    "Standees at the venue",  
    "Product Exhibition Booth", 
    "Company flyer/souvenir in the registration kit",
    "Slot in Panel Discussion",  
    "Banner at Lunch venue", 
    "Banner at Dinner venue",  
    "Keynote Speech", 
    "Logo on the registration kit"
  ];

  const SponsorshipPage = () => {
    return (
      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
        <div className="bg-black"  > 
        <Navbar />
        </div>
        {/* Hero Section with Parallax Effect */}
        <header
          className="text-center text-white py-20 relative bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/iit-ropar-5.avif')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-violet-900/80"></div>
          <div className="relative z-10 px-4 py-16">
            <h1 className="text-6xl font-extrabold tracking-tight uppercase mb-4 drop-shadow-lg">Sponsors</h1>
            <p className="text-xl max-w-2xl mx-auto font-light">Join leading companies supporting innovation in VLSI design</p>
            
          </div>
        </header>

        {/* Current Partners Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-violet-800 uppercase relative inline-block">
            Our Partners
            <div className="h-1 w-24 bg-violet-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h2>
        </div>

        {/* Platinum Partner */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-violet-700 mb-8">Platinum Partner</h3>
          <div className="flex justify-center items-center">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-64 h-48 flex items-center justify-center">
              <img 
                src="../logos/mandi__.png" 
                alt="IIT Mandi Logo" 
                className="max-w-full max-h-full"
              />
            </div>
          </div>
        </div>

        {/* Gold Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-violet-700 mb-8">Gold Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-48 flex items-center justify-center">
              <img 
                src="../images/Agmatel_Keyisght Logo HD.png" 
                alt="Agmetal-Keysight Logo" 
                className="max-w-full max-h-full"
                style={{ paddingRight: "30px" }}
              />
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-48 flex items-center justify-center">
              <img 
                src="../images/yourpedia.png"
                alt="Yourpedia Logo"
                className="max-w-full max-h-full"
                style={{ paddingRight: "30px" }}
              />
            </div>
          </div>
        </div>
        {/* {Media Partners} */}
        <div>
          <h3 className="text-2xl font-bold text-center text-violet-700 mb-8">Media Partner</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-48 flex items-center justify-center">
              <img 
                src="../images/yourpedia.png" 
                alt="Yourpedia Logo" 
                className="max-w-full max-h-full"
                style={{ paddingRight: "30px" }}
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center text-violet-700 mb-4 mt-4">StartUp Partner</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-48 flex items-center justify-center">
              <img 
                src="../logos/SOC.png" 
                alt="Yourpedia Logo" 
                className="max-w-full max-h-full"
                style={{ paddingRight: "30px" }}
              />
            </div>
          </div>
        </div>

        {/* Publication Sponsors */}
        <div className="py-8">
          <h3 className="text-2xl font-bold text-center text-violet-700 mb-8">Inaugration Sponsors</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-48 flex items-center justify-center">
              <img 
                src="../logos/NXP.jpg" 
                alt="NXP_Logo" 
                className="max-w-full max-h-full"
                style={{ paddingRight: "30px" }}
              />
            </div>
          </div>
        </div>
        <div className="py-8">
          <h3 className="text-2xl font-bold text-center text-violet-700 mb-8">Publication Sponsors</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-48 flex items-center justify-center">
              <img 
                src="../images/springer.png" 
                alt="Springer Logo" 
                className="max-w-full max-h-full"
                style={{ paddingRight: "30px" }}
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-center text-violet-700 mb-8">Silver Sponsors</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-48 flex items-center justify-center">
              <img 
                src="../logos/OS.png" 
                alt="Orbit & Skyline India Pvt. Ltd Logo" 
                className="max-w-full max-h-full"
                style={{ paddingRight: "30px" }}
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-center text-violet-700 mb-4 mt-4">Exhibitor</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-48 flex items-center justify-center">
              <img 
                src="../logos/sqube.png" 
                alt="S-Qube systems Logo" 
                className="max-w-full max-h-full"
                style={{ paddingRight: "30px" }}
              />
            </div>
          </div>
        </div>
      </section>

        {/* Call for Sponsors Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-violet-800 uppercase relative inline-block">
              Call for Sponsors
              <div className="h-1 w-24 bg-violet-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
            </h2>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              VDAT-2025 presents an excellent opportunity for companies and organizations to contribute as sponsors. 
              This prestigious event serves as a crucial platform for professionals in the VLSI design field. 
              By sponsoring VDAT-2025, companies can:
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-violet-600 mr-2 mt-1">•</span>
                <span>Increase brand visibility among industry leaders and researchers</span>
              </li>
              <li className="flex items-start">
                <span className="text-violet-600 mr-2 mt-1">•</span>
                <span>Showcase products and technologies to a targeted audience</span>
              </li>
              <li className="flex items-start">
                <span className="text-violet-600 mr-2 mt-1">•</span>
                <span>Contribute to the advancement of VLSI design in India</span>
              </li>
              <li className="flex items-start">
                <span className="text-violet-600 mr-2 mt-1">•</span>
                <span>Network with potential clients, partners, and talent</span>
              </li>
            </ul>
            
            {/* PDF Download Link in the sponsor section */}
            <div className="mt-6 text-center">
              <a 
                href="..\pdfs\VDAT2025 - sponsorship.pdf" 
                download
                className="inline-flex items-center text-violet-700 hover:text-violet-900 font-medium"
              >
                <FileDown className="mr-1" size={18} />
                Download detailed sponsorship information
              </a>
            </div>
          </div>
        </section>

        {/* Sponsorship Cards */}
        <section className="container mx-auto px-6 py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-violet-800 uppercase relative inline-block">
              Sponsorship Tiers
              <div className="h-1 w-24 bg-violet-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {sponsorshipTiers.map((tier, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden border-t-4 ${
                tier.tier === "Platinum" ? "border-yellow-400" : 
                tier.tier === "Gold" ? "border-yellow-500" : 
                tier.tier === "Silver" ? "border-gray-400" : "border-amber-700"
              } hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                <div className="p-6 text-center">
                  {tier.icon}
                  <h3 className={`text-2xl font-bold mb-2 ${
                    tier.tier === "Platinum" ? "text-yellow-600" : 
                    tier.tier === "Gold" ? "text-yellow-500" : 
                    tier.tier === "Silver" ? "text-gray-600" : "text-amber-700"
                  }`}>
                    {tier.tier}
                  </h3>
                  <p className="text-3xl font-semibold text-gray-800 mb-4">{tier.amount}</p>
                  <div className="border-t border-gray-200 pt-4 mt-2">
                    <p className="text-sm text-gray-500">
                      {tier.tier === "Platinum" ? "Complete premium package with maximum exposure" : 
                      tier.tier === "Gold" ? "Enhanced visibility and promotional opportunities" : 
                      tier.tier === "Silver" ? "Great value with essential promotional benefits" : 
                      "Entry-level sponsorship with core benefits"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Benefits Table */}
          <div className="overflow-x-auto shadow-lg rounded-lg mt-8">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg text-left">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-violet-700 text-white">
                  <th className="border p-4 uppercase text-sm tracking-wider">Sponsorship Benefits</th>
                  {sponsorshipTiers.map((tier, index) => (
                    <th key={index} className="border p-4 uppercase text-sm tracking-wider text-center">
                      {tier.tier}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {benefitLabels.map((label, rowIndex) => (
                  <tr key={rowIndex} className="odd:bg-gray-50 even:bg-white border-b hover:bg-gray-100 transition-all">
                    <td className="p-4 font-medium text-gray-700">
                      {label}
                    </td>
                    {sponsorshipTiers.map((tier, colIndex) => (
                      <td key={colIndex} className="p-4 text-center">
                        {rowIndex === 0 ? (
                          <span className="font-bold text-gray-800">{tier.amount}</span>
                        ) : tier.benefits[rowIndex - 1] === true ? (
                          <CheckCircle className="text-green-500 inline-block" size={20} />
                        ) : tier.benefits[rowIndex - 1] === false ? (
                          <X className="text-red-400 inline-block" size={20} />
                        ) : (
                          <span className="font-medium text-black">{tier.benefits[rowIndex - 1]}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Additional Opportunities */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-violet-800 uppercase relative inline-block">
              Additional Opportunities
              <div className="h-1 w-24 bg-violet-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
            </h2>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Product Exhibition Booth</h3>
                <p className="text-gray-700 mb-4">
                  Setup a dedicated space to showcase your products and technologies to all conference attendees.
                </p>
                <p className="text-2xl font-bold text-violet-700">Rs. 1,00,000/-</p>
              </div>
              <div className="bg-violet-50 p-6 rounded-lg border border-violet-100">
                <h4 className="text-lg font-medium mb-3 text-violet-800">Custom Packages</h4>
                <p className="text-gray-700 mb-3">
                  For customized sponsorship packages tailored to your specific goals, please contact us:
                </p>
                <div className="flex items-center mt-4 text-violet-700 font-medium">
                  <Mail size={18} className="mr-2" />
                  <a href="mailto:vdat2025sponsorship@gmail.com" className="hover:text-violet-900 transition-colors">
                    vdat2025sponsorship@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advertisement Rates */}
        <section className="container mx-auto px-6 py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2 text-violet-800 uppercase relative inline-block">
              Advertisement Rates
              <div className="h-1 w-24 bg-violet-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
            </h2>
            <h4 className="text-xl text-violet-700 mt-4">In The Program Booklet</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {advertisements.map((ad, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{ad.type}</h3>
                <p className="text-2xl font-semibold mb-4 text-violet-700">{ad.cost}</p>
                <p className="text-gray-600 text-sm">{ad.description}</p>
              </div>
            ))}
          </div>
        </section>
    
        <Footer />
      </div>
    );
  };

  export default SponsorshipPage;