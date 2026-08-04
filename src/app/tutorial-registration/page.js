"use client";
import React from "react";
import Navbar from "../home/Navbar";
import Footer from "../footer/footer";
import {
  CheckCircle,
  Clock,
  BookOpen,
  Coffee,
  Calendar,
  AlertCircle,
  Cpu,
  CircuitBoard,
  Layers,
  ExternalLink,
  Star,
  Zap,
} from "lucide-react";

const tutorialHighlights = [
  {
    title: "6 Instructional Hours",
    description: "Deep-dive full-day learning in your chosen track",
    icon: <Clock className="text-cyan-400" size={36} />,
  },
  {
    title: "Expert-Led Sessions",
    description: "Guided by leading academics and industry practitioners",
    icon: <BookOpen className="text-yellow-400" size={36} />,
  },
  {
    title: "Lunch & Refreshments",
    description: "Hospitality included throughout the tutorial day",
    icon: <Coffee className="text-green-400" size={36} />,
  },
  {
    title: "Parallel Tracks",
    description: "Multiple specialised pathways to choose from",
    icon: <Layers className="text-purple-400" size={36} />,
  },
];

const importantNotes = [
  "Participants must select ONE tutorial pathway and attend both morning and afternoon modules within that track.",
  "Switching between tracks during the day will NOT be permitted.",
  "Accommodation will NOT be provided — please arrange your own stay.",
  "Registration is confirmed only after successful payment and verification by the VDAT 2026 Organizing Committee.",
  "Submission of this form alone does NOT constitute confirmation of registration.",
];

const TutorialRegistrationPage = () => {
  const GOOGLE_FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfE7_rsUb5Zqr6MXrP3JAcAvqMCcFkIXl3je9lVKXroGQPy-A/viewform?pli=1";

  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      {/* Hero */}
      <header
        className="text-center text-white py-24 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/jiit5.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-blue-900/90" />
        <div className="absolute inset-0 overflow-hidden opacity-15 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 animate-pulse">
            <CircuitBoard size={64} className="text-cyan-300" />
          </div>
          <div className="absolute top-3/4 right-1/4 animate-pulse delay-700">
            <Cpu size={48} className="text-green-300" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-pulse delay-500">
            <Layers size={56} className="text-purple-300" />
          </div>
        </div>

        <div className="relative z-10 px-4 py-10">
          <div className="flex items-center justify-center mb-4">
            <Cpu className="text-cyan-300 mr-4 animate-spin" size={44} />
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight uppercase drop-shadow-lg">
              VDAT 2026
            </h1>
            <CircuitBoard className="text-green-300 ml-4 animate-pulse" size={44} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-300 uppercase tracking-wide">
            Full-Day Tutorial Registration
          </h2>

          <p className="text-lg md:text-xl max-w-3xl mx-auto font-light mb-8 leading-relaxed text-white/90">
            Welcome to the VDAT 2026 Tutorial Registration Portal! Join
            intensive, expert-guided full-day tutorials across multiple parallel
            tracks and accelerate your expertise in cutting-edge semiconductor
            and VLSI technologies.
          </p>

          <div className="inline-flex items-center gap-3 bg-red-600/80 border border-red-400 text-white font-bold px-8 py-3 rounded-full text-lg shadow-lg mb-8 animate-pulse">
            <Calendar size={22} />
            Last Day to Register:&nbsp;<span className="text-yellow-300">10th August 2026</span>
          </div>

          <div className="mt-4">
            <a
              href={GOOGLE_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-2xl rounded-full shadow-2xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 uppercase tracking-wide"
            >
              <Star className="mr-3 animate-spin group-hover:animate-none" size={26} />
              Register Now
              <ExternalLink className="ml-3 group-hover:translate-x-1 transition-transform" size={22} />
            </a>
          </div>

          <div className="mt-6 animate-bounce">
            <p className="text-cyan-300 font-semibold text-base flex items-center justify-center gap-2">
              🚀 Registration Open — Secure your spot today!
            </p>
          </div>
        </div>
      </header>

      {/* What's Included */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#111827] to-black py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4">
            What&apos;s Included
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg max-w-2xl mx-auto">
            Each tutorial pathway offers an intensive, enriching learning
            experience guided by experts from academia and industry.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tutorialHighlights.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee & Format Banner */}
      <section className="bg-gradient-to-r from-violet-700 via-purple-700 to-indigo-700 py-14 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-6 left-8">
            <Zap size={100} className="text-white" />
          </div>
          <div className="absolute bottom-6 right-8">
            <Layers size={80} className="text-white" />
          </div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10">
            Tutorial Day at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Total Duration", value: "6 Instructional Hours", sub: "Morning + Afternoon modules" },
              { label: "Registration Fee", value: "₹1,500", sub: "Complete tutorial day" },
              { label: "Hospitality", value: "Included", sub: "Lunch & refreshments provided" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
              >
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-2">
                  {stat.label}
                </p>
                <p className="text-3xl font-extrabold text-yellow-300 mb-1">{stat.value}</p>
                <p className="text-white/80 text-sm">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="bg-[#0f172a] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-10">
            <AlertCircle className="text-yellow-400" size={36} />
            <h2 className="text-4xl font-extrabold text-white">Important Notes</h2>
          </div>
          <ul className="space-y-4">
            {importantNotes.map((note, i) => (
              <li
                key={i}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5"
              >
                <CheckCircle className="text-yellow-400 shrink-0 mt-0.5" size={22} />
                <p className="text-gray-300 leading-relaxed">{note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Registration Process */}
      <section className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <CheckCircle className="text-yellow-300 mr-4 animate-pulse" size={44} />
            <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wide">
              Registration Process
            </h2>
          </div>
          <ol style={{ color: "black" }} className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl space-y-6">
            <li className="flex items-start gap-4">
              <span className="text-yellow-500 font-bold text-xl mt-0.5">1.</span>
              <p>
                Complete your payment of <strong>₹1,500</strong> through the available UPI / payment method. After payment, keep your proof of transaction ready.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-yellow-500 font-bold text-xl mt-0.5">2.</span>
              <p>
                Fill in the registration form and upload your payment proof via the{" "}
                <a
                  href={GOOGLE_FORM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  Registration Google Form →
                </a>
              </p>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-yellow-500 font-bold text-xl mt-0.5">3.</span>
              <p>
                The VDAT 2026 Organizing Committee will verify your submission and send a confirmation.{" "}
                <strong>Registration is confirmed only after this verification.</strong>
              </p>
            </li>
          </ol>

          <div className="mt-8 bg-white/15 border border-white/30 rounded-2xl p-6 flex items-center gap-4">
            <Calendar className="text-yellow-300 shrink-0" size={32} />
            <div>
              <p className="text-white font-bold text-lg">Registration Deadline</p>
              <p className="text-yellow-300 text-2xl font-extrabold">10th August 2026</p>
              <p className="text-white/70 text-sm mt-1">Ensure you register before the deadline to secure your spot.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-700 via-blue-700 to-cyan-700 py-16 px-4 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            🎯 Reserve Your Tutorial Spot!
          </h2>
          <p className="text-white/85 text-lg mb-8 leading-relaxed">
            Don&apos;t miss this opportunity to learn from the best. Select your
            pathway, register today, and make the most of VDAT 2026&apos;s expert-led
            full-day tutorials.
          </p>
          <a
            href={GOOGLE_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center px-12 py-5 bg-white text-purple-700 font-bold text-2xl rounded-full shadow-2xl hover:scale-105 transition-all duration-300 uppercase tracking-wide border-4 border-yellow-400"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-40 blur-sm group-hover:opacity-70 animate-pulse pointer-events-none" />
            <CircuitBoard className="mr-3 text-cyan-600 animate-pulse group-hover:animate-spin" size={30} />
            Register Now
            <ExternalLink className="ml-3 group-hover:translate-x-2 transition-transform" size={26} />
          </a>
          <p className="text-cyan-200 text-sm mt-6">
            Last date: <strong className="text-yellow-300">10th August 2026</strong>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TutorialRegistrationPage;
