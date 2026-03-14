"use client";
import React, { useState, useEffect } from "react";
import Footer from '../../footer/footer';
import Navbar from '../../home/Navbar';
import { motion, useScroll, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  BookOpen,
  Users,
  ChevronDown,
  ChevronUp,
  User,
  MapPin,
  Mail,
  Phone,
  FileText,
  Eye,
  EyeOff,
  Globe,
  Building,
  Sun,
  Moon,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function SessionLayout({
  // Session Details
  sessionTitle = "Digital",
  sessionTime = "11:45 AM - 1:15 PM",
  sessionDate = "August 9, 2025",
  sessionLocation = "Board Room",
  sessionChairperson = "Chair 1: Prof. Bikram Paul, Chair 2: Prof. Alpana Agrawal ",
  sessionDescription = "",
  
  // Papers Array
papers = [

  {
    id: '312',
    time: '11:45 AM - 12:00 PM',
    title: 'Energy Efficient Approximate CNTFET Based Ternary half-adders and Multipliers',
    authors: ['Aiman Malik', 'Mohd Wajid', 'Mohammad Hasan'],
    abstract: `Researchers are looking into methods like multi valued logic (MVL) and approximate computing to meet the growing demand for energy-efficient computing for portable battery-operated devices. Multi-valued logic, specifically ternary logic, reduces circuit complexity and power consumption by employing three voltage levels instead of the conventional binary approach. Approximate computing, on the other hand, enables a trade-off between computational accuracy and energy or area efficiency. Approximate ternary half-adder (THA) and ternary multiplier (TMUL) circuits based on carbon nanotube field-effect transistors (CNTFETs) are presented in this work. Though with different levels of accuracy, these systems provide noticeable gains in power consumption and latency when compared to their precise equivalents. When the diameter of the nanotubes is changed, CNTFETs can display a variety of threshold voltages, which is why they are selected. To enhance performance, only the "sum" and "product" blocks are approximated in the proposed designs, with reductions in circuit size applied to different extents. As a result, some loss of precision is observed in these outputs. In comparison to their current counterparts, the suggested approximation THAs and TMULs show reduced power consumption and power delay product (PDP). The improvement in PDP of the proposed approximate THAs varies from 10 to 26% as compared to the existing best designs. Similarly, the approximate TMULs show improvement up to 75% . The "carry" circuit remains exact, as it propagates to higher computation stages and plays a critical role in maintaining overall accuracy.`,
    mainContact: {
      name: 'Aiman Malik',
      email: 'aimanmalik417@gmail.com'
    }
  },
  {
    id: '205',
    time: '12:00 PM - 12:15 PM',
    title: 'Design of Operand-rounding based Approximate Multiplier for Error-resilient Applications',
    authors: ['Vasundhara Trivedi', 'Santosh Vishvakarma'],
    abstract: `This work presents a novel approach for approximate multiplier design for applications with error-tolerance capabilities based on pre-processing of input operands for energy-efficient implementation. The 8-bit inputs are processed to 5 bits, and multiplication is carried out on this 5-bit operand, followed by appropriate shifting to minimise error and enable resource-efficient multiplication. The efficacy of the proposed design is computed based on error and performance metrics. Furthermore, when employed in the MAC unit, the LUT utilisation decreases by 24.4% with a 37.53% reduction in critical path delay with respect to the conventional implementation. The architecture exhibits the least delay among the compared state-of-the-art works. The proposed multiplier showcases only 4.84% average relative error with respect to the accurate multiplication. Moreover, the design is tested for edge detection applications to demonstrate its applicability in image processing applications.`,
    mainContact: {
      name: 'Santosh Vishvakarma',
      email: 'skvishvakarma@iiti.ac.in'
    }
  },
  {
    id: '255',
    time: '12:15 PM - 12:30 PM',
    title: 'A Novel High Speed D Flip Flop Architecture in 180nm CMOS Technology',
    authors: ['Sagnik Maitra', 'Abhijit Roy', 'Sounak Roy'],
    abstract: 'This paper introduces a compact and high-speed D flip-flop (DFF) design implemented in 180nm CMOS technology, optimized for operation at 4 GHz. The architecture features a 14-transistor topology utilizing a True Single-Phase Clock (TSPC) structure, which enhances both data retention and glitch suppression. Post-layout simulation results confirm a propagation delay of just 84.84 ps, demonstrating robust functionality across multiple clock cycles. In contrast to traditional master-slave flip-flops, which typically require 40 transistors and have delays exceeding 700 ps, the proposed design significantly reduces both area and latency. With careful optimization of transistor sizing and clock gating, this layout is well-suited for high-frequency, low-power applications, making it ideal for use in Flash ADCs, clock distribution networks, and pipelined datapaths.',
    mainContact: {
      name: 'Abhijit Roy',
      email: 'abhijit.roy@iiitg.ac.in'
    }
  },
  
  {
    id: '399',
    time: '12:30 PM - 12:45 PM',
    title: 'Design and Implementation of Low Power Variable bit CSLA using 18nm FinFET Technology',
    authors: ['Swetha Siliveri', 'Andoju Pranay Bhargav'],
    abstract: `In energy-constrained digital systems, low-power and high-speed arithmetic design is critical. This work extends an earlier Variable Bit Carry Look-Ahead (CLA)-based Carry Select Adder (CSLA) architecture by integrating FinFET-based Modified Gate Diffusion Input (MGDI) logic to enhance performance. The combined approach leverages FinFET's superior short-channel control and MGDI's low-transistor logic style to optimize power and speed. Implementations of 4-, 8-, 16-, and 32-bit CSLA variants are evaluated. Simulation results demonstrate up to 46% power savings and 36% delay reduction compared to conventional CMOS-based designs. A detailed analysis explains non-linear power trends across bit-widths. Layouts for smaller configurations and schematic-level validation confirm physical feasibility. This study shows that integrating advanced device and logic techniques with proven architectures can significantly improve efficiency in next-generation low-power digital circuits.`,
    mainContact: {
      name: 'Swetha Siliveri',
      email: 's.swetha@cvr.ac.in'
    }
  },
  {
    id: '345',
    time: '12:45 PM - 1:00 PM',
    title: 'Designing Reconfigurable Encoder and Decoder Circuits using Memristor Logic Gates',
    authors: ['Anirdesh Sreenath Yalamarthi', 'Sasindrakumar Sivasankaran', 'Tejendra Dixit'],
    abstract: `In light of recent developments in memory technology, the scalability of semiconductors has been encountering significant challenges. In the past two decades, memristors have experienced a growth in popularity as a compelling alternative and unorthodox option to the typical CMOS devices. This may be attributed to the fact that memristors possess distinctive traits and characteristics. We offer a bespoke model that makes use of a modification of a window function. This modification gives us the ability to simulate the essential logic gates, which include a 4:2 Basic Encoder and a 2:4 Line Decoder which consume nearly 3 times lesser power than their CMOS counterparts. The ability to construct combinational and sequential circuits that are more complicated will be made possible by this proof of concept.`,
    mainContact: {
      name: 'Anirdesh Sreenath Yalamarthi',
      email: 'anirdeshys0502@gmail.com'
    }
  },
       {
    id: '43',
    time: '1:00 PM - 1:15 PM',
    title: 'A Low-power 8GHz CML-Based Phase Interpolator for High-Speed SerDes Applications in 6nm FinFET Process',
    authors: ['Yaswanth Kumar Aguru', 'Siva Kumar Rapina', 'Ekta Goel'],
    abstract: `This paper presents the design of a Phase Interpolator (PI) for high-speed Serializer/Deserializer (SerDes) applications. The PI selects a pair of clock phases from eight different clock phases at 8 GHz using a Current Mode Logic Multiplexer (CML Mux) and interpolates these phases with precise and finer steps of 8-bit resolution to generate output clock phases. The PI consists of a CML Mux, a CML PI, and a CML-to-CMOS converter. The primary objective of this PI is to enhance Differential Non-Linearity (DNL) and Integral Non-Linearity (INL). To achieve this, two weighted mechanisms for PI tail current—binary weighted and thermometric weighted—were implemented and evaluated. Compared with the binary weighted PI, the thermometer weighted PI achieves a lower DNL and exhibits monotonic behavior. This paper provides a comprehensive review of existing phase interpolation techniques and the implementation of cross coupling capacitors technique in between input and output of differential pair in CML-Based PI to improve DNL and INL, using a 6nm FinFET process technology. The achieved DNL and INL are 0.25 LSB and 1.6 LSB, respectively, with an average power consumption of 4.43 mW at a nominal supply voltage of 0.8V. Reported performance metrics are the post layout simulation results.`,
    mainContact: {
      name: 'Yaswanth Kumar Aguru',
      email: 'yaswanth.kumar@microchip.com'
    }
  },
]
}) {
  const [darkMode, setDarkMode] = useState(false);
  const [expandedPapers, setExpandedPapers] = useState({});
  const [expandedAbstracts, setExpandedAbstracts] = useState({});
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const togglePaper = (paperId) => {
    setExpandedPapers((prev) => ({
      ...prev,
      [paperId]: !prev[paperId],
    }));
  };

  const toggleAbstract = (paperId) => {
    setExpandedAbstracts((prev) => ({
      ...prev,
      [paperId]: !prev[paperId],
    }));
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-900 transition-colors duration-700 min-h-screen">
      
      <header>
        <Navbar />
      </header>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Dark Mode Toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 right-6 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-40"
      >
        {darkMode ? (
          <Sun className="w-6 h-6 text-yellow-400" />
        ) : (
          <Moon className="w-6 h-6 text-gray-700" />
        )}
      </motion.button>

      {/* Session Header */}
      <header className="relative overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-blue-900/90 to-indigo-900/95 backdrop-blur-sm" />
        <div
          className={`
            absolute inset-0
            bg-[url("data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]
            opacity-50
          `}
        />

        <div className="relative z-10 px-8 py-16">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-block p-4 bg-white/10 backdrop-blur-lg rounded-2xl mb-6"
          >
            <BookOpen className="w-12 h-12 text-white" />
          </motion.div>

          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-2xl md:text-3xl lg:text-5xl font-black tracking-tight mb-4 text-white leading-tight"
          >
            {sessionTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-white/90 max-w-4xl mb-8 leading-relaxed"
          >
            {sessionDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap gap-4 text-white/90"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full">
              <Calendar className="w-5 h-5" />
              <span>{sessionDate}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full">
              <Clock className="w-5 h-5" />
              <span>{sessionTime}</span>
            </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full">
                          <MapPin className="w-5 h-5" />
                          <span>{sessionLocation}</span>
                        </div>
             <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full">
                          <User className="w-5 h-5" />
                          <span>{sessionChairperson}</span>
                        </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full">
              <FileText className="w-5 h-5" />
              <span>{papers.length} Paper{papers.length > 1 ? 's' : ''}</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Papers Section */}
      <main className="max-w-7xl mx-auto px-4 pb-16">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Research Papers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Explore the cutting-edge research presented in this session
            </p>
          </div>

          {papers.map((paper, index) => (
            <motion.div
              key={paper.id}
              variants={fadeInUp}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden hover:shadow-3xl transition-all duration-500"
            >
              {/* Paper Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium opacity-90">Paper ID: {paper.id}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold leading-tight">
                      {paper.title}
                    </h3>
                    <p className="text-sm text-gray-200 mt-1">
                      {paper.time}
                      </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => togglePaper(paper.id)}
                    className="p-2 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-all duration-300"
                  >
                    {expandedPapers[paper.id] ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </motion.button>
                </div>

                {/* Authors */}
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {paper.authors.map((author, authorIndex) => (
                      <span
                        key={authorIndex}
                        className="px-3 py-1 bg-white/10 backdrop-blur-lg rounded-full text-sm"
                      >
                        {author}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Expandable Content */}
              <AnimatePresence>
                {expandedPapers[paper.id] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 space-y-6">
                      {/* Abstract Section */}
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                            <FileText className="w-5 h-5" />
                            Abstract
                          </h4>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => toggleAbstract(paper.id)}
                            className="p-2 bg-white dark:bg-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-500 transition-all duration-300"
                          >
                            {expandedAbstracts[paper.id] ? (
                              <EyeOff className="w-4 h-4" />
                            ) : (
                              <Eye className="w-4 h-4" />
                            )}
                          </motion.button>
                        </div>
                        
                        <motion.div
                          initial={false}
                          animate={{
                            height: expandedAbstracts[paper.id] ? "auto" : "100px",
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {paper.abstract}
                          </p>
                        </motion.div>
                      </div>

                      {/* Main Contact Information */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                          <User className="w-5 h-5" />
                          Main Contact
                        </h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                              <Mail className="w-4 h-4 text-indigo-600" />
                              <a 
                                href={`mailto:${paper.mainContact.email}`}
                                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                              >
                                {paper.mainContact.email}
                              </a>
                            </div>
                            

                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}