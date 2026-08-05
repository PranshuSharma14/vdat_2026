"use client";

import React, { useState } from "react";
import { 
  Cpu, 
  CircuitBoard, 
  Layers, 
  ShieldCheck, 
  Clock, 
  Calendar, 
  Users,
  Building,
  Presentation,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import Navbar from "../home/Navbar";
import Footer from "../footer/footer";

const tutorialTracks = [
  {
    id: "trackA",
    title: "Track A: Circuits, SoC & Embedded Systems",
    color: "from-blue-600 to-cyan-500",
    shadow: "shadow-blue-500/30",
    icon: <CircuitBoard size={24} className="text-white" />,
    sessions: [
      {
        time: "10:00 - 13:00",
        name: "Session 1",
        topics: [
          {
            title: "RTL-to-GDSII : Synopsys Fusion Compiler In-Design Training for Digital Implementation",
            speakers: "Rupali Kale, Kripanshu Kumar, Azhar Imam",
            affiliation: "Synopsys",
            presentation: "Hands-on"
          }
        ]
      },
      {
        time: "14:00 - 17:00",
        name: "Session 2",
        topics: [
          {
            title: "RTL-to-GDSII in the Cloud: Running the Full Flow in a web-browser using Catalyzer",
            speakers: "Seema Johar, Vikash Patel",
            affiliation: "Compcarta",
            presentation: "Hands-on"
          }
        ]
      }
    ]
  },
  {
    id: "trackB",
    title: "Track B: AI Hardware & Design Automation",
    color: "from-purple-600 to-pink-500",
    shadow: "shadow-purple-500/30",
    icon: <Cpu size={24} className="text-white" />,
    sessions: [
      {
        time: "10:00 - 13:00",
        name: "Session 1",
        topics: [
          {
            title: "Methodology and Functional Safety Solution for Automotive Analog/Mixed-Signal Designs",
            speakers: "Lalit Mohan, Shiva Singh",
            affiliation: "Cadence",
            presentation: "Live Demo and Hands-on"
          },
          {
            title: "ChipStack Super Agent: Reimagining Chip Design and Verification with AI",
            speakers: "Cadence Team",
            affiliation: "Cadence",
            presentation: "Presentation"
          }
        ]
      },
      {
        time: "14:00 - 17:00",
        name: "Session 2",
        topics: [
          {
            title: "Integrated Synopsys Semiconductor Design and Simulation Solutions: From Atomistic Materials to RTL Design",
            speakers: "Deepak Upadhyay, Atul Kumar Srivastava",
            affiliation: "IMS India",
            presentation: "Live Demonstration"
          }
        ]
      }
    ]
  },
  {
    id: "trackC",
    title: "Track C: Emerging Devices & Advanced Integration",
    color: "from-emerald-600 to-teal-500",
    shadow: "shadow-emerald-500/30",
    icon: <Layers size={24} className="text-white" />,
    sessions: [
      {
        time: "10:00 - 13:00",
        name: "Session 1",
        topics: [
          {
            title: "Quantum Device Modeling and Simulation Using QTCAD",
            speakers: "Mr. Ujjwal Pratap Singh",
            affiliation: "Impulse Technology",
            presentation: "Hands-on"
          },
          {
            title: "Hands-on Tutorial on First-Principles Materials Modeling and Quantum Transport Simulation Using RESCU, DS-PAW, and NanoDCAL",
            speakers: "Mr. Ujjwal Pratap Singh",
            affiliation: "Impulse Technology",
            presentation: "Hands-on"
          }
        ]
      },
      {
        time: "14:00 - 17:00",
        name: "Session 2",
        topics: [
          {
            title: "SETFOs: Advance Simulation Platform for Solar Cells, OLEDs and Photodetector Simulation",
            speakers: "Mr. Sahil Verma",
            affiliation: "Impulse Technology",
            presentation: "Hands-on"
          }
        ]
      }
    ]
  },
  {
    id: "trackD",
    title: "Track D: Verification, Reliability & Hardware Security",
    color: "from-orange-500 to-amber-500",
    shadow: "shadow-orange-500/30",
    icon: <ShieldCheck size={24} className="text-white" />,
    sessions: [
      {
        time: "10:00 - 13:00",
        name: "Session 1",
        topics: [
          {
            title: "VLSI Architecture and FPGA/ASIC/SoC Implementation of Modern Wireless Baseband Systems: From OFDM to OTFS",
            speakers: "Dr. Deepak Mishra, Dr. Kishor Sarawadekar, Dr. Sanjeev Sharma, Dr. Praful Pai, Dr. Anand Mukhopadhyay",
            affiliation: "ISRO, IIT BHU, Mathworks",
            presentation: "Seminar and Hands-on"
          }
        ]
      },
      {
        time: "14:00 - 17:00",
        name: "Session 2",
        topics: [
          {
            title: "Practical Backend VLSI Design and Sign-Off Methodologies across Technology Nodes",
            speakers: "Venkata Reddy Kolagatla, Arvind Bisht, Vivian Desalphine",
            affiliation: "CDAC(Chip-In)",
            presentation: "Conceptual or lecture-style"
          }
        ]
      }
    ]
  }
];

const TutorialCard = ({ track }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`mb-8 rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white transition-all duration-300 ${track.shadow} hover:shadow-2xl`}>
      <div 
        className={`bg-gradient-to-r ${track.color} p-5 sm:p-6 cursor-pointer flex items-center justify-between transition-transform duration-300 hover:opacity-95`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
            {track.icon}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
            {track.title}
          </h2>
        </div>
        <div className="text-white bg-white/20 rounded-full p-2 backdrop-blur-sm">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </div>

      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-slate-50`}>
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
            {/* Lunch Break Divider for Desktop */}
            <div className="hidden lg:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gray-200">
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white border border-gray-200 text-gray-500 px-3 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-sm whitespace-nowrap">
                <Clock size={16} />
                <span>13:00 - 14:00 (Lunch)</span>
              </div>
            </div>

            {track.sessions.map((session, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-indigo-700 bg-indigo-50 w-fit px-4 py-2 rounded-lg border border-indigo-100 font-semibold shadow-sm">
                  <Clock size={18} />
                  <span>{session.name} ({session.time})</span>
                </div>
                
                <div className="flex flex-col gap-4">
                  {session.topics.map((topic, tIdx) => (
                    <div key={tIdx} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden group">
                      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${track.color} opacity-70 group-hover:opacity-100 transition-opacity`}></div>
                      
                      <h3 className="text-lg font-bold text-gray-800 mb-4 leading-snug">
                        {topic.title}
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 text-sm">
                          <Users size={16} className="text-gray-400 mt-0.5 shrink-0" />
                          <div>
                            <span className="text-gray-500 font-medium block text-xs uppercase tracking-wider mb-0.5">Speaker(s)</span>
                            <span className="text-gray-800 font-medium">{topic.speakers}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 text-sm">
                          <Building size={16} className="text-gray-400 mt-0.5 shrink-0" />
                          <div>
                            <span className="text-gray-500 font-medium block text-xs uppercase tracking-wider mb-0.5">Affiliation</span>
                            <span className="text-gray-700">{topic.affiliation}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 text-sm">
                          <Presentation size={16} className="text-gray-400 mt-0.5 shrink-0" />
                          <div>
                            <span className="text-gray-500 font-medium block text-xs uppercase tracking-wider mb-0.5">Presentation Format</span>
                            <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">
                              {topic.presentation}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Mobile Lunch Break Divider */}
                {idx === 0 && (
                  <div className="lg:hidden my-4 flex items-center justify-center">
                    <div className="h-px bg-gray-200 flex-1"></div>
                    <div className="bg-white border border-gray-200 text-gray-500 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-sm mx-4">
                      <Clock size={16} />
                      <span>13:00 - 14:00 (Lunch)</span>
                    </div>
                    <div className="h-px bg-gray-200 flex-1"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TutorialSchedule() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative text-white py-20 overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-4">
              <Calendar size={16} className="text-yellow-400" />
              <span className="text-sm font-medium tracking-wide">Tutorial Programs</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Pre-Conference <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Tutorials</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              Join our comprehensive workshops and hands-on tutorials led by industry and academic experts across four specialized tracks.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12 max-w-6xl -mt-8 relative z-20">
        <div className="space-y-6">
          {tutorialTracks.map(track => (
            <TutorialCard key={track.id} track={track} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}