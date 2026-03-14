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
  sessionTitle = "Accelerator",
  sessionTime = "2:15 PM - 4:15 PM",
  sessionDate = "August 9, 2025",
  sessionLocation = "Adab Arz Hall",
  sessionChairperson = "Chair 1: Prof.Rohit Sharma, Chair 2: Prof. Kumar Prasannajit Pradhan",
  sessionDescription = "",
  
  // Papers Array
papers = [
  
  {
    id: '262',
    time: '2:15 PM - 2:30 PM',
    title: 'Hardware Accelerator for 2D DCT/ IDCT with Improved Loeffler Architecture and CSD Coding',
    authors: ['Yogeshwar Rai' , 'Sovanjyoti Giri ' , ' B Naresh Kumar Reddy'],
    abstract: 'This paper introduces a methodology for identifying process variability of chips based on PMOS sensitive and NMOS sensitive ring oscillators (RO) and classification-based Machine Learning algorithms. These ring oscillators produce frequencies indicative of the operational process of the chip. Schmitt Trigger usage increases the sensitivity of inverters with respect to variations in process. The combination of frequencies from NMOS-sensitive RO (freq_3n_st) and NMOS-cap RO (freq_n_cap), PMOS-sensitive RO (freq_3p_st) and PMOS-cap RO (freq_p_cap) becomes the primary features of Machine Learning algorithms. The model predicts whether NMOS or PMOS devices are in a fast, slow or typical range individually. Experimental validation demonstrates classification accuracy of 89% for NMOS and 92% for PMOS devices across various process corners. This methodology provides an efficient solution for on-chip process monitoring.',
    mainContact: {
      name: 'B Naresh Kumar Reddy',
      email: 'bnkreddy@nitt.edu'
    }
  },
  {
    id: '325',
    time: '2:30 PM - 2:45 PM',
    title: 'Ternary Approximate Max Pooling Architecture Using Multi-Trit Borrow Generators',
    authors: ['Hemanth Krishna Lavati' ,'srinivasu bodapati'],
    abstract: `This paper presents novel ternary multi-trit borrow generator architectures for efficient max pooling operations. We propose both exact and approximate designs for 3-trit and 6-trit borrow generators, using a modified ternary full subtractor. The 6-trit borrow generator is hierarchically constructed using three 3-trit borrow generators in a borrow-select-based configuration. Based on the positional arrangement of the 3-trit modules, we introduce three distinct approximate 6-trit max operator designs, each offering a unique trade-off between accuracy and hardware efficiency. These approximate max operators are employed to perform max pooling for both $2 \times 2$ and $3 \times 3$ windows. Experimental results demonstrate that the proposed approximate designs achieve superior PSNR of 35 dB and SSIM values are more than 90\% over the conventional exact pooling layer, thereby validating their effectiveness in image processing applications.`,
    mainContact: {
      name: 'Hemanth Krishna Lavati',
      email: 'hemanth.krishna412@gmail.com'
    }
  },
     {
    id: '213',
   time: '2:45 PM - 3:00 PM',
    title: 'Hardware Implementation of Swish Activation Function Using Piecewise Regression Trees for Deep Neural Networks',
    authors: ['Akash Dev Roshan', 'Prithwijit Guha', 'Gaurav Trivedi'],
    abstract: ``,
    mainContact: {
      name: 'Akash Dev Roshan',
      email: 'akash_dev@iitg.ac.in'
    }
  },

  {
   id: '358',
   time: '3:00 PM - 3:15 PM',
   title: 'Mixed Adaptive Precision SIMD Systolic Array Accelerator for Deep Learning',
   authors: ['GOPAL RAUT' , 'DAVID SELVAKUMAR', 'PRANOSE J. EDAVOOR',' RITAMBHARA THAKUR'],
   abstract: ``,
   mainContact: {
     name: 'David Selvakumar',
     email: 'david@cdac.in'
   }
 },
 {
   id: '347',
    time: '3:15 PM - 3:30 PM',
   title: 'Neural Network-Based Offset Calibration using Capacitor Arrays in Dynamic Comparators',
   authors: ['Angel Garg ', ' Anil Singh ',' Alpana Agarwal'],
   abstract: `Dynamic comparators are essential components in analog-to-digital converters (ADCs) [1], but are prone to offset voltage errors due to process-induced mismatches. This paper presents a hybrid calibration technique that combines traditional capacitor-based offset calibration [2] with a neural network (NN) to effectively minimize offset. The neural network-based offset calibration technique significantly improves efficiency by automatically predicting optimal capacitor array configurations for dynamic comparators, eliminating time-consuming manual tuning procedures, and achieving offset compensation. The time-based offset polarity classification approach is made, where the zero-crossing timing is extracted using a derivative circuit followed by a time-to-digital converter (TDC). The TDC output is then fed into the neural network, which predicts the optimal capacitor array configuration.`,
   mainContact: {
     name: 'Angel Garg',
     email: 'agarg8_be23@thapar.edu'
   }
 },
  {
    id: '302',
    time: '3:30 PM - 3:45 PM',
    title: 'Bidirectional Multi-process Recurrent Neural Networks Based Signal Integrity Assessment for N-Line Coaxial-Through Glass Vias in 3D Integration',
    authors: ['Suyash Sachdeva', 'K. Madhu Kiran' , 'Rohit Dhiman'],
    abstract: `In the domain of high-frequency three-dimensional integrated circuits (3D-ICs), the accurate analysis of signal integrity across Through-Glass Vias (TGVs) is essential, especially in dense multi-line interconnect environments. Traditional electromagnetic simulations, while accurate, are computationally intensive when modeling complex interactions such as crosstalk in high-density TGV arrays. This work proposes a deep learning-based alternative leveraging a multi-path Long Short-Term Memory (LSTM) model, designed to learn the temporal and spatial dependencies of crosstalk effects within coaxial TGV structures. A custom simulation dataset comprising N signal lines was generated to emulate realistic high-frequency behavior in a coaxial-TGV interconnect scenario. The proposed model achieved an R² score of 0.9263 on the test set, indicating strong predictive accuracy in modeling the nonlinear and multi-path signal behavior across the TGV lines.`,
    mainContact: {
      name: 'Contact',
      email: '20dec001@nith.ac.in'
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