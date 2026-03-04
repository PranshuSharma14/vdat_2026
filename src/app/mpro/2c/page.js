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
  sessionTitle = "Embedded",
  sessionTime = "4:10 PM - 5:40 PM",
  sessionDate = "August 8, 2025",
  sessionLocation = "Adab Arz Hall",
  sessionChairperson = "Chair 1: Prof. Bikram Paul, Chair 2: Prof. Amit Kumar",
  sessionDescription = "",
  
  // Papers Array
papers = [
  {
    id: '378',
    time: '4:10 PM - 4:25 PM',
    title: 'Efficient Spiking Neural Network for ECG Arrhythmia Detection Using Inter-Spike Interval Encoding and BPTT Training',
    authors: ['CHUNDI SAHITHI', 'PRIYA K', 'Binsu Kailath'],
    abstract: `This work presents a real-time, compact, and hardware-efficient Spiking Neural Network (SNN) architecture built with Leaky Integrate-and-Fire (LIF) neurons and trained using Backpropagation Through Time (BPTT). The input is derived from inter-spike intervals (ISIs) between successive R-peaks in electrocardiogram (ECG) signals, processed into a 33-dimensional feature vector. These features are encoded as input currents to a two-hidden layer SNN via input spiking neurons. The proposed model is evaluated for two classification tasks: a three-class classification (normal (N), supraventricular (S), and ventricular (V)) based on AAMI standards, and a five-class classification (normal (N), left bundle branch block (L), right bundle branch block (R), atrial premature (A), and ventricular ectopic (V)) using MIT-BIH annotations. Trained and tested on records from the MIT-BIH Arrhythmia Database, the network achieves classification accuracies of 92.77% for the three-class task and 85.85% for the five-class task, demonstrating its effectiveness and suitability for real-time, resource-constrained arrhythmia detection.`,
    mainContact: {
      name: 'Binsu Kailath',
      email: 'bkailath@iiitdm.ac.in',
    }
  },
  {
    id: '326',
    time: '4:25 PM - 4:40 PM',
    title: 'Low-Latency Stereo Vision Capture using Synchronized Dual USB Cameras on Resource Constrained Hardware',
    authors: ['Sanyam Aggarwal', 'Sambhav Mehta', 'Anil Singh', 'Manu Bansal'],
    abstract: `Achieving accurate stereo vision on embedded platforms using asynchronous USB 2.0 cameras presents significant challenges, particularly in the absence of hardware triggers, high-speed interfaces, or abundant memory. This paper introduces a fully software-driven synchronization framework for stereo vision applications on constrained embedded systems. The proposed approach employs multithreaded frame acquisition, dynamic frame rate estimation through sliding windows, and timestamp-based pairing to enable reliable temporal alignment of stereo image pairs. Evaluated on a lightweight SoC platform with limited RAM, the system achieves synchronization within 0.30 seconds and sustains throughput exceeding 28 frames per second (FPS) for 320×240 grayscale stereo streams. A memory-aware buffering scheme enables continuous stereo capture without frame loss or overruns. Importantly, the method operates without requiring USB 3.0 bandwidth or external synchronization circuitry, showcasing the viability of real-time stereo vision on minimal hardware. These results enable broader deployment of stereo depth sensing in mobile robotics, edge perception, and low-power vision systems.`,
    mainContact: {
      name: 'Sanyam Aggarwal',
      email: 'saggarwal2_be22@thapar.edu',
    }
  },
  {
    id: '277',
    time: '4:40 PM - 4:55 PM',
    title: 'A Novel Object Lock and Track Algorithm for Fast and Agile Autonomous UAV Flight',
    authors: ['Bhavya Bansal', 'Kritarth Upadhyay', 'Vaibhav Gupta', 'Anil Singh', 'Alpana Agarwal', 'Manu Bansal'],
    abstract: `This paper introduces an object tracking system for unmanned aerial vehicles (UAVs), integrating the advantages of software-based image processing with hardware-level control to achieve real-time performance. The system is designed to detect and follow human faces using an onboard camera, enabling the UAV to adjust its position and orientation in response to the target's movement. A microcontroller processes the video stream and identifies the target using classical computer vision techniques, while a field-programmable gate array (FPGA) handles the control logic to ensure quick and precise responses. This separation of tasks allows high-level visual interpretation and low-level actuation to operate in parallel, significantly reducing overall system latency. The combination results in a responsive and efficient platform capable of performing stable tracking under varying environmental conditions. The hybrid architecture supports real-time operation with detection rates of up to 60 frames per second and control signal response times under 2 milliseconds. This work demonstrates a practical and scalable approach to embedded vision and control in UAVs, offering potential for a wide range of applications including surveillance, autonomous navigation, and interactive robotics.`,
    mainContact: {
      name: 'Kritarth Upadhyay',
      email: 'kupadhyay_be22@thapar.edu',
    }
  },
  {
    id: '235',
    time: '4:55 PM - 5:10 PM',
    title: 'WEMOS: A Cost-Effective and Inclusive Weather Station Using Raspberry Pi Pico W',
    authors: ['Govind Prasad', 'Agamdeep Singh', 'Aditya N. Patil', 'Vijaya Sinha', 'Shayan Dasgupta'],
    abstract: ``,
    mainContact: {
      name: 'Govind Prasad',
      email: 'govindp317@gmail.com',
    }
  },
  {
    id: '29',
    time: '5:10 PM - 5:25 PM',
    title: 'Lyapunov-Stable Adaptive Harmonic Scheduling: A Precision RTOS Framework for 2nd-Order Medical Control Systems',
    authors: ['Durga Lakshmi Mownish Bugutha', 'Vinod Babu Pusuluri'],
    abstract: `This paper presents Adaptive Harmonic Scheduling (AHS), a novel real-time scheduling algorithm designed for medical dosage management systems requiring high precision and adaptability. Unlike traditional scheduling methods such as Rate Monotonic Scheduling (RMS) and Earliest Deadline First (EDF), AHS dynamically prioritizes tasks based on second-order error dynamics, ensuring superior stability and responsiveness in physiological control applications.

Second-order control systems, such as Proportional-Integral-Derivative-Acceleration (PIDA) controllers, respond more effectively to rapid physiological fluctuations than conventional PID controllers. However, they impose strict temporal constraints and necessitate adaptive resource allocation for stability. AHS addresses these challenges by incorporating Lyapunov-based stability guarantees, where worst-case latency is bounded by the derivative time constant. Additionally, energy-aware slack reclamation is integrated to optimize PID gain in real time, while preemption thresholds are employed to minimize context-switching overhead during steady-state operation.

Empirical evaluations demonstrate that AHS achieves jitter below 5 μs, a 35 ms settling time, and a 60° phase margin, outperforming RMS and EDF. Lyapunov stability analysis confirms that stability is maintained for damping ratio greater than zero and natural frequency within appropriate bounds. By dynamically prioritizing control tasks based on real-time error acceleration, AHS enhances scheduling precision, reduces CPU overhead, and improves energy efficiency, making it a robust solution for safety-critical medical applications.`,
    mainContact: {
      name: 'Durga Lakshmi Mownish Bugatha',
      email: 'mownishbugutha123@gmail.com',
    }
  },
  {
    id: '25',
    time: ' 5:25 PM - 5:40 PM',
    title: 'Embedded Vision-Based Eye Tracking for Enhancing Caretaker Communication in Paralyzed Patients',
    authors: ['Gnanavardhan Koppolu', 'YBR. Krishna Vamshi', 'Sitadevi Bharatula', 'B Naresh Kumar Reddy'],
    abstract: `This study introduces an innovative eye movement detection system aimed at assisting communication for patients with full paralysis. The system utilizes advanced eye-tracking technology to allow users to communicate with caretakers through a simple, intuitive interface. Through precise monitoring and interpretation of eye movements, the system translates the gestures into effective commands or messages, thereby bridging the communication gap for individuals with extreme mobility impairments. The solution features real-time feedback options, allowing users to convey their needs and preferences with minimal physical exertion. The system is also extremely flexible, supporting varying levels of eye movement control and different environmental conditions. Blending both software and hardware elements, this system aims to enhance the quality of life for patients through the provision of a stable means of communication and improved caretaker-patient interaction.`,
    mainContact: {
      name: 'B Naresh Kumar Reddy',
      email: 'bnkreddy@nitt.edu',
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