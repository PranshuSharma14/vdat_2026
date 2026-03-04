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
  sessionTime = "11:45 AM - 1:15 PM",
  sessionDate = "August 9, 2025",
  sessionLocation = " Adab Arz Hall",
  sessionChairperson = "Chair 1: Prof. Shubham Sahay, Chair 2: Prof. Rahul Shrestha",
  sessionDescription = "",
  
  // Papers Array
papers = [
  {
    id: '206',
    time: '11:45 AM - 12:00 PM',
    title: 'VLSI Architecture of Hardware Accelerator for Transformer AI Model',
    authors: ['MD NAJRUL ISLAM'],
    abstract: `Transformers are the heart of natural language processing(NLP) and are used for ML applications. The architecture of the transformers is made up of stacking of the encoder and decoder layers. This paper proposes a VLSI architecture of hardware accelerator for such transformer models. This architecture supports a dimensionality of 512, which has a 512×512 matrix as an output for detection. In this architecture a memory module for positional encoding (POS) part consists of precomputed POS values of sine and cosine, which makes the architecture both hardware and energy efficient. For calculating the soft-max function, a simplified soft-max function is deployed in both blocks, which takes fewer LUTs, and an efficient matrix multiplication block is used to achieve a more efficient result and less computational power, reducing the area for this architecture.`,
    mainContact: {
      name: 'MD NAJRUL ISLAM',
      email: 'najrulislam095@gmail.com'
    }
  },
    {
    id: '291',
    time: '12:00 PM - 12:15 PM',
    title: 'Highly scalable monolithic integration of neuron and synapse for SNN',
    authors: ['Aravind Ananthakrishnan', 'Rajakumari V', 'Kumar Prasannajit Pradhan'],
    abstract: `This work presents a compact, device-level integration of neuronal and synaptic functions using two identical N-MOSFETs on a common Buried Oxide (BOX) layer. The leaky Integral-and-fire (LIF) model of a biological neuron is emulated, with one MOSFET configured as the neuron and the other as the synapse, separated by an interlayer oxide (ILO). The neuronal drain is connected to the synaptic gate, allowing synchronous operation of the integrated device. Through Sentaurus TCAD simulations, key parameters such as spike threshold, spiking frequency, and synaptic weight adaptability are validated. The spiking mechanism is governed by the Single Transistor Latch (STL) behavior, enabled by electrostatic potential buildup at the drain under negative gate bias. The synaptic device, being short-channel, exhibits current flow even at zero drain voltage, once the gate potential crosses the neuronal threshold. The impact of interface trap density on synaptic current and threshold voltage is analyzed, highlighting conductance modulation via charge trapping. Additionally, the role of ILO length is studied, revealing its inverse relationship with spike timing due to variations in the electrostatic potential gradient across the drain. The results provide a deeper understanding of the impact of scaling on co-integrated neuromorphic devices and pave the way for the development of more compact and energy-efficient neuromorphic hardware.`,
    mainContact: {
      name: 'Kumar Prasannajit Pradhan',
      email: 'kppradhan@iiitdm.ac.in'
    }
  },
    {
    id: '415',
    time: '12:15 PM - 12:30 PM',
    title: 'LIDER: A Tool Framework Leveraging Large Language Model (LLM) for Incremental Design Refinement',
    authors: ['Shivam Shukla', 'Utkarsh Choudhary', 'Sneh Saurabh'],
    abstract: `In this paper, we propose a generalized tool framework, LIDER (LLM-based Incremental Design Engineering and Refinement), that leverages Large Language Models (LLMs) to automatically fill the verification and implementation gaps using successive refinement, reducing the manual intervention of traditional design flows significantly. We demonstrate LIDER's application in the automatic discovery of timing violations and their resolution using Google's Gemini 2.0 Flash API and the open-source timing analysis tool OpenSTA. Moreover, LIDER can produce design analysis reports, interpret timing analysis results, generate and refine timing constraints, and perform self-documentation. Hence, it can significantly reduce engineering effort while enhancing the accuracy, consistency, and speed of design closure in complex digital systems. Additionally, this work highlights the need for domain-specific fine-tuning of LLMs for more effectiveness. Therefore, a unified framework spanning across design flow tasks, such as LIDER, will facilitate the shared investment in fine-tuning and capability development, thereby promoting scalability and broader utility across the design ecosystem.`,
    mainContact: {
      name: 'Shivam Shukla',
      email: 'shivam22478@iiitd.ac.in'
    }
  },
     {
    id: '130',
    time: '12:30 PM - 12:45 PM',
    title: 'TYTAN: Taylor-series based Non-Linear Activation Engine for Deep Learning Accelerators',
    authors: ['Soham Pramanik', 'Vimal William', 'Arnab Raha', 'Debayan Das', 'Amitava Mukherjee', 'Janet L. Paluh'],
    abstract: `The rapid advancement in AI architectures and the proliferation of AI-enabled systems have intensified the need for domain-specific architectures that enhance both the acceleration and energy efficiency of AI inference, particularly at the edge. This need arises from the significant resource constraints—such as computational cost and energy consumption—associated with deploying AI algorithms, which involve intensive mathematical operations across multiple layers. High-power-consuming oper- ations, including General Matrix Multiplications (GEMMs) and activation functions, can be optimized to address these challenges. Optimization strategies for AI at the edge include algorithmic approaches like quantization and pruning, as well as hardware methodologies such as domain-specific accelerators. This paper proposes TYTAN: TaYlor-series based non-linear acTivAtion eNgine, which explores the development of a General-Purpose Non-linear Approximation Engine (GPNAE). TYTAN targets the acceleration of non-linear activation functions while minimizing power consumption. The TYTAN integrates a re-configurable hardware design with a specialized algorithm that dynami- cally estimates the necessary approximation for each activation function, aimed at achieving minimal deviation from baseline accuracy. The proposed system is validated through performance evaluations with state-of-the-art AI architectures, including Con- volutional Neural Networks (CNNs) and Transformers. Results from system-level simulations using Silvaco's FreePDK45 process node demonstrate TYTAN's capability to operate at a clock frequency > 950M Hz, showcasing its effectiveness in supporting accelerated, energy-efficient AI inference at the edge, which is ∼ 2× performance improvement, with ∼ 56% power reduction and ∼ 35× lower area compared to the baseline open-source NVIDIA Deep Learning Accelerator NVDLA implementation.`,
    mainContact: {
      name: 'Soham Pramanik',
      email: 'sohampramanik75@gmail.com'
    }
  },
  {
    id: '240',
    time: '12:45 PM - 1:00 PM',
    title: 'ARIES: ADC-Less 3T1R-based nvCIM macro for Edge AI applications',
    authors: ['Ankit Kumar Tenwar', 'Radheshyam Sharma', 'Mukul Vishnu Lokhande', 'Santosh Vishvakarma'],
    abstract: 'Data-intensive applications have advanced rapidly, increasing the need for computing solutions that are both energyefficient and high-performing. This research presents a CIM (compute-in-memory) architecture without ADCs, utilizing a 3T1R bitcell inspired by the ReCAM framework and an effective voltage division method. Designed with 65nm CMOS technology, this architecture removes the requirement for high-power analogto-digital converters, leading to significant cuts in energy use and complexity. The 3T1R bitcell facilitates robust in-situ logic operations, providing stable rail-to-rail digital outputs compatible with subsequent circuit stages. Simulation results indicate a minimum latency 0.35 ns realizing an energy-efficient, low-latency and drop in energy consumption for Multiply-Accumulate (MAC) operations when contrasted with existing ADC-based systems. The design supports binary neural network (BNN) applications, offering scalability proven through a 25×25 macro, highlighting its suitability for edge AI systems with limited resources.',
    mainContact: {
      name: 'Santosh Vishvakarma',
      email: 'skvishvakarma@iiti.ac.in'
    }
  },

  {
    id: '401',
    time: '1:00 PM - 1:15 PM',
    title: 'Design of Invertible Comparators and Max Pooling Layer using p-bits for Neural Networks',
    authors: ['Amit Kumar Jangid', 'AMIT SINGH', 'srinivasu bodapati'],
    abstract: `Invertible computing presents a viable avenue for energy-efficient machine learning by facilitating low-power, probabilistic logic circuits with an invertible nature. This paper delineates the design and execution of invertible comparators and an invertible max-pooling layer utilizing probabilistic bits (p-bits) for neural networks. In contrast to conventional digital circuits, p-bit-based architectures utilize inherent stochastic behaviour to execute both forward and backward operations inside the same hardware, facilitating efficient bidirectional computations. This work offers innovative p-bit circuits that execute the comparison operation in an invertible fashion and expand these designs to develop a probabilistic max-pooling layer, an essential element in convolutional neural networks. Presented designs maintain the functional integrity of conventional forward max-pooling while facilitating invertible inference, advantageous for energy-based learning and generative models. The simulation findings indicate proper functioning, resilience to noise, and scalability of the proposed designs.`,
    mainContact: {
      name: 'Contact',
      email: 's22052@students.iitmandi.ac.in'
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