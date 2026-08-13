"use client";

import React from "react";
import {
  Cpu,
  CircuitBoard,
  Layers,
  Calendar,
  Clock,
  Users,
} from "lucide-react";
import Footer from "../footer/footer";
import Navbar from "../home/Navbar";

const schedule = [
  {
    day: "Day 1",
    date: "Thursday, August 20, 2026",
    rows: [
      {
        time: "08:00 AM – 09:00 AM",
        duration: "60 min",
        type: "Registration",
        session: "Registration & Delegate Kit Collection",
        speaker: "",
        audience: "All participants",
      },
      {
        time: "09:00 AM – 11:00 AM",
        duration: "120 min",
        type: "Inauguration",
        session: "Opening Ceremony / Lamp Lighting / Welcome Address",
        speaker: "",
        audience: "Plenary",
      },
      {
        time: "11:00 AM – 11:20 AM",
        duration: "20 min",
        type: "Keynote 1",
        session: "Keynote Block 1",
        speaker: "Keynote 1: Mr. Hitesh Garg",
        audience: "Plenary",
      },
      {
        time: "11:20 AM – 11:40 AM",
        duration: "20 min",
        type: "Keynote 2",
        session: "Keynote Block 2",
        speaker: "Keynote 2: Ms. Tal Zigman",
        audience: "Plenary",
      },
      {
        time: "11:40 AM – 11:55 AM",
        duration: "15 min",
        type: "Break",
        session: "High Tea",
        speaker: "",
        audience: "All participants",
      },
      {
        time: "11:55 AM – 01:15 PM",
        duration: "80 min",
        type: "Technical Session",
        session: "Session 1",
        speaker: "",
        audience: "Parallel tracks as per paper allocation",
      },
      {
        time: "01:15 PM – 02:05 PM",
        duration: "50 min",
        type: "Lunch",
        session: "Networking Lunch",
        speaker: "",
        audience: "All participants",
      },
      {
        time: "02:05 PM – 02:55 PM",
        duration: "50 min",
        type: "Panel",
        session: "",
        speaker: "",
        audience: "",
      },
      {
        time: "02:55 PM – 03:15 PM",
        duration: "20 min",
        type: "Keynote 3",
        session: "Keynote Block 3",
        speaker: "Keynote 3: Mr. Navin Bishnoi",
        audience: "Plenary",
      },
      {
        time: "03:15 PM – 03:35 PM",
        duration: "20 min",
        type: "Keynote 4",
        session: "Keynote Block 4",
        speaker: "Keynote 4: Prof. Rajendra",
        audience: "Plenary",
      },
      {
        time: "03:35 PM – 03:50 PM",
        duration: "15 min",
        type: "Break",
        session: "High Tea",
        speaker: "",
        audience: "All participants",
      },
      {
        time: "03:50 PM – 04:10 PM",
        duration: "20 min",
        type: "Keynote 5",
        session: "Keynote Block 5",
        speaker: "Keynote 5: Prof. Saibal Mukhopadhyay",
        audience: "",
      },
      {
        time: "04:10 PM – 05:30 PM",
        duration: "80 min",
        type: "Technical Session",
        session: "Session 2",
        speaker: "",
        audience: "Parallel tracks as per paper allocation",
      },
      {
        time: "05:30 PM – 06:30 PM",
        duration: "60 min",
        type: "Poster Session",
        session: "Poster Session",
        speaker: "",
        audience: "Poster area",
      },
      {
        time: "06:30 PM – 07:30 PM",
        duration: "60 min",
        type: "Cultural Program",
        session: "Cultural Program",
        speaker: "",
        audience: "Auditorium / Main Hall",
      },
      {
        time: "07:30 PM onwards",
        duration: "—",
        type: "Dinner",
        session: "Networking Dinner",
        speaker: "",
        audience: "All participants",
      },
    ],
  },

  {
    day: "Day 2",
    date: "Friday, August 21, 2026",
    rows: [
      {
        time: "08:00 AM – 09:00 AM",
        duration: "60 min",
        type: "Registration",
        session: "Registration / Help Desk",
        speaker: "",
        audience: "All participants",
      },
      {
        time: "09:00 AM – 09:15 AM",
        duration: "15 min",
        type: "Invited Talk 1 and 2",
        session: "Invited Talks Block 1",
        speaker: "",
        audience: "",
      },
      {
        time: "09:15 AM – 10:35 AM",
        duration: "80 min",
        type: "Technical Session",
        session: "Session 3",
        speaker: "",
        audience: "Parallel tracks as per paper allocation",
      },
      {
        time: "10:35 AM – 10:55 AM",
        duration: "20 min",
        type: "Keynote 6",
        session: "Keynote Block 6",
        speaker: "Keynote 6: Mr. Anand Kumar",
        audience: "Plenary",
      },
      {
        time: "10:55 AM – 11:15 AM",
        duration: "20 min",
        type: "Keynote 7",
        session: "Keynote Block 7",
        speaker: "Keynote 7: Mr. Yogesh Mittal",
        audience: "Plenary",
      },
      {
        time: "11:15 AM – 11:35 AM",
        duration: "20 min",
        type: "Break",
        session: "High Tea",
        speaker: "",
        audience: "All participants",
      },
      {
        time: "11:35 AM – 11:50 AM",
        duration: "15 min",
        type: "Invited Talk 3 and 4",
        session: "Invited Talks Block 2",
        speaker: "",
        audience: "",
      },
      {
        time: "11:50 AM – 01:10 PM",
        duration: "80 min",
        type: "Technical Session",
        session: "Session 4",
        speaker: "",
        audience: "Parallel tracks as per paper allocation",
      },
      {
        time: "01:10 PM – 02:00 PM",
        duration: "50 min",
        type: "Lunch",
        session: "Lunch",
        speaker: "",
        audience: "All participants",
      },
      {
        time: "02:00 PM – 02:20 PM",
        duration: "20 min",
        type: "Keynote 8",
        session: "Keynote Block 8",
        speaker: "Keynote 8: Prof. Maryam Shojaei Baghini",
        audience: "Plenary",
      },
      {
        time: "02:20 PM – 02:40 PM",
        duration: "20 min",
        type: "Keynote 9",
        session: "Keynote Block 9",
        speaker: "Keynote 9",
        audience: "Plenary",
      },
      {
        time: "02:40 PM – 02:55 PM",
        duration: "15 min",
        type: "Invited Talk 5 and 6",
        session: "Invited Talks Block 3",
        speaker: "",
        audience: "",
      },
      {
        time: "02:55 PM – 04:15 PM",
        duration: "80 min",
        type: "Technical Session",
        session: "Session 5",
        speaker: "",
        audience: "Parallel tracks as per paper allocation",
      },
      {
        time: "04:15 PM – 04:35 PM",
        duration: "20 min",
        type: "Break",
        session: "High Tea",
        speaker: "",
        audience: "All participants",
      },
      {
        time: "04:35 PM – 04:55 PM",
        duration: "20 min",
        type: "Keynote 10",
        session: "Keynote Block 10",
        speaker: "Keynote 10",
        audience: "Plenary",
      },
      {
        time: "04:55 PM – 05:55 PM",
        duration: "60 min",
        type: "Poster Session",
        session: "Poster Session",
        speaker: "",
        audience: "Poster area",
      },
      {
        time: "05:55 PM – 06:55 PM",
        duration: "60 min",
        type: "Open House Session",
        session: "Open House Session",
        speaker: "",
        audience: "All participants",
      },
      {
        time: "07:00 PM onwards",
        duration: "—",
        type: "Dinner",
        session: "Banquet Dinner",
        speaker: "",
        audience: "All participants",
      },
    ],
  },

  {
    day: "Day 3",
    date: "Saturday, August 22, 2026",
    rows: [
      {
        time: "08:00 AM – 09:00 AM",
        duration: "60 min",
        type: "Registration",
        session: "Registration / Help Desk",
        speaker: "",
        audience: "All participants",
      },
      {
        time: "09:00 AM – 09:15 AM",
        duration: "15 min",
        type: "Invited Talk 7 and 8",
        session: "Invited Talks Block 4",
        speaker: "",
        audience: "",
      },
      {
        time: "09:15 AM – 10:35 AM",
        duration: "80 min",
        type: "Technical Session",
        session: "Session 6",
        speaker: "",
        audience: "Parallel tracks as per paper allocation",
      },
      {
        time: "10:35 AM – 10:55 AM",
        duration: "20 min",
        type: "Keynote 11",
        session: "Keynote Block 11",
        speaker: "Keynote 11: Er. H. S. Jatana",
        audience: "Plenary",
      },
      {
        time: "10:55 AM – 11:15 AM",
        duration: "20 min",
        type: "Keynote 12",
        session: "Keynote Block 12",
        speaker: "Keynote 12: Dr. Hari Shanker Gupta",
        audience: "Plenary",
      },
      {
        time: "11:15 AM – 11:35 AM",
        duration: "20 min",
        type: "Break",
        session: "High Tea",
        speaker: "",
        audience: "All participants",
      },
      {
        time: "11:35 AM – 11:55 AM",
        duration: "20 min",
        type: "Keynote 9",
        session: "Keynote Block 13",
        speaker: "Keynote 13: Prof. Yogesh Chauhan",
        audience: "Plenary",
      },
      {
        time: "11:55 AM – 12:15 PM",
        duration: "20 min",
        type: "Keynote 13",
        session: "Keynote Block 14",
        speaker: "Keynote 14: Dr. Gauri Shankerkar",
        audience: "Plenary",
      },
      {
        time: "12:15 PM – 01:15 PM",
        duration: "60 min",
        type: "Valedictory",
        session: "Valedictory / Closing Ceremony",
        speaker: "",
        audience: "Plenary",
      },
      {
        time: "01:15 PM onwards",
        duration: "—",
        type: "Lunch",
        session: "Lunch",
        speaker: "",
        audience: "All participants",
      },
    ],
  },
];

const getTypeStyle = (type) => {
  if (type.includes("Keynote")) {
    return "bg-purple-100 text-purple-700";
  }

  if (type.includes("Technical")) {
    return "bg-blue-100 text-blue-700";
  }

  if (type.includes("Invited")) {
    return "bg-cyan-100 text-cyan-700";
  }

  if (type.includes("Break")) {
    return "bg-amber-100 text-amber-700";
  }

  if (type.includes("Lunch") || type.includes("Dinner")) {
    return "bg-orange-100 text-orange-700";
  }

  if (type.includes("Poster")) {
    return "bg-pink-100 text-pink-700";
  }

  if (type.includes("Registration")) {
    return "bg-green-100 text-green-700";
  }

  if (type.includes("Valedictory")) {
    return "bg-red-100 text-red-700";
  }

  return "bg-gray-100 text-gray-700";
};

const SessionTable = ({ rows }) => {
  return (
    <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200 bg-white">
      <table className="min-w-[1200px] w-full border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white">
            <th className="px-4 py-4 text-left border-r border-white/20">
              Time
            </th>
            <th className="px-4 py-4 text-center border-r border-white/20">
              Duration
            </th>
            <th className="px-4 py-4 text-left border-r border-white/20">
              Type
            </th>
            <th className="px-4 py-4 text-left border-r border-white/20">
              Session
            </th>
            <th className="px-4 py-4 text-left border-r border-white/20">
              Speaker / Details
            </th>
            <th className="px-4 py-4 text-left">
              Venue / Audience
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className={`transition-colors ${
                index % 2 === 0 ? "bg-white" : "bg-slate-50"
              } hover:bg-blue-50`}
            >
              <td className="px-4 py-4 border-b border-r border-gray-200 font-semibold text-gray-800 whitespace-nowrap">
                {row.time}
              </td>

              <td className="px-4 py-4 border-b border-r border-gray-200 text-center text-gray-600 whitespace-nowrap">
                {row.duration}
              </td>

              <td className="px-4 py-4 border-b border-r border-gray-200">
                <span
                  className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-bold whitespace-nowrap ${getTypeStyle(
                    row.type
                  )}`}
                >
                  {row.type}
                </span>
              </td>

              <td className="px-4 py-4 border-b border-r border-gray-200 text-gray-800 font-medium">
                {row.session || "—"}
              </td>

              <td className="px-4 py-4 border-b border-r border-gray-200 text-gray-700">
                {row.speaker || "—"}
              </td>

              <td className="px-4 py-4 border-b border-gray-200 text-gray-700">
                {row.audience || "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Mpro = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      <div className="bg-black">
        <Navbar />
      </div>

      {/* HEADER */}
      <header className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-950 to-purple-950 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-[15%]">
            <CircuitBoard size={90} className="text-cyan-300" />
          </div>

          <div className="absolute bottom-10 right-[18%]">
            <Cpu size={70} className="text-green-300" />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Layers size={150} className="text-purple-300" />
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-5">
            <Calendar className="text-cyan-300" size={44} />

            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              VDAT-2026 Conference Schedule
            </h1>

            <Clock className="text-green-300" size={44} />
          </div>

          <p className="max-w-4xl mx-auto text-lg md:text-xl text-slate-200 leading-relaxed">
            30th IEEE International Symposium on VLSI Design and Test
          </p>

          <p className="mt-3 text-cyan-300 font-semibold text-lg">
            20–22 August 2026 · Jaypee Institute of Information Technology, Noida
          </p>
        </div>
      </header>

      {/* INTRO */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800">
            Session Plan
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mt-4 mb-5" />

          <p className="text-gray-600 text-lg leading-relaxed">
            Explore the complete day-wise schedule, keynote sessions,
            technical sessions, invited talks, poster sessions, networking
            activities, and conference events.
          </p>
        </div>
      </section>

      {/* DAY-WISE TABLES */}
      <main className="container mx-auto px-6 pb-20 space-y-14">
        {schedule.map((day, dayIndex) => (
          <section key={day.day}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-lg">
                  <Calendar size={28} />
                </div>

                <div>
                  <h2 className="text-3xl font-black text-gray-900">
                    {day.day}
                  </h2>

                  <p className="text-gray-600 text-lg">
                    {day.date}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-5 py-2.5 rounded-full font-semibold">
                <Users size={18} />
                Conference Session Plan
              </div>
            </div>

            <SessionTable rows={day.rows} />
          </section>
        ))}
      </main>

      {/* FOOTER NOTE */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white">
        <div className="container mx-auto px-6 py-12 text-center">
          <h3 className="text-3xl font-bold mb-3">
            VDAT 2026
          </h3>

          <p className="text-white/90 text-lg">
            Please note that session timings and allocations may be subject
            to final program updates.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mpro;