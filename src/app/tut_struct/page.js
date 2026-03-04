"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Cpu, CircuitBoard, Layers, ExternalLink, Clock, Calendar, Users } from "lucide-react";
import Navbar from "../home/Navbar";
import Footer from "../footer/footer";


const ConferenceScheduleTable = () => {
  const scheduleData = [
    {
      time: "9:00 AM - 10:30 AM",
      isBreak: false,
      sessions: {
        system: {
          title: "Building RISC-V based System on Chips – Embedded to AI Enabled SoCs",
          path: "tutorial1",
          duration: "90 mins"
        },
        analogDesign: {
          title: "Testing & characterization of data converters",
          code: "IITR/IITD– 180",
          path: "tutorial2",
          duration: "90 mins"
        },
        digitalDesign: {
          title: "Metric Driven Verification of a typical Low Power Mixed Signal (LPMS) SoC",
          path: "td2",
          duration: "90 mins"
        },
        deviceLevel: {
          title: "Foundry Compliance and Tapeout Qualification of Analog, Digital, and Mixed-Signal IC Designs for SCL 180nm CMOS Technology Node",
          path: "tutorial4",
          duration: "90 mins"
        }
      }
    },
    {
      time: "10:30 AM - 11:00 AM",
      isBreak: true,
      breakTitle: "Tea Break",
      icon: "☕"
    },
    {
      time: "11:00 AM - 12:30 PM",
      isBreak: false,
      sessions: {
        system: {
          title: "Building RISC-V based System on Chips – Embedded to AI Enabled SoCs (Continued)",
          path: "tutorial1",
          duration: "90 mins"
        },
        analogDesign: {
          title: "Testing & characterization of data converters (Continued)",
          code: "IITR/IITD– 180",
          path: "tutorial2",
          duration: "90 mins"
        },
        digitalDesign: {
          title: "Workshop on Accelerating System Design: HDL Code Generation and Verification Techniques",
          path: "tut11",
          duration: "90 mins"
        },
        deviceLevel: {
          title: "Foundry Compliance and Tapeout Qualification of Analog, Digital, and Mixed-Signal IC Designs for SCL 180nm CMOS Technology Node (Continued)",
          path: "tutorial4",
          duration: "90 mins"
        }
      }
    },
    {
      time: "12:30 PM - 2:00 PM",
      isBreak: true,
      breakTitle: "Lunch Break",
      icon: "🍽️"
    },
    {
      time: "2:00 PM - 3:30 PM",
      isBreak: false,
      sessions: {
        system: {
          title: "Google's Tensor Processing Unit: Understanding State-of-the-art AI Accelerator",
          path: "ts2",
          duration: "90 mins"
        },
        analogDesign: {
          title: "CMOS ANALOG DESIGN",
          path: "ta2",
          duration: "90 mins"
        },

        deviceLevel: {
          title: "NQS High-frequency Modeling of the Non-planar devices",
          path: "tut8",
          duration: "90 mins"
        }
      }
    },
    {
      time: "3:30 PM - 4:00 PM",
      isBreak: true,
      breakTitle: "Tea Break",
      icon: "☕"
    },
    {
      time: "4:00 PM - 5:30 PM",
      isBreak: false,
      sessions: {
        system: {
          title: "Design of a Battery-less Wireless Sensor Node Powered by RF Energy Harvester",
          path: "tut9",
          duration: "90 mins"
        },
        analogDesign: {
          title: "Neuromorphic Sensors: Architectures, IC Design Techniques, and Emerging Applications",
          path: "tut10",
          duration: "90 mins"
        },

        deviceLevel: {
          title: "Reliability-Aware Journey from FinFET to Stacked transistor",
          path: "tut12",
          duration: "90 mins"
        }
      }
    }
  ];

  const [hoveredSession, setHoveredSession] = useState(null);

  const SessionLink = ({ session, track }) => (
    <div className="p-2 sm:p-3 h-full">
      <Link 
        href={`/tut_struct/${session.path}`}
        className="block text-xs sm:text-sm leading-tight sm:leading-relaxed hover:text-blue-600 transition-all duration-300 group transform hover:scale-[1.02]"
        onMouseEnter={() => setHoveredSession(session.path)}
        onMouseLeave={() => setHoveredSession(null)}
      >
        <div className="space-y-2">
          <span className="font-medium group-hover:underline text-black line-clamp-3 sm:line-clamp-none block">
            {session.title}
          </span>
          
          {/* {session.code && (
            <div className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded">
              {session.code}
            </div>
          )} */}
          
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center">
              <Clock size={12} className="mr-1" />
              {session.duration}
            </span>
            <ExternalLink 
              className={`w-3 h-3 transition-all duration-300 ${
                hoveredSession === session.path ? 'opacity-100 translate-x-1' : 'opacity-0'
              }`} 
            />
          </div>
        </div>
      </Link>
    </div>
  );

  const trackColors = {
    system: { bg: 'bg-pink-50', header: 'bg-pink-100', accent: 'border-l-pink-400' },
    analogDesign: { bg: 'bg-yellow-50', header: 'bg-yellow-100', accent: 'border-l-yellow-400' },
    digitalDesign: { bg: 'bg-blue-50', header: 'bg-blue-100', accent: 'border-l-blue-400' },
    deviceLevel: { bg: 'bg-green-50', header: 'bg-green-100', accent: 'border-l-green-400' }
  };

  return (
    <div className="bg-black to-white min-h-screen font-sans">
  
        <Navbar />
     
      
      {/* Enhanced Header */}
      <header className="text-center text-white py-16 relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-violet-900/85"></div>
        
        {/* Animated Circuit Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 animate-pulse">
            <CircuitBoard size={48} className="text-cyan-300" />
          </div>
          <div className="absolute top-3/4 right-1/4 animate-pulse delay-1000">
            <Cpu size={36} className="text-green-300" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-pulse delay-500">
            <Layers size={42} className="text-purple-300" />
          </div>
          <div className="absolute top-1/2 right-1/3 animate-bounce delay-700">
            <Users size={32} className="text-yellow-300" />
          </div>
        </div>

        <div className="relative z-10 px-4 py-8">
          <div className="flex items-center justify-center mb-6">
            <Cpu className="text-cyan-300 mr-3 animate-spin" size={40} />
            <h1 className="text-5xl font-extrabold tracking-tight uppercase drop-shadow-2xl bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Tutorial Sessions
            </h1>
            <CircuitBoard className="text-green-300 ml-3 animate-pulse" size={40} />
          </div>

          <p className="text-xl max-w-3xl mx-auto font-light mb-6 leading-relaxed">
            Comprehensive workshops and hands-on tutorials across four specialized tracks
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-sm">
            <Calendar size={16} />
            <span>August 7, 2025 (Day 1)</span>
          </div>
        </div>
      </header>

      <div className="max-w-full mx-auto p-2 sm:p-6 bg-gray-50 min-h-screen">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center flex items-center justify-center">
              <Calendar className="mr-3" size={28} />
              7th August 2025 (Day 1)
              <Users className="ml-3" size={28} />
            </h2>
          </div>
          
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 sm:p-4 text-center font-bold text-gray-700 text-sm sm:text-base bg-gray-200 min-w-[140px]">
                    <div className="flex flex-col items-center space-y-1">
                      <Clock size={20} className="text-gray-600" />
                      <span>Time Slot</span>
                    </div>
                  </th>
                  <th className={`border border-gray-300 p-3 sm:p-4 text-center font-bold text-gray-700 ${trackColors.system.header} text-sm sm:text-base min-w-[220px] border-l-4 ${trackColors.system.accent}`}>
                    <div className="flex items-center justify-center space-x-2">
                      <Cpu size={18} />
                      <span>System Track</span>
                    </div>
                  </th>
                  <th className={`border border-gray-300 p-3 sm:p-4 text-center font-bold text-gray-700 ${trackColors.analogDesign.header} text-sm sm:text-base min-w-[220px] border-l-4 ${trackColors.analogDesign.accent}`}>
                    <div className="flex items-center justify-center space-x-2">
                      <CircuitBoard size={18} />
                      <span>Analog Track</span>
                    </div>
                  </th>
                  <th className={`border border-gray-300 p-3 sm:p-4 text-center font-bold text-gray-700 ${trackColors.digitalDesign.header} text-sm sm:text-base min-w-[220px] border-l-4 ${trackColors.digitalDesign.accent}`}>
                    <div className="flex items-center justify-center space-x-2">
                      <Layers size={18} />
                      <span>Digital Track</span>
                    </div>
                  </th>
                  <th className={`border border-gray-300 p-3 sm:p-4 text-center font-bold text-gray-700 ${trackColors.deviceLevel.header} text-sm sm:text-base min-w-[220px] border-l-4 ${trackColors.deviceLevel.accent}`}>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 bg-green-600 rounded-sm"></div>
                      <span>Device Track</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((row, index) => (
                  <tr key={index} className={row.isBreak ? "bg-gradient-to-r from-gray-50 to-gray-100" : "hover:bg-gray-50 transition-all duration-300"}>
                    <td className="border border-gray-300 p-3 sm:p-4 text-sm sm:text-base font-medium text-gray-700 bg-gray-50 text-center min-w-[140px]">
                      <div className="whitespace-nowrap font-mono">{row.time}</div>
                    </td>
                    {row.isBreak ? (
                      <td className="border border-gray-300 bg-gradient-to-r from-orange-50 to-red-50 text-center py-4 px-4" colSpan={4}>
                        <div className="text-red-600 font-semibold text-base sm:text-lg flex items-center justify-center space-x-2">
                          <span className="text-2xl">{row.icon}</span>
                          <span>{row.breakTitle}</span>
                        </div>
                      </td>
                    ) : (
                      <>
                        <td className={`border border-gray-300 ${trackColors.system.bg} align-top border-l-4 ${trackColors.system.accent}`}>
                          <SessionLink session={row.sessions.system} track="system" />
                        </td>
                        <td className={`border border-gray-300 ${trackColors.analogDesign.bg} align-top border-l-4 ${trackColors.analogDesign.accent}`}>
                          <SessionLink session={row.sessions.analogDesign} track="analogDesign" />
                        </td>
                        <td className={`border border-gray-300 ${trackColors.digitalDesign.bg} align-top border-l-4 ${trackColors.digitalDesign.accent}`}>
                          {row.sessions.digitalDesign ? (
                            <SessionLink session={row.sessions.digitalDesign} track="digitalDesign" />
                          ) : (
                            <div className="p-2 sm:p-3 h-full flex items-center justify-center text-gray-400 italic text-sm">
                              No session scheduled
                            </div>
                          )}
                        </td>
                        <td className={`border border-gray-300 ${trackColors.deviceLevel.bg} align-top border-l-4 ${trackColors.deviceLevel.accent}`}>
                          <SessionLink session={row.sessions.deviceLevel} track="deviceLevel" />
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <p className="text-sm text-gray-600 flex items-center">
                <ExternalLink size={16} className="mr-2" />
                <span className="font-medium">Interactive Schedule:</span> 
                <span className="ml-1">Click on any session title to view detailed information</span>
              </p>
              <p className="text-xs text-gray-500">
                All sessions are subject to change • Last updated: July 2025
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>  
  );
};

export default ConferenceScheduleTable;