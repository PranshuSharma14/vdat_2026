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
  sessionTitle = "Digital and Analog",
  sessionTime = "11:45 AM - 1:15 PM",
  sessionDate = "August 9, 2025",
  sessionLocation = "Majlis Second Hall",
  sessionChairperson = "Chair 1: Prof. Gargi Khanna , Chair 2:  Prof. Manu Bansal", 
  sessionDescription = "",
  
  // Papers Array
papers = [
    {
    id: '305',
    time: '11:45 AM - 12:00 PM',
    title: 'A Low Read Power Single-Ended Half-Select Immune RHBD SRAM for Space Applications',
    authors: ['Biby Joseph', 'Arvindaksha G', 'Nirupama K. G.', 'R. K. Kavitha'],
    abstract: `This paper presents a low read power single-ended half-select immune radiation-hardened-by design (SEHI-RHBD16T) SRAM cell targeted for space applications. It withstands all single-event upset (SEU) at sensitive nodes. To analyze the performance of SEHI-RHBD16T, the design is laid out in UMC 65 nm technology, and compared with other bench-mark radiation-hardened cells. Simulation results shows the robustness of the SEHI-RHBD16T, exhibiting 4.8, 5.4, 2.3, 5.5, 2.7, 1.9, 12, and 2.83 times low read power dissipation as compared with DICE12T, QUCCE12T, RHSC12T, LWS14T, RHPD12T, RHBD13T, RHBD16T, and 6TSRAM, respectively. The proposed design has the least read power dissipation of 0.06 µW due to single bit line configuration and has high write stability of 725 mV. The half-select disturbance issue is mitigated by adding a decoupled gate diffusion input (GDI) inverter. To further demonstrate the robustness against Single Event Upsets (SEUs) and immunity to half-select disturbances, a 2000-point Monte Carlo (MC) analysis is conducted under varying Process, Voltage, and Temperature (PVT) conditions.`,
    mainContact: {
      name: 'Biby Joseph',
      email: 'bibyjoseph13@gmail.com'
    }
  },
  {
    id: '158',
    time: '12:00 PM - 12:15 PM',
    title: 'Comparative Analysis of STT-SHE and SOT in 6T-Based Non-Volatile SRAM',
    authors: ['Sangeetha C. Soman', 'SUNANDA AMBULKER'],
    abstract: `This work features a comparative analysis of Spin Transfer Torque - Spin Hall Effect Non Volatile Static Random Access Memory (STT-SHE NVSRAM) and Spin Orbit Torque Non Volatile Static Random Access Memory (SOT NVSRAM) with respect to influential performance parameters like delay, stability, power consumption, and noise margin. For the fair comparison both the designs have been simulated in the same simulation environment by using same 45nm CMOS technology. Simulation results indicate that SOT NVSRAM has lesser read, write, store, and restore delays because of its highly effective read and write path separation, while STT-SHE NVSRAM has greater delays because of the integrated SHE-STT switching mechanism. With regard to stability, STT-SHE NVSRAM exhibits higher read and hold static noise margin (SNM), and SOT NVSRAM enhances write SNM, providing greater write stability. At 1.2v supply voltage the simulation results also reveals about the reduced write switching power in SOT NVSRAM as a result of the one-way current flow in SOT switching. STT-SHE NVSRAM exhibits lower power consumption because of effective Spin Hall Effect-based switching, which employs a lateral current path and prevents current flow through the MTJ, resulting in lower current. STT-SHE NVSRAM can be used in applications requiring less power consumption, whereas SOT NVSRAM is used where there is a need for high speeds due to better read and write delays. The results emphasize the compromise among speed, power, and stability in non-volatile SRAM, which gives useful insights into designing energy-efficient and high-speed memory.`,
    mainContact: {
      name: 'Sangeetha C. Soman',
      email: 'sangeethasoman6@gmail.com',
    }
  },
  {
    id: '279',
    time: '12:15 PM - 12:30 PM',
    title: 'Efficient Low-Power 6T SRAM Design with MTCMOS in 90nm CMOS Technology',
    authors: ['Aaryan Jha', 'Amit Kumar'],
    abstract: `This paper presents the design of efficient low-power 6T SRAM that incorporates multi-threshold CMOS (MTCMOS) technology using 90nm standard CMOS process in Cadence analog design environment (ADE). The proposed design stencils additional PMOS and NMOS transistors to boost performance, improving upon conventional 6T and MTCMOS-based SRAM structures. The results demonstrate a significant reduction in write latency from 4 ns (conventional 6T SRAM) to 1.91 ns in the proposed design, achieving over 50% improvement in write speed with lower power consumption. Additionally, the proposed design achieves better rise and fall times compared to conventional 6T SRAM, further enhancing operational speed. The proposed SRAM design provides an effective solution for high-speed, low-power SRAM applications in modern VLSI systems.`,
    mainContact: {
      name: 'Amit Kumar',
      email: 'mgva.amit@gmail.com'
    }
  },

  {
    id: '363',
    time: '12:30 PM - 12:45 PM',
    title: '6T SRAM BASED IN-MEMORY COMPUTING USING RECONFIGURABLE ASSIST SENSE AMPLIFIER',
    authors: ['Kshitiz Shukla', 'Gargi Khanna'],
    abstract: `The Von Neumann architecture's disadvantages, particularly the bottleneck brought on by numerous data transfers between cores of the central processing unit and storage, are supposed to be addressed by a novel approach termed in-memory computing (IMC). This work uses a Reconfigurable Assist Sense Amplifier (RASA) to demonstrate a novel SRAM-based method for efficient in/near-memory Boolean computations. The RASA optimizes computational efficiency without interrupting the conventional read process by utilizing assist transistors to carry out NAND/AND, NOR/OR, and XOR/XNOR operations. By utilizing a single sense amplifier (SA), the proposed method effectively eliminates the need for dual SAs, a common feature in state-of-the-art solutions. This results in increased memory density and a reduction in the cost per bit compared to existing architectures, which incur significant area overhead. This work demonstrates how the RASA-based SRAM design can provide a scalable solution for energy-efficient, high-performance computing in data-intensive applications. Simulation demonstrates 8 bit addition capability, 76.98 mW average power dissipation, and significant improvements over state-of-the-art IMC schemes.`,
    mainContact: {
      name: 'Contact',
      email: '23mec011@nith.ac.ina'
    }
  },
     {
    id: '193',
    time: '12:45 PM - 1:00 PM',
    title: 'Energy-Efficient Pore-Confined Phase Change Memory Using Current-Crowding Effect: A Simulation Study',
    authors: ['Rekib Uddin Ahmed', 'Arun Tej Mallajosyula', 'Basant Saini', 'Udayan Ganguly'],
    abstract: `Phase-Change Memory (PCM) is a non-volatile memory technology that stores data by switching a chalcogenide material between amorphous and crystalline states using Joule heating, offering fast switching performance. To enhance energy efficiency, previous studies have explored PCM structures such as the mushroom, confined, and pore-confined type. These designs confine current and heat to reduce programming energy and improve thermal stability, although often at the cost of reliability and scalability. Nevertheless, PCM still suffers from high RESET energy, large amorphous volumes that increase SET current, and reliability issues such as void formation and RESET-stuck failures, which limit its viability for low-power and scaled applications. This paper proposes a pore-confined PCM design that induces a current-crowding effect, forming a dumbbell-shaped amorphous region. This design improves thermal confinement and accelerates recrystallization during the SET process by promoting nucleation in the thinned amorphous region. Compared to traditional confined-type, RESET and SET energies are significantly reduced. The proposed design demonstrates a 49.86% reduction in RESET energy compared to conventional confined-type designs, while achieving a memory window of 608.39 - comparable to the state-of-the-art works.`,
    mainContact: {
      name: 'Rekib Uddin Ahmed',
      email: 'rekib48@gmail.com'
    }
  },
  
      {
      id: '216',
      time: '1:00 PM - 1:15 PM',
      title: 'Analysis of Circuits with Partially Correlated Multi-Vt Cell Variations using Sensitivity Modeling and Propagation.',
      authors: ['Mohd Abu Ubaida ' , ' Prashasti Pandey ',' Sneh Saurabh', 'Ajoy Mandal' , 'Venkatraman Ramakrishnan'],
      abstract: `Traditional static timing analysis (STA) tools consider the global variations in low-threshold voltage (LVT) and high-threshold voltage (HVT) transistors as fully correlated. However, in reality, due to differences in fabrication, the variations in these transistors are partially correlated, introducing inaccuracies in computing statistical attributes of delay in multiVt circuits. In this paper, we present an analytical framework to compute cell delay variance, accounting for global variations in LVT and HVT transistors. We introduce a novel approach for computing the variance of total path delay in a mixed LVT HVT circuit that considers partial correlation between LVT-HVT transistors. We propose characterizing a sensitivity library that enables the analytical computation of cell delay variance and the propagation of cross sensitivities, i.e., the sensitivity of LVT cell delay with respect to HVT device parameters and vice-versa.We demonstrate that the standard deviation of path delay in an inverter chain computed using the proposed framework agrees quite well with the Monte Carlo SPICE simulations, exhibiting errors less than 5%. Moreover, the proposed framework can capture the effects of varying slews, load, correlation between LVT and HVT devices, and configuration. This work also demonstrates the application of multi-Vt cells to mitigate the impact of process-induced variations and provides insights into their effectiveness for circuit design.`,
      mainContact: {
        name: 'Mohd Abu Ubaida',
        email: 'abu23216@iiitd.ac.in'
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