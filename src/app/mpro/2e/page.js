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
  sessionTitle = "Analog and Digital",
  sessionTime = "4:10 PM - 5:40 PM",
  sessionDate = "August 8, 2025",
  sessionLocation = "Board Room",
  sessionChairperson = "Chair 1: Prof. R.S. Ashwin Kumar, Chair 2: Prof. Anil Singh",
  sessionDescription = "",
  
  // Papers Array
papers = [
  {
    id: '126',
    time: '4:10 PM - 4:25 PM',
    title: 'An Audio 0.85-V 130-μW ΔΣ Modulator',
    authors: ['Mohd Asim Saeed', 'Sumit Soin', 'Devarshi Mrinal Das'],
    abstract: `This paper presents a passive charge compensation (PCC) based switched capacitor (SC) 2-1 cascaded delta sigma modulator (DSM). The transients during switching of SC integrator (SCI) used in DSM causes the slewing of the OTA which consumes large amount of time available for settling reducing the speed of DSM. The proposed DSM uses a passive charge compensation (PCC) technique which reduces the slewing of OTA without requiring any extra biasing current. Additionally an optimized value of CC capacitor (CM_OP T ) is used which is calculated while considering the slewing of SCI during integration phase (IP) and sampling phase (SP) unlike the conventional PCC technique in which the value CC capacitor (CM ) is calculated while considering the slewing only during IP of SCI. The DSM is fabricated in 0.18-μm CMOS technology with a die area of 1.3 mm2. The experimental results shows that the PCC based DSM with CM_OPT achieves a peak SNDR of 82.5 dB while PCC based DSM with CM achieves a peak SNDR of 77.2 dB over 20-kHz bandwidth with a 5-MHz sampling frequency and 0.85-V supply voltage while consuming only 130-μW of power.`,
    mainContact: {
      name: 'Mohd Asim Saeed',
      email: 'asim.19eez0030@iitpr.ac.in',
    }
  },
  {
    id: '79',
    time: '4:25 PM - 4:40 PM',
    title: 'A 16.28 ppm/°C Temperature Coefficient, 0.5V Low-Voltage CMOS Voltage Reference with Curvature Compensation',
    authors: ['Harshith Reddy', 'Pankaj Arora'],
    abstract: `This paper presents a fully-integrated CMOS voltage reference designed in a 90 nm process node using low voltage threshold (LVT) transistor models. The voltage reference leverages subthreshold operation and near-weak inversion characteristics, backed by an all-region MOSFET model. The proposed design achieves a very low operating supply voltage of 0.5 V and a remarkably low temperature coefficient of 16.28 ppm/°C through the mutual compensation of CTAT, PTAT, and curvature-correction currents, over a wide range from -40 °C to 130 °C. A stable reference voltage of 205 mV is generated with a line sensitivity of 1.65 %/V and a power supply rejection ratio (PSRR) of -50 dB at 10 kHz. The circuit achieves all these parameters while maintaining a good power efficiency, consuming only 0.67 μW.`,
    mainContact: {
      name: 'Contact',
      email: 'f20220025@pilani.bits-pilani.ac.in',
    }
  },
  {
    id: '211',
    time: '4:40 PM - 4:55 PM',
    title: 'A 2.7 GHz, –161.18 dBc/Hz FoM, Auxiliary-Controlled Dual-Differential Delay Cell-based Multi-Phase Four-Stage Ring VCO',
    authors: ['MAYANK KUMAR SINGH', 'Rajasekhar Nagulapalli', 'Devarshi Mrinal Das', 'Mahendra Sakare'],
    abstract: `An auxiliary-controlled dual-differential (AC-DD) delay cell is proposed for a multi-phase, four-stage ring voltage-controlled oscillator (RVCO) to support high-frequency operation. The AC-DD delay cell incorporates one PMOS and one NMOS cross-coupled pair where the PMOS pair operates as a latch, and the NMOS pair enhances the oscillation frequency. Frequency tuning is achieved through auxiliary inputs connected via PMOS transistors from the output terminals. This configuration enables precise frequency control and improved high-speed performance. Post-layout simulations were performed using a 65 nm CMOS technology with a 1V supply voltage. At an operating frequency of 2.7 GHz, the AC-DD delay cell-based RVCO has a phase noise of –103.7 dBc/Hz and a power dissipation of 13 mW. Furthermore, it achieves a figure of merit (FoM) of –161.18 dBc/Hz, improving 6 dB over conventional RVCO design, highlighting its enhanced efficiency and performance.`,
    mainContact: {
      name: 'MAYANK KUMAR SINGH',
      email: 'mayank.19eez0008@iitpr.ac.in',
    }
  },
  {
    id: '256',
    time: '4:55 PM - 5:10 PM',
    title: 'A 2.6 mW, -111.6 dBc/Hz Phase Noise, LC-VCO using Harmonic Control for High Frequency Applications',
    authors: ['Ayanmani Das', 'MAYANK KUMAR SINGH', 'Rajasekhar Nagulapalli', 'Mahendra Sakare'],
    abstract: `This paper proposes an LC Voltage-Controlled Oscillator (LC-VCO) architecture that achieves low phase noise by leveraging a high-Q LC tank. The Q-factor is enhanced through a parallel-series LC configuration, which filters out even harmonics and utilizes odd harmonics to boost the output swing. The proposed LC-VCO operates at a frequency of 4.6 GHz, with a power dissipation of 2.61 mW and phase noise of -90.64 dBc/Hz at 100 kHz offset and -111.6 dBc/Hz at 1 MHz offset. The phase noise has improved by 4 dB and it has an FoM of -160.68 dBc/Hz at 1 MHz offset, which is 3.81 dB better than conventional design. PVT and Monte Carlo simulations were conducted at post-layout level using 65 nm CMOS technology, at a supply voltage of 1 V.`,
    mainContact: {
      name: 'Ayanmani Das',
      email: 'ayanmani.1999.20@gmail.com',
    }
  },
  {
    id: '165',
    time: '5:10 PM - 5:25 PM',
    title: 'A Wideband SIW-based Hammer-Shaped Slot Antenna for Handheld Sensing Applications',
    authors: ['Ritesh Kumar Ojha', 'Sayyed Arif Ali', 'Abhishek Srivastava', 'Mohd Wajid'],
    abstract: `This paper presents a wideband tapered feed hammer-shaped slot antenna using substrate-integrated waveguide (SIW) technology. The longitudinal hammer-shaped slot etched in the SIW cavity excites radiation at the 24 GHz band at TE110 mode and offers a wide bandwidth. The antenna is excited using the microstrip to SIW transition. Compared to a traditional rectangular slot (I-shaped), the proposed hammer-shaped slot improves the impedance matching in this antenna. Parametric analysis of the slot has been performed to achieve the best optimization. Finally, the antenna is fabricated, and its performance is experimentally verified. The measurement of the fabricated antenna shows that the covered bandwidth of this antenna is 1000 MHz and achieved a fractional bandwidth of 3.93% at 10 dB with a cross-polarization level below -28 dB. The compact PCB footprint (0.95λg × 0.95λg × 0.25λg) of this antenna makes it a good contender for portable embedded devices and IoT devices, short-range radars, or low-profile handheld sensing applications.`,
    mainContact: {
      name: 'Ritesh Kumar Ojha',
      email: 'riteshojha3@gmail.com',
    }
  },
  // {
  //   id: '36',

  //   title: 'Solving Formal Complexity for Linked List Hardware Designs',
  //   authors: ['Ankit Saxena', 'Radheshyam Baviskar', 'Shubhangi Goel'],
  //   abstract: `Exhaustive verification of hardware linked lists has become extremely important to ensure no hardware issues such as dead-lock or memory leakage happens due to them. Because of micro-architecture defined concurrency (for example, concurrent updates to head-pointer, tail-pointer, links and free-pointers for different linked-lists IDs) in the linked list designs, it is very hard to get sufficient coverage and confidence using traditional simulation-based approach. Formal verification, due to its exhaustive nature, can provide exhaustive coverage and confidence – though only after we solve formal complexity i.e., we ensure that bounded proofs have reached sufficient depths. In this paper, we will discuss how we can solve formal complexity for linked list designs. First, we will discuss the micro-architecture components of linked list designs (such as free-pointers initialization sequence, various memories) which cause formal complexity either due to high-sequential depth of scenarios or due to high flip-flop count. Then, we will discuss how we can write efficient checkers in formal using symbolic variables. Then, we will discuss the complexity solving methods which can be used to solve the formal complexity and more importantly we will discuss how to apply them on linked list designs. Here we will discuss how to apply memory abstraction models on head-pointer memory, tail-pointer memory, data memory and free-list memory. After that we will discuss why we cannot apply memory abstraction on links memory. Then, we will discuss how to apply abstraction models for size counters and initial value abstraction for the case when free-list needs to be initialized. In the end, we will see the results where we applied this methodology on a linked list design and how we were able to achieve 100% coverage for a linked list design having a large number (2,048) of pointers.`,
  //   mainContact: {
  //     name: 'Ankit Saxena',
  //     email: 'ankitsaxena@marvell.com',
  //   }
  // }
   {
    id: '234',
    time: '5:25 PM - 5:40 PM',
    title: 'Heterogeneous Feature-based Testing for Rare Node Identification on Sequential Circuits',
    authors: ['Sneha C', 'Amulya H S' , 'Nirmala Devi M'],
    abstract: `The detection of stealthy Hardware Trojans (HTs) in digital designs, particularly in sequential circuits, presents a significant challenge due to the rare activation and deep placement of Trojan trigger nodes. This paper introduces a robust testing-oriented framework for identifying rare Trojan trigger nodes by extracting a diverse set of features, including structural characteristics, functional behavior, and Graph Centrality Measures (GCM). To enhance node selection, three prominent feature selection techniques—SHapley Additive exPlanations (SHAP), XGBoost's built-in feature importance, and Local Interpretable Model-agnostic Explanations (LIME)—are employed to identify the most predictive attributes influencing Trojan localization. The filtered rare nodes are then evaluated against Trojan locations in ten sequential circuits from Trust-HUB benchmarks, with matching statistics and overlap percentages computed to assess detection effectiveness. Experiments are conducted on a high-performance Ubuntu workstation to ensure consistency and scalability. The results demonstrate strong alignment between predicted rare nodes and actual Trojan sites, validating the utility of the proposed framework for Hardware Trojan detection in pre-silicon testing stages.`,
    mainContact: {
      name: 'Contact',
      email: 'pes1202303691@pesu.pes.edu'
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