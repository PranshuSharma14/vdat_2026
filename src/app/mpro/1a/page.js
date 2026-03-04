"use client";
import React, { useState, useEffect } from "react";
import Footer from './../../footer/footer';
import Navbar from './../../home/Navbar';
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
  sessionTitle = "Emerging Devices",
  sessionTime = "2:00 PM - 3:30 PM",
  sessionDate = "August 8, 2025",
  sessionLocation = "Majlis Main",
  sessionChairperson = "Chair 1:  Prof. Shubham Sahay, Chair 2: Prof. Ravindra Naik Bukke",
  sessionDescription = "",
  
  // Papers Array
  papers = [
    {
      id: '132',
      title: 'Investigation of vertical FBFET for logic and static memory application',
      time: '2:00 PM - 2:15 PM',
      authors: ['Pranav Mishra' , ' Subir Das' , 'Pramod Kumar Tiwari'],
      abstract: 'In this paper, a p-type vertical FBFET is designed for memory and logic applications. The proposed device displays an exceptionally steep switching characteristic with a subthreshold swing of 0.37 mV/decade and a high ON/OFF current ratio of approximately 1010. The FBFET demonstrates significant memory attributes with a retention time of over 500 s and non-destructive reading characteristics lasting 800 s. The operation of a 1TSRAM is validated in a 2 × 2 array by performing a nondestructive read of a selected cell without causing any disturbance to the half-selected cell. Additionally, logic-in-memory (LIM) NOT and NAND gates are implemented using the vertical FBFET and load resistor. The device and mixed-mode simulations of the circuits are performed using commercially available "ATLAS" TCAD tool for examining the performance and memory characteristics of the vertical FBFET. This study demonstrates the possible use of Vertical FBFETs in logic-in-memory applications and 1-T SRAM cells to fulfill the high-density memory requirement and resolve processing speed issues.',
      mainContact: {
        name: 'Subir Das',
        email: 'subir_2121ee16@iitp.ac.in',
      }
    },
    {
      id: '149',
      title: 'FeCiM: FeFET based Computing-in-Memory Architectures for Secure Logic Locking Designs',
      time: '2:15 PM - 2:30 PM',
      authors: ['Kadiyam Tirumala Rao', '  Premateja Kommineni', 'Revathi Tanniru', 'Lakshmi Vanapalli', 'Aditya Japa' , 'Ramesh Vaddi'],
      abstract: 'Logic locking is a popular hardware obfuscation technique for intellectual property (IP) protection in vulnerable IC supply chains. CMOS based logic locking techniques introduce high propagation delay and energy consumption overhead with technology scaling. Emerging ferroelectric (FE) capacitance-based field effect transistor (FeFET) with internal voltage amplification mechanism exhibits lower subthreshold swing than CMOS. Moreover, FeFET with tunable device characteristics can be configured as either an energy efficient switch or a non-volatile memory. Exploiting the tunable device behavior, FeFET/NCFET based energy efficient computing-in-memory (CiM) logic locking technique is proposed. Initially, FeFET/NCFET based CiM XOR logic gate has been proposed, demonstrating ~4.19× lower energy consumption as compared to baseline CMOS (tfe=0nm) design. Further, the proposed FeFET/NCFET based CiM logic locking circuit shows ~29.4× lower energy compared to spintronics based logic locking. Overall, the proposed logic locking circuit exhibits ~6.84× lower energy delay product (EDP) compared to the spintronics counterparts. The secure locked circuit demonstrates approximately 12 times greater resilience to power side channel attacks compared to traditional CMOS designs.',
      mainContact: {
        name: 'Kadiyam Tirumala Rao',
        email: 'tirumalarao_k@srmap.edu.in',
      }
    },
    {
      id: '200',
      title: 'Design and Performance Optimization of Novel Negative Capacitance Gate-Overlap Tunnel FET Devices for Low-Power VLSI Applications',
      time: '2:30 PM - 2:45 PM',
      authors: ['Sujaya Grace Ch', ' ANSHUL AWASTHI', 'Ramakant Yadav', 'Surya Shankar Dan' , 'Pooran Singh'],
      abstract: 'This paper presents a study on the impact of negative capacitance (NC) on the gate-overlap tunnel FET (GOTFET) for low-power VLSI circuits, emphasizing on the on-state current Ion, inverse subthreshold-slope SS and the intrinsic delay Cg:Ion ratio. A novel NC-GOTFET structure is proposed, incorporating a ferroelectric (FE) material layer between the gate and the dielectric material. This design utilizes gate-overlap on the source region to enhance band-to-band tunneling (BTBT) at the source-channel junction, significantly improving Ion. The Ion, SS and Cg:Ion ratio of NC-GOTFET have been compared with the GOTFET device without the FE layer in the gate stack. The Ion of the NC-GOTFET is 261.7 µA, while that of the GOTFET is 34.5 µA, reflecting a significant (7.6 times) improvement, as a result of the FE layer. The SS and Cg:Ion ratio of NC-GOTFET are 34.7 mV/dec and 1.294 ps/V compared to 59.1 mV/dec and 4.078 ps/V of the GOTFET, respectively. These improvements demonstrate the advantages of integrating an FE layer in the gate stack and gate-overlap on the source region. The device has been optimized by analyzing how material properties, structural configurations, and dimensional variations influence its performance, particularly focusing on the Ion, off-state current Ioff, Ion:Ioff ratio, SS, total gate capacitance Cg, gate-to-source Cgs, and gate-to-drain Cgd capacitances. The proposed NC-GOTFET device outperforms both the GOTFET and MOSFET at the same 32 nm technology node, and also surpasses several previously reported NC-TFETs, making it highly suitable for high-speed and low-power applications.',
      mainContact: {
        name: ' Ramakant Yadav',
        email: 'ramakant@mahindrauniversity.edu.in',
      }
    },
    {
      id: '198',
      title: '1T-SRAM using Recessed-Source/Drain (Re-S/D) Silicon-on-Insulator (SOI) Feedback Field Effect Transistor (FBFET)',
      time: '2:45 PM - 3:00 PM',
      authors: ['Sasi Kiran Suddarsi', 'Dr.Dhanaraj K. J' , 'Dr.Gopi Krishna Saramekala'],
      abstract: 'In this study, we explored one-transistor static random access memory using a recessed source/drain feedback field effect transistor (Re-S/D FBFET). FBFETs are very high on (ION) current with almost zero SS. In this study, we showed a 21.10 percent increment in drain current while using Re S/D SOI FBFET. The transistor characteristics also note a 1µs retention time. The 1T-SRAM cell shows promise and potential for future low-power memory arrays.',
      mainContact: {
        name: 'Sasi Kiran Suddarsi',
        email: 'sasikiran_p190139ec@nitc.ac.in',
      }
    },
    {
      id: '172',
      title: 'Prediction of Reverse Bias Leakage Current in Al0.3Ga0.7N/GaN HEMT Devices Using Machine Learning and Ensemble Modeling',
      time: '3:00 PM - 3:15 PM',
      authors: ['Akshat Mudgal', ' Devansh Khanna', 'Harsh Kumar Dixit', 'Rishev Singh Chaudhary', 'Shivansh Mishra', 'Kanchan Manna' , 'Apurba Chakraborty'],
      abstract: 'This study investigates the use of machine learning to predict the reverse current density of AlGaN/GaN devices using features such as aluminium composition (x), voltage (V), and temperature (T). Various regression models including Decision Tree, Random Forest, XGBoost, LightGBM, a stacking ensemble, and a custom hybrid model, were evaluated for predictive accuracy. Tree-based models showed significant overfitting and poor generalization. In contrast, the stacking and hybrid models offered improved performance, with the hybrid model achieving R² > 0.97 across interpolated temperatures from 25°C to 150°C. These results demonstrate the effectiveness of ensemble and hybrid learning in modeling of semiconductor device characteristics.',
      mainContact: {
        name: 'Apurba Chakraborty',
        email: 'apurbac@goa.bits-pilani.ac.in', 
      }
    },
    {
      id: '340',
      title: 'A Switchless Resonant Circuit Based Multi-Band Matching Network for RF Energy Harvesting Applications',
      time: '3:15 PM - 3:30 PM',
      authors: ['Chaya Hegde', 'Nagaratna Shanbhag', 'Saroj Mondal'],
      abstract: 'This paper presents a systematic design methodology of switchless resonant circuits based multi-band matching network by utilizing lumped components. For RF Energy harvesting systems, matching network should be capable of matching frequency dependent complex impedance to the antennas impedance. To illustrate the same, dual-band network is designed and implemented at 953 MHz and 2.45 GHz. The results exhibit a reflection coefficient of magnitude greater than 20 dB at both the frequencies.',
      mainContact: {
        name: 'Chaya Hegde',
        email: '221022001@iitdh.ac.in',
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
                          {/* <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                                {paper.mainContact.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div>
                                <h5 className="font-bold text-gray-900 dark:text-gray-100">
                                  {paper.mainContact.name}
                                </h5>
                                <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                                  <Building className="w-4 h-4" />
                                  {paper.mainContact.affiliation}
                                </p>
                              </div>
                            </div>
                          </div> */}
                          
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
                            
                            {/* <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                              <Phone className="w-4 h-4 text-indigo-600" />
                              <a 
                                href={`tel:${paper.mainContact.phone}`}
                                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                              >
                                {paper.mainContact.phone}
                              </a>
                            </div> */}
                            
                            {/* {paper.mainContact.website && (
                              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                <Globe className="w-4 h-4 text-indigo-600" />
                                <a 
                                  href={paper.mainContact.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                  Website
                                </a>
                              </div>
                            )} */}
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