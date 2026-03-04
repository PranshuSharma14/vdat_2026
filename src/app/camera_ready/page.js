"use client";
import React from "react";
import Navbar from "../home/Navbar";
import Footer from "../footer/footer";
import {
  FileText,
  Upload,
  CreditCard,
  CheckCircle,
  AlertTriangle,
  Clock,
  ExternalLink,
  Award,
  Star,
  Cpu,
  CircuitBoard,
  Layers,
  Zap,
  Building,
  Hash,
  Smartphone,
  Globe,
  Target,
  Microscope,
} from "lucide-react";

export default function CameraReadyGuidelines() {
  const steps = [
    {
      number: 1,
      title: "PAPER FORMATTING",
      icon: <FileText className="w-6 h-6" />,
      color: "from-blue-600 via-purple-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      items: [
        "REVIEW, REVISE, and AMEND your paper as per the reviewer's comments",
        "Add author details",
        "Ensure paper is in Springer LNCS format (very strict policy)",
        "Use LaTeX template for formatting (strongly recommended)",
        "Check tables and figures don't exceed page boundaries",
        "Maintain 12-15 pages for regular papers (includes references)",
        "Enhance quality of pictures and tables",
        "Proofread for errors (use Grammarly recommended)",
        "Check plagiarism: similarity index <20% with 10 words, AI score <10%",
      ],
      files: [
        "LaTeX: paperid_source_file.zip (all source files except PDF)",
        "Word: paperid_source_file.docx",
        "PDF: paperid_camera_ready.pdf",
      ],
    },
    {
      number: 2,
      title: "COPYRIGHT FORM",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-green-600 via-emerald-600 to-teal-600",
      bgGradient: "from-green-50 to-emerald-50",
      items: [
        "Fill in the copyright form (some entries pre-filled)",
        "Complete all blue annotated boxes",
        "Corresponding author must match the one marked on paper",
        "Use the copyright form guide for assistance",
      ],
      files: [
        "Rename to: paperid_copyright.pdf",
        "Optional: paperid_plagiarism_report.pdf",
      ],
    },
    {
      number: 3,
      title: "PAYMENT",
      icon: <CreditCard className="w-6 h-6" />,
      color: "from-purple-600 via-pink-600 to-red-600",
      bgGradient: "from-purple-50 to-pink-50",
      items: ["Pay registration fee online", "Save proof of payment"],
      files: ["Rename to: paperid_paymentproof.pdf/jpg/jpeg/png"],
    },
    {
      number: 4,
      title: "SUBMISSION",
      icon: <Upload className="w-6 h-6" />,
      color: "from-orange-600 via-amber-600 to-yellow-600",
      bgGradient: "from-orange-50 to-yellow-50",
      items: [
        "Upload all final files using the provided link",
        "Update camera-ready copy on softconf portal",
      ],
      files: [
        "paperid_camera_ready.pdf",
        "paperid_source_file.zip OR paperid_source_file.docx",
        "paperid_copyright.pdf",
        "paperid_paymentproof.pdf/jpg/jpeg/png",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
      {/* Hero Section with VLSI Circuit Animation */}
      {/* <div className="bg-black"> */}
      <Navbar />

      <header className="text-center text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-violet-900/85"></div>

        {/* Animated Circuit Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 animate-pulse">
            <CircuitBoard size={64} className="text-cyan-300" />
          </div>
          <div className="absolute top-3/4 right-1/4 animate-pulse delay-1000">
            <Cpu size={48} className="text-green-300" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-pulse delay-500">
            <Layers size={56} className="text-purple-300" />
          </div>
        </div>

        <div className="relative z-10 px-4 py-16">
          <div className="flex items-center justify-center mb-6">
            <Cpu className="text-cyan-300 mr-4 animate-spin" size={48} />
            <h1 className="text-6xl font-extrabold tracking-tight uppercase drop-shadow-lg">
              Camera Ready
            </h1>
            <CircuitBoard
              className="text-green-300 ml-4 animate-pulse"
              size={48}
            />
          </div>

          <h2 className="text-4xl font-bold mb-4 text-cyan-300 uppercase tracking-wide">
            Submission Guidelines
          </h2>

          <p className="text-xl max-w-3xl mx-auto font-light mb-8 leading-relaxed">
            Finalize your research paper with precision and excellence. Follow
            these comprehensive guidelines to ensure your work meets the highest
            academic standards for publication.
          </p>

          {/* Deadline Warning */}
          <div className="mt-8">
            <div className="group relative inline-flex items-center px-12 py-5 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white font-bold text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 uppercase tracking-wider animate-pulse">
              <Clock className="mr-3 animate-spin" size={28} />
              Deadline: July 15th, 2025
              <AlertTriangle
                className="ml-3 group-hover:animate-bounce"
                size={24}
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-red-400 via-pink-400 to-purple-600 rounded-full opacity-30 blur group-hover:opacity-50 animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>
      <div className="my-8 container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Target className="text-yellow-300 mr-4 animate-pulse" size={48} />
            <h2 className="text-5xl font-extrabold text-white uppercase tracking-wide">
              Submission Process
            </h2>
          </div>
          <ol className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl space-y-6 text-gray-800">
            <li className="flex items-start">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white mr-4 mt-1 font-bold text-xl w-8 h-8 rounded-full flex items-center justify-center">
                1
              </span>
              <p className="text-lg leading-relaxed">
                <strong>Format your paper</strong> according to Springer LNCS
                guidelines with all required elements.
              </p>
            </li>
            <li className="flex items-start">
              <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white mr-4 mt-1 font-bold text-xl w-8 h-8 rounded-full flex items-center justify-center">
                2
              </span>
              <p className="text-lg leading-relaxed">
                <strong>Complete copyright form</strong> and ensure all blue
                annotated sections are filled.
              </p>
            </li>
            <li className="flex items-start">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white mr-4 mt-1 font-bold text-xl w-8 h-8 rounded-full flex items-center justify-center">
                3
              </span>
              <p className="text-lg leading-relaxed">
                <strong>Process payment</strong> and save proof of transaction
                with proper naming convention.
              </p>
            </li>
            <li className="flex items-start">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white mr-4 mt-1 font-bold text-xl w-8 h-8 rounded-full flex items-center justify-center">
                4
              </span>
              <p className="text-lg leading-relaxed">
                <strong>Upload all files</strong> using the designated
                submission portal and update softconf.
              </p>
            </li>
          </ol>
        </div>
      </div>
      {/* Steps Section */}
      <section className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
            >
              {/* Step Header */}
              <div
                className={`bg-gradient-to-r ${step.color} text-white p-8 relative overflow-hidden`}
              >
                {/* Floating background elements */}
                <div className="absolute inset-0 overflow-hidden opacity-10">
                  <div className="absolute top-4 right-4">
                    <Hash size={80} className="text-white animate-float" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Star
                      size={60}
                      className="text-white animate-float delay-1000"
                    />
                  </div>
                </div>

                <div className="relative z-10 flex items-center gap-6">
                  <div className="bg-white bg-opacity-20 p-4 rounded-2xl backdrop-blur-sm">
                    {step.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold uppercase tracking-wide">
                      STEP {step.number}
                    </h2>
                    <p className="text-2xl font-semibold opacity-90 mt-2">
                      {step.title}
                    </p>
                  </div>
                  <div className="ml-auto hidden md:block">
                    <div className="text-6xl font-bold opacity-20">
                      {step.number}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className={`bg-gradient-to-br ${step.bgGradient} p-8`}>
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Requirements */}
                  <div>
                    <div className="flex items-center mb-6">
                      <Zap className="text-violet-600 mr-3" size={24} />
                      <h3 className="text-2xl font-bold text-gray-800">
                        Requirements
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {step.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 p-3 bg-white/70 rounded-lg hover:bg-white/90 transition-all duration-200"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 leading-relaxed font-medium">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Files */}
                  <div>
                    <div className="flex items-center mb-6">
                      <FileText className="text-blue-600 mr-3" size={24} />
                      <h3 className="text-2xl font-bold text-gray-800">
                        File Naming Convention
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {step.files.map((file, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-4 border-l-4 border-cyan-400 hover:border-purple-400 transition-all duration-300"
                        >
                          <code className="text-cyan-300 font-mono text-sm block break-all">
                            {file}
                          </code>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Process Section */}
      <section className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-10 left-10 animate-float">
            <Upload size={120} className="text-white" />
          </div>
          <div className="absolute bottom-10 right-10 animate-float delay-1000">
            <Award size={100} className="text-white" />
          </div>
        </div>
      </section>

      {/* Additional Instructions */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-xl mr-4">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wide">
              Important Guidelines & Requirements
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-500">
                <Microscope className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">
                  <strong>Consult Springer's Instructions</strong> for Authors
                  of Proceedings
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-500">
                <Layers className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">
                  <strong>Use official templates:</strong> LaTeX in Overleaf or
                  Word templates from author's page
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-l-4 border-purple-500">
                <Globe className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">
                  <strong>Include ORCIDs</strong> in papers (encouraged by
                  Springer)
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl border-l-4 border-teal-500">
                <Award className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">
                  <strong>Corresponding author</strong> must complete and sign
                  License-to-Publish form
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border-l-4 border-red-500">
                <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">
                  <strong>CRITICAL:</strong> Once files are sent to Springer,
                  authorship changes cannot be made
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-10 left-10 animate-float">
            <CircuitBoard size={120} className="text-white" />
          </div>
          <div className="absolute bottom-10 right-10 animate-float delay-1000">
            <Cpu size={100} className="text-white" />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-wide">
              Essential Resources
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Access all the tools and guidelines you need for successful
              submission
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <a
              href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-xl p-6 text-center hover:scale-105 transform cursor-pointer">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all">
                  <ExternalLink className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">
                  Format Guide
                </h3>
                <p className="text-white/80 text-sm">Springer LNCS Templates</p>
              </div>
            </a>

            <a
              href="https://www.grammarly.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-xl p-6 text-center hover:scale-105 transform cursor-pointer">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all">
                  <Zap className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">Grammarly</h3>
                <p className="text-white/80 text-sm">Grammar & Style Check</p>
              </div>
            </a>

            <a
              href="https://docs.google.com/document/d/1DaAWbwdSs1A8PVC3Hf-AMqPpDbPBcd_b/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-xl p-6 text-center hover:scale-105 transform cursor-pointer">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all">
                  <CheckCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">
                  Copyright Form
                </h3>
                <p className="text-white/80 text-sm">License to Publish</p>
              </div>
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScGlsucoDdkKw7Z0P83RAAlEEOiM3OQVnGAGEfrB1zoFTIUFA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-xl p-6 text-center hover:scale-105 transform cursor-pointer">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all">
                  <Upload className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">
                  File Upload
                </h3>
                <p className="text-white/80 text-sm">Submit Your Files</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-1 rounded-3xl inline-block animate-pulse">
            <div className="bg-white px-12 py-6 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Ready to Submit Your Paper?
              </h3>
              <p className="text-gray-600 mb-4">
                Make sure to update your camera-ready copy on the softconf
                portal as well
              </p>
              <div className="text-lg font-semibold text-purple-700">
                <Clock className="inline mr-2" size={20} />
                Deadline: July 15th, 2025
              </div>
            </div>
            
          </div>
          <div className="mt-8">
            <a
              href={"https://softconf.com/vlsi/vdat2025/"}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center px-12 py-5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 uppercase tracking-wider animate-pulse hover:animate-none"
            >
              <Star
                className="mr-3 animate-spin group-hover:animate-none"
                size={28}
              />
              SUBMIT
              <ExternalLink
                className="ml-3 group-hover:translate-x-1 transition-transform"
                size={24}
              />
               {/* Animated ring effect  */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full opacity-30 blur group-hover:opacity-50 animate-pulse"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      <Footer />
    </div>
  );
}
