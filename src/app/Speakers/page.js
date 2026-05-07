import React from 'react';
import Footer from '../footer/footer';
import Navbar from '../home/Navbar';

// Speaker Title Card Component
const SpeakerCard = ({ name, title, organization, photo, bio, linkedin }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md p-8 md:p-10 flex flex-col md:flex-row gap-10 hover:shadow-2xl transition-all duration-300 border border-gray-100">

      {/* Image Section */}
      <div className="relative w-full md:w-[300px] flex justify-center items-start shrink-0">
        <img
          src={photo}
          alt={name}
          className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-3xl border border-gray-200 shadow-md hover:scale-105 transition-transform duration-300"
        />

        {/* LinkedIn Icon */}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-blue-50 transition"
          >
            <svg
              className="w-5 h-5 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        )}
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-center">

        {/* Name */}
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {name}
        </h3>

        {/* Title */}
        <p className="text-xl font-semibold text-purple-600 mb-1">
          {title}
        </p>

        {/* Organization */}
        <p className="text-gray-500 text-lg mb-4">
          {organization}
        </p>

        {/* Divider */}
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-6"></div>

        {/* Bio */}
        <p className="text-gray-700 leading-9 text-[18px] text-justify">
          {bio}
        </p>

        {/* LinkedIn Button */}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 text-blue-600 font-semibold hover:text-blue-800 transition text-lg"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>

            View LinkedIn Profile
          </a>
        )}
      </div>
    </div>
  );
};

const SpeakersSection = () => {
  const speakers = [
    {
      name: "Prof. Mayank Shrivastava",
      title: "Professor",
      organization: "IISc Bangalore",
      photo: "/images/mayank.jpg",
      bio: "Prof. Mayank Shrivastava is Professor and Chair, Department of Electronic Systems Engineering, Indian Institute of Science, and Co-Founder of AGNIT Semiconductors Pvt. Ltd. He is internationally recognized for his pioneering contributions to semiconductor devices, Gallium Nitride (GaN) technologies, nanoelectronics, advanced CMOS systems, and next-generation energy-efficient electronics. His research has significantly advanced wide-bandgap semiconductor technologies, power electronics, and emerging device architectures for future computing systems. Prof. Shrivastava has authored over 270 research publications and holds more than 60 patents. He is a recipient of several prestigious honors including the IEEE EDS Early Career Award, DST Swarnjayanti Fellowship, and Abdul Kalam Technology Innovation National Fellowship.",
      linkedin: "https://www.linkedin.com/in/prof-mayank-shrivastava-06439413/"
    },
    {
      name: "Prof. Maryam Shojaei Baghini",
      title: "Faculty, Electrical Engineering",
      organization: "IIT Bombay",
      photo: "/images/maryam.png",
      bio: "Prof. Maryam Shojaei Baghini is Professor, Department of Electrical Engineering, Indian Institute of Technology Bombay, and a globally recognized researcher in analog/mixed-signal/RF VLSI, sensors, biomedical instrumentation, energy-efficient integrated circuits, and emerging semiconductor technologies. Her pioneering contributions span device-to-system-level innovation, including biosensors, healthcare electronics, neuromorphic systems, energy harvesting circuits, and intelligent sensing platforms. Prof. Baghini has published more than 300 peer-reviewed research papers and holds numerous Indian and US patents. She is a recipient of several prestigious recognitions including the Qualcomm Faculty Award and has served in leadership roles across major IEEE conferences and VLSI forums. Her research and mentorship have significantly influenced next-generation semiconductor and healthcare technologies.",
      linkedin: "https://www.linkedin.com/in/maryam-shojaei-baghini-04697b13/"
    },
    {
      name: "Prof. Yogesh S. Chauhan",
      title: "Professor",
      organization: "IIT Kanpur",
      photo: "/images/yogeshch.jpg",
      bio: "Prof. Yogesh Singh Chauhan is Professor, Department of Electrical Engineering, Indian Institute of Technology Kanpur, and an internationally acclaimed expert in compact modeling, nanoscale semiconductor devices, RF electronics, and advanced transistor technologies. He is widely recognized for developing industry-standard compact models including BSIM-BULK (BSIM6), BSIM-CMG, BSIM-IMG, and ASM-HEMT, extensively used by semiconductor industries worldwide for IC design and simulation. His pioneering research spans Gallium Nitride (GaN) devices, FinFETs, 2D-material transistors, ferroelectric devices, and AI-inspired computing systems. Prof. Chauhan is an IEEE Fellow, recipient of the Swarnajayanti Fellowship and Humboldt Fellowship, and has significantly contributed to advancing next-generation semiconductor technologies for 5G, AI, defense, and high-performance computing applications.",
      linkedin: "https://www.linkedin.com/in/yogesh-singh-chauhan-8964b23/"
    },
    {
      name: "Prof. Saibal Mukhopadhyay",
      title: "Professor",
      organization: "Georgia Tech",
      photo: "/images/saibal.webp",
      bio: "Prof. Saibal Mukhopadhyay is the Joseph M. Pettit Professor in the School of Electrical and Computer Engineering at Georgia Institute of Technology and a globally recognized leader in low-power VLSI systems, AI hardware, neuromorphic computing, embedded intelligence, and semiconductor system design. His pioneering research spans energy-efficient circuits, emerging memory technologies, heterogeneous integration, autonomous systems, edge AI, and hardware-software co-design for next-generation intelligent platforms. Prof. Mukhopadhyay has made seminal contributions to nanoscale CMOS design, SRAM reliability, leakage reduction, and AI-enabled computing architectures. An IEEE Fellow, he has received several prestigious honors including the NSF CAREER Award, ONR Young Investigator Award, IBM Faculty Partnership Award, and SRC Inventor Recognition Award.",
      linkedin: "https://www.linkedin.com/in/saibal-mukhopadhyay-ba7987149/"
    },
    {
      name: "Navin Bishnoi",
      title: "Associate Vice President & India Country Manager",
      organization: "Marvell India",
      photo: "/images/navin.webp",
      bio: "Mr. Navin Bishnoi is AVP and India Country Manager at Marvell Technology and Chairperson of the India Electronics and Semiconductor Association (IESA) for FY2026–27. With over 25 years of global leadership experience, he has played a pivotal role in advancing India’s semiconductor and electronics ecosystem through contributions in ASIC design, infrastructure silicon, AI/ML hardware, cloud computing, networking, and automotive electronics. Prior to Marvell, he held leadership positions at IBM, Freescale, Cadence, and Texas Instruments. He is a founding member of ITC India and TTTC India and has actively contributed to India Semiconductor Mission initiatives, skilling programs, and semiconductor ecosystem development. His leadership continues to drive India’s vision toward becoming a global semiconductor powerhouse.",
      linkedin: "https://www.linkedin.com/in/navin-bishnoi-707a6b3/"
    },
    {
      name: "Prof. HS Jattana", 
      title: "Professor",
      organization: "PGIMER",
      photo: "/images/jattana.png",
      bio: "H. S. Jattana is a distinguished technologist, researcher, and academic expert with extensive experience in microelectronics, VLSI design, semiconductor devices, embedded systems, and medical electronics. He is currently associated with Postgraduate Institute of Medical Education and Research and has contributed significantly to interdisciplinary research spanning semiconductor technology and healthcare innovation. With decades of expertise in CMOS design, device modeling, and advanced electronics systems, he has actively mentored researchers and delivered expert lectures across premier institutions and national skill-development initiatives. He also holds patents in the area of intelligent medical systems, including Closed Loop Anaesthesia Drug Delivery Systems (CLADS). His work continues to bridge academia, healthcare, and semiconductor innovation through impactful research, technology development, and academic leadership.",
      linkedin: "https://www.linkedin.com/in/hs-jattana-00738326/"
    },
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
  
      
      {/* Main Content */}
      <main className="flex-grow py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Meet Our Distinguished Speakers</h2>
          
          <div className="flex flex-col gap-8">
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

      <Footer />
    </div>
  );
};

export default SpeakersSection;