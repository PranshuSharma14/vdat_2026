"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  BookOpen,
  Target,
  Users,
  CheckCircle,
  Play,
  Award,
  Lightbulb,
  Sun,
  Moon,
  Linkedin,
  Globe,
  ChevronDown,
  ChevronUp,
  User,
  MapPin,
  Star,
  Zap,
  Brain,
  Code,
  Layers,
  ArrowRight,
  Download,
  Share2,
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

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function EnhancedTutorialComponent({
  title = "",
  duration = "",
  speakers = [],
  format = "",
  abstract = "",
  domain = "",
  keywords = "",
  prerequisites = "",
  speakerBiographies = [],
  speakerLinkedIns = [],
  speakerWebsites = [],
  basicStructure = "",
  youtubeVideoId = "",
  videoType = "youtube",      // add this
  videoId = "",               // add this
}) {
  const [darkMode, setDarkMode] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [activeTab, setActiveTab] = useState("overview");
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

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const keywordList = keywords
    .split(",")
    .map((k) => k.trim())
    .filter((k) => k);

  return (
    <div className="whitespace-pre-line relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-900 transition-colors duration-700 min-h-screen">
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

      {/* Dark Mode Toggle
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
      </motion.button> */}

      {/* Hero Header */}
      <header className="relative overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-blue-900/90 to-indigo-900/95 backdrop-blur-sm" />
        <div
          className={`
    absolute inset-0
    bg-[url("data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E
      %3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E
        %3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E
          %3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E
        %3C/g%3E
      %3C/g%3E
    %3C/svg%3E")]
    opacity-50
  `}
        />

        <div className="relative z-10 px-8 py-24 text-center">
          {/* <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-block p-4 bg-white/10 backdrop-blur-lg rounded-2xl mb-6"
          >
            <Code className="w-12 h-12 text-white" />
          </motion.div> */}

          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-xl md:text-3xl lg:text-5xl font-black tracking-tight mb-6 text-white leading-tight"
          >
            {title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 text-lg text-white/90 max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full">
              <Clock className="w-5 h-5" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full">
              <Users className="w-5 h-5" />
              <span>
                {speakers.length} Speaker{speakers.length > 1 ? "s" : ""}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full">
              <BookOpen className="w-5 h-5" />
              <span>{format}</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="sticky top-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 mb-12"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {[
              { id: "overview", label: "Overview", icon: Target },
              { id: "content", label: "Content", icon: Layers },
              { id: "speakers", label: "Speakers", icon: User }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition-all duration-300 border-b-2 ${
                  activeTab === tab.id
                    ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                    : "border-transparent text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pb-16">
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {/* Quick Info Cards */}
              <motion.section
                variants={staggerChildren}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[
                  {
                    icon: Target,
                    label: "Domain",
                    value: domain,
                    gradient: "from-purple-500 to-pink-500",
                  },
                  {
                    icon: Award,
                    label: "Prerequisites",
                    value: prerequisites || "Basic knowledge recommended",
                    gradient: "from-green-500 to-emerald-500",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className="flex items-center mb-4 space-x-3">
                      <div
                        className={`p-3 bg-gradient-to-br ${item.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                        {item.label}
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </motion.section>

              {/* Keywords */}
              <motion.section
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="flex items-center mb-6 space-x-4">
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    Key Words
                  </h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {keywordList.map((keyword, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium border border-indigo-200 dark:border-indigo-700/50"
                    >
                      {keyword}
                    </motion.span>
                  ))}
                </div>
              </motion.section>

              {/* Abstract */}
              <motion.section
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="bg-gradient-to-br from-gray-50/80 to-blue-50/80 dark:from-gray-800/80 dark:to-blue-900/20 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                      Abstract
                    </h2>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleSection("abstract")}
                    className="p-2 rounded-full bg-white/50 dark:bg-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-600/80 transition-all duration-300"
                  >
                    {expandedSections.abstract ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </motion.button>
                </div>
                <AnimatePresence>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedSections.abstract ? "auto" : "120px",
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="prose dark:prose-invert max-w-none">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        {abstract}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.section>
            </motion.div>
          )}

          {activeTab === "speakers" && (
            <motion.div
              key="speakers"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.section
                variants={staggerChildren}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Meet the Experts
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-400">
                    Learn from industry leaders with decades of experience
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {speakers.map((speaker, i) => {
                    const bio = speakerBiographies[i] || "";
                    const linkedIn = speakerLinkedIns[i] || null;
                    const website = speakerWebsites[i] || null;

                    return (
                      <motion.div
                        key={i}
                        variants={fadeInUp}
                        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500"
                      >
                        <div className="flex items-start space-x-6 mb-6">
                          <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                              {speaker
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                              <Star className="w-4 h-4 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                              {speaker}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                              {linkedIn && (
                                <motion.a
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  href={linkedIn}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center space-x-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-all duration-300"
                                >
                                  <Linkedin className="w-4 h-4" />
                                  <span>LinkedIn</span>
                                </motion.a>
                              )}
                              {website && (
                                <motion.a
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  href={website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center space-x-2 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium hover:bg-indigo-200 dark:hover:bg-indigo-800/50 transition-all duration-300"
                                >
                                  <Globe className="w-4 h-4" />
                                  <span>Website</span>
                                </motion.a>
                              )}
                            </div>
                          </div>
                        </div>

                        {bio && (
                          <div className="relative">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                Biography
                              </h4>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => toggleSection(`bio-${i}`)}
                                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                              >
                                {expandedSections[`bio-${i}`] ? (
                                  <ChevronUp className="w-4 h-4" />
                                ) : (
                                  <ChevronDown className="w-4 h-4" />
                                )}
                              </motion.button>
                            </div>
                            <motion.div
                              initial={false}
                              animate={{
                                height: expandedSections[`bio-${i}`]
                                  ? "auto"
                                  : "100px",
                              }}
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                {bio}
                              </p>
                            </motion.div>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.section>
            </motion.div>
          )}

          {activeTab === "content" && (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.section
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="flex items-center mb-8 space-x-4">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    Tutorial Structure
                  </h2>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                  <div className="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed">
                    {basicStructure}
                  </div>
                </div>
              </motion.section>
            </motion.div>
          )}

          {activeTab === "outcomes" && (
            <motion.div
              key="outcomes"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.section
                variants={staggerChildren}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    What You'll Learn
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-400">
                    Comprehensive learning outcomes designed for your success
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {outcomesList.map((outcome, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      className="flex items-start gap-4 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-500"
                    >
                      <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mt-1">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                          {outcome}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Video Preview */}
        {youtubeVideoId && (
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-16 p-8 bg-gradient-to-br from-purple-50/80 to-indigo-50/80 dark:from-purple-900/20 dark:to-indigo-900/20 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50"
          >
            <div className="text-center mb-8">
              <div className="inline-block p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl mb-4">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Tutorial Preview
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get a sneak peek of what's in store
              </p>
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src={
              youtubeVideoId?.includes("http") // optional full link passed?
                ? youtubeVideoId
                : videoType === "gdrive"
                ? `https://drive.google.com/file/d/${videoId}/preview`
                : `https://www.youtube.com/embed/${videoId}`
            }
            title="Tutorial Preview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

          </motion.section>
        )}

        {/* Call to Action */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center"
        >
          
        </motion.section>
      </main>
    </div>
  );
}
