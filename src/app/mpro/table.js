"use client";

import React, { useState } from "react";
import { Cpu, CircuitBoard, Layers, ExternalLink, Calendar, Clock } from "lucide-react";

const MProTable = () => {
  const [selectedDay, setSelectedDay] = useState(2);

  const day1Schedule = [
    {
      time: "Full Day", // You can adjust the time as appropriate
      isBreak: false, // Not a break, but a special entry
      special: true,
      title: "Go to Tutorial Page", // The text for the link
      link: "/tut", // The link to your main tutorial page
      description: "Click here to view all tutorial details." // Optional description
    }
  ];

  const day2Schedule = [
    {
      time: "8:30 AM - 9:30 AM",
      isBreak: true,
      breakTitle: "Registration"
    },
    {
      time: "9:30 AM - 10:00 AM",
      isBreak: false,
      special: true,
      title: "VDAT-2025 Inauguration",
 description: [
  "Chief Guest : Shri. Sanjeev Arora (Minister for Investment Promotion of Punjab)<br>",
  "Sunita Verma, Group Coordinator R&D at Ministry of Electronics & IT (MeitY)<br>",
  "Hitesh Garg, Vice President and India Country Manager, NXP Semiconductors<br>",
  "Prof. Rajeev Ahuja, Director IIT Ropar<br>",
  "Prof. Laxmidhar Behera, Director IIT Mandi<br>",
  "Prof Animesh Biswas, Professor IIT Kanpur<br>",
  "Prof. Rajesh Kumar Bhatia, Director PEC - Chandigarh<br>",
  "Madhu Chitkara, Pro Chancellor Chitkara University<br>",
  "Prof. Manpreet Singh Manna, Vice-Chancellor, Chandigarh University<br>",
  "Dr. Satya Gupta, President VSI<br>",
  "Prof. Rohit Sharma, Professor IIT Ropar<br>",
  "Prof. Neeraj Goel, Professor IIT Ropar<br>",
  "Prof. Hitesh Shrimali, Professor IIT Mandi<br>",
  "Prof. Brajesh Rawat, Professor IIT Ropar<br>",
  "Prof. Shivani Malhotra, Professor Chitkara University<br>"
]
    },
    {
      time: "10:00 AM - 10:15 AM",
      isBreak: false,
      special: true,
      title: "Invited Talk",
      description: "Hitesh Garg, Vice President and India Country Manager, NXP Semiconductors"
    },
    {
      time: "10:15 AM - 10:45 AM",
      isBreak: false,
      special: true,
      title: "Vision Address",
      description: "Sharon Zhou, Vice President of Artificial Intelligence, AMD"
    },
    {
      time: "10:45 AM - 11:15 AM",
      isBreak: false,
      special: true,
      title: "Fireside Chat: Advance 3D Packaging",
      description: "Dr. Satya Gupta, Raj Mahajan (Intel), Wilfred Gomes (Mueon)"
    },
    {
      time: "11:15 AM - 11:30 AM",
      isBreak: true,
      breakTitle: "Tea Break"
    },
    {
      time: "11:30 AM - 11:55 AM",
      isBreak: false,
      special: true,
      title: "Keynote 1",
      description: "Sunita Verma, Group Co-ordinator, Electronics R&D, MeitY"
    },
    {
      time: "11:55 AM - 12:20 PM",
      isBreak: false,
      special: true,
      title: "Keynote: 2",
      description: " Dr. SD Sudarsan, Executive Director, C-DAC Bangalore"
    },
    {
      time: "12:20 PM - 12:40 PM",
      isBreak: false,
      special: true,
      title: "Invited Talk:",
      description: "Gaurav Goel, Sr Principal Engineer, Renesas"
    },
    {
      time: "12:40 PM - 1:00 PM",
      isBreak: false,
      special: true,
      title: "Invited talk:",
      description: " Ganesan Narayanasamy, Founder and CEO, Object Automation System Solutions Inc"
    },
    {
      time: "1:00 PM - 2:00 PM",
      isBreak: true,
      breakTitle: "Networking Lunch"
    },
    {
      time: "2:00 PM - 3:30 PM",
      isBreak: false,
      sessions: {
        session1a: {
          title: "Session 1a: Emerging Devices",
          link: "/mpro/1a",
          location: "Majlis Main",
        },
        session1b: {
          title: "Session 1b: RF-IC",
          link: "/mpro/1b",
          location: "Majlis Second Hall",
        },
        session1c: {
          title: "Session 1c: Accelerator",
          link: "/mpro/1c",
          location: "Adab Arz Hall",
        },
        session1d: {
          title: "Session 1d: Memory",
          link: "/mpro/1d",
          location: "Anjuman Hall",
        },
        session1e: {
          title: "Session 1e: Digital",
          link: "/mpro/1e",
          location: " Board Room",
        }
      }
    },
    {
      time: "3:30 PM - 3:50 PM",
      isBreak: true,
      breakTitle: "High Tea"
    },
    {
      time: "3:50 PM - 4:10 PM",
      isBreak: false,
      special: true,
      title: "Invited Talk:",
      description: "Dipan Sahu, Asst. Innovation Director, Ministry of Education"
    },
    {
      time: "4:10 PM - 5:40 PM",
      isBreak: false,
      sessions: {
        session2a: {
          title: "Session 2a: Startup Contest - pitching session",
          link: "/circuitpreneur",
          papers: "",
          location: "Majlis Main"
        },
        session2b: {
          title: "Session 2b: PhD Forum",
          link: "/phdforum",
          papers: "",
          location: " Majlis Second Hall"
        },
        session2c: {
          title: "Session 2c: Embedded",
          link: "/mpro/2c",
          location: "Adab Arz Hall"
        },
        session2d: {
          title: "Session 2d: FPGA and Processor",
          link: "/mpro/2d",
          location: "Anjuman Hall"
        },
        session2e: {
          title: "Session 2e: Analog and Digital",
          link: "/mpro/2e",
          location: "Board Room"
        }
      }
    },
    {
      time: "5:40 PM - 6:25 PM",
      isBreak: true,
      breakTitle: ""
    },
    {
      time: "6:25 PM - 6:55 PM",
      isBreak: false,
      special: true,
      title: "Banquet speech",
      description: "Sarita Alhawat, Founder and CEO of Botlabs"
    },
    {
      time: "6:55 PM - 7:40 PM",
      isBreak: false,
      special: true,
      title: "Awards and Valedictory"
    },
    {
      time: "7:40 PM - 9:10 PM",
      isBreak: true,
      breakTitle: "Networking Dinner"
    }
  ];

  const day3Schedule = [
    {
      time: "8:00 AM - 9:30 AM",
      isBreak: true,
      breakTitle: "Registration"
    },
    {
      time: "9:30 AM - 10:00 AM",
      isBreak: false,
      special: true,
      title: "Global Vision Address",
      description: "Rajeev Madhavan, Founder Clear Ventures, Founder Magma Design Automation"
    },
    {
      time: "10:00 AM - 10:20 AM",
      isBreak: false,
      special: true,
      title: "Invited Talk:",
      description: "Prof Shanthi Pavan (IIT Madras)"
    },
    {
      time: "10:20 AM - 10:40 AM",
      isBreak: false,
      special: true,
      title: "Invited Talk:",
      description: "Tapas Nandy, Sr. Director, Microsoft"
    },
    {
      time: "10:40 AM - 11:25 AM",
      isBreak: false,
      special: true,
      title: "Student Open House - Unleashing the opportunities in Golden Era of Semicon & VLSI Ask Me Anything Session"
    },
    {
      time: "11:25 AM - 11:45 AM",
      isBreak: true,
      breakTitle: "Tea Break"
    },
    {
      time: "11:45 AM - 1:15 PM",
      isBreak: false,
      sessions: {
        session3a: {
          title: "Session 3a: Processor and FPGA",
          link: "/mpro/3a",
          location: "Majlis Main",
        },
        session3b: {
          title: "Session 3b: Digital and Analog",
          link: "/mpro/3b",
          location: "Majlis Second Hall",
        },
        session3c: {
          title: "Session 3c: Accelerator",
          link: "/mpro/3c",
          location: "Adab Arz Hall",
        },
        session3d: {
          title: "Session 3d: FPGA",
          link: "/mpro/3d",
          location: "Anjuman Hall",
        },
        session3e: {
          title: "Session 3e: Digital",
          link: "/mpro/3e",
          location: "Board Room",
        }
      }
    },
    {
      time: "1:15 PM - 2:15 PM",
      isBreak: true,
      breakTitle: "Networking Lunch"
    },
    {
      time: "2:15 PM - 4:15 PM",
      isBreak: false,
      sessions: {
        session4a: {
          title: "Session 4a: Emerging Devices and In-memory",
          link: "/mpro/4a",
          location: "Majlis Main",
        },
        session4b: {
          title: "Session 4b: Digital and Memory",
          link: "/mpro/4b",
          location: "Majlis Second Hall",
        },
        session4c: {
          title: "Session 4c: Accelerator",
          link: "/mpro/4c",
          location: "Adab Arz Hall",
        },
        session4d: {
          title: "Session 4d: FPGA",
          link: "/mpro/4d",
          location: "Anjuman Hall",
        },
        session4e: {
          title: "Session 4e:  Digital & Embedded System",
          link: "/mpro/4e",
          location: "Board Room",
        }
      }
    },
    {
      time: "4:15 PM - 4:35 PM",
      isBreak: true,
      breakTitle: "Tea Break"
    },
    {
      time: "4:35 PM - 4:55 PM",
      isBreak: false,
      special: true,
      title: "Group Photo"
    }
  ];

  const getCurrentSchedule = () => {
    switch(selectedDay) {
      case 1: return day1Schedule;
      case 2: return day2Schedule;
      case 3: return day3Schedule;
      default: return day1Schedule;
    }
  };

  // SessionLink component with reduced padding
  const SessionLink = ({ session }) => (
    <div className="p-2 h-full">
      <div className="text-xs leading-tight text-gray-800">
        {session.link ? (
          <a href={session.link} className="font-medium block mb-1 text-blue-700 hover:underline flex items-center gap-1">
            {session.title} {session.type && <span className="text-xs text-blue-600 inline-block px-1 py-0.5 bg-blue-50 rounded">{session.type}</span>} <ExternalLink size={12} />
          </a>
        ) : (
          <>
            <span className="font-medium block mb-1 text-xs">{session.title}</span>
            {session.type && (
              <span className="text-xs text-blue-600 inline-block mt-1 px-1 py-0.5 bg-blue-50 rounded">{session.type}</span>
            )}
          </>
        )}
        {session.papers && (
          <span className="text-xs text-gray-600 block mt-1">{session.papers}</span>
        )}
        {session.location && (
          <span className="text-xs text-gray-600 block mt-1">{session.location}</span>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen font-sans">
      <div className="max-w-full mx-auto p-2 sm:p-4 bg-gray-50 min-h-screen">
        {/* Day Selection */}
        <div className="flex justify-center mb-4">
          <div className="bg-white rounded-lg shadow-md p-1 flex">
            {[1, 2, 3].map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-md text-xs font-medium transition-all ${
                  selectedDay === day
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Day {day} - August {day + 6}, 2025
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white p-3">
            <h2 className="text-lg sm:text-xl font-semibold text-center">
              Day {selectedDay}: August {selectedDay + 6}, 2025
            </h2>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-center font-semibold text-gray-700 text-xs bg-gray-200 min-w-[120px]">
                    Time
                  </th>
                  {/* Reduced column widths */}
                  {selectedDay === 1 ? (
                    <th className="border border-gray-300 p-2 text-center font-semibold text-gray-700 bg-pink-50 text-xs min-w-[160px]" colSpan={4}>Tutorials</th>
                  ) : (
                    <>
                      <th className="border border-gray-300 p-2 text-center font-semibold text-gray-700 bg-pink-50 text-xs min-w-[160px]">Track A</th>
                      <th className="border border-gray-300 p-2 text-center font-semibold text-gray-700 bg-yellow-50 text-xs min-w-[160px]">Track B</th>
                      <th className="border border-gray-300 p-2 text-center font-semibold text-gray-700 bg-blue-50 text-xs min-w-[160px]">Track C</th>
                      <th className="border border-gray-300 p-2 text-center font-semibold text-gray-700 bg-green-50 text-xs min-w-[160px]">Track D</th>
                      <th className="border border-gray-300 p-2 text-center font-semibold text-gray-700 bg-purple-50 text-xs min-w-[160px]">Track E</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {getCurrentSchedule().map((row, index) => (
                  <tr key={index} className={row.isBreak ? "bg-gray-50" : "hover:bg-gray-50/50 transition-colors"}>
                    <td className="border border-gray-300 p-2 text-xs font-medium text-gray-700 bg-gray-50 text-center">
                      <div className="whitespace-nowrap">{row.time}</div>
                    </td>
                    {row.isBreak ? (
                      <td className="border border-gray-300 bg-gray-100 text-center py-2 px-2" colSpan={selectedDay === 1 ? 4 : 5}>
                        <div className="text-orange-600 font-medium text-xs">
                          {row.breakTitle}
                        </div>
                      </td>
                    ) : row.special ? (
                      <td className="border border-gray-300 bg-blue-50 text-center py-2 px-2" colSpan={selectedDay === 1 ? 4 : 5}>
                        {row.link ? (
                          <a href={row.link} className="text-blue-800 font-medium text-sm flex items-center justify-center gap-1 hover:underline">
                            {row.title} <ExternalLink size={16} />
                          </a>
                        ) : (
                          <div className="text-blue-800 font-medium text-sm">
                            {row.title}
                          </div>
                        )}
                        {row.description && (
                          <div
  className="text-gray-600 text-xs leading-tight mt-1"
  dangerouslySetInnerHTML={{ __html: row.description }}
/>
                        )}
                      </td>
                    ) : (
                      Object.values(row.sessions).map((session, sessionIndex) => (
                        <td key={sessionIndex} className={`border border-gray-300 align-top ${
                          sessionIndex === 0 ? 'bg-pink-25' :
                          sessionIndex === 1 ? 'bg-yellow-25' :
                          sessionIndex === 2 ? 'bg-blue-25' :
                          sessionIndex === 3 ? 'bg-green-25' : 'bg-purple-25'
                        }`}>
                          <SessionLink session={session} />
                        </td>
                      ))
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 p-3 border-t border-gray-200">
            <p className="text-xs text-gray-600 text-center">
              <span className="font-medium">Note:</span> All sessions and timings are as per the official program.
              Subject to change without prior notice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MProTable;