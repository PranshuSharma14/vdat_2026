import React from 'react';
import Footer from '../footer/footer';
import Navbar from '../home/Navbar';

const ComingSoon = () => {
  return (
    <section className="bg-black py-32 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-7xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
          COMING SOON
        </h2>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          The featured speakers for VDAT-2026 will be announced soon.
          Stay tuned to meet world-class innovators, researchers,
          and industry leaders in VLSI and semiconductor technology.
        </p>

        <div className="mt-8 text-cyan-400 text-lg animate-pulse">
          🚀 Speaker lineup will be revealed shortly.
        </div>
      </div>
    </section>
  );
};

// Speaker Title Card Component
const SpeakerCard = ({ name, title, organization, photo, linkedin, website }) => {
  return (
    <div className="relative group">
      {/* Card with hover effect */}
      <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 group-hover:shadow-2xl transform group-hover:-translate-y-2">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
        
        {/* Image container */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-r from-purple-100 to-indigo-100">
          {photo ? (
            <img 
              src={photo} 
              alt={`${name}`} 
              className="w-full h-full object-contain object-center transform transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-purple-200 to-indigo-200">
              <svg className="w-24 h-24 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          )}
          
          {/* Social links that appear on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-20">
            {linkedin && (
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full shadow-lg text-purple-600 hover:text-purple-800 hover:bg-purple-50 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            )}
            {website && (
              <a 
                href={website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full shadow-lg text-purple-600 hover:text-purple-800 hover:bg-purple-50 transition-all duration-300"
                aria-label="Personal Website"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9 3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </a>
            )}
          </div>

          {/* Color accent line */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {/* Decorative element */}
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mb-4 rounded-full"></div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-1">{name}</h3>
          <p className="text-md font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-1">{title}</p>
          <p className="text-gray-600">{organization}</p>
        </div>
      </div>
    </div>
  );
};

const SpeakersSection = () => {
  // Comprehensive speaker data from both images
  const speakers = [
    // First row from Image 1
    {
      name: "Sanjeev Arora",
      title: "Cabinet Minister, Punjab Industries & Commerce, Investment Promotion and NRI Affairs",
      photo: "/images/Sanjeev.png",
    },
    {
      name: "Hitesh Garg",
      title: "Vice President and India Country Manager",
      organization: " NXP Semiconductors",
      photo: "/images/hitesh.png",
      linkedin: "https://www.linkedin.com/in/hiteshgarg/",
      website: ""
    },
    {
      name: "Sunita Verma",
      title: "Group Coordinator (R&D)",
      organization: "MeitY",
      photo: "/images/sunita.png",
      linkedin: "https://www.linkedin.com/in/sunita-verma-b38979157/?originalSubdomain=in",
      website: ""
    },
    {
      name: "Prof. Rajeev Ahuja",
      title: "Director",
      organization: "IIT Ropar",
      photo: "/images/rajeev.png",
      linkedin: 
          "https://www.linkedin.com/in/prof-rajeev-ahuja-6436b3335/?originalSubdomain=in",
      website: ""
    },
    {
      name: "Prof. Lakxmidhar Behera",
      title: "Director",
      organization: "IIT Mandi",
      photo: "/images/laxmi.png",
      linkedin: "",
      website: ""
    },
    {
      name: "Dr. Kamaljeet Singh",
      title: "Director General",
      organization: "SCL",
      photo: "/images/kamli.png",
      linkedin: "",
      website: ""
    },
    {
      name: "Dr. Sharon Zhou",
      title: "Vice President of Artificial Intelligence",
      organization: "AMD",
      photo: "/images/sharon.jpeg",
      linkedin: "https://www.linkedin.com/in/zhousharon/"
    },
    {
      name: "Dr. SD Sudarsan",
      title: "Executive Director",
      organization: "CDAC Banglore",
      photo: "/images/sd.png",
      linkedin: "",
      website: ""
    },
    // Second row from Image 1
    {
      name: "Dr. Satya Gupta",
      title: "President",
      organization: "VLSI Society",
      photo: "/images/satya.png",
      linkedin:
          "https://www.linkedin.com/in/dr-satya-gupta-950787/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
      website: ""
    },
    {
      name: "Rajeev Madhavan",
      title: "Clear Ventures & Magma",
      organization: "",
      photo: "/images/rm.png",
      linkedin: "",
      website: ""
    },
    {
      name: "Dr. Ravi Mahajan",
      title: "Fellow",
      organization: "Intel",
      photo: "/images/ravi.png",
      linkedin: "",
      website: ""
    },
    {
      name: "Wilfred Gomes",
      title: "Founder & CEO",
      organization: "Mueon",
      photo: "/images/gomes.png",
      linkedin: "",
      website: ""
    },
    {
      name: "Prof. Shanti Pavan",
      title: "Professor",
      organization: "IIT Madras",
      photo: "/images/shanti.png",
      linkedin: "https://www.linkedin.com/in/shanthi-pavan-39715a137/",
      website: "https://www.ee.iitm.ac.in/faculty/profile/shanthi.pavan"
    },
    // From Image 2 - First row
    {
      name: "Sarita Ahlawat",
      title: "",
      organization: "Botlabs",
      photo: "/images/sarita.png",
      linkedin: "",
      website: ""
    },
    {
      name: "Chitra Hariharan",
      title: "",
      organization: "Renesas",
      photo: "/images/chit.jpg",
      linkedin: "",
      website: ""
    },
    {
      name: "Preet Yadav",
      title: "",
      organization: "NXP Semiconductors ",
      photo: "/images/preet.jpg",
      linkedin: "http://www.linkedin.com/in/preet-yadav",
      website: ""
    },
    {
      name: "Tapas Nandy",
      title: "Sr. Director, Microsoft / Sr. Member, IEEE",
      organization: "Microsoft",
      photo: "/images/tapasnandy.jpg",
      linkedin: "https://www.linkedin.com/in/tapas-nandy-35133518/?originalSubdomain=in",
      website: ""
    },
    {
      name: "Nishit Gupta",
      title: "Scientist E",
      organization: "MeitY",
      photo: "/images/nishit.png",
      linkedin: "",
      website: ""
    },
    // From Image 2 - Second row
    {
      name: "Gaurav Goel",
      title: "Senior Principal Engineer",
      organization: "Renesas",
      photo: "/images/gauravgoel.jpeg",
      linkedin: "https://www.linkedin.com/in/gaurav-goel-01185a5/",
      website: ""
    },
    {
      name: "Dipan Sahu",
      title: "Assistant Innovation Director",
      organization: "Ministry of Education's Innovation Cell",
      photo: "/images/dipansahu.jpg",
      linkedin: "https://www.linkedin.com/in/deepansahu/?originalSubdomain=in",
      website: ""
    },
    {
      name: "Ganesan Narayanasamy",
      title: "President, OpenPOWER Foundation",
      organization: "CEO at Object Automation Inc. – USA & India",
      photo: "/images/ganesan.jpeg",
      linkedin: "https://www.linkedin.com/in/ganesannarayanasamy/",
      website: ""
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with Parallax Effect */}
      <header
        className="text-center text-white py-20 relative bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          minHeight: "400px"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-violet-900/80"></div>
        <div className="relative z-10 px-4 py-16">
          <h1 className="text-6xl font-extrabold tracking-tight uppercase mb-4 drop-shadow-lg">
            Featured Speakers
          </h1>
          <p className="text-xl max-w-2xl mx-auto font-light">
            Learn from industry experts and thought leaders at the forefront of innovation and technology. 
          </p>
        </div>
      </header>
      <ComingSoon />
  
      
      {/* Main Content 
      <main className="flex-grow py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Meet Our Distinguished Speakers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <SpeakerCard key={index} {...speaker} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg">
              Join us for an inspiring event featuring distinguished speakers from leading organizations worldwide.
            </p>
          </div>
        </div>
      </main>
/*       */}

      <Footer />
    </div>
  );
};

export default SpeakersSection;