"use client";
import React from "react";
import Footer from "../footer/footer";
import Navbar from "../home/Navbar";
import { Rocket, CheckCircle, Calendar, Edit3, Mail } from "lucide-react";

const Chippreneur = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center p-4 bg-purple-500/20 rounded-full mb-6 text-purple-400">
            <Rocket size={48} className="animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
            Calling All Semiconductor & Tech Startups!
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We are excited to invite innovative startups to participate in the 30th International Symposium on VLSI Design and Test (VDAT 2026), to be held 20–22 August 2026 at Jaypee Institute of Information Technology (JIIT), Noida.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">

          {/* About Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/10">

            <p className="text-lg text-gray-200 leading-relaxed">
              As part of the conference, we are organizing a dedicated <strong>Startup Expert Session / Industry Talk</strong> on 21 August 2026. This is an excellent opportunity for startups to showcase their innovations, share their entrepreneurial journey, discuss technical challenges, and engage with a highly relevant audience from academia and industry.
            </p>
          </div>

          {/* Why Participate Section */}
          <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-500/30">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why participate?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-400 shrink-0 mt-1" size={24} />
                <span className="text-lg text-gray-200">Showcase your startup and cutting-edge technology</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-400 shrink-0 mt-1" size={24} />
                <span className="text-lg text-gray-200">Deliver a dedicated Startup Expert Session / Industry Talk</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-400 shrink-0 mt-1" size={24} />
                <span className="text-lg text-gray-200">Network with leading researchers, faculty, industry professionals, and fellow entrepreneurs</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-400 shrink-0 mt-1" size={24} />
                <span className="text-lg text-gray-200">Receive a Certificate of Recognition and Memento</span>
              </div>
              <div className="flex items-start gap-4 md:col-span-2 justify-center">
                <CheckCircle className="text-green-400 shrink-0 mt-1" size={24} />
                <span className="text-lg text-gray-200 font-semibold text-yellow-300">Compete for the Best Startup Cash Prize</span>
              </div>
            </div>
            <div className="mt-8 text-center bg-black/30 p-6 rounded-2xl">
              <p className="text-xl text-purple-200 font-medium">
                If you are building the future of semiconductors, AI hardware, EDA tools, embedded systems, or deep-tech innovation, we would be delighted to have you join us.
              </p>
            </div>
          </div>

          {/* Key Details & Registration */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/10 flex flex-col justify-center items-center text-center">
              <Calendar className="text-blue-400 w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Last Date to Register</h3>
              <p className="text-2xl font-black text-yellow-400">10th August, 2026</p>
            </div>

            <div className="bg-blue-600/20 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-blue-500/30 flex flex-col justify-center items-center text-center hover:bg-blue-600/30 transition-colors">
              <Edit3 className="text-blue-400 w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Register Your Interest</h3>
              <a
                href="https://lnkd.in/g63j78fC"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Registration Form
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-12 bg-black/40 backdrop-blur-sm p-8 rounded-3xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-6">For any queries, please contact:</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a href="mailto:alok.joshi@mail.jiit.ac.in" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors bg-white/5 px-6 py-3 rounded-full">
                <Mail className="text-purple-400" />
                <span>alok.joshi@mail.jiit.ac.in</span>
              </a>
              <a href="mailto:vdat26.jiit@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors bg-white/5 px-6 py-3 rounded-full">
                <Mail className="text-purple-400" />
                <span>vdat26.jiit@gmail.com</span>
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Chippreneur;
