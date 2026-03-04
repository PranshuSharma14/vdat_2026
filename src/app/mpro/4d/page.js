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
  sessionTitle = "FPGA",
  sessionTime = "2:15 PM - 4:15 PM",
  sessionDate = "August 9, 2025",
  sessionLocation = " Anjuman Hall",
  sessionChairperson = "Chair 1: Prof. Mahendra Sakare, Chair 2: Prof. Gaganpreet Kaur",
  sessionDescription = "",
  
  // Papers Array
papers = [
    {
    id: '412',
    time: '2:15 PM - 2:30 PM',
    title: 'FPGA-Based Real-Time DoA Estimation System Using AVS Array Implementation on PYNQ-SoC Platform',
    authors: ['Ehtesham Ahmed', 'Shashwat Anand Pandey', 'Adeeba Khan', 'Mohd Wajid'],
    abstract: `Modern acoustic systems used in robotics, situational awareness, and surveillance depend heavily on sound source localization. Acoustic Vector Sensors (AVS), simultaneously capture both pressure and particle velocity components of a sound field and help in compact and accurate Direction Of Arrival (DoA) estimation, even with a single sensor unit. This work presents a hardware implementation of a simple and accurate DoA estimation algorithm using an AVS array on a Field-Programmable Gate Array (FPGA) platform. A pipelined Radix-4 Fast Fourier Transform (FFT) IP core is implemented to convert time-domain audio signals into the frequency domain, followed by Cross Power Spectral Density (CPSD) analysis to compute phase differences between vector components. The final angle is estimated using a CORDIC (Coordinate Rotation Digital Computer) IP core to calculate arctangent values efficiently. The FPGA-based system achieves real-time processing with low latency and reduced computational overhead compared to a software-only approach. The implementation is evaluated based on the mean absolute error in the estimated angle and computation time. Results demonstrate that the system achieved the same results on FPGA as on ARM processor with approximately 62 times faster computation.`,
    mainContact: {
      name: 'Shashwat Anand Pandey',
      email: 'shashwatpandey01010@gmail.com'
    }
  },
    {
    id: '361',
    time: '2:30 PM - 2:45 PM',
    title: 'FPGA Implementation of Image Preprocessing Techniques for ADAS Applications',
    authors: ['Adil Naz Muhammed', 'Lakshmi L', 'Amala Rachel Zachariah', 'Lucy Maria Binod', 'Aimy Jose', 'Jagadeesh Kumar P', 'Vijayalakshmi K', 'Jobymol Jacob'],
    abstract: `Advanced Driver Assistance Systems play an essential role in improving road safety and driving efficiency. The diverse and challenging conditions of rural roads, including unstructured layouts, traffic, environmental haze, noise, and low contrast, present unique challenges in the implementation of ADAS. In this work, we propose image preprocessing techniques such as bilateral filtering for noise reduction, contrast enhancement using an advanced histogram method, and dehazing with dark channel prior that address these challenges, emphasizing their ability to achieve real-time performance and high computational efficiency. By focusing on custom-made hardware accelerated solutions, this work generated an improved image containing the artefacts mentioned above by optimizing algorithms and making use of the PYNQ Z2 Field Programmable Gate Array board.`,
    mainContact: {
      name: 'Adil Naz Muhammed',
      email: 'adilnazmuhammed2506@gmail.com'
    }
  },
     {
    id: '274',
    time: '2:45 PM - 3:00 PM',
    title: 'Theory and Design of a mmWave Oscillator Utilizing high-Q Active-Mode On-Chip MEMS Resonators for Improved Fundamental Limits of Phase Noise',
    authors: ['Abhishek Srivastava', 'Narahari N. Moudhgalya', 'Adarsh Yadav'],
    abstract: `Recent progress in MEMS resonant-fin-transistors (RFT) has enabled very high-Q active mode resonators, promising crystal-less monolithic clock generation for Millimeter-wave (mmWave) systems. However, there is a strong need for design of mmWave oscillators that utilize the high-Q of active-mode RFT (AM-RFT) optimally, while handling unique challenges such as resonator's low electromechanical transduction. In this brief, we develop a theory and through design and post-layout simulations in 14 nm Global Foundry (GF) process, we show the first active oscillator with AM-RFT at 30 GHz, which improves the fundamental limits of phase noise (PN) and figure-of-merit (FoM) when compared with the oscillators with conventional LC resonators. For AM-RFT with Q-factor of ~10k, post layout simulation results show that the proposed oscillator exhibits phase noise of less than -140 dBc/Hz and FoM greater than 228 dBc/Hz at a 1 MHz offset for 30 GHz center frequency, which are 25 dBc/Hz better than the existing monolithic LC oscillators.`,
    mainContact: {
      name: 'Adarsh Yadav',
      email: 'adarsh.yadav@research.iiit.ac.in'
    }
  },
  
  // {
  //   id: '313',
  //   title: 'Precision Implementation of Sigmoid and Trigonometric Functions with Hyperbolic and Circular CORDIC using PYNQ Z2 FPGA',
  //   authors: ['Abhishek Kumar', 'Mohammad Adnaan Shaikh', 'Kritarth Srivastava', 'Prasanna Kumar Misra'],
  //   abstract: '',
  //   mainContact: {
  //     name: 'Abhishek Kumar',
  //     email: 'abhigoogl123@gmail.com'
  //   }
  // },


  {
    id: '403',
      time: '3:00 PM - 3:15 PM',
    title: 'Ising Model-Based P-bit Solver for the Max-Cut Problem with FPGA Implementation',
    authors: ['Amit Kumar Jangid', 'AMIT SINGH', 'Srinivasu Bodapati'],
    abstract: `This paper presents a novel approach to solving the Max-Cut problem using probabilistic bits (p-bits), modeled through the Ising Hamiltonian framework. Two methods—based on weighted and unweighted Ising Hamiltonians—are proposed to encode the Max-Cut problem into a cost function. The p-bits, which naturally explore low-energy configurations due to their stochastic behavior, are utilized to find a solution with high probability. A Python-based simulation is used to validate the solver against standard G-set benchmark problems, demonstrating correct and scalable performance under varying inverse temperature (1/σ) values and Nτ iteration counts. To assess hardware feasibility, the solver is synthesized using MyHDL and implemented on a Nexys 4 DDR FPGA, highlighting the potential of probabilistic spin logic for solving NP-hard problems with possible applications in circuit layout design, machine learning, and statistical physics. A 5-node unweighted Max-Cut example is demonstrated in hardware, with output states displayed using LEDs to represent the maximum probability configuration. For a graph density of 0.8, the design consumes 145 LUTs and 114 LUTs for the weighted and unweighted approaches, respectively, both using 36 flip-flops. The proposed approach shows promise for real-time, low-power hardware accelerators for combinatorial optimization using interpretable probabilistic circuits.`,
    mainContact: {
      name: 'Contact',
      email: 's23054@students.iitmandi.ac.in'
    }
  },

  {
      id: '342',
      time: '3:15 PM - 3:30 PM',
      title: 'BHARATH-TPM: Micro-Architecture Design of AXI enabled SHA-3 Hardware Accelerator for a RISC-V Trusted Platform Module',
      authors: ['Aneesh Raveendran', 'Sheetal B V', 'Dr. Raja Sekar K', 'Vivian D', 'Hari Babu P', 'Dr. S D Sudarsan'],
      abstract: ``,
      mainContact: {
        name: 'Aneesh Raveendran',
        email: 'raneesh@cdac.in'
      }
    }
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