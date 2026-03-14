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
  sessionTitle = "RF-IC",
  sessionTime = "2:00 PM - 3:30 PM",
  sessionDate = "August 8, 2025",
  sessionLocation = "Majlis Second Hall",
  sessionChairperson = ['Chair 1:  Prof. Animesh Biswas'  ,  'Chair 2:   Prof. Gaganpreet Kaur'],
  sessionDescription = "",
  
  // Papers Array
papers = [
  {
    id: '336',
    time: '2:00 PM - 2:15 PM',
    title: 'A Wide Tuning Range Enhanced NF and IIP3 Variable Gain LNA for Narrowband Applications',
    authors: ['Pulkit Kathuria', 'Krishnan Rengarajan', 'Saroj Mondal'],
    abstract: 'In this paper, we proposed a wide tuning range, enhanced noise figure (NF) and high linearity variable-gain low noise amplifier (VGLNA) for Narrowband (NB) applications. The wide tuning range and variable gain were achieved in both modes by employing a variable resistor at the output. In addition, the proposed VGLNA utilises folded-cascode topology in low gain mode to achieve high linearity. Moreover, a bulk-to-source resistance is employed to achieve sub-1 dB NF in both modes of operation. The proposed VGLNA has been designed and simulated in 0.18 μm CMOS technology and is operating at 2.4GHz frequency. The post-layout simulations exhibit the power gain, input return loss, and NF of 13 dB, 20dB, and 1.1 dB at low-gain mode and 23 dB, 18 dB, and 1.18 dB at high-gain mode, respectively. Also, the proposed VGLNA exhibits IIP3 of +4.5 dBm at low-gain mode and 4.8 dBm at high-gain mode. The VGLNA consumes 7.2 mW at low-gain mode and 13.8 mW at high-gain mode for a supply voltage of 1.2 V.',
    mainContact: {
      name: 'Contact Email',
      email: '210020039@iitdh.ac.in',
    }
  },
    {
      id: '179',
      time: '2:15 PM - 2:30 PM',
      title: 'On-Wafer Measurements of 19.7 dB Gain 0.64 dB NF Wi-Fi LNA with On-Chip Active Biasing',
      authors: ['Vasu K. Reddy', 'Mudit Gupta'],
      abstract: 'This paper describes the design and measurement of a low-power 5.5 GHz LNA with an on-chip biasing circuit for Wi-Fi applications. The LNA parameters may vary from wafer/site to wafer/site when they are biased externally or on-chip voltage references. The cascode current mirror is embedded to generate on-chip bias for common-source (CS) and common-gate (CG) devices. The on-chip biasing circuit reduces the wafer to wafer deviation of the biasing point which improves the stability and consistency of LNA performance. The LNA is designed using floating body FET for CS device and body contacted FET for CG device. The noise figure of LNA is improved by optimizing the gate inductor with tapered dual thick copper metals. The prototype is fabricated and measured on a high resistivity SOI process with 65nm gate length. The measurements are performed across different wafers and sites to validate the importance of on-chip biasing for LNA. The measurements show that the gain is 19.7 dB, noise figure of 0.64 dB and IIP3 of -1.8dBm while consuming 6.6mA from a 1.6V supply. More importantly, wafer to wafer variation of LNA gain and current is only 0.25 dB and 18.29 uA, respectively.',
      mainContact: {
        name: 'Vasu K. Reddy',
        email: 'guptamudit213@gmail.com',
      }
    },
    {
      id: '373',
      time: '2:30 PM - 2:45 PM',
      title: 'Design and Implementation of novel XFMR for low-voltage mmWave-frequency VCO applications',
      authors: ['Saurabh Zope', 'Narahari N. Moutdhgalya', 'Adarsh Yadav', 'Abhishek Srivastava'],
      abstract: 'This paper presents a novel Transformer (XFMR) design intended for integrated mmWave applications. The XFMR design consists of an 8-shaped primary inductor and a dumbbell-shaped secondary inductor. This structure addresses key challenges in on-chip XFMR design by improving electromagnetic interference (EMI) suppression, reducing unwanted signal coupling, and optimizing magnetic field symmetry. Additionally, the geometry exploits better layout efficiency and isolation, contributing to improved performance in tightly integrated environments. To demonstrate the practical advantages of the proposed XFMR, it is implemented in a low-voltage, low-phase-noise (PN) LC VCO designed for 23.8 - 27.2 GHz operation. Simulation results in TSMC 65 nm CMOS technology shows a tuning range of 3.4 GHz, a PN lesser than -110 dBc/Hz at 1 MHz offset, and a figure-of-merit (FoM) greater than 185 dBc/Hz, at 0.5 V supply. These results validate the effectiveness of the XFMR in enhancing VCO performance, highlighting its potential for use in high-performance mmWave design.',
      mainContact: {
        name: 'Saurabh Zope',
        email: 'saurabh.zope@research.iiit.ac.in',
      }
    },
    {
      id: '282',
      time: '2:45 PM - 3:00 PM',
      title: 'A Resistorless Active Inductor Based CTLE',
      authors: ['Puneet Singh', 'Rahul Walia', 'Rajasekhar Nagulapalli', 'Mahendra Sakare'],
      abstract: 'This paper presents a resistorless continuous-time linear equalizer (CTLE) architecture utilizing a PMOS-based active inductor as its load element. The proposed design eliminates traditional resistive and capacitive peaking components, replacing them with a novel low-frequency gain introduced through the active inductor. This approach not only enables effective bandwidth extension under low-voltage operation without the need for voltage boosting but also significantly reduces the silicon area typically required by conventional CTLE structures. The proposed resistorless active inductor-based CTLE has been designed using a standard 65 nm CMOS process with a 1 V supply. The CTLE occupies a compact active area of 0.0012 mm². Post-layout simulations confirm the effectiveness of the design and demonstrate reliable operation over a 12-inch channel at 10 Gb/s. The equalizer achieves an eye width of 86.15 ps, eye height of 215.7 mV, and a jitter of 13.27 ps, while maintaining a low power consumption of 4.67 mW and achieving a figure of merit (FoM) of 0.46 pJ/bit. These results underscore the potential of the proposed CTLE for use in high-speed, area-constrained communication systems.',
      mainContact: {
        name: 'Puneet Singh',
        email: 'puneet.19eez0003@lnmiit.ac.in',
      }
    },
    {
      id: '293',
      time: '3:00 PM - 3:15 PM',
      title: 'Demystifying Dual-Band Impedance Matching Strategy for RF Energy Harvesting Systems',
      authors: ['Soumya Rank', 'Chaya Hegde', 'Saroj Mondal'],
      abstract: 'This paper presents a novel mathematical approach for designing dual-band impedance matching networks that act as an equivalent CL matching network at both frequencies. This paper mainly focuses on the CL match network for a rectifier whose equivalent parallel RC precludes the use of LC matching. The proposed technique incorporates inductor non-idealities during the design process, and the simulated S11 values of the dual-band impedance matching network operating at frequencies 953 MHz and 2.45 GHz are -19.43 dB and -18.29 dB, respectively.',
      mainContact: {
        name: 'Soumya Rank',
        email: 'soumyarank@gmail.com',
      }
    },
    {
      id: '354',
      time: '3:15 PM - 3:30 PM',
      title: 'A Switchless Resonant Circuit Based Multi-Band Matching Network for RF Energy Harvesting Applications',
      authors: ['Chaya Hegde', 'Nagaratna Shanbhag', 'Saroj Mondal'],
      abstract: 'This paper presents a systematic design methodology of switchless resonant circuits based multi-band matching network by utilizing lumped components. For RF Energy harvesting systems, matching network should be capable of matching frequency dependent complex impedance to the antennas impedance. To illustrate the same, dual-band network is designed and implemented at 953 MHz and 2.45 GHz. The results exhibit a reflection coefficient of magnitude greater than 20 dB at both the frequencies.',
      mainContact: {
        name: 'Contact Email',
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
              <Users className="w-5 h-5" />
              <span>{sessionChairperson.join(', ')}</span>
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