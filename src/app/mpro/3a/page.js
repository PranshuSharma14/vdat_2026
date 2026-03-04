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
  sessionTitle = "Processor and FPGA",
  sessionTime = "11:45 AM - 1:15 PM",
  sessionDate = "August 9, 2025",
  sessionLocation = "Majlis Main",
  sessionChairperson = "Chair 1: Mr. H S Jattana , Chair 2:  Prof. Amit Panday",
  sessionDescription = "",
  
  // Papers Array
papers = [
  {
    id: '288',
    time: '11:45 AM - 12:00 PM',
    title: 'Low-Power Approximate Multiplier Architecture for Deep Neural Networks',
    authors: ['Pragun Jaswal' , '  Hemanth Krishna Lavati ' , ' Srinivasu bodapati'],
    abstract: `This paper proposes an energy-efficient approximate multiplier architecture for deep neural network (DNN) applications. A 4:2 compressor, introducing only a single combination error, is designed and integrated into an 8×8 unsigned multiplier. This integration significantly reduces the usage of exact compressors while preserving low error rates. The proposed multiplier is employed within a custom convolution layer and evaluated on neural network tasks, including image recognition and denoising. Hardware evaluation demonstrates that the proposed design achieves up to 30.24\% energy savings compared to the best of existing multipliers. In image denoising, the custom approximate convolution layer achieves improved Peak Signal-to-Noise Ratio (PSNR) and Structural Similarity Index Measure (SSIM) compared to other approximate designs. Additionally, when applied to handwritten digit recognition, the model maintains high classification accuracy. These results demonstrate that the proposed architecture offers a favorable balance between energy efficiency and computational precision, making it suitable for low-power AI hardware implementations.`,
    mainContact: {
      name: 'Hemanth Krishna Lavati',
      email: 'hemanth.krishna412@gmail.com',
    }
  },
  {
    id: '92',
    time: '12:00 PM - 12:15 PM',
    title: 'High-Performance Data Level Parallelism based Variable Precision 32-bit Co-Processor Design',
    authors: ['Mohamed Asan Basiri M', 'Joel Israel'],
    abstract: `A co-processor is a hardware accelerator used to improve the performance of the primary processor. One of the best methods to enhance the co-processor's performance is to take advantage of the idea of parallelism. In this paper, a high performance 32-bit co-processor is proposed. The proposed 32-bit co-processor exploits the idea of data-level parallelism (DLP), where multiple less precision operations such as additions, subtractions, multiplications, divisions, shiftings, and logical operations are performed in parallel. Also, we propose a variable precision 32 bit divider to perform one 32-bit division or tow 16-bit divisions or four 8-bit divisions in parallel. Similarly, we propose a 32-bit variable precision right/left shifter, where one 32-bit shift or two 16-bit shifts or four 8-bit shifts are performed in parallel. These proposed 32-bit variable precision divider and shifters are the part of our proposed 32-bit co-processor. As an application part, the proposed 32-bit co-processor is used in the calculation of the (32×32)-point forward 2D integer discrete cosine transform, which is used to compress a (32×32)-point greyscale image. The forward 2D integer discrete cosine transform of the image is calculated using our proposed co-processor with hardware software co-design in Xilinx SDK with Zynq 7000 SoC as the target FPGA.`,
    mainContact: {
      name: 'Mohamed Asan Basiri M',
      email: 'asanbasiri@gmail.com'
    }
  },
  {
  id: '362',
  time: '12:15 PM - 12:30 PM',
  title: 'Energy Efficient V-Band Low Noise Amplifier with Enhanced Noise Performance for Satellite Communications.',
  authors: ['Namrata Tripathi', 'Saroj Mondal'],
  abstract: `This paper presents a V-band low-noise amplifier (LNA) designed using a two-stage cascode architecture in 65 nm CMOS technology. Incorporating source degeneration and noise canceling techniques, the LNA achieves a peak gain of 20.8 dB at 56.8 GHz, with a 3-dB bandwidth ranging from 54 to 60.6 GHz. Operating from a 1.2 V supply, it consumes 7.2 mW of DC power and attains a minimum noise figure (NF) of 4.25 dB. The input 1-dB compression point (IP1dB) is −11.68 dBm at 58 GHz. These performance metrics demonstrate the LNA's suitability for low-power satellite communication applications.`,
  mainContact: {
    name: 'Contact',
    email: 'ee23ms004@iitdh.ac.in'
  }
},
     {
    id: '85',
    time: '12:30 PM - 12:45 PM',
    title: 'HLS based Hardware Watermarking using an Integrated Framework based on Encoded Dependency Matrix and Encrypted Load-Factor Signature',
    authors: ['Anirban Sengupta', 'Vishal Chourasia'],
    abstract: `This paper presents a novel secure High-Level Synthesis (HLS) based hardware watermarking methodology for detective countermeasure against intellectual property (IP) piracy and false IP ownership attacks. The proposed HLS based watermarking technique exploits an integrated framework based on encoded dependency matrix and encrypted load-factor signature. The proposed approach can produce more robust and secure IP designs against ghost insertion search attack, false IP ownership and tampering or removal attack as indicated through significantly lower probability of coincidence and higher tamper tolerance values. Comparison of proposed approach with related works indicated superior security at zero design cost overhead`,
    mainContact: {
      name: 'Anirban Sengupta',
      email: 'asengupt@iiti.ac.in'
    }
  },
  {
    id: '299',
    time: '12:45 PM - 1:00 PM',
    title: 'Hardware Implementation of True Motion Prediction for WebP Lossy Image Compression',
    authors: ['Anurag Sharma', 'Srinivasu Bodapati'],
    abstract: `With the rapid growth of visual data in multimedia and embedded systems, there is a pressing need for lightweight and efficient image compression for IoT applications. This work presents a hardware architecture for the True Motion Prediction (TM_PRED) utilized in the WebP lossy image compression, which is a key contributor to spatial redundancy removal. The proposed architecture, synthesized on FPGA, utilizes 310 LUTs, 221 flip-flops, a BRAM, and achieves a maximum operating frequency of 253 MHz. The predicted pixel values are further utilized in a software-based WebP encoder to evaluate end-to-end compression performance. The proposed architecture is validated using grayscale images from the IEEE C4L dataset, and the results reveal that the TM_PRED achieves 6%–11% improvement in PSNR, 3%–12% improvement in SSIM, and 33%–58% reduction in file size compared to JPEG across varying quality levels. The results demonstrate that offloading the intra prediction module to hardware can significantly enhance compression efficiency while remaining suitable for real-time image applications.`,
    mainContact: {
      name: 'Contact',
      email: 's23079@students.iitmandi.ac.in'
    }
  },
  // {
  //   id: '323',
  //   title: 'Lightweight DMA-Driven Integration of Scalable Floating Point Systolic Array with Existing RISC-V Integer Core for High-Speed Edge AI Applications',
  //   authors: ['Jobanpreet Brar', 'Anil Singh'],
  //   abstract: '',
  //   mainContact: {
  //     name: 'Jobanpreet Brar',
  //     email: 'jbrar2_be21@thapar.edu'
  //   }
  // },
  {
    id: '335',
    time: '1:00 PM - 1:15 PM',
    title: 'Edge-AI based Real-Time Infant Monitoring using Multimodal Sensing',
    authors: ['Hrushikesh Ramilla', 'Ravindranadh Ambica Golakoti', 'Pradyut Kumar Sanki', 'Biswabandhu Jana'],
    abstract: `Abstract—Continuous parental supervision is particularly challenging during an infant's sleep, a period when many un- expected risks can arise. To enhance infant safety, we developed a lightweight, edge-AI based real-time infant monitoring system. The proposed system integrates both audio and visual surveil- lance to detect potential risks during sleep. For audio monitoring, we developed a deep learning model combining Convolutional Neural Networks (CNN), Bidirectional Long Short-Term Memory (BiLSTM), and an attention mechanism to differentiate between real distress cries and normal baby sounds. On the visual front, a camera feeds data into a MediaPipe-based module that assesses key safety parameters, including face visibility, body coverage, and safe sleeping posture. The entire system is implemented on a Raspberry Pi board, ensuring efficient, low-power edge processing. In manual testing, the system has achieved 90% and 94% accuracy for real-time audio and video performance. Overall, the proposed solution offers a practical, cost-effective approach for enhancing infant safety in home environments. Index Terms—Infant monitoring, Real-time systems, Deep learning, Computer vision`,
    mainContact: {
      name: 'Hrushikesh Ramilla',
      email: 'ramillahrushikesh@gmail.com'
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