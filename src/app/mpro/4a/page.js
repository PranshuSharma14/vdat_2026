"use client";
import React, { useState, useEffect } from "react";
import Footer from '../../footer/footer';
import Navbar from '../../home/Navbar';
import { motion, useScroll, AnimatePresence, time } from "framer-motion";
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
  sessionTitle = "Emerging Devices and In-memory",
  sessionTime = "2:15 PM - 4:15 PM",
  sessionDate = "August 9, 2025",
  sessionLocation = "Majlis Main",
  sessionChairperson = "Chair 1: Prof. Navjeet Bagga, Chair 2: Prof. Brajesh Rawat",
  sessionDescription = "",
  
  // Papers Array
papers = [
   {
    id: '350',
    time: '2:15 PM - 2:30 PM',
    title: 'First Principle Modeling of Lead Adsorption on Armchair Graphene Nanoribbon',
    authors: ['Kamal Solanki', 'Sandhya Rathore', 'Prachi Kesharwani', 'Manoj Kumar Majumder'],
    abstract: `The growing issue of lead (Pb) emissions from battery recycling and industrial processes presents a significant threat to public health and the environment, necessitating the development of a highly sensitive sensor. In response, the research proposed hydrogen (H)-passivated narrowest armchair graphene nanoribbons (ArGNRs) as an effective platform for Pb detection. Further, to ensure improved accuracy, the research employed the first-principles density functional theory (DFT) based on linear combination of atomic orbitals (LCAO) alongside a semi-empirical calculator to investigate the adsorption behavior of Pb in doped/undoped ArGNRs. These nanoribbons were successively substituted by transition metal dopant, manganese (Mn), in combination with successive substitution of group V non-metals, including nitrogen (N) and phosphorus (P), achieving a total co-doping concentration of 33%. This doping strategy introduces localized reactive sites at the ribbon edges, significantly enhancing the interaction with the Pb due to increased chemical reactivity. Among the various configurations analysed, the Mn-P co-doped ArGNR demonstrates the most favorable property, exhibiting an optimal adsorption energy (Eads) of -2.50 eV, with a reduced bandgap (EG) variation of -61.06%, forming a semiconducting to semi-metallic transition, an essential feature for practical sensing applications. In addition, it depicts a desorption (rdes) of 4.40%, facilitating sensor regeneration and long-term durability. Furthermore, it exhibits an escalating current conductivity of 339 and 127× higher than the pristine and Mn-N doped ArGNR. Overall, the co-doping of Mn with P in a width-3 narrowest ArGNR offers the ideal balance between quantum confinement and EG modulation, ensuring superior performance for Pb sensing.`,
    mainContact: {
      name: 'Kamal Solanki',
      email: 'kamalsolanki033@gmail.com'
    }
  },
  {
    id: '91',
    time: '2:30 PM - 2:45 PM',
    title: 'Electrically tunable Magnetoresistance in Organic Magnetic Tunnel Junctions',
    authors: ['Sree Thulasi Mallineni', 'Sandhya Sai Maruti Chilukuri', 'Pamulapati Soujanya', 'Syam Sundar Pillalamarri', 'Debajit Deb'],
    abstract: `We investigated the magnetoresistance (MR) response of ITO/NiFe2O4(NFO)/Alq3/Co/Au organic magnetic tunnel junctions (MTJs). Cross-sectional image from field emission gun scanning electron microscopy image revealed well defined interfaces with minimal lattice defects,indicating coherent spin transport.The NFO Fermi level's position within the lowest unoccupied molecular orbital (LUMO)- highest occupied molecular orbital (HOMO) optical gap of Alq3 suggests that carrier tunneling is the primary charge transport mechanism. The magnetic field-enhanced charge carrier transport shown by the negative magnetoresistance effect may be caused by spin dependent tunneling or scattering within the MTJ structure. A significant MR of an high as 1000% has been observed at positive bias indicating enhanced spin polarized tunneling across the device. These findings provide key insights into the spin transport mechanisms governing organic MTJs, paving the way for future advancements in organic spintronic devices.`,
    mainContact: {
      name: 'Debajit Deb',
      email: 'debajitdeb12pec018@gmail.com'
    }
  },
 
  {
    id: '103',
    time: '2:45 PM - 3:00 PM',
    title: 'Ab-initio Tight Binding Study on Defects in Armchair Silicene Nanoribbon Double Gate Field Effect Transistor',
    authors: ['Ganesh C. Patil', 'Rajesh C. Junghare'],
    abstract: 'In this paper detailed analysis on defects in silicene nanoribbon (SiNR) channel double gate field effect transistor (DGFET) is presented. The transport equations are solved by using the NEGF formalism and the maximally localized Wannier functions. It is found that, armchair SiNR with seven pair of atoms along width direction has optimum bandgap of ~ 0.6 eV. Further, when the phosphorus atom defects are substituted in intrinsic channel of SiNR DGFET, the on-state drive current (ION) is reduced by 70 % and the off-state leakage current (IOFF) is increased by ~10^5 times. This clearly shows that, due to phosphors defects the ION/IOFF ratio of the SiNR DGFET is reduced by ~10^5 times over the intrinsic channel SiNR DGFET. This is mainly because, the substitution of phosphorous defects in intrinsic channel adds the states within the bandgap closer to the conduction band, which leads to variations in the transport current of the device.',
    mainContact: {
      name: 'Ganesh C. Patil',
      email: 'ganeshcpatil@cvn.vnit.ac.in'
    }
  },
   
  {
    id: '410',
    time: '3:00 PM - 3:15 PM',
    title: 'Process Variation Dependent Performance Evaluation of a Molecular Single Electron Transistor: A Computational Investigation',
    authors: ['Nishant Agrawal', 'Awanish Kumar Singh', 'Pratik Kumar', 'Sumit Saurabh', 'Sanjai Singh', 'Anurag Srivastava', 'Boddepalli SanthiBhushan'],
    abstract: `Single Electron Transistor (SET) is a promising candidate for the design of next generation integrated circuits, owing to its very special attribute i.e ‘lack of scaling limits'. Even though this fascinating tunnel device is being explored for various applications for the past three decades, the process variation insights are not available so far. This work reports for the first time a comprehensive process variation analysis of a benzene based molecular SET device using the density functional theory based first principles approach. The investigation is performed by systematically varying the design parameters viz. gate dielectric thickness, tunnel junction thickness, dielectric type, electrode type and the number of gates. The process variation insights are provided in terms of the performance metrics namely degeneracy voltages and charging energies, as extracted from the charge stability diagrams. The results reveal clear patterns in the performance metrics when the device parameters are subjected to process variation. The results suggest that a SET architecture with sufficiently smaller gate dielectric thickness, higher dielectric constant of gate oxide, moderate tunnel junction thickness, smaller electrode work function, and multi gate can offer maximum performance. The results presented in this work could be of significant interest to the experimental researchers working in this domain.`,
    mainContact: {
      name: 'Boddepalli SanthiBhushan',
      email: 'sbhushan@iiita.ac.in'
    }
  },

      {
    id: '20',
    time: '3:15 PM - 3:30 PM',
    title: 'Role of Intrinsic Layer Thickness on the Performance of GeSn p-i-n Photodetectors',
    authors: ['Dhrish Bhansali', 'Keerthana P. Balakrishnan', 'Manish Gupta', 'Ramesh Vasan', 'Rahul Kumar'],
    abstract: `In this paper, we have simulated a Ge0.9Sn0.1 based photodetector aimed at applications in the short-wave infrared (SWIR) and mid-wave infrared (MWIR) regions. GeSn-based alloys have become very popular for photodetector applications because of their tunable band gap and compatibility with CMOS processes. We have emphasized the variation of different parameters such as dark current, photocurrent, 3-dB bandwidth, and detectivity with respect to the thickness of the intrinsic GeSn layer. A good balance between various device parameters can be obtained by carefully optimizing the intrinsic layer thickness. This makes the proposed photodetector topology a promising candidate for next-generation optical communication systems operating in the MWIR band.`,
    mainContact: {
      name: 'Rahul Kumar',
      email: 'rahul.kumar@pilani.bits-pilani.ac.in'
    }
  },
  {
    id: '143',
    time: '3:30 PM - 3:45 PM',
    title: 'Gamma Gate GaN HEMTs: Enhanced DC RF Performance with temperature modeling for High-Power applications',
    authors: ['Aayush Gupta', 'Pankaj Kumar'],
    abstract: `In this work, we demonstrate the transformative advantages of the Γ-gate architecture over planar AlGaN/GaN HEMTs using Silvaco TCAD. The Γ-gate design achieves a 186% higher breakdown voltage and 105.7% improvement in cutoff frequency (fc = 123.4 GHz) by redistributing electric fields, reducing the peak conduction current density by 30×(5.04 × 10−7 A/cm2) and hole current density by 65%. Enhanced electrostatic control enables a 16.7% higher saturation current (0.7 A/mm at VG = 0 V) and 50% increase at VD = 10 V, alongside 40% higher transconductance (2.1 mS/mm). We also developed a predictive temperature model that forecasts the overall device temperature under all operating conditions, demonstrating 60% cooler operation (100 K vs. 250 K at 10 V bias) and 40% lower thermal resistance compared to planar designs. These advancements, validated by suppressed leakage currents and field plate heat dissipation, position Γ-gate HEMTs as critical enablers for high-power, high-frequency electronics.`,
    mainContact: {
      name: 'Contact',
      email: '202311057@daiict.ac.in'
    }
  },
  // {
  //   id: '242',
  //   title: 'Threshold Voltage Model for Calculating the Sensitivity of Vertical TFET Based Label Free Biosensor',
  //   authors: ['Vandana Devi Wangkheirakpam', 'Rerinthemhorngam YL'],
  //   abstract: ``,
  //   mainContact: {
  //     name: 'Vandana Devi Wangkheirakpam',
  //     email: 'wvandana@nitmanipur.ac.in'
  //   }
  // },
  // {
  //   id: '297',
  //   title: 'Annealing Temperature-Dependent Structural, Electrical, and Optical Characteristics of Ga₂O₃ Thin Films',
  //   authors: ['Boshir Ahmed Mishu', 'Arindam Basak', 'Udai P. Singh'],
  //   abstract: ``,
  //   mainContact: {
  //     name: 'Arindam Basak',
  //     email: 'arindambasak2007@gmail.com'
  //   }
  // },

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