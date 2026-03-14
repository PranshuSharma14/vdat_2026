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
  sessionTime = "11:45 AM - 1:15 PM",
  sessionDate = "August 9, 2025",
  sessionLocation = "Anjuman Hall",
  sessionChairperson = "Chair 1:  Prof. Lipika Gupta, Chair 2: Prof. Neeraj Goel",
  sessionDescription = "",
  
  // Papers Array
papers = [
     {
    id: '136',
    time: '11:45 AM - 12:00 PM',
    title: 'FPGA-Based Autonomous Ship for Real-Time Navigation and Object Detection',
    authors: ['Tejeswara Rao PADDA', 'Dr.Yaswanth Bhanumurthy M', 'PRABHAS S', 'JALANDHAR S', 'LEELA NIKHIL S'],
    abstract: `This FPGA-based autonomous ship prototype addresses maritime challenges like collisions and emissions through real-time navigation and object detection. Deployed on the DE10-Nano, it leverages YOLOv3-tiny, GPS-based A* routing, and ultrasonic sensors to achieve 92\% detection accuracy and 1.5s latency. The Hard Processor System enables Azure IoT Hub connectivity via MQTT for fleet monitoring and predictive maintenance. Field tests demonstrate 3.1W power consumption, 40\% lower than GPUs, and 18\% fuel reduction. With parallel FPGA processing and cloud analytics, the system scales for maritime IoT, enhancing safety and efficiency in congested waterways.`,
    mainContact: {
      name: 'Tejeswara Rao PADDA',
      email: 'tejesh@sensesemi.in'
    }
  },
  {
    id: '224',
    time: '12:00 PM - 12:15 PM',
    title: 'PACE: A Power-Aware Clock Enhancement Technique for CRYSTALS-Kyber on FPGA',
    authors: ['DIXIT DUTT BOHRA', 'Dip Sankar Banerjee', 'Somitra Sanadhya'],
    abstract: 'The National Institute of Standards and Technology (NIST) has standardized CRYSTALS-Kyber, a post-quantum key encapsulation mechanism (KEM) designed to safeguard systems against emerging quantum-era threats. Its hardware, however, requires meticulous optimization to achieve ultra-low power for IoT resource-constrained domains while retaining universal applicability. We present PACE (Power-Aware Clock Enhancement), a pioneering methodology exploiting a Power- Timing Trade-Off Model (PTTM) with adaptive parametric tuning for precise clock period optimization. PACE dynamically balances timing slack across critical paths to mitigate variability under process, voltage, and temperature (PVT) corners, ensuring robust operation. Deployed on Kyber KEM hardware across Artix-7, Basys, and Zybo Z7-20 FPGAs, PACE reduces power by 34.8%–40.1%, strategically lowering the clock from 169.92 MHz to an IoT-optimized 91.29 MHz (10.954 ns). This energy optimized frequency ensures millisecond-scale throughput—ideal for IoT tasks like periodic key exchanges—while preserving timing robustness and cryptographic strength. Unlike speed- centric designs that inflate power, PACE strikes an optimal power-performance balance. Through a scalable, model-driven approach, PACE minimizes dynamic power, broadening Kyber reach across IoT and other domains.',
    mainContact: {
      name: 'Contact',
      email: 'p23cs0003@iitj.ac.in'
    }
  },
  {
    id: '265',
    time: '12:15 PM - 12:30 PM',
    title: 'Efficient FPGA and ASIC Implementations of ASCON for IoT and Blockchain',
    authors: ['Ritika Choudhary', 'srinivasu bodapati', 'Kamal Raj'],
    abstract: `With the critical importance of robust and secure communication in the Internet of Things (IoT), preventing cybersecurity breaches is paramount. ASCON is a lightweight cryptography algorithm chosen by the National Institute of Standards and Technology (NIST) as the standard for resource limited environments. This paper presents an FPGA-based optimized approach for implementing ASCON hashing, encryption, and decryption within a single hardware unit, achieving a high throughput of 795 Mbps. Additionally, a detailed comparison of the proposed design with the best existing designs has been presented. Moreover, the ASCON hash has achieved a throughput of 917 Mbps, marking a 27.2% improvement over previous implementations. This high throughput is vital for optimizing real-time applications and blockchain technologies. Furthermore, a frequency of 266 MHz has been achieved for the ASCON-128, representing an 8.32% increase over previous implementations. The ASIC synthesis of designs is performed using UMC 90 nm technology. This work also presents a novel approach that combines blockchain technology with lightweight cryptography.`,
    mainContact: {
      name: 'Contact',
      email: 's23055@students.iitmandi.ac.in'
    }
  },
  {
    id: '317',
    time: '12:30 PM - 12:45 PM',
    title: 'FPGA Implementation of High throughput On-board Pre-processing for Hyper/Multi-spectral Image Compression',
    authors: ['Priyankkumar Prajapati', 'Poorna Chandra Bandaru', 'Anand Darji', 'Amit Joshi', 'Jimit Gadhia', 'Ankur Garg'],
    abstract: `In space data applications, the Onboard satellite hyper and multi-spectral image compression system design is challenging due to its limited power, storage, and bandwidth for communication. This work focuses on implementation of spectral pre-processing as per consultative committee for space data system design (CCSDS) recommended 122.1b1 hyper and multi-spectral image compression standard. Hyper/Multi spectral image compression is performed with and without preprocessing using the Pairwise Orthogonal Transform (POT) in software. This work shows a 58.26% improvement in the image compression ratio for the pre-processed images using POT. Further, efficient hardware is realized for the POT based pre-processing method on KCU105(xcku040-ffva1156-2-e) FPGA board. The hardware utilized is only 1.23% LUTs and maximum operating frequency is observed as 174.48MHz with throughput of 300MSPS(@150MHz). The implementation is helpful for efficient compression of the Hyper/multi-spectral image captured during satellite imaging, which will reduce the transmission power of the satellite system.`,
    mainContact: {
      name: 'Priyankkumar Prajapati',
      email: 'priyank.prajapati@rediffmail.com'
    }
  },
  {
    id: '333',
    time: '12:45 PM - 1:00 PM',
    title: 'SysJoin:A Novel EquiJOin Acceleration Architecture For FPGA and ASIC Implementation',
    authors: ['Sudeendra Kumar K', 'Lasya Chidanand Hegde'],
    abstract: `This paper presents SysJoin, a lightweight, high-throughput hardware architecture for accelerating Equi-join operations in relational databases using a systolic array. Equi-joins are computationally intensive and frequently executed in large-scale data analytics. Existing Equi-Join architectures are not modular and scalable for the varying sizes of data inputs and current architectures for FPGA implementation are targeted to specific FPGA based on the availability of BRAM's in that particular device and not portable across different types of FPGAs. The proposed SysJoin architecture based on one-dimensional systolic array of simple processing elements which perform N-bit comparisons with minimum control overhead. The proposed SysJoin implementation utilizes the very less FPGA resources in comparison with existing techniques and at the same time throughput is also significantly high. The proposed architecture utilizes the 78% less hardware resources in FPGAs in comparison with existing techniques and throughput also higher by 42% on an average. We have verified the proposed generic SysJoin architecture for ASIC implementation and reduced the power by employing clock gating. The results of ASIC implementation are also presented.`,
    mainContact: {
      name: 'Sudeendra Kumar K',
      email: 'kumar.sudeendra@gmail.com'
    }
  },
  {
    id: '144',
    time: '1:00 PM - 1:15 PM',
    title: 'Efficient License Plate Detection and Recognition with FPGA-Based Hardware-Software Co-Design',
    authors: ['Swati K', 'Disha Lad', 'Jay Modi', 'Pinalkumar Engineer'],
    abstract: `With the exponential growth in vehicular density, manual vehicle monitoring has become increasingly ineffective, necessitating automated, intelligent solutions such as Automatic License Plate Recognition (ALPR). Traditional cloud-based approaches often suffer from network dependency, latency, and privacy concerns, making them less suitable for time-sensitive or bandwidth-constrained environments. Leveraging the paradigm shift toward edge and fog computing, this work presents a complete hardware-software co-design framework for ALPR, implemented on an FPGA platform with sequential processing of first detecting the license plate followed by recognizing characters present. The system utilizes a quantized YOLOv3-Tiny model for efficient license plate detection and a custom convolutional neural network (CNN) for character recognition. Key operations are mapped onto the FPGA fabric, where parallelism and pipelined execution reduce inference latency and improve throughput. The proposed architecture is modular, scalable, and energy-efficient, making it ideal for deployment in intelligent transportation systems, toll automation, smart parking, and urban surveillance. This FPGA-based implementation offers a robust, real-world deployable solution that addresses the constraints of edge environments while supporting the broader goals of smart infrastructure and decentralized computing. Experimental evaluation demonstrates that the proposed FPGA-based implementation achieves over 3.6$\times$ speedup compared to microcontroller-based solutions, with a substantial reduction in power consumption. These results underscore the framework's suitability for deployment in resource-constrained, latency-sensitive environments, supporting the broader vision of decentralized and smart infrastructure.`,
    mainContact: {
      name: 'Contact',
      email: 'd20ec012@eced.svnit.ac.in'
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