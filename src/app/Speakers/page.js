"use client";
import React from "react";
import Footer from "../footer/footer";
import Navbar from "../home/Navbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/swiper-bundle.css";

const SpeakersSection = () => {
  const speakers = [
  {
    name: "Dr. Hari Shanker Gupta",
    title: "Scientist",
    organization: "Indian Space Research Organisation (ISRO)",
    photo: "/images/hari.jpg",
    bio: "Dr. Hari Shanker Gupta is Scientist at Indian Space Research Organisation and an accomplished expert in analog and mixed-signal integrated circuit design, semiconductor device engineering, and space-grade electronic systems. He has been actively involved in the design and development of advanced ASICs, high-speed data converters, PLLs, LVDS interfaces, CCD clock drivers, and infrared sensor readout integrated circuits for strategic and space applications. His research and development contributions span semiconductor technologies based on Tower, UMC, and SCL 180 nm processes, with expertise in circuit design, characterization, layout verification, and hardware prototyping using industry-standard EDA tools. Dr. Gupta’s work has significantly contributed to reliable and high-performance electronic systems for aerospace and imaging applications. He is also associated with advanced research in mixed-signal VLSI systems, hardware characterization, and emerging semiconductor technologies, while actively contributing to academia–industry–research collaborations in the Indian ecosystem.",
    linkedin: "https://www.linkedin.com/in/dr-hari-shanker-gupta-b563b09/"
  },
  {
  name: "Ms. Tal Zigman",
  title: "Global Academic Partnerships Leader",
  organization: "Cadence Design Systems",
  photo: "/images/talzigman.jpg",

  bio: "Ms. Tal Zigman is a senior leader in Global Academic Partnerships at Cadence Design Systems and is widely recognized for fostering strong collaborations between academia and the semiconductor industry. She has played a significant role in expanding the Cadence Academic Network, enabling universities, researchers, and innovators worldwide to access advanced EDA technologies, industry-oriented design methodologies, and semiconductor training programs. Her work focuses on strengthening academic–industry partnerships in areas such as VLSI design, AI-driven electronic design automation, advanced semiconductor systems, and next-generation computing technologies. Through her leadership, Cadence has actively supported research innovation, workforce development, and talent cultivation across leading global institutions, helping bridge the gap between academic research and real-world semiconductor industry applications.",

  linkedin: "https://www.linkedin.com/in/tal-zigman/"
},

  {
    name: "Prof. Sudeb Dasgupta",
    title: "Professor",
    organization: "IIT Roorkee",
    photo: "/images/sudebb.jpg",
    bio: "Prof. Sudeb Dasgupta is Professor, Department of Electronics and Communication Engineering, Indian Institute of Technology Roorkee, and a distinguished researcher in the areas of VLSI design, nanoelectronics, low-power integrated circuits, and semiconductor device technologies. He is widely recognized for his significant contributions to advanced CMOS design, emerging nanoelectronic devices, RF and analog circuit systems, and energy-efficient hardware architectures. His research spans next-generation semiconductor technologies, device modeling, IoT-enabled systems, AI hardware acceleration, and reliable electronic system design for modern computing applications. Prof. Dasgupta has actively contributed to high-impact research, academic leadership, and collaborative projects with academia and industry, advancing innovation in VLSI systems, intelligent electronics, and sustainable semiconductor technologies. He has authored numerous reputed journal and conference publications and continues to mentor cutting-edge research in advanced integrated circuit and semiconductor engineering domains.",
    linkedin: "https://www.linkedin.com/in/sudeb-dasgupta-2b19b64/"
  },

  {
    name: "Mr. Hitesh Garg",
    title: "Vice President & India Managing Director",
    organization: "NXP Semiconductors",
    photo: "/images/hiteshh.jpg",
    bio: "Mr. Hitesh Garg is Vice President and India Managing Director at NXP Semiconductors, and a highly respected leader in the global semiconductor and embedded systems industry. With extensive experience in semiconductor technologies, automotive electronics, secure connected systems, and intelligent edge computing, he has played a pivotal role in strengthening India’s semiconductor innovation ecosystem and engineering leadership. He has been instrumental in driving advanced research and development initiatives in areas such as automotive SoCs, AI-enabled embedded platforms, secure IoT solutions, radar systems, and next-generation connectivity technologies. Under his leadership, NXP India has significantly contributed to cutting-edge semiconductor solutions for smart mobility, industrial automation, communication systems, and intelligent edge applications. Mr. Garg is widely recognized for fostering industry-academia collaboration, promoting semiconductor talent development, and accelerating innovation aligned with the future of AI-driven and connected electronic systems.",
    linkedin: "https://www.linkedin.com/in/hiteshgarg/"
  },

  {
    name: "Prof. Mayank Shrivastava",
    title: "Professor",
    organization: "IISc Bangalore",
    photo: "/images/mayank.jpg",
    bio: "Prof. Mayank Shrivastava is Professor and Chair, Department of Electronic Systems Engineering, Indian Institute of Science, and Co-Founder of AGNIT Semiconductors Pvt. Ltd. He is internationally recognized for his pioneering contributions to semiconductor devices, Gallium Nitride (GaN) technologies, nanoelectronics, advanced CMOS systems, and next-generation energy-efficient electronics. His research has significantly advanced wide-bandgap semiconductor technologies, power electronics, and emerging device architectures for future computing systems. Prof. Shrivastava has authored over 270 research publications and holds more than 60 patents. He is a recipient of several prestigious honors including the IEEE EDS Early Career Award, DST Swarnjayanti Fellowship, and Abdul Kalam Technology Innovation National Fellowship.",
    linkedin:
      "https://www.linkedin.com/in/prof-mayank-shrivastava-06439413/",
  },

  {
    name: "Prof. Maryam Shojaei Baghini",
    title: "Professor",
    organization: "IIT Bombay",
    photo: "/images/maryam.png",
    bio: "Prof. Maryam Shojaei Baghini is Professor, Department of Electrical Engineering, Indian Institute of Technology Bombay, and a globally recognized researcher in analog/mixed-signal/RF VLSI, sensors, biomedical instrumentation, energy-efficient integrated circuits, and emerging semiconductor technologies. Her pioneering contributions span device-to-system-level innovation, including biosensors, healthcare electronics, neuromorphic systems, energy harvesting circuits, and intelligent sensing platforms. Prof. Baghini has published more than 300 peer-reviewed research papers and holds numerous Indian and US patents. She is a recipient of several prestigious recognitions including the Qualcomm Faculty Award and has served in leadership roles across major IEEE conferences and VLSI forums. Her research and mentorship have significantly influenced next-generation semiconductor and healthcare technologies.",
    linkedin:
      "https://www.linkedin.com/in/maryam-shojaei-baghini-04697b13/",
  },

  {
    name: "Prof. Yogesh S. Chauhan",
    title: "Professor",
    organization: "IIT Kanpur",
    photo: "/images/yogeshch.jpg",
    bio: "Prof. Yogesh Singh Chauhan is Professor, Department of Electrical Engineering, Indian Institute of Technology Kanpur, and an internationally acclaimed expert in compact modeling, nanoscale semiconductor devices, RF electronics, and advanced transistor technologies. He is widely recognized for developing industry-standard compact models including BSIM-BULK (BSIM6), BSIM-CMG, BSIM-IMG, and ASM-HEMT, extensively used by semiconductor industries worldwide for IC design and simulation. His pioneering research spans Gallium Nitride (GaN) devices, FinFETs, 2D-material transistors, ferroelectric devices, and AI-inspired computing systems. Prof. Chauhan is an IEEE Fellow, recipient of the Swarnajayanti Fellowship and Humboldt Fellowship, and has significantly contributed to advancing next-generation semiconductor technologies for 5G, AI, defense, and high-performance computing applications.",
    linkedin:
      "https://www.linkedin.com/in/yogesh-singh-chauhan-8964b23/",
  },

  {
    name: "Prof. Saibal Mukhopadhyay",
    title: "Professor",
    organization: "Georgia Tech",
    photo: "/images/saibal.webp",
    bio: "Prof. Saibal Mukhopadhyay is the Joseph M. Pettit Professor in the School of Electrical and Computer Engineering at Georgia Institute of Technology and a globally recognized leader in low-power VLSI systems, AI hardware, neuromorphic computing, embedded intelligence, and semiconductor system design. His pioneering research spans energy-efficient circuits, emerging memory technologies, heterogeneous integration, autonomous systems, edge AI, and hardware-software co-design for next-generation intelligent platforms. Prof. Mukhopadhyay has made seminal contributions to nanoscale CMOS design, SRAM reliability, leakage reduction, and AI-enabled computing architectures. An IEEE Fellow, he has received several prestigious honors including the NSF CAREER Award, ONR Young Investigator Award, IBM Faculty Partnership Award, and SRC Inventor Recognition Award.",
    linkedin:
      "https://www.linkedin.com/in/saibal-mukhopadhyay-ba7987149/",
  },

  {
    name: "Shri Navin Bishnoi",
    title: "Associate Vice President & India Country Manager",
    organization: "Marvell India",
    photo: "/images/navin.webp",
    bio: "Mr. Navin Bishnoi is AVP and India Country Manager at Marvell Technology and Chairperson of the India Electronics and Semiconductor Association (IESA) for FY2026–27. With over 25 years of global leadership experience, he has played a pivotal role in advancing India’s semiconductor and electronics ecosystem through contributions in ASIC design, infrastructure silicon, AI/ML hardware, cloud computing, networking, and automotive electronics. Prior to Marvell, he held leadership positions at IBM, Freescale, Cadence, and Texas Instruments. He is a founding member of ITC India and TTTC India and has actively contributed to India Semiconductor Mission initiatives, skilling programs, and semiconductor ecosystem development. His leadership continues to drive India’s vision toward becoming a global semiconductor powerhouse.",
    linkedin: "https://www.linkedin.com/in/navin-bishnoi-707a6b3/",
  },

  {
    name: "Shri H.S. Jattana",
    title: "Scientist & Faculty",
    organization: "PGIMER",
    photo: "/images/HS.jpg",
    bio: "H. S. Jattana is a distinguished technologist, researcher, and academic expert with extensive experience in microelectronics, VLSI design, semiconductor devices, embedded systems, and medical electronics. He is currently associated with Postgraduate Institute of Medical Education and Research and has contributed significantly to interdisciplinary research spanning semiconductor technology and healthcare innovation. With decades of expertise in CMOS design, device modeling, and advanced electronics systems, he has actively mentored researchers and delivered expert lectures across premier institutions and national skill-development initiatives. He also holds patents in the area of intelligent medical systems, including Closed Loop Anaesthesia Drug Delivery Systems (CLADS). His work continues to bridge academia, healthcare, and semiconductor innovation through impactful research, technology development, and academic leadership.",
    linkedin: "https://www.linkedin.com/in/hs-jattana-00738326/",
  },
];

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#111827] to-black">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.15),transparent_30%)]"></div>

        <div className="relative z-10 px-4 md:px-10 py-16">

          {/* Heading */}
          <div className="text-center mb-14">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-5">
              Featured Speakers
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Learn from world-renowned researchers, innovators, and
              semiconductor industry leaders shaping the future of VLSI,
              AI hardware, nanoelectronics, and next-generation computing.
            </p>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="rounded-[40px] overflow-hidden"
          >
            {speakers.map((speaker, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gradient-to-r from-[#111827] to-[#1e293b] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">

                  <div className="flex flex-col-reverse lg:flex-row items-center min-h-[750px]">

                    {/* LEFT CONTENT */}
                    <div className="flex-1 p-8 md:p-16">

                      <div className="inline-block bg-yellow-400 text-black px-5 py-2 rounded-full text-sm md:text-base font-bold mb-8">
                        Distinguished Speaker
                      </div>

                      <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5">
                        {speaker.name}
                      </h2>

                      <p className="text-2xl text-yellow-400 font-semibold mb-2">
                        {speaker.title}
                      </p>

                      <p className="text-xl text-gray-300 mb-8">
                        {speaker.organization}
                      </p>

                      <div className="w-28 h-1 bg-yellow-400 rounded-full mb-8"></div>

                      <p className="text-gray-200 text-lg md:text-xl leading-9 mb-10 text-justify max-w-4xl">
                        {speaker.bio}
                      </p>

                      <div className="flex flex-wrap gap-5">
                        <a
                          href={speaker.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg"
                        >
                          View LinkedIn →
                        </a>
                      </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex-1 flex justify-center items-center p-10">

                      <div className="relative">

                        {/* Glow */}
                        <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-full"></div>

                        {/* Image */}
                        <img
                          src={speaker.photo}
                          alt={speaker.name}
                          className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px] object-cover rounded-[40px] border border-white/10 shadow-2xl"
                        />

                        {/* Floating LinkedIn */}
                        <a
                          href={speaker.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-5 right-5 bg-white p-4 rounded-full shadow-xl hover:scale-110 transition"
                        >
                          <svg
                            className="w-6 h-6 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpeakersSection;