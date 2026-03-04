"use client";

import React from "react";
import { Cpu, CircuitBoard, Layers,Calendar, Clock } from "lucide-react";
import MProTable from "./table";
import Footer from "../footer/footer";
import Navbar from "../home/Navbar";
const Mpro = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen font-sans">
      <div className="bg-black">
        <Navbar />
      </div>
      {/* Header */}
      <header className="text-center text-white py-12 relative overflow-hidden bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-violet-900/20"></div>
        
        {/* Subtle Circuit Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4">
            <CircuitBoard size={32} className="text-cyan-300" />
          </div>
          <div className="absolute top-3/4 right-1/4">
            <Cpu size={24} className="text-green-300" />
          </div>
          <div className="absolute bottom-1/4 left-1/3">
            <Layers size={28} className="text-purple-300" />
          </div>
        </div>

        <div className="relative z-10 px-4 py-8">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="text-cyan-300 mr-3" size={32} />
            <h1 className="text-3xl font-bold tracking-tight">
              VDAT-2025 Conference Schedule
            </h1>
            <Clock className="text-green-300 ml-3" size={32} />
          </div>

          <p className="text-lg max-w-2xl mx-auto font-light leading-relaxed opacity-90">
            Complete program schedule for all three days
          </p>
        </div>
      </header>
      <MProTable />
      <Footer />
      </div>
  );
};

export default Mpro;