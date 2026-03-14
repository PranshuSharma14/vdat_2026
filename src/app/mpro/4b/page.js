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
  sessionTitle = "Digital and Memory",
  sessionTime = "2:15 PM - 4:15 PM",
  sessionDate = "August 9, 2025",
  sessionLocation = "Majlis Second Hall",
  sessionChairperson = "Chair 1:  Prof. Debiprasanna Sahoo, Chair 2: Prof. Manu Bansal",
  sessionDescription = "",
  
  // Papers Array
papers = [
    {
    id: '151',
    time: '2:15 PM - 2:30 PM',
    title: 'Hardware Implementation of a DCT Architecture with LMS Adaptation and Hybrid Arithmetic Units',
    authors: ['Kavipriyaa S T ' , ' Aniruddha Kanhe'],
    abstract: `This paper introduces a hardware architecture for the Discrete Cosine Transform, focusing on optimizations at the arithmetic level. The design efficiently handles 16-bits input and generates 32-bits output, making it ideal for sequential data applications. Central to the architecture is the integration of a finite impulse response filter with least mean square adaptation mechanism, which allows dynamic adjustment of coefficients based on discrepancies between expected and actual outputs. By utilizing a look-up table to store precomputed DCT coefficients, the design significantly reduces real-time computational demands. A notable contribution of this work is the implementation of hybrid arithmetic units for both adders and multipliers, which combine precise and approximate logic. This strategy minimizes hardware complexity and enhances computational efficiency while maintaining output accuracy. The architecture is fully described in Verilog, synthesized, and advanced through physical design to GDSII using a standard ASIC flow. Notably, the proposed hybrid design achieves an average error reduction of 11.15%, decreasing the error from 12.45% in traditional implementations to 11.28%. These results validate the architecture's capability to preserve output quality while leveraging approximate computing methods, particularly in audio compression applications.`,
    mainContact: {
      name: 'Kavipriyaa S T',
      email: 'kavipriyaa491@gmail.com'
    }
  },
   {
    id: '180',
    time: '2:30 PM - 2:45 PM',
    title: 'SADP Trim Placement Methodology for Faster Convergence with Complex Design Rules',
    authors: ['Deepak Karnatak', 'Sachin Shrivastava', 'Vishal Rastogi'],
    abstract: `Self Aligned Double Patterning has become the mainstream lithography method for sub 20-nm technology nodes. Trim layer provides a solution to the designers to achieve the smaller spacing between the line ends. However, in sub 10-nm technology nodes, rules have become very complex for trim placement. The trims now need to be aware of not only the line end spacing, but also need to be aware of the wires and other trims in the neighborhood. The designers need to run multiple iterations to fix the trim placement. In this paper, we propose a solution which takes care of complex DRC rules and place the trims with variable heights. The solution aims at correcting the trims at construct preventing the need of designers manually fixing them. Our experimental results show a marked improvement in the number of DRC clean trims that can be inserted using our methodology.`,
    mainContact: {
      name: 'Vishal Rastogi',
      email: 'vrastogi@cadence.com'
    }
  },

    {
    id: '183',
    time: '2:45 PM - 3:00 PM',
    title: 'Method to Achieve Early CDC Closure using Graph Convolutional Network (GCN) and Isomorphism',
    authors: ['Pronay Biswas' , 'Rahul Roy', 'Usnish Mukherjee', 'Anshu Malani', 'Sudeep Mondal', 'Deepak Ahuja' , 'PARAS MAL JAIN'],
    abstract: 'Clock Domain Crossing (CDC) verification is a critical aspect of System on Chip (SoC) design, requiring extensive analysis using formal technologies such as False Path Identification, Qualifier Validation for Data Paths, and Data Loss Analysis for Fast to Slow Control Paths. However, formal verification is compute-intensive on large SoCs due to the necessity of checking all bits of buses for completeness, coupled with high memory and runtime requirements, often leaving formal analysis incomplete for end users. In this paper, we propose a novel approach to address these challenges by leveraging Graph Isomorphic properties with Graph Convolutional Networks (GCNs). It utilizes GCNs to detect graph isomorphisms by generating embeddings of the graphs and identifying similar logic circuits within the design. By detecting similar clusters, CDC analysis can be performed on a single cluster element, thereby significantly reducing the runtime and computational resources required for comprehensive CDC verification. The experimental results demonstrate about 5x gain with this approach, which results in a substantial reduction of verification time while maintaining the accuracy and completeness of the analysis.',
    mainContact: {
      name: 'Usnish Mukherjee',
      email: 'usnish@synopsys.com'
    }
  },

     {
    id: '140',
    time: '3:00 PM - 3:15 PM',
    title: 'A Dynamically Biased, 0.46pJ/bit, 23.5Gbps, Inverter Intensive, PAM-4 Based Full-Duplex Interconnect',
    authors: ['Ganpat Anant Parulekar'],
    abstract: `This paper proposes a full-duplex input-output cell based on PAM-4 modulation, achieving a bi-directional throughput of 23.5 Gbps. The proposed design can be extended to the other modulation formats also. It features an inverter-based configuration with dynamic biasing. The inverter-based nature of this design makes it very easy to implement and power efficient in nature. The proof-of-concept circuit is implemented using the 65 nm UMC process. The proposed design achieves a figure of merit (power/frequency of operation) of 0.46 pJ/bit for 23.5 Gbps throughput in the simulations.`,
    mainContact: {
      name: 'Ganpat Anant Parulekar',
      email: 'ganpatparulekar1@gmail.com'
    }
  },

     {
    id: '351',
    time: '3:15 PM - 3:30 PM',
    title: 'Edge-AI Driven PyramidNet for Chronic Wound Segmentation using Point-of-Care Devices',
    authors: ['Pritam Chakraborty', 'Tamoghna Sonowal', 'Mahua Bhattacharya', 'Pradyut Kumar Sanki' , 'Biswabandhu Jana'],
    abstract: `Accurate and efficient wound assessment is critical in clinical practice, especially in resource-constrained or rural healthcare environments where expert evaluation tools are often unavailable. This paper presents a lightweight and high-performing PyramidNet model for wound segmentation due to its capturing both fine-grained boundaries and global wound structure. To evaluate its clinical utility, we tested the model on a publicly available Chronic Wound dataset, achieving a remarkable IoU of 99.39%, Dice Score of 99.47%, and Recall of 99.98%, outperforming several state-of-the-art models with maintaining a compact size of 2 million parameters. To facilitate the growth of a point-of-care (PoC) device, the model is deployed on Raspberry Pi for real-time wound image segmentation. Overall, the approach enables scalable and accessible wound care automation in remote and underserved areas.`,
    mainContact: {
      name: 'Pritam Chakraborty',
      email: 'pritam.23.research@gmail.com'
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