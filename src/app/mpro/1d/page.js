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
  sessionTitle = "Memory",
  sessionTime = "2:00 PM - 3:30 PM",
  sessionDate = "August 8, 2025",
  sessionLocation = "Anjuman Hall",
  sessionChairperson = "Chair 1: Prof. Sudeb Dasgupta, Chair 2: Prof. Ambika Prasad Shah",
  sessionDescription = "",
  
  // Papers Array
papers = [
  {
  id: '169',
  time: '2:00 PM - 2:15 PM',
  title: 'Spin-TLB: STT-RAM-based Translation Hierarchy for Server Applications in CPUs',
  authors: ['Tejeshwar Bhagatsing Thorawade', 'Varun Venkitaraman Iyer', 'Ankith R', 'Newton Singh', 'Virendra Singh'],
  abstract: `Translation Look-aside Buffers (TLBs) are essential for efficient memory virtualization in modern processors. They cache recent address translations to avoid costly page-table walks. As server applications become increasingly data-intensive, their working dataset grows, making address translation a significant performance bottleneck. Thus, optimizing TLBs has become increasingly important. Addressing the demands of larger workloads necessitates larger TLBs; however, conventional SRAM-based TLBs have scalability challenges. As their capacity increases, they incur higher access latency, increased area overhead, and greater energy consumption.

To address these limitations, this paper proposes a novel TLB architecture that leverages STT-RAM technology. To the best of our knowledge, this is the first use of STT-RAM in CPU TLB architectures. STT-RAM offers about 4× the density of SRAM, enabling larger TLBs within the same area. STT-RAM also offers similar read latency and energy per read access as SRAM. While STT-RAM exhibits higher write latency and energy per write, TLBs perform very few write operations, making these drawbacks have minimal impact. These characteristics make STT-RAM a promising alternative for building scalable and energy-efficient TLBs.

We introduce Spin-TLB, a novel TLB architecture that incorporates STT-RAM into the Data-TLB (DTLB) and Secondary-TLB (STLB). This design choice is based on the observation that DTLBs and STLBs benefit more from increased capacity than Instruction-TLBs (ITLBs). Our experimental evaluation demonstrates that Spin-TLB improves system performance (IPC) by up to 15.2% compared to a baseline with SRAM-based TLBs. It also reduces average TLB energy consumption by 64.3% and lowers the number of page walks by an average of 95.6%. These results highlight the potential of STT-RAM-based TLBs to significantly enhance CPU performance and energy efficiency.`,
  mainContact: {
    name: 'Tejeshwar Bhagatsing Thorawade',
    email: 'tejeshwart@iitb.ac.in',
  }
},
 {
    id: '201',
    time: '2:15 PM - 2:30 PM',
    title: 'Design & Analysis of Low Power 9T SRAM Cell',
    authors: ['Abhishek Prakash', 'SUNANDA AMBULKER'],
    abstract: `Static Random Access Memory (SRAM) is a crucial component of the memory hierarchy, which requires high endurance, high speed and low power consumption performance. In this work a 9T SRAM cell has been designed by utilizing stacking & voltage lowering technique for low power high speed operation. A detailed comparison of proposed 9T SRAM cell also been done with conventional 6T and state of art 9T cells. Simulation has been performed by using SCL180nm PDK technology at 1.8V supply voltage. The simulation results shows that the proposed 9T SRAM cell having enhanced read operation with low power consumption which makes it a good prospect for low-power and high-speed applications.`,
    mainContact: {
      name: 'Abhishek Prakash',
      email: 'abhishekprakash440@gmail.com'
    }
  },

{
  id: '263',
  time: '2:30 PM - 2:45 PM',
  title: 'High-Speed and Low-Cost SRAM Cell Using a 2×1 MUX in Quantum-Dot Cellular Automata (QCA)',
  authors: ['Nitesh Kumar Rathore', 'Pooran Singh'],
  abstract: `To enhance stability and efficiency, this research proposes a novel Static Random-Access Memory (SRAM) bitcell utilizing Quantum-dot Cellular Automata (QCA) technology. As technology nodes continue to scale down, traditional CMOS-based SRAM faces significant challenges related to power consumption and scalability. The design and development of logic circuits using QCA technology have become an important area of research. The main advantages of this approach include a smaller area, reduced operating speed, minimal power consumption, and improved switching rates in nanoscale technology, making it particularly appealing. The proposed single-bit SRAM cell in QCA is designed by integrating a single (MUX) with an AND gate. The benefits of this design in terms of cell count, total footprint, and clock cycle delay are evidenced by the observed results. Notably, when compared to other proposed QCA SRAM circuits, the proposed layout achieves an outstanding increase of 85.44% overall cell number, 99.2% on the QCA cost, and 75% on clock cycle latency.`,
  mainContact: {
    name: 'Pooran Singh',
    email: 'pooran.singh@mahindrauniversity.edu.in',
  }
},
{
  id: '414',
  time: '2:45 PM - 3:00 PM',
  title: 'Low-Power NBTI Resilient 12T SRAM Cell with Enhanced Reliability',
  authors: ['Vipul Sahu', 'ARYAN KANNAUJIYA', 'Pranjal Verma', 'Ambika Prasad Shah'],
  abstract: `This work briefs an aging resilient SRAM cell for reliable data storage. The proposed R-SRAM cell is configured with 12 transistors. The performance parameters, such as SRRV, WRRV, N-curve, have been evaluated for large-scale applicability. Further, HSNM, RSNM, WSNM of R-SRAM is improved by 1.15×, 1.26×, 1.08× than the conventional 6T SRAM cell. However, less aging effect by analysing threshold voltage shift over five years on applying stress voltage of 1V shows that there is 1.16× improvement in the threshold voltage (Vth) of the NBTI-resilient (NR)-SRAM cell in relation to 6T SRAM cell. For process variation and process mismatch analysis, 2000 Montecarlo simulations for Vth reveals that the R-SRAM has an improvement for 1.32× of σ and 1.05× of μ than that of 6T SRAM cell. Thus, the proposed R-SRAM cell is NBTI resilient, having reduced leakage power embedded with different control signals for data storage. All simulation work have been completed by using industry-standard 40nm UMC technology node.`,
  mainContact: {
    name: 'Ambika Prasad Shah',
    email: 'ambika.shah@iitjammu.ac.in',
  }
},
{
  id: '258',
  time: '3:00 PM - 3:15 PM',
  title: 'Energy-Efficient Ternary-SRAM cell in CNFET and FinFET Technologies using Static Ternary Inverter (STI)',
  authors: ['SEKHAR DEVANDLA', 'LOKESH CHOWKACHERLA', 'Nitesh Kumar Rathore', 'Ramakant Yadav' , 'Pooran Singh'],
  abstract: `This research uses fin-field effect transistors (FinFETs) and carbon nanotube FETs (CNFETs) to provide an exciting low-power consumption and high-performance SRAM bit cell using the proposed 6-transistor-based standard ternary inverter (STI). Ternary logic has various advantages over binary logic, including higher bit density and energy efficiency. When comparing the proposed CNFET STI to the traditional design STI, there is a 99.7% improvement in the power-delay product (PDP). Then, the proposed STI ternary logic has been used to design an SRAM bit cell using the CNFET and FinFET technologies in 32nm. This study shows that the proposed STI ternary CNFET-based SRAM cell design outperforms both the proposed FinFET-based and the conventional ternary SRAM designs in terms of write and read delay time, and dynamic power dissipation. Compared to conventional CNFET, proposed FinFET, and conventional FinFET SRAM cells, the proposed design achieves improved write delay (1.43×, 1.51×, 4.81×), read delay (1.22×, 0.6×, 2.54×), reduced write dynamic power (9.44×, 5.63×, 6.32×), and reduced read dynamic power (1.9×, 37.8×, 15.8×), respectively.`,
  mainContact: {
    name: 'Pooran Singh',
    email: 'pooran.singh@mahindrauniversity.edu.in',
  }
},
{
  id: '166',
  time: '3:15 PM - 3:30 PM',
  title: 'A Scalable FSM-Controlled SRAM Architecture for Robust Hardware Memory Security',
  authors: ['Bhavin Bhavani ', ' Anupam Mathur', 'Sreeja Rajendran', 'Vinay Palaparthy' , 'Yash Agrawal'],
  abstract: `In the rapidly evolving landscape of digital systems, ensuring hardware security has become paramount, particularly in the protection of on-chip memory such as SRAM. Conventional methods of securing memory are increasingly vulnerable to sophisticated threats like hardware Trojans and reverse engineering attacks. In this work, we propose a novel Finite State Machine (FSM)-based locking mechanism designed to enhance the security of SRAM arrays through logic obfuscation. The proposed architecture requires specific input sequences to activate memory operations, thereby restricting unauthorized access and significantly improving system resilience against SAT-based and redesign attacks. To validate the approach, the locking mechanism is implemented on a 32×32 SRAM memory array, demonstrating its effectiveness at the architectural level. To address the scalability and power efficiency challenges associated with existing key-based approaches, our design minimizes circuit redundancy and ensures constant overhead irrespective of memory size. Furthermore, low-power design techniques specifically Dynamic VDD and Gated Ground are integrated into the memory architecture. These methods effectively reduce power consumption without compromising access times, thus demonstrating the viability of our solution in energy-constrained environments. Simulation results on a 180nm technology node affirm that the proposed approach offers a compelling balance of security, scalability, and energy efficiency for future memory systems.`,
  mainContact: {
    name: 'Contact',
    email: '202311052@daiict.ac.in',
  }
},

// {
//   id: '177',
//   title: 'FRRH14T: FinFET based Fast Recovering Radiation Hardened 14T SRAM for Space Applications',
//   authors: ['Ganesh Prasad B K', 'Ayush Maurya', 'Ravi S Siddanath', 'Mohit Gupta', 'Dr. Prasanna Kumar Misra', 'Manish Goswami', 'Kavindra Kandpal'],
//   abstract: `Memory circuits in space are susceptible to instability and reliability issues due to charged particles like alpha particles, neutrons, heavy ions, and photons. When these particles pass through the memory device, they generate an ion track that can interfere with stored data. Traditional 6T SRAM (Static Random Access Memory) is particularly prone to such disruptions. To tackle this issue, researchers have developed radiation-hardened SRAM cells, often by adding extra redundant nodes to improve reliability. This study introduces a fast FRRH14T (Fast Recovering Radiation Hardened 14 Transistor) SRAM cell with redundant nodes to protect against soft errors.The performance of the presented cell is evaluated using Cadence Virtuoso at 18 nm FinFET technology and 0.8 V supply voltage. Its performance is compared with other reliable radiation-hardened memory designs, including RSP12T, RHB12T, HSLC12T, NRHC14T, and SIMR18T. The FRRH14T cell is designed to resist single-event upset disruptions by optimizing node placement to minimize sensitivity, giving a recovery time of 1.2 ns. Additionally, it demonstrates significantly better write access time ranging from 1.09× to 2.2×—compared to the current radiation-hardened memory architectures.`,
//   mainContact: {
//     name: 'Kavindra Kandpal',
//     email: 'kavindra@iiita.ac.in',
//   }
// }
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